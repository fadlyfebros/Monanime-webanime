import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Chip } from "@nextui-org/react";

const page = async ({ params }) => {
  const { id } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/anime/${id}`)
  const api = await res.json();
  console.log(api);

  return (
    <>
      <Link href='/' className='underline'>Back</Link>
      <div className='flex flex-col justify-center w-full'>
          <h1 className='flex text-center justify-center text-xl lg:text-3xl font-semibold py-5'>{api.data.title}</h1>
          <div className="flex flex-wrap md:flex-nowrap space-x-5 px-0 lg:px-5 justify-start">
            <Image
              src={api.data.images.webp.large_image_url}
              alt={api.data.title}
              width={250}
              height={250}
              className='w-full h-auto lg:w-2/4 rounded-lg'
            />
            <div className='py-10 overflow-hidden space-y-5 flex flex-col'>
              <Chip variant='dot' color='warning'>Title : {api.data.title}</Chip>
              <Chip variant='dot' color='warning'>Japanese : {api.data.title_japanese}</Chip>
              <Chip variant='dot' color='warning'>Skor : {api.data.score}</Chip>
              <Chip variant='dot' color='warning'>Type : {api.data.type}</Chip>
              <Chip variant='dot' color='warning'>Status : {api.data.status}</Chip>
              <Chip variant='dot' color='warning'>Episodes : {api.data.episodes}</Chip>
              <Chip variant='dot' color='warning'>Duration : {api.data.duration}</Chip>
              <Chip variant='dot' color='warning'>Rating : {api.data.rating}</Chip>
              <Chip variant='dot' color='warning'>Year : {api.data.year}</Chip>
            </div>
          </div>

          <div className='p-0 lg:py-10 lg:px-20'>
            <Chip variant='dot' color='warning'>Synopsis</Chip>
            <p>{api.data.synopsis}</p>
          </div>

          <div className='py-10 lg:p-10 space-y-5 '>
            <h1 className=' uppercase text-2xl font-semibold'>Trailer</h1>
            <VideoPlayer youtubeId={api.data.trailer.youtube_id} />
          </div>

      </div>
    </>
  )
}

export default page