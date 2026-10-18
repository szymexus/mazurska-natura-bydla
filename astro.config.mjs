import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || "https://mazurskanaturabydla.pl",
  base: process.env.SITE_BASE || "/",
  devToolbar: { enabled: false },
});
