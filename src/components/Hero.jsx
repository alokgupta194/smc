import HeroPng from "../assets/images/homePageHero.png"
export default function Hero() {
  return (
    <div className="relative h-[650px]">

      <img src={HeroPng} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center">
        
        <div className="pl-6 md:pl-20 max-w-[520px] text-white">

          <h1 className="text-[32px] md:text-[52px] leading-tight md:leading-[60px] font-semibold">
            NEED A MENTAL <br /> HEALTH PROVIDER?
          </h1>

          <p className="mt-4 text-sm md:text-[14px] text-gray-200">
            You look further...
          </p>

          <button className="btn-gold mt-6 text-black">
            Learn More →
          </button>

        </div>

      </div>
    </div>
  );
}