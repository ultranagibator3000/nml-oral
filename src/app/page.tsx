'use client'
import Image from 'next/image'
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { unbounded_bold, unbounded_semibold } from '@/components/ui/fonts';

export default function Example() {
  return (
    <div className="dark:bg-black bg-white min-h-screen flex flex-col">
      <Header />
      <div className="relative isolate px-4 md:px-6 pt-16 md:pt-24 lg:px-8 flex-1">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="relative w-full h-48 md:h-96 lg:h-[500px]">
            <Image
              src="/hero.png"
              alt="Example Image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="p-6 md:p-12 justify-between w-full flex flex-col">
          <h2 className={`${unbounded_bold.className} antialiased dark:text-yellow-400 antialiased leading-10 font-bold mt-8 tracking-tighter text-gray-900 text-3xl md:text-4xl lg:text-5xl`}>
            About tournament
          </h2>
        </div>
        <div className="inline-block align-baseline p-6 md:p-12 space-y-8 lg:text-medium my-4 md:my-6">
          <p className={`${unbounded_semibold.className} antialiased dark:text-yellow-400 antialiased font-medium leading-8 text-black text-base md:text-lg w-full md:w-3/4 lg:w-1/2`}>
            NIS Media League - школьный футбольный турнир для команд учеников, основанная в НИШ ФМН г. Алматы. Ученики сами основывают клуб и продвигают его с помощью трансферов. С 2024 года NML действует в НИШ ФМН г. Уральск под руководством президента и департамента спорта.
          </p>
          <p className="dark:text-yellow-400 antialiased font-bold leading-8 font-medium text-black text-base md:text-lg w-full md:w-3/4 lg:w-96">
            NML Oral - член ассоциации NIS Football Association. На данный момент данный проект запущен в 6-ти школах сети НИШ.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
