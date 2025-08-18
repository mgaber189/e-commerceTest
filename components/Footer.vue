<template>
  <footer class="bg-gray-50 text-gray-800 border-t border-gray-200">
    <div class="max-w-fit mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div class="flex flex-col items-center md:items-start">
          <div class="flex items-center gap-4 mb-4">
            <div class="bg-white p-2 rounded-lg shadow-sm">

              <img
                :src="personalLogo"
                alt="Mohamed Gaber Logo"
                class="h-10 w-auto"
              />
            </div>
            <div>
              <h2 class="text-xl font-bold text-gray-900">Mohamed El-said Gaber</h2>
              <p class="text-orange-500 text-sm font-medium">Front-End Developer</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm text-center md:text-left max-w-xs">
            Crafting pixel-perfect, responsive web experiences with modern technologies.
          </p>
        </div>
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-gray-900 font-semibold mb-4 flex items-center gap-2">
            <Icon name="mdi:web" class="text-orange-500" />
            Contact
          </h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-3">
              <Icon name="mdi:email" class="text-orange-500" />
              <a
                href="mailto:mg3845617@gmail.com"
                class="hover:text-orange-500 transition-colors"
              >
                mg3845617@gmail.com
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="mdi:phone" class="text-orange-500" />
              <a
                href="tel:+201125992923"
                class="hover:text-orange-500 transition-colors"
              >
                +20 112 599 2923
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-gray-900 font-semibold mb-4 flex items-center gap-2">
            <Icon name="mdi:code-tags" class="text-orange-500" />
            Connect
          </h3>
          <div class="flex gap-5">
            <a
              href="https://linkedin.com/in/mohamed-gaber-ba8312207"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-orange-500 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" />
            </a>
            <a
              href="https://github.com/mgaber189"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-600 hover:text-orange-500 transition-colors text-2xl"
              aria-label="GitHub"
            >
              <Icon name="mdi:github" />
            </a>
          </div>
          <div class="mt-4 text-sm text-gray-500">
            <p>Let's build something amazing together</p>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">
          © 2025 Mohamed El-said Gaber. All rights reserved.
        </p>
        <p class="text-gray-500 text-sm mt-2 md:mt-0">
          Built with Nuxt 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import personalLogo from '~/assets/personalLogo.png'
</script>