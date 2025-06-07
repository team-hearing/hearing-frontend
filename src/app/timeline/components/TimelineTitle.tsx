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
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10">
      <div className="w-full h-px bg-gray-dark mb-3 sm:mb-4" />
      
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-body sm:text-h6 font-regular">{subtitle}</h2>
          <h1 className="text-h5 sm:text-h4 font-bold text-gray-dark tracking-widest">{title}</h1>
        </div>
        
        {currentYear && (
          <div className="flex items-end">
            <span className="text-h6 sm:text-h5 font-bold text-primary navigation-year">
              {getDecade(currentYear)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
} 