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
      <div className="min-h-screen flex items-center justify-center text-xl">
        Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">

        <div className="flex justify-center pt-6">
          <img
            src="/logo-horizontal-.png"
            alt="goSTOPS"
            className="h-24 w-auto object-contain"
          />
        </div>

        <div className="mt-4 h-[4px] w-full bg-gradient-to-r from-[#FF3366] via-[#7C3AED] via-[#FFCC00] via-[#33CCCC] via-[#FF9800] to-[#005FC6]" />

        <div className="text-center px-6 pt-5">
          <h1 className="text-[22px] font-semibold text-gray-900">
            {person.name}
          </h1>

          <p className="text-gray-500 text-[14px] mt-0.5">
            {person.role}
          </p>
        </div>

        <div className="h-[1px] bg-gray-100 my-3" />

        <div className="px-6">
          <div className="bg-[#fafafa] rounded-xl p-4 text-center">
            <p className="text-[11px] text-gray-400 tracking-wide mb-1">
              PHONE
            </p>

            <a
              href={`tel:${person.phone}`}
              className="text-[16px] font-medium text-gray-900"
            >
              {person.phone}
            </a>
          </div>
        </div>

        <div className="px-6 mt-4">
          <div className="bg-[#fafafa] rounded-xl p-4 text-center">
            <p className="text-[11px] text-gray-400 tracking-wide mb-1">
              EMAIL
            </p>

            <a
              href={`mailto:${person.email}`}
              className="text-[15px] font-medium text-gray-900 break-words"
            >
              {person.email}
            </a>
          </div>
        </div>

        <div className="py-6 flex justify-center">
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