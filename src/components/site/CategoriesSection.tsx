import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/products";

export function CategoriesSection() {
  return (
    <section className="container-tivana py-20 lg:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Parcourir par catégorie</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Chaque rituel, <span className="italic font-serif text-primary">sublimé</span>.
          </h2>
        </div>
        <Link to="/shop" className="gold-underline text-sm font-medium">Voir toutes les catégories →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            to="/shop"
            className={`group relative overflow-hidden rounded-2xl bg-muted ${i === 0 ? "md:row-span-2 md:col-span-2 aspect-[4/5] md:aspect-auto" : "aspect-[4/5]"}`}
          >
            <img
              src={c.image}
              alt={c.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between text-white">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Collection</p>
                <p className="font-display text-lg md:text-2xl">{c.name}</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-primary transition group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
