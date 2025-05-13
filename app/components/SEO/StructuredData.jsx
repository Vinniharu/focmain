export default function StructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Festival Of Change",
    "description": "Join the Festival Of Change - bringing together speakers, volunteers, and sponsors to create positive community impact.",
    "startDate": "2025-09-15T09:00:00-07:00",
    "endDate": "2025-09-17T17:00:00-07:00",
    "location": {
      "@type": "Place",
      "name": "Festival Venue",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tayo Aderinokun auditorium, University of Lagos",
        "addressLocality": "Lagos",
        "postalCode": "100001",
        "addressCountry": "Nigeria"
      }
    },
    "image": "https://www.festivalofchange.org/og-image.png",
    "offers": {
      "@type": "Offer",
      "url": "https://www.festivalofchange.org/register",
      "price": "Free",
      "priceCurrency": "NGN",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-05-01"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Festival Of Change Organization",
      "url": "https://www.festivalofchange.org"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
} 