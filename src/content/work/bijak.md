---
title: Bijak
tagline: Putting a trust-based, cash-heavy trade into an app — in eleven languages.
tension: Mandi trade runs on relationships and cash. The app had to earn the trust of traders who’d never used one — while money moved through nearly every screen.
scope: 'Involved from day one — led the move from native to Flutter, set the architecture and release process, and led a team of 8 engineers shipping alongside product, design and marketing.'
summary: "Case study — leading engineering at Bijak, India's agri-trade platform: Flutter apps with 600K+ downloads (incl. Just Fresh), 11 languages and payment rails."
company: Bijak (Krishiacharya Technologies)
role: Engineering Lead
period: Jul 2020 — Oct 2024
order: 2
brand: '#1E9E55'
platforms: [Android, iOS]
tech:
  [Flutter, Dart, GetX, MVVM, Codemagic CI/CD, Segment, MoEngage, Branch.io, Firebase, TensorFlow]
stats:
  - { value: '600K+', label: 'downloads, incl. Just Fresh' }
  - { value: '11', label: 'languages' }
  - { value: '2,000+', label: 'mandis with daily prices' }
links:
  website: https://bijak.in/
  playStore: https://play.google.com/store/apps/details?id=com.bedwal.bijak.mvp
icon: ../../assets/work/bijak/icon.png
screens:
  - {
      src: ../../assets/work/bijak/shot1.jpg,
      alt: 'Bijak — buy commodities from 30,000+ verified traders',
    }
  - {
      src: ../../assets/work/bijak/shot2.jpg,
      alt: 'Daily mandi prices across 2,000+ mandis and 200+ commodities',
    }
  - { src: ../../assets/work/bijak/shot3.jpg, alt: 'Language picker with 11 Indian languages' }
  - {
      src: ../../assets/work/bijak/shot4.jpg,
      alt: 'Payment guarantee and Bijak Limit credit facility',
    }
  - {
      src: ../../assets/work/bijak/shot7.jpg,
      alt: 'Trader ratings to pick trustworthy buyers and suppliers',
    }
  - {
      src: ../../assets/work/bijak/shot8.jpg,
      alt: 'Digital bookkeeping with all transactions in one place',
    }
website:
  src: ../../assets/work/bijak/website.png
  alt: 'Bijak website — Optimization through Accountability'
---

## Context

**Bijak** is a B2B agri-trade platform for India’s mandi traders. Buyers and suppliers use it to find **30,000+ verified traders**, check **daily prices from 2,000+ mandis**, and trade with services like advance payments, a payment guarantee and the **Bijak Limit** credit facility — plus digital bookkeeping for every transaction.

I was involved from the beginning — leading the app’s migration from native Android to Flutter, growing into Engineering Lead of a **team of 8**, and later also owning the **Just Fresh** apps.

## Engineering nuance

### 1. Migrating to Flutter without slowing the business down

**Constraint.** We were moving from a native app to Flutter while the business kept asking for features. The rewrite couldn’t become a freeze.

**Decision.** **Flutter 3 with GetX and MVVM** — at the time, GetX was the natural choice for building fast: state, routing and dependency injection in one lightweight package, with very little boilerplate. One way of doing things across the app (and later across Just Fresh).

**Trade-off.** GetX is opinionated and less “pure” than some alternatives, but it let a team of 8 migrate and keep shipping at the same time — which mattered more than architectural elegance.

### 2. Language is a trust feature

**Constraint.** Many traders were first-time smartphone users. An English-first app would have been an app they didn’t trust.

**Decision.** Make localisation first-class: **11 languages**, with a language picker up front and layouts that hold up when strings get long.

**Trade-off.** Every feature costs more to ship and test — but adoption depends on it.

### 3. Measure every funnel, automate every release

**Constraint.** Marketing, product and operations all needed answers — which campaigns brought traders in, where they dropped off — and releases couldn’t be a bottleneck.

**Decision.** **Segment, MoEngage and Branch.io** for analytics, engagement and attribution; **Codemagic CI/CD** to automate builds, tests and store releases.

**Trade-off.** More tooling to maintain, but decisions moved from opinion to data, and shipping became routine.

### 4. AI where it removes manual work

Behind the app, I trained **TensorFlow** models and introduced **Gen AI** tooling to cut human intervention in internal processes — quiet automation that saved the operations team time.

## Leadership

- Led a team of **8 engineers**, coordinating with design, product and marketing on a predictable cadence.
- Ran code reviews and mentored developers on architecture and Flutter practice.
- Built **B2B and D2C** products on a shared foundation.

## Outcome

- **600K+ downloads** across Bijak’s apps, including Just Fresh.
- A Flutter foundation that carried over to the Just Fresh apps.
