import React from "react";
import {User} from "@nextui-org/react";

export default function App() {
  return (
    <User   
      name="Fadly Febro"
      description="Owner Monanime"
      avatarProps={{
        src: "/fadly.jpeg"
      }}
    />
  );
}
