import { SegmentedButton } from "@/components/buttons/segmented-button"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/10"
            style={{
              left: `${(i + 1) * (100 / 12)}%`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 lg:p-8">
        <div className="w-16 h-16">
          <Image src="/images/logo.png" alt="H+ Logo" width={64} height={64} className="object-contain" />
        </div>
        {/* <SegmentedButton 
          variant="default" 
          size="lg" 
          icon={ShoppingCart}
        >
          Pre-order Now
        </SegmentedButton> */}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl mb-8 lg:mb-0">
          <h1 className="text-6xl lg:text-7xl leading-tight mb-12">
            <span className="font-normal">Pre-order to be</span>
            <br />
            <span className="font-normal">launched</span>
            <br />
            <span className="font-bold text-white">Soon</span>
          </h1>

          {/* Music Platforms */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">FIND MY MUSIC ON</p>
            <div className="flex gap-4">
              {/* YouTube */}
              <Link href="#" className="w-10 h-10  overflow-hidden hover:scale-110 transition-transform pt-1">
                <Image src="/images/youtube.png" alt="YouTube" width={40} height={40} className="object-cover" />
              </Link>

              {/* Spotify */}
              <Link href="#" className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <Image src="/images/spotify.png" alt="Spotify" width={40} height={40} className="object-contain" />
              </Link>

              {/* Apple Music */}
              <Link href="#" className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <Image
                  src="/images/apple-music.png"
                  alt="Apple Music"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>

              {/* SoundCloud */}
              <Link href="#" className="w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform">
                <Image
                  src="/images/cd-baby.png"
                  alt="SoundCloud"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
            
            {/* Abet Solution Credit */}
            <div className="flex items-center gap-3 mt-14">
              <Image src="/images/abet logo.png" alt="Abet Solution" width={50} height={50} className="object-contain" />
              <p className="text-lg text-gray-400 font-normal">Crafted By Abet Solution</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-orange-500 my-8 lg:hidden"></div>

        {/* Right Side - Book Cover */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <div className="relative mb-8">
            {/* Glow effect behind the book */}
            <div className="absolute inset-0 w-[400px] h-[500px] bg-[#A37535] blur-3xl opacity-30 rounded-full"></div>
            <Image src="/images/book-cover.png" alt="Book Cover" width={400} height={500} className="object-contain relative z-10" />

            {/* Orange accent line */}
            <div className="absolute -left-8 top-1/2 w-1 h-32 bg-orange-500 transform -translate-y-1/2"></div>
          </div>

          <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 max-w-sm backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold">SIGNED AUTOGRAPH</h3>
            </div>
            <p className="text-gray-300 text-sm">The First Orders Will Come With Exclusive AutoGraph Signed Books!</p>
          </div>
        </div>
      </main>
    </div>
  )
}
