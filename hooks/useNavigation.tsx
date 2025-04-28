import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MessageSquare, User } from "lucide-react";

const useNavigation = () => {
  const pathname = usePathname();
  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <MessageSquare />,
        active: pathname.startsWith("/conversations"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <User />,
        active: pathname.startsWith("/friends"),
      },
    ],
    [pathname]
  );
  return paths;
};

export default useNavigation;
