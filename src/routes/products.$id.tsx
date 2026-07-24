import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getProduct, products } from "@/lib/products";
import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star, Truck, Shield, RotateCcw, Sparkles } from "lucide-react";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/site/ProductCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Tivana" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — Tivana` },
        { name: "description", content: `${p.name}. ${p.description}` },
        { property: "og:title", content: `${p.name} — Tivana` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [shade, setShade] = useState(product.shades?.[0]?.name);
  const [gallery] = useState([product.image, product.image, product.image, product.image]);
  const [active, setActive] = useState(0);
  const wished = wishlist.includes(product.id);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="container-tivana py-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> /
        <Link to="/shop" className="hover:text-foreground"> Shop</Link> /
        <span className="text-foreground"> {product.name}</span>
      </div>

      <div className="container-tivana grid lg:grid-cols-2 gap-10 lg:gap-16 pb-16">
        {/* Gallery */}
        <div className="grid grid-cols-[80px_1fr] gap-4">
          <div className="flex flex-col gap-3 order-1">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden bg-muted border-2 transition",
                  active === i ? "border-primary" : "border-transparent"
                )}
              >
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary group order-2">
            <img
              src={gallery[active]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="lg:sticky lg:top-28 self-start">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.tagline}</p>

          <div className="mt-4 flex items-center gap-3 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={cn("h-4 w-4", i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted-foreground")} />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl text-primary">${product.price}</span>
            {product.compareAt && (
              <>
                <span className="text-muted-foreground line-through">${product.compareAt}</span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-foreground uppercase tracking-widest">
                  Save ${product.compareAt - product.price}
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">{product.description}</p>

          {product.shades && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] mb-3">Shade: <span className="text-primary font-medium">{shade}</span></p>
              <div className="flex flex-wrap gap-2">
                {product.shades.map((s: { name: string; hex: string }) => (
                  <button
                    key={s.name}
                    onClick={() => setShade(s.name)}
                    title={s.name}
                    className={cn(
                      "h-10 w-10 rounded-full ring-offset-2 ring-offset-background transition",
                      shade === s.name ? "ring-2 ring-primary" : "ring-1 ring-border"
                    )}
                    style={{ backgroundColor: s.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3"><Plus className="h-4 w-4" /></button>
            </div>
            <button
              onClick={() => addToCart(product, { qty, shade })}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 h-14 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Bag
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={cn(
                "grid h-14 w-14 place-items-center rounded-full border border-border hover:border-primary transition",
                wished && "text-primary border-primary"
              )}
              aria-label="Wishlist"
            >
              <Heart className={cn("h-5 w-5", wished && "fill-current")} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6">
            {[
              { icon: Truck, label: "Free shipping over $60" },
              { icon: RotateCcw, label: "30-day returns" },
              { icon: Shield, label: "Dermatologist tested" },
              { icon: Sparkles, label: "Cruelty free" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm">
                <f.icon className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-tivana py-16 border-t border-border">
        <h2 className="font-display text-3xl md:text-4xl mb-8">You may also love</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
