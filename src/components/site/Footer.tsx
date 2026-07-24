import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-tivana py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="font-display text-3xl font-semibold text-primary">Tivana</span>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            An independent Parisian beauty house crafting clinical-grade skincare and couture-inspired
            makeup. Made with intention. Worn with confidence.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Shop", links: ["New Arrivals", "Bestsellers", "Makeup", "Skincare", "Gift Sets"] },
          { title: "Support", links: ["Contact", "Shipping", "Returns", "FAQ", "Track Order"] },
          { title: "House of Tivana", links: ["Our Story", "Sustainability", "Journal", "Careers", "Press"] },
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
          <p>© {new Date().getFullYear()} Tivana Beauté. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="gold-underline">Privacy</a>
            <a href="#" className="gold-underline">Terms</a>
            <a href="#" className="gold-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
