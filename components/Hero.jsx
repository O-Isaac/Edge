import Link from "next/link";

function Hero() {
  return (
    <section className="screen p-4 grid text-center place-items-center place-content-center relative">
      <h1 className="relative text-7xl lg:text-8xl mb-6 font-medium z-30">Edge UI</h1>
      <p className="relative text-3xl lg:text-4xl font-light z-30">Ultimate Interface Overhaul</p>
      <div className="relative grid p-4 mt-2 transition-all z-30">
        <Link
          className="px-4 py-3 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:border-white dark:hover:text-white bg-black text-white hover:bg-transparent hover:text-black hover:border-black transition-colors border shadow-sm rounded-lg"
          href="documentation"
        >
          Read Documentation
        </Link>
      </div>
    </section>
  );
}

export default Hero;
