<template>
  <div class="max-w-md  font-sans border border-gray-200  flex flex-col justify-between rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <NuxtLink :to="`/product/${product.id}`" class="block hover:opacity-90 transition-all ">
        <img :src="product.thumbnail" :alt="`${$t(`products.${product.title}`)} photo`" class="w-full h-auto" />
      </NuxtLink>
      <div class="p-4">
        
        <p class="text-gray-600 text-xs uppercase tracking-wider mb-1">
          {{ product?.category }}
        </p>
        <h3 class="font-bold text-lg mb-1">
          {{ product.title }}
        </h3>
        <p class="text-gray-700 text-sm mb-2">
          {{ product.description }}
        </p>
        <div class="flex items-center mb-4">
          <span class="font-bold text-xl text-orange-500">{{ product?.price }} $</span>
        </div>
        <button
          @click.stop="addToCart(product)"
          class="w-full m-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {{ $t('product.AddToCart') }}
        </button>
      </div>
  </div>
</template>


<script setup>
const cartStore = useCartStore()

const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  }
})

const addToCart = (product) => {
  if (product) {
    cartStore.addToCart(product)
  }
}
</script>
