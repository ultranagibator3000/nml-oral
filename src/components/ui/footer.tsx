'use client'
import { Unbounded } from 'next/font/google'

export const unbounded_bold = Unbounded({ 
    style: ['normal'],
    weight: "800",
    subsets: ['latin']
});
export const unbounded = Unbounded({ 
    style: ['normal'],
    weight: "300",
    subsets: ['latin']
});
export const unbounded_semibold = Unbounded({ 
    style: ['normal'],
    weight: "600",
    subsets: ['latin']
});

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black border-t dark:text-yellow-400 text-black mt-8 md:mt-12 p-4 md:p-6 w-full">
            <div className={`${unbounded_semibold.className} max-w-7xl mx-auto px-4`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                    <div className='flex flex-col gap-6 md:gap-12'>
                        <a href="./council" className="text-base md:text-lg font-medium">NIS Council Oral</a>
                        <p className="text-base md:text-lg font-medium">Powered by MofD</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="text-sm hover:text-gray-400 py-2">Help</a>
                        <a href="#" className="text-sm hover:text-gray-400 py-2">Terms</a>
                        <a href="#" className="text-sm hover:text-gray-400 py-2">Creators</a>
                        <a href="#" className="text-sm hover:text-gray-400 py-2">Report a problem</a>
                    </div>
                    <div className="flex flex-col font-semibold gap-4">
                        <a href="https://www.instagram.com/nml_oral" target="_blank" rel="noopener noreferrer" className="flex items-center text-base md:text-lg dark:text-yellow-400 hover:text-gray-500 gap-2">
                            <img
                                src="/instagram.png"
                                alt="Instagram"
                                className="dark:hidden h-4 w-4 md:h-5 md:w-5"
                            />
                            Instagram
                        </a>
                        <a href="https://github.com/coderfromaksay/niscouncil/" target="_blank" rel="noopener noreferrer" className="flex items-center text-base md:text-lg dark:text-yellow-400 hover:text-gray-500 gap-2">
                            <img
                                src="/github.png" 
                                alt="GitHub"
                                className="dark:hidden h-4 w-4 md:h-5 md:w-5"
                            />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
