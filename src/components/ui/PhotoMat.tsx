import Image from "next/image";

interface PhotoMatProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  subcaption?: string;
  priority?: boolean;
  className?: string;
}

export default function PhotoMat({
  src,
  alt,
  width,
  height,
  caption,
  subcaption,
  priority = false,
  className = "",
}: PhotoMatProps) {
  return (
    <div className={`photo-mat ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto object-cover rounded-sm"
      />
      {(caption || subcaption) && (
        <div className="flex justify-between items-center mt-3 px-0.5">
          {caption && (
            <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
              {caption}
            </span>
          )}
          {subcaption && (
            <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
              {subcaption}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
