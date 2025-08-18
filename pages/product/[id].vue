<template>
  <div class="max-w-5xl mx-auto py-10 px-4">
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          :src="product?.thumbnail"
          :alt="product.title"
          class="rounded shadow w-full object-cover max-h-[500px]"
        />
      </div>

      <div>
        <p class="text-sm text-gray-500 uppercase tracking-wide mb-2">
          {{ product.category }}
        </p>
        <h1 class="text-3xl font-bold mb-4">
          {{ product.title}}
        </h1>
        <p class="text-gray-700 mb-6">
          {{product.description}}
        </p>
        <div class="flex items-center gap-4 mb-6">
          <span class="text-2xl font-semibold text-orange-600">
            ${{ product.price }}
          </span>
        </div>
        <button
          @click="addToCart(product)"
          class="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
        >
          {{ $t('product.AddToCart') }}
        </button>
      </div>
    </div>

    <div v-else class="text-center py-20 text-gray-600">
      Loading product...
    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

import { ref } from "vue";
const { params } = useRoute()

const { data } = await useFetch(`https://dummyjson.com/products/${params?.id}`);
console.log(data)
const product = ref(data.value);

const cart = useCartStore()
const addToCart = (product) => cart.addToCart(product)

if (product.value) {
  useHead({
    title: `${product.value.title} | My Shop`,
    meta: [
      { name: "description", content: product.value.description },
      { property: "og:title", content: product.value.title },
      { property: "og:description", content: product.value.description },
      { property: "og:image", content: product.value.thumbnail },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: product.value.title,
          image: [product.value.thumbnail],
          description: product.value.description,
          sku: product.value.id,
          category: product.value.category,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: product.value.price,
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  });
}
</script>
