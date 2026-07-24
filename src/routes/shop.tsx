import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/products";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — Tivana Beauty" },
      { name: "description", content: "Browse the full Tivana edit: makeup, skincare, lipsticks, palettes and brushes." },
      { property: "og:title", content: "Shop All — Tivana" },
      { property: "og:description", content: "The full Tivana catalog of premium makeup and skincare." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? products : products.filter((p) => p.category.toLowerCase() === filter);
  return (
    <div className="container-tivana py-12 lg:py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">The Atelier</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl tracking-tight">Shop all</h1>
        <p className="mt-3 text-muted-foreground max-w-lg">Every piece from the Tivana house, in one place.</p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-border">
        {[{ name: "All", slug: "all" }, ...categories].map((c) => (
          <button
            key={c.slug}
            onClick={() => setFilter(c.slug === "all" ? "all" : c.name.toLowerCase())}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2 text-sm transition",
              (filter === "all" && c.slug === "all") || filter === c.name.toLowerCase()
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-primary"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
