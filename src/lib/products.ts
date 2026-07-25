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
    name: "Rouge à lèvres Velvet Reign",
    tagline: "Satin-mat, tenue 12h",
    price: 350,
    compareAt: 460,
    rating: 4.9,
    reviews: 1284,
    image: lipstick,
    category: "Rouges à lèvres",
    badge: "bestseller",
    shades: [
      { name: "Prune Noir", hex: "#5a1f4f" },
      { name: "Rose Braise", hex: "#a24a5a" },
      { name: "Nude Soie", hex: "#c68a7a" },
      { name: "Rubis", hex: "#8a1a2b" },
    ],
    description:
      "Une formule satin-mat en apesanteur, enrichie en peptides hydratants. Une couleur pleine couverture qui se porte comme la soie jusqu'à 12 heures.",
  },
  {
    id: "rose-glow-serum",
    name: "Sérum Rose Glow Radiance",
    tagline: "Vitamine C · Acide hyaluronique",
    price: 750,
    rating: 4.8,
    reviews: 942,
    image: serum,
    category: "Soins",
    badge: "new",
    description:
      "Un sérum ultra-léger à la vitamine C 12% et à l'huile de rose de Bulgarie pour éclaircir, repulper et unifier le teint en 14 jours.",
  },
  {
    id: "obsidian-eyes-palette",
    name: "Palette Yeux Obsidian",
    tagline: "9 teintes luxueuses",
    price: 640,
    compareAt: 790,
    rating: 4.9,
    reviews: 613,
    image: palette,
    category: "Yeux",
    badge: "limited",
    description:
      "Neuf teintes ultra-pigmentées — du champagne délicat au prune profond — dans un écrin doré miroir. Onctueuses, fondues et longue tenue.",
  },
  {
    id: "silk-veil-foundation",
    name: "Fond de teint Silk Veil",
    tagline: "Fini seconde peau 24h",
    price: 590,
    rating: 4.7,
    reviews: 2103,
    image: foundation,
    category: "Visage",
    description:
      "Un fond de teint seconde peau à couvrance modulable et fini lumineux naturel. 40 teintes inclusives, testé dermatologiquement.",
  },
  {
    id: "atelier-brush-set",
    name: "Set de pinceaux Atelier",
    tagline: "5 pièces en or rose",
    price: 96,
    compareAt: 128,
    rating: 5.0,
    reviews: 388,
    image: brushes,
    category: "Pinceaux",
    badge: "bestseller",
    description:
      "Poils végans travaillés à la main, montés sur des manches en or rose poli. Des outils de précision pour le visage, les yeux et les finitions.",
  },
  {
    id: "petal-cheek-blush",
    name: "Blush crème Petal Cheek",
    tagline: "Éclat frais en apesanteur",
    price: 36,
    rating: 4.8,
    reviews: 771,
    image: blush,
    category: "Visage",
    badge: "new",
    description:
      "Un blush crème soyeux qui fond dans la peau pour un éclat frais illuminé de l'intérieur. Six teintes inspirées des pétales.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const categories = [
  { name: "Maquillage", slug: "makeup", image: lipstick },
  { name: "Soins", slug: "skincare", image: serum },
  { name: "Rouges à lèvres", slug: "lipsticks", image: lipstick },
  { name: "Yeux", slug: "eyes", image: palette },
  { name: "Visage", slug: "face", image: foundation },
  { name: "Pinceaux", slug: "brushes", image: brushes },
  { name: "Accessoires", slug: "accessories", image: blush },
  { name: "Nouveautés", slug: "new", image: serum },
];
