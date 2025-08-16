import { Heading } from "@/components/heading";
import { shiromedaRegular } from "@/fonts/fonts";
import { cn } from "@/lib/utils";

const SocialIcon = ({ href, label, platform }: {
  href: string;
  label: string;
  platform: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-10 h-10 md:w-12 md:h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/40 transform hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    <img
      src={`/images/${platform}.png`}
      alt={label}
      className="w-5 h-5 md:w-6 md:h-6 object-contain group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-xs text-muted-foreground whitespace-nowrap bg-card px-2 py-1 rounded shadow-sm border border-border">
        {label}
      </span>
    </div>
  </a>
);

export default function ComingSoonPage() {
  return (
    <div className="h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden">
        <div className="absolute right-0 top-0 h-full w-3/5 bg-gradient-to-l from-transparent via-background/20 to-background z-10"></div>
        <img
          src="images/hero-image2.png"
          alt="Zeritu Kebede - Gospel Singer"
          className="absolute right-0 top-0 h-full w-auto object-cover object-left opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center">
        {/* Zeritu's Logo - Artistic placement */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <div className="relative group">
            <div className="absolute bg-primary/10 rounded-full blur-lg"></div>
            <img
              src="/images/logo.png"
              alt="Zeritu Kebede"
              className="relative w-12 h-12 md:w-16 md:h-16 object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full py-20">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 relative z-20">
            {/* Header */}
            <div className="space-y-4 md:space-y-6">
              <div className="relative inline-block">
                <Heading
                  as="h1"
                  size="4xl"
                  className="text-primary font-black tracking-wider relative z-10 drop-shadow-sm"
                >
                  ZERITU KEBEDE
                </Heading>
                <div className="absolute -bottom-1 md:-bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 md:h-2 bg-secondary w-32 md:w-48 mx-auto lg:mx-0 rounded-full"></div>
              </div>

              <div className="space-y-3">
                <Heading
                  as="h2"
                  size="xl"
                  className="text-primary font-light tracking-wide"
                >
                  Love is what my life is for❣️
                </Heading>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                  <span className="text-sm md:text-base font-medium">
                    Spreading God&apos;s Love Through Music
                  </span>
                </div>
              </div>
            </div>

            {/* Special offer card with book image */}
            <div className="relative w-full h-[150px] sm:h-[200px] md:h-[200px] overflow-hidden shadow-2xl bg-gradient-to-r from-black via-black/90 to-black/80 rounded-2xl max-w-md md:max-w-xl mx-auto lg:mx-0">
              {/* Mobile Layout - Full Screen */}
              <div className="md:hidden flex flex-col h-full">
                {/* Background Image for Mobile */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/Books.png"
                    alt="Books display"
                    className="w-full h-full object-cover object-center opacity-30"
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-center h-full p-4 sm:p-6">
                  <div className="space-y-3">
                    <Heading as="h3" className="text-secondary font-medium tracking-wide text-lg sm:text-xl">
                      Launch Blessing
                    </Heading>
                    <Heading as="h1" className={cn(
                        "text-white font-normal leading-tight flex items-center gap-1 text-2xl sm:text-3xl",
                        shiromedaRegular.className
                      )}
                    >
                      ከልጅነት{" "}
                      <span className="text-secondary text-xl sm:text-2xl">
                        እስከ
                      </span>{" "}
                      ልጁነት
                    </Heading>
                    <p className="text-gray-100 text-sm sm:text-base leading-relaxed ">
                      The first 100 orders will receive a personally autographed
                      signed book!
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden md:flex h-full">
                {/* Left Section - Content */}
                <div className="flex-1 flex flex-col justify-center p-6 relative">
                  <div className="space-y-4">
                    <Heading  as="h3" size={'lg'} className="text-secondary font-medium tracking-wide text-xl">
                      Launch Blessing
                    </Heading>
                    <h1
                      className={cn(
                        "text-white font-normal leading-tight flex items-center gap-2 text-3xl lg:text-4xl",
                        shiromedaRegular.className
                      )}
                    >
                      ከልጅነት{" "}
                      <span className="text-secondary text-xl lg:text-2xl">
                        እስከ
                      </span>{" "}
                      ልጁነት
                    </h1>
                    <p className="text-muted-foreground text-sm lg:text-base leading-tight font-plus-jakarta-sans">
                      The <span className="text-secondary">first 100</span> orders will receive a personally autographed
                      signed book!
                    </p>
                  </div>
                </div>

                {/* Right Section - Book Image */}
                <div className="flex-1 relative">
                  <div className="relative w-full h-full">
                    <img
                      src="/images/Books.png"
                      alt="Books display"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                  </div>
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-amber-600/30 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Streaming platforms */}
            <div className="space-y-4 flex flex-col w-full items-center">
              <Heading
                as="h3"
                size="lg"
                className="text-foreground font-semibold"
              >
                Find My Music On
              </Heading>
              <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 flex-wrap">
                <SocialIcon href="#" label="YouTube" platform="youtube" />
                <SocialIcon href="#" label="Spotify" platform="spotify" />
                <SocialIcon
                  href="#"
                  label="Apple Music"
                  platform="apple-music"
                />
                <SocialIcon href="#" label="CD Baby" platform="cd-baby" />
              </div>
            </div>

            {/* Coming soon indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-3 opacity-80">
              {/* <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-secondary rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <p className="text-muted-foreground text-sm md:text-base font-medium">
                New music and ministry experience coming soon
              </p> */}
            </div>
          </div>

          {/* Right side - Large Direct Image (Desktop Only) */}
          <div className="hidden lg:flex items-end justify-center relative h-full">
            <div className="relative -bottom-24">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl transform scale-110"></div>

              {/* Main image - larger and extending to bottom */}
              <div className="relative z-10">
                <img
                  src="images/hero-image2.png"
                  alt="Zeritu Kebede - Gospel Singer"
                  className="w-full max-w-4xl xl:max-w-5xl h-auto object-cover rounded-t-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Website Credit */}

{/* Footer - Website Credit */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/abet-logo2.png"
              alt="Abet Solutions"
              className="w-8 h-8 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col items-center">
              <p className="text-primary text-xs md:text-sm font-medium tracking-wide">
                Crafted by Abet Solutions
              </p>
              <p className="text-muted-foreground text-xs opacity-75">
                Professional Web Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
