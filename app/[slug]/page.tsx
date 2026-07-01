import { getEmployee } from "@/lib/sheets";

export default async function Page({ params }: any) {
  const person = await getEmployee(params.slug);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <img
            src="/logo-horizontal-.png"
            alt="goSTOPS"
            className="h-24 mx-auto mb-6"
          />

          <h1 className="text-3xl font-bold text-gray-900">
            Employee Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            Please contact HR.
          </p>
        </div>
      </div>
    );
  }

  // Generate VCF without any external package
  const vcf = `BEGIN:VCARD
VERSION:3.0
FN:${person.name}
ORG:goSTOPS
TITLE:${person.role}
TEL;TYPE=CELL:${person.phone}
EMAIL:${person.email}
END:VCARD`;

  const encoded = encodeURIComponent(vcf);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4 py-10">

      <div
        className="
          w-full
          max-w-sm
          bg-white
          rounded-[28px]
          shadow-[0_10px_35px_rgba(0,0,0,0.08)]
          overflow-hidden
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
        "
      >

        {/* TOP LOGO */}

        <div className="flex justify-center pt-8">

          <img
            src="/logo-horizontal-.png"
            alt="goSTOPS"
            className="h-24 w-auto object-contain"
          />

        </div>

        {/* BRAND STRIP */}

        <div className="mt-5 h-[4px] w-full bg-gradient-to-r from-[#FF3366] via-[#7C3AED] via-[#FFCC00] via-[#33CCCC] via-[#FF9800] to-[#005FC6]" />

        {/* NAME */}

        <div className="text-center px-6 pt-6">

          <h1 className="text-[28px] font-bold text-gray-900">

            {person.name}

          </h1>

          <p className="mt-1 text-[18px] text-gray-500">

            {person.role}

          </p>

          <p className="mt-1 text-[14px] text-gray-400">

            {person.department}

          </p>

        </div>

        <div className="h-px bg-gray-100 my-5" />

        {/* SAVE CONTACT */}

        <div className="px-6">

          <a
            href={`data:text/vcard;charset=utf-8,${encoded}`}
            download={`${person.name}.vcf`}
            className="
              flex
              justify-center
              items-center
              rounded-xl
              bg-[#FF3366]
              py-4
              text-white
              font-semibold
              shadow-md
              transition
              duration-200
              hover:bg-[#E92D61]
              hover:shadow-lg
              active:scale-95
            "
          >
            💾 Save Contact
          </a>

        </div>

        {/* PHONE */}

        <div className="px-6 mt-5">

          <div
            className="
              rounded-xl
              bg-[#FAFAFA]
              p-5
              text-center
              transition
              duration-300
              hover:shadow-md
            "
          >

            <p className="text-xs tracking-widest text-gray-400">

              PHONE

            </p>

            <a
              href={`tel:${person.phone}`}
              className="block mt-2 text-lg font-semibold text-gray-900"
            >

              {person.phone}

            </a>

          </div>

        </div>

        {/* EMAIL */}

        <div className="px-6 mt-4">

          <div
            className="
              rounded-xl
              bg-[#FAFAFA]
              p-5
              text-center
              transition
              duration-300
              hover:shadow-md
            "
          >

            <p className="text-xs tracking-widest text-gray-400">

              EMAIL

            </p>

            <a
              href={`mailto:${person.email}`}
              className="block mt-2 text-[16px] font-semibold text-gray-900 break-all"
            >

              {person.email}

            </a>

          </div>

        </div>

        {/* BOTTOM LOGO */}

        <div className="py-8 flex justify-center">

          <img
            src="/vertical-logo-.png"
            alt="goSTOPS"
            className="h-20 w-auto object-contain"
          />

        </div>

      </div>

    </div>
  );
}