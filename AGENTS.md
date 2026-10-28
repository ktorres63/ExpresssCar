# AGENTS.md — G&L CAR EXPRESS

## 1. Project Overview

Build a professional, responsive marketing website for **G&L CAR EXPRESS**, a private transportation and vehicle rental company based in Arequipa, Peru.

The website should communicate professionalism, reliability, comfort, and quality. Its primary goal is to help visitors explore the company's services and vehicle fleet, then contact the company to request a quotation or reservation inquiry.

**Important:** Submitting an inquiry does not confirm a reservation. The company must manually verify availability and confirm the booking.

### Target audience

- Tourists visiting Arequipa.
- Individuals and families needing private transportation.
- Business travelers and corporate clients.
- Groups requiring transportation for trips, tours, or events.

### Primary objective

Convert website visitors into potential customers through clear service information, vehicle presentation, and visible contact calls to action.

---

## 2. Instructions for the AI Agent

Before modifying the project:

1. Inspect the existing repository and understand its structure.
2. Read `package.json`, relevant configuration files, and available documentation.
3. Identify the framework, installed dependencies, package manager, and existing conventions.
4. Reuse existing components and utilities whenever appropriate.
5. Understand the current implementation before changing or replacing it.

While working:

- Make incremental, focused changes.
- Keep code readable, maintainable, and properly typed.
- Avoid unnecessary dependencies.
- Do not implement features that have not been requested.
- Do not invent business information, vehicle specifications, prices, customer reviews, or company credentials.
- Use clearly identified placeholders whenever information is missing.
- Do not commit changes to Git unless explicitly requested.
- Never expose API keys, credentials, tokens, or other secrets in frontend code.
- Do not run destructive commands or delete existing files without a clear reason.
- Do not rewrite the entire project when a smaller change is sufficient.
- Do not modify unrelated files or functionality.

If important information is missing, make reasonable design decisions without inventing facts. Clearly identify placeholders and unresolved requirements.

---

## 3. Technology Stack

Use the following stack when compatible with the existing project:

- **Astro:** Main framework and page architecture.
- **TypeScript:** Type safety and maintainability.
- **Tailwind CSS:** Styling and responsive layouts.
- **GSAP:** Subtle animations and scroll-based effects when they improve the experience.
- **Lucide:** Icons, if an icon library is needed.
- **React:** Only for components that genuinely benefit from React interactivity.

### Architectural principles

- Prefer Astro components for static content and layouts.
- Use Astro's static rendering capabilities whenever possible.
- Use native JavaScript or Astro components for simple interactions.
- Use React islands only when their interactivity justifies the additional complexity.
- Keep vehicle and service information separate from presentation components.
- Avoid introducing a backend unless the requirements explicitly demand one.
- Use the package manager already established by the repository.
- Prefer pnpm if the project is already configured to use it.
- Do not migrate frameworks or replace the existing stack without a compelling technical reason.

### Dependency management

Before installing a package:

1. Check whether the functionality can be implemented using existing dependencies.
2. Verify compatibility with the installed Astro and framework versions.
3. Prefer well-maintained packages with a clear purpose.
4. Avoid adding dependencies for trivial functionality.

Do not upgrade all dependencies or change major versions without a specific reason.

---

## 4. Brand Identity and Visual Direction

The website should have a premium automotive aesthetic.

### Color palette

Use these colors as the initial design tokens:

- Primary red: `#D92332`
- Charcoal: `#202124`
- Medium gray: `#686B70`
- Light gray: `#F2F3F5`
- White: `#FFFFFF`

The red should be used as an accent for important actions, highlights, and selected interface elements.

Use charcoal for strong visual sections and text. Use white and light gray to create contrast and improve readability.

Define reusable CSS variables or Tailwind theme tokens when appropriate. Avoid scattering inconsistent color values throughout the project.

### Design direction

The visual style should feel:

- Premium and professional.
- Modern and automotive-focused.
- Clean and editorial.
- Trustworthy and easy to navigate.
- Dynamic without becoming distracting.

### Design rules

- Use strong typography and a clear visual hierarchy.
- Give vehicle photography sufficient space.
- Prefer large, high-quality vehicle images.
- Use generous spacing and intentional layouts.
- Alternate light and dark sections when appropriate.
- Keep navigation and calls to action easy to identify.
- Use subtle transitions and restrained motion.
- Make mobile layouts intentionally designed, not merely compressed desktop layouts.
- Maintain consistency across buttons, headings, spacing, and interactive states.

