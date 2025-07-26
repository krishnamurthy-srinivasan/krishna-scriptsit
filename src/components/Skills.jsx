// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Languages: ["Python", "Java", "SQL", "Bash/Shell"],
  Frameworks: ["Flask", "FastAPI", "Spring Boot", "PySpark", "Airflow"],
  Cloud: ["AWS", "Azure", "Lambda", "API Gateway", "CloudFormation", "ECS", "EKS", "Cognito", "IAM"],
  DevOps: ["Docker", "Kubernetes", "Helm", "CI/CD", "GitHub Actions"],
  Data: ["MySQL", "PostgreSQL", "Cassandra", "Kafka", "Vector", "InfluxDB"],
  Monitoring: ["Prometheus", "Grafana", "Fluent Bit", "Loki"],
  Automation: ["Power Automate", "SendGrid", "Wolken API", "Jira API"],
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, tools], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600"
                  >
                    {tool}
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

export default Skills;
