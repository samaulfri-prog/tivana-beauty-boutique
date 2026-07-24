import { Link } from "@tanstack/react-router";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { useStore } from "@/lib/store";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.includes(product.id);
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <div className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <Link
          to="/products/$id"
          params={{ id: product.id }}
          className="block h-full w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge === "new" && (
            <span className="rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">New</span>
          )}
          {product.badge === "bestseller" && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">Bestseller</span>
          )}
          {product.badge === "limited" && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">Limited</span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-foreground text-background px-2.5 py-1 text-[10px] font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0">
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label="Wishlist"
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur shadow-sm hover:bg-background",
              wished && "text-primary"
            )}
          >
            <Heart className={cn("h-4 w-4", wished && "fill-current")} />
          </button>
          <Link
            to="/products/$id"
            params={{ id: product.id }}
            aria-label="Quick view"
            className="grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur shadow-sm hover:bg-background"
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium opacity-0 translate-y-2 transition group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90"
        >
          <ShoppingBag className="h-4 w-4" /> Add to Bag
        </button>
      </div>

      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>· {product.reviews.toLocaleString()}</span>
        </div>
        <Link to="/products/$id" params={{ id: product.id }}>
          <h3 className="font-display text-base font-medium">{product.name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground">{product.tagline}</p>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-semibold">${product.price}</span>
          {product.compareAt && (
            <span className="text-xs text-muted-foreground line-through">${product.compareAt}</span>
          )}
        </div>
        {product.shades && (
          <div className="flex gap-1 pt-1">
            {product.shades.slice(0, 5).map((s) => (
              <span
                key={s.name}
                title={s.name}
                className="h-3 w-3 rounded-full ring-1 ring-border"
                style={{ backgroundColor: s.hex }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
