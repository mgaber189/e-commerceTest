<template>
  <div class="flex items-center justify-center bg-gray-50 py-12 px-4 min-h-screen">
    <div class="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg p-8 space-y-6">
      <h2 class="text-2xl font-bold text-center text-orange-500">
        {{ $t('login.title') }}
      </h2>

      <form @submit.prevent="onSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="email">
            {{ $t('login.email') }}
          </label>
          <input
            v-model="email"
            id="email"
            type="email"
            :placeholder="$t('login.emailPlaceholder')"
            required
            class="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <p v-if="emailError && email !== ''" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="password">
            {{ $t('login.password') }}
          </label>
          <input
            v-model="password"
            id="password"
            type="password"
            :placeholder="$t('login.passwordPlaceholder')"
            required
            class="w-full px-4 py-2 border rounded focus:outline-none"
          />
          <p v-if="passwordError && password !== ''" class="text-red-500 text-sm mt-1">{{ passwordError }} </p>
        </div>

        <button
          type="submit"
          class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {{ $t('login.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emailError = computed(() => {
  if (!email.value) return t('login.errors.requiredEmail')
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email.value)
    ? ''
    : t('login.errors.invalidEmail')
})

const passwordError = computed(() => {
  if (!password.value) return t('login.errors.requiredPassword')
  return password.value.length >= 6
    ? ''
    : t('login.errors.shortPassword')
})

function onSubmit() {
  if (!emailError.value && !passwordError.value) {
    const formData = new FormData()
    formData.append('email', email.value)
    formData.append('password', password.value)

    console.log('FormData submitted:', [...formData.entries()])
     navigateTo('/')
  } else {
    console.warn('Form has validation errors')
  }
}
</script>
