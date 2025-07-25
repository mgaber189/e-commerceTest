<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
</script>

<template>
  <div :dir="dir">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
