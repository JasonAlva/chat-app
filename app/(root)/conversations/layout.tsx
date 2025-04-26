import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const ConversationLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ConversationLayout;
