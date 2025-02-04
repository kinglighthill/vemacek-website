"use client";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ImageFallbackProps extends ImageProps {
fallback: string;
}
  
const ImageFallback: React.FC<ImageFallbackProps> = (props) => {
    const { src, fallback, ...rest } = props;
    const [imgSrc, setImgSrc] = useState<string>(src as string);
  
    useEffect(() => {
      setImgSrc(src as string);
    }, [src]);
  
    return (
      <Image
        {...rest}
        src={imgSrc}
        alt=""
        onError={() => {
          setImgSrc(fallback);
        }}
      />
    );
};

export default ImageFallback