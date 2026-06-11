import React from "react";
import { Film, CalendarHeart, Sparkles } from "lucide-react";

interface HeaderProps {
  onScrollToPlanner: () => void;
  onScrollToPackages: () => void;
  onScrollToSteps: () => void;
  onScrollToPortfolio: () => void;
}

export default function Header({ onScrollToPlanner, onScrollToPackages, onScrollToSteps, onScrollToPortfolio }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#E5E1D8] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col group">
          <span className="text-xl sm:text-2xl font-serif tracking-[0.15em] font-bold text-[#4A443D] transition-colors group-hover:text-[#8B7E66]">LEGACY FILM</span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase opacity-60 text-[#2D2926] font-medium">Family Heritage Documentation</span>
        </a>

        {/* Navigation Elements */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#4A443D]">
          <button
            onClick={onScrollToPortfolio}
            className="hover:text-[#8B7E66] transition-colors duration-250 hover:underline underline-offset-4 cursor-pointer"
          >
            대표 작품
          </button>
          <button
            onClick={onScrollToPackages}
            className="hover:text-[#8B7E66] transition-colors duration-250 hover:underline underline-offset-4 cursor-pointer"
          >
            영상 상품 구성
          </button>
          <button
            onClick={onScrollToSteps}
            className="hover:text-[#8B7E66] transition-colors duration-250 hover:underline underline-offset-4 cursor-pointer"
          >
            제작 일지 & 절차
          </button>
          <span className="w-1 h-1 rounded-full bg-[#8B7E66]" />
          <button
            onClick={onScrollToPlanner}
            className="flex items-center gap-1.5 text-[#8B7E66] hover:text-[#4A443D] transition-colors duration-250 font-bold"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            AI 기획 세션
          </button>
        </nav>

        {/* Right Call To Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onScrollToPlanner}
            className="relative px-5 py-3 rounded-none font-serif-korean text-xs font-bold uppercase tracking-widest text-[#F9F7F2] bg-[#4A443D] hover:bg-[#8B7E66] transition-all duration-300 shadow-sm flex items-center gap-2 group cursor-pointer"
          >
            <CalendarHeart className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>무료 레거시 기획하기</span>
          </button>
        </div>
      </div>
    </header>
  );
}
