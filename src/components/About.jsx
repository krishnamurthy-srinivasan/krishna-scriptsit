// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-4xl">
          I'm Krishna Murthy Srinivasan, a seasoned Software Development Engineer with over 3 years of hands-on experience in building scalable automation systems, cloud-native tools, and backend services. I specialize in AWS development, Python scripting, CI/CD integration, observability stack design, and enterprise tool automation.
          <br /><br />
          I’ve architected and deployed robust RPA pipelines, AWS Lambda workflows, Slack-Jira-Wiki automation frameworks, and real-time incident metrics systems. I'm also skilled in building fast APIs using Flask and FastAPI, deploying workloads with Docker/Kubernetes, and orchestrating logging & monitoring solutions with Prometheus, Grafana, Fluent Bit, and Loki.
          <br /><br />
          My drive comes from solving impactful engineering problems that reduce manual effort, increase visibility, and improve reliability across large-scale infrastructure and dev teams.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
