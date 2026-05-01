import RectangleImg from "../assets/images/tes.png";

export default function WhyUs() {
  return (
    <div className="bg-[#efe6d6] py-[100px] px-10">

      <div className="max-w-[1100px] mx-auto flex items-center gap-[60px]">

        {/* IMAGE WITH BORDER FRAME */}
        <div className="relative">
          
          <img
            src={RectangleImg}
            className="w-[520px] h-[320px] object-cover rounded-[6px]"
          />

          {/* Golden frame */}
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#c9a24b] rounded-[6px] z-[-1]" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          <h2 className="text-[32px] leading-[40px] font-semibold mb-8">
            Why Should You Choose <br /> Ada Psychiatry?
          </h2>

          {/* LIST */}
          <div className="space-y-4">

            {/* Item 1 (open) */}
            <div className="pb-4 border-b border-[#d8cbb3]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#c9a24b] text-lg">—</span>
                <p className="font-medium text-[15px]">
                  Convenient access
                </p>
              </div>

              <p className="text-[13px] text-gray-700 leading-[20px] ml-6">
                We Offer In-Person And Virtual Psychiatry Services Where You Can Meet 
                Your Provider In Person Or At The Convenience Of Your Own Home.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b border-[#d8cbb3] pb-3">
              <p className="text-[15px]">Concierge approach</p>
              <span className="text-[#c9a24b] text-lg">+</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between border-b border-[#d8cbb3] pb-3">
              <p className="text-[15px]">High quality service</p>
              <span className="text-[#c9a24b] text-lg">+</span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center justify-between pb-3">
              <p className="text-[15px]">Trusted and empathic providers</p>
              <span className="text-[#c9a24b] text-lg">+</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}