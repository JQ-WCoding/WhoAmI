window.portfolioData = {
  profile: {
    name: "이준규",
    headline: "현실의 복잡한 문제를 시스템과 workflow로 바꾸는 개발자",
    summary:
      "물류와 제조 현장에서 시작해 운영 안정화, 데이터 흐름, AI Agent workflow까지 탐구하며 점진적으로 성장하고 있습니다.",
    links: [
      {
        label: "Blog",
        href: "https://junq2021.tistory.com/"
      },
      {
        label: "GitHub",
        href: "https://github.com/JQ-WCoding"
      }
    ]
  },
  eventTypes: {
    career: {
      label: "Career",
      accent: "#ffffff"
    },
    research: {
      label: "Research",
      accent: "#9ff0d0"
    },
    "side-project": {
      label: "Side Project",
      accent: "#ffd38a"
    },
    philosophy: {
      label: "Philosophy",
      accent: "#f6a6ff"
    }
  },
  timelineEvents: [
    {
      id: "2021-mobius-start",
      year: "2021",
      period: "2021.09 - 2022.09",
      type: "career",
      title: "모비어스앤벨류체인",
      subtitle: "물류와 의료기기 도메인에서 첫 실무를 시작",
      role: "SI 솔루션 웹 개발",
      stack: ["Spring", "Sencha.js", "MS-SQL"],
      problem: "고객사별로 다른 물류 업무 흐름을 시스템 안에서 구현해야 했습니다.",
      built: [
        "발주 로직과 ERP 주문 송수신 흐름을 구현했습니다.",
        "DB 프로시저 기반 핵심 처리 로직을 다뤘습니다.",
        "프레임워크 규칙과 개발 가이드를 문서화했습니다."
      ],
      impact: [
        "물류 도메인의 입고, 발주, 주문 흐름을 실무 시스템으로 이해하게 됐습니다.",
        "고객 맞춤 개발에서 구조와 규칙의 중요성을 배웠습니다."
      ],
      growth:
        "첫 실무 경험을 통해 개발은 코드 작성보다 업무 흐름을 이해하는 일에서 시작된다는 기준을 갖게 됐습니다.",
      source: "Resume_Master.md"
    },
    {
      id: "2022-cj-start",
      year: "2022",
      period: "2022.09 - 2022.12",
      type: "career",
      title: "CJ 올리브네트웍스 합류",
      subtitle: "제조와 물류 솔루션 연구 및 개발로 확장",
      role: "인프라 구성 및 화면 전환 개발",
      stack: ["Spring Boot", "React", "Node.js", "Oracle", "GitLab CI/CD"],
      problem: "레거시 프론트엔드와 운영 방식에서 개발 일관성과 배포 효율을 높여야 했습니다.",
      built: [
        "Sencha.js 기반 화면을 React 기반으로 전환했습니다.",
        "GitLab 기반 CI/CD 파이프라인을 구축했습니다.",
        "솔루션 프레임워크 규칙을 정립하고 공유했습니다."
      ],
      impact: [
        "화면 구성 유연성과 개발 생산성을 높였습니다.",
        "신규 인력 온보딩에 필요한 기준 문서를 남겼습니다."
      ],
      growth:
        "기능보다 팀이 반복해서 쓸 수 있는 기준을 만드는 일이 장기적으로 더 큰 생산성을 만든다는 점을 경험했습니다.",
      source: "Resume_Master.md"
    },
    {
      id: "2023-hansalim-stability",
      year: "2023",
      period: "2022.12 - 2024.12",
      type: "career",
      title: "한살림 물류 시스템",
      subtitle: "운영 안정화와 개발 생산성 개선",
      role: "프로세스 개발 / 유지보수 및 개발 리딩",
      stack: ["Spring Boot", "React", "Node.js", "Oracle", "Jenkins"],
      problem:
        "장기 운영 프로젝트에서 긴급 대응 속도, 조회 성능, 배포 체계를 동시에 개선해야 했습니다.",
      built: [
        "Webpack/Babel 기반 빌드를 Vite로 전환했습니다.",
        "Jenkins 기반 자동 배포 프로세스를 구축했습니다.",
        "DB Failover 환경에 맞는 애플리케이션 연결 설정을 인프라 팀과 구성했습니다.",
        "I/F 테이블과 연계 프로세스를 개선했습니다."
      ],
      impact: [
        "개발 빌드 시간을 10분 이상에서 2분 이내로 줄였습니다.",
        "긴급 운영 대응 속도와 배포 안정성을 높였습니다.",
        "대용량 조회와 백업 체계 개선에 기여했습니다."
      ],
      growth:
        "운영 안정성은 별도 영역이 아니라 기능 개발과 함께 설계해야 하는 개발 품질이라는 점을 체감했습니다.",
      source: "Resume_Master.md; Career_References/Yearly_Achievements_Summary.md"
    },
    {
      id: "2025-cj-manufacturing-transition",
      year: "2025",
      period: "2025.01 - 2025.07",
      type: "career",
      title: "CJ제일제당 제조솔루션 전환",
      subtitle: "프로세스와 데이터 구조를 다시 설계한 전환 프로젝트",
      role: "PL & 개발 리딩",
      stack: ["Spring Boot", "React", "Oracle", "MS-SQL", "Nginx"],
      problem: "비효율적인 제조 프로세스를 분석하고, 데이터 이관 리스크까지 고려해 전환해야 했습니다.",
      built: [
        "이관 대상 프로세스와 테이블 구조를 재설계했습니다.",
        "대용량 데이터 이관 기준과 전략을 수립했습니다.",
        "현업, 인프라, 데이터 팀과 협업하며 개발 리딩을 수행했습니다."
      ],
      impact: [
        "데이터 무결성과 프로세스 일관성을 확보할 수 있는 기반을 마련했습니다.",
        "배포 이전 로그 추적과 이력 검증 자동화로 운영 관리 체계를 강화했습니다."
      ],
      growth:
        "복잡한 전환 프로젝트에서 개발자는 코드뿐 아니라 프로세스, 데이터, 사람 사이의 흐름을 정리해야 한다는 점을 배웠습니다.",
      source: "Resume_Master.md"
    },
    {
      id: "2025-storii",
      year: "2025",
      period: "2025.02 - 2025.12",
      type: "side-project",
      title: "Taily Storii",
      subtitle: "AI 기반 인터랙티브 스토리텔링 플랫폼",
      role: "Backend 개발 및 시스템 설계",
      stack: ["FastAPI", "LangGraph", "PostgreSQL", "Flutter", "AWS ECS/Fargate"],
      problem: "사용자 선택에 따라 이어지는 AI 스토리 생성 경험을 모바일 서비스로 만들고 싶었습니다.",
      built: [
        "LangGraph 상태 머신 기반 스토리 생성 workflow를 설계했습니다.",
        "FastAPI 기반 REST API와 OAuth/JWT 인증을 구현했습니다.",
        "MySQL에서 PostgreSQL로 마이그레이션하고 StoryChapter 중심 구조로 재설계했습니다.",
        "AWS ECS/Fargate 배포와 S3 이미지 저장을 구성했습니다."
      ],
      impact: [
        "회사 프로젝트 밖에서도 AI workflow와 제품형 백엔드를 직접 연결해봤습니다.",
        "인증, 저장, 검색, 좋아요, 이미지 생성까지 서비스 완성도를 구성했습니다."
      ],
      growth:
        "사이드 프로젝트를 통해 AI 기능을 사용자 경험, 데이터 모델, 배포 구조까지 포함한 제품으로 보는 관점을 키웠습니다.",
      source: "Career_References/Taily Storii Project.md"
    },
    {
      id: "2025-wms-advanced",
      year: "2025",
      period: "2025.09 - 2025.11",
      type: "career",
      title: "물류 솔루션 사업 고도화",
      subtitle: "운영형 UI와 Agent Coding workflow",
      role: "Full-stack 개발 및 시스템 개선",
      stack: ["ExtJS", "Spring", "Oracle", "Claude Code", "Cursor"],
      problem: "레거시 업무 화면을 안정적으로 개선하면서 개발 생산성도 함께 높여야 했습니다.",
      built: [
        "Canvas 기반 창고 레이아웃 디자이너를 구현했습니다.",
        "웨이브 관리 시스템과 출고 프로세스 최적화 기능을 구축했습니다.",
        "Claude Code와 Cursor를 프로젝트에 적용하고 Agent 규칙 문서를 정리했습니다."
      ],
      impact: [
        "재고조사 프로세스를 33% 간소화했습니다.",
        "운영형 화면의 공통 패턴과 예외 대응력을 높였습니다.",
        "AI Agent Coding 활용 공유 우수자로 선정됐습니다."
      ],
      growth:
        "AI 도구는 개인 생산성 도구에 그치지 않고 팀의 작업 방식과 문서 구조를 바꾸는 계기가 될 수 있음을 확인했습니다.",
      source: "Resume_Master.md; Career_References/Yearly_Achievements_Summary.md"
    },
    {
      id: "2025-edge-portal",
      year: "2025",
      period: "2025.12 - 현재",
      type: "career",
      title: "비전 검사 포털",
      subtitle: "실시간 비전 검사 운영 플랫폼",
      role: "Backend 개발 및 아키텍처 개선",
      stack: ["Spring WebFlux", "Reactor Kafka", "R2DBC", "React", "Vite"],
      problem:
        "대용량 실시간 메시지와 공장 및 라인 단위의 검사 데이터를 운영자가 읽기 쉽게 다뤄야 했습니다.",
      built: [
        "Blocking Kafka Consumer를 Reactor Kafka와 R2DBC 기반 non-blocking 구조로 전환했습니다.",
        "이미지 뷰어 줌과 오버레이, 라인 대시보드 레이아웃을 개선했습니다.",
        "시간별, 요일별 추론 통계와 NG 유형별 차트를 도입했습니다."
      ],
      impact: [
        "대용량 실시간 메시지 처리 성능과 시스템 안정성을 개선했습니다.",
        "운영자가 검사 상태와 추이를 더 빠르게 해석할 수 있게 했습니다."
      ],
      growth:
        "운영 시스템에서 데이터 흐름과 화면 경험은 분리되지 않으며, 백엔드 구조와 UI 가시성을 함께 봐야 한다는 관점을 강화했습니다.",
      source: "Resume_Master.md; Career_References/Frontend_Project_Fact_Bank.md"
    },
    {
      id: "2026-ai-chatbot",
      year: "2026",
      period: "2026.01 - 현재",
      type: "career",
      title: "제조향 AI 챗봇 시스템",
      subtitle: "LangGraph, MCP, SSE 기반 Agent 시스템",
      role: "AI 시스템 설계 및 전체 구현",
      stack: ["LangGraph", "FastAPI", "MCP", "SSE", "vLLM", "Qwen3-VL"],
      problem:
        "단순 챗봇이 아니라 현업 데이터와 문서 지식을 함께 조회하는 설명 가능한 AI 경험이 필요했습니다.",
      built: [
        "LangGraph ReAct Agent 기반 도구 선택 구조를 설계했습니다.",
        "MCP Protocol로 실시간 데이터 조회 도구를 Agent와 연결했습니다.",
        "FastAPI SSE로 도구 실행 상태와 토큰 생성을 실시간 전송했습니다.",
        "프론트엔드, 에이전트 백엔드, MCP 데이터 서버를 분리했습니다."
      ],
      impact: [
        "복잡한 쿼리에서도 진행 상황을 보여줘 체감 대기 시간을 줄였습니다.",
        "AI 기능을 실제 업무 맥락과 연결된 제품형 경험으로 만들었습니다."
      ],
      growth:
        "AI를 모델 호출이 아니라 도구, 데이터, 문서, 사용자 경험을 연결하는 workflow로 보게 됐습니다.",
      source: "Career_References/Manufacturing_Plant_AI_Chatbot_System.md"
    },
    {
      id: "2026-text-to-sql",
      year: "2026",
      period: "2023.09 - 2026.02",
      type: "research",
      title: "한양대학교 대학원 & Text-to-SQL 연구",
      subtitle: "컴퓨터공학 대학원과 CARES-SQL 논문을 하나의 연구 궤적으로 정리",
      role: "Graduate Student / Researcher",
      stack: ["NLP", "Text-to-SQL", "Evaluation", "SentenceTransformers", "TF-IDF"],
      problem:
        "실무 개발 경험을 연구 질문으로 확장하고, 경량 모델 환경에서도 Few-shot 예제를 효과적으로 검색해 Text-to-SQL 성능을 높일 수 있는지 검증하고 싶었습니다.",
      built: [
        "Text-to-SQL 연구 주제를 설계했습니다.",
        "SentenceTransformers, TF-IDF, Jaccard, 키워드 매칭을 결합한 하이브리드 유사도 기반 Few-shot 검색 구조를 실험했습니다.",
        "검색 최적화, 평가 자동화, 실험 결과 정리를 수행했습니다."
      ],
      impact: [
        "실무 문제 해결 방식에 실험, 평가, 재현성 관점을 더했습니다.",
        "연구 결과를 RISS 공개 등재 논문으로 정리했습니다.",
        "AI 시스템을 실험과 평가 관점에서 바라보는 기반을 얻었습니다."
      ],
      growth:
        "문제를 해결하는 것뿐 아니라, 왜 그 접근이 타당한지 검증하고 설명하는 습관을 키웠습니다.",
      source: "Resume_Master.md; RISS"
    },
    {
      id: "upcoming-continuous-growth",
      year: "Upcoming",
      period: "Next",
      type: "philosophy",
      title: "계속 탐구하는 개발자",
      subtitle: "변화하는 세계 속에서 점진적으로 성장",
      role: "Developer",
      stack: ["Backend", "AI/AX", "Workflow", "Documentation"],
      problem: "기술과 업무 환경은 계속 변하고, 개발자는 그 변화를 피할 수 없습니다.",
      built: [
        "새로운 도구를 단순히 써보는 데서 멈추지 않고 작업 방식으로 정리합니다.",
        "실무 경험, 연구, 사이드 프로젝트를 연결해 다음 문제를 풀 기반을 만듭니다.",
        "문서와 규칙으로 나와 팀이 다시 사용할 수 있는 지식을 남깁니다."
      ],
      impact: [
        "현재의 경력은 완성된 결론이 아니라 다음 성장의 재료가 됩니다.",
        "AI/AX는 목표 지점이 아니라 계속 탐구할 방향입니다."
      ],
      growth:
        "변화하는 세상을 계속 탐구하면서, 경험을 구조화하고 다음 문제를 풀 수 있는 사람으로 점진적으로 성장하고 있습니다.",
      source: "User direction; Career_References/Developer_Positioning_Analysis.md"
    }
  ],
  selectedWorks: [
    {
      id: "manufacturing-ai-chatbot",
      title: "제조향 AI 챗봇 시스템",
      meaning: "AI Agent를 실제 업무 데이터와 연결한 제품형 시연 시스템",
      stack: ["LangGraph", "FastAPI", "MCP", "SSE", "Local LLM"],
      problem: "현업 데이터와 문서 지식을 함께 다루는 설명 가능한 AI 경험이 필요했습니다.",
      build: "LangGraph Agent, MCP 조회 도구, SSE 스트리밍 UI를 연결했습니다.",
      impact: "도구 실행 과정과 답변 생성을 실시간으로 보여주는 AI 업무 경험을 만들었습니다.",
      growth: "AI를 기능이 아니라 workflow로 연결하는 관점을 강화했습니다."
    },
    {
      id: "vision-inspection-portal",
      title: "비전 검사 포털",
      meaning: "실시간 검사 데이터를 운영자가 읽을 수 있게 바꾼 운영 플랫폼",
      stack: ["Spring WebFlux", "Reactor Kafka", "R2DBC", "React", "Vite"],
      problem: "대용량 실시간 메시지와 검사 데이터를 운영자가 빠르게 해석해야 했습니다.",
      build: "non-blocking 백엔드 구조와 대시보드, 이미지 뷰어를 함께 개선했습니다.",
      impact: "처리 성능과 화면 가시성을 함께 개선했습니다.",
      growth: "운영 시스템에서는 백엔드와 UI를 분리해서 볼 수 없다는 기준을 다시 확인했습니다."
    },
    {
      id: "cj-manufacturing-transition",
      title: "CJ제일제당 제조솔루션 전환",
      meaning: "프로세스와 데이터 구조를 다시 설계한 전환 프로젝트",
      stack: ["Spring Boot", "React", "Oracle", "MS-SQL", "Nginx"],
      problem: "비효율적인 제조 프로세스와 이관 리스크를 함께 다뤄야 했습니다.",
      build: "테이블 구조, 이관 전략, 협업 흐름을 다시 정리했습니다.",
      impact: "데이터 무결성과 프로세스 일관성을 확보할 기반을 만들었습니다.",
      growth: "개발자는 코드뿐 아니라 프로세스와 데이터의 흐름도 함께 정리해야 한다는 점을 배웠습니다."
    },
    {
      id: "hansalim-logistics",
      title: "한살림 물류 시스템",
      meaning: "장기 운영 프로젝트의 안정화와 생산성 개선",
      stack: ["Spring Boot", "React", "Node.js", "Oracle", "Jenkins"],
      problem: "긴급 대응 속도, 조회 성능, 배포 체계를 같이 개선해야 했습니다.",
      build: "빌드 도구 전환, 자동 배포, DB Failover 대응, I/F 개선을 수행했습니다.",
      impact: "개발 빌드와 배포가 더 빠르고 안정적으로 돌아가게 했습니다.",
      growth: "운영 안정성은 기능과 별개가 아니라 함께 설계해야 한다는 기준을 얻었습니다."
    },
    {
      id: "taily-storii",
      title: "Taily Storii",
      meaning: "AI 스토리텔링 경험을 제품으로 연결한 개인 프로젝트",
      stack: ["FastAPI", "LangGraph", "PostgreSQL", "Flutter", "AWS ECS/Fargate"],
      problem: "사용자 선택에 따라 이어지는 AI 스토리 생성 경험을 만들고 싶었습니다.",
      build: "스토리 생성 workflow, 인증, 저장, 배포, 모바일 앱 구성을 직접 다뤘습니다.",
      impact: "AI 기능을 제품 경험과 데이터 구조, 배포 구조까지 포함해 보게 됐습니다.",
      growth: "회사 밖에서도 AI workflow를 끝까지 제품으로 연결해보는 기준을 만들었습니다."
    },
    {
      id: "text-to-sql-research",
      title: "Text-to-SQL 연구",
      meaning: "Few-shot 검색과 평가를 통해 성능을 검증한 연구 작업",
      stack: ["SentenceTransformers", "TF-IDF", "Jaccard", "Keyword Matching"],
      problem: "경량 모델 환경에서도 예제 검색 품질을 높일 수 있는지 검증하고 싶었습니다.",
      build: "하이브리드 유사도 기반 검색 구조와 평가 자동화를 설계했습니다.",
      impact: "연구 결과를 RISS 등재 논문으로 정리했습니다.",
      growth: "실험과 평가는 구현과 분리된 작업이 아니라 문제 해결의 신뢰도를 만드는 과정이라는 점을 배웠습니다."
    }
  ],
  philosophyPillars: [
    "현실의 복잡도를 먼저 이해합니다.",
    "프로세스와 데이터 흐름으로 구조화합니다.",
    "운영 안정성과 사용자 경험을 함께 봅니다.",
    "문서와 규칙으로 팀이 다시 쓸 수 있는 기준을 남깁니다.",
    "AI를 기능이 아니라 workflow로 연결합니다."
  ],
  techStacks: [
    {
      label: "Back-End",
      items: ["Java", "Spring", "Spring Boot", "Python", "FastAPI", "Node.js"]
    },
    {
      label: "Front-End",
      items: ["React", "TypeScript", "JavaScript", "ExtJS", "HTML/CSS"]
    },
    {
      label: "AI / AX",
      items: ["LangGraph", "LangChain", "MCP", "SSE", "Prompt Engineering", "Claude Code", "Cursor"]
    },
    {
      label: "Database",
      items: ["Oracle", "MS-SQL", "MySQL", "PostgreSQL"]
    },
    {
      label: "Infra / DevOps",
      items: ["Nginx", "Tomcat", "Linux", "Jenkins", "GitLab CI/CD", "Git"]
    },
    {
      label: "Collaboration",
      items: ["Jira", "Confluence", "Slack", "Teams", "Notion", "Obsidian"]
    }
  ],
  closing:
    "저는 변화하는 세상을 계속 탐구하면서, 경험을 구조화하고 다음 문제를 풀 수 있는 방식으로 점진적으로 성장하고 있습니다. 지금까지의 경력은 하나의 완성된 결론이라기보다, 더 복잡한 현실을 더 나은 시스템과 workflow로 바꿔가기 위한 과정입니다."
};
