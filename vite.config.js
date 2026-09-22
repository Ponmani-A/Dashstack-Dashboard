import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/" - ithை explicit ah vachurukom. Ithு illama na, chinna chances
  // irukku CSS/JS file paths "relative" ah build aagi, nested route (/inbox
  // mாதிரி) direct ah open pannுmpodhu, path resolve thappaா irukka.
  base: "/",
});
