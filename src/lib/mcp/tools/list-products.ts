import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "@/lib/products";

export default defineTool({
  name: "list_products",
  title: "Lister les produits",
  description: "Liste les produits Tivana (nom, prix en MAD, catégorie), filtrables par catégorie ou mot-clé.",
  inputSchema: {
    category: z.string().optional().describe("Catégorie, ex : cheveux, visage, intime, complements, coffrets."),
    query: z.string().optional().describe("Mot-clé à rechercher dans le nom ou la description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query }) => {
    const q = query?.toLowerCase();
    const list = products
      .filter((p) => !category || p.category.toLowerCase() === category.toLowerCase())
      .filter((p) => !q || `${p.name} ${p.tagline} ${p.description}`.toLowerCase().includes(q))
      .map((p) => ({ id: p.id, name: p.name, tagline: p.tagline, price: p.price, category: p.category, rating: p.rating }));
    return {
      content: [{ type: "text", text: list.length ? list.map((p) => `${p.id} — ${p.name} : ${p.price} MAD (${p.category})`).join("\n") : "Aucun produit trouvé." }],
      structuredContent: { products: list },
    };
  },
});
