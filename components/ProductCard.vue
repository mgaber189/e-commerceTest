<template>
  <div class="max-w-sm font-sans border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between">
    <NuxtLink :to="`/product/${product.id}`" class="block hover:opacity-90 transition-all">
      <div>
        <img src="/productImage.jpg" :alt="`${$t(`products.${product.name}`)} photo`" class="w-full h-auto" />
      </div>
      <p class="text-gray-600 text-xs uppercase tracking-wider mb-1">
        {{ product?.category }}
      </p>
      <h3 class="font-bold text-lg mb-1">
        {{ $t(`product.${product.name}`) }}
      </h3>
      <p class="text-gray-700 text-sm mb-2">
        {{ $t(`product.${product.description}`) }}
      </p>
      <div class="flex items-center mb-4">
        <span class="font-bold text-xl text-orange-500">{{ product?.price }} $</span>
      </div>
    </NuxtLink>
    <button
      @click.stop="addToCart(product)"
      class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      {{ $t('product.AddToCart') }}
    </button>
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
