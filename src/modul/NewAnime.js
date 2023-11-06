import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import ScrollShadow from "@/components/ScrollShadow";
import Image from "next/image";
import Link from "next/link";

const NewAnime = async () => {

  const res = await fetch('https://api.jikan.moe/v4/anime')
  const newAnime = await res.json();
  
  return (
    <>
      <ScrollShadow height={300}>
        {newAnime.data?.map(data => (
          <Link href="#" className="cursor-pointer">
            <Card className="py-1 my-2 mx-1">
              <Image
                alt="Card background"
                className="card-newAnime object-cover rounded-xl h-auto w-auto mx-2"
                src={data.images.webp.image_url}
                width={60}
                height={60}
              />
              <CardFooter className="absolute flex flex-col top-0 w-3/5 h-full right-0 text-start">
                <h4 className="flex w-full text-start font-bold text-sm">{data.title}</h4>
                <small className="text-default-500 flex w-full text-start">{data.episodes} Episode</small>
                <p className="text-[10px] flex h-full text-start items-end">{data.broadcast.string}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ScrollShadow>
    </>
  )
}

export default NewAnime