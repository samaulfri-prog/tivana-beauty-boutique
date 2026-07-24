import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { CategoriesSection } from "@/components/site/CategoriesSection";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { CollectionBanner } from "@/components/site/CollectionBanner";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Newsletter } from "@/components/site/Newsletter";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tivana — Beauté & Soins Premium de Paris" },
      { name: "description", content: "Découvrez Tivana : maquillage inspiré de la couture, soins cliniques et teintes qui durent. Livraison offerte dès 60€." },
      { property: "og:title", content: "Tivana — Beauté & Soins Premium" },
      { property: "og:description", content: "Maquillage inspiré de la couture et soins cliniques nés dans l'atelier parisien Tivana." },
    ],
  }),
  component: Index,
});

function Index() {
  const bestsellers = products.filter((p) => p.badge === "bestseller" || p.rating >= 4.9);
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts eyebrow="À la une cette semaine" title="L'édit des essentiels" />
      <CollectionBanner />
      <FeaturedProducts eyebrow="Bestsellers" title="Adorés par des millions" list={bestsellers} />
      <WhyChoose />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </div>
  );
}
