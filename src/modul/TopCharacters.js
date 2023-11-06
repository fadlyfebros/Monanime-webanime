import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import ScrollShadow from "@/components/ScrollShadow";
import Image from "next/image";
import Link from "next/link";
import { BiSolidStar } from "react-icons/bi";

const TopCharacters = async () => {

  const res = await fetch('https://api.jikan.moe/v4/top/characters')
  const newAnime = await res.json();

  return (
    <>
      <ScrollShadow >
        {newAnime.data?.map(data => (
          <Link href="#" className="cursor-pointer">
            <Card className="py-1 my-2 mx-1">
              <Image
                alt="Card background"
                className="card-newAnime object-cover rounded-xl h-auto  mx-2"
                src={data.images.webp.image_url}
                width={60}
                height={60}
              />
              <CardFooter className="absolute flex flex-col top-0 w-3/5 h-full right-0 text-start">
                <h4 className="flex w-full text-start font-bold text-sm">{data.name}</h4>
                <p className="text-default-500 text-[10px] flex w-full text-start">{data.name_kanji}</p>
                <div className="flex h-full w-full items-end text-start">
                  <p className="flex text-sm items-center">
                    <BiSolidStar className=" text-yellow-300 text-lg flex items-center" />
                    {data.favorites}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ScrollShadow>
    </>
  )
}

export default TopCharacters