# DAPS Analytics — Admin & Marketing Operations Guide
**Document type:** Admin User Guide
**Last updated:** 2026-05-17
**Audience:** Admins, Marketing team, Social Media managers
**Admin portal:** https://dapsanalytics.com/admin/

---

## Table of Contents
1. [Getting Started — Login](#1-getting-started--login)
2. [Dashboard Overview](#2-dashboard-overview)
3. [Managing Insights (Articles)](#3-managing-insights-articles)
4. [Managing Social Posts](#4-managing-social-posts)
5. [Using the Calendar](#5-using-the-calendar)
6. [Using Monthly Plans (Content Library)](#6-using-monthly-plans-content-library)
7. [Daily Social Media Workflow](#7-daily-social-media-workflow)
8. [Weekly Rhythm](#8-weekly-rhythm)
9. [Platform-Specific Posting Notes](#9-platform-specific-posting-notes)
10. [Hashtag Reference](#10-hashtag-reference)
11. [Engagement Rules](#11-engagement-rules)
12. [How the Website & Admin Connect](#12-how-the-website--admin-connect)
13. [Getting Help](#13-getting-help)

---

## 1. Getting Started — Login

**URL:** https://dapsanalytics.com/admin/

1. Go to the URL above
2. Enter your email and password (provided by your team lead)
3. Click **Sign In to Dashboard**
4. You will be taken directly to the dashboard

> If you do not have login credentials yet, ask Oli Tamrat or the technical lead to create an account for you in Supabase.

**Forgotten password?**
Contact Oli — admin accounts are managed through Supabase and passwords are reset from there.

**Already logged in?**
The page will automatically redirect you to the dashboard without showing the login form.

**Signing out:**
Click **Sign Out** at the bottom-left of the sidebar.

---

## 2. Dashboard Overview

After logging in you will see a two-panel layout:

```
┌─────────────────┬──────────────────────────────────────────┐
│   SIDEBAR       │   MAIN CONTENT AREA                      │
│                 │                                          │
│  DAPS Analytics │  [Topbar: title / search / Add New]      │
│  Admin          │                                          │
│                 │  Tab content displays here               │
│  ── Content ──  │                                          │
│  Insights       │                                          │
│  Social Posts   │                                          │
│  Calendar       │                                          │
│                 │                                          │
│  ── Library ──  │                                          │
│  Monthly Plans  │                                          │
│                 │                                          │
│  [your email]   │                                          │
│  View Site      │                                          │
│  Sign Out       │                                          │
└─────────────────┴──────────────────────────────────────────┘
```

**On mobile:** The sidebar is hidden by default. Tap the ☰ menu button at the top-left to open it. Tap any nav item or the × button to close it.

---

## 3. Managing Insights (Articles)

**What it does:** Insights are the articles that appear publicly on `dapsanalytics.com/insights.html`. Anything you create here automatically appears on the live website (if marked Active).

### View all insights
Click **Insights** in the sidebar. You will see a table with all articles, their category, date, active status, and action buttons.

### Create a new insight
1. Click the **Add New** button (top-right of the topbar)
2. Fill in the form:
   - **Title** — the article headline (required)
   - **Category** — choose from: Market Trends, Data Science, Case Studies, Projects, Product Updates
   - **Date** — publication date (use format YYYY-MM-DD, e.g. `2026-06-01`)
   - **Excerpt** — 1–2 sentence summary (shows on the insights list card)
   - **Body** — the full article text (use blank lines to separate paragraphs)
   - **Author** — defaults to "DAPS Analytics Team"
   - **Read Time** — e.g. "5 min read"
   - **Active** — toggle ON to make it visible on the website
3. Click **Save**

### Edit an insight
Click the **Edit** button on any row → make changes → click **Save**.

### Hide an insight without deleting it
Click **Edit** → toggle **Active** to OFF → Save. The article disappears from the public website but stays in the database.

### Delete an insight
Click **Delete** on the row → confirm. This is permanent.

### Search insights
Use the search bar in the topbar to filter articles by title in real time.

---

## 4. Managing Social Posts

**What it does:** This is your live social media tracker. Every post you plan, schedule, or have already published should be logged here. It feeds the Calendar view.

### View all posts
Click **Social Posts** in the sidebar. Posts are sorted by scheduled date (most recent first).

### Add a new post entry
1. Click **Add New**
2. Fill in the form:
   - **Platform** — LinkedIn, X / Twitter, Instagram, Facebook, TikTok, or YouTube
   - **Content** — the full post text
   - **Hashtags** — paste hashtags here (separate from content)
   - **Scheduled Date** — the date you plan to post
   - **Status** — choose:
     - `Draft` — not ready yet
     - `Scheduled` — queued in Buffer or ready to post
     - `Posted` — already live on the platform
   - **Media URL** — optional link to image/video if applicable
   - **Notes** — internal notes (not published anywhere)
3. Click **Save**

### Update a post's status
When a post goes live: click **Edit** → change Status to `Posted` → Save.

### Platform color coding (in Calendar)
| Platform | Color |
|----------|-------|
| LinkedIn | Teal |
| Facebook | Teal |
| Instagram | Amber |
| X / Twitter | Light gray |
| TikTok | Light gray |
| YouTube | Red |

---

## 5. Using the Calendar

**What it does:** Shows all your Social Posts on a monthly grid — gives you a visual picture of your posting schedule.

### Navigate months
Use the **‹ ›** arrows to move between months. Click **Today** to return to the current month.

### Read the calendar
- Each day cell shows colored pills for posts scheduled that day
- Each pill shows the platform abbreviation and a content preview
- Click a pill → opens the Edit modal for that post

### Add a post from the calendar
Click any empty day cell → opens the Add New modal with the date pre-filled.

### See more posts on a busy day
If a day has more posts than fit in the cell, click **+N more** → switches to Social Posts tab filtered to that date.

### Legend
| Color | Platforms |
|-------|-----------|
| Teal | LinkedIn, Facebook |
| Amber | Instagram |
| Light gray | X / Twitter, TikTok |
| Red | YouTube |

---

## 6. Using Monthly Plans (Content Library)

**What it does:** The Month 2 content library — 30 days of pre-written post copy and hashtags across all 6 platforms, organized by theme. This is your content bank.

### Set your start date
Before using the calendar dates, tell the system when your "Day 1" is:
1. Find the **Day 1 =** date picker at the top of the Plans tab
2. Enter the date your posting campaign starts (e.g. `2026-06-01`)
3. Click **Set**
4. All 30 day cards will now show their real calendar dates

This is saved in your browser — you only need to set it once per device.

### Browse the content
The 30 days are organized into 4 weeks:

| Week | Theme |
|------|-------|
| Week 1 (Days 1–7) | Data Governance |
| Week 2 (Days 8–14) | Analytics & Decision Intelligence |
| Week 3 (Days 15–21) | ML / AI in African Contexts |
| Week 4 (Days 22–30) | Software & Product Development |

**Card types:**
- **Post** (teal badge) — has content for one or more platforms. Click to open.
- **Engage** (amber badge) — engagement-only day. No new post. Instructions on the card.
- **Rest** (gray badge) — rest and respond to comments day.

### View and copy a post
1. Click any **Post** day card
2. Select the platform you want (LinkedIn, Instagram, etc.)
3. Read the full content in the text area
4. Click **Copy Text** — copies content + hashtags to clipboard
5. Paste into the platform or into Buffer

### Add a post to your calendar
1. Open the day card and select the platform
2. Click **+ Add to Calendar**
3. The post is automatically saved to your Social Posts as a Draft, with the correct scheduled date
4. Find it in the **Social Posts** tab or **Calendar** to update its status later

---

## 7. Daily Social Media Workflow

### On a posting day

**Step 1 — Find today's content**
Go to **Monthly Plans** → find today's day number → click the card.

**Step 2 — Check which platforms post today**
The card shows dots for each platform that has content. Only post on the platforms indicated.

**Step 3 — Copy and post**
For each platform:
1. Select the platform tab in the day card
2. Click **Copy Text**
3. Go to the platform (or Buffer) and paste
4. Add any image or video as directed

**Step 4 — Log it**
Either:
- Click **+ Add to Calendar** before posting (creates the entry as Draft)
- Then go to Social Posts → find the entry → change status to **Posted**

Or:
- After posting, go to Social Posts → Add New → fill in the platform, paste the content, set date = today, status = Posted

**Step 5 — Engage**
Within 2 hours of posting: reply to every comment. The algorithm rewards early engagement heavily.

### On an Engage day (Days 2, 6, 12, 18, 25)
No new post. Spend 20–30 minutes:
- Replying to all comments from the previous day
- Following up on any unanswered DMs
- Asking follow-up questions to extend conversations
- Saving any strong testimonials or organic tags

---

## 8. Weekly Rhythm

### Monday
- Post Day 1 content (Week start — LinkedIn + all platforms)
- Set up the week: copy all week's posts into Buffer if using scheduler

### Tuesday–Thursday
- Post scheduled days per the plan
- Engage with comments daily (20–30 min minimum)

### Friday
- Post Friday's scheduled content
- Review week's performance (reach, comments, follows)
- Note any questions from comments → flag as future content

### Weekend
- Rest days — no posting
- Optional: reshare top-performing post from the week (Stories/Reposts)

---

## 9. Platform-Specific Posting Notes

### LinkedIn
- Best performing content type: thought leadership essays (200–260 words)
- Do NOT use more than 5–6 hashtags
- Post as the Company Page, not a personal profile
- Respond to comments within 2 hours for best reach
- Best times: Monday–Thursday, 8–10am EST or 12pm EST

### X / Twitter
- Most content is thread format (6 tweets numbered 1/ through 6/)
- Post tweet 1, then reply to your own tweet with tweet 2, etc. — this is how threads work
- Use only 2–3 hashtags maximum
- Best times: any weekday, 8am / 12pm / 6pm EST

### Instagram
- Caption goes in the post text box
- Hashtags: use all 20–25 listed (paste them below the caption, separated by a line break)
- Use a relevant image or graphic — do not post text-only
- Stories: reshare feed posts to Stories for extra reach
- Best times: Tuesday, Thursday, Friday, 11am–1pm or 7–9pm EST

### Facebook
- No hashtags on Facebook — they do not help and look unprofessional
- Use the community-focused caption only
- End with a question to prompt comments
- Best times: Wednesday–Friday, 1–3pm EST

### TikTok
- Content is scripted (Hook / Body / CTA format)
- Record a short video (45–60 seconds) following the script
- Upload as a standard video — not a text post
- Add the hashtags in the video description
- Best times: Tuesday–Friday, 7–9am or 7–11pm EST

### YouTube
- YouTube posts are Shorts (60 seconds)
- Title and description are provided in the Monthly Plans content
- Upload as YouTube Short, not a regular video
- Best times: Wednesday or Saturday, 12pm–2pm EST

---

## 10. Hashtag Reference

### LinkedIn (use 4–6 per post, choose from):
`#DataGovernance` `#DataAnalytics` `#Analytics` `#MachineLearning` `#AI` `#SoftwareDevelopment` `#Africa` `#Ethiopia` `#AfricaTech` `#DAPSAnalytics` `#DigitalTransformation` `#GovTech` `#BusinessIntelligence` `#DataScience` `#PredictiveAnalytics`

### X / Twitter (use 2–3 per post):
`#DataAnalytics` `#AfricaTech` `#AI` `#MachineLearning` `#DAPSAnalytics` `#DataGovernance` `#SoftwareDevelopment` `#GovTech` `#Ethiopia` `#DataScience`

### Instagram (use 20–25 — see each day's post in Monthly Plans for the specific list)

### Facebook
No hashtags — community-focused language only.

### TikTok (use 5–8 per video):
`#TechTok` `#AfricaTech` `#DataAnalytics` `#DAPSAnalytics` `#AI` `#MachineLearning` `#SoftwareDevelopment` `#DataGovernance` `#DataScience`

### YouTube:
`#DataAnalytics` `#AfricaTech` `#DAPSAnalytics` `#MachineLearning` `#AI` `#GovTech` `#Ethiopia` `#DataGovernance`

---

## 11. Engagement Rules

These rules apply across all platforms:

1. **Reply to EVERY comment within 48 hours** — algorithms weight early engagement heavily. Aim for 2 hours on posting days.

2. **On rest/engage days, spend 20–30 minutes** replying to comments from the previous day.

3. **When someone asks a question that could become content** — answer publicly, then flag it as a future post topic.

4. **Never delete a negative comment** — respond professionally and offer to take it to DM if it is a genuine complaint.

5. **Save and reshare any organic testimonials or tags** from followers — screenshot and repost to Stories.

6. **On milestone days (Day 28 and Day 30)** — share the reach and follower growth numbers publicly in the recap post. Accountability builds trust.

7. **Follow back relevant accounts** in your sector — African tech, government innovation, data analytics, Ethiopian business community.

---

## 12. How the Website & Admin Connect

Understanding which admin action affects which part of the public website:

| Admin Action | What changes on the website |
|--------------|----------------------------|
| Create an Insight (Active = ON) | New article appears on `insights.html` and is readable via `article.html` |
| Toggle an Insight to Active = OFF | Article disappears from `insights.html` (stays in database) |
| Edit an Insight title/body | Article on `insights.html` updates immediately |
| Delete an Insight | Article permanently removed from `insights.html` |
| Add/edit Social Posts | No public website change — internal tracking only |
| Monthly Plans | No public website change — content bank only |

> **Insights only:** Social Posts and Monthly Plans are internal tools. They do not automatically publish to social media. You still need to copy and post manually (or via Buffer).

---

## 13. Getting Help

### Technical issues (site down, login broken, database errors)
Contact: **Oli Tamrat** — technical lead
Or open an issue at: https://github.com/OliTamrat/daps-analytics-website

### Content questions (what to post, brand voice, strategy)
Refer to the **Monthly Plans** tab for pre-written content.
Refer to **Section 9** of this document for platform-specific guidelines.

### Adding new admin users
Must be done by Oli via the Supabase dashboard — cannot be done from within the admin panel.

### The admin is showing an error or won't load
1. Try a hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
2. Try in a different browser or incognito window
3. If still broken, contact Oli with a screenshot

### Posting the wrong thing by accident
1. Go immediately to the platform and delete the post
2. Go to Social Posts in the admin and delete or correct the entry
3. Notify the team lead

---

## Quick Reference Card

| Task | Where |
|------|-------|
| Write or edit a website article | Insights tab → Edit |
| Publish a new article to the site | Insights tab → Add New → Active ON |
| Find today's post copy | Monthly Plans tab → find today's day |
| Copy a post to clipboard | Monthly Plans → day card → platform tab → Copy Text |
| Log that a post was sent | Social Posts tab → Add New OR edit existing → status = Posted |
| See what's scheduled this month | Calendar tab |
| Add a post to the schedule | Calendar tab → click the day → fill in form |
| Log out | Sidebar bottom-left → Sign Out |

---

*DAPS Analytics — Admin & Marketing Operations Guide*
*© 2026 DAPS Analytics / Olink Technologies Inc. — Confidential*
*This document is for internal use only. Do not share outside the DAPS Analytics team.*
