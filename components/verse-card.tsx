import { amharicFont } from '@/fonts/fonts'
import localFont from 'next/font/local'

interface VerseCardProps {
  text: string
  reference: string
}

export default function VerseCard({ text, reference }: VerseCardProps) {
  return (
    <div className={`relative max-w-[220px] ${amharicFont.className}`}>
      {/* Subtle animated glow */}
      <div className="absolute -inset-[5px] rounded-3xl bg-primary/20 blur-xl" />
      
      {/* Animated gradient border with conic gradient for smooth rotation */}
      <div className="relative rounded-3xl p-[1px] overflow-hidden bg-primary/20">
        {/* <div 
          className="absolute inset-0 animate-spin-very-slow"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, oklch(0.1948 0.0741 256.26 / 20), transparent 90deg, oklch(0.1948 0.0741 256.26 / 20) 180deg, transparent 270deg, oklch(0.1948 0.0741 256.26 / 20))',
          }}
        /> */}
        
        {/* Card Content */}
        <div className="relative bg-background rounded-[calc(1.5rem-2px)] py-2 px-4">
          {/* Verse Text */}
          <p className="text-foreground text-[20px] font-medium">“ {text} “</p>

          {/* Verse Reference */}
          <div className="text-right">
            <span className="text-primary text-[20px]">{reference}</span>
          </div>
        </div>
      </div>
    </div>
  )
}