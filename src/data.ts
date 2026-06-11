import { PackageDetail, AdditionalService, ProcessStep } from "./types";

export const BRAND_SLOGAN_TITLE = "삶을 기록하고, 사랑을 전하며, 믿음을 유산으로 남기다.";
export const BRAND_SLOGAN_SUB = "부모님의 이야기, 가족의 추억, 신앙의 여정을 따뜻한 영상 다큐멘터리로 담아 소중한 다음 세대에게 전달합니다.";

export const PACKAGES: PackageDetail[] = [
  {
    id: "MEMORY",
    title: "MEMORY",
    subTitle: "추억 기록 영상",
    price: "300,000원",
    duration: "5~10분 분량",
    shootingCount: "인터뷰 촬영 1회",
    features: [
      "인터뷰 촬영 1회 진행",
      "사진 및 영상 자료 디지털 편집",
      "감성적인 클래식 배경음악 삽입",
      "핵심 목소리 맥락 자막 구성",
      "고해상도 비디오 파일 제공 (USB 전달)"
    ],
    recommendations: [
      "부모님 생신 기념 특별한 선물",
      "소박하지만 감동적인 은퇴 기념패",
      "가족 전체가 참여하는 가벼운 여행/추억"
    ]
  },
  {
    id: "LEGACY",
    title: "LEGACY",
    subTitle: "인생 기록 영상",
    price: "700,000원",
    duration: "15~30분 분량",
    shootingCount: "인터뷰 촬영 2회",
    features: [
      "사전 맞춤형 인터뷰 디테일 기획 포함",
      "인터뷰 촬영 총 2회 (체계적 진행)",
      "옛날 종이 사진 및 앨범 직접 스캔/보정",
      "전문 다큐멘터리 스토리텔링 작가 편집",
      "자녀와 가족의 깜짝 감사 메시지 단락 수록"
    ],
    recommendations: [
      "회갑·칠순·팔순 생신 맞이 축하 헌정",
      "가문의 뿌리 와 부모님 일대기 역사 기록",
      "자녀들에게 두고두고 보여줄 인생 레터"
    ],
    isPopular: true
  },
  {
    id: "FAITH",
    title: "FAITH STORY",
    subTitle: "신앙 유산 영상",
    price: "1,000,000원",
    duration: "20~40분 분량",
    shootingCount: "가족/지인 교차 인터뷰 포함",
    features: [
      "깊이 있는 신앙 간증 및 기도 고백 인터뷰",
      "자주 읽으시던 평생의 성경책과 찬송가 활용",
      "가족 및 오랜 동역자 지인 축사 인터뷰",
      "출석 교회 사역 발자취 및 기록물 교차 삽입",
      "프리미엄 다큐 인포그래픽 자막 및 시네마 연출"
    ],
    recommendations: [
      "평생 헌신한 목회자, 선교사 은퇴 기념 마스터피스",
      "장로 장립, 권사 임직 등 가문의 믿음 고백 보존",
      "자자손손 전수할 명문가 가정 신앙 유산 프로젝트"
    ],
    badge: "가장 권장하는 믿음의 유산 프로젝트"
  }
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: "restore",
    title: "옛 사진 고화질 복원",
    description: "먼지 묻고 스크래치 난 부모님의 젊은 시절과 결혼식 사진을 최신 화질 개선 기술로 깨끗하게 복원합니다.",
    iconName: "Sparkles"
  },
  {
    id: "colorize",
    title: "흑백 사진 컬러 복원",
    description: "수십 년 전 촬영된 흑백 사진을 그때 당시의 생생한 빛깔과 피부 톤 그대로 자연스럽게 컬러화합니다.",
    iconName: "Palette"
  },
  {
    id: "ai-voice",
    title: "AI 음성 및 사운드 개선",
    description: "잡음이 심하거나 손상된 오래된 오디오 자산의 인프라를 복부하고, 부모님의 목소리를 더욱 또렷하게 정제합니다.",
    iconName: "Mic"
  },
  {
    id: "memorial",
    title: "추모 및 헌정 영상",
    description: "천국으로 먼저 소천하신 부모님의 삶을 추억하고, 추모 예배 및 장례식에서 상영할 은혜로운 연출본을 만듭니다.",
    iconName: "Heart"
  },
  {
    id: "dvd-usb",
    title: "프리미엄 원목 USB 소장",
    description: "각인 명패가 적용된 고급 오동나무 패키지와 자석식 원목 USB 드라이브 및 가죽 보관함을 한정 제작합니다.",
    iconName: "FolderHeart"
  },
  {
    id: "photobook",
    title: "스토리 프리미엄 포토북",
    description: "영상 인터뷰 자막 대본과 복원한 주요 사진 원본을 최고급 고급지에 담아낸 양장본 책자를 별도 제작합니다.",
    iconName: "BookOpen"
  }
];

export const EXPERIENCE_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "상담 신청",
    description: "기록하고 싶은 인생의 테마와 부모님의 이야기, 제작하고자 하는 동기나 전달 대상을 알려주세요."
  },
  {
    step: 2,
    title: "사전 인터뷰 & 대본 기획",
    description: "중요한 연대기와 기억하고 싶은 순간들을 정리하여, 부모님이 편하고 자랑스럽게 답하실 수 있는 질문지를 작성합니다."
  },
  {
    step: 3,
    title: "편안한 촬영 진행",
    description: "집이나 편안한 스튜디오에서 조장되지 않은 자연스러운 이야기와 따뜻한 침묵, 진솔한 표정을 촬영합니다."
  },
  {
    step: 4,
    title: "인생 스토리텔링 편집",
    description: "가족 메시지와 옛날 사진들을 연대별로 배치하고 깊은 울림의 찬송이나 음악과 함께 고품격 한 편의 영화로 빚어냅니다."
  },
  {
    step: 5,
    title: "최종 마스터 본 전달",
    description: "검토 과정을 거쳐 완벽한 고해상도 화질 비디오로 인출하여 원목 수공예 기프트 박스 및 요청 형태로 전송합니다."
  }
];

export const CORE_VALUES = [
  {
    subtitle: "눈빛과 목소리의 기록",
    title: "목소리와 감정은 복제될 수 없습니다",
    text: "사진은 단지 멈춰있는 과거의 찰나를 남기지만, 영상은 부모님의 부드러운 목소리 톤, 자녀를 축복할 때의 떨리는 눈물, 그리고 삶의 주름을 오롯이 입체적으로 보존합니다."
  },
  {
    subtitle: "확고한 신앙의 유산",
    title: "믿음 가문의 가장 거룩한 증거물",
    text: "부모님이 어떤 새벽 기도로 자녀들을 키워냈는지, 인생의 큰 위기 앞에서도 어떻게 주님을 신뢰하고 이겨냈는지를 담은 믿음의 발자취는 자녀와 손주들이 평생 꺼내 볼 나침반이 됩니다."
  },
  {
    subtitle: "독점적 스토리텔링",
    title: "한 사람의 인생은 도서관과 같다",
    text: "우리는 단순히 마이크를 쥐어주는 영상 제작자가 아닙니다. 인생의 복잡한 굴곡과 빛나는 가치를 귀담아 듣고, 다음 세대에 교훈이 되도록 엮어내는 전문 다큐멘터리 연출가입니다."
  }
];
