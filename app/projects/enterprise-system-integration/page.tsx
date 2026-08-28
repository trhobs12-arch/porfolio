import { CaseStudyPage } from "@/components/portfolio";

export default function EnterpriseSystemIntegrationPage() {
  return <CaseStudyPage study={{
    number: "04", title: "Enterprise System Integration", category: "Project Engineering",
    intro: "End-to-end enterprise implementation support across requirements, integration, testing, troubleshooting and deployment.",
    overview: "Enterprise implementation requires coordination between business workflows, technical requirements and project delivery. This work covered supporting implementation activities from requirements gathering through testing and deployment.",
    contribution: ["Supported requirements gathering and stakeholder coordination", "Prepared workflows, mock-ups and technical documentation", "Coordinated system integration and testing activities", "Managed SIT and UAT activities", "Performed troubleshooting and root-cause analysis", "Supported implementation planning and deployment"],
    value: "The focus was on helping technical and business teams move from requirements to a validated implementation through clear coordination, testing and documentation.",
    technologies: ["API", "System Integration", "Business Analysis", "SIT", "UAT", "RCA", "Documentation"]
  }} />;
}
