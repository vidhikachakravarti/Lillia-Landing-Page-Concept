# Visual Asset Replacement Guide

This guide shows you exactly where to replace placeholder visuals with production assets.

---

## Quick Reference

| Section | Asset Type | Location | Recommended Size | Format |
|---------|-----------|----------|------------------|--------|
| Hero | AI Workflow Diagram | `Hero.tsx:66-84` | 1200x900px | PNG/SVG |
| Care Platform | Dashboard Screenshot | `CareManagementPlatform.tsx:92-108` | 1400x1050px | PNG |
| Agentic App | Mobile Mockup | `AgenticApp.tsx:63-90` | 375x812px | PNG |
| Journey Tracker | Flow Diagram | `JourneyTracker.tsx:125-141` | 1600x900px | SVG/PNG |
| Conversational AI | Workflow Visual | `ConversationalAI.tsx:97-113` | 1200x900px | PNG/SVG |
| Proof Section | Partner Logos | `ProofRecognition.tsx:54-62` | 200x100px each | PNG/SVG |

---

## Section-by-Section Asset Replacement

### 1. Hero Section Visual

**File:** `components/sections/Hero.tsx`
**Lines:** 66-84

**Current Code:**
```tsx
<div className="aspect-[4/3] bg-white rounded-xl border border-gray-200 flex items-center justify-center">
  <div className="text-center p-8">
    <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-full flex items-center justify-center">
      <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <p className="text-body-sm text-gray-500">AI Workflow Visual</p>
    <p className="text-body-sm text-gray-400 mt-1">Platform screenshot or animated flow</p>
  </div>
</div>
```

**Replace With:**
```tsx
<div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
  <img
    src="/assets/hero-workflow.png"
    alt="Lillia AI workflow demonstrating chronic care automation"
    className="w-full h-full object-cover"
  />
</div>
```

**Asset Specs:**
- **Type:** AI workflow diagram or platform overview
- **Size:** 1200x900px (4:3 aspect ratio)
- **Format:** PNG with transparency or JPG
- **Content:** Show patient journey, AI intervention points, care team coordination
- **Style:** Clean, clinical, not too detailed

---

### 2. Care Management Platform Dashboard

**File:** `components/solutions/CareManagementPlatform.tsx`
**Lines:** 92-108

**Current Code:**
```tsx
<div className="aspect-[4/3] bg-white rounded-lg border border-gray-200 flex items-center justify-center">
  <div className="text-center p-8">
    <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-lg flex items-center justify-center">
      <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    </div>
    <p className="text-body-sm text-gray-500">Platform Dashboard</p>
    <p className="text-body-sm text-gray-400 mt-1">Unified workflow visualization</p>
  </div>
</div>
```

**Replace With:**
```tsx
<div className="aspect-[4/3] rounded-lg overflow-hidden">
  <img
    src="/assets/platform-dashboard.png"
    alt="Care management platform dashboard showing patient enrollment and monitoring"
    className="w-full h-full object-cover"
  />
</div>
```

**Asset Specs:**
- **Type:** Platform dashboard screenshot
- **Size:** 1400x1050px
- **Content:** Patient list, risk stratification, workflow status
- **Privacy:** Blur or anonymize patient data
- **Style:** Clean UI, purple accent colors matching brand

---

### 3. Agentic App Mobile Mockup

**File:** `components/solutions/AgenticApp.tsx`
**Lines:** 63-90

**Current Code:**
```tsx
<div className="bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-3xl p-4 shadow-soft-lg">
  <div className="aspect-[9/19] bg-white rounded-2xl flex items-center justify-center p-6">
    <div className="text-center w-full">
      <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-body-sm text-gray-500 mb-2">Patient App Interface</p>
      <p className="text-body-sm text-gray-400">AI conversation mockup</p>
    </div>
  </div>
</div>
```

**Replace With:**
```tsx
<div className="bg-gradient-to-br from-lillia-primary to-lillia-medium rounded-3xl p-4 shadow-soft-lg">
  <div className="aspect-[9/19] rounded-2xl overflow-hidden">
    <img
      src="/assets/agentic-app-mockup.png"
      alt="Lillia patient app showing AI conversation and medication reminders"
      className="w-full h-full object-cover"
    />
  </div>
</div>
```

**Asset Specs:**
- **Type:** Mobile app screenshot or high-fidelity mockup
- **Size:** 375x812px (iPhone dimensions) or 2x/3x for retina
- **Content:** AI chat interface, medication reminder, or health tracking
- **Format:** PNG with transparency
- **Style:** Match iOS or Android design patterns

---

### 4. Journey Tracker Flow Diagram

**File:** `components/solutions/JourneyTracker.tsx`
**Lines:** 125-141

**Current Code:**
```tsx
<div className="aspect-[16/9] bg-white rounded-lg border border-gray-200 flex items-center justify-center">
  <div className="text-center p-8">
    <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-lg flex items-center justify-center">
      <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    </div>
    <p className="text-body-sm text-gray-500">Journey Flow Diagram</p>
    <p className="text-body-sm text-gray-400 mt-1">Patient journey visualization with task tracking</p>
  </div>
</div>
```

