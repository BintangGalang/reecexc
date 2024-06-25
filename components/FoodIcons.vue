<template>
    <div class="food-icons">
      <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <!-- Cupcake icon -->
        <path d="M12 3C9.79 3 8 4.79 8 7v2H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2v2h-4V7c0-1.1.9-2 2-2zm-3 6h6c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1z" fill="white"/>
      </svg>
  
      <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <!-- Burger icon -->
        <path d="M2 16h20v2H2v-2zm0-5h20v2H2v-2zm0-5h20v2H2V6z" fill="white"/>
      </svg>
  
      <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <!-- Pizza slice icon -->
        <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zm0 15.92L5.51 6.36C7.32 4.85 9.62 4 12 4s4.68.85 6.49 2.36L12 17.92zM9 5.5c-.83 0-1.5.67-1.5 1.5S8.17 8.5 9 8.5s1.5-.67 1.5-1.5S9.82 5.5 9 5.5zm1.5 7.5c0 .83.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5-1.5.67-1.5 1.5z" fill="white"/>
      </svg>
  
      <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <!-- Noodles icon -->
        <path d="M19 3H5v2h14V3zm0 4H5v2h14V7zm0 4H5v2h14v-2zm-7 4H5v6h7v-6zm8 1l-4 4 4 4 1.4-1.4-2.6-2.6 2.6-2.6L20 16z" fill="white"/>
      </svg>
    </div>
  </template>
  
  <style scoped>
  .food-icons {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
  }
  
  .icon {
    width: 48px;
    height: 48px;
    fill: white;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  .icon:hover {
    opacity: 1;
  }
  </style>