Avoid:

- Excessive gradients.
- Excessive glassmorphism.
- Too many rounded cards.
- Unnecessary decorative elements.
- Excessive animations.
- Generic template-like sections.
- Large amounts of text inside cards.
- Excessive icon usage.
- Distracting cursor effects or scroll hijacking.
- Fake booking interfaces that suggest a reservation is already confirmed.

Do not add RGB effects or unrelated visual elements.

---

## 5. Brand Content and Copywriting

### Company name

Use the exact brand name:

**G&L CAR EXPRESS**

The company may also be referred to as G&L Car Service in its existing materials. Prefer G&L CAR EXPRESS for the main website branding unless the client requests otherwise.

### Official slogan

"Que tu tiempo no se detenga, te movilizamos a tu medida".

Preserve the original meaning when improving punctuation or presentation.

### Location

Arequipa, Peru.

### Services described by the client

The company has described the following services:

- Vehicle rental and private transportation.
- Executive and corporate transportation.
- Airport transfers.
- Tourism and group transportation.
- Transportation options ranging from SUVs to minibuses.
- Chauffeur services.
- Executive protection services.

Do not invent vehicle models, passenger capacities, availability, service areas, prices, or technical specifications.

### Claims requiring verification

The client has also mentioned:

- Prices agreed upon in advance.
- Taxes and tolls included in the agreed price.
- Changes to itineraries negotiated with the customer.
- Assistance through WhatsApp, the website, or telephone.
- 24-hour assistance.

Do not present these details as guaranteed public promises until the client confirms their exact scope and conditions.

Do not invent or imply:

- Security certifications.
- Insurance coverage.
- Official authorizations.
- Driver qualifications.
- Years of experience.
- Awards.
- Customer satisfaction statistics.
- Guaranteed availability.
- Verified customer testimonials.

Use professional, natural Spanish appropriate for a Peruvian audience.

Correct spelling and grammar in website copy. Keep the language clear, concise, and customer-focused.

Avoid generic marketing language that does not communicate a concrete benefit. Do not exaggerate claims simply to make the website sound more impressive.

---

## 6. Website Structure

The following sections represent the initial website structure. Adapt them to the existing project rather than forcing an unnecessary rewrite.

### 6.1 Header and navigation

Include:

- Company logo or a temporary text-based logo.
- Inicio.
- Flota.
- Servicios.
- Nosotros or Experiencias.
- Contacto.
- A prominent "Solicitar cotización" call to action.

Requirements:

- Responsive navigation.
- Clear active and hover states when appropriate.
- Accessible mobile menu.
- Keyboard navigation.
- Functional links to the correct sections or pages.

Do not invent a logo asset. Use a temporary typographic treatment if the official logo is unavailable.

### 6.2 Hero section

The hero should immediately communicate the company's transportation services and value proposition.

Include:

- A compelling Spanish headline.
- Supporting copy.
- A primary quotation or contact CTA.
- A secondary action to explore the fleet.
- An appropriate vehicle photograph or client-approved visual.

Use the company slogan where it fits naturally.

Avoid unsupported promises, exaggerated marketing claims, and unnecessary text.

The main call to action must work. Do not use placeholder links such as `href="#"`.

### 6.3 Vehicle fleet

Present the vehicles available for rental or transportation.

Each vehicle must be based on information supplied or verified by the client.

Possible information fields include:

- Vehicle name or model.
- Vehicle category.
- Image.
- Passenger capacity, if confirmed.
- Luggage capacity, if confirmed.
- Features, if confirmed.

Do not invent inventory or display fictional vehicles as real company assets.

If the client has not supplied fleet information, create a clearly marked placeholder structure that can be populated later.

If there are enough vehicles to justify category filters, implement functional filters. If only a few vehicles are available, prefer a simple layout instead.

### 6.4 Services section

Present confirmed services in a clear and organized layout.

Potential categories include:

- Transporte ejecutivo y corporativo.
- Traslados al aeropuerto.
- Transporte turístico.
- Transporte privado para grupos.
- Alquiler de vehículos.
- Servicios con conductor.

Include executive protection only after confirming the exact service and how it may legally and accurately be described.

Each service should have concise copy and a relevant call to action.

### 6.5 Why choose G&L CAR EXPRESS?

