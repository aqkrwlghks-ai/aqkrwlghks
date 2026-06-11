import React, { useRef } from "react";
import { motion } from "motion/react";
import { 
  Film, 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageSquare, 
  Star, 
  Clock, 
  Camera, 
  CornerDownRight, 
  ArrowUpRight,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  MapPin
} from "lucide-react";
import Header from "./components/Header";
import AIPresentationPlanner from "./components/AIPresentationPlanner";
import { PACKAGES, ADDITIONAL_SERVICES, EXPERIENCE_STEPS, BRAND_SLOGAN_TITLE, BRAND_SLOGAN_SUB, CORE_VALUES } from "./data";
import { PackageDetail } from "./types";

export default function App() {
  const plannerRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D2926] selection:bg-[#4A443D] selection:text-[#F9F7F2] leading-normal font-sans antialiased">
      
      {/* Sticky header */}
      <Header 
        onScrollToPlanner={() => scrollToSection(plannerRef)} 
        onScrollToPackages={() => scrollToSection(packagesRef)} 
        onScrollToSteps={() => scrollToSection(stepsRef)} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#F9F7F2] overflow-hidden py-16">
        {/* Soft background glow reflecting family nostalgia */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#F2EFE9] blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#E5E1D8] blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F2EFE9] border border-[#E5E1D8] text-[#4A443D] rounded-full text-xs font-semibold tracking-wider font-mono uppercase"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Premium Family Video Documentary</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-5xl font-serif text-[#3D3832] leading-tight font-bold tracking-tight"
            >
              당신의 이야기는 다음 세대에게 <br/>
              <span className="italic text-[#8B7E66]">가장 값진 유산</span>입니다.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif-korean text-base sm:text-lg text-[#2D2926] opacity-80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              삶을 기록하고, 사랑을 전하며, 믿음을 유산으로 남기다. <br />
              부모님의 목소리와 지혜를 영상 다큐멘터리로 담아드립니다.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2"
            >
              <button 
                onClick={() => scrollToSection(plannerRef)}
                className="w-full sm:w-auto px-8 py-4 bg-[#4A443D] hover:bg-[#3D3832] text-[#F9F7F2] text-xs font-bold uppercase tracking-widest rounded-none shadow-md transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer font-serif-korean"
              >
                <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                <span>무료 AI 기획서 바로 제작하기</span>
                <ArrowRight className="w-4 h-4 text-amber-200 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => scrollToSection(packagesRef)}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F2EFE9] border border-[#E5E1D8] text-[#4A443D] text-xs font-bold tracking-widest rounded-none uppercase transition-all duration-300 cursor-pointer font-serif-korean"
              >
                영상 제작 상품 둘러보기
              </button>
            </motion.div>

            {/* Minor Trust Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 border-t border-[#E5E1D8] pt-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#4A443D]">100%</p>
                <p className="text-[10px] sm:text-xs text-[#2D2926] opacity-75 font-medium font-serif-korean">개별 맞춤 시나리오</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#4A443D]">HD/4K</p>
                <p className="text-[10px] sm:text-xs text-[#2D2926] opacity-75 font-medium font-serif-korean">초고화질 시네마 캠</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#4A443D]">Faith</p>
                <p className="text-[10px] sm:text-xs text-[#2D2926] opacity-75 font-medium font-serif-korean">신앙 간증 전문 최적화</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right: Nostalgic Image Panel */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-4 bg-white border-4 border-white shadow-xl rounded-2xl overflow-hidden"
            >
              {/* Retro Photo Wrapper */}
              <div className="relative aspect-4/3 overflow-hidden rounded-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop" 
                  alt="가족이 함께 웃으며 대화하는 모습" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-15 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#8B7E66]/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left font-serif-korean">
                  <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8B7E66] font-semibold">RECORDED IN 2026</p>
                  <p className="text-base font-serif font-bold tracking-tight mt-0.5">"지나간 세월은 목소리와 사랑을 타고 다시 흐릅니다."</p>
                </div>
              </div>
              
              {/* Outer caption looking like photocard label */}
              <div className="text-center pt-3.5 pb-1 font-serif text-xs text-[#3D3832] tracking-wider italic flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8B7E66]" />
                <span>따뜻한 베이지 빛, 사랑하는 우리 부모님의 소중한 인터뷰 수록</span>
              </div>
            </motion.div>

            {/* Minor decorative old photo stacked underneath */}
            <div className="absolute -bottom-4 -left-4 w-1/2 aspect-square p-2 bg-[#F2EFE9] border border-[#E5E1D8] shadow-md -z-10 rotate-6 rounded-lg hidden sm:block">
              <div className="w-full h-full overflow-hidden rounded">
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop" 
                  alt="포근함 가득한 자녀의 추억"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Statement & Philosophy Section (왜 레거시 필름인가?) */}
      <section className="py-24 bg-[#F2EFE9] border-t border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B7E66] px-2.5 py-1 bg-[#E5E1D8] font-bold rounded">
              OUR DEEPEST VALUE & DICTUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#4A443D] mt-4 font-bold tracking-tight">
              왜 레거시 필름이어야 하는가?
            </h2>
            <div className="w-12 h-[2px] bg-[#8B7E66] mx-auto my-5" />
            <p className="font-serif-korean text-sm sm:text-base text-[#6B5F4F] leading-relaxed">
              "사진은 그저 한 순간을 남기지만, 영상은 고유한 웃음 목소리, 자애로운 감정의 호흡, 그리고 삶의 전체 이야기를 온전히 남겨줍니다."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E5E1D8] p-8 sm:p-10 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#8B7E66]"
              >
                <span className="font-mono text-[10px] text-[#8B7E66] tracking-[0.15em] font-bold block mb-2">
                  VALUE 0{idx + 1} // {val.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-[#3D3832] mb-4 font-bold">
                  {val.title}
                </h3>
                <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>

          {/* Core Differentiation Quote - Christian Faith Concept highlight */}
          <div className="mt-16 bg-white border border-[#E5E1D8] p-8 sm:p-12 text-center rounded-2xl relative max-w-4xl mx-auto shadow-sm">
            <h4 className="font-serif text-lg sm:text-xl text-[#4A443D] font-bold mb-3">
              목사님과 교회 제직들이 유산 기획을 먼저 시작하는 이유: <span className="text-[#8B7E66] underline underline-offset-4">"신앙 유산(Faith Legacy)"</span>
            </h4>
            <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] leading-relaxed max-w-2xl mx-auto">
              레거시 필름의 핵심 차별화는 부모님의 단순한 인생 나열을 넘어, <strong>"평생 지켜온 주님과의 동행기, 간증, 기도 유산"</strong>을 영화 예술로 담는 것에 있습니다. 자녀들이 가녀리고 혼란스러운 세상의 길을 잃을 때 꺼내 들으면 다시 일어설 확고한 반석 신앙을 가보로 남겨주세요.
            </p>
          </div>

        </div>
      </section>

      {/* Package Showcase Section (MEMORY, LEGACY, FAITH) */}
      <div ref={packagesRef} />
      <section className="py-24 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8B7E66] bg-[#F2EFE9] px-3 py-1.5 font-bold rounded-full">
              OFFICIAL PRODUCTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#4A443D] mt-4 font-bold tracking-tight">
              레거시 프리미엄 비디오 세트 구성
            </h2>
            <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mt-3 leading-relaxed">
              모든 상품은 촬영 시간, 연출 장소, 연대 자료 형태에 따라 맞춤 커스텀 조정이 가능하며, 소장 가치가 뛰어납니다.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PACKAGES.map((pkg, idx) => {
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col justify-between p-6 sm:p-10 border transition-all duration-300 bg-white rounded-xl ${
                    pkg.isPopular 
                      ? "border-2 border-[#8B7E66] shadow-md xl:scale-[1.03] z-10" 
                      : "border-[#E5E1D8] shadow-sm hover:border-[#8B7E66]"
                  }`}
                >
                  {/* Badge Ribbon if popular or faith focused */}
                  {pkg.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B7E66] text-[#F9F7F2] text-[9px] font-bold uppercase tracking-[0.2em] py-1 px-4 font-mono rounded-full shadow-sm">
                      Best Choice
                    </span>
                  )}

                  {pkg.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B7E66] text-white text-[9px] font-bold uppercase tracking-wider py-1 px-4 font-serif-korean rounded-full shadow-sm">
                      {pkg.badge}
                    </span>
                  )}

                  {/* Card Header */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B7E66] mb-1 block">
                      {pkg.title}
                    </span>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3D3832] mt-1">{pkg.subTitle}</h3>
                      </div>
                      <span className="text-[10px] sm:text-xs font-serif-korean text-[#4A443D] font-semibold bg-[#F2EFE9] px-2.5 py-1 rounded">
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="border-b border-[#E5E1D8] pb-6 mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-[#4A443D]">{pkg.price}</span>
                        <span className="text-xs text-[#6B5F4F] font-medium font-serif-korean">원형 최저정찰제 ~ (출장비 별도)</span>
                      </div>
                      <p className="text-xs font-serif-korean text-[#8B7E66] font-semibold mt-1 flex items-center gap-1.5 justify-start">
                        <Camera className="w-3.5 h-3.5 text-[#8B7E66]" />
                        <span>{pkg.shootingCount}</span>
                      </p>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-4 text-xs sm:text-sm text-[#3D3832] font-serif-korean">
                      <p className="text-[10px] font-black tracking-widest uppercase text-[#8B7E66] font-mono mb-2">프리미엄 포함 혜택</p>
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 leading-normal">
                          <CheckCircle className="w-4.5 h-4.5 text-[#8B7E66] mt-0.5 flex-shrink-0" />
                          <span className="opacity-80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommendations and actions */}
                  <div className="mt-8 pt-6 border-t border-[#E5E1D8]">
                    <div className="bg-[#F2EFE9]/60 p-4 border-l-2 border-[#8B7E66] rounded-r-lg mb-6">
                      <p className="text-[10px] font-bold text-[#4A443D] uppercase tracking-wider mb-2 font-serif-korean">추천 제작 용도</p>
                      {pkg.recommendations.map((rec, rIdx) => (
                        <p key={rIdx} className="text-xs text-[#6B5F4F] font-serif-korean leading-relaxed flex items-center gap-1">
                          <CornerDownRight className="w-3 h-3 text-[#8B7E66] flex-shrink-0" />
                          <span>{rec}</span>
                        </p>
                      ))}
                    </div>

                    <button 
                      onClick={() => scrollToSection(plannerRef)}
                      className={`w-full py-3.5 text-xs font-bold font-serif-korean tracking-widest text-center transition-all cursor-pointer ${
                        pkg.isPopular 
                          ? "bg-[#4A443D] hover:bg-[#3D3832] text-[#F9F7F2]"
                          : "bg-transparent border border-[#4A443D] hover:bg-[#F2EFE9] hover:border-[#3D3832] text-[#4A443D]"
                      }`}
                    >
                      의인에 어울리는 스토리 기획하기
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Additional Premium Services Bento */}
      <section className="py-24 bg-[#F2EFE9] border-t border-b border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B7E66] font-bold">
              PRESTIGE SERVICES EXTRAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#4A443D] mt-4 font-bold tracking-tight">
              복원 및 부가 지원 프로그램
            </h2>
            <div className="w-6 h-[2px] bg-[#8B7E66] mx-auto my-4" />
            <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] leading-relaxed">
              오랫동안 옷장 구석에 있던 훼손된 아날로그 자산들을 최신 미디어 정밀 복제 솔루션으로 고결하게 업그레이드합니다.
            </p>
          </div>

          {/* Bento-like Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_SERVICES.map((serv, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E5E1D8] p-6 sm:p-8 rounded-xl flex items-start gap-4 hover:border-[#8B7E66] transition-colors shadow-sm"
              >
                <div className="p-3 bg-[#F2EFE9] rounded-lg border border-[#E5E1D8] text-[#8B7E66] flex-shrink-0">
                  <Star className="w-5 h-5 text-[#8B7E66]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#3D3832]">
                    {serv.title}
                  </h3>
                  <p className="font-serif-korean text-xs text-[#6B5F4F] mt-2 leading-relaxed">
                    {serv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Step Guide Section */}
      <div ref={stepsRef} />
      <section className="py-24 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B7E66] px-3 py-1 bg-[#F2EFE9] font-bold rounded">
              PRODUCTION PIPELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#4A443D] mt-4 font-bold tracking-tight">
              레거시 필름의 정교한 5단계 여정
            </h2>
            <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mt-2 leading-relaxed">
              촬영 당일까지 한 가정의 인생 대본을 구축하고, 부모님이 편안한 상태에서 말씀을 이어나가도록 배려합니다.
            </p>
          </div>

          {/* Vertical Stepper Process with details */}
          <div className="relative border-l border-[#8B7E66]/40 ml-4 md:ml-10 space-y-12 pb-4">
            {EXPERIENCE_STEPS.map((stepData, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                {/* Visual Circle Indicator */}
                <span className="absolute -left-3.5 top-0.5 w-7 h-7 bg-white border-2 border-[#4A443D] rounded-full flex items-center justify-center font-mono text-[10px] font-black text-[#4A443D] group-hover:bg-[#4A443D] group-hover:text-[#F9F7F2] transition-all">
                  0{stepData.step}
                </span>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#3D3832] leading-none">
                  {stepData.title}
                </h3>
                <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mt-3 leading-relaxed max-w-2xl">
                  {stepData.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI Dynamic Consultation Segment (Hosts backend calls to gemini-3.5-flash) */}
      <div ref={plannerRef} />
      <AIPresentationPlanner />

      {/* FAQ Accordion list */}
      <section className="py-24 bg-[#F2EFE9] border-b border-[#E5E1D8]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4A443D] font-bold tracking-tight">
              가장 자주 여쭈어보시는 질문 (FAQ)
            </h2>
            <div className="w-12 h-[2px] bg-[#8B7E66] mx-auto my-4" />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-[#E5E1D8] rounded-xl shadow-sm">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#3D3832] flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#8B7E66] flex-shrink-0" />
                <span>Q1. 서울이 아닌 울산, 광주, 제주일 경우 출장 기획 촬영이 가능한가요?</span>
              </h4>
              <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mt-3 leading-relaxed pl-6.5">
                네, 전국 어디서나 기획 촬영이 가능합니다. 서울과 경기도 성남/일산 외 지역은 소호 운송 비용 및 숙박비 등 최소한의 지방 출장 실비가 계상됩니다. 만약 자택이 아닌 지방에 있는 출석 장로 교회 혹은 헌신 교회나 의미 있는 장소를 희망 하실 경우, 사전 기획 시 연출 작가와 촬영 구도를 미리 의논하여 결정합니다.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E5E1D8] rounded-xl shadow-sm">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#3D3832] flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#8B7E66] flex-shrink-0" />
                <span>Q2. 부모님이 기억이 가물가물하시거나 인터뷰를 어색해하시면 어쩌나요?</span>
              </h4>
              <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mt-3 leading-relaxed pl-6.5">
                당사가 부모님 전문 다큐멘터리 브랜드로서 지닌 가장 큰 노하우입니다. 레거시 필름의 제작진은 단순 촬영 기사가 아닌, 숙련된 다큐 방송 작가 및 호흡 전문가들입니다. 부모님이 편히 느끼시는 집 안 거실 침상 혹은 따뜻한 교회 유치반 교실 등에서 두런두런 수다를 나누듯 이끌며, 촬영 당일 편안함을 조성하여 부드럽고 진심어린 표정이 자연스럽게 채록되도록 안내합니다.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E5E1D8] rounded-xl shadow-sm">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#3D3832] flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#8B7E66] flex-shrink-0" />
                <span>Q3. 영상 제작 진행 시 결제는 나누어 낼 수 있나요?</span>
              </h4>
              <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mt-3 leading-relaxed pl-6.5">
                안정적인 제작 프로세스를 약속드리기 위해 계약금 50%(기획 시점), 잔금 50%(최종 1차 편집 검토본 승인 시점) 분할 결제로 나누어 상환 하실 수 있습니다. 투명한 정찰제 카타로그 가격 내에서 카드 할부 및 전자세금계산서 발행(현금영수증 포함)을 정직하고 정확하게 이행합니다.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section: Booking Application & Inquiry */}
      <section id="contact-section" className="py-24 bg-[#F9F7F2] border-b border-[#E5E1D8]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="bg-[#F2EFE9] border border-[#E5E1D8] p-8 sm:p-12 rounded-2xl shadow-md relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B7E66] font-bold block mb-1">Inquiries & Booking</span>
                  <h3 className="text-2xl font-serif font-bold text-[#4A443D] mt-2">상담 문의 및 신청</h3>
                </div>
                <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] leading-relaxed">
                  자세한 소요시간, 촬영 가능 요일 및 복원 자료 준비를 위해 편하신 경로로 무엇이든 연락해 주세요. 우리 부모님의 이야기를 다정하게 경청하겠습니다.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E5E1D8] text-xs sm:text-sm font-serif-korean text-[#3D3832]">
                  <a href="tel:010-7129-0924" className="flex items-center gap-3 hover:text-[#8B7E66] transition-colors">
                    <span className="p-2 bg-white border border-[#E5E1D8] rounded text-[#8B7E66]">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[9px] text-[#8B7E66] uppercase tracking-wider font-mono">가장 빠른 전언 번호</p>
                      <p className="font-bold">010-7129-0924</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-white border border-[#E5E1D8] rounded text-[#8B7E66]">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[9px] text-[#8B7E66] uppercase tracking-wider font-mono">카카오톡 플러스 상담채널</p>
                      <p className="font-bold">@legacyfilm</p>
                    </div>
                  </div>

                  <a href="mailto:legacyfilm@email.com" className="flex items-center gap-3 hover:text-[#8B7E66] transition-colors">
                    <span className="p-2 bg-white border border-[#E5E1D8] rounded text-[#8B7E66]">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-[9px] text-[#8B7E66] uppercase tracking-wider font-mono">이메일 공식 수신함</p>
                      <p className="font-bold">legacyfilm@email.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Booking fast checklist scheduler form mock */}
              <div className="lg:col-span-7 bg-white border border-[#E5E1D8] p-6 sm:p-8 rounded-xl space-y-6 shadow-sm">
                <h4 className="font-serif text-sm font-bold text-[#3D3832] border-b border-[#E5E1D8] pb-3 tracking-wide">
                  기획 위원회 맞춤 예약 자가 체크
                </h4>

                <div className="space-y-3.5 font-serif-korean text-xs text-[#6B5F4F]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-[#8B7E66] flex-shrink-0 mt-0.5" />
                    <span>서울 및 수도권 자택 혹은 전원 스튜디오 등 촬영 원함 (출장 상담)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-[#8B7E66] flex-shrink-0 mt-0.5" />
                    <span>할아버지/할머니 소장 앨범 내 아날로그 소실 직전 종이 사진 보정 20점 이상 있음</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-[#8B7E66] flex-shrink-0 mt-0.5" />
                    <span>신앙 스토리텔링을 통해 집안 성도들의 믿음 고백을 명확히 고취하길 원함</span>
                  </div>
                </div>

                <div className="bg-[#F9F7F2] p-4 text-center border-2 border-dashed border-[#8B7E66] rounded-xl text-xs font-serif-korean text-[#6B5F4F]">
                  <p className="font-semibold text-[#3D3832] text-sm">우선 제작 자문 신청하기</p>
                  <p className="mt-1 pb-1 leading-relaxed opacity-90">상기 예진이 끝났다면 상단 AI 기획안 세션에서 기획 제안서 가안을 먼저 인집 후, 전언 상담 시 일체 전송해 주시면 가장 정확하고 웅장한 가이드가 수립됩니다.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Premium Footer with core quote */}
      <footer className="bg-[#4A443D] text-[#F9F7F2] py-16 border-t border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="font-serif text-lg sm:text-xl italic font-medium">
              "한 사람의 삶은 한 권의 책과 같습니다. 우리는 그 이야기를 영상으로 기록합니다."
            </p>
            <div className="w-8 h-px bg-[#8B7E66] mx-auto opacity-60" />
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8B7E66] font-semibold">
              LEGACY FILM FAMILY RECORDING BRAND
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 text-xs text-[#F2EFE9]/70 font-serif-korean leading-relaxed">
            <div className="space-y-2">
              <p className="font-bold text-[#F9F7F2]">레거시 필름 (LEGACY FILM)</p>
              <p>대변인 / 총괄 연출기획: 김기획 지휘자</p>
              <p>사업자등록번호: XXX-XX-XXXXX (가족 유산 기록 전문 브랜딩)</p>
              <p>통신판매업 신고번호: 제 2026-서울강남-XXXX 호</p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-[#F9F7F2]">서울 마포 & 분당 스튜디오 연출부</p>
              <p>본부 주소: 서울특별시 마포구 백범로 31길 10 (대흥 가문 미디어 센터)</p>
              <p>경기 남부 분실: 경기도 성남시 분당구 판교역로 145</p>
              <p className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B7E66]" />
                <span>지방 사택 촬영 지원 가능</span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-[#F9F7F2]">이용 규정 및 보증</p>
              <p>※ 모든 동영상의 원시 파일 영구 안전 백업 지원을 보장합니다.</p>
              <p>※ 당사는 초상권 및 가족 사생활 정보 보호를 1순위 신조로 삼아, 사전 동의 없는 무단 온라인 유포를 엄격히 금지합니다.</p>
              <p className="font-mono text-[10px] mt-2 opacity-50">&copy; 2026 LEGACY FILM Inc. All Rights Reserved.</p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
