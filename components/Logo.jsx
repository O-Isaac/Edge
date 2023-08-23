import Image from "next/image";

function Logo () {
    return (
    <>
      <Image className="mr-2" alt="Edge UI Logo" src="/images/brands/logo.webp" height={35} width={35} />
      <span>Edge UI</span>
    </>
    )
}

export default Logo