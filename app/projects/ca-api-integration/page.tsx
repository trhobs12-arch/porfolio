import { CaseStudyPage } from "@/components/portfolio";

export default function CaApiIntegrationPage() {
  return <CaseStudyPage study={{
    number: "03", title: "Certificate Authority API Integration", category: "API Integration / PKI",
    intro: "REST and SOAP API integration and testing for certificate lifecycle operations using OAuth-based authentication.",
    overview: "Certificate Authority APIs enable applications and enterprise platforms to work programmatically with certificate services. My involvement focused on understanding API capabilities, testing integration scenarios and validating lifecycle operations through REST and SOAP interfaces.",
    contribution: ["Analysed API documentation and integration requirements", "Prepared and tested REST and SOAP API requests", "Configured OAuth 2.0 authentication for API access", "Tested ordering, retrieval, verification, renewal, reissue and revocation workflows", "Investigated API responses, error codes and request parameters", "Documented API workflows, test results and technical findings"],
    value: "The testing helped validate how enterprise applications can interact with certificate authority services, while making request validation and error handling easier to understand during integration.",
    technologies: ["REST API", "SOAP API", "OAuth 2.0", "Postman", "JSON", "XML", "CSR", "X.509", "SSL/TLS", "PKI"]
  }} />;
}
