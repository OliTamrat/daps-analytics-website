# ADR-0005 — Careers: public INSERT, never public SELECT

**Status:** accepted · **Date:** 2026-07

## Context
Job applications carry applicant email, phone, cover letter and a resume
— personal data submitted by strangers on a public form.

## Decision
`job_applications` allows public INSERT and **no public SELECT**; resumes
upload to the **private** `resumes` bucket with only the object path
stored, served through short-lived signed URLs minted in the admin.
Applications are never authored in the admin ("Add New" hidden by
design).

## Consequences
Reading applications requires the admin's authenticated path, always. Any
future "share this candidate" feature mints a signed URL; it never widens
a policy.

## References
`admin/schema.sql` (Careers block), CLAUDE.md security invariant.
