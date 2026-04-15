# Portfolio Web Overview

- Project path: `/Users/junq/IdeaProjects/portfolio-web`
- Document purpose: 서버 없이 실행되는 정적 HTML 포트폴리오 웹 구현을 위한 기획, 콘텐츠, 디자인, 데이터, 구현 계획 정리
- Primary concept: **Cosmic Career Timeline**
- Primary message: **복잡한 현실을 시스템과 workflow로 바꾸며, 변화하는 세계를 계속 탐구하고 점진적으로 성장하는 개발자**
- Reference base: `/Users/junq/Library/Mobile Documents/iCloud~md~obsidian/Documents/Brain/1. Project/02_Career/Job_Support/Job_Applications`

## Goal

이 포트폴리오는 특정 회사 지원용 문서가 아니라, 이준규라는 개발자가 어떤 문제를 만나고, 어떤 방식으로 해결해왔고, 왜 지금 AI/AX 방향으로 확장하고 있는지를 보여주는 개인 웹 포트폴리오다.

핵심은 이력서 항목을 나열하는 것이 아니라 **삶과 커리어의 흐름**을 보여주는 것이다. 사용자는 우주 배경 위의 연도별 타임라인을 따라가며 물류/제조 도메인, 운영 안정화, UI/UX 개선, 대학원 연구, 사이드 프로젝트, AI Agent/AX workflow까지 이어지는 성장 흐름을 읽는다.

## Audience

- 채용 담당자: 짧은 시간 안에 개발자의 정체성과 성장 방향을 파악해야 하는 사람
- 현업 개발 리더: 실무에서 문제를 구조화하고 운영 가능한 시스템으로 만드는 역량을 보고 싶은 사람
- AI/AX 조직: AI를 단순 기능이 아니라 workflow, 문서화, 도구 연결 관점에서 다루는 사람을 찾는 팀
- 협업자: 이 사람이 어떤 기준으로 문제를 보고, 어떤 방식으로 일하는지 알고 싶은 사람

## Positioning

기본 정체성은 `문제 해결형 백엔드 엔지니어`다. 단, 웹 전체의 결론은 백엔드에만 머무르지 않는다.

- 현실의 복잡한 업무를 프로세스와 데이터 흐름으로 구조화한다.
- 운영 안정성, 사용자 경험, 개발 생산성을 함께 본다.
- 문서와 규칙을 남겨 팀이 반복적으로 활용할 수 있는 기준을 만든다.
- AI/Agent를 기능 시연이 아니라 실제 업무 workflow와 연결한다.
- 변화하는 기술 환경을 계속 탐구하며 점진적으로 성장한다.

## Format

- 서버 없는 정적 웹
- 기본 실행 방식: `index.html` 직접 열기
- 구현 파일 후보:
  - `index.html`
  - `styles.css`
  - `scripts/data.js`
  - `scripts/main.js`
  - `assets/`
  - `docs/`

## Design Principle

참고 이미지처럼 첫 화면에서 우주, 별, X축 타임라인, 상세 카드가 한 번에 보여야 한다. 다만 단순히 배경만 우주로 쓰는 것이 아니라, 커리어와 삶의 사건이 별자리처럼 연결되는 경험을 만든다.

페이지의 핵심 인터랙션은 다음과 같다.

- 연도별 별 클릭
- 상세 패널 열기
- career/research/side-project/philosophy 타입 필터
- 스크롤로 타임라인 이후 섹션 탐색
- 모바일에서는 세로 타임라인으로 자연스럽게 전환

## Closing Direction

마지막 메시지는 “AI/AX를 지향한다”에서 끝나지 않는다. 더 중요한 결론은 다음이다.

> 계속 변화하는 세상을 탐구하면서, 경험을 구조화하고, 다시 다음 문제를 풀 수 있는 사람으로 점진적으로 성장하고 있다.

이 문장은 포트폴리오 전체를 닫는 정서적 기준이다. 기술 스택이나 프로젝트 성과보다 오래 남는 메시지로 사용한다.
