<template>
  <div class="max-w-5xl mx-auto py-10 px-4">
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Image -->
      <div>
        <img
          src="/productImage.jpg"
          :alt="$t(`product.${product.name}`)"
          class="rounded shadow w-full object-cover max-h-[500px]"
        />
      </div>

      <div>
        <p class="text-sm text-gray-500 uppercase tracking-wide mb-2">
          {{ $t(`product.${product.category || 'Category'}`) }}
        </p>
        <h1 class="text-3xl font-bold mb-4">
          {{ $t(`product.${product.name}`) }}
        </h1>
        <p class="text-gray-700 mb-6">
          {{ $t(`product.${product.description}`) }}
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
import { useProducts } from '@/composables/useProducts'
import { useCartStore } from '@/stores/cartStore'

const { params } = useRoute()
const products = useProducts()
const product = products.find(p => p.id === +params.id)
const cart = useCartStore()
const addToCart = (product) => cart.addToCart(product)
</script>
