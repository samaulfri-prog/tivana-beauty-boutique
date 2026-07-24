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
      { title: "Tivana — Premium Beauty & Skincare from Paris" },
      { name: "description", content: "Discover Tivana: couture-inspired makeup, clinical skincare, and shades that stay. Complimentary shipping on orders over $60." },
      { property: "og:title", content: "Tivana — Premium Beauty & Skincare" },
      { property: "og:description", content: "Couture-inspired makeup and clinical skincare from the Parisian atelier of Tivana." },
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
      <FeaturedProducts eyebrow="Featured this week" title="The essentials edit" />
      <CollectionBanner />
      <FeaturedProducts eyebrow="Bestsellers" title="Loved by millions" list={bestsellers} />
      <WhyChoose />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </div>
  );
}
