export type HeroSlide = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  nodes: string[];
};

export const heroSlides: HeroSlide[] = [
  {
    number: "01",
    eyebrow: "DIGITAL TRUST",
    title: "Building secure digital trust infrastructure.",
    description:
      "Working across PKI, S/MIME, certificate lifecycle management and certificate authority integrations.",
    tags: ["PKI", "S/MIME", "CLM", "CA"],
    nodes: ["PKI", "S/MIME", "CA API", "CLM"],
  },
  {
    number: "02",
    eyebrow: "API & SYSTEM INTEGRATION",
    title: "Connecting products, APIs and enterprise systems.",
    description:
      "Turning product requirements into practical integrations across REST, SOAP, certificate and enterprise platforms.",
    tags: ["REST", "SOAP", "CA APIs", "Integration"],
    nodes: ["APPLICATION", "API", "CA", "CERTIFICATE"],
  },
  {
    number: "03",
    eyebrow: "BUSINESS SYSTEMS",
    title: "Technology that fits the business workflow.",
    description:
      "Exposure to ERP, e-commerce and inventory management systems, connecting product requirements with business processes.",
    tags: ["ERP", "E-COMMERCE", "INVENTORY", "WORKFLOW"],
    nodes: ["ERP", "E-COMMERCE", "INVENTORY", "BUSINESS"],
  },
  {
    number: "04",
    eyebrow: "PRODUCT DELIVERY",
    title: "From requirements to a working solution.",
    description:
      "Supporting PoC, configuration, testing, UAT, deployment, documentation and customer-facing implementation.",
    tags: ["PoC", "SIT", "UAT", "DEPLOYMENT"],
    nodes: ["DISCOVER", "BUILD", "VALIDATE", "DELIVER"],
  },
];