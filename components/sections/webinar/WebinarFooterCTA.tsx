const bookingUrl = "https://cal.com/pixelops/15min";

const stars = [
  ["left-[4%] top-[14%]", "+"],
  ["left-[10%] top-[36%]", "+"],
  ["left-[16%] top-[28%]", "+"],
  ["left-[22%] top-[18%]", "·"],
  ["left-[28%] top-[52%]", "·"],
  ["left-[34%] top-[24%]", "+"],
  ["left-[42%] top-[10%]", "·"],
  ["left-[48%] top-[42%]", "+"],
  ["left-[56%] top-[16%]", "·"],
  ["left-[61%] top-[31%]", "+"],
  ["left-[68%] top-[58%]", "+"],
  ["left-[76%] top-[20%]", "·"],
  ["left-[83%] top-[48%]", "·"],
  ["left-[90%] top-[25%]", "+"],
  ["left-[96%] top-[72%]", "·"],
] as const;

export default function WebinarFooterCTA() {
  return (
    <footer className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-lg bg-[#C4625C] px-6 py-12 text-center text-white sm:px-10 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(110%_90%_at_-10%_120%,#ED6B5C_0%,#ED6B5C_48%,transparent_49%),linear-gradient(120deg,rgba(255,255,255,0.07),transparent_45%)]"
          />
          {stars.map(([position, symbol]) => (
            <span
              key={position}
              aria-hidden="true"
              className={`absolute ${position} font-sans text-lg font-bold leading-none text-white/75`}
            >
              {symbol}
            </span>
          ))}

          <div className="relative z-10 mx-auto max-w-[520px] font-sans font-bold">
            <p className="text-base uppercase tracking-[0.03em]">Contact Us</p>
            <p className="mt-7 text-base">Questions?</p>
            <p className="mt-7 text-base">
              Email us:{" "}
              <a
                href="mailto:hello@pixelops.com"
                className="underline decoration-white/70 underline-offset-2 transition hover:text-white/80"
              >
                hello@pixelops.com
              </a>
            </p>
            <p className="mt-7 text-base">or</p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-10 items-center justify-center rounded-full px-5 py-2 text-base text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#C4625C]"
            >
              Book a 20mins call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
