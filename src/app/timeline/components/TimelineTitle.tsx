interface TimelineTitleProps {
  subtitle?: string;
  title?: string;
}

export default function TimelineTitle({
  subtitle = "역사를 듣다.",
  title = "H E A R I N G"
}: TimelineTitleProps) {
  return (
    <div className="p-10 px-12">
      <div className="w-full h-px bg-gray-dark mb-4" />
      <h2 className="text-lg font-medium">{subtitle}</h2>
      <h1 className="text-3xl font-bold tracking-widest">{title}</h1>
    </div>
  );
} 