# Reference Map

이 문서는 포트폴리오 구현자가 어떤 원본 문서를 어디에 사용해야 하는지 정리한다.

## Primary Sources

### `Resume_Master.md`

Use for:

- Hero headline
- Summary
- Core Strengths
- Experience timeline
- Skills
- Education
- Side Projects & Research

Important extraction:

- 정체성: 문제 해결형 백엔드 엔지니어, AI/AX 확장 역량 보유
- 핵심 문장: 현업의 복잡한 문제를 운영 가능한 시스템으로 바꾸고, AI와 Agent를 개발 조직의 workflow로 연결하는 개발자
- 핵심 경험:
  - 제조향 AI 챗봇 시스템
  - 비전 검사 포털
  - 물류 솔루션 사업 고도화
  - CJ제일제당 제조솔루션 전환
  - 한살림 물류 시스템
  - 물류 솔루션 고도화
  - 바이오노트/신흥 물류 시스템
- 연구/사이드:
  - Taily Storii
  - Text-to-SQL 연구

### `Career_References/Developer_Positioning_Analysis.md`

Use for:

- About section
- Developer Philosophy section
- Closing tone
- Copywriting guardrails

Important extraction:

- 복잡한 업무와 반복 작업을 구조화해 운영 가능한 시스템과 재사용 가능한 workflow로 바꾸는 개발자
- 운영 안정성, 사용자 경험, 개발 생산성을 함께 보는 개발자
- AI를 잘 쓰는 사람보다, 조직이 재사용 가능한 방식으로 쓰게 만드는 사람
- 순수 모델 연구자나 단순 SI 커스터마이징 개발자로 보이지 않도록 주의

### `Career_References/Yearly_Achievements_Summary.md`

Use for:

- Year-based timeline
- Timeline detail cards
- Quantified impact labels

Important extraction:

- 2023:
  - Vite 전환으로 빌드 시간 10분 이상에서 2분 이내
  - Jenkins 자동 배포
  - DB Failover 협업
  - 쿼리 최적화
- 2024:
  - I/F 테이블 설계
  - 출력물 배포 자동화
  - 운영 안정화
- 2025:
  - 재고조사 프로세스 33% 간소화
  - Canvas 기반 창고 레이아웃 디자이너
  - 웨이브 관리 시스템
  - Reactive Stack 전환
  - AI Agent Coding 활용 공유

### `Career_References/Frontend_Project_Fact_Bank.md`

Use for:

- Project Detail cards
- Frontend-facing interaction/case copy
- Visual UI examples if screenshots are later added

Important extraction:

- WMS Frontend:
  - 운영형 UI
  - 상태 기반 액션 제어
  - 공통 그리드 패턴
  - 긴 작업 UX
- Edge Portal:
  - 대시보드/리포트 UI
  - 이미지 뷰어 줌/오버레이
  - 탭별 개별 새로고침
  - 데이터 시각화
- AW Project:
  - React/TypeScript
  - SSE
  - 설명 가능한 AI UI
  - LangGraph/MCP
  - 제품형 인터페이스

### `Career_References/Manufacturing_Plant_AI_Chatbot_System.md`

Use for:

- 2026 AI/Agent timeline event
- AI/AX detail panel
- Agent workflow section

Important extraction:

- LangGraph ReAct Agent 기반 멀티 데이터소스 통합 AI 시스템
- MCP Protocol 통합
- SSE 스트리밍
- 실시간 센서 데이터 + 문서 지식베이스 통합
- 도구 실행 상태와 LLM 토큰 생성 실시간 전송

### `Career_References/Taily Storii Project.md`

Use for:

- Side project timeline event
- Side project detail panel
- Growth beyond company work

Important extraction:

- AI 기반 인터랙티브 스토리텔링 플랫폼
- FastAPI, LangGraph, PostgreSQL, Flutter, AWS ECS/Fargate
- 상태 머신 기반 스토리 생성
- OAuth/JWT 인증
- DB 마이그레이션
- S3 이미지 저장

### `00_Portfolio_Frame.md`

Use for:

- Portfolio section order
- Notion portfolio structure adaptation
- Selected Work formatting principle

Important extraction:

- 문제 -> 구현 -> 결과 -> 직무 연결점 흐름
- Profile, Fit, Core Strengths, Selected Work, Applied Workflow, Tech Stack, Closing 구조
- AI/AX 포지션에서는 workflow, 도구 연결, 문서화를 앞에 둔다.

### `Life Experience/Concept.md`

Use for:

- Visual reference concept
- Timeline interaction reference

Important extraction:

- 첫 이미지처럼 X축 기준으로 커리어와 삶을 작성하는 HTML 포트폴리오
- 상세보기가 나오는 형식
- `Resume_Master.md`를 기준으로 샘플링
- 세련된 모던 웹 디자인 지향

## Supporting Sources

### Role Playbooks

Path:

- `00_Role_Playbooks/01_Frontend`
- `00_Role_Playbooks/02_Backend`
- `00_Role_Playbooks/03_AI_Backend`
- `00_Role_Playbooks/04_AX_Agent`

Use for:

- 섹션별 강조 축 조정
- 향후 회사별 variant 생성
- 프로젝트 설명 톤 조절

### Company Portfolio Drafts

Examples:

- `Kakao/01_Agentic_AI_Platform_P14347/50_Portfolio_KR.md`
- `Smilegate/01_AI_Agent_Backend_5928/50_Portfolio_KR.md`
- `KakaoBank/01_Backend_Developer_248549/50_Portfolio_KR.md`
- `KakaoStyle/01_AI_Transformation_Manager_TjRvVOca/50_Portfolio_KR.md`

Use for:

- 특정 프로젝트 설명의 완성된 문장 참조
- 역할별 framing 문장 비교
- Selected Work 상세 문안 보강

## Content Use Rules

- 포트폴리오 본문은 과장하지 않는다.
- 회사 내부 보안상 화면/코드 공개가 어려운 프로젝트는 설명과 구조 중심으로 표현한다.
- 사이드 프로젝트와 연구는 `side orbit`으로 분리하지 않고 연도별 타임라인에 같이 넣는다.
- 프로젝트 상세는 모든 항목을 길게 쓰지 않는다. 클릭했을 때 30초 안에 핵심이 읽히는 밀도로 쓴다.
- Closing은 특정 직무 전환 선언이 아니라 계속 탐구하며 점진적으로 성장하는 메시지로 닫는다.
