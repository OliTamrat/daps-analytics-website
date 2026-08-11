# ADR-0003 — Hakimet and Olink Fleet stay hidden pending EIPA/INSA

**Status:** accepted · **Date:** 2026-07-16 (Session 3)

## Context
Two products await Ethiopian regulatory clearance (EIPA/INSA). Showing
them on a public sales site before clearance is a compliance risk;
half-showing them (visible card, dead link) is a credibility risk.

## Decision
Hidden everywhere — navbar dropdown, product pages, insights article,
projects card — with `products-archive.html` preserving the four-product
layout. WQIS remains visible behind a stakeholder-access bar. The
docs-truth check asserts the navbar links neither hidden product, so a
session cannot partially unhide them.

## Consequences
Unhiding is a deliberate multi-file act with its own runbook
(`runbooks/unlock-gated-products.md`) and requires superseding this ADR —
by design, not bureaucracy: it is a regulated-product decision.
