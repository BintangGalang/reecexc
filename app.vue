<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', Arial, sans-serif;
  line-height: 1.6;
}

.app {
  background-color: #FFA500; /* Orange background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Global styles */
h1, h2, h3, p {
  color: white;
  margin: 0 0 1rem 0;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
}

p {
  font-size: 1rem;
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #ffffff;
  color: #FFA500;
}

.btn-primary:hover {
  background-color: #f0f0f0;
}

/* Container for content */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Utility classes */
.text-center {
  text-align: center;
}

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* Basic flexbox utilities */
.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
}
</style>