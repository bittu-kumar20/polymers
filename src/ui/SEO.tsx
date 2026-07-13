// src/ui/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
  schemaMarkup?: Record<string, any>;
  schemas?: Record<string, any>[]; // Support multiple schemas
  keywords?: string[];
}

export default function SEO({ 
  title, 
  description, 
  name = 'Modo Polymers PLC', 
  type = 'website', 
  url = 'https://modopolymersplc.com',
  image = 'https://modopolymersplc.com/preview.jpg', // Default OG Image fallback
  schemaMarkup,
  schemas = [],
  keywords = []
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL for avoiding duplicate content issues */}
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
      
      {/* Multiple Schemas (E.g. Breadcrumb + LocalBusiness together) */}
      {schemas.length > 0 && schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
