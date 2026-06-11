import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  User, 
  FlameKindling, 
  BookOpen, 
  HelpCircle, 
  Music, 
  FileText, 
  CheckSquare, 
  Compass, 
  ArrowRight, 
  Send,
  Printer,
  Copy,
  Check,
  Heart
} from "lucide-react";
import { LegacyFilmPlanData, PlanFormState, PackageId } from "../types";

const LOADING_MESSAGES = [
  "부모님의 오래된 가구 속 옛 이야기를 조심스럽게 꺼내어 정리 중입니다...",
  "은혜로운 삶의 발자취와 소중한 기도의 눈물 자국을스토리보드에 담고 있습니다...",
  "따뜻한 베이지 색조와 부드러운 아날로그 영상 미장센을 어울리게 조율하고 있습니다...",
  "이야기의 깊이에 따라 잔잔한 클래식 피아노와 첼로 선율을 매칭하는 중입니다...",
  "마지막 헌정 문장과 자녀들에게 전수될 신앙의 유산을 정교하게 작성하고 있습니다..."
];

export default function AIPresentationPlanner() {
  const [formData, setFormData] = useState<PlanFormState>({
    clientName: "",
    focusType: "FAITH",
    recipient: "사랑하는 아들과 딸, 그리고 태어날 모든 자녀들에게",
    keyEvents: "회갑기념 / 장로 임직 및 40년 주일학교 봉사 생활 완료",
    warmStories: "가장 어렵던 사업 실패 시절에도 새벽 기도회를 빠지지 않으셨던 부모님의 굳건한 신앙과, 매주 주말마다 손수 차려주시던 시골 밥상의 따뜻함을 영상에 담아 물려주고 싶습니다."
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadIndex, setLoadIndex] = useState(0);
  const [planResult, setPlanResult] = useState<LegacyFilmPlanData | null>(null);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [checkedQuestions, setCheckedQuestions] = useState<{ [key: string]: boolean }>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Rotate loading sentences beautifully
  useEffect(() => {
    let interval: any;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
      }, 3500);
    } else {
      setLoadIndex(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocusSelect = (id: PackageId) => {
    setFormData((prev) => ({ ...prev, focusType: id }));
  };

  const triggerPlannerApi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName.trim()) {
      alert("이름을 기입해 주세요.");
      return;
    }

    setIsLoading(true);
    setPlanResult(null);
    setErrorStatus(null);
    setCheckedQuestions({});

    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "서버 혹은 API 연동 과정에서 지연이 발생했습니다.");
      }

      setPlanResult(data.plan);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err?.message || "기획안 생성 도중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleQuestionCheck = (questionText: string) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [questionText]: !prev[questionText]
    }));
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const printDocument = () => {
    window.print();
  };

  return (
    <section id="ai-planner-section" className="py-20 bg-[#F9F7F2] border-t border-b border-[#E5E1D8] relative overflow-hidden">
      {/* Decorative vectors mimicking old paper scroll corners */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#8B7E66]/20 m-4 pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#8B7E66]/20 m-4 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#8B7E66]/20 m-4 pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#8B7E66]/20 m-4 pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8B7E66] bg-[#F2EFE9] px-3 py-1.5 rounded-full font-bold">
            Interactive Dynamic Session
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4A443D] mt-4 font-bold tracking-tight">
            실시간 AI 레거시 필름 기획 세션
          </h2>
          <div className="w-12 h-[2px] bg-[#8B7E66] mx-auto my-5" />
          <p className="font-serif-korean text-sm sm:text-base text-[#6B5F4F] max-w-xl mx-auto leading-relaxed">
            부모님의 성함과 물려주고 싶은 가치를 한 문장만 적어도, 전문 다큐멘터리 연출가 수준의 3부작 맞춤형 시놉시스와 부합하는 질문 목록을 무상으로 즉시 기획해 드립니다.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-[#F2EFE9] border border-[#E5E1D8] p-6 sm:p-10 shadow-md rounded-xl transition-all duration-300">
          <form onSubmit={triggerPlannerApi} className="space-y-6">
            
            {/* Row 1: Name and Package Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A443D] mb-2.5 flex items-center gap-1.5 font-serif-korean">
                  <User className="w-4 h-4 text-[#8B7E66]" />
                  기록할 주인공 성함 / 주역 관계
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  placeholder="예) 아버님 김은수 장로님, 어머님 이정혜 권사님, 나 자신"
                  required
                  className="w-full bg-[#F9F7F2] border border-[#E5E1D8] px-4 py-3 text-sm rounded-lg text-[#2D2926] focus:ring-1 focus:ring-[#8B7E66] focus:border-[#8B7E66] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A443D] mb-2.5 flex items-center gap-1.5 font-serif-korean">
                  <Compass className="w-4 h-4 text-[#8B7E66]" />
                  기록하고자 하는 핵심 유산 성격
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleFocusSelect("MEMORY")}
                    className={`py-3 text-xs font-bold border rounded-lg cursor-pointer transition-all ${
                      formData.focusType === "MEMORY"
                        ? "bg-[#4A443D] text-[#F9F7F2] border-[#4A443D]"
                        : "bg-[#F9F7F2] text-[#4A443D] border-[#E5E1D8] hover:bg-[#F2EFE9]"
                    }`}
                  >
                    추억 (MEMORY)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFocusSelect("LEGACY")}
                    className={`py-3 text-xs font-bold border rounded-lg cursor-pointer transition-all ${
                      formData.focusType === "LEGACY"
                        ? "bg-[#4A443D] text-[#F9F7F2] border-[#4A443D]"
                        : "bg-[#F9F7F2] text-[#4A443D] border-[#E5E1D8] hover:bg-[#F2EFE9]"
                    }`}
                  >
                    인생 (LEGACY)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFocusSelect("FAITH")}
                    className={`py-3 text-xs font-bold border rounded-lg cursor-pointer transition-all ${
                      formData.focusType === "FAITH"
                        ? "bg-[#4A443D] text-[#F9F7F2] border-[#4A443D]"
                        : "bg-[#F9F7F2] text-[#4A443D] border-[#E5E1D8] hover:bg-[#F2EFE9]"
                    }`}
                  >
                    신앙 (FAITH STORY)
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: Recipient */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5 font-serif-korean">
                <Heart className="w-4 h-4 text-[#8B7E66]" />
                이 영상이 가장 깊게 읽혀졌으면 하는 대상 (전달 대상)
              </label>
              <input
                type="text"
                name="recipient"
                value={formData.recipient}
                onChange={handleInputChange}
                placeholder="예) 우리 삼 남매와 자라나는 어린 손주들에게, 교회의 신앙 동역자들에게"
                className="w-full bg-[#F9F7F2] border border-[#E5E1D8] px-4 py-3 text-sm rounded-lg text-[#2D2926] outline-none focus:ring-1 focus:ring-[#8B7E66] focus:border-[#8B7E66]"
              />
            </div>

            {/* Row 3: Key Events */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A443D] mb-2 flex items-center gap-1.5 font-serif-korean">
                <BookOpen className="w-4 h-4 text-[#8B7E66]" />
                주인공의 주요 기념일이나 삶의 연대기적 하이라이트
              </label>
              <input
                type="text"
                name="keyEvents"
                value={formData.keyEvents}
                onChange={handleInputChange}
                placeholder="예) 올해 가을 팔순 생신 기념, 교향 고향마을과 첫 일터 상점 일생, 은퇴 헌정 예배"
                className="w-full bg-[#F9F7F2] border border-[#E5E1D8] px-4 py-3 text-sm rounded-lg text-[#2D2926] outline-none focus:ring-1 focus:ring-[#8B7E66] focus:border-[#8B7E66]"
              />
            </div>

            {/* Row 4: Narrative story */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A443D] mb-2.5 flex items-center gap-1.5 font-serif-korean">
                <FlameKindling className="w-4 h-4 text-[#8B7E66]" />
                자손들이 대대로 잊지 않고 물어보거나 전개되었으면 하는 사연/신앙 고백 (가장 소중함)
              </label>
              <textarea
                name="warmStories"
                value={formData.warmStories}
                onChange={handleInputChange}
                rows={4}
                placeholder="어려웠던 극복 경험, 어머니의 낡은 찬송가 구절, 부모님의 특별한 일상 사랑 등 편안하게 가치 위주로 서술형 적어주시면 됩니다."
                className="w-full bg-[#F9F7F2] border border-[#E5E1D8] px-4 py-3 text-sm rounded-lg text-[#2D2926] outline-none focus:ring-1 focus:ring-[#8B7E66] focus:border-[#8B7E66] leading-relaxed"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-10 py-4 bg-[#4A443D] hover:bg-[#3D3832] text-[#F9F7F2] text-xs font-bold uppercase tracking-widest rounded-none shadow-md transition-all duration-300 flex items-center justify-center gap-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-serif-korean"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#F9F7F2] border-t-transparent rounded-full animate-spin" />
                    <span>레거시 영상 설계안 분석 중...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    <span>맞춤형 영화 기획 제안서 생성하기 (무료)</span>
                    <ArrowRight className="w-4 h-4 text-amber-200" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Loading overlay panel */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mt-6 p-8 bg-[#E5E1D8]/40 border border-[#8B7E66]/60 text-center rounded-xl"
            >
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 bg-[#4A443D] rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2.5 h-2.5 bg-[#4A443D] rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2.5 h-2.5 bg-[#4A443D] rounded-full animate-bounce" />
              </div>
              <p className="font-serif text-sm text-[#3D3832] font-semibold transition-all duration-500 max-w-lg mx-auto">
                {LOADING_MESSAGES[loadIndex]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error panel */}
        {errorStatus && (
          <div className="mt-6 p-6 bg-red-50 border border-red-200 text-red-800 text-sm font-medium font-serif-korean">
            {errorStatus}
          </div>
        )}

        {/* Cinematic Film Planning Report Outputs */}
        {planResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white border-2 border-[#8B7E66]/40 p-6 sm:p-12 shadow-xl rounded-2xl relative analog-grain text-[#2D2926]"
          >
            {/* Film Stamp */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 border border-dashed border-[#8B7E66] py-1 px-3 text-[#8B7E66] font-mono text-[9px] tracking-widest font-bold rounded rotate-6 select-none uppercase">
              Official Proposal
            </div>

            {/* Document Header */}
            <div className="text-center mb-10 border-b border-[#E5E1D8] pb-8">
              <p className="font-mono text-[10px] text-[#8B7E66] tracking-[0.2em] uppercase font-bold">
                CRAFTED DIRECTED FILM OUTLINE BY LEGACY FILM
              </p>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#4A443D] font-extrabold mt-3 tracking-tight">
                『 {planResult.filmTitle} 』
              </h1>
              <p className="font-serif text-xs text-[#6B5F4F] tracking-wider mt-2 font-medium">
                주인공: {formData.clientName} 님을 위한 커스텀 기획안
              </p>
            </div>

            {/* General Overview */}
            <div className="mb-10">
              <h3 className="font-serif text-xs font-bold text-[#8B7E66] uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8B7E66]" />
                작품 기획 개요
              </h3>
              <p className="font-serif-korean text-sm text-[#3D3832] leading-relaxed bg-[#F2EFE9] p-5 border-l-4 border-[#8B7E66] rounded-r-lg">
                {planResult.conceptOverview}
              </p>
            </div>

            {/* 3 Chapters Scriptboard */}
            <div className="space-y-8 mb-10">
              <h3 className="font-serif text-xs font-bold text-[#8B7E66] uppercase tracking-[0.15em] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8B7E66]" />
                스토리보드 3부작 세부 구성안 & 인터뷰 설계지
              </h3>

              {planResult.chapters.map((ch, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#F2EFE9]/40 border border-[#E5E1D8] p-5 sm:p-6 rounded-xl transition-all duration-200 hover:border-[#8B7E66]"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-black bg-[#8B7E66]/20 text-[#4A443D] p-1 px-2.5 rounded-full">
                      CH.0{idx + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-serif text-base font-bold text-[#3D3832] mb-2">
                        {ch.chapterTitle}
                      </h4>
                      <p className="font-serif-korean text-xs sm:text-sm text-[#6B5F4F] mb-4 leading-relaxed">
                        {ch.chapterFocus}
                      </p>
                      
                      {/* Interactive interview questions checklist */}
                      <div className="border-t border-[#E5E1D8] pt-4 space-y-3">
                        <span className="block text-[9px] font-bold text-[#8B7E66] uppercase tracking-[0.15em] mb-1">
                          권장 1:1 인터뷰 연출 질문 목록 (촬영 전 기획자 추천)
                        </span>
                        
                        {ch.interviewQuestions.map((question, qIdx) => {
                          const itemKey = `${idx}-${qIdx}`;
                          const isChecked = !!checkedQuestions[itemKey];
                          const isCopied = copiedKey === itemKey;

                          return (
                            <div 
                              key={qIdx} 
                              className="flex items-start gap-2.5 bg-white p-3 border border-[#E5E1D8] rounded-lg group/item transition-all"
                            >
                              <button
                                type="button"
                                onClick={() => toggleQuestionCheck(itemKey)}
                                className="mt-0.5 text-[#8B7E66] hover:text-[#4A443D] transition-colors flex-shrink-0 cursor-pointer"
                              >
                                {isChecked ? (
                                  <CheckSquare className="w-4 h-4 text-[#4A443D]" />
                                ) : (
                                  <div className="w-4 h-4 border border-[#8B7E66]/60 bg-stone-50 rounded" />
                                )}
                              </button>
                              <span 
                                onClick={() => toggleQuestionCheck(itemKey)}
                                className={`text-xs sm:text-sm font-serif-korean text-[#3D3832] cursor-pointer hover:text-[#2D2926] transition-all flex-1 leading-relaxed ${
                                  isChecked ? "line-through text-[#8B7E66] opacity-60" : ""
                                }`}
                              >
                                "{question}"
                              </span>
                              
                              <button
                                type="button"
                                onClick={() => copyToClipboard(question, itemKey)}
                                className="opacity-0 group-hover/item:opacity-100 text-[#8B7E66] hover:text-[#4A443D] p-0.5 transition-opacity cursor-pointer"
                                title="이 질문지 텍스트 복사"
                              >
                                {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Music and Aesthetic Vibe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 border-t border-b border-[#E5E1D8] py-8">
              <div>
                <h4 className="font-serif text-xs font-bold text-[#8B7E66] uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-[#8B7E66]" />
                  사운드 트랙 & 분위기 연출안
                </h4>
                <p className="font-serif-korean text-xs text-[#3D3832] leading-relaxed bg-[#F2EFE9]/40 p-4 border border-[#E5E1D8] rounded-lg">
                  {planResult.soundtrackAndVibe}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-xs font-bold text-[#8B7E66] uppercase tracking-[0.15em] mb-2 flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4 text-[#8B7E66]" />
                  가문 고유 유산/준비 추천 서류
                </h4>
                <div className="font-serif-korean text-xs text-[#3D3832] leading-relaxed bg-[#F2EFE9]/40 p-4 border border-[#E5E1D8] rounded-lg">
                  <p className="font-bold text-[#4A443D] mb-2">총괄 프로듀서가 권하는 촬영 사전 체크리스트:</p>
                  <p className="whitespace-pre-line">{planResult.faithChecklist}</p>
                </div>
              </div>
            </div>

            {/* Warm Director Letter */}
            <div className="p-6 sm:p-8 bg-[#F2EFE9] border border-[#8B7E66]/40 text-[#3D3832] rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4 text-rose-500 animate-pulse fill-rose-500" />
                <span className="font-mono text-[9px] font-bold text-[#8B7E66] tracking-[0.2em] uppercase">
                  LETTER FROM THE DIRECTOR
                </span>
              </div>
              <p className="font-serif-korean text-xs sm:text-sm leading-relaxed whitespace-pre-line italic">
                {planResult.aiConsultantMessage}
              </p>
              <div className="text-right mt-4 pt-4 border-t border-[#E5E1D8]">
                <p className="font-serif text-xs font-bold text-[#4A443D] uppercase tracking-wide">
                  레거시 필름 총괄 기획 사령탑 드림
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#8B7E66] font-bold">
                  Executive Director of Legacy Film
                </p>
              </div>
            </div>

            {/* Action buttons printable */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-between items-center border-t border-[#E5E1D8] pt-6">
              <p className="text-[9px] text-[#8B7E66] font-mono uppercase tracking-wider">
                위 기획안은 AI 시네마 엔진이 실시간 생성한 공식 초안입니다.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={printDocument}
                  className="px-4 py-2.5 bg-[#F9F7F2] hover:bg-[#F2EFE9] border border-[#8B7E66] text-[#4A443D] text-xs font-bold uppercase tracking-wider rounded-none transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  인쇄 또는 PDF 저장
                </button>
                <a
                  href="#contact-section"
                  className="px-4 py-2.5 bg-[#4A443D] hover:bg-[#2D2926] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-amber-200" />
                  기획 상담 문의하기
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </div>
    </section>
  );
}
