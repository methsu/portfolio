import React from 'react'

export const projectsData = [
  {
    id: 1,
    title: "Structura - Architecture Collaboration Platform",
    shortDescription: "A full-stack collaborative platform for architecture students and professionals to share knowledge and showcase work.",
    fullDescription: "Developed a comprehensive collaborative platform designed for architecture students and professionals to share knowledge, showcase work, and engage in a unified online community. Features secure OAuth authentication, role-based access control, dynamic project galleries, community forums, learning dashboards, and real-time event calendars with registration capabilities.",
    technologies: ["React", "Redux", "Tailwind CSS", "Flowbite", "Java Spring Boot", "MongoDB"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/methsu/Structura-Frontend",
    demoUrl: "https://structura-demo.netlify.app"
  },
  {
    id: 2,
    title: "HomeMate - AI-Powered Inventory Management",
    shortDescription: "An intelligent inventory management system with AI recommendations for households and small businesses.",
    fullDescription: "Developed a full-stack inventory management application that helps households and small businesses effectively track and manage their assets and supplies. Features real-time inventory tracking, AI-powered recommendations using Google's Gemini API, smart notifications for warranty expirations and low stock levels, and a comprehensive admin dashboard.",
    technologies: ["React.js", "Vite", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Gemini API"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/methsu/HomeMate",
    demoUrl: "https://homemate-demo.netlify.app"
  },
  {
    id: 3,
    title: "Elder Care System - MERN Stack",
    shortDescription: "A comprehensive elderly care management system with role-based dashboards and real-time functionality.",
    fullDescription: "Engineered a full-stack web application for managing elderly care services, employee availability, and resident information in a centralized platform. Features role-based dashboards for Admin, Staff, and Doctors, real-time form validations, secure API endpoints, and scalable MongoDB storage for profiles and health records.",
    technologies: ["React", "Express", "Node.js", "Tailwind CSS", "MongoDB"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/methsu/IT_Project",
    demoUrl: "https://eldercare-demo.netlify.app"
  },
  {
    id: 4,
    title: "SkyCast - Real-Time Weather Application",
    shortDescription: "A sleek and responsive weather forecasting app with geolocation and dynamic visuals.",
    fullDescription: "SkyCast is a modern weather forecasting web application that delivers real-time weather data using the OpenWeather API. Features geolocation-based weather retrieval, manual city search functionality, clean modern UI, and showcases key weather metrics like temperature, humidity, wind speed with dynamic visuals.",
    technologies: ["JavaScript", "React.js", "Tailwind CSS", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/methsu/skycast",
    demoUrl: "https://skycast-demo.netlify.app"
  },
  {
    id: 5,
    title: "Calcify - Smart Calculator Application",
    shortDescription: "A modern calculator app with standard and scientific calculations and responsive design.",
    fullDescription: "Built a modern calculator application capable of performing standard and scientific calculations with real-time input/output rendering. Features responsive minimal UI using Tailwind CSS, keyboard and on-screen button support, input validation and error-checking, and optimized performance using React state management.",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/methsu/calcify",
    demoUrl: "https://calcify-demo.netlify.app"
  },
  {
    id: 6,
    title: "MCP Server - Model Context Protocol",
    shortDescription: "TypeScript-based server for AI agent communication and external tool integration.",
    fullDescription: "Developed a TypeScript-based MCP (Model Context Protocol) server to facilitate structured, real-time communication between AI agents and external tools. Ensures efficient and scalable data exchange with robust API architecture and seamless integration capabilities for modern AI applications.",
    technologies: ["TypeScript", "Node.js", "API"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/methsu/mcp-server",
    demoUrl: "https://mcp-server-demo.netlify.app"
  }
];

export default function ProjectData() {
  return (
    <div>
      ProjectData
    </div>
  )
}
