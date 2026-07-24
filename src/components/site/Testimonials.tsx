import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amélie R.",
    city: "Paris",
    quote:
      "The Velvet Reign lipstick is the most flattering plum I've owned. It looks couture and feels like nothing on the lips.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    city: "Milan",
    quote:
      "My complexion changed in 3 weeks with the Rose Glow serum. Tivana is quietly the most exciting beauty house right now.",
    rating: 5,
  },
  {
    name: "Layla K.",
    city: "Dubai",
    quote:
      "Every detail — the gold weight of the packaging, the shade range, the service — screams luxury without being loud.",
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
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">In their words</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Loved by <span className="italic font-serif text-primary">1.2M</span> women worldwide.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            An average of 4.9 stars across 84,000 verified reviews. This is why they keep coming back.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((i + 1) % reviews.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative rounded-3xl bg-secondary p-8 md:p-12 min-h-[320px]">
          <Quote className="h-10 w-10 text-primary/40" />
          <p className="mt-6 font-display text-2xl md:text-3xl leading-snug text-primary text-balance">
            "{r.quote}"
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
