<template>
  <nav class="bg-white shadow-sm sticky top-0 z-10 mb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-3xl italic font-bold text-orange-500">
           {{ $t('products') }}
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              to="/"
              class="border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium"
            >
             {{ $t('shop') }}
            </NuxtLink>
          </div>
          <div class="relative ml-4">
            <button 
              @click="toggleLanguageDropdown"
              class="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span class="ml-1">{{ currentLanguage.toUpperCase() }}</span>
            </button>
            <div 
              v-if="showLanguageDropdown"
              class="origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <button
                  v-for="lang in availableLanguages"
                  :key="lang"
                  @click="switchLanguage(lang)"
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  :class="{ 'bg-gray-100': currentLanguage === lang }"
                >
                  {{ lang.toUpperCase() }}
                </button>
              </div>
            </div>
          </div>
          <div class="ml-4 flex items-center">
            <NuxtLink to="/cart" class="p-1 rounded-full text-gray-400 hover:text-gray-500 relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m6-9v9m5-21H6" />
              </svg>

              <span
                v-if="cartItemCount > 0"
                class="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {{ cartItemCount }}
              </span>
            </NuxtLink>
          </div>
      <NuxtLink
        to="/login"
        class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors mx-3"
      >
        {{ $t('loginButton') }}
      </NuxtLink>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

const cart = useCartStore()
const { totalItems: cartItemCount } = storeToRefs(cart)

const { locale } = useI18n()

const showLanguageDropdown = ref(false)
const currentLanguage = ref('en') // default language
const availableLanguages = ['en', 'ar']

const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
}

const switchLanguage = (lang) => {
  currentLanguage.value = lang
  locale.value = lang
  showLanguageDropdown.value = false
  localStorage.setItem('app-language', lang)
}
onMounted(() => {
  const savedLang = localStorage.getItem('app-language')
  if (savedLang && availableLanguages.includes(savedLang)) {
    currentLanguage.value = savedLang
    locale.value = savedLang
  }
})
</script>
