---
title: CoinTopper
tagline: Real-time crypto prices on mid-range phones and patchy networks.
tension: Crypto prices never stop moving, but the phones and networks of many users couldn’t keep up with a firehose of updates.
scope: Built the CoinTopper Android app at CodeCrunch, alongside the company’s other flagship product, Studentdesk.in.
summary: Case study — building CoinTopper's Android app at CodeCrunch, a real-time cryptocurrency tracker in Kotlin with RxKotlin, Dagger2 and an MVP architecture.
company: CodeCrunch TechLabs
role: Software Engineer
period: Sep 2017 — Dec 2018
order: 4
featured: false
brand: '#F7931A'
platforms: [Android]
tech: [Kotlin, RxKotlin, Dagger2, MVP, DBFlow, Lottie]
stats:
  - { value: 'Live', label: 'prices, volume & charts' }
  - { value: '10K+', label: 'daily active users handled' }
links:
  website: https://cointopper.com/
website:
  src: ../../assets/work/cointopper/website.png
  alt: 'CoinTopper website showing live cryptocurrency prices'
---

## Context

**CoinTopper** tracks cryptocurrency markets in real time — prices, volume, live charts and more. I built its Android app as one of CodeCrunch’s flagship products, during the 2017–18 crypto boom.

## Engineering nuance

### 1. Streams, not refresh buttons

**Constraint.** Prices change constantly; the UI had to stay smooth while updates kept arriving.

**Decision.** A reactive data layer with **RxKotlin**, streaming updates into the UI off the main thread.

**Trade-off.** Rx has a steep learning curve, but it made throttling and combining data streams straightforward.

### 2. Show something instantly

**Constraint.** On slow networks, an empty list while prices load feels broken.

**Decision.** Persist watchlists and recent market data locally with **DBFlow**, so the app opens on the last known state and refreshes in place.

### 3. Testable by default

**Constraint.** Market data is messy, and bugs in numbers destroy trust.

**Decision.** An **MVP** architecture with **Dagger2** dependency injection and a test-driven approach, so logic could be tested away from Android.

## Outcome

- Part of a product suite that handled **10,000+ daily active users**.
- A polished Material Design app with real-time charts and Lottie animation.
