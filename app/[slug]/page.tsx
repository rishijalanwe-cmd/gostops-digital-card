import { getEmployee } from "@/lib/sheets";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const person = await getEmployee(slug);

  if (!person) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6">
        <div className="bg-white rounded-[28px] shadow-xl p-10 text-center max-w-sm w-full">
          <img
            src="/logo-horizontal-.png"
            alt="goSTOPS"
            className="h-20 mx-auto object-contain"
          />

          <h1 className="text-3xl font-bold mt-8 text-gray-900">
            Employee Not Found
          </h1>

          <p className="text-gray-500 mt-3">
            The digital visiting card you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center px-5 py-10">

      <div
        className="
          w-full
          max-w-sm
          bg-white
          rounded-[30px]
          overflow-hidden
          shadow-[0_15px_45px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
          animate-fadeIn
        "
      >

        {/* Logo */}

        <div className="flex justify-center pt-8">

          <img
            src="/logo-horizontal-.png"
            alt="goSTOPS"
            className="h-24 w-auto object-contain select-none"
          />

        </div>

        {/* Brand Strip */}

        <div className="mt-5 h-[4px] bg-gradient-to-r from-[#FF3366] via-[#7C3AED] via-[#FFCC00] via-[#33CCCC] via-[#FF9800] to-[#005FC6]" />

        {/* Name */}

        <div className="text-center px-7 pt-7">

          <h1 className="text-[30px] font-bold text-[#1F2937] leading-tight">

            {person.name}

          </h1>

          <p className="text-[18px] text-gray-500 mt-2">

            {person.role}

          </p>

          <p className="text-[14px] text-gray-400 mt-1">

            {person.department}

          </p>

        </div>

        <div className="mx-7 my-6 border-t border-gray-100"></div>

        {/* Phone */}

        <div className="px-7">

          <a
            href={`tel:${person.phone}`}
            className="
              block
              rounded-2xl
              bg-[#FAFAFA]
              p-5
              text-center
              transition-all
              duration-200
              hover:shadow-lg
              hover:bg-white
              active:scale-[0.98]
            "
          >

            <p className="text-xs tracking-[0.25em] text-gray-400">

              PHONE

            </p>

            <p className="mt-2 text-lg font-semibold text-gray-900">

              {person.phone}

            </p>

          </a>

        </div>

        {/* Email */}

        <div className="px-7 mt-5">

          <a
            href={`mailto:${person.email}`}
            className="
              block
              rounded-2xl
              bg-[#FAFAFA]
              p-5
              text-center
              transition-all
              duration-200
              hover:shadow-lg
              hover:bg-white
              active:scale-[0.98]
            "
          >

            <p className="text-xs tracking-[0.25em] text-gray-400">

              EMAIL

            </p>

            <p className="mt-2 text-[16px] font-semibold text-gray-900 break-all">

              {person.email}

            </p>

          </a>

        </div>

        {/* Bottom Logo */}

        <div className="py-9 flex justify-center">

          <img
            src="/vertical-logo-.png"
            alt="goSTOPS"
            className="h-20 object-contain opacity-90"
          />

        </div>

      </div>

    </div>
  );
}