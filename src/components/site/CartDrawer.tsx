import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useStore } from "@/lib/store";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal } = useStore();
  const shipping = cartTotal > 60 || cartTotal === 0 ? 0 : 8;

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col gap-0">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Votre panier ({cart.length})
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 grid place-items-center px-6 text-center">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary text-primary">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <p className="mt-4 font-display text-lg">Votre panier est vide</p>
              <p className="mt-1 text-sm text-muted-foreground">Découvrez l'Édit Tivana.</p>
              <Button className="mt-6" onClick={() => setCartOpen(false)}>Continuer mes achats</Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id + (item.shade ?? "")} className="flex gap-4">
                  <img src={item.product.image} alt={item.product.name} className="h-24 w-20 rounded-lg object-cover bg-muted" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium truncate">{item.product.name}</p>
                        {item.shade && <p className="text-xs text-muted-foreground">Teinte : {item.shade}</p>}
                        <p className="text-xs text-muted-foreground">{item.product.tagline}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-foreground shrink-0">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="p-2"><Minus className="h-3 w-3" /></button>
                        <span className="w-8 text-center text-sm">{item.qty}</span>
                        <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="p-2"><Plus className="h-3 w-3" /></button>
                      </div>
                      <span className="font-semibold">{(item.product.price * item.qty).toFixed(2)} MAD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5 space-y-3 bg-muted/30">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sous-total</span>
                <span className="font-medium">{cartTotal.toFixed(2)} MAD</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Livraison</span>
                <span className="font-medium">{shipping === 0 ? "Offerte" : `${shipping} MAD`}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base">
                <span className="font-display">Total</span>
                <span className="font-semibold">{(cartTotal + shipping).toFixed(2)} MAD</span>
              </div>
              <Button className="w-full h-12 rounded-full text-sm tracking-widest uppercase">Passer commande</Button>
              <button onClick={() => setCartOpen(false)} className="w-full text-xs text-muted-foreground hover:text-foreground">
                Continuer mes achats
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
