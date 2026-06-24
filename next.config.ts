import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // Sert le site statique (public/site.html) à la racine et sur /about.
      // beforeFiles intercepte avant les routes de l'app.
      beforeFiles: [
        { source: "/", destination: "/site.html" },
        { source: "/about", destination: "/site.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
