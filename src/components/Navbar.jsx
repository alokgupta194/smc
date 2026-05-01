export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-black text-white">

      <h1 className="text-lg font-semibold">Ada Psychiatry</h1>

      <div className="hidden md:flex gap-8 text-sm">
        <a>Who we are</a>
        <a>Who we treat</a>
        <a>Services</a>
        <a>Resources</a>
      </div>

      <button className="bg-[#c9a24b] text-black px-5 py-2 rounded-full text-sm">
        Book an Appointment
      </button>
    </div>
  );
}