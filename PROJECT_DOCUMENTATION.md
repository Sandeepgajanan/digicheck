# DigiCheck Project Documentation

This documentation explains the tech stack, project structure, how data and images are managed, and how non-developers can easily edit website content. It also provides guidance for developers and editors on extending the site.

---

## 1. Tech Stack & Project Structure

### What Tech Is Used?

- **Next.js (App Router):** The main framework for the site, using the new App Router for routing and layouts.
- **Tailwind CSS:** For all styling and responsive design.
- **Lenis:** For smooth scrolling effects.
- **Framer Motion:** For animations and transitions.
- **Images:** All images are either SVG or WebP format. SVGs are used for icons and vector graphics, WebP for photos and illustrations. All images are stored in the `public/` folder so they can be referenced easily in the code and data files.

### How Is Data Stored and Structured?

- **Content Data:** All text and content are stored in JavaScript files inside `src/data/`.
  - There are two folders: `src/data/english/` and `src/data/spanish/`.
  - Each section of the site (landing, contact, footer, etc.) has its own file, e.g. `landingdata.js`, `contactdata.js`.
  - Each file exports a JS object with all the text and image info for that section.
- **Common Data:** The `src/data/common/` folder contains shared/static data used across languages, such as brand images (`brandimgdata.js`) and button icons (`buttondata.js`).

- **Why This Structure?**
  - Keeps code and content separate.
  - Makes it easy to update text/images without touching the main codebase.
  - Supports multiple languages by just switching which data folder is loaded.

### How Is Data Imported and Used?

- **Import/Export:** Each data file uses `export const ...` to export its content object.
- **Utils:** Utility functions in `src/utils/` (especially `getData.js`) help import the correct data file based on the selected language.
- **How Data Is Called:** In the page or component, the relevant data object is fetched using the `getData` utility and the current language from the context. The language switcher changes which data file is used, so the content updates instantly without a full page reload.

---

## 2. Main Components (src/components/)

| Component            | Purpose                                                     |
| -------------------- | ----------------------------------------------------------- |
| Navbar.jsx           | Top navigation bar, includes logo, links, language switcher |
| Footer.jsx           | Footer with company info, links, and social icons           |
| Button.jsx           | Reusable button component                                   |
| BrandCard.jsx        | Displays a single brand logo                                |
| FeatureCard.jsx      | Displays a single feature                                   |
| HighlightCard.jsx    | Displays a single highlight                                 |
| WhyusCard.jsx        | Displays a single "Why Us" card                             |
| PriceCard.jsx        | Displays a single pricing plan                              |
| ToggleBill.jsx       | Switches between monthly/yearly pricing                     |
| Heading.jsx          | Section heading with title and subtitle                     |
| LiveProduct.jsx      | Shows live product info                                     |
| LanguageDropdown.jsx | Dropdown for switching language                             |
| LanguagePopup.jsx    | Popup for initial language selection (geo-based)            |

---

## 3. Main Pages (src/app/)

| Page/Route      | File Path                     | Purpose                                   |
| --------------- | ----------------------------- | ----------------------------------------- |
| Home            | `src/app/page.js`             | Main landing page, assembles all sections |
| Brand           | `src/app/brand/page.js`       | Brand logos section                       |
| Contact         | `src/app/contact/page.js`     | Contact form and info                     |
| FAQ             | `src/app/faq/page.js`         | Frequently asked questions                |
| Feature         | `src/app/feature/page.js`     | Features section                          |
| Highlights      | `src/app/highlights/page.js`  | Highlights section                        |
| Landing         | `src/app/landing/page.js`     | Hero/landing section                      |
| Main Feature    | `src/app/mainfeature/page.js` | Composite feature section                 |
| Mini Price      | `src/app/miniprice/page.js`   | Mini pricing section                      |
| Price           | `src/app/price/page.js`       | Full pricing page                         |
| Why Us          | `src/app/whyus/page.js`       | Why choose us section                     |
| Blog            | `src/app/blog/page.js`        | Blog/aggregator page                      |
| Not Found (404) | `src/app/not-found.jsx`       | Custom 404 error page                     |

