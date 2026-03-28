# Project Structure

## Directory Organization

```
portfolio/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout with MatrixBackground
│   ├── page.tsx             # Home page (to be created)
│   ├── projects/            # Projects page
│   ├── experience/          # Experience/CV page
│   ├── skills/              # Skills page
│   ├── about/               # About page
│   └── contact/             # Contact page
│
├── components/              # Reusable React Components
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer component
│   │   └── Sidebar.tsx      # Mobile sidebar (optional)
│   │
│   ├── common/              # Reusable UI components
│   │   ├── Button.tsx       # Matrix-styled buttons
│   │   ├── Card.tsx         # Reusable card component
│   │   └── ...
│   │
│   └── effects/             # Visual effects
│       └── MatrixBackground.tsx  # Matrix rain animation
│
├── data/                    # Static data files
│   └── portfolio.ts         # Portfolio content (TO FILL)
│
├── lib/                     # Utility functions
│   └── constants.ts         # Configuration constants
│
├── styles/                  # Global CSS files
│   └── globals.css          # Matrix theme CSS
│
├── types/                   # TypeScript type definitions
│   └── index.ts             # Portfolio data types
│
├── public/                  # Static assets
│   └── projects/            # Project images (to be added)
│
└── Configuration Files
    ├── tailwind.config.ts   # Tailwind CSS theme config
    ├── next.config.ts       # Next.js config
    ├── tsconfig.json        # TypeScript config
    ├── postcss.config.mjs   # PostCSS config
    └── package.json         # Dependencies
```

## Component Organization Strategy

All components follow **DRY (Don't Repeat Yourself)** principles:

- **Reusable components** in `components/` can be imported and used across multiple pages
- **Layout components** in `components/layout/` for structural elements (Header, Footer, etc.)
- **Common UI components** in `components/common/` for buttons, cards, badges, etc.
- **Effect components** in `components/effects/` for visual effects (Matrix rain, etc.)

## Data Structure

All portfolio data is centralized in `data/portfolio.ts` following the `PortfolioData` type defined in `types/index.ts`.

This allows easy updates and keeps data separate from presentation logic.

## Styling

- **Global styles** in `styles/globals.css` - Matrix theme colors and animations
- **Tailwind CSS** - Utility-first CSS framework with custom theme extensions
- **CSS Custom Properties** - CSS variables for easy theming

## Color System

The matrix theme uses CSS custom properties:
- `--matrix-green`: Main green color (#00ff00)
- `--matrix-black`: Main black background (#000000)
- `--glow-color`: Glow effect color
- `--accent`: Magenta accent color (#ff00ff)

## Ready for Phase 2!

Phase 1 is complete. Next steps:
- Create Header component
- Create Footer component
- Create Navigation component
- Set up page routing structure
