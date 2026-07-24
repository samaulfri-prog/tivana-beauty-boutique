import lipstick from "@/assets/product-lipstick.jpg";
import serum from "@/assets/product-serum.jpg";
import palette from "@/assets/product-palette.jpg";
import foundation from "@/assets/product-foundation.jpg";
import brushes from "@/assets/product-brushes.jpg";
import blush from "@/assets/product-blush.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  shades?: { name: string; hex: string }[];
  badge?: "new" | "bestseller" | "limited";
  description: string;
};

export const products: Product[] = [
  {
    id: "velvet-plum-lipstick",
    name: "Velvet Reign Lipstick",
    tagline: "Satin-matte, 12h wear",
    price: 32,
    compareAt: 42,
    rating: 4.9,
    reviews: 1284,
    image: lipstick,
    category: "Lipsticks",
    badge: "bestseller",
    shades: [
      { name: "Plum Noir", hex: "#5a1f4f" },
      { name: "Rose Ember", hex: "#a24a5a" },
      { name: "Nude Silk", hex: "#c68a7a" },
      { name: "Ruby Cast", hex: "#8a1a2b" },
    ],
    description:
      "A weightless satin-matte formula infused with hydrating peptides. Delivers full-coverage color that wears like silk for up to 12 hours.",
  },
  {
    id: "rose-glow-serum",
    name: "Rose Glow Radiance Serum",
    tagline: "Vitamin C · Hyaluronic",
    price: 68,
    rating: 4.8,
    reviews: 942,
    image: serum,
    category: "Skincare",
    badge: "new",
    description:
      "A featherlight serum with 12% vitamin C and Bulgarian rose oil to visibly brighten, plump, and even skin tone in 14 days.",
  },
  {
    id: "obsidian-eyes-palette",
    name: "Obsidian Eyes Palette",
    tagline: "9 luxe shades",
    price: 58,
    compareAt: 72,
    rating: 4.9,
    reviews: 613,
    image: palette,
    category: "Eyes",
    badge: "limited",
    description:
      "Nine ultra-pigmented shades — from soft champagne to deep plum — in a mirrored gold compact. Buttery, blendable, and long-wearing.",
  },
  {
    id: "silk-veil-foundation",
    name: "Silk Veil Foundation",
    tagline: "Skin-true 24h finish",
    price: 54,
    rating: 4.7,
    reviews: 2103,
    image: foundation,
    category: "Face",
    description:
      "A second-skin foundation with buildable medium coverage and a natural luminous finish. 40 inclusive shades, dermatologist tested.",
  },
  {
    id: "atelier-brush-set",
    name: "Atelier Brush Set",
    tagline: "5-piece rose gold set",
    price: 96,
    compareAt: 128,
    rating: 5.0,
    reviews: 388,
    image: brushes,
    category: "Brushes",
    badge: "bestseller",
    description:
      "Handcrafted vegan bristles set in polished rose-gold handles. Precision tools for face, eyes, and finishing touches.",
  },
  {
    id: "petal-cheek-blush",
    name: "Petal Cheek Cream Blush",
    tagline: "Dewy weightless flush",
    price: 36,
    rating: 4.8,
    reviews: 771,
    image: blush,
    category: "Face",
    badge: "new",
    description:
      "A silk-cream blush that melts into skin for a fresh, lit-from-within flush. Six petal-inspired shades.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const categories = [
  { name: "Makeup", slug: "makeup", image: lipstick },
  { name: "Skincare", slug: "skincare", image: serum },
  { name: "Lipsticks", slug: "lipsticks", image: lipstick },
  { name: "Eyes", slug: "eyes", image: palette },
  { name: "Face", slug: "face", image: foundation },
  { name: "Brushes", slug: "brushes", image: brushes },
  { name: "Accessories", slug: "accessories", image: blush },
  { name: "New Arrivals", slug: "new", image: serum },
];
