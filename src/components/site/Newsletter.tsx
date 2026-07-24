import { useState } from "react";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="container-tivana py-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Le Journal</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
              Join the list.<br/>Get 10% off your first ritual.
            </h2>
            <p className="mt-4 text-sm opacity-80 max-w-md">
              Early access to launches, private masterclasses, and love notes from our founder.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="relative"
          >
            <div className="flex flex-col sm:flex-row gap-3 bg-background/10 backdrop-blur border border-primary-foreground/20 rounded-full p-2">
              <div className="flex items-center gap-3 flex-1 px-4">
                <Mail className="h-4 w-4 opacity-70" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent outline-none py-3 text-sm placeholder:text-primary-foreground/60"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
              >
                {done ? "Merci ✓" : "Subscribe"}
              </button>
            </div>
            <p className="mt-3 text-xs opacity-70">By subscribing you agree to our Privacy Policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
