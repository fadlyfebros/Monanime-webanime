"use client";

import { useRef } from "react";

//icons
import { Button, Input } from "@nextui-org/react";
import { BiSearchAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function SearchButton() {

  const search = useRef()
  const router = useRouter()

  const handleSearch = (event) => {
    const keyword = search.current.value

    if(!keyword) return

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <>
      <Input
        ref={search}
        onKeyDown={handleSearch}
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "border-0",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: ["bg-transparent", "border-0"],
          inputWrapper: [
            "shadow-xl",
            "border-0",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Search..."
      />
      <Button
        onClick={handleSearch}
        variant="solid"
        className="mx-1 flex items-center shadow-lg bg-green-500"
      >
        <BiSearchAlt className="text-2xl text-white" />
      </Button>
    </>
  );
}
