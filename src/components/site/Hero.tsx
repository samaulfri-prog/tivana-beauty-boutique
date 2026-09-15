import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-tivana grid lg:grid-cols-2 gap-10 lg:gap-16  lg:pt-4 pb-16 lg:pb-24 items-center">
        <div className="relative z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Sparkles className="h-3 w-3" /> Nouveau · Édit Automne 2026
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
            La beauté,<br />
            <span className="italic font-serif text-primary">réinventée</span> en
            <br /> prune profond.
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground leading-relaxed">
            Des formules de qualité clinique, un écrin couture et des teintes qui durent.
            Découvrez les pièces que chaque rituel mérite.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground uppercase tracking-widest hover:bg-primary/90 transition"
            >
              Découvrir l'Édit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium uppercase tracking-widest hover:border-foreground transition"
            >
              Explorer les Soins
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "1,2M", v: "Clientes conquises" },
              { k: "12 ans", v: "De recherche" },
              { k: "48+", v: "Pays" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-2xl text-primary">{s.k}</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] max-w-[560px] mx-auto rounded-[2rem] overflow-hidden bg-secondary">
            <img
              src={hero}
              alt="Collection Velvet Reign de Tivana"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">Collection 01</p>
                <p className="font-display text-2xl">Velvet Reign</p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">350 MAD</span>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hidden md:block absolute -left-6 top-16 rounded-2xl bg-background/90 backdrop-blur border border-border p-4 shadow-xl animate-floaty">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent grid place-items-center text-accent-foreground font-semibold">4,9</div>
              <div>
                <p className="text-xs font-medium">Meilleure formule</p>
                <p className="text-[10px] text-muted-foreground">Vogue Beauté · 2025</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -right-4 bottom-10 rounded-2xl bg-background/90 backdrop-blur border border-border p-4 shadow-xl animate-floaty" style={{ animationDelay: "1.5s" }}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tendance</p>
            <p className="mt-1 font-display text-sm">Sérum Rose Glow · 750 MAD</p>
          </div>
        </div>
      </div>

      {/* Trust marquee */}
      <div className="border-y border-border bg-secondary/40 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center gap-16 px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary/70">
              {["Vogue", "Elle", "Harper's Bazaar", "Marie Claire", "Allure", "L'Officiel", "Cosmopolitan", "Grazia"].map((b) => (
                <span key={b + r} className="font-display text-lg text-primary/60">{b}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
