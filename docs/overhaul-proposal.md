# Feel Good Chiro: Get back to feeling good.

Design and Tampa search strategy · September 16, 2026

## Recommendation

Build the website around pink Gulf Coast sunsets and the exact palette supplied by the user: `#a2d2ff`, `#bde0fe`, `#ffafcc`, `#ffc8dd`, and `#cdb4db`. Keep the headline **“Get back to feeling good.”** in upright sans-serif type. A real full-page sunset photograph establishes the atmosphere; subtle parallax, generous type, and cohesive transitions carry it through the site.

The current design direction is documented in `pink-sunset-concept.html`. It supersedes both earlier concepts. Remove video, surfers, The Locals Group imagery and wave artwork, deep teal, electric blue, yellow, coral, and decorative italic words. Create Feel Good's own identity.

Launch with generic/stock photographs. Custom photography remains an optional later enhancement. Keep the useful Tampa care content and search architecture already planned, while making the visual language coherent and personal.

This is a proposal and working visual concept, not a production deployment. The keyword attachment remains research input, not proof of clinical scope or search demand.

## What the audit found

The current implementation has a useful foundation: booking and phone actions, Dr. Frankie's portrait, services, first-visit information, FAQs, and 13 educational articles. The generic feeling comes from the repeated rounded cards, similar section layouts, and broad language. Stock photography can work well with a stronger composition, a consistent mood, and a more personal voice.

