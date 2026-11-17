# Claude SEO Framework & Implementation Guide for Vinsup Skill Academy

This document outlines the principles, architecture, and standards learned from [claude-seo](https://github.com/AgriciDaniel/claude-seo) and implemented across the Vinsup Skill Academy codebase.

---

## 1. Technical SEO & Crawlability Architecture

### A. Modern AI & Search Crawler Management (`src/app/robots.ts`)
Search and AI retrieval engines need explicit access permissions for high-confidence indexing:
- **`Googlebot`**: Primary search crawler & Google AI Overviews/AI Mode indexing.
- **`Bingbot`**: Microsoft Bing & Copilot grounding.
- **`OAI-SearchBot`**: Governs ChatGPT Search citability (without exposing training data).
- **`Claude-SearchBot`**: Governs Claude Search citation indexing.
- **`PerplexityBot`**: Governs Perplexity citations and indexing.
- **`*`**: General web crawler access.
- **Sitemap link**: Direct pointer to `https://www.vinsupskillacademy.com/sitemap.xml`.

### B. HTML Size & Crawl Budget Caps
- Googlebot fetches up to **2MB of initial HTML** and 64MB for PDFs.
- All critical SEO content and JSON-LD structured data are served in the initial server-rendered HTML stream rather than deferred to client-side renders.

---

## 2. Structured Data (Schema.org) Graph

The website implements a unified `@graph` container to avoid duplicate context definitions:

1. **`WebSite` Schema**:
   - Canonical site identity.
   - `potentialAction`: `SearchAction` enabling sitelinks searchbox eligibility.
2. **`EducationalOrganization` & `LocalBusiness` Composite Schema**:
   - Official brand name, logo, phone number, and price range.
   - Structured `PostalAddress` matching the Ganapathy, Coimbatore campus.
   - `GeoCoordinates` (`lat: 11.036361, lng: 76.97409`).
   - `openingHoursSpecification`: Monday through Saturday, 09:00 - 19:00 IST.
   - `areaServed`: City of Coimbatore.
   - `hasMap`: Google Maps pin link.
3. **`Course` Schema** (on every individual course page):
   - `provider`: Linked to the verified organization `@id`.
   - `educationalCredentialAwarded`: Certificate of Completion & Internship Experience Letter.
   - `timeRequired`: ISO 8601 duration format (e.g. `PT120H`, `PT200H`).
   - `offers`: Paid course offer in INR (`priceCurrency: INR`).
   - `hasCourseInstance`: Onsite Ganapathy campus + Online live delivery.
4. **`BreadcrumbList` Schema**:
   - Clear hierarchical navigation trail (Home > Courses > [Course Name]).
5. **`FAQPage` Schema**:
   - Semantic Q&A structured data for search engine comprehension.

---

## 3. Generative Engine Optimization (GEO) & Citability

Based on research synthesized in `claude-seo`:
- **~44% of AI citations** come from the first 30% of a page.
- AI search models (Google AI Overviews, Perplexity, ChatGPT Search, Claude Search) prioritize **self-contained answer blocks** that follow definitive `"X is..."` patterns with concrete facts (duration, tools, campus, programs).
- **Implementation**: Each course page contains a front-loaded **Program Summary** card in the top 30% of the viewport providing a complete, self-contained definition ready for AI citation.

---

## 4. Local SEO & NAP Consistency (Coimbatore Focus)

- **Name, Address, Phone (NAP)** is 100% consistent across:
  - Header & Footer
  - Root Layout metadata and geo meta tags (`geo.region: IN-TN`, `geo.placename: Coimbatore`)
  - Contact Page with direct Google Maps directions link
  - Schema.org `LocalBusiness` entity
- Business type: **Brick-and-Mortar + Hybrid** (Ganapathy physical campus + online live batches).

---

## 5. Ongoing Audit Checklist (The 29 Sub-Skill Dimensions)

| Dimension | Scope | Vinsup Status |
|---|---|---|
| Technical SEO | Crawlability, robots, sitemap, rendering | ✅ Fully Implemented |
| Schema.org | JSON-LD Course, LocalBusiness, Breadcrumbs | ✅ Fully Implemented |
| GEO (AI Search) | Citability blocks, entity clarity, bot access | ✅ Fully Implemented |
| Local SEO | NAP consistency, Google Maps link, geo tags | ✅ Fully Implemented |
| Mobile & Speed | Clean responsive Tailwind, Turbopack, white theme | ✅ Fully Implemented |
| Content Quality | Specific modules, tools, projects, career roles | ✅ Fully Implemented |
