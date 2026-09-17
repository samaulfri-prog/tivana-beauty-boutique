import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";
import tivanaLogo from "@/assets/tivana-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-tivana py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={tivanaLogo} alt="Tivana — Le luxe pour chaque femme" className="h-20 w-auto object-contain" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Une maison de beauté parisienne indépendante qui crée des soins de qualité clinique
            et un maquillage inspiré de la couture. Fait avec intention. Porté avec confiance.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: MessageCircle, label: "Contactez-nous sur WhatsApp", href: "https://wa.me/212708082079" },
              { Icon: Music2, label: "Suivez-nous sur TikTok", href: "https://www.tiktok.com/@www.tivana.ma?_r=1&_t=ZS-99l8kr3V5iz" },
              { Icon: Facebook, label: "Suivez-nous sur Facebook", href: "https://www.facebook.com/share/19YHZE4Th5/?mibextid=wwXIfr" },
              { Icon: Instagram, label: "Suivez-nous sur Instagram", href: "https://www.instagram.com/tivana.ma?stkn=MTQ1eW5keXAybTFvdg==" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

        </div>

        {[
          { title: "Boutique", links: ["Nouveautés", "Bestsellers", "Maquillage", "Soins", "Coffrets cadeaux"] },
          { title: "Aide", links: ["Contact", "Livraison", "Retours", "FAQ", "Suivre ma commande"] },
          { title: "Maison Tivana", links: ["Notre histoire", "Développement durable", "Journal", "Carrières", "Presse"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-xs uppercase tracking-[0.25em] text-primary/70">{col.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}><Link to="/" className="gold-underline text-foreground/80 hover:text-foreground">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-tivana flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Tivana Beauté. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="gold-underline">Confidentialité</a>
            <a href="#" className="gold-underline">Conditions</a>
            <a href="#" className="gold-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