---

## 4. Editing Website Content (For Non-Developers)

You do **not** need to know coding to update the website text or images. Here's how you do it:

### Step-by-Step Guide

1. **Go to the Data Folder**
   - Open `src/data/`.
   - Pick `english` or `spanish` depending on which language you want to edit.
2. **Find the Right File**
   - Each file matches a section of the website:
     - `landingdata.js` = Home page
     - `contactdata.js` = Contact page
     - `footerdata.js` = Footer section
     - etc.
3. **Open the File**
   - You'll see a JavaScript object with keys and values, like:
     ```js
     export const landingPageContent = {
       badge: "200 percent secure & reliable",
       title: ["digicheck for", "automotive-real-time", "safety & monitoring"],
       subtitle: "Track detect and act smarter",
       ctaLabel: "Request Demo",
       ctaLink: "/contact",
       image: {
         src: "/try.webp",
         alt: "DigiCheck Automotive Monitoring System",
       },
     };
     ```
4. **Edit the Text**
   - Change the text inside the quotes. For example:
     - `badge`: Small label at the top.
     - `title`: Main headline (each string in the array is a line).
     - `subtitle`: Subheading.
     - `ctaLabel`: Button text.
     - `image.src`: Path to the image (use `/yourimage.webp` or `/youricon.svg` from the `public/` folder).
   - **Do not change the keys** (the words before the colon), only the text in quotes.
5. **Save the File**
   - Save your changes. If the site is running in development mode, it will update automatically.

### Editing Images

- To change an image, put your new `.webp` or `.svg` file in the `public/` folder.
- Update the `src` value in the data file to match your new image filename, e.g. `src: "/newimage.webp"`.
- **Accessibility:** Always update the `alt` field to describe the image for visually impaired users and for SEO.
- **Image Format:** Use `.webp` for photos/illustrations and `.svg` for icons/logos for best performance.

### Editing Common Data

- For shared assets (like brand logos or button icons), edit the files in `src/data/common/`.

---

## 5. Special Pages & Features

### Custom 404 (Not Found) Page

- The file `src/app/not-found.jsx` defines the custom error page shown when a user visits a non-existent route.
- The text and button can be edited in `src/data/english/notfounddata.js` and the equivalent Spanish file.

### Language Switching

- The language dropdown (top right) and popup (on first visit, geo-based) allow users to switch between English and Spanish.
- All content updates instantly when the language is changed.

---

## 6. How to Add a New Section

1. Create a new data file in both `src/data/english/` and `src/data/spanish/` (e.g. `newsectiondata.js`).
2. Add the new section to the relevant page in `src/app/` (e.g. import and render a new component).
3. Update the `getData.js` utility if you want to use the new data via the language system.
4. Add/edit the corresponding component in `src/components/` if needed.

## 7. How to Add a New Language

1. Duplicate one of the language folders in `src/data/` (e.g. copy `english` to `french`).
2. Translate all content in the new folder.
3. Update the language context and dropdown to include the new language.
4. Update `getData.js` to support the new language.

---

## 8. Previewing & Deploying Changes

- **Preview Locally:**
  - Run `npm run dev` in your terminal.
  - Open [http://localhost:3000](http://localhost:3000) in your browser to see your changes live.
  
- **Deployment:**
  - The site is typically deployed via Vercel or a similar platform. Ask a developer if you need to publish changes to the live site.

---

**Summary:**  
All content and images are managed in simple JS files in `src/data/`. You only edit the text or image paths in those files. No coding knowledge is needed. The site will update automatically with your changes.

If you need to add a new section or language, or have questions, ask a developer to help with the structure, but for text and images, you can do it yourself!

---

For further questions or to request new features, please contact the development team.
