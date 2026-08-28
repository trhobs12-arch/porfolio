import { CaseStudyPage } from "@/components/portfolio";

export default function CertificateLifecycleManagementPage() {
  return <CaseStudyPage study={{
    number: "01", title: "Certificate Lifecycle Management", category: "Digital Trust / PKI",
    intro: "Implementation and integration support for certificate lifecycle management workflows.",
    overview: "Certificate lifecycle management brings certificate-related activities into a defined workflow, helping teams manage certificate requests, validation and lifecycle activities in a practical enterprise environment.",
    contribution: ["Supported product implementation, installation, configuration and deployment activities", "Worked with requirements and workflow validation for certificate-based security solutions", "Supported integration, technical testing, UAT and deployment activities", "Prepared documentation and supported customer onboarding and training"],
    value: "The focus was on helping move certificate lifecycle requirements into an implementable workflow, with practical support across configuration, validation and deployment.",
    technologies: ["PKI", "CLM", "SSL/TLS", "REST API", "X.509"]
  }} />;
}
