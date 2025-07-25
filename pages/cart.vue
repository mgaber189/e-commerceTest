<!-- pages/cart.vue -->
<template>
  <div class="container mx-auto px-4 py-8 max-w-6xl min-h-[55vh]">
    <h1 class="text-3xl font-bold mb-8">{{ $t('cart.title') }}</h1>

    <div v-if="items.length === 0" class="text-center text-lg my-12">
      {{ $t('cart.empty') }}
    </div>

    <div v-else>
      <!-- Table -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-3 px-4 text-left border-b">{{ $t('cart.name') }}</th>
              <th class="py-3 px-4 text-right border-b">{{ $t('cart.price') }}</th>
              <th class="py-3 px-4 text-center border-b">{{ $t('cart.quantity') }}</th>
              <th class="py-3 px-4 text-right border-b">{{ $t('cart.subtotal') }}</th>
              <th class="py-3 px-4 text-right border-b">{{ $t('cart.action') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id" class="border-b hover:bg-gray-50">
              <td class="py-4 px-4">
                <div class="flex items-center">
                  <span> {{ $t(`product.${item.name}`) }}</span>
                </div>
              </td>
              <td class="py-4 px-4 text-right">${{ item.price.toFixed(2) }}</td>
              <td class="py-4 px-4 text-center">
                <div class="flex items-center justify-center">
                  <button
                    @click="decreaseQuantity(item.id)"
                    class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span class="mx-3 w-6 text-center">{{ item.quantity }}</span>
                  <button
                    @click="addToCart(item)"
                    class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="py-4 px-4 text-right">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </td>
              <td class="py-4 px-4 text-right">
                <button
                  @click="removeFromCart(item.id)"
                  class="text-red-600 hover:text-red-800"
                >
                  🗑
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Cart actions & coupon -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div class="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <input
            type="text"
            :placeholder="$t('cart.couponPlaceholder')"
            class="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
          />
          <button
            class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium"
          >
            {{ $t('cart.applyCoupon') }}
          </button>
        </div>
      </div>

      <!-- Cart Totals -->
      <div class="bg-gray-50 border rounded p-6 max-w-md ml-auto">
        <h2 class="text-xl font-bold mb-4">{{ $t('cart.cartTotals') }}</h2>
        <div class="border-t my-4"></div>

        <div class="flex justify-between mb-2">
          <span>{{ $t('cart.subtotal') }}</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between mb-2">
          <span>{{ $t('cart.shippingCharge') }}</span>
          <span>${{ shippingCharge.toFixed(2) }}</span>
        </div>

        <div class="border-t my-4"></div>

        <div class="flex justify-between text-lg font-bold mb-6">
          <span>{{ $t('cart.total') }}</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>

        <button
          class="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
        >
          {{ $t('cart.proceed') }}
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const cart = useCartStore()
const { items, totalPrice } = storeToRefs(cart)

const shippingCharge = 30
const subtotal = computed(() => totalPrice.value)
const total = computed(() => subtotal.value + shippingCharge)

const { addToCart, removeFromCart,  decreaseQuantity } = cart
</script>
