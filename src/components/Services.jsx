import HumanBrain from "../assets/images/human-brain.png";
export default function Services() {
  return (
    <div className="bg-[#efe6d6] py-20 text-center">

      <h2 className="text-3xl mb-12">Our Services</h2>

      <div className="flex flex-wrap justify-center gap-4">

        {["Psychiatric", "Medication", "Supportive", "ADHD", "WFT", "Gene"].map((item) => (

          <div className="text-center w-[90px]">

            <div className="w-12 h-12 mx-auto rounded-full border border-[#c9a24b] flex items-center justify-center">
              <img src={HumanBrain} alt={item} className="w-6 h-6" />
            </div>

            <p className="text-[11px] mt-2 leading-tight">
              {item}
            </p>

          </div>

        ))}

      </div>

      <button className="mt-10 bg-[#c9a24b] px-6 py-2 rounded-full">
        View our services
      </button>
    </div>
  );
}