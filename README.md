# Group Project with Backpack

This is a Next.js project bootstrapped with create-next-app, developed collaboratively as a group project with **Backpack**. The project is styled using **Tailwind CSS**.


## Getting Started


## 1. Install Dependencies

To install all required dependencies for this project, including EmailJS, React CountUp, and Animate.css, run the following command:

```bash
npm install
```
This will install everything listed in the package.json file, including:

* @emailjs/browser – for sending emails

* react-countup – for animated number counting

* animate.css – for CSS animations

## 2. If the Dependencies Are Missing  
In case you are missing EmailJS, React CountUp, or Animate.css in your project, you can manually install them by running the following commands:
```bash
npm install @emailjs/browser
npm install react-countup
npm install animate.css
```
After running the above commands, the missing dependencies will be installed.

## 3. Run the Development Server
After installing all dependencies, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 in your browser to view the application.


## Project Structure
You can start editing the project by modifying:
```bash
app/page.js
```



This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features
* Next.js app setup with create-next-app

* Font optimization using next/font with Geist

* Email handling via EmailJS

* Animated counters using react-countup

* Smooth CSS animations with animate.css


## Automation & Accessibility Testing

We’ve integrated Cypress for end-to-end testing, with a focus on accessibility using the cypress-axe plugin. This ensures that our application remains inclusive and compliant with accessibility standards.
**To Set Up and Run Accessibility Tests:**

**1.** Install cypress-axe as a dev dependency:
```bash
npm install --save-dev cypress-axe

```
**2.** Import cypress-axe in your Cypress support file (e.g., cypress/support/e2e.js):
```bash
import 'cypress-axe';
```
**3.** Run the test suite:
```bash
npx cypress run
```

This setup enables the use of cy.injectAxe() and cy.checkA11y() in your tests, helping identify accessibility issues automatically.

## Live Demo

Check out the live version of the project here:
👉 https://backpack-studios.vercel.app

## Learn More
Want to explore more about Next.js? Check out these helpful resources:

* [Next.js Documentation](https://nextjs.org/docs) – Full details on features, configuration, and APIs

* [Learn Next.js](https://nextjs.org/learn)– A free, interactive tutorial for beginners

* [Next.js GitHub Repository](https://github.com/vercel/next.js) – Share feedback, contribute, or browse the source code

## Deployment
The recommended way to deploy this application is through [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the platform created by the team behind Next.js. It offers seamless integration, zero-config deployments, and optimized performance for Next.js projects.  


