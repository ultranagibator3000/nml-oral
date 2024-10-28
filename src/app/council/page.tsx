'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { unbounded_bold, unbounded_semibold, unbounded } from '@/components/ui/fonts';
import DarkModeToggle from '@/components/ui/dmtoggle';
import { HeaderC } from '@/components/ui/header_council';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white" >
      <HeaderC />
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-6xl p-8">
            <div className="flex flex-col items-start space-y-6">
              <h1 className="text-5xl font-bold text-black">
                Welcome to NIS Student Council
              </h1>
              <p className="text-xl text-gray-700">
                Be the part of school life
              </p>
              <div className="space-x-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Start now
                </button>
                <button className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                  Contact us
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="w-full h-full bg-blue-300 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
