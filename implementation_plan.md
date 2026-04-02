# Implementation Plan - Updating Alfawad Internal Pages

The goal is to update five key internal pages of the Alfawad website to include accurate content fetched from the live site and implement a premium, consistent layout based on the Vision 2030 banner style provided.

## Target Pages
1. **Introduction** (alfawad.com/introduction.php)
2. **Chairman Message** (alfawad.com/chairman-message.php)
3. **Vision & Mission** (alfawad.com/vision-mission.php)
4. **Quality Policy** (alfawad.com/quality-policy.php)
5. **Environment & Safety** (alfawad.com/environment-safety.php)

## Key Design Principles
- **Banner Style:** Use the high-impact banner style from `Home.tsx` (Vision 2030 theme) as the header for internal pages.
- **Accurate Content:** Replace placeholder text with verified information about AL FAWAD Engineering & Construction.
- **Brand Consistency:** Use the official gold palette (`#b68a41`), black, and white.
- **Responsive Layout:** Ensure the two-column sidebar layout remains functional and visually appealing on all devices.

## Proposed Changes

### 1. Update `Introduction.tsx`
- **Header:** Implement the "BUILDING THE FUTURE" style banner.
- **Content:** Detailed overview of the company's 100% Saudi ownership, expertise in Civil, Mechanical, and Electrical instrumentation, and key partnerships (Sabic, Aramco, etc.).

### 2. Update `ChairmanMessage.tsx`
- **Header:** Consistent banner with internal branding.
- **Content:** Include the actual message from the Chairman emphasizing growth, excellence, and alignment with Vision 2030.
- **Visuals:** Refined signature and portrait presentation.

### 3. Update `VisionMission.tsx`
- **Header:** Theme-consistent banner.
- **Content:** Explicitly define the Mission (achieving excellence), Vision, and Core Principles (Quality, Customer Relationships, Teamwork, Integrity, Commitment, Safety).

### 4. Update `QualityPolicy.tsx`
- **Header:** Theme-consistent banner.
- **Content:** Detail the commitment to ISO 9001:2015, customer service cornerstones, and the "Quality is #1 Priority" mantra.

### 5. Update `EnvironmentSafety.tsx`
- **Header:** Theme-consistent banner.
- **Content:** Detail the ISO 14001:2015 standards, the "Safety First" company culture, and the goal of making safety a competitive advantage.

## Next Steps
1. Refine the `AlfawadPageHeader` component (if necessary) to support the new premium banner style, or implement it directly in each page for maximum control.
2. Update each file sequentially with the verified text and improved JSX structure.
