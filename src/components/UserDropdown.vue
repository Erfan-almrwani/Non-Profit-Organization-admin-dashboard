<!-- src/components/UserDropdown.vue -->
<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 focus:outline-none"
    >
      <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
        <UserIcon class="w-5 h-5 text-indigo-600" />
      </div>
      <span class="text-gray-700">الادمن</span>
      <ChevronDownIcon class="w-4 h-4 text-gray-500" />
    </button>

    <div 
      v-show="isOpen"
      @click="isOpen = false"
      class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
    >
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">بروفايل</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">اعدادات</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> تسجيل الخروج</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UserIcon, ChevronDownIcon } from '@heroicons/vue/outline'

const isOpen = ref(false)
</script>