---
title: Wandergier
tagline: A social travel app where strangers become travel buddies.
tension: A social app for meeting strangers while travelling has to feel safe — and stay usable on whatever network you find abroad.
scope: Led the Android build at Thinkwik for Wandergier, Inc.
summary: Case study — building Wandergier's Android app at Thinkwik — a social travel platform with trip planning, buddies, chat and maps, in Kotlin with MVVM and coroutines.
company: Thinkwik × Wandergier, Inc.
role: Team Lead — Android
period: 2019 — 2020
order: 5
featured: false
brand: '#F2836B'
platforms: [Android]
tech: [Kotlin, Coroutines, MVVM, Dagger2, Retrofit2, RxKotlin, Maps]
stats:
  - { value: 'Social', label: 'trips, buddies, chat & maps' }
  - { value: 'Kotlin', label: 'MVVM + coroutines' }
links:
  website: https://www.wandergier.com/
icon: ../../assets/work/wandergier/icon.jpg
screens:
  - {
      src: ../../assets/work/wandergier/shot1.jpg,
      alt: 'Wandergier — Is it time to travel different?',
    }
  - {
      src: ../../assets/work/wandergier/shot3.jpg,
      alt: 'Create and manage an adventure with schedule, notes and tips',
    }
  - { src: ../../assets/work/wandergier/shot4.jpg, alt: 'Photo albums and travel tips' }
  - {
      src: ../../assets/work/wandergier/shot6.jpg,
      alt: 'Travel buddy profile with location, trips and reviews',
    }
  - {
      src: ../../assets/work/wandergier/shot7.jpg,
      alt: 'Messages and group chats with travel buddies',
    }
  - { src: ../../assets/work/wandergier/shot8.jpg, alt: 'Interactive map of places visited' }
website:
  src: ../../assets/work/wandergier/website.png
  alt: 'Wandergier website'
---

## Context

**Wandergier** helps travellers plan adventures — from weekend getaways to long trips abroad — and meet like-minded people nearby. Users create trips, invite buddies, share albums and tips, chat, and build their own interactive travel map.

## Engineering nuance

### 1. Many screens, one source of truth

**Constraint.** Profiles, trips, albums, reviews and chats are all interlinked — the same buddy shows up on five screens.

**Decision.** A **Kotlin-only MVVM** architecture with shared repositories, **coroutines** for async work and **Dagger2** for wiring, so every screen reads from the same state.

### 2. Trust is a product feature

**Constraint.** Meeting strangers while travelling only works if people feel safe.

**Decision.** Build **ratings, reviews and verified profiles** into the core flows rather than bolting them on.

### 3. Media on travel networks

**Constraint.** Photo albums and maps are heavy; travellers are often on roaming data or hotel Wi-Fi.

**Decision.** Load media progressively and keep the core — trips, schedules and chat — light and responsive.

## Outcome

- A feature-rich social travel app — trips, buddies, chat and maps — on a modern Kotlin + MVVM stack.
