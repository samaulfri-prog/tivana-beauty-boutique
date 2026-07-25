import shampoing from "@/assets/shampoing-soin.jpeg.asset.json";
import shampoingBottle from "@/assets/shampoing-bottle.jpeg.asset.json";
import masque from "@/assets/masque-hydratant.jpeg.asset.json";
import masqueTrio from "@/assets/masque-hydratant-trio.jpeg.asset.json";
import serum from "@/assets/serum-anti-chute.jpeg.asset.json";
import elixir from "@/assets/elixir-capillaire.jpeg.asset.json";
import boost from "@/assets/boost-intime.jpeg.asset.json";
import gamme from "@/assets/gamme-cheveux.jpeg.asset.json";

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
    image: shampoing.url,
    gallery: [shampoing.url, shampoingBottle.url],
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
    image: masque.url,
    gallery: [masque.url, masqueTrio.url],
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
    image: serum.url,
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
    image: elixir.url,
    category: "Cheveux",
    description:
      "Élixir naturel à base d'huiles végétales précieuses qui nourrit intensément, répare et fortifie la fibre capillaire. Apporte brillance, souplesse et protège des agressions extérieures.",
  },
  {
    id: "boost-intime",
    name: "Boost Intime",
    tagline: "Fenugrec, Maca & Gatilier · 30 gélules",
    price: 350,
    rating: 4.7,
    reviews: 388,
    image: boost.url,
    category: "Compléments",
    badge: "new",
    description:
      "Complément alimentaire à base de Fenugrec, Maca et Gatilier. Soutient l'équilibre hormonal, le tonus et le bien-être intime au quotidien.",
  },
  {
    id: "gamme-cheveux",
    name: "Coffret Gamme Cheveux",
    tagline: "Rituel capillaire complet",
    price: 850,
    compareAt: 1100,
    rating: 5.0,
    reviews: 216,
    image: gamme.url,
    category: "Coffrets",
    badge: "limited",
    description:
      "Le rituel Tivana au complet : Shampoing Soin, Masque Hydratant, Sérum Anti-Chute et Élixir Capillaire. Naturel, efficace, luxueux — pour des cheveux sublimés.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const categories = [
  { name: "Cheveux", slug: "cheveux", image: shampoing.url },
  { name: "Compléments", slug: "complements", image: boost.url },
  { name: "Coffrets", slug: "coffrets", image: gamme.url },
  { name: "Nouveautés", slug: "nouveautes", image: elixir.url },
];
