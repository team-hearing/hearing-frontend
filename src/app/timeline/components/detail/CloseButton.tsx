import Link from 'next/link';
import { X } from 'lucide-react';

/**
 * 상세 페이지 닫기 버튼
 */
export default function CloseButton() {
  return (
    <div className="fixed top-0 right-0 md:left-0 lg:left-0 p-6 z-20">
      <Link href="/timeline" className="inline-block">
        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white shadow-sm hover:bg-gray-100 transition-colors">
          <X size={20} strokeWidth={3} />
        </div>
      </Link>
    </div>
  );
} 