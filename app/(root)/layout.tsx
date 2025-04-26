import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ name: string }>;

const layout = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default layout;
