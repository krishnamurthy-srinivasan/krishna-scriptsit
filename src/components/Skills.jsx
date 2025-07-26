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

const fadeInStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-20 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeInStagger}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          variants={fadeItem}
        >
          Skills & Tools
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, tools], idx) => (
            <motion.div key={idx} variants={fadeItem}>
              <h3 className="text-xl font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
                    variants={fadeItem}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
