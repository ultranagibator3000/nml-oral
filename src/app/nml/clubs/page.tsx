'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/ui/footer';
import { unbounded, unbounded_bold } from '@/components/ui/fonts';
import { Header } from '@/components/ui/header';

export default function Clubs() {
  return (
    <div className="dark:bg-black bg-white  min-h-screen flex flex-col">
      <Header />
      <div className="relative isolate px-6 pt-24 lg:px-8 flex-1">
        <div className="w-full flex flex-col gap-12 items-center justify-center px-6 lg:px-8">
            <h1 className={`${unbounded_bold.className} antialiased dark:text-yellow-400 text-center mt-12 text-black text-5xl font-extrabold`}>Clubs</h1>
            <p className={`${unbounded.className} antialiased dark:text-yellow-400 text-center mx-auto mt-12 text-black text-3xl font-extrabold`}>Coming Soon...</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
