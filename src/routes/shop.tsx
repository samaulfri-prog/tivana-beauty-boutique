import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories } from "@/lib/products";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Boutique — Tivana Beauté" },
      { name: "description", content: "Parcourez l'édit Tivana : maquillage, soins, rouges à lèvres, palettes et pinceaux." },
      { property: "og:title", content: "Boutique — Tivana" },
      { property: "og:description", content: "L'ensemble du catalogue Tivana de maquillage et soins premium." },
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
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">L'Atelier</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl tracking-tight">Toute la boutique</h1>
        <p className="mt-3 text-muted-foreground max-w-lg">Chaque pièce de la maison Tivana, réunie ici.</p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-border">
        {[{ name: "Tout", slug: "all" }, ...categories].map((c) => (
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
