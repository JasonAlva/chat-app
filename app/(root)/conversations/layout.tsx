import ItemList from "@/components/shared/item-list/ItemList";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const ConversationLayout = ({ children }: Props) => {
  return (
    <>
      <ItemList title="Conversations">Conversations Page</ItemList>
      {children}
    </>
  );
};

export default ConversationLayout;