Create a section explaining the company's value proposition using only verified information.

Potential themes include:

- Personalized transportation.
- Advance coordination.
- Transportation for different types of customers.
- Flexible travel arrangements, if confirmed.
- Attention to customer requirements.

Do not fabricate ratings, statistics, testimonials, or claims about superiority over competitors.

### 6.6 Arequipa and tourism section

Use this section to connect the company with tourism and transportation in Arequipa.

Possible content:

- Tourism-oriented transportation.
- Private trips and group transfers.
- Photography of Arequipa or relevant destinations.
- A call to action for visitors who need transportation.

Do not imply that the company offers a specific tour, destination, guide, or itinerary unless the client confirms it.

Use relevant imagery with appropriate licensing.

### 6.7 How it works

Explain the inquiry process simply:

1. The customer explores the available services.
2. The customer contacts the company or submits an inquiry.
3. The company reviews the requested service, date, and availability.
4. The company contacts the customer to confirm the details.

Make it clear that submitting a form is not the same as confirming a reservation.

### 6.8 Contact and quotation section

Provide a prominent way to request a quotation.

Potential contact channels:

- WhatsApp.
- Telephone.
- Email.
- Website inquiry form.

Use real contact details supplied by the client.

If the phone number or email is missing, use an obvious placeholder during development. Never invent contact information.

### 6.9 Footer

Include, when available:

- Company name.
- Navigation links.
- Confirmed contact details.
- Confirmed social media profiles.
- Location.
- Copyright information.

Do not invent social media accounts or business addresses.

---

## 7. Fleet and Service Data

Keep repeatable content separate from UI components.

Suggested files:

- `src/data/vehicles.ts`
- `src/data/services.ts`
- `src/data/site.ts`

Adapt these paths to the repository's existing architecture.

Use TypeScript interfaces or types where appropriate.

A vehicle data model may contain:

- `id`
- `name`
- `category`
- `image`
- `alt`
- Optional capacity and feature fields, only when verified.

Keep data structures simple and appropriate to the project's size. Do not create unnecessary abstractions or a content management system for a small static website.

Use actual client-provided images whenever possible.

Do not hotlink random images from unrelated websites in production. Use appropriately licensed images or assets supplied by the client.

If temporary images are necessary, make their placeholder status clear.

---

## 8. Reservation and Inquiry Flow

The final integration method has not yet been decided.

Potential approaches:

1. An external Google Form that customers open from the website.
2. A custom website form connected to Google Apps Script and Google Sheets.
3. Another integration explicitly approved by the client.

Until the integration is decided:

- Build the contact and quotation interface so it can be connected later.
- Do not create a fake form submission.
- Do not show a success message unless a submission has actually succeeded.
- Do not display a reservation confirmation automatically.
- Do not add payments, user accounts, or a booking engine without explicit approval.

If implementing a custom form later:

- Validate required fields.
- Display understandable validation errors.
- Provide loading, success, and failure states.
- Handle network errors.
- Prevent accidental duplicate submissions when practical.
- Protect customer data.
- Collect only information necessary for the inquiry.
- Never expose credentials or private API keys in the browser.
- Make it clear how the customer will be contacted.

Use clear Spanish labels and messages.

Do not assume that a frontend-only form can securely store or transmit data without an appropriate integration.

---

## 9. Interactions and Animations

Use GSAP only when animation improves the user experience or visual storytelling.

Suitable uses include:

- A restrained hero entrance animation.
- Subtle section reveals.
- Small transitions between visual states.
- Carefully designed vehicle image interactions.

### Animation requirements

- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking.
- Keep content accessible if animations fail.
- Avoid delaying important information.
- Prevent layout shifts.
- Ensure interactions work with touch and keyboard input.
- Avoid unnecessary animation libraries or duplicated animation logic.
- Clean up event listeners, observers, and GSAP animations when appropriate.
- Avoid adding heavy animation code to components that do not need it.

Do not animate every element merely because GSAP is available.

### Vehicle filters

If the fleet has enough vehicles to justify filters, implement functional category filtering.

If only a few vehicles exist, prefer a simple layout instead of adding unnecessary filtering UI.

Never include nonfunctional filter controls.

---

## 10. Accessibility

Follow semantic HTML and accessibility best practices.

Requirements:

