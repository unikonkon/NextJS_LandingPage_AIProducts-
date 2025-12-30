# AI Products Landing Page - Research & Planning Document

## 📋 สรุปภาพรวมโปรเจค

**ชื่อโปรเจค:** AI Products Landing Page  
**ประเภท:** Single Page Application (SPA)  
**เป้าหมาย:** เว็บไซต์ขายผลิตภัณฑ์ AI แบบ Subscription (รายวัน/รายเดือน)  
**Tech Stack:** Next.js, TailwindCSS, GSAP  
**Design Style:** Minimalist Design + Timeline Line Draw Animation

---

## 🎯 ผลิตภัณฑ์ AI ที่นำเสนอ

### 1. Text-to-Speech (TTS)
**คำอธิบาย:** แปลงข้อความเป็นเสียงพูดที่เป็นธรรมชาติด้วย AI

**จุดเด่นที่ควรนำเสนอ:**
- รองรับหลายภาษา (รวมถึงภาษาไทย)
- เสียงธรรมชาติ ไม่เหมือนหุ่นยนต์
- ปรับแต่งโทนเสียง ความเร็ว อารมณ์ได้
- รองรับ SSML (Speech Synthesis Markup Language)
- ใช้งานง่ายผ่าน API

**Use Cases:**
- สร้างเสียงบรรยายวิดีโอ/พอดแคสต์
- ระบบ IVR (Interactive Voice Response)
- Accessibility สำหรับผู้พิการทางสายตา
- E-learning และ Audiobook
- Voice Assistant และ Chatbot

**Animation Concept:**
- แสดงคลื่นเสียง (Sound Wave) ที่เคลื่อนไหว
- ข้อความค่อยๆ ไฮไลท์ตามเสียงที่พูด
- ไอคอนลำโพงที่มี pulse effect

---

### 2. Speech-to-Text (STT)
**คำอธิบาย:** แปลงเสียงพูดเป็นข้อความอัตโนมัติด้วย AI

**จุดเด่นที่ควรนำเสนอ:**
- ความแม่นยำสูงในหลายภาษา
- Real-time Transcription
- Speaker Diarization (แยกผู้พูด)
- รองรับหลายช่องเสียง (Multichannel)
- ตรวจจับภาษาอัตโนมัติ

**Use Cases:**
- ถอดความประชุม/สัมมนา
- สร้าง Subtitle อัตโนมัติ
- บันทึกการสนทนา Call Center
- Dictation และ Voice Commands
- Podcast Transcription

**Animation Concept:**
- ไมโครโฟนที่มี pulse effect
- คลื่นเสียงที่แปลงเป็นข้อความ
- ตัวอักษรที่พิมพ์ออกมาแบบ typewriter effect

---

### 3. AI Chat with Custom Data (RAG)
**คำอธิบาย:** AI Chatbot ที่สามารถค้นหาและตอบคำถามจากข้อมูลที่ผู้ใช้อัพโหลดเอง

**จุดเด่นที่ควรนำเสนอ:**
- อัพโหลดเอกสารได้หลายรูปแบบ (PDF, Word, Excel, CSV)
- ค้นหาข้อมูลแบบ Semantic Search
- ตอบคำถามตามบริบทของเอกสาร
- รักษาความเป็นส่วนตัวของข้อมูล
- ปรับแต่ง Persona และพฤติกรรมของ Bot ได้

**Use Cases:**
- Knowledge Base สำหรับองค์กร
- Customer Support Bot
- Legal/Medical Document Assistant
- Research Assistant
- Internal Wiki/FAQ Bot

**Animation Concept:**
- Chat bubbles ที่โผล่ขึ้นมาแบบ smooth
- เอกสารที่แปลงเป็น particles แล้วรวมกันเป็นคำตอบ
- Brain/Neural network animation

---

## 💰 รูปแบบการขายและ Pricing Model

### Pricing Strategy สำหรับ AI SaaS

**1. Usage-Based Pricing (แนะนำ)**
- คิดตามปริมาณการใช้งานจริง
- เหมาะกับผู้ใช้หลายระดับ

**2. Tiered Subscription (แนะนำสำหรับเว็บนี้)**
- แบ่งเป็นแพ็คเกจชัดเจน
- ง่ายต่อการเข้าใจและตัดสินใจ

### โครงสร้าง Pricing ที่แนะนำ

#### แพ็คเกจรายวัน (Daily Pass)
| Features | ราคาแนะนำ |
|----------|-----------|
| Text-to-Speech | 29-59 บาท/วัน |
| Speech-to-Text | 29-59 บาท/วัน |
| AI Chat (RAG) | 49-99 บาท/วัน |
| All-in-One Bundle | 99-149 บาท/วัน |

