interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageFrame({ src, alt, className = '' }: ImageFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-steel-200 bg-steel-100 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}
