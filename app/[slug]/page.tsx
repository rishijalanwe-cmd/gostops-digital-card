import { getEmployee } from "@/lib/sheets";
import { VCard, VCardVersion } from "vcard-creator";

export default async function Page({ params }: any) {
  const person = await getEmployee(params.slug);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <img
            src="/logo-horizontal-.png"
            className="h-20 mx-auto mb-6"
          />

          <h1 className="text-3xl font-bold">
            Employee Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            Please contact HR.
          </p>
        </div>
      </div>
    );
  }

  const card = new VCard();

  card.version = VCardVersion.Four;

  card.addName(person.name);

  card.addCompany("goSTOPS");

  card.addJobtitle(person.role);

  card.addEmail(person.email);

  card.addPhoneNumber(person.phone);

  const encoded = encodeURIComponent(card.toString());

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">

      <div
        className="
        w-full
        max-w-sm
        rounded-[28px]
        bg-white/95
        backdrop-blur-md
        shadow-xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
      >

        {/* Logo */}

        <div className="flex justify-center pt-8">

          <img
            src="/logo-horizontal-.png"
            alt="goSTOPS"
            className="
            h-24
            w-auto
            object-contain
            select-none
          "
          />

        </div>

        {/* Brand Strip */}

        <div className="mt-5 h-[4px] w-full bg-gradient-to-r from-[#FF3366] via-[#7C3AED] via-[#FFCC00] via-[#33CCCC] via-[#FF9800] to-[#005FC6]" />

        {/* Name */}

        <div className="text-center px-6 pt-7 animate-[fadeIn_.4s_ease]">

          <h1 className="text-[28px] font-bold text-[#1d1d1d]">

            {person.name}

          </h1>

          <p className="mt-1 text-[17px] text-gray-500">

            {person.role}

          </p>

          <p className="mt-1 text-sm text-gray-400">

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
            bg-[#FF3366]
            hover:bg-[#e62c5d]
            active:scale-95
            transition-all
            duration-200
            rounded-xl
            py-4
            text-white
            font-semibold
            shadow-lg
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
            bg-[#fafafa]
            p-5
            text-center
            transition-all
            duration-300
            hover:shadow-md
          "
          >

            <p className="text-xs tracking-widest text-gray-400">

              PHONE

            </p>

            <a
              href={`tel:${person.phone}`}
              className="block mt-2 text-lg font-semibold"
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
            bg-[#fafafa]
            p-5
            text-center
            transition-all
            duration-300
            hover:shadow-md
          "
          >

            <p className="text-xs tracking-widest text-gray-400">

              EMAIL

            </p>

            <a
              href={`mailto:${person.email}`}
              className="block mt-2 text-base font-semibold break-all"
            >

              {person.email}

            </a>

          </div>

        </div>

        {/* Bottom Logo */}

        <div className="py-8 flex justify-center">

          <img
            src="/vertical-logo-.png"
            className="h-20 object-contain"
          />

        </div>

      </div>

    </div>
  );
}