<!-- pages/error.vue -->
<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
    <h1 class="text-6xl font-bold text-orange-500 mb-4">404</h1>
    <p class="text-xl text-gray-700 mb-6">
      {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
    </p>
    <NuxtLink
      to="/"
      class="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
    >
      Go to Homepage
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>
