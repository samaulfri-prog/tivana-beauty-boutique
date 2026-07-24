import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amélie R.",
    city: "Paris",
    quote:
      "Le rouge Velvet Reign est le plus flatteur que j'aie porté. Il paraît couture et se pose comme un souffle sur les lèvres.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    city: "Milan",
    quote:
      "Mon teint a changé en 3 semaines avec le sérum Rose Glow. Tivana est discrètement la maison de beauté la plus excitante du moment.",
    rating: 5,
  },
  {
    name: "Layla K.",
    city: "Dubaï",
    quote:
      "Chaque détail — le poids doré du packaging, la palette de teintes, le service — respire le luxe sans jamais être ostentatoire.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section className="container-tivana py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Elles en parlent</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Adorée par <span className="italic font-serif text-primary">1,2M</span> de femmes dans le monde.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Une moyenne de 4,9 étoiles sur 84 000 avis vérifiés. Voilà pourquoi elles reviennent.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((i + 1) % reviews.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              aria-label="Suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative rounded-3xl bg-secondary p-8 md:p-12 min-h-[320px]">
          <Quote className="h-10 w-10 text-primary/40" />
          <p className="mt-6 font-display text-2xl md:text-3xl leading-snug text-primary text-balance">
            «&nbsp;{r.quote}&nbsp;»
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-medium">{r.name}</p>
              <p className="text-xs text-primary/70">{r.city}</p>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: r.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
