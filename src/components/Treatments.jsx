import Tes from "../assets/images/tes.png";

export default function Treatments() {
    return (
        <div className="bg-[#efe6d6] py-24">

            {/* Heading */}
            <h2 className="text-center text-[28px] font-medium mb-5">
                Our Treatment Focus
            </h2>

            <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10 space-y-20">

                {/* ROW 1 */}
                <div className="flex items-center gap-16">

                    {/* Image */}
                    <img
                        src={Tes}
                        className="w-[180px] h-[180px] rounded-full border-[6px] border-[#e8dcc7] object-cover"
                    />

                    {/* Content */}
                    <div className="max-w-[420px]">
                        <h3 className="text-[18px] font-semibold mb-2">
                            Mental Health
                        </h3>

                        <p className="text-[13px] text-gray-700 leading-[22px]">
                            Mental health is our emotional, psychological, and social well-being.
                            It affects how we think, feel, and act. It also helps determine how we
                            handle stress, relate to others, and make healthy life decisions.
                            Mental health is important at every stage of life, from childhood and
                            adolescence through adulthood.
                        </p>

                        <button className="mt-4 text-[12px] bg-[#c9a24b] px-4 py-1.5 rounded-full">
                            Learn More →
                        </button>
                    </div>

                </div>

                {/* ROW 2 */}
                <div className="flex items-center justify-end gap-16">

                    {/* Content */}
                    <div className="max-w-[420px] text-right">
                        <h3 className="text-[18px] font-semibold mb-2">
                            Addiction And Recovery
                        </h3>

                        <p className="text-[13px] text-gray-700 leading-[22px]">
                            Addiction is a chronic dysfunction of the brain system that involves
                            reward, motivation, and memory. An individual experiencing addiction
                            will have difficulty staying away from substances or behaviors, despite
                            negative consequences. With proper treatment and support, recovery is
                            possible and individuals can regain control over their lives.
                        </p>

                        <button className="mt-4 text-[12px] bg-[#c9a24b] px-4 py-1.5 rounded-full">
                            Learn More →
                        </button>
                    </div>

                    {/* Image */}
                    <img
                        src={Tes}
                        className="w-[180px] h-[180px] rounded-full border-[6px] border-[#e8dcc7] object-cover"
                    />

                </div>

                {/* ROW 3 */}
                <div className="flex items-center gap-16">

                    <img
                        src={Tes}
                        className="w-[180px] h-[180px] rounded-full border-[6px] border-[#e8dcc7] object-cover"
                    />

                    <div className="max-w-[420px]">
                        <h3 className="text-[18px] font-semibold mb-2">
                            Supervised Medical Weight Loss
                        </h3>

                        <p className="text-[13px] text-gray-700 leading-[22px]">
                            The primary indicator of obesity is when a person’s body mass index (BMI)
                            is over a higher range. Medically supervised weight loss is a program
                            designed for individuals who want to lose weight safely and effectively.
                            Our program offers supervision, FDA-approved medications, and lifestyle
                            guidance to help patients achieve lasting results.
                        </p>

                        <button className="mt-4 text-[12px] bg-[#c9a24b] px-4 py-1.5 rounded-full">
                            Learn More →
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}