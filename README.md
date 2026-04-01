# 🤖 AI-Native Content Supply Chain: Multi-Agent Orchestration

## 📌 Project Overview
This repository serves as a technical case study for an **Autonomous Content Engine** designed to eliminate the creative bottleneck in growth marketing. Utilizing a multi-stage sequential LLM chain, the system transforms a single seed topic into a comprehensive long-form blog post and a suite of platform-optimized social media assets (LinkedIn & X) in under 60 seconds.

**Note:** The core `.json` workflow architecture is proprietary. This documentation focuses on the system design, API orchestration, and custom data-handling logic.

---

## 🛠 Technical Architecture

### 1. Sequential LLM Chaining (**Anthropic Claude 3.5/4.6 Sonnet**)
Unlike standard "one-shot" AI prompts, this system utilizes a dual-agent framework to ensure high-fidelity output:
* **Agent 1 (The Researcher):** Performs deep-topic analysis and drafts a structured, technically accurate long-form blog post.
* **Agent 2 (The Social Architect):** Consumes the output of Agent 1 to extract, rewrite, and format content specifically for high-engagement "hooks" on LinkedIn and X (formerly Twitter).

### 2. Custom Data Parsing (**JavaScript / Node.js**)
To ensure the system is production-ready, I implemented custom **Code Nodes** to handle:
* **JSON Transformation:** Normalizing inconsistent data structures from various marketing sources into a unified schema for the delivery engine.
* **Regex-based Parsing:** Extracting structured snippets from raw LLM responses to prevent "AI-isms" from reaching the final draft.
* **Sanitization:** Automating character-count compliance and formatting for specific social media APIs.

### 3. Automated Delivery Layer (**Google Drive API**)
The workflow concludes with a "Silent Handoff," where final assets are dynamically named and pushed to a centralized Google Drive folder. This provides immediate, structured value for the growth team without manual file management.

---

## 📊 Business Impact & ROI
* **Content Velocity:** Reduced the content production lifecycle from **4 hours to 1 minute**.
* **Omnichannel Scale:** Generates 3+ distinct content formats from a single manual trigger.
* **Operational Accuracy:** Eliminated 100% of manual data-entry errors through automated validation scripts.

---

## 📂 Repository Contents
* **/assets**: `workflow-architecture.png` – A visual mapping of the orchestration layer and node dependencies.
* **/scripts**: `parser.js` – Sample Node.js logic used for multi-platform data transformation and response cleaning.
* **README.md**: Technical documentation and system requirements.

---

## 🚀 Technical Skills Demonstrated
* **Workflow Orchestration:** n8n, Webhooks, API Integration.
* **Development:** JavaScript (Node.js), JSON Schema, Git/GitHub.
* **AI Engineering:** Prompt Engineering, Multi-Agent Chaining, LLM Parameter Tuning.

---

## 👨‍💻 About the Builder
I am an **Automation Architect** and **Data Analyst** based in the **Bay Area**. I specialize in building "high-leverage" systems that turn manual business bottlenecks into reliable, automated infrastructure.

[LinkedIn](https://www.linkedin.com/in/sagarikapatel6/) | [Portfolio Hub](https://SagarikaPatel6.github.io/ai-automation-growth-engine)
