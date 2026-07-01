export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
      
      <div className="bg-white rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 py-8 w-[320px] text-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-[18px] font-semibold mt-5 text-black">
          Rishi Jalan
        </h1>

        {/* Role */}
        <p className="text-gray-500 text-[14px] mt-1">
          Head - People
        </p>

        {/* Buttons */}
        <div className="mt-7 space-y-3">
          
          {/* Call Button */}
          <a
            href="tel:9876543210"
            className="block bg-black text-white py-3 rounded-xl text-[14px] font-medium active:scale-95 transition"
          >
            Call
          </a>

          {/* Email */}
          <a
            href="mailto:rishi@gostops.com"
            className="block border border-gray-300 py-3 rounded-xl text-[14px] text-gray-700 active:scale-95 transition"
          >
            Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="block border border-gray-300 py-3 rounded-xl text-[14px] text-gray-700 active:scale-95 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  );
}