- Use semantic landmarks such as `header`, `nav`, `main`, `section`, and `footer`.
- Maintain a logical heading hierarchy.
- Provide descriptive alternative text for meaningful images.
- Use empty alt attributes for purely decorative images.
- Ensure visible keyboard focus.
- Ensure sufficient text contrast.
- Use real buttons for actions and links for navigation.
- Give every form input an accessible label.
- Associate validation messages with their inputs.
- Ensure mobile navigation is keyboard accessible.
- Do not rely exclusively on color to communicate meaning.
- Respect reduced-motion preferences.
- Avoid unnecessary ARIA attributes when native HTML semantics are sufficient.

Do not sacrifice accessibility for visual effects.

---

## 11. Responsive Design

Test the interface at:

- Small mobile screens.
- Large mobile screens.
- Tablets.
- Laptop displays.
- Large desktop displays.

Verify:

- Navigation works at every breakpoint.
- Text remains readable.
- Buttons have practical touch targets.
- Vehicle images maintain appropriate proportions.
- Cards do not overflow.
- Forms remain usable on mobile.
- Horizontal scrolling is not introduced accidentally.
- Animations remain performant on mobile devices.
- Content order remains logical at different screen sizes.

Use responsive Tailwind utilities and reusable layout patterns.

Avoid designing exclusively for desktop.

---

## 12. Performance and SEO

Prioritize a fast, lightweight website.

### Performance

- Optimize image sizes and formats.
- Use appropriate image dimensions.
- Lazy-load below-the-fold images when appropriate.
- Avoid loading unnecessary JavaScript.
- Minimize client-side hydration.
- Avoid unnecessary dependencies.
- Prevent layout shifts.
- Avoid autoplaying heavy media without a clear purpose.
- Use Astro's image optimization features when appropriate and compatible with the project.

### SEO

- Use descriptive page titles and meta descriptions.
- Use a clear heading hierarchy.
- Provide meaningful link text.
- Add appropriate social sharing metadata when practical.
- Use a favicon if the client supplies a logo or icon.
- Use descriptive image alternative text.
- Keep URLs and page structure clear.
- Avoid duplicate metadata.
- Do not invent business details for structured data or local SEO.

Do not add analytics, tracking scripts, or third-party services without a clear requirement.

---

## 13. Suggested Project Structure

Use this as a reference, not a mandatory structure:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── FleetSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── WhyChooseUs.astro
│   │   ├── ArequipaSection.astro
│   │   ├── HowItWorks.astro
│   │   └── ContactSection.astro
│   └── fleet/
│       └── VehicleCard.astro
├── data/
│   ├── vehicles.ts
│   ├── services.ts
│   └── site.ts
├── layouts/
│   └── MainLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css

public/
└── images/
```

Adapt the structure to the existing repository. Do not create empty components or directories that are not needed.

Do not force all sections into separate components if a smaller implementation is clearer and easier to maintain.

---

## 14. Astro Development Workflow

### Development server

When starting the Astro development server, use background mode.

If the project uses pnpm:

```bash
pnpm exec astro dev --background
```

If the project uses npm:

```bash
npx astro dev --background
```

Manage the background development server using the Astro CLI commands:

```bash
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

Use the equivalent `npx astro` commands when npm is the project's package manager.

Before starting a server, check whether one is already running. Avoid starting duplicate development servers unnecessarily.

Do not stop or interfere with unrelated processes.

If the installed Astro version does not support a particular command or option, consult the documentation and use the appropriate alternative.

### Official documentation

Astro documentation: https://docs.astro.build

Consult the official documentation before implementing features involving unfamiliar Astro APIs, routing, integrations, rendering behavior, or configuration.

Use these guides according to the task:

- **Pages, dynamic routes, and middleware:** https://docs.astro.build/en/guides/routing/
- **Astro components and component syntax:** https://docs.astro.build/en/basics/astro-components/
- **React and other UI framework integrations:** https://docs.astro.build/en/guides/framework-components/
- **Content collections and structured content:** https://docs.astro.build/en/guides/content-collections/
- **Styling and Tailwind CSS:** https://docs.astro.build/en/guides/styling/
- **Internationalization:** https://docs.astro.build/en/guides/internationalization/

Only consult guides relevant to the current task. Do not read every guide before making a simple change.

### Project-specific Astro conventions