**Replace With:**
```tsx
<div className="aspect-[16/9] rounded-lg overflow-hidden">
  <img
    src="/assets/journey-tracker-diagram.svg"
    alt="Journey tracker workflow showing patient care journey phases and task management"
    className="w-full h-full object-contain bg-white"
  />
</div>
```

**Asset Specs:**
- **Type:** Flow diagram or process map
- **Size:** 1600x900px (16:9)
- **Format:** SVG preferred (scalable), PNG alternative
- **Content:** Timeline, milestones, task checkpoints, team roles
- **Style:** Clinical flow chart aesthetic, purple accent nodes

---

### 5. Conversational AI Workflow

**File:** `components/solutions/ConversationalAI.tsx`
**Lines:** 97-113

**Current Code:**
```tsx
<div className="aspect-[4/3] bg-white rounded-lg flex items-center justify-center p-6">
  <div className="text-center w-full">
    <div className="w-16 h-16 mx-auto mb-4 bg-lillia-primary/10 rounded-lg flex items-center justify-center">
      <svg className="w-8 h-8 text-lillia-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p className="text-body-sm text-gray-500 mb-2">Outreach Workflow</p>
    <p className="text-body-sm text-gray-400">Event detection → AI conversation → Escalation</p>
  </div>
</div>
```

**Replace With:**
```tsx
<div className="aspect-[4/3] rounded-lg overflow-hidden">
  <img
    src="/assets/conversational-ai-workflow.png"
    alt="Conversational AI workflow from patient interaction to care team escalation"
    className="w-full h-full object-cover"
  />
</div>
```

**Asset Specs:**
- **Type:** Workflow diagram or conversation mockup
- **Size:** 1200x900px
- **Content:** Event trigger → AI response → Escalation path
- **Format:** PNG or SVG
- **Style:** Show multi-channel (SMS, WhatsApp, voice)

---

### 6. Partner Logos (Proof Section)

**File:** `components/sections/ProofRecognition.tsx`
**Lines:** 54-62

**Current Code:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="flex items-center justify-center">
      <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
        <span className="text-xs text-gray-400">Partner Logo {i}</span>
      </div>
    </div>
  ))}
</div>
```

**Replace With:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
  <div className="flex items-center justify-center">
    <img src="/assets/logos/partner-1.png" alt="Partner Name" className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/assets/logos/partner-2.png" alt="Partner Name" className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/assets/logos/partner-3.png" alt="Partner Name" className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
  </div>
  <div className="flex items-center justify-center">
    <img src="/assets/logos/partner-4.png" alt="Partner Name" className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
  </div>
</div>
```

**Asset Specs:**
- **Type:** Partner/customer logos
- **Size:** Variable width, 100-120px height
- **Format:** PNG with transparency or SVG
- **Style:** Grayscale by default, color on hover
- **Quantity:** 4-8 logos

---

## Asset Organization

### Recommended Directory Structure

```
/public/assets/
  hero-workflow.png
  platform-dashboard.png
  agentic-app-mockup.png
  journey-tracker-diagram.svg
  conversational-ai-workflow.png

  /logos/
    partner-1.png
    partner-2.png
    partner-3.png
    partner-4.png

  /placeholders/  (keep for development)
    ...existing placeholders...
```

---

## Image Optimization Checklist

Before uploading assets:

- [ ] Compress images (use TinyPNG or similar)
- [ ] Convert to WebP where possible
- [ ] Provide 1x, 2x, 3x versions for retina displays
- [ ] Add descriptive alt text
- [ ] Test on mobile and desktop
- [ ] Verify load time impact
- [ ] Ensure accessibility (contrast, clarity)

---

## Next.js Image Component (Optional Enhancement)

For better performance, convert static `<img>` tags to Next.js `<Image>`:

```tsx
import Image from 'next/image';

<Image
  src="/assets/hero-workflow.png"
  alt="Lillia AI workflow"
  width={1200}
  height={900}
  priority  // For above-fold images
  quality={90}
/>
```

Benefits:
- Automatic image optimization
- Lazy loading
- Responsive images
- WebP conversion

---

## Video Assets (Future)

For demo videos, use this pattern:

```tsx
<div className="aspect-video rounded-lg overflow-hidden">
  <video
    className="w-full h-full"
    controls
    poster="/assets/video-poster.jpg"
  >
    <source src="/assets/platform-demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

Recommended specs:
- Format: MP4 (H.264)
- Resolution: 1920x1080
- Duration: 60-90 seconds
- Size: < 10MB

---

## Design Handoff Checklist

When receiving assets from design team:

- [ ] Correct dimensions per spec above
- [ ] Proper file naming (lowercase, hyphens)
- [ ] Optimized file size
- [ ] Alt text provided
- [ ] Brand colors maintained
- [ ] Privacy compliance (no PII/PHI)
- [ ] Multiple device testing completed

---

## Support

Questions about asset replacement?
1. Check component file line numbers above
2. Verify aspect ratios in Tailwind classes
3. Test on localhost before deploying
4. Review browser console for errors

For design questions, consult `DESIGN_RATIONALE.md`.
