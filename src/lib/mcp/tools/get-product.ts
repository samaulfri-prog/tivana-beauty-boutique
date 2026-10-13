import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getProduct } from "@/lib/products";

export default defineTool({
  name: "get_product",
  title: "Détails d'un produit",
  description: "Renvoie la fiche complète d'un produit Tivana à partir de son identifiant.",
  inputSchema: { id: z.string().min(1).describe("Identifiant du produit, ex : shampoing-soin.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const p = getProduct(id);
    if (!p) throw new ToolError(`Produit introuvable : ${id}`);
    const product = {
      id: p.id, name: p.name, tagline: p.tagline, price: p.price, compareAt: p.compareAt ?? null,
      rating: p.rating, reviews: p.reviews, category: p.category, description: p.description,
      url: `https://tivana-beauty-boutique.lovable.app/products/${p.id}`,
    };
    return {
      content: [{ type: "text", text: `${p.name} — ${p.price} MAD\n${p.description}\n${product.url}` }],
      structuredContent: { product },
    };
  },
});