- Prefer `.astro` components for static sections, layouts, navigation, and content.
- Use TypeScript for structured data, including vehicle and service information.
- Use React integrations only when interactive behavior genuinely benefits from React.
- Keep the website primarily static unless a specific requirement justifies server-side rendering or a backend.
- Use GSAP sparingly for purposeful animations and respect `prefers-reduced-motion`.
- Follow the existing Astro version, configuration, and installed integrations.
- Do not assume that every feature documented for the latest version is available in the installed version.
- Use Astro's recommended image optimization features when appropriate and compatible with the existing project.
- For simple client-side interactions, prefer lightweight JavaScript over adding unnecessary framework dependencies.
- Do not introduce internationalization, content collections, middleware, or dynamic routes unless the project requires them.

### Verification

After modifying Astro components, routes, configuration, or integrations:

1. Run the relevant available checks from `package.json`.
2. Run the production build when practical.
3. Resolve errors introduced by the changes.
4. Report any warnings or unresolved issues accurately.

Never claim that the development server, type checks, or production build succeeded unless the corresponding command was executed successfully.

---

## 15. Code Quality

- Use descriptive names.
- Prefer small, reusable components.
- Use TypeScript types for structured data.
- Avoid `any` unless there is a documented reason.
- Avoid duplicating content and styles.
- Keep components focused on a clear responsibility.
- Do not suppress TypeScript or build errors merely to make the build pass.
- Avoid unnecessary abstractions.
- Keep dependencies minimal.
- Remove debugging code before completing the task.
- Do not refactor unrelated areas of the project.
- Follow the formatting and linting conventions already established by the repository.
- Do not introduce inconsistent naming conventions.
- Do not add comments that merely repeat what the code already expresses.
- Add comments when they clarify non-obvious behavior or important constraints.

Prefer straightforward solutions over clever or unnecessarily complex implementations.

---

## 16. Development Workflow

For each significant task:

1. Inspect the existing implementation.
2. Identify the files that need changes.
3. Establish a small, clear implementation plan.
4. Implement the requested feature.
5. Verify behavior and responsive layout.
6. Run available linting, type-checking, and build commands.
7. Fix errors introduced by the changes.
8. Summarize what changed and what remains incomplete.

Check `package.json` before assuming that a particular script exists.

Do not claim that a command or test passed if it was not executed successfully.

### Reporting requirements

When finishing a task, report:

- Files created or modified.
- Main implementation decisions.
- Commands or checks executed and their results.
- Missing client information or unresolved integrations.
- Any remaining work that requires client approval.

Do not produce lengthy reports for trivial changes. Keep the final summary proportional to the task.

---

## 17. Git and Project Safety

- Do not commit changes unless explicitly requested.
- Do not push changes to remote repositories unless explicitly requested.
- Do not rewrite Git history.
- Do not discard uncommitted user changes.
- Inspect Git status before potentially disruptive operations.
- Avoid destructive commands such as forced resets or indiscriminate file deletion.
- Do not modify `.env` files or credentials unless the task requires it and the changes are safe.
- Never hardcode secrets into client-side code.
- Keep the project in a runnable state whenever practical.

If the repository contains existing user modifications, preserve them unless the user explicitly asks to change them.

---

## 18. Acceptance Criteria

The website is ready for review when:

- The brand name is displayed correctly.
- The official slogan is preserved.
- The red, charcoal, gray, and white palette is applied consistently.
- The site has a clear visual hierarchy and professional automotive presentation.
- All main sections are present or their omission is explained.
- Fleet and service information can be maintained easily.
- No invented vehicle models, prices, statistics, testimonials, or credentials are presented as facts.
- All visible buttons and links perform their intended actions.
- Contact details are real or clearly marked as placeholders.
- The inquiry flow does not falsely confirm reservations.
- The layout works on mobile, tablet, and desktop.
- Keyboard navigation and reduced-motion preferences are supported.
- Images are optimized and appropriately sourced.
- No secrets are exposed in frontend code.
- Available checks have been executed and their results reported.
- Missing content and client decisions are documented.

---

## 19. Final Priority

**Build a polished, fast, maintainable website that helps customers understand G&L CAR EXPRESS services and request transportation quotations.**

Prioritize:

1. Accurate business information.
2. Strong visual presentation.
3. Functional contact actions.
4. Responsive behavior.
5. Accessibility.
6. Performance.
7. Maintainable architecture.
8. Minimal technical complexity.

When a feature requires information or authorization that has not been provided, do not invent it. Implement the appropriate foundation and clearly document what is needed to finish it.