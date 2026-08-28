import { CaseStudyPage } from "@/components/portfolio";

export default function SmimeIntegrationPage() {
  return <CaseStudyPage study={{
    number: "02", title: "S/MIME Integration", category: "Digital Trust / Email Security",
    intro: "Enterprise S/MIME certificate enrollment and workflow support spanning subscriber onboarding, verification and lifecycle activities.",
    overview: "S/MIME uses digital certificates to support secure enterprise email. The work involved understanding and supporting certificate enrollment and lifecycle workflows within an enterprise implementation context.",
    contribution: ["Supported analysis of S/MIME certificate enrollment workflows", "Worked on subscriber onboarding and identity-verification activities", "Supported API integration and technical validation", "Supported UAT and certificate lifecycle activities"],
    value: "The work supported a clear, validated path for certificate enrollment and lifecycle activities while connecting technical workflow requirements with implementation support.",
    technologies: ["S/MIME", "PKI", "X.509", "REST API", "SOAP API"]
  }} />;
}
