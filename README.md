# Jobify — Modern Job Application Tracking App

Jobify is a modern, responsive job application tracking platform built with **React + Vite**, styled beautifully with **Tailwind CSS** and **shadcn/ui** components.  
It includes authentication with **Clerk**, smooth routing using **React Router**, and a modular layout system optimized for scalability.

---

## Live Demo  
**Live Link:** https://jobify-ewlk9hafe-shines-projects-ad859a5e.vercel.app/

---

## Screenshot
<img width="1669" height="848" alt="Image" src="https://github.com/user-attachments/assets/6f525430-2031-4394-afa5-b8f945ee8254" />

# React + Vite

npm create vite@latest
gave project name then package name, went with react then javascript and installed all dependencies
npm install tailwindcss @tailwindcss/vite and set it up according to tailwind installation
npx shadcn@latest add button
npm install class-variance-authority clsx tailwind-merge @radix-ui/react-slot lucide-react
npm install tw-animate-css

npx shadcn@latest add accordion
npx shadcn@latest add carousel
npx shadcn@latest add card
npx shadcn@latest add drawer
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add radio-group
npx shadcn@latest add select
npx shadcn@latest add textarea
npm i react-router-dom

created layouts and pages
created router browser with paths and elements with app layout and using outlet to nav

styling app layout

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router = {router} />
    </ThemeProvider>

dark theme applied using this, again from shadcn
clerk, for user auth
npm install @clerk/clerk-react

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
