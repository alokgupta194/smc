import RectangleImg from "../assets/images/RectangleImg.png";

export default function Founder() {
  return (
    <div className="bg-[#efe6d6] py-[100px]">

      <div className="max-w-[1100px] mx-auto relative flex items-center">

        {/* IMAGE (LEFT - OUTSIDE BOX) */}
        <div className="z-10">
          <img
            src={RectangleImg}
            className="w-[380px] h-[420px] object-cover rounded-[20px]"
          />
        </div>

        {/* RIGHT BOX */}
        <div className="ml-[-80px] flex-1 border border-[#c9a24b] rounded-[20px] pl-[120px] pr-[50px] py-[50px]">

          <h2 className="text-[32px] leading-[40px] font-semibold mb-[16px]">
            Meet The Founder
          </h2>

          <p className="text-[14px] text-gray-700 mb-[16px] leading-[20px]">
            Lakeisha Appleton <br />
            FNP-C, PMHNP- BC
          </p>

          <p className="text-[15px] text-gray-800 mb-[24px] leading-[24px]">
            “Mental health problems don’t define who you are. They are
            something you experience. You walk in the rain and you feel the
            rain but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
          </p>

          <button className="bg-gradient-to-r from-[#c9a24b] to-[#e6c873] px-[26px] py-[10px] rounded-full text-[14px] font-medium">
            Learn More →
          </button>

        </div>

      </div>

    </div>
  );
}