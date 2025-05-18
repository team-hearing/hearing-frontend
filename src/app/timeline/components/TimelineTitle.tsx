interface TimelineTitleProps {
  subtitle?: string;
  title?: string;
  currentYear?: number;
}

export default function TimelineTitle({
  subtitle = "역사를 듣다.",
  title = "H E A R I N G",
  currentYear
}: TimelineTitleProps) {
  
  const getDecade = (year?: number) => {
    if (!year) return "";
    const decade = Math.floor(year / 10) * 10;
    return `${decade}년대`;
  };

  return (
    <div className="p-10 px-12">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="w-full h-px bg-gray-dark mb-4" />
          <h2 className="text-lg font-medium">{subtitle}</h2>
          <h1 className="text-3xl font-bold tracking-widest">{title}</h1>
        </div>
        
        {currentYear && (
          <div className="flex items-end ml-4">
            <span className="text-2xl font-bold text-primary hidden sm:block navigation-year">
              {getDecade(currentYear)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
} 