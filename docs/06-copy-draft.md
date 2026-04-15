# Copy Draft

이 문서는 실제 구현 시 `scripts/data.js`와 `index.html`에 넣을 문구 초안이다.

## Hero

Name:

```text
이준규
```

Headline:

```text
현실의 복잡한 문제를 시스템과 workflow로 바꾸는 개발자
```

Summary:

```text
물류와 제조 현장에서 시작해 운영 안정화, 데이터 흐름, AI Agent workflow까지 탐구하며 점진적으로 성장하고 있습니다.
```

Short intro:

```text
저는 복잡한 업무 흐름을 먼저 이해하고, 그것을 프로세스와 데이터 구조, 사용자 경험, 운영 가능한 시스템으로 다시 정리하는 일을 해왔습니다. 최근에는 AI와 Agent를 기능이 아니라 팀이 반복해서 활용할 수 있는 workflow로 연결하는 방향에 집중하고 있습니다.
```

## Timeline Section

Title:

```text
삶과 커리어가 이어진 궤적
```

Subtitle:

```text
회사 프로젝트, 연구, 사이드 프로젝트, AI/AX 탐구를 하나의 시간축 위에 놓았습니다. 각 별은 제가 어떤 문제를 만났고, 그 문제를 통해 무엇을 배우게 됐는지 보여줍니다.
```

Filter labels:

```text
All
Career
Research
Side Project
Workflow
Philosophy
```

## About

Title:

```text
복잡한 현실을 구조화하는 개발자
```

Body:

```text
처음부터 AI/AX를 향해 곧장 달려온 것은 아닙니다. 물류와 제조 현장에서 입고, 출고, 재고, 생산, 검사 같은 현실의 복잡한 흐름을 시스템으로 구현하며 커리어를 시작했습니다.

그 과정에서 개발은 기능을 만드는 일만이 아니라, 업무의 흐름을 이해하고 데이터 구조로 정리하고 운영 가능한 기준을 남기는 일이라는 관점을 갖게 됐습니다.

이제는 그 경험을 바탕으로 AI Agent, MCP, SSE, 문서 기반 workflow를 연결하며 변화하는 개발 환경 속에서 다음 문제를 풀어가고 있습니다.
```

## Selected Work

Section title:

```text
문제가 시스템이 된 순간들
```

Section subtitle:

```text
각 프로젝트는 기술 스택보다 문제를 어떻게 바라봤고 어떤 구조로 바꿨는지를 중심으로 정리했습니다.
```

### 제조향 AI 챗봇 시스템

```text
현업 데이터, 문서 지식, 도구 호출 과정을 하나의 Agent 경험으로 연결한 프로젝트입니다. LangGraph, MCP, SSE를 활용해 결과뿐 아니라 처리 과정을 설명할 수 있는 AI 인터페이스를 만들었습니다.
```

### 비전 검사 포털

```text
대용량 실시간 메시지와 검사 데이터를 운영자가 읽을 수 있는 형태로 바꾼 프로젝트입니다. Reactive Kafka/R2DBC 전환과 데이터 시각화, 이미지 뷰어 개선을 통해 시스템 안정성과 사용성을 함께 다뤘습니다.
```

### CJ제일제당 제조솔루션 전환

```text
비효율적인 제조 프로세스와 데이터 이관 리스크를 함께 다룬 전환 프로젝트입니다. PL로서 프로세스와 테이블 구조를 재설계하고, 여러 부서 사이의 협업 흐름을 정리했습니다.
```

### 한살림 물류 시스템

```text
장기 운영 프로젝트에서 빌드 시간, 배포, DB Failover, 조회 성능을 개선했습니다. 기능 개발과 운영 안정성이 분리된 일이 아니라는 기준을 만든 경험입니다.
```

### Taily Storii

```text
회사 밖에서 AI 기능을 제품 경험으로 연결해본 사이드 프로젝트입니다. LangGraph 기반 스토리 생성 workflow, FastAPI 백엔드, PostgreSQL 마이그레이션, Flutter 앱, AWS 배포까지 직접 다뤘습니다.
```

### Text-to-SQL 연구

```text
실무 문제 해결 방식을 연구와 평가로 확장한 경험입니다. 하이브리드 유사도 기반 Few-shot 검색 구조를 설계하고 CARES-SQL 연구를 RISS 등재 논문으로 정리했습니다.
```

## Developer Philosophy

Title:

```text
제가 문제를 바라보는 방식
```

Pillars:

```text
현실의 복잡도를 먼저 이해합니다.
프로세스와 데이터 흐름으로 구조화합니다.
운영 안정성과 사용자 경험을 함께 봅니다.
문서와 규칙으로 팀이 다시 쓸 수 있는 기준을 남깁니다.
AI를 기능이 아니라 workflow로 연결합니다.
```

Body:

```text
좋은 시스템은 새로운 기술을 빠르게 붙이는 것만으로 만들어지지 않는다고 생각합니다. 먼저 현실의 업무 흐름을 이해하고, 반복되는 문제를 구조화하고, 팀이 다시 사용할 수 있는 기준을 남겨야 합니다.

AI 역시 마찬가지입니다. 모델 호출 자체보다 중요한 것은 어떤 맥락을 주고, 어떤 도구와 연결하고, 어떤 방식으로 사용자의 workflow 안에 들어가게 할 것인지입니다.
```

## Tech Stack

Intro:

```text
기술은 문제를 설명하고 구조화하기 위한 도구로 사용해왔습니다.
```

Groups:

```text
Back-End: Java, Spring, Spring Boot, Python, FastAPI, Node.js
Front-End: React, TypeScript, JavaScript, ExtJS, HTML/CSS
AI / AX: LangGraph, LangChain, MCP Protocol, SSE, Prompt Engineering, Claude Code, Cursor
Database: Oracle, MS-SQL, MySQL, PostgreSQL
Infra / DevOps: Nginx, Tomcat, Linux, Jenkins, GitLab CI/CD, Git
Collaboration: Jira, Confluence, Slack, Teams, Notion, Obsidian
```

## Closing

Title:

```text
계속 탐구하며 점진적으로 성장합니다
```

Body:

```text
저는 변화하는 세상을 계속 탐구하면서, 경험을 구조화하고 다음 문제를 풀 수 있는 방식으로 조금씩 성장하고 있습니다.

지금까지의 경력은 하나의 완성된 결론이라기보다, 더 복잡한 현실을 더 나은 시스템과 workflow로 바꿔가기 위한 과정입니다.

앞으로도 새로운 기술과 환경을 관찰하고, 직접 실험하고, 다시 실무에 연결할 수 있는 형태로 정리하며 개발자로서의 궤적을 이어가고 싶습니다.
```

Compact version:

```text
변화하는 세상을 계속 탐구하고, 경험을 구조화하며, 다음 문제를 풀 수 있는 개발자로 점진적으로 성장하고 있습니다.
```

## Microcopy

Detail open button:

```text
View Detail
```

Detail labels:

```text
Problem
Built
Impact
Growth
Source
```

Scroll hint:

```text
Scroll to explore more
```

Empty filter state:

```text
이 필터에 해당하는 이벤트가 없습니다.
```
