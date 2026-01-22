
# Savoria - Premium Culinary Portfolio Template

**Savoria** is a high-end, warm minimalist portfolio template specifically crafted for the culinary industry. Whether you are a culinary consultant, a Michelin-star chef, or a cafe interior designer, Savoria provides an elegant digital presence that mirrors the sophistication of your craft.

## 🚀 Tech Stack
- **Framework:** Vite + React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Custom SVG / Emoji

## 📦 Dependencies
- `react`, `react-dom`
- `framer-motion`
- `lucide-react` (optional for extra icons)
- `tailwindcss`, `autoprefixer`, `postcss`

## 🛠️ Installation
```bash
# Install dependencies
npm install
```

## 🏃 Running the Project
```bash
# Run development server
npm run dev

# Build for production
npm run build
```

## 📂 Folder Structure
```text
src/
 ├─ components/     # UI Sections (Hero, About, etc.)
 ├─ pages/          # Main page entry points
 ├─ data/           # Centralized dummy.ts for content
 ├─ App.tsx         # App layout
 └─ main.tsx        # React mounting
```

## 🎨 Customization
### Changing Content
All text and images are located in `src/data/dummy.ts`. Simply edit the `culinaryData` object to update the site.

### Customizing Theme
Colors and fonts are configured in `index.html` within the `tailwind.config` script. You can adjust the `warm` color palette to match your brand.

### Adjusting Animations
Animations use Framer Motion. You can find the variants in each component. Most use a `y: 30` to `y: 0` slide-up effect for that "soft reveal" feel requested in the design rules.

## 📝 Notes
- **Static Only:** No backend or external API integration required.
- **Marketplace Ready:** Clean code, responsive design, and easy to package for sale.
