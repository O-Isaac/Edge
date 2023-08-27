import Link from "next/link";

function Hero() {
  return (
    <section className="relative grid p-4 text-center screen place-items-center place-content-center">
      <h1 className="relative z-10 mb-6 font-medium text-7xl lg:text-8xl">Edge UI</h1>
      <p className="relative z-10 text-3xl font-light lg:text-4xl">Ultimate Interface Overhaul</p>
      <div className="relative z-10 grid p-4 mt-2 transition-all">
        <Link
          className="px-4 py-3 transition-all border rounded-lg hover:bg-zinc-50 dark:hover:text-black"
          href="documentation"
        >
          Read Documentation
        </Link>
      </div>
    </section>
  );
}

export default Hero;
