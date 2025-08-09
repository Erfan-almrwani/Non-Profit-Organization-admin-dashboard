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

const isSearchOpen = ref(false)

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

const toggleLang = () => {
  alert('Arabic language support will be added later.')
}
//dark mood
const toggleTheme = () => {
      console.log('Toggle theme clicked!')
  const html = document.documentElement
  const currentTheme = html.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)

  
  // مؤقتاً للتجربة:
  if(newTheme === 'dark') {
    document.body.style.backgroundColor = '#121212'
    document.body.style.color = '#f1f1f1'
  } else {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>
