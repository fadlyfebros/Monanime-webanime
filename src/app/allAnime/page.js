"use client";

import Pagination from '@/components/Pagination';
import Animelist from '@/modul/Animelist';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function page() {

  const [ page , setPage ] = useState(1);
  const [ data , setData ] = useState([]);

  const fetchData = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/top/anime?page=${page}`);
    const api = await res.json();
    setData(api)
  }

  useEffect(()=>{
    fetchData();
  },[page]);
  
  return (
    <div>
      <Link href='/' className='underline'>Back</Link>
      <Animelist title="All Movie" api={data} allAnime="hidden"/>
      <Pagination page={page} lastPage={data.pagination?.last_visible_page} setPage={setPage} />
    </div>
  )
}
