import Image from "next/image";

const solutionImage = "/assets/webinar/image-217-e736b0e7.svg";

export default function WebinarSolution() {
  return (
    <section className="bg-white px-5 py-12 sm:px-0 sm:py-16 lg:py-12">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-[24px] bg-brand-paper sm:min-h-[360px] lg:order-1 lg:h-full lg:min-h-0">
            <Image
              src={solutionImage}
              alt="Webinar video being repurposed on a laptop"
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), calc(50vw - 108px)"
              className="object-cover"
            />
          </div>

          <div className="lg:order-2">
            <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
              Solution
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,8vw,2.625rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-[42px] sm:leading-[50px] lg:text-[45px] lg:leading-[54px]">
              Your Webinar Repurposing Engine—Delivered in 7 Days
            </h2>
            <p className="mt-5 font-sans text-base leading-7 text-scraped-steel sm:text-lg lg:text-[22px] lg:leading-[1.45]">
              PixelOps is your dedicated design team for turning webinars into
              multi-platform content assets.
            </p>
            <p className="mt-7 font-sans text-base leading-7 text-scraped-steel sm:text-lg lg:text-[20px] lg:leading-[1.45]">
              In just 7 days, we take your raw recording and transform it
              through a collaborative process. We begin by extracting the core
              insights and strategizing the content rollout, then move into our
              design phase where we craft your premium PDF guide, carousel sets,
              and social media creatives. You&apos;ll have a dedicated review
              period to provide feedback, which we quickly incorporate to
              finalize your entire suite of publication-ready assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
