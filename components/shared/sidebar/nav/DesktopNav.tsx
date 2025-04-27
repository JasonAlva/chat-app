"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import useNavigation from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";

const DesktopNav = () => {
  const paths = useNavigation();
  return (
    <Card className="hidden lg:flex lg:flex-col lg:px-4 lg:h-full lg:w-16 lg:justify-between lg:items-center ">
      <nav>
        <ul className="flex flex-col items-center gap-4">
          {paths.map((path, id) => (
            <li key={id}>
              <Link href={path.href}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      size="icon"
                      variant={path.active ? "default" : "outline"}
                    >
                      <path.icon />
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-4">
        <UserButton />
      </div>
    </Card>
  );
};

export default DesktopNav;
