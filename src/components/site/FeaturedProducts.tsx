import { ProductCard } from "./ProductCard";
import { products } from "@/lib/products";
import { Link } from "@tanstack/react-router";

export function FeaturedProducts({ title, eyebrow, list }: { title: string; eyebrow: string; list?: typeof products }) {
  const items = list ?? products;
  return (
    <section className="container-tivana py-20 lg:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">{title}</h2>
        </div>
        <Link to="/shop" className="gold-underline text-sm font-medium">Tout voir →</Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {items.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
