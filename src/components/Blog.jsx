// src/components/Blog.jsx
import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "SentinelSec: Building an Adaptive DevSecOps Engine",
    date: "July 2025",
    summary:
      "SentinelSec is my personal project aimed at building an intelligent vulnerability scanner with adaptive logic. It uses Golang for scanning, Node.js for orchestration, and integrates OpenSSF APIs for vulnerability detection. The UI is built with SvelteKit and the system is CI/CD-driven using GitHub Actions.",
  },
  {
    title: "AWS Lambda Automation: Slack + Jira + Email Integration",
    date: "June 2025",
    summary:
      "Built an end-to-end automation pipeline that connects Jira ticket creation, Slack channel orchestration, and Outlook notifications using AWS Lambda. This reduced incident triage and manual sync efforts by 60%.",
  }
];

const Blog = () => {
  return (
    <section id="blog" className="px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Blog</h2>
        <div className="space-y-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-md text-gray-700 dark:text-gray-300">{post.summary}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
