import Image from "next/image";

// TODO: replace with your real phone number and email
const PHONE = "(347) 986-7879";
const EMAIL = "cjshockey126@aol.com";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-linear-to-br from-blue-800 via-blue-400 to-blue-950 px-4 py-10 font-sans sm:py-16">
      <main className="w-full max-w-sm rounded-2xl border border-blue-100 bg-white p-6 shadow-xl sm:max-w-xl sm:p-8 md:max-w-3xl md:p-10">
        {/* Name / title */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-900 sm:text-4xl">
            Craig Sampson
          </h1>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-blue-600 sm:text-base">
            HVAC Technician &amp; Power Washing
          </p>
        </div>

        {/* Contact info */}
        <div className="mt-6 flex flex-col items-center gap-1 text-center text-lg text-gray-700 sm:text-xl md:items-start md:text-left">
          <p>{PHONE}</p>
          <p>{EMAIL}</p>
        </div>

        {/* Call to action buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:justify-start">
          <a
            href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
            className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Call Now
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Email
          </a>
        </div>

        {/* Photos */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-blue-50">
            <Image
              src="/photo1.jpeg"
              alt="Photo 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-blue-50">
            <Image
              src="/photo2.jpeg"
              alt="Photo 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
