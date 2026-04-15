# Content Architecture

## Navigation

Top navigation:

- About Me
- Timeline
- Work
- Philosophy
- Contact

Mobile navigation:

- 상단 고정 메뉴보다 우측 하단 또는 상단 compact menu를 권장한다.
- 첫 화면의 시각 몰입을 방해하지 않도록 메뉴는 작게 둔다.

## Section 1: Hero

Purpose:

- 사용자가 첫 3초 안에 “이 사람은 어떤 개발자인가”를 이해하게 한다.

Content:

- Name: `이준규`
- One-line identity:
  - `현실의 복잡한 문제를 시스템과 workflow로 바꾸는 개발자`
- Supporting line:
  - `물류와 제조 현장에서 시작해 운영 안정화, 데이터 흐름, AI Agent workflow까지 탐구하며 점진적으로 성장하고 있습니다.`
- Links:
  - Blog: `junq2021.tistory.com`
  - GitHub: `github.com/JQ-WCoding`
  - Profile/Resume anchor

Visual:

- 우주/은하 배경
- 우측 프로필 사진
- 은은한 별 움직임
- 아래쪽에 타임라인의 일부가 첫 화면부터 보이게 배치

## Section 2: Life & Career Timeline

Purpose:

- 커리어와 삶의 사건을 한 흐름으로 읽게 한다.
- 회사 경력, 대학원, 연구, 사이드 프로젝트, AI/AX 전환을 같은 연도 축 위에 둔다.

Timeline rule:

- `Side orbit`은 별도 섹션으로 분리하지 않는다.
- 모든 사건은 연도별 X축 또는 모바일 세로축 위에 같이 배치한다.
- 타입만 다르게 보여준다.

Event types:

- `career`: 회사/실무 프로젝트
- `research`: 대학원, 논문, 연구
- `side-project`: 개인 프로젝트
- `workflow`: Agent coding, 문서화, 팀 workflow 개선
- `philosophy`: 개발자로서 관점이 바뀐 시점

Suggested timeline:

| Year | Type | Event | Meaning |
|---|---|---|---|
| 2021 | career | 모비어스앤벨류체인 합류 | 물류/의료기기 도메인에서 첫 실무 시작 |
| 2021 | career | 신흥 물류 시스템 | 발주/ERP 연동, DB 프로시저 기반 로직 경험 |
| 2022 | career | 바이오노트 물류 시스템 | 고객 맞춤형 입고 프로세스, 프레임워크 규칙 문서화 |
| 2022 | career | CJ 올리브네트웍스 합류 | 제조/물류 솔루션 연구 및 개발로 확장 |
| 2022 | career | 물류 솔루션 고도화 | React 전환, CI/CD, 프레임워크 규칙 정립 |
| 2023 | career | 한살림 물류 시스템 운영 안정화 | Vite 전환, Jenkins 자동 배포, DB Failover 협업 |
| 2023 | research | 한양대학교 대학원 컴퓨터공학 | 실무와 병행하며 연구 기반 확장 |
| 2024 | career | 한살림 2년차 개선 | I/F 테이블 설계, 운영 프로세스 개선, 출력물 배포 자동화 |
| 2025 | career | CJ제일제당 제조솔루션 전환 | PL, 프로세스/DB 재설계, 이관 전략 |
| 2025 | career | 물류 솔루션 사업 고도화 | Canvas 레이아웃 디자이너, Wave 관리, Agent Coding 공유 |
| 2025 | side-project | Taily Storii | LangGraph 기반 AI 스토리텔링 앱 설계/구현 |
| 2025 | career | 비전 검사 포털 | Reactive Kafka/R2DBC, 데이터 시각화, 운영형 UI 개선 |
| 2026 | career | 제조향 AI 챗봇 시스템 | Local LLM, LangGraph, MCP, SSE 기반 시연 시스템 |
| 2026 | research | Text-to-SQL 연구 정리 | CARES-SQL 논문, 검색/평가 자동화 |
| 2026 | workflow | AI/AX workflow 지향 | Agent를 팀 workflow와 문서화 체계로 연결 |
| Upcoming | philosophy | 계속 탐구하는 개발자 | 변화하는 세상을 관찰하며 점진적으로 성장 |

## Section 3: Detail Panel

Purpose:

- 별을 클릭했을 때 해당 사건을 깊게 설명한다.

Panel fields:

- Title
- Period
- Type
- Stack
- Role
- Problem
- What I Built
- Impact
- What Changed In Me
- Source document

Panel writing rule:

- 이력서 문장보다 스토리 문장으로 쓴다.
- 각 항목은 짧게 유지한다.
- 내부 보안상 공개가 어려운 내용은 구조와 역할 중심으로 설명한다.

## Section 4: Selected Work

Purpose:

- 타임라인에서 핵심 프로젝트만 다시 묶어 보여준다.

Recommended items:

1. 제조향 AI 챗봇 시스템
2. 비전 검사 포털
3. CJ제일제당 제조솔루션 전환
4. 한살림 물류 시스템
5. Taily Storii
6. Text-to-SQL 연구

Card structure:

- Project name
- One-line meaning
- Stack tags
- `Problem -> Build -> Impact -> Growth` short bullets

## Section 5: Developer Philosophy

Purpose:

- 단순 프로젝트 나열 이후, 이 개발자가 어떤 기준으로 일하는지 정리한다.

Philosophy pillars:

1. 현실의 복잡도를 먼저 이해한다.
2. 프로세스와 데이터 흐름으로 구조화한다.
3. 운영 안정성과 사용자 경험을 함께 본다.
4. 문서와 규칙으로 팀이 다시 쓸 수 있는 기준을 남긴다.
5. AI를 기능이 아니라 workflow로 연결한다.

## Section 6: Tech Stack

Purpose:

- 기술 나열은 짧고 명확하게 정리한다.

Groups:

- Back-End: Java, Spring, Spring Boot, Python, FastAPI, Node.js
- Front-End: React, TypeScript, JavaScript, ExtJS, HTML/CSS
- AI / AX: LangGraph, LangChain, MCP, SSE, Prompt Engineering, Claude Code, Cursor
- Database: Oracle, MS-SQL, MySQL, PostgreSQL
- Infra / DevOps: Nginx, Tomcat, Linux, Jenkins, GitLab CI/CD, Git
- Collaboration: Jira, Confluence, Slack, Teams, Notion, Obsidian

## Section 7: Closing

Purpose:

- 특정 직무 도착점이 아니라 계속 성장하는 사람이라는 인상을 남긴다.

Message:

> 저는 변화하는 세상을 계속 탐구하면서, 경험을 구조화하고 다음 문제를 풀 수 있는 방식으로 조금씩 성장하고 있습니다. 지금까지의 경력은 하나의 완성된 결론이라기보다, 더 복잡한 현실을 더 나은 시스템과 workflow로 바꿔가기 위한 과정입니다.

Call to action:

- Blog
- GitHub
- Email or Contact anchor if available
