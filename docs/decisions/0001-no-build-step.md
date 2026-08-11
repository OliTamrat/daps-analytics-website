# ADR-0001 — No build step

**Status:** accepted · **Date:** 2026 (inception)

## Context
A marketing site maintained in short sessions, by different hands, with
no CI. Every build toolchain is a dependency tree that rots between
sessions.

## Decision
Pure HTML + Tailwind via CDN + ES5-compatible vanilla JS. Open any file
directly or `python -m http.server`. Shared behaviour via two injected
scripts rather than components.

## Consequences
Zero setup, zero rot; the price is discipline — shared changes go in
navbar.js/daps.js, and page-level duplication is accepted where it is
cheap. Three.js and Canvas animations load from CDN per page.
