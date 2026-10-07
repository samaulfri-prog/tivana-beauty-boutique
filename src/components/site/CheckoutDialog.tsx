import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ShoppingBag,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageCircle,
  MapPin,
  User,
  Phone,
  Home,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

const WHATSAPP_PHONE_DISPLAY = "+212 708-082079";
const WHATSAPP_PHONE_NUMBER = "212708082079";

const POPULAR_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fès",
  "Agadir",
  "Meknès",
  "Oujda",
];

export function CheckoutDialog() {
  const { checkoutOpen, setCheckoutOpen, cart, cartTotal, clearCart } = useStore();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastOrderDetails, setLastOrderDetails] = useState<{
    name: string;
    phone: string;
    city: string;
    address: string;
    total: number;
    whatsappUrl: string;
    itemsCount: number;
  } | null>(null);

  const shipping = cartTotal >= 200 || cartTotal === 0 ? 0 : 80;
  const finalTotal = cartTotal + shipping;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = "Veuillez renseigner votre nom et prénom.";
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 9) {
      errs.phone = "Veuillez renseigner un numéro de téléphone valide.";
    }
    if (!city.trim()) {
      errs.city = "Veuillez indiquer votre ville.";
    }
    if (!address.trim()) {
      errs.address = "Veuillez préciser votre adresse de livraison.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;
    if (cart.length === 0) return;

    // Compose formatted WhatsApp message
    const itemsLines = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.product.name}*${
            item.shade ? ` _(Teinte : ${item.shade})_` : ""
          }\n   • Quantité : ${item.qty}\n   • Prix unitaire : ${item.product.price} MAD\n   • Total : ${(
            item.product.price * item.qty
          ).toFixed(2)} MAD`
      )
      .join("\n\n");

    const message =
      `🌸 *NOUVELLE COMMANDE — TIVANA BEAUTÉ* 🌸\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client :* ${fullName.trim()}\n` +
      `📞 *Téléphone :* ${phone.trim()}\n` +
      `📍 *Ville :* ${city.trim()}\n` +
      `🏠 *Adresse :* ${address.trim()}\n` +
      (notes.trim() ? `📝 *Note :* ${notes.trim()}\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🛒 *DÉTAIL DES ARTICLES :*\n\n` +
      `${itemsLines}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 *Sous-total :* ${cartTotal.toFixed(2)} MAD\n` +
      `🚚 *Livraison :* ${shipping === 0 ? "Offerte (Gratuite dès 200 MAD)" : `${shipping} MAD`}\n` +
      `✨ *TOTAL À RÉGLER :* ${finalTotal.toFixed(2)} MAD\n` +
      `💵 *Paiement :* Paiement à la livraison (Cash on Delivery)\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Bonjour Tivana, je confirme ma commande. Merci de me contacter pour la livraison !`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    // Save order summary before clearing cart
    setLastOrderDetails({
      name: fullName.trim(),
      phone: phone.trim(),
      city: city.trim(),
      address: address.trim(),
      total: finalTotal,
      whatsappUrl,
      itemsCount: cart.reduce((n, i) => n + i.qty, 0),
    });

    // Clear cart and show success view
    clearCart();
    setIsSubmitted(true);

    // Open WhatsApp in new tab / application
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback if popup blocker intervenes
      window.location.href = whatsappUrl;
    }
  };

  const handleClose = () => {
    setCheckoutOpen(false);
    // Reset submitted view after dialog closes
    setTimeout(() => {
      setIsSubmitted(false);
      setErrors({});
    }, 300);
  };

  return (
    <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 gap-0 rounded-3xl bg-background border border-border shadow-2xl">
        {isSubmitted && lastOrderDetails ? (
          /* Order Confirmation View */
          <div className="p-6 md:p-10 text-center space-y-6">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Commande Transmise
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Merci pour votre commande, {lastOrderDetails.name} !
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Votre commande a été envoyée avec succès sur WhatsApp au service client Tivana au{" "}
                {/* <span className="font-semibold text-foreground">{WHATSAPP_PHONE_DISPLAY}</span>. */}
              </p>
            </div>

            <div className="rounded-2xl bg-secondary/50 border border-border p-5 text-left text-sm space-y-3">
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="text-muted-foreground">Articles</span>
                <span className="font-medium text-foreground">{lastOrderDetails.itemsCount} article(s)</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="text-muted-foreground">Destinataire</span>
                <span className="font-medium text-foreground">{lastOrderDetails.name} ({lastOrderDetails.phone})</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="text-muted-foreground">Adresse</span>
                <span className="font-medium text-foreground">{lastOrderDetails.address}, {lastOrderDetails.city}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="text-muted-foreground">Paiement</span>
                <span className="font-medium text-foreground">À la livraison (Espèces)</span>
              </div>
              <div className="flex justify-between pt-1 text-base font-semibold">
                <span>Total à régler</span>
                <span className="text-primary font-display text-lg">{lastOrderDetails.total.toFixed(2)} MAD</span>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3.5 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-3 text-left">
              <Clock className="h-5 w-5 shrink-0 text-amber-600" />
              <span>
                Notre conseiller va vous contacter par téléphone ou WhatsApp dans les plus brefs délais pour valider l'expédition de votre colis. Merci.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={lastOrderDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 text-sm transition shadow-sm"
              >
                <MessageCircle className="h-4 w-4" /> Ouvrir WhatsApp  
              </a>
              <Button
                variant="outline"
                onClick={handleClose}
                className="rounded-full px-6 py-3 text-sm"
              >
                Fermer
              </Button>
            </div>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary text-primary">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl">Votre panier est vide</h3>
            <p className="text-sm text-muted-foreground">
              Veuillez ajouter des produits à votre panier avant de passer commande.
            </p>
            <Button onClick={handleClose} className="rounded-full mt-2">
              Découvrir nos soins
            </Button>
          </div>
        ) : (
          /* Checkout Form */
          <div>
            <DialogHeader className="border-b border-border p-6 bg-secondary/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
                    Traitement de commande
                  </p>
                  <DialogTitle className="mt-1 font-display text-2xl md:text-3xl tracking-tight">
                    Finaliser votre commande
                  </DialogTitle>
                </div>
              </div>
              <DialogDescription className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-primary" />
                Livraison rapide partout au Maroc · Paiement sécurisé à la réception
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Order Items Preview */}
              <div className="rounded-2xl bg-secondary/40 border border-border p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Articles ({cart.length})</span>
                  <span>Prix</span>
                </div>
                <div className="max-h-40 overflow-y-auto space-y-2 pr-1 divide-y divide-border/50">
                  {cart.map((item) => (
                    <div
                      key={item.product.id + (item.shade ?? "")}
                      className="pt-2 first:pt-0 flex items-center justify-between gap-3 text-sm"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-10 w-10 rounded-lg object-cover bg-muted shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-medium truncate text-foreground text-xs md:text-sm">
                            {item.product.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {item.shade && `Teinte : ${item.shade} · `}Qté : {item.qty}
                          </p>
                        </div>
                      </div>
                      <span className="font-semibold shrink-0 text-xs md:text-sm">
                        {(item.product.price * item.qty).toFixed(2)} MAD
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-3 space-y-1.5 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sous-total</span>
                    <span className="font-medium text-foreground">{cartTotal.toFixed(2)} MAD</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Frais de livraison</span>
                    <span className="font-medium text-foreground">
                      {shipping === 0 ? "Offerte (Gratuite dès 200 MAD)" : `${shipping} MAD`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-foreground pt-1 border-t border-border/60">
                    <span className="font-display text-base">Total à payer</span>
                    <span className="font-display text-base text-primary">
                      {finalTotal.toFixed(2)} MAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Information Form */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> Coordonnées du destinataire
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-foreground">
                      Nom et Prénom <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                        }}
                        placeholder="Ex: Sara El Amrani"
                        className="pl-9 rounded-xl h-10 text-sm"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-foreground">
                      Téléphone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        placeholder="Ex: 06 12 34 56 78"
                        className="pl-9 rounded-xl h-10 text-sm"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-medium text-foreground">
                      Ville de livraison <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-muted-foreground">Sélection rapide :</span>
                  </div>
                  <div className="relative mb-2">
                    <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        if (errors.city) setErrors((prev) => ({ ...prev, city: "" }));
                      }}
                      placeholder="Ex: Casablanca, Rabat, Marrakech..."
                      className="pl-9 rounded-xl h-10 text-sm"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_CITIES.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          setCity(c);
                          if (errors.city) setErrors((prev) => ({ ...prev, city: "" }));
                        }}
                        className={`text-[11px] px-2.5 py-1 rounded-full border transition ${
                          city.toLowerCase() === c.toLowerCase()
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary/60 hover:bg-secondary border-border text-foreground/80"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-500">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-foreground">
                    Adresse complète de livraison <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors((prev) => ({ ...prev, address: "" }));
                      }}
                      placeholder="Quartier, Boulevard/Rue, N° Immeuble ou Résidence"
                      className="pl-9 rounded-xl h-10 text-sm"
                    />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-500">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-foreground flex items-center justify-between">
                    <span>Instructions de livraison <span className="text-muted-foreground font-normal">(Optionnel)</span></span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Remarques (ex: appeler à l'avance, livrer après 14h...)"
                      rows={2}
                      className="pl-9 rounded-xl text-sm resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Mode Highlight */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 flex items-center gap-3.5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-foreground">Paiement à la livraison (Cash on Delivery)</p>
                  <p className="text-muted-foreground text-[11px] mt-0.5">
                    Payez en espèces à la réception de votre colis auprès du livreur. Aucun prépaiement requis.
                  </p>
                </div>
              </div>

              {/* Confirmation CTA */}
              <div className="space-y-2 pt-2">
                <Button
                  type="submit"
                  className="w-full h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  Confirmer la commande sur WhatsApp 
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  En cliquant sur confirmer, votre commande est envoyée pour expédition immédiate.
                  {/* <span className="font-medium text-foreground">{WHATSAPP_PHONE_DISPLAY}</span> pour expédition immédiate. */}
                </p>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
