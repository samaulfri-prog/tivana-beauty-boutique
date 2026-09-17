import { ShieldCheck, Truck, Lock, Sparkles, BadgeCheck } from "lucide-react";
import isoCert from "@/assets/iso-certification.png.asset.json";
import onssaCert from "@/assets/onssa-certification.png.asset.json";

const items = [
  { icon: Sparkles, title: "Qualité Premium", desc: "Formulé à Paris avec des actifs de qualité clinique." },
  { icon: ShieldCheck, title: "Testé Dermatologiquement", desc: "Contrôlé, non-comédogène, sans cruauté." },
  { icon: Truck, title: "Livraison Rapide", desc: "Livraison express offerte dès 200 MAD." },
  { icon: Lock, title: "Paiement Sécurisé", desc: "SSL 256-bit. Apple Pay, Klarna et plus." },
  { icon: BadgeCheck, title: "100% Authentique", desc: "Vendu directement par l'atelier Tivana." },
];

const certs = [
  { src: isoCert.url, alt: "Certification ISO — normes internationales de qualité", label: "Certifié ISO" },
  { src: onssaCert.url, alt: "Certification ONSSA — conformité sanitaire marocaine", label: "Agréé ONSSA" },
];

export function WhyChoose() {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="container-tivana py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">La promesse Tivana</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Pourquoi choisir <span className="italic font-serif text-primary">Tivana</span>
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

        <div className="mt-16 lg:mt-20">
          <div className="relative rounded-3xl bg-background border border-border px-6 py-10 md:px-12 md:py-12 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-center md:text-left max-w-md">
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Nos certifications</p>
                <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight">
                  Garanties qualité & <span className="italic font-serif text-primary">conformité</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Tivana s'engage à respecter les normes internationales et les exigences sanitaires marocaines pour une sécurité optimale.
                </p>
              </div>
              <div className="flex items-center gap-8 md:gap-12">
                {certs.map((cert) => (
                  <div
                    key={cert.label}
                    className="group flex flex-col items-center gap-3"
                  >
                    <div className="relative h-20 w-32 md:h-24 md:w-40 rounded-2xl bg-white border border-border p-3 grid place-items-center hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition">
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="max-h-full max-w-full object-contain transition duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground tracking-wide">{cert.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
