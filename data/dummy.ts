
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const culinaryData = {
  hero: {
    title: "Crafting Culinary Experiences with Soul",
    subtitle: "Culinary Consultant & Food Stylist",
    description: "Bringing authentic flavors and refined aesthetics to high-end cafes and boutique restaurants across the globe.",
    cta: "View Portfolio",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop"
  },
  about: {
    badge: "Our Philosophy",
    title: "Honoring Tradition, Embracing Innovation",
    content: "With over a decade of experience in the heart of the culinary world, we believe that every dish tells a story. Our approach combines time-honored techniques with contemporary minimalist presentation to create moments that linger long after the final bite.",
    stats: [
      { label: "Years Experience", value: "12+" },
      { label: "Cafe Concepts", value: "45" },
      { label: "Awards Won", value: "08" }
    ]
  },
  services: [
    {
      id: 1,
      title: "Menu Engineering",
      description: "Developing cost-effective, high-margin menus that don't compromise on taste or creative integrity.",
      icon: "🍳"
    },
    {
      id: 2,
      title: "Interior & Ambience",
      description: "Designing sensory-driven spaces that align with your culinary brand and enhance customer dwell time.",
      icon: "🪑"
    },
    {
      id: 3,
      title: "Food Styling",
      description: "Professional visual storytelling for editorial features, social media, and marketing collateral.",
      icon: "📸"
    },
    {
      id: 4,
      title: "Staff Training",
      description: "Empowering your team with the technical skills and hospitality mindset needed for excellence.",
      icon: "✨"
    }
  ],
  portfolio: [
    {
      id: 1,
      title: "The Heritage Bakehouse",
      category: "Branding & Concept",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Nordic Morning Cafe",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Saffron & Sage",
      category: "Menu Development",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Artisanal Brew Lab",
      category: "Consultancy",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  process: [
    {
      id: 1,
      number: "01",
      title: "Discovery",
      description: "We dive deep into your brand's heritage, goals, and target demographic."
    },
    {
      id: 2,
      number: "02",
      title: "Curation",
      description: "Crafting a bespoke strategy including flavors, textures, and visual identity."
    },
    {
      id: 3,
      number: "03",
      title: "Execution",
      description: "Hands-on implementation, from kitchen trials to the grand opening night."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Julianna V.",
      role: "Owner, Velvet Roast",
      quote: "The transformation was incredible. Our revenue increased by 40% within three months of the menu redesign.",
      avatar: "https://picsum.photos/100/100?random=1"
    },
    {
      id: 2,
      name: "Marco Rossi",
      role: "Executive Chef",
      quote: "A true visionary in food aesthetics. They understood our soul and translated it perfectly to the plate.",
      avatar: "https://picsum.photos/100/100?random=2"
    }
  ],
  cta: {
    title: "Ready to elevate your culinary journey?",
    description: "Let's collaborate to create something truly exceptional. Booking now for Summer 2024.",
    buttonText: "Schedule a Consultation"
  },
  footer: {
    brand: "Savoria",
    tagline: "Minimalist Culinary Design & Consulting",
    links: ["Services", "Work", "Process", "Contact"],
    social: ["Instagram", "LinkedIn", "Pinterest"]
  }
};
