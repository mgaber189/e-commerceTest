<template>
  <div class="w-full flex flex-wrap justify-center gap-3 mb-6">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="selectedCategory = cat"
      class="px-4 py-2 rounded-full border transition-all shadow-sm"
      :class="[
        selectedCategory === cat
          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      ]"
    >
      {{ cat }}
    </button>
  </div>

  <div class="p-6 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const { data } = await useFetch("https://dummyjson.com/products");
const products = ref(data.value.products);

const categories = ["All", ...new Set(products.value.map((p) => p.category))];

const selectedCategory = ref("All");

const filteredProducts = computed(() =>
  selectedCategory.value === "All"
    ? products.value
    : products.value.filter((p) => p.category === selectedCategory.value)
);
useHead({
  title: "Products | My Shop",
  meta: [
    { name: "description", content: "Browse our latest products across all categories." },
    { property: "og:title", content: "Products" },
    { property: "og:description", content: "Browse our latest products across all categories." },
    { property: "og:type", content: "website" },
  ],
});
</script>
