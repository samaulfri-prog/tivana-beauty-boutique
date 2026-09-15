import shampoing from "@/assets/shampoing.jpg";
import masque from "@/assets/masque.jpg";
import serum from "@/assets/chute.jpg";
import elixir from "@/assets/elixir.jpg";
import elixir2 from "@/assets/elixir.jpg";
import boost from "@/assets/boost.jpg";
import gamme from "@/assets/gammecheveux.jpg";
import gamme2 from "@/assets/gammecheveux.jpg";
import gammeVisage from "@/assets/gammevisage.jpg";
import gelNettoyant from "@/assets/nettyant.jpg";
import ecranSolaire from "@/assets/solaire.jpg";
import hydraLight from "@/assets/light.jpg";
import gelIntima from "@/assets/intime.jpg";
import catCheveux from "@/assets/categories/cheveux.jpg";
import catVisage from "@/assets/categories/visage.jpg";
import catIntime from "@/assets/categories/intime.jpg";
import catComplements from "@/assets/categories/complements.jpg";
import catCoffrets from "@/assets/categories/coffrets.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery?: string[];
  /** Images utilisées par la visionneuse 360° (rotation par glissement) */
  frames360?: string[];
  category: string;
  shades?: { name: string; hex: string }[];
  badge?: "new" | "bestseller" | "limited";
  description: string;
};

