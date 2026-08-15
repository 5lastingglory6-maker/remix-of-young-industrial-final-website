export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? 'text-white' : 'text-navy-800'}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-navy-100' : 'text-steel-600'}`}>{description}</p>
      )}
    </div>
  );
}
