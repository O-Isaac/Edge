import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import Image from "next/image";

function LightBoxImage({ src, width = 1920, height = 1080, alt }) {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <figure>
        {Open && <Lightbox mainSrc={src} onCloseRequest={() => setOpen(false)} />}

        <Image
          alt={alt}
          onClick={() => setOpen(true)}
          className="rounded-lg my-4 hover:cursor-pointer"
          height={height}
          width={width}
          src={src}
          priority
        />
      </figure>
    </>
  );
}

export default LightBoxImage;
