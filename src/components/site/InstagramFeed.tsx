import { Instagram } from "lucide-react";
import lipstick from "@/assets/product-lipstick.jpg";
import serum from "@/assets/product-serum.jpg";
import palette from "@/assets/product-palette.jpg";
import foundation from "@/assets/product-foundation.jpg";
import brushes from "@/assets/product-brushes.jpg";
import blush from "@/assets/product-blush.jpg";

const feed = [lipstick, serum, palette, foundation, brushes, blush];

export function InstagramFeed() {
  return (
    <section className="container-tivana py-20">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">@tivanabeaute</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
          Suivez la <span className="italic font-serif text-primary">maison</span>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">Taguez #TivanaMoment pour être mise à l'honneur.</p>
      </div>
      <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-3">
        {feed.map((src, i) => (
          <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl bg-muted">
            <img src={src} alt="Instagram" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/60 opacity-0 grid place-items-center transition-opacity group-hover:opacity-100">
              <Instagram className="h-6 w-6 text-primary-foreground" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
