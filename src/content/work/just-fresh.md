---
title: Just Fresh
tagline: A family of apps on one codebase — 80% of it shared — for produce that changes price every morning.
tension: Shoppers, delivery riders and warehouse staff each needed their own app — on Android, iOS and the web — but there was one team to build and run them all.
scope: Led engineering for the Just Fresh family — customer, delivery & logistics and warehouse admin apps — built in Flutter for Android, iOS and Web on the foundation we’d established at Bijak.
summary: Case study — building Just Fresh's customer, delivery and warehouse apps in Flutter for Android, iOS and Web with 80% shared code, reaching 50K+ downloads.
company: Bijak (Krishiacharya Technologies)
role: Engineering Lead
period: Jul 2022 — Oct 2024
order: 3
brand: '#2F7D5B'
platforms: [Android, iOS, Web]
tech: [Flutter, Flutter Web, Dart, GetX, MVVM, Maps & location, Analytics]
stats:
  - { value: '50K+', label: 'downloads (within Bijak’s 600K+)' }
  - { value: '80%', label: 'code shared across the apps' }
  - { value: '3', label: 'platforms: Android, iOS, Web' }
website:
  src: ../../assets/work/just-fresh/website.png
  alt: 'Just Fresh website — Just Fresh. All Nature. No Nasty.'
---

## Context

**Just Fresh** delivers farm-fresh fruits and vegetables to the doorstep. Built inside Bijak, it reuses the company’s agri supply chain to sell directly to consumers.

That meant a family of distinct products: a **customer** app for ordering, a **delivery & logistics** app to get orders to the door, and a **warehouse admin** app to run operations behind it all.

## Engineering nuance

### 1. Many apps, one foundation — 80% shared

**Constraint.** Different audiences with very different workflows — shoppers, riders and warehouse staff — but one team, and no appetite for maintaining three of everything.

**Decision.** Build every app on the **same Flutter foundation (GetX + MVVM)**: shared design system, networking, data models and business logic, with each app owning only what’s unique to its users. **About 80% of the code is common** across the apps.

**Trade-off.** Shared code needs discipline — a change for shoppers must not break riders or the warehouse — but features, fixes and improvements land everywhere at once.

### 2. Flutter Web instead of a separate website

**Constraint.** Customers wanted to order from a browser too.

**Decision.** Ship the customer experience with **Flutter Web** rather than a second, separately built web app.

**Trade-off.** A heavier first load and less SEO-friendliness than a traditional site — accepted in exchange for one codebase and identical behaviour everywhere.

### 3. A catalogue that changes every day

**Constraint.** Produce is perishable: prices, offers and availability shift daily.

**Decision.** Keep catalogue, deals and categories **driven by operations data**, with location-aware ordering for serviceable areas.

**Trade-off.** More dependence on fresh data from the backend — but customers never see yesterday’s prices.

## Outcome

- **50K+ downloads** across platforms — part of the 600K+ across Bijak’s apps.
- Three production apps — customer, delivery & logistics and warehouse admin — run by one team on **80% shared code**.
