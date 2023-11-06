import React from "react";
import {User} from "@nextui-org/react";

export default function App() {
  return (
    <User   
      name="Andi karna"
      description="Owner Nownime"
      avatarProps={{
        src: "/andi.png"
      }}
    />
  );
}
