<template>
  <div class="p-6 grid  justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import { useProducts } from '@/composables/useProducts'

const products = useProducts()
</script>
