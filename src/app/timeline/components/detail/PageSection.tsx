import React from 'react';

interface PageSectionProps {
  children: React.ReactNode;
  centered?: boolean;
}

/**
 * 상세 페이지의 각 전체 화면 섹션을 표시하는 컴포넌트
 */
export default function PageSection({ children, centered = false }: PageSectionProps) {
  return (
    <div 
      className={`min-w-full w-screen h-screen flex items-center ${centered ? 'justify-center' : ''} snap-start px-6 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-12 md:py-16`}
    >
      {children}
    </div>
  );
} 