import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./products";

export type CartItem = { product: Product; qty: number; shade?: string };

type StoreState = {
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  addToCart: (p: Product, opts?: { qty?: number; shade?: string }) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  cartCount: number;
  cartTotal: number;
};

const Ctx = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("tivana:cart");
      const w = localStorage.getItem("tivana:wishlist");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("tivana:cart", JSON.stringify(cart));
  }, [cart, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("tivana:wishlist", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const value = useMemo<StoreState>(() => ({
    cart,
    wishlist,
    cartOpen,
    setCartOpen,
    addToCart: (p, opts) => {
      setCart((c) => {
        const existing = c.find((i) => i.product.id === p.id && i.shade === opts?.shade);
        if (existing) {
          return c.map((i) => i === existing ? { ...i, qty: i.qty + (opts?.qty ?? 1) } : i);
        }
        return [...c, { product: p, qty: opts?.qty ?? 1, shade: opts?.shade }];
      });
      setCartOpen(true);
    },
    removeFromCart: (id) => setCart((c) => c.filter((i) => i.product.id !== id)),
    updateQty: (id, qty) => setCart((c) => c.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
    toggleWishlist: (id) => setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]),
    cartCount: cart.reduce((n, i) => n + i.qty, 0),
    cartTotal: cart.reduce((n, i) => n + i.qty * i.product.price, 0),
  }), [cart, wishlist, cartOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used within StoreProvider");
  return v;
}
