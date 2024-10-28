'use client'
import Image from 'next/image'
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { unbounded_bold, unbounded_semibold} from '@/components/ui/fonts';

export default function Example() {
  return (
    <div className="dark:bg-black bg-white min-h-screen flex flex-col">
      <Header />
      <div className="relative isolate px-6 pt-24 lg:px-8 flex-1">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className='w-full'>
            <Image
              src="/hero.png"  
              alt="Example Image"
              width={2681}             
              height={1500}              
            />
          </div>
        </div>
        <div className="p-12 justify-between w-full flex flex-col">
            <h2 className={`${unbounded_bold.className} dark:text-yellow-400 antialiased leading-10 font-bold mt-12 tracking-tighter text-gray-900 text-5xl`}>
              About tournament
            </h2>
        </div>
        <div className='inline-block align-baseline p-12 space-y-8  lg:text-medium -my-6'>
            <p className={`${unbounded_semibold.className} dark:text-yellow-400 antialiased -mt-12 -space-y-8 leading-8 font-medium w-1/2 antialiased text-black text-lg`}>
              NIS Media League -  школьный футбольный турнир для команд учеников, основанная в НИШ ФМН г. Алматы. Ученики сами основывают клуб и продвигают его с помощью трансферов. С 2024 года NML действует в НИШ ФМН г. Уральск под руководством президента и департамента спорта.
            </p>
            <p className={`${unbounded_semibold.className}  dark:text-yellow-400 antialiased mt-8 font-bold leading-8 antialiased font-medium w-96 text-black text-lg`}>
            NML Oral - член ассоциации NIS Football Association. На данный момент данный проект запущен в 6-ти школах сети НИШ.
            </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
