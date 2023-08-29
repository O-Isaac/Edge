import Image from "next/image";

function Logo () {
    return (
    <>
      <div className="flex items-center justify-between gap-2">
        <figure>
          <Image alt="Edge UI Logo" src="/images/brands/logo.webp" height={30} width={30} />
        </figure>
        <span className="text-xl text-gray-300 dark:text-gray-700">/</span>
        <h1 className="text-2xl font-extrabold">UI</h1>
      </div>
    </>
    )
}

export default Logo