**ข้อจำกัดแพ็คเกจรายวัน:**
- จำกัดจำนวน characters/นาทีเสียง
- ใช้ได้ 24 ชั่วโมงหลังซื้อ
- เหมาะสำหรับผู้ใช้ทดลองหรือใช้งานเป็นครั้งคราว

#### แพ็คเกจรายเดือน (Monthly Subscription)

**Starter Plan**
- ราคา: 299-499 บาท/เดือน
- TTS: 100,000 characters
- STT: 60 นาที
- RAG: 10 documents, 100 queries
- Support: Email

**Professional Plan**
- ราคา: 999-1,499 บาท/เดือน
- TTS: 500,000 characters
- STT: 300 นาที
- RAG: 50 documents, 500 queries
- Support: Priority Email + Chat

**Enterprise Plan**
- ราคา: 2,999-4,999 บาท/เดือน
- TTS: Unlimited
- STT: Unlimited
- RAG: Unlimited documents, Unlimited queries
- Support: Dedicated + SLA

### Pricing Reference จากผู้ให้บริการชั้นนำ

**Text-to-Speech:**
- Amazon Polly: $4-$30 / 1M characters
- Google Cloud: $4-$16 / 1M characters
- ElevenLabs: $5-$22 / month (subscription)
- Speechify: $10 / 1M characters

**Speech-to-Text:**
- Google Cloud: $0.006-$0.024 / 15 seconds
- AssemblyAI: $0.12-$0.65 / hour
- Deepgram: $0.0043 / minute
- Azure: $0.01-$0.025 / minute

**RAG/AI Chat:**
- OpenAI GPT-4: $0.01-$0.03 / 1K tokens
- Vector DB (Pinecone): ~$70-120 / month
- Embedding (OpenAI ada-2): $0.0001 / 1K tokens

---

## 🎨 Landing Page Structure & Sections

### Section 1: Hero Section
**เนื้อหา:**
- Headline หลัก (สั้น กระชับ ไม่เกิน 8 คำ)
- Subheadline อธิบายประโยชน์
- CTA Button หลัก (เริ่มใช้งานฟรี / ทดลองใช้)
- Hero Image/Animation แสดง AI ทำงาน

**Animation:**
- Fade in + Slide up สำหรับข้อความ
- AI-inspired particle animation พื้นหลัง
- Subtle floating elements

**ตัวอย่าง Headline:**
- "ปลดปล่อยพลัง AI สู่ธุรกิจของคุณ"
- "เสียง ข้อความ และความรู้ ในมือคุณ"
- "AI ที่เข้าใจธุรกิจของคุณ"

---

### Section 2: Products Overview (Timeline Connection Point 1)
**เนื้อหา:**
- แนะนำผลิตภัณฑ์ทั้ง 3 อย่างย่อๆ
- Icon + Title + Short Description
- Learn More button สำหรับแต่ละ product

**Animation:**
- Staggered reveal เมื่อ scroll เข้ามา
- Line draw connection ระหว่าง products
- Icon hover effects

---

### Section 3: Text-to-Speech Feature (Timeline Connection Point 2)
**เนื้อหา:**
- Demo interactive (พิมพ์ข้อความ ฟังตัวอย่าง)
- Features list
- Use cases
- Mini testimonial

**Animation:**
- Sound wave visualization
- Text highlight sync กับเสียง
- Smooth scroll reveal

---

### Section 4: Speech-to-Text Feature (Timeline Connection Point 3)
**เนื้อหา:**
- Demo interactive (อัพโหลด/บันทึกเสียง ดูผลลัพธ์)
- Features list
- Use cases
- Mini testimonial

**Animation:**
- Microphone pulse effect
- Voice waveform to text transformation
- Typewriter effect สำหรับผลลัพธ์

---

### Section 5: AI Chat Feature (Timeline Connection Point 4)
**เนื้อหา:**
- Demo interactive (chat interface)
- Features list (upload docs, ask questions)
- Use cases
- Mini testimonial

**Animation:**
- Chat bubbles animation
- Document to knowledge particles
- Neural network background subtle animation

---

### Section 6: Pricing Section
**เนื้อหา:**
- Toggle: รายวัน / รายเดือน
- 3-4 Pricing cards
- Feature comparison table
- FAQ สั้นๆ

**Animation:**
- Card flip/reveal on scroll
- Price number count up
- Highlight popular plan

---

### Section 7: Social Proof
**เนื้อหา:**
- Customer logos
- Testimonials carousel
- Stats (users, messages processed, etc.)

