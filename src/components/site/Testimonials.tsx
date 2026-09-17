import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "سلمى ب.",
    city: "الدار البيضاء",
    quote:
      "جربت الشامبوان والسيروم ديال تساقط الشعر، ومن بعد أسابيع قليلة بان ليا الفرق. شعري ولا خفيف وكيبان صحي أكثر.",
    rating: 5,
  },
  {
    name: "مريم أ.",
    city: "الرباط",
    quote:
      "Hydra Light خفيفة بزاف على البشرة وكتخليها مرطبة بلا ما تدهن. ولات جزء أساسي من الروتين ديالي كل صباح.",
    rating: 5,
  },
  {
    name: "هند ل.",
    city: "مراكش",
    quote:
      "من أول استعمال حسّيت بالجودة، التغليف زوين والمنتوجات كيوصلو بعناية. تجربة Tivana عجباتني بزاف.",
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
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">كلام زبوناتنا</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            تجارب حقيقية مع <span className="italic font-serif text-primary">Tivana</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            زبوناتنا كيشاركو معاكم تجربتهم مع منتجات العناية ديال Tivana.
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
          <p dir="rtl" lang="ar-MA" className="mt-6 font-display text-2xl md:text-3xl leading-snug text-primary text-balance text-right">
            «&nbsp;{r.quote}&nbsp;»
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div dir="rtl" lang="ar-MA" className="text-right">
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
