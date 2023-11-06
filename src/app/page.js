"use client";

import Animelist from "@/modul/Animelist";
import { useEffect, useState } from "react";

const Home = () => {

  const [datas, setDatas]=useState([])

  const fetchData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/top/anime?limit=8`);
    const api = await res.json();
    setDatas(api)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <Animelist title="Top Movie" api={datas} />
    </>
  )
}

export default Home