The [published biography](https://feelgoodchiro.net/about-us/) offers stronger material: an interest in outdoor life and Tampa, Spanish-language care, sports training, rehabilitation experience, and a collaborative approach. Bring those details forward, using current credentials verified by the practice. The [existing homepage](https://feelgoodchiro.net/) also establishes the no-long-term-contracts approach. These are useful differentiators.

The local code needs specific cleanup as part of the rebuild:

- `app/layout.tsx` currently uses a `chatgpt.site` preview domain for its metadata base while business structured data identifies `feelgoodchiro.net`. Align public canonicals, sitemap, social metadata, and entity URLs with the intended production domain. Keep the staging copy out of the index.
- `app/articles/[slug]/page.tsx` falls back to the first article when a slug is unknown. Replace this with a real not-found response and verify the deployed HTTP status.
- Service cards and condition chips on the homepage are not dedicated destinations. Create useful linked pages for the principal search intents.
- Some review quotations in `app/page.tsx` combine or alter wording from the [published reviews](https://feelgoodchiro.net/reviews/). Restore exact, verified excerpts; never present a paraphrase as a patient quote.
- Existing image descriptions assert Tampa settings. Check provenance before describing stock or illustrative images as actual local patients or locations.
- The public site lists inconsistent office hours in different places, and the current code uses a different suite suffix. Establish one current address and schedule with the practice, then use it consistently.

This was a source and content audit, not a live ranking, analytics, clinical-evidence, or performance audit. No search-volume or ranking claims are implied.

## Visual identity

Use the five supplied colors as a related family across the page, not as five competing section themes:

| Color | Role |
| --- | --- |
| `#a2d2ff` | Sky-blue accents and deeper blue details |
| `#bde0fe` | Airy blue surfaces and the sky end of gentle transitions |
| `#ffafcc` | Primary booking actions and stronger pink accents |
| `#ffc8dd` | Main blush tone and a light photographic overlay |
| `#cdb4db` | Lavender shadows, dividers, and transitions between pink and blue |

Use a dark neutral for legible text and soft white breathing room. Keep major surfaces bright. Carry the same pink-to-lavender-to-blue relationship across sections with overlapping tints; avoid abrupt, unrelated color blocks.

Use a rounded, upright sans serif such as Outfit for headlines and a readable sans serif for body copy. The complete headline remains “Get back to feeling good.” No italics. Let real photography and scale establish the identity, with restrained graphic additions.

## Selected sunset imagery

**Primary: Debby Belmont, Marco Island, Florida — “Cotton Candy Sky.”** The photographer identifies the location on the source page, which lists the image under the Unsplash License. The composition has pink clouds, blue water, small breaking waves, and generous sky, making it suitable for the full-page opening. The concept references the photographer's hosted image and includes a source credit.

- [Marco Island sunset — Debby Belmont](https://unsplash.com/photos/a-sunset-over-the-ocean-with-waves-coming-in-k_MDRzXAUPs)
- [Key West sunset — Zoshua Colah](https://unsplash.com/photos/palm-tree-silhouette-against-a-vibrant-sunset-over-the-ocean-2b3TX3ytUSk): an alternative with stronger pink/purple color and a silhouetted palm; more dramatic than the primary selection.
- [Clearwater twilight — Abdullah Almutairi](https://www.pexels.com/photo/silhouette-of-people-walking-on-the-shore-of-a-beach-5442143/): locally relevant stock with pink/purple water and walkers, but too dark for the main bright hero; a possible supporting image.

The named places describe the photographs, not the office location. Keep the business identified as Tampa. Do not imply the stock subjects are patients or that the practice is on the beach.

## Homepage sequence

1. **Full-page pink sunset.** Use the Marco Island photograph behind a legible upright headline, a visible Tampa chiropractic/acupuncture line, a short introduction, and booking links. Add gentle scroll parallax to the photograph. No video.
2. **A warm introduction.** Blend the photo into a soft white/blush section introducing the practice and its personal approach. State the confirmed no-long-term-contracts policy and Spanish-language availability plainly.
3. **Useful care information.** A pale pink/lavender surface holds chiropractic, acupuncture, and sports/rehabilitation information. Provide actual descriptions and links to the relevant condition pages in the eventual production site.
4. **Meet Dr. Frankie.** Use the existing real portrait at a modest scale, with personal copy, verified credentials, and a full biography link. Keep the same restrained palette and upright typography.
5. **First-visit experience.** A large stock consultation photograph can establish the initial composition, then be replaced by an equivalent real office photograph later. Explain listening, assessment, options, and next steps.
6. **Reviews and questions.** Exact, verified patient excerpts and useful FAQs remain ordinary readable text, with subtle motion only around nonessential imagery.
7. **Visit and booking.** Transition into pale blue with confirmed hours, address, payment information, directions, phone, and booking. Keep the whole ending bright and uncluttered.

Navigation: Care · Meet Dr. Frankie · Your first visit · Resources · Contact, with a visible appointment action. The temporary concept demonstrates the composition and navigation; full production content and migration remain planned work.

## Motion, responsiveness, and performance

Use gentle parallax on the sunset photograph and limited section entrances. The user has removed video from the brief. The Locals Group wave and imagery are also removed from the current direction.

Keep readable copy stable and available before animation. Provide a pause control and honor reduced-motion preferences. Avoid scroll hijacking or long pinned scenes. Mobile uses an independently considered crop and smaller motion distances; a static presentation is suitable when the device or user preference calls for it.

Load the hero image immediately at the appropriate responsive size. Reserve image dimensions, lazy-load later photographs, keep booking accessible, and retain all important headings and links as HTML text. Check keyboard use and 320px layouts. Target LCP at most 2.5 seconds, INP at most 200 ms, and CLS at most 0.1, following [Google's performance guidance](https://developers.google.com/search/docs/appearance/core-web-vitals). These are implementation goals, not measurements of this concept or ranking guarantees.

## Search architecture

Organise keywords around a patient's intent. One strong page can cover close variants such as “back pain chiropractor Tampa” and “chiropractor for back pain Tampa.” Do not build one page per wording variation.

The destinations below are proposed. Preserve existing published URLs wherever suitable, and reconcile all route choices with a complete old-site crawl before implementation.

| Destination | Primary purpose | Timing |
| --- | --- | --- |
| `/` | Tampa chiropractor and Tampa chiropractic; introduce the practice and route visitors | First release |
| `/chiropractic-care/` | Explain chiropractic appointments and treatment options | First release |
| `/acupuncture/` | Tampa acupuncture and pain-related acupuncture questions | First release; detailed claims need review |
| `/back-pain/` | Lower, upper, middle and chronic back-pain queries; conservative care | First release |
| `/neck-pain/` | Neck pain, stiffness, neck-related questions | Next release, or launch if reviewed content is ready |
| `/sciatica/` | Sciatica and sciatic nerve pain; assessment and options | Next release, or launch if reviewed content is ready |
| `/sports-chiropractic/` | Sports chiropractor, rehabilitation, active adults, running/golf/workout concerns | Next release, or launch if reviewed content is ready |
| `/about-us/` | Dr. Frankie, verified credentials, approach, real portrait | First release |
| `/new-patients/` and `/contact/` | Visit decisions, practical details, legitimate local relevance | First release |
| `/cox-spinal-decompression/` | Explain the actual technique and suitability assessment | Next release; preserve old URL if different |
| `/knee-pain/`, `/shoulder-pain/`, `/joint-pain/` | Distinct joint concerns and appropriate conservative-care pathways | Next release after clinical review |
| `/herniated-disc/` | Diagnosis-specific questions, options and limits | After scope and content review |
| `/auto-accident-chiropractor/` | Auto injury and whiplash | After confirming the actual service and intake process |
| `/hip-pain/` | Hip-pain evaluation and conservative-care questions | After confirming scope |
| `/conservative-pain-care/` | Optional overview of non-surgical approaches and referral pathways | Later, if differentiated from the care overview |

The attached `keyword-map.csv` assigns 132 unique supplied phrases to a page or section and marks deferred work. Priorities are editorial recommendations based on relevance and available source material, not measured keyword demand.

### What each service or condition page should contain

A descriptive title and H1; a direct explanation of the concern; what an assessment involves; the specific care offered here; suitability and limitations; what a first visit involves; relevant patient questions; clinician review and references where medical claims are made; a local booking action; and links to the relevant treatment and educational pages.

Example title: **Back Pain Chiropractor in Tampa | Feel Good Chiropractic**. A more personal subheading might be “Let’s understand what’s getting in your way.” This allows the brand voice and search language to work together.

Write the necessary amount to answer real questions; do not impose a word-count quota. A thoughtful page is more useful than multiple near-duplicates for “lower back relief,” “lower back treatment,” and “lower back chiropractor.”

Keep education separate from appointment intent. An article explaining back pain can support and link to the back-pain care page. Consolidate overlapping accident and sports articles when they do not answer meaningfully different questions, with redirects for removed URLs.

### Keywords that need a narrower approach

**Non-surgical orthopedics:** retain chiropractic care as the primary identity. The supplied positioning is a marketing hypothesis, not proof that the office provides an orthopedic medical service. Describe actual conservative musculoskeletal care and Dr. Frankie's precise credentials. Do not imply he is an orthopedic surgeon or that the practice supplies every alternative to surgery.

**Meniscus tears, rotator cuff tears, bone-on-bone arthritis, herniated discs:** these can support carefully reviewed educational content about options and referral, where within scope. Do not headline promises of avoiding surgery, reversing degeneration, or repairing torn tissue.

**Sports medicine:** connect relevant searches to the verified sports chiropractic service without adopting an inaccurate professional title.

**Acupuncture for migraines, anxiety, insomnia, stress, or recovery:** the published services archive supports offering acupuncture, but the full acupuncture page could not be retrieved during this audit. Confirm each treatment area and review evidence before creating condition-specific claims or pages. Begin with the main acupuncture page.

**“Best” and “near me”:** answer comparison and location intent through credentials, accurate information, reviews, and useful visit details. Do not make unsupported superiority claims or repeat “near me” throughout the text.

### Tampa and neighborhood relevance

Begin with the real Tampa office and a genuinely useful contact page. The published biography names Northdale, Carrollwood, and Lutz. The requested list also includes Westchase, Citrus Park, and Town ’n’ Country; verify that these are intended service areas before adding detailed travel guidance.

Do not create four nearly identical neighborhood landing pages or pretend there are offices in each location. Start with distinct sections on the contact page. Add a separate neighborhood page only when patient demand and genuinely useful local content justify one. This avoids the kind of doorway pages covered by [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

Maintain a complete Google Business Profile with accurate categories, address, hours, booking link, genuine photographs, and reviews. Local visibility also depends on distance and prominence; copy alone cannot guarantee coverage throughout Tampa. [Google's local ranking guidance](https://support.google.com/business/answer/7091).

## Images and SEO

The sunset photography can coexist with excellent search accessibility. They should establish the mood while visible headings, paragraphs, and internal links explain the care.

- Purely decorative scenery: empty alt text or an appropriate decorative background; meaningful standalone photography receives an accurate short description.
- Actual doctor portrait: a concise identification of Dr. Frankie.
- Actual office entrance: a helpful description identifying the practice entrance.
- Stock or illustrative material: describe the scene accurately; do not claim it shows this clinic or its patients.

Do not put a keyword list in alt text, hide paragraphs behind images, or bake essential copy into pictures. Descriptive filenames and relevant nearby text are helpful; they do not replace page content. [Google's image guidance](https://developers.google.com/search/docs/appearance/google-images) explicitly cautions against keyword-filled alt attributes.

The existing metadata keyword array is not an SEO growth mechanism: [Google does not use the meta-keywords tag](https://developers.google.com/search/docs/crawling-indexing/special-tags).

## Stock photography now; Frankie's shoot guide later

Use generic photography confidently throughout the launch site. Select bright natural light, believable everyday movement, relaxed expressions, and cohesive color. Favor full-width compositions with room for responsive crops. Combine lifestyle and care images so the site explains both the experience and its purpose. Existing generic images can supply the initial layouts; record their provenance and verify commercial-use rights before production. Additional licensed stock is suitable where it improves the composition.

| Placement | Launch photograph | Future shot for Frankie | Crop guidance |
| --- | --- | --- | --- |
| Hero | Selected Marco Island sunset photograph | Optional local Gulf Coast pink sunset photograph | Wide, with plenty of sky and useful central mobile framing |
| First visit | A welcoming clinician-patient conversation | Frankie seated at eye level, listening to a person who has agreed to be photographed | Landscape; show expressions and open body language |
| Sports and rehabilitation | A comfortable movement or shoulder assessment | Frankie demonstrating an exercise or assessing movement in his actual space | Landscape plus vertical alternative; show hands and movement clearly |
| Meet Dr. Frankie | Keep the real existing portrait in a modest-sized frame | Frankie in normal work clothes, relaxed, with natural window light | Vertical 4:5; avoid excessive headroom |
| Visit/contact | Use the real office image if current; otherwise a graphic location treatment | Entrance, visible suite signage, and a wide view of the treatment room | Horizontal; make wayfinding details readable |
| Coastal interlude | A complementary pink sunset stock photograph if needed | Optional local sunset or water photograph | Wide, simple horizon, and the same restrained palette |

Keep stock clinicians separate from the named doctor biography and stock models separate from attributed patient reviews. Ordinary image descriptions should describe the scene accurately. Stock photos can remain permanently where they work; replacement is optional.

A later 20–30 minute conversation with Dr. Frankie can enrich the text: what patients worry about before a first visit, how he explains options, the activities patients want to resume, how he decides when to refer, and what patients appreciate about his approach. It is not a launch prerequisite. Use the existing source material for the initial drafts and obtain review for clinical claims. Do not invent anecdotes or put drafted prose in quotation marks as his own words.

## Technical and launch work

Preserve the main domain. Inventory old URLs and traffic before replacing the WordPress site; preserve valuable paths or apply one-to-one permanent redirects. Test redirects, missing pages, canonical URLs, sitemap, robots rules, mobile navigation, booking links, and basic accessibility.

Render important headings, content, and links in the initial HTML. Add accurate business, clinician, and breadcrumb structured data where appropriate, matching visible facts. Include unique social previews and appropriately sized images. Keep FAQs for patients; do not sell FAQ markup as a search feature. Google [removed FAQ rich results in May 2026](https://developers.google.com/search/updates).

Before launch, verify the business name, suite designation, opening hours, credentials, insurance/payment details, booking destination, review excerpts, actual services, and image provenance. Public legacy copy is a source to check, not automatic validation of every medical claim.

## Delivery order and measurement

**Fast launch:** establish the supplied pastel palette, full-page pink sunset photograph, coherent section transitions, and gentle parallax; publish the homepage, doctor, contact/visit, chiropractic, acupuncture, and back-pain destinations. Preserve existing useful content and URLs during migration, correct production-domain configuration and reviews, and complete booking, redirect, mobile, and indexing checks. The homepage can introduce other confirmed services before all expanded pages are ready. Neither a photo shoot nor the complete keyword inventory should delay this release. Deliver a focused set of polished motion effects as part of the design rather than adding many different animation systems.

**Next:** expand neck-pain, sciatica, sports, joint, and decompression content as reviewed material is ready. Improve the retained resources. Continue refining the motion treatment based on device testing while retaining static alternatives for reduced-motion and constrained-device use.

**Then:** use actual search and appointment data to select additional condition and neighborhood work. Add fresh photographs as available. Do not produce a batch of thin articles just to cover every attached phrase.

Record a prelaunch baseline in Search Console and available analytics. Track non-brand impressions and clicks by condition, landing-page visits, call clicks, booking starts, completed bookings where the booking platform permits measurement, and Business Profile actions. A booking-link click is not a booked appointment. Keep symptom details and patient information out of analytics events.

Review indexing and errors immediately after launch, then compare meaningful 30-, 60-, and 90-day windows with seasonality in mind. Adjust based on results; rankings and appointment growth are outcomes to measure, not promises.
