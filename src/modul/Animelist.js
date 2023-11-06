import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, CardFooter, CardHeader, LinkIcon } from "@nextui-org/react";

export default function Animelist({ api, title, allAnime }) {
  return (
    <>
      <div className="flex justify-between items-center h-full w-full">
        <h1 className="text-xl uppercase font-semibold py-2">{title}</h1>
        <Link href='./allAnime' className={`${allAnime} underline hover:text-gray-500`}>See All</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 w-full lg:w-4/5 xl:w-full">
        {api.data?.map(data => (
          <Link href={`/detail/${data.mal_id}`}>
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <Image
                alt={data.title}
                className="card object-cover w-full h-auto"
                height={200}
                src={data.images.webp.image_url}
                width={200}
              />
              <CardFooter
                className="justify-between bg-black/20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{data.title}</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  {data.episodes ? data.episodes : '0'} Eps
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}