**Animation:**
- Logo slider
- Testimonial cards slide
- Counter animation for stats

---

### Section 8: CTA Section
**เนื้อหา:**
- Final call to action
- Quick start guide teaser
- Contact/Support info

**Animation:**
- Subtle pulse on CTA button
- Background gradient shift

---

### Section 9: Footer
**เนื้อหา:**
- Navigation links
- Social media
- Legal links
- Newsletter signup

---

## 🖌️ Design Guidelines

### Minimalist Design Principles

**Color Palette:**
- Primary: Deep Blue (#0A192F) หรือ Dark Purple
- Secondary: Cyan/Teal accent (#64FFDA)
- Background: Near white (#F8FAFC) หรือ Near black (#0D1117)
- Text: Dark gray (#1F2937) หรือ Light gray (#E5E7EB)
- Accent: Gradient (Blue to Purple to Cyan)

**Typography:**
- Heading: Inter, Outfit, หรือ Space Grotesk (Bold, Clean)
- Body: Inter หรือ DM Sans (Regular)
- Code/Tech: JetBrains Mono หรือ Fira Code

**Spacing:**
- ใช้ whitespace มากๆ
- Section padding: 80-120px vertical
- Element spacing: 16-32px
- Container max-width: 1200px

**Visual Elements:**
- Subtle gradients
- Soft shadows
- Rounded corners (8-16px)
- Line illustrations
- Abstract geometric shapes

---

## ⚡ GSAP Animation Specifications

### Timeline Line Draw Animation

**Concept:**
เส้น SVG ที่เชื่อมต่อระหว่าง Sections โดยจะ draw ตามการ scroll

**Implementation Approach:**

```
เส้น Timeline ควรเป็น SVG Path ที่:
- เริ่มจาก Section 2 ลากไปยัง Section 3, 4, 5
- ใช้ stroke-dasharray และ stroke-dashoffset
- Animate ด้วย GSAP ScrollTrigger
- มี nodes/dots ตรงแต่ละ Section
```

**ScrollTrigger Configuration:**
- trigger: แต่ละ section
- start: "top center"
- end: "bottom center"
- scrub: true (ผูกกับ scroll position)
- markers: false (production)

### Section Animations

**Hero Section:**
- Timeline delay: 0.2s between elements
- Stagger animation for text lines
- Scale + fade for hero image

**Product Cards:**
- Stagger: 0.15s
- Animation: y: 50 → 0, opacity: 0 → 1
- Duration: 0.8s
- Ease: "power2.out"

**Feature Sections:**
- Split text animation for headings
- Parallax effect for images
- Reveal animation for feature lists

### AI-Specific Animations

**Text-to-Speech Animation:**
```
แนวคิด:
1. แสดง text input
2. Text ถูก highlight ทีละคำ
3. Sound wave visualization แสดงขึ้น
4. Volume meter เคลื่อนไหว
```

**Speech-to-Text Animation:**
```
แนวคิด:
1. Microphone icon pulse
2. Sound wave entering
3. Wave transforms to text particles
4. Text appears with typewriter effect
```

**AI Chat Animation:**
```
แนวคิด:
1. Document icons floating
2. Documents break into particles
3. Particles flow to AI brain
4. Chat bubble appears with response
```

---

## 📐 Page Layout Blueprint

```
┌─────────────────────────────────────────────────────┐
│                    HEADER (Fixed)                   │
│  Logo          Nav Links          CTA Button        │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  HERO SECTION                       │
│                                                     │
│     [Headline]                                      │
│     [Subheadline]                                   │
│     [CTA Buttons]                                   │
│                                                     │
│              [Hero Animation/Image]                 │
│                                                     │
├──────────────────────┬──────────────────────────────┤
│                      │                              │
│   ●─────────────────●│ PRODUCTS OVERVIEW            │
│   Timeline Start     │ [Product Cards x3]           │
│                      │                              │
├──────────────────────┼──────────────────────────────┤
│         │            │                              │
│         │            │ TEXT-TO-SPEECH SECTION       │
│         ●────────────│ [Demo + Features]            │
│         │            │                              │
├─────────┼────────────┼──────────────────────────────┤
│         │            │                              │
│         │            │ SPEECH-TO-TEXT SECTION       │
│         ●────────────│ [Demo + Features]            │
│         │            │                              │
├─────────┼────────────┼──────────────────────────────┤
│         │            │                              │
│         │            │ AI CHAT SECTION              │
│         ●────────────│ [Demo + Features]            │
│         │            │                              │
├─────────┴────────────┴──────────────────────────────┤
│                                                     │
│                  PRICING SECTION                    │
│   [Daily/Monthly Toggle]                            │
│   [Pricing Cards x3-4]                              │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  SOCIAL PROOF                       │
│   [Logos] [Testimonials] [Stats]                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  FINAL CTA                          │
│   [Headline] [CTA Button]                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                      FOOTER                         │
│   [Links] [Social] [Legal] [Newsletter]             │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 Technical Implementation Notes

### Next.js Setup
- ใช้ App Router (Next.js 13+)
- Enable Server Components สำหรับ static content
- Client Components สำหรับ interactive elements
- Image optimization ด้วย next/image

### TailwindCSS Configuration
- Custom color palette
- Custom spacing scale
- Typography plugin
- Animation utilities

### GSAP Integration
- ติดตั้ง: gsap, @gsap/react
- Register ScrollTrigger plugin
- ใช้ useGSAP hook
- Cleanup animations on unmount

### Performance Optimization
- Lazy load sections below fold
- Use will-change CSS property
- Batch animations together
- Limit concurrent animations
- Use Intersection Observer

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1440px

---

## 📝 Content Copywriting Guidelines

### Tone of Voice
- Professional but friendly
- Technical but accessible
- Confident but not arrogant
- Focus on benefits, not just features

### Headline Formulas
1. "[Result] without [Pain Point]"
2. "The [Adjective] way to [Action]"
3. "[Action] [Object] in [Timeframe]"

### CTA Best Practices
- Action-oriented verbs
- Create urgency/value
- Clear benefit statement

**Examples:**
- "เริ่มใช้งานฟรี"
- "ทดลอง 7 วัน ไม่ต้องใช้บัตรเครดิต"
- "ดูตัวอย่างการทำงาน"
- "คำนวณราคาของคุณ"

---

## 📊 Conversion Optimization Tips

### Above the Fold
- Clear value proposition
- Visible CTA
- Trust indicators (logos, ratings)

### Throughout the Page
- Multiple CTAs at natural breakpoints
- Social proof near decision points
- Address objections proactively

### Pricing Section
- Highlight recommended plan
- Show monthly savings for annual plans
- Free trial/money-back guarantee
- Feature comparison table

### Mobile Optimization
- Thumb-friendly buttons
- Simplified navigation
- Fast loading (< 3 seconds)
- Touch-friendly interactions

---

## 🎬 Animation Storyboard Summary

| Section | Trigger | Animation Type | Duration |
|---------|---------|----------------|----------|
| Hero | Page Load | Staggered fade/slide | 1.5s |
| Timeline Start | Scroll 20% | Line draw begins | Scroll-bound |
| Products | Scroll to section | Cards stagger reveal | 0.8s each |
| TTS Section | Scroll to section | Sound wave + text | 1.2s |
| STT Section | Scroll to section | Mic + waveform | 1.2s |
| Chat Section | Scroll to section | Chat bubbles | 1.2s |
| Timeline Nodes | Each section | Dot pulse/glow | 0.5s |
| Pricing Cards | Scroll to section | Flip/reveal | 0.6s |
| Stats | In viewport | Count up | 2s |
| Final CTA | Scroll to section | Scale + glow | 0.8s |

---

## 📚 Resources & References

### Design Inspiration
- https://saaspo.com/industry/ai-saas-websites-inspiration
- https://www.landingfolio.com/inspiration/landing-page/artificial-intelligence
- https://saaslandingpage.com/

### GSAP Documentation
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://blog.olivierlarose.com/tutorials/smooth-scroll

### Pricing Research
- https://aws.amazon.com/polly/pricing/
- https://cloud.google.com/text-to-speech/pricing
- https://www.assemblyai.com/pricing
- https://deepgram.com/pricing

### Best Practices
- https://unbounce.com/conversion-rate-optimization/the-state-of-saas-landing-pages/
- https://www.webstacks.com/blog/minimalist-landing-page-design-trends

---

## ✅ Checklist ก่อนเริ่มพัฒนา

- [ ] ออกแบบ Wireframe/Mockup
- [ ] เตรียม Content/Copy ทั้งหมด
- [ ] สร้าง Design System (Colors, Typography, Components)
- [ ] Setup Next.js + TailwindCSS + GSAP
- [ ] สร้าง SVG Timeline Path
- [ ] Implement Section Components
- [ ] Add Animations
- [ ] Responsive Testing
- [ ] Performance Optimization
- [ ] Cross-browser Testing
- [ ] Launch!

---

*Document Version: 1.0*  
*Last Updated: December 31, 2025*
