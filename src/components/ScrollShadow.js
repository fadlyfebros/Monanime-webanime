import React from "react";
import {ScrollShadow} from "@nextui-org/react";

  
export default function App({children,height}) {
  return (
    <ScrollShadow hideScrollBar className={`w-full h-[230px]`}>
      {children}
    </ScrollShadow>
  )
}