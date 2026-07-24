import { Link } from "@tanstack/react-router";
import banner from "@/assets/collection-banner.jpg";

export function CollectionBanner() {
  return (
    <section className="container-tivana py-16">
      <div className="relative overflow-hidden rounded-3xl">
        <img src={banner} alt="Nouvelle collection" className="h-[420px] md:h-[520px] w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-tivana">
            <div className="max-w-xl text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Automne / Hiver 26</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight text-balance">
                La collection <span className="italic font-serif">Nouvelle</span>
              </h2>
              <p className="mt-4 max-w-md text-sm md:text-base opacity-90 leading-relaxed">
                Douze pièces en édition limitée imaginées avec la couturière Marine Serre.
                Disponibles exclusivement chez Tivana.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground uppercase tracking-widest hover:bg-accent/90"
              >
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
