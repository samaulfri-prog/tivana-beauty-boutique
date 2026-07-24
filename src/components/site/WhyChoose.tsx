import { ShieldCheck, Truck, Lock, Sparkles, BadgeCheck } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Premium Quality", desc: "Formulated in Paris with clinical-grade actives." },
  { icon: ShieldCheck, title: "Dermatologically Tested", desc: "Safety-checked, non-comedogenic, cruelty-free." },
  { icon: Truck, title: "Fast Delivery", desc: "Complimentary express shipping over $60." },
  { icon: Lock, title: "Secure Payment", desc: "256-bit SSL. Apple Pay, Klarna & more." },
  { icon: BadgeCheck, title: "100% Original", desc: "Sold directly from the Tivana atelier." },
];

export function WhyChoose() {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="container-tivana py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">The Tivana promise</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Why choose <span className="italic font-serif text-primary">Tivana</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group rounded-2xl bg-background border border-border p-6 hover:border-primary/40 hover:shadow-lg transition"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <it.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 font-display text-lg">{it.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
