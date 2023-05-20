import Link from "next/link";

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline">
          {" "}
          DevGrowth{" "}
        </Link>
      </h2>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Learning to code, together
      </h4>
    </section>
  );
}
