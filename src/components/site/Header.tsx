import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { categories } from "@/lib/products";
import { cn } from "@/lib/utils";
import tivanaLogo from "@/assets/tivana-logo.png";

const nav = [
  { label: "New", to: "/shop", search: { cat: "new" } },
  { label: "Makeup", to: "/shop", search: { cat: "makeup" } },
  { label: "Skincare", to: "/shop", search: { cat: "skincare" } },
  { label: "Lipsticks", to: "/shop", search: { cat: "lipsticks" } },
  { label: "Eyes", to: "/shop", search: { cat: "eyes" } },
  { label: "Brushes", to: "/shop", search: { cat: "brushes" } },
];

export function Header() {
  const { setCartOpen, cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      {/* Announcement */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-tivana flex h-8 items-center justify-center gap-6 overflow-hidden">
          <span className="tracking-[0.25em] uppercase">Complimentary shipping over $60 · 30-day returns</span>
        </div>
      </div>

      <div className="container-tivana flex h-16 md:h-20 items-center gap-6">
        <button
          className="md:hidden -ml-2 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="flex items-center shrink-0" aria-label="Tivana home">
          <img
            src={tivanaLogo}
            alt="Tivana — Luxury for every woman"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8 text-sm font-medium"
          onMouseLeave={() => setMegaOpen(false)}
        >
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onMouseEnter={() => setMegaOpen(item.label === "Makeup")}
              className="gold-underline py-2 text-foreground/80 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-border px-3 py-2 w-56 lg:w-72 focus-within:border-primary transition-colors">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
              placeholder="Search lipstick, serum…"
            />
          </div>
          <button className="md:hidden p-2" aria-label="Search"><Search className="h-5 w-5" /></button>
          <Link to="/" className="relative p-2" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground grid place-items-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/" className="hidden md:inline-flex p-2" aria-label="Account"><User className="h-5 w-5" /></Link>
          <button
            className="relative p-2"
            aria-label="Cart"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {megaOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 border-t border-border bg-background/95 backdrop-blur-xl"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="container-tivana grid grid-cols-4 gap-10 py-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Face</p>
              <ul className="space-y-2 text-sm">
                {["Foundation", "Concealer", "Powder", "Blush", "Highlighter"].map((x) => (
                  <li key={x}><Link to="/shop" className="gold-underline">{x}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Lips</p>
              <ul className="space-y-2 text-sm">
                {["Satin Lipstick", "Matte Lipstick", "Lip Liner", "Lip Oil", "Lip Gloss"].map((x) => (
                  <li key={x}><Link to="/shop" className="gold-underline">{x}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Eyes</p>
              <ul className="space-y-2 text-sm">
                {["Palettes", "Mascara", "Eyeliner", "Brow", "Lashes"].map((x) => (
                  <li key={x}><Link to="/shop" className="gold-underline">{x}</Link></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary/70">Featured</p>
              <p className="mt-2 font-display text-2xl text-primary leading-tight">The Velvet Reign Edit</p>
              <p className="mt-2 text-sm text-primary/80">Six new plum-driven shades. Made to be worn.</p>
              <Link to="/shop" className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4">Discover</Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn("absolute inset-0 bg-black/40 transition-opacity", mobileOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background p-6 shadow-2xl transition-transform",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-primary">Tivana</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
          </div>
          <nav className="mt-8 space-y-1">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/shop"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-base hover:bg-muted"
              >
                {c.name}
                <span className="text-muted-foreground">→</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
