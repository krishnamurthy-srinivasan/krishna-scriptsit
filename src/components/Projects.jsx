// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projectList = [
  {
    title: "Slack-Jira-Wiki Automation Framework",
    description:
      "Engineered a full-cycle automation pipeline that links EPIC creation in Jira to Slack channel creation and wiki documentation updates. Handles user assignments, notifications, due-date alerts, and progress comments.",
    stack: ["Python", "Slack API", "Jira API", "AWS Lambda", "SendGrid"],
  },
  {
    title: "Azure SSO Ownership Validation",
    description:
      "Built a quarterly audit system using AWS Lambda, Graph API, and SendGrid to validate Azure SSO app ownership across 800 users and 500+ apps, reducing manual effort by 80%.",
    stack: ["AWS Lambda", "Graph API", "SendGrid", "Power Automate"],
  },
  {
    title: "Incident Metrics + Alerting System",
    description:
      "Designed a reporting engine to fetch Wolken incidents for 5 assignment groups, derive metrics, and send structured alerts via Slack and email based on thresholds.",
    stack: ["Python", "Wolken API", "Slack", "AWS Lambda", "Outlook API"],
  },
  {
    title: "Observability Stack with Vector and Kafka",
    description:
      "Built a log transport and visualization pipeline with Vector → Kafka → Elasticsearch/InfluxDB, visualized using Grafana. Achieved 2x throughput in logs and metrics delivery.",
    stack: ["Vector", "Redpanda Kafka", "Grafana", "Elasticsearch"],
  },
  {
    title: "Configify Wizard",
    description:
      "A CLI and web tool to interactively build cloud configuration templates. Speeds up provisioning pipelines by simplifying JSON/YAML generation.",
    stack: ["Python", "FastAPI", "Typer CLI"],
    url: "https://github.com/krishnamurthy-srinivasan/Configify-Wizard"
  },
  {
    title: "Distroless Containers",
    description:
      "A repo demonstrating how to create secure, minimal container images without package managers or shells, improving performance and reducing CVEs.",
    stack: ["Docker", "Alpine", "Distroless", "Security"],
    url: "https://github.com/krishnamurthy-srinivasan/distroless-containers"
  },
  {
    title: "Ordering System + Metrics Simulation",
    description:
      "Simulates Kafka message generation for an order system and ingests metrics into InfluxDB for visualization. Great for demonstrating real-time logging and dashboarding.",
    stack: ["Kafka", "InfluxDB", "Python"],
    url: "https://github.com/krishnamurthy-srinivasan/OrderingSystem-Using-Kafka-InfluxDB"
  },
  {
    title: "SentinelSec (WIP)",
    description:
      "An AI-driven DevSecOps platform for scanning dependencies, code, and containers. Built using Golang, Node.js, OpenSSF APIs and SvelteKit. Integrates directly into CI/CD pipelines.",
    stack: ["Go", "Node.js", "OpenSSF", "GitHub Actions", "SvelteKit"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="relative border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold mb-2 flex-1">{project.title}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;