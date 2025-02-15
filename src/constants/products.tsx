import b1 from "public/images/b1.png";
import b2 from "public/images/b2.png";
import b3 from "public/images/b3.png";
import b4 from "public/images/b4.png";
import b5 from "public/images/b5.png";
import b6 from "public/images/b6.png";
import b7 from "public/images/b7.png";
import b8 from "public/images/b8.png";
import b9 from "public/images/b9.png";
import b10 from "public/images/b10.png";
import b11 from "public/images/b11.png";
import b12 from "public/images/b12.png";
import b13 from "public/images/b13.png";
import c1 from "public/images/c1.png";
import c2 from "public/images/c2.png";
import c11 from "public/images/c11.png";
import c3 from "public/images/c3.png";
import c44 from "public/images/c44.png";


export const products = [
  {
    href: "",
    title: "Athena",
    description:
      "Athena is an AI-driven marketing and automation platform integrated with Google APIs. It offers CRM, stock analysis, AI marketer, automation rules, and a dynamic dashboard powered by a Django backend.",
    thumbnail: c1,
    images: [c1],
    stack: ["React.js", "Django", "Material UI", "Google APIs", "MongoDB"],
    slug: "athena",
    content: (
      <div>
        <p>
          Athena is a powerful AI-powered platform designed to optimize digital advertising, automate marketing strategies, and enhance data-driven decision-making. Built using React.js for the frontend and Django for the backend, it integrates seamlessly with Google APIs to provide real-time insights and automation.
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>CRM:</strong> Manage customer interactions, track leads, and automate engagement.</li>
            <li><strong>Stocks & Financial Insights:</strong> Monitor market trends and receive AI-driven financial recommendations.</li>
            <li><strong>AI Marketer:</strong> Intelligent campaign recommendations, wasted clicks detection, AI bidding strategies, and more.</li>
            <li><strong>Automation Rules:</strong> Execute ad optimizations such as Mark High-CTR Ads, Pause Losing Ads, and Budget Recommendations.</li>
            <li><strong>Advanced Ad Tactics:</strong> SURF, STOP LOSS, SUNSETTING, and REVIVE to enhance ad performance.</li>
            <li><strong>Comprehensive Dashboard:</strong> Real-time analytics, campaign tracking, and performance metrics visualization.</li>
          </ul>
        </p>
        <p>
          Athena is built for scalability, allowing marketing teams and agencies to automate and optimize their campaigns effortlessly while maximizing ROI.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "PR Task Hub",
    description:
      "A team-based task management platform with RBAC, sequential and custom tasks, and a full task history log. Designed for streamlined collaboration across Budget, Content, Production, Editors, and Publishing teams.",
    thumbnail: c11,
    images: [c11],
    stack: ["React.js", "Django", "Material UI", "Redux", "Sqlite"],
    slug: "task-management",
    content: (
      <div>
        <p>
          The Task Management System is a robust, team-oriented platform that enables efficient workflow management across multiple departments. With Role-Based Access Control (RBAC), teams can manage tasks in a structured and secure manner.
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Team-Based Task Management:</strong> Five dedicated teams (Budget, Content, Production, Editors, Publishing) with assigned roles and permissions.</li>
            <li><strong>Sequential Tasks:</strong> Tasks progress through predefined stages to ensure smooth workflow execution.</li>
            <li><strong>Custom Tasks:</strong> Users can create custom task flows suited to their specific needs.</li>
            <li><strong>RBAC (Role-Based Access Control):</strong> Fine-grained permissions for users based on their team and role.</li>
            <li><strong>Task History & Audit Logs:</strong> Complete visibility into task updates, status changes, and team activities.</li>
          </ul>
        </p>
        <p>
          This system enhances collaboration by ensuring structured workflows, clear role delegation, and efficient task tracking, making it an essential tool for teams handling content production and publishing.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Asset - IT Connect",
    description:
      "A comprehensive asset management platform to track and manage hoardings, outlets, and showrooms, providing detailed asset insights and real-time updates.",
    thumbnail: c2,
    images: [c2, c3,],
    stack: ["React.js", "Django", "Material UI", "Redux", "Sqlite"],
    slug: "asset-management",
    content: (
      <div>
        <p>
          The Asset Management System is designed to help businesses efficiently manage and monitor their physical assets, including hoardings, outlets, and showrooms. The system provides real-time tracking, detailed records, and streamlined asset allocation.
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Hoarding Management:</strong> Track locations, rental details, availability, and contract durations.</li>
            <li><strong>Outlets & Showroom Tracking:</strong> Maintain a database of outlet locations, operational details, and ownership status.</li>
            <li><strong>Real-Time Asset Monitoring:</strong> Stay updated on asset status, maintenance schedules, and utilization reports.</li>
            <li><strong>Detailed Asset Insights:</strong> Generate reports and analytics on asset performance and allocation.</li>
            <li><strong>Centralized Data Storage:</strong> All asset-related information is stored securely, accessible to authorized personnel.</li>
          </ul>
        </p>
        <p>
          The system ensures transparency and efficiency in asset management, making it an essential tool for businesses with multiple physical locations and advertising assets.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Expense Tracker",
    description:
      "A financial tracking system to manage Release Orders, Purchase Orders, and Invoices efficiently with real-time expense monitoring.",
    thumbnail: c44,
    images: [c44],
    stack: ["React.js", "Django", "Material UI", "Sqlite"],
    slug: "expense-tracker",
    content: (
      <div>
        <p>
          The Expense Tracker is a financial management system that helps businesses track, manage, and analyze expenses efficiently. It provides seamless handling of Release Orders, Purchase Orders, and Invoices, ensuring accurate financial oversight.
        </p>
        <p>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Release Order Management:</strong> Track and manage financial commitments before purchase.</li>
            <li><strong>Purchase Order Tracking:</strong> Create, approve, and monitor purchase requests.</li>
            <li><strong>Invoice Management:</strong> Generate, store, and process invoices with payment status updates.</li>
            <li><strong>Real-Time Expense Monitoring:</strong> View categorized expenses and generate financial reports.</li>

          </ul>
        </p>
        <p>
          The Expense Tracker simplifies financial operations, enhances budget control, and ensures compliance with financial policies, making it an essential tool for businesses managing multiple expenses.
        </p>
      </div>
    ),
  },




  {
    href: "https://poorvikasherloc.netlify.app/",
    title: "Poorvika Store Locator",
    description:
      "This is a store locator for the Poorvika brand. It includes location photos, directions, reviews, and sentiment analysis.",
    thumbnail: b1,
    images: [b1],
    stack: ["Reactjs", "Material UI"],
    slug: "store-locator",
   
  },
  {
    href: "https://precium.netlify.app/",
    title: "Precium Web Page",
    description:
      "Developed a website with an interactive chatbot for instant assistance. The chatbot understand and respond to user inquiries and browsing experience.",
    thumbnail: b2,
    images: [b2],
    stack: ["Reactjs", "Material UI", "Html", "css"],
    slug: "precium",
  },
  {
    href: "https://prceleb.netlify.app/",
    title: "PR Celebration",
    description:
      "Celebration site for men's day.it's contains spin wheel and scratchcard.",
    thumbnail: b12,
    images: [b12],
    stack: ["Reactjs", "Material UI", "Html", "css"],
    slug: "pr-celeb",
  },
  {
    href: "https://prheroes45.netlify.app/",
    title: "PR Team Hub",
    description:
      "Team site for celebrating our heros.",
    thumbnail: b13,
    images: [b13],
    stack: ["Reactjs", "Tailwindcss"],
    slug: "prhub",
  },
  {
    href: "https://precium-n8n.netlify.app/",
    title: "n8n Clone",
    description:
      "Replicated the n8n platform's webpage, offering users a familiar interface and seamless navigation for demonstration or testing.",
    thumbnail: b3,
    images: [b3],
    stack: ["Reactjs", "Material UI", "Html", "css"],
    slug: "n8nclone",
  },
  {
    href: "https://preciumquest.netlify.app/",
    title: "Question Generator",
    description:
      "AI-driven website that automatically generates questions from user-provided text. Simplifying quiz and study material creation for educators and learners.",
    thumbnail: b4,
    images: [b4],
    stack: ["Reactjs", "Material UI",],
    slug: "qg",
  },
  {
    href: "https://poorvika-landingpage-sample.netlify.app/",
    title: "Poorvika Sample old landing page",
    description:
      "Created an attractive landing page for an online store, highlighting products and promotions. With user-friendly design",
    thumbnail: b5,
    images: [b5],
    stack: ["Reactjs", "Material UI", "Html", "css"],
    slug: "poorvika-sample",
  },
  {
    href: "https://techconnect.netlify.app/",
    title: "91Mobiles Clone",
    description:
      "Created a clone of the 91 Mobiles website, offering users a familiar interface and navigation experience.",
    thumbnail: b10,
    images: [b10],
    stack: ["Reactjs", "Material UI", "Html", "css"],
    slug: "91mobiles",
  },
  {
    href: "https://annaianbalayaa.netlify.app/",
    title: "Annai Anbalayaa",
    description:
      "Developed a website for Annai Anbalaya Trust. Visitors can learn about their services, events, and ways to support the cause easily.",
    thumbnail: b6,
    images: [b6],
    stack: ["Reactjs", "Material UI",],
    slug: "aat",
  },
  {
    href: "https://netlify-pricing.netlify.app/",
    title: "Netlify Pricing Clone",
    description:
      "Developed a clone of Netlify's pricing page, allowing users to explore pricing plans and features easily.",
    thumbnail: b7,
    images: [b7],
    stack: ["Reactjs", "Material UI",],
    slug: "netlify-pricing",
  },
  {
    href: "https://reactjs-examples.netlify.app/",
    title: "React js Examples",
    description:
      "Created a webpage with simple React JS examples for beginners to learn easily.",
    thumbnail: b8,
    images: [b8],
    stack: ["Reactjs", "Material UI",],
    slug: "react-js",
  },
  {
    href: "",
    title: "YottaBots",
    description:
      "Created a webpage For collections of AI Bots",
    thumbnail: b3,
    images: [b3],
    stack: ["Reactjs", "Material UI", "AWS", "Render", "Postgres", "DynamoDB"],
    slug: "yottabots",
  },
  {
    href: "https://futuresmartai.netlify.app/",
    title: "FutureSmart AI",
    description:
      "Created a clone of the FutureSmart AI",
    thumbnail: b9,
    images: [b9],
    stack: ["Reactjs", "Material UI"],
    slug: "fsmart",
  },
  {
    href: "https://poorvikafinder.netlify.app/",
    title: "Poorvika Showroom Sample",
    description:
      "This is a store locator for the Poorvika brand. It includes location photos, directions, reviews, and sentiment analysis.",
    thumbnail: b11,
    images: [b11],
    stack: ["Reactjs", "Material UI"],
    slug: "pshowroom",
  },


];
