<!-- src/components/ThemeToggle.vue -->
<template>
  <button 
    @click="toggleTheme"
    class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
    :class="{'bg-indigo-600': darkMode}"
  >
    <span 
      class="inline-block h-4 w-4 transform bg-white rounded-full transition"
      :class="{'translate-x-6': darkMode, 'translate-x-1': !darkMode}"
    />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const darkMode = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  darkMode.value = savedTheme === 'dark' || 
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  applyTheme()
})

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  applyTheme()
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
}

const applyTheme = () => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>