# Ethan Franks' Personal Profile Website

## Overview

This is a single-page application built with Vite, TypeScript, and Preact. The website is designed to highlight [Ethan Franks](https://www.linkedin.com/in/jethanfranks/)' professional experience, education, skills, community contributions, and personal projects.

## Features

- **Vite** for fast development and optimized builds.
- **TypeScript** for type-safe JavaScript.
- **Preact** for a lightweight and efficient UI.
- **Tailwind CSS** for rapid and customizable styling, enabling a utility-first approach to design.
- Responsive design to ensure compatibility across various devices.
- Scrollytelling for an engaging user experience.
- Minimal data fetching to optimize performance and load speed.

## Local Development

To set up the project locally, follow these steps:

1. Install the project dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173` to view the website.

## Build & Deploy

The deployment strategy involves using **Docker** for containerization to ensure consistent environments and **[Fly.io](https://fly.io/)** for deploying and managing the application in the cloud.

## CI/CD

**GitHub Actions** will be used to automate the Continuous Integration and Continuous Deployment (CI/CD) pipeline, streamlining the process from code changes to production deployment.
