import { defineMcp } from "@lovable.dev/mcp-js";
import listProducts from "./tools/list-products";
import getProduct from "./tools/get-product";

export default defineMcp({
  name: "tivana-beauty-hub",
  title: "Tivana Beauty Hub",
  version: "0.1.0",
  instructions:
    "Catalogue public de la boutique Tivana (soins cheveux, visage, intime, compléments, coffrets). Prix en MAD, livraison offerte dès 200 MAD.",
  tools: [listProducts, getProduct],
});
