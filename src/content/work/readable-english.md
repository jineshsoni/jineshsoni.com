---
title: Readable English
tagline: A reading tutor that listens — and keeps listening when the Wi-Fi drops.
tension: A child reading aloud needs feedback on every word, instantly. But classrooms have patchy networks, and student audio is the last thing you want leaving the device.
scope: Architecture and development of the cross-platform Flutter app (iOS, Android, Web) — on-device speech recognition, the word-matching engine, the practice games, the AI content pipeline, Firebase and subscriptions — working alongside Readable English’s product leadership.
summary: Case study — architecting Readable English, a Flutter reading-fluency app for iOS, Android and Web with real-time, on-device speech recognition via sherpa-onnx.
company: AppExert × Readable English, Inc.
role: Principal Developer
period: Nov 2024 — Present
order: 1
brand: '#F5B335'
platforms: [iOS, Android, Web]
tech:
  [
    Flutter,
    Dart,
    sherpa-onnx,
    On-device STT,
    Text matching,
    AI content pipeline,
    BLoC,
    GetX,
    Firebase,
    Remote Config,
    Crashlytics,
    In-App Purchases,
  ]
stats:
  - { value: '3', label: 'platforms, one on-device speech engine' }
  - { value: 'Offline', label: 'speech recognition, no server round-trip' }
  - { value: '3', label: 'skill games: decoding, vocabulary, fluency' }
links:
  website: https://readablenglish.com/
  appStore: https://apps.apple.com/app/readable-english-fluency-aid/id6752986008
icon: ../../assets/work/readable-english/icon.jpg
screens:
  - {
      src: ../../assets/work/readable-english/shot1.jpg,
      alt: 'Readable English home screen with suggested reading passages',
    }
  - {
      src: ../../assets/work/readable-english/shot3.jpg,
      alt: 'Breaking the Code — space-themed mission to collect the 21 glyphs',
    }
  - {
      src: ../../assets/work/readable-english/shot4.jpg,
      alt: 'Lesson flow from Falling Words to Vocab Vault, Space Race and Comp Quest',
    }
  - {
      src: ../../assets/work/readable-english/shot5.jpg,
      alt: 'Voice-based reading exercise with instant feedback',
    }
  - {
      src: ../../assets/work/readable-english/shot6.jpg,
      alt: 'Tutor breaking the word rhythm into syllables and sounds',
    }
  - {
      src: ../../assets/work/readable-english/shot7.jpg,
      alt: 'Word meaning, translation and morphology support',
    }
---

## Context

Readable English is an evidence-based reading intervention for striving readers — students who’ve fallen behind, learners with dyslexia, and people learning English. Its core idea is a set of **21 glyphs** that make English pronunciation predictable. Learners first “break the code” in a space-themed mission, then practise daily with short, scaffolded lessons: decoding, vocabulary, fluency and comprehension.

What makes the practice work is that the app **listens**. Learners read words and whole passages aloud, and the app follows along — word by word, in real time.

## Engineering nuance

### 1. One on-device speech engine on every platform

**Constraint.** Feedback has to land while the learner is still on the word. A cloud round-trip adds latency that breaks that loop, classrooms often have poor connectivity, and platform speech APIs behave differently on iOS, Android and the browser.

**Decision.** Run speech recognition **entirely on-device with [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) on all three platforms** — iOS, Android and Web — using a **memory-optimised local model**.

**Trade-off.** Shipping and tuning a model is more work than calling an API, and it has to fit on low-memory school devices. In return: fast recognition, identical behaviour everywhere, it works offline, and student audio never leaves the device.

### 2. A matching algorithm, not a transcript

**Constraint.** A speech recogniser guesses _what you said_. A reading tutor already knows what you _should_ say — and children skip words, repeat themselves, self-correct and mispronounce. A raw transcript is useless for feedback.

**Decision.** I built a **text-matching algorithm** that aligns the recogniser’s output against the expected passage and works out, accurately, **which words have actually been spoken** — so the app can highlight progress as the learner reads and pinpoint exactly where they stumbled.

**Trade-off.** It’s product logic we own and have to tune, but it turns generic speech recognition into reading assessment.

### 3. One engine, many games

**Constraint.** Each skill needs a different kind of practice, but they all depend on the same listen-and-match loop.

**Decision.** Build the speech + matching engine once and put **multiple games** on top of it, each targeting one skill:

- **Decoding** — _Falling Words_: read the words aloud before they land.
- **Vocabulary** — _Vocab Vault_: practise key words in context with real-time voice checks.
- **Fluency** — _Space Race_: read a full passage aloud to stay ahead of the spaceship.

Games mix timers, audio, animation and live speech input, so each one is modelled with explicit state (**BLoC**), with **GetX** handling app-level wiring.

### 4. An AI pipeline for levelled content

**Constraint.** Every game needs a steady supply of passages, word lists and questions — and each one has to be pitched at the learner’s actual reading level. Too hard and a striving reader gives up; too easy and nothing improves. That’s far more levelled content than a team can write by hand.

**Decision.** An **AI pipeline that generates app content targeted to specific Lexile levels and reading grade levels**, so every learner practises with material matched to where they are.

**Trade-off.** Generated content still needs guardrails and review to stay accurate and age-appropriate, but the library can grow at the pace the product needs — at every level.

### 5. Tune in production, without a release

**Firebase Remote Config** for tunable behaviour, **Analytics** to see where learners struggle, and **Crashlytics** to keep stability high across three platforms — so the team iterates in days, not store-review cycles.

## Outcome

- One Flutter codebase and **one on-device speech engine** across **iOS, Android and the Web**.
- Word-accurate reading feedback that works **with or without a connection**.
- A family of practice games for decoding, vocabulary and fluency — fed by AI-generated content levelled by Lexile and reading grade.
- **In-app subscriptions** integrated end-to-end, supporting a sustainable business model.
