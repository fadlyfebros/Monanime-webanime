import Animelist from "@/modul/Animelist";
import Link from "next/link";

const Page = async ({ params }) => {
  const { keyword }  = params
  const key = decodeURI(keyword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/anime?q=${key}`);
  const searchAnime = await response.json();
  return (
    <div>
      <Link href='/' className='underline'>Back</Link>
      <Animelist title={`Pencarian untuk : ${key}`} api={searchAnime} allAnime="hidden" />
    </div>
  )
}

export default Page
