import { useEffect } from "react";
import { seoConfig } from "@/lib/config";

interface SEOHeadProps {
  page?: "home" | "about" | "services" | "contact";
}

const SEOHead = ({ page = "home" }: SEOHeadProps) => {
  useEffect(() => {
    const seo = seoConfig.seo[page];
    if (seo?.title) document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seo?.description) {
      metaDesc.setAttribute("content", seo.description);
    }

    // Schema.org LocalBusiness JSON-LD
    const existingScript = document.querySelector('script[data-schema="local-business"]');
    if (existingScript) existingScript.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": seoConfig.businessName,
      "telephone": seoConfig.phone,
      "email": seoConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.address.street,
        "addressLocality": seoConfig.address.city,
        "addressRegion": seoConfig.address.state,
        "postalCode": seoConfig.address.zip,
      },
      "url": window.location.origin,
      "areaServed": seoConfig.serviceArea,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "local-business");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [page]);

  return null;
};

export default SEOHead;