export const products: Product[] = [
  {
    id: "shampoing-soin",
    name: "Shampoing Soin",
    tagline: "Hydratant & fortifiant · Kératine",
    price: 180,
    compareAt: 230,
    rating: 4.9,
    reviews: 842,
    image: shampoing,
    gallery: [shampoing],
    frames360: [shampoing],
    category: "Cheveux",
    badge: "bestseller",
    description:
      "Shampoing doux sans sulfates, enrichi en protéines de kératine et extraits naturels. Nettoie en douceur, hydrate intensément et révèle une chevelure plus saine, souple et brillante.",
  },
  {
    id: "masque-hydratant",
    name: "Masque Hydratant",
    tagline: "Aloe Vera & beurre de karité",
    price: 220,
    rating: 4.9,
    reviews: 613,
    image: masque,
    gallery: [masque],
    frames360: [masque],
    category: "Cheveux",
    badge: "new",
    description:
      "Un masque riche à l'Aloe Vera et au beurre de karité qui hydrate, nourrit et apaise. Formule naturelle pour tous types de cheveux — hydratation intense en 10 minutes.",
  },
  {
    id: "serum-anti-chute",
    name: "Sérum Anti-Chute",
    tagline: "Renforce & revitalise à la racine",
    price: 320,
    compareAt: 390,
    rating: 4.8,
    reviews: 1284,
    image: serum,
    gallery: [serum, gamme2],
    frames360: [serum, gamme2, gamme],
    category: "Cheveux",
    badge: "bestseller",
    description:
      "Formulé avec des actifs naturels soigneusement sélectionnés pour renforcer la fibre capillaire, stimuler la croissance et réduire visiblement la chute des cheveux. Résultat : des cheveux plus forts, plus épais et visiblement revitalisés.",
  },
  {
    id: "elixir-capillaire",
    name: "Élixir Capillaire",
    tagline: "Huile précieuse · 100% végétale",
    price: 280,
    rating: 4.9,
    reviews: 502,
    image: elixir2,
    gallery: [elixir2, elixir, gamme2],
    frames360: [elixir2, elixir, gamme2],
    category: "Cheveux",
    description:
      "Élixir naturel à base d'huiles d'argan, de ricin et de jojoba qui nourrit intensément, répare et fortifie la fibre capillaire. Apporte brillance, souplesse et protège des agressions extérieures.",
  },
  {
    id: "gel-nettoyant-visage",
    name: "Gel Nettoyant Visage",
    tagline: "Aloe Vera, Niacinamide & thé vert · 200 ml",
    price: 190,
    rating: 4.8,
    reviews: 174,
    image: gelNettoyant,
    gallery: [gelNettoyant, gammeVisage],
    frames360: [gelNettoyant, gammeVisage],
    category: "Visage",
    badge: "new",
    description:
      "Nettoyant purifiant à l'Aloe Vera, à la Niacinamide et à l'extrait de thé vert. Élimine impuretés et excès de sébum sans dessécher, pour une peau nette, apaisée et éclatante. Peaux mixtes à grasses.",
  },
  {
    id: "ecran-solaire",
    name: "Écran Solaire SPF 50+",
    tagline: "Haute protection UVA/UVB · 50 ml",
    price: 250,
    rating: 4.9,
    reviews: 231,
    image: ecranSolaire,
    gallery: [ecranSolaire, gammeVisage],
    frames360: [ecranSolaire, gammeVisage],
    category: "Visage",
    badge: "new",
    description:
      "Protection solaire haute SPF 50+, résistante à l'eau et à la transpiration. Enrichie en Vitamine E, Niacinamide et Acide Hyaluronique : protège, prévient les taches et hydrate au quotidien.",
  },
  {
    id: "hydra-light",
    name: "Hydra Light",
    tagline: "Crème hydratante éclaircissante · 50 ml",
    price: 260,
    rating: 4.8,
    reviews: 198,
    image: hydraLight,
    gallery: [hydraLight, gammeVisage],
    frames360: [hydraLight, gammeVisage],
    category: "Visage",
    badge: "new",
    description:
      "Crème sans alcool à l'Acide Hyaluronique, Aloe Vera, Vitamine E et huile d'argan. Hydratation longue durée, éclat naturel et confort au quotidien.",
  },
  {
    id: "gel-intima-pure",
    name: "Gel Intima Pure",
    tagline: "Aloe Vera, camomille & acide lactique · 125 ml",
    price: 190,
    rating: 4.8,
    reviews: 142,
    image: gelIntima,
    gallery: [gelIntima],
    frames360: [gelIntima],
    category: "Intime",
    badge: "new",
    description:
      "Soin lavant intime 100% naturel à l'Aloe Vera, camomille et acide lactique. Respecte l'équilibre naturel, hydrate intensément et apporte fraîcheur et confort au quotidien.",
  },
  {
    id: "boost-intime",
    name: "Boost Intime",
    tagline: "Maca, Fenugrec, L-Arginine & Zinc · 30 gélules",
    price: 350,
    rating: 4.7,
    reviews: 388,
    image: boost,
    gallery: [boost],
    frames360: [boost],
    category: "Compléments",
    badge: "bestseller",
    description:
      "Complément alimentaire à base de Maca, Fenugrec, L-Arginine et Zinc. Soutient l'équilibre hormonal, la vitalité et le bien-être intime au quotidien. 30 gélules, 100% naturel.",
  },
  {
    id: "gamme-cheveux",
    name: "Coffret Gamme Cheveux",
    tagline: "Rituel capillaire complet",
    price: 850,
    compareAt: 1100,
    rating: 5.0,
    reviews: 216,
    image: gamme2,
    gallery: [gamme2, gamme],
    frames360: [gamme2, gamme, shampoing, elixir2],
    category: "Coffrets",
    badge: "limited",
    description:
      "Le rituel Tivana au complet : Shampoing Soin, Masque Hydratant, Sérum Anti-Chute et Élixir Capillaire. Naturel, efficace, luxueux — pour des cheveux sublimés.",
  },
  {
    id: "gamme-visage",
    name: "Coffret Gamme Visage",
    tagline: "Routine visage complète · 4 soins",
    price: 780,
    compareAt: 950,
    rating: 4.9,
    reviews: 87,
    image: gammeVisage,
    gallery: [gammeVisage, gelNettoyant, ecranSolaire, hydraLight],
    frames360: [gammeVisage, gelNettoyant, ecranSolaire, hydraLight],
    category: "Coffrets",
    badge: "new",
    description:
      "La routine visage Tivana : Gel Nettoyant Visage, Écran Solaire SPF 50+ et crème Hydra Light. Nettoyer, protéger, hydrater — pour une peau nette, éclatante et protégée chaque jour.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const categories = [
  { name: "Cheveux", slug: "cheveux", image: catCheveux },
  { name: "Visage", slug: "visage", image: catVisage },
  { name: "Intime", slug: "intime", image: catIntime },
  { name: "Compléments", slug: "complements", image: catComplements },
  { name: "Coffrets", slug: "coffrets", image: catCoffrets },
];
