# Posture

[![Known Vulnerabilities](https://snyk.io/test/github/afranche/posture/badge.svg)](https://snyk.io/test/github/afranche/posture) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/a998279965c94c9eab855019987f661a)](https://app.codacy.com/gh/afranche/posture/dashboard)

WIP Lightweight ASPM tool and vulnerability tracker

## Why ?

Posture was initially planned as a DefectDojo fork, a renowed ASPM tool
employed in DevSecOps teams. However, Posture was created on a fresh
base instead as DefectDojo bears a pretty heavy codebase as a result of
its many features. While Posture plans to support similar problems than
DefectDojo, their implementation will probably differ from how DefectDojo
handles them.

_What does it mean for you ?_ It means you can try both and get a feeling
at what suits your organization more! :heart_hands:

## Getting Started

### Docker Compose

__Docker Compose only runs well for development since it's a WIP.__

The easiest way to run Posture is through Docker Compose. All you need
is creating a `.env` file in which you can fill the `POSTGRES_PASSWORD`
variable. Once done, you should have posture working by running
`docker compose up` in your terminal and :sparkles: Voilà! :sparkles:

### Kubernetes (Helm)

TODO:
