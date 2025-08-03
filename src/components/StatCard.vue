<!-- src/components/StatCard.vue -->
<template>
  <div class="bg-white rounded-lg shadow p-6">
    <div class="flex items-center">
      <div class="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
        <component :is="iconComponent" class="w-6 h-6" />
      </div>
      <div>
        <p class="text-gray-500 text-sm">{{ title }}</p>
        <h3 class="text-2xl font-bold">{{ value }}</h3>
      </div>
    </div>
    <div class="mt-4">
      <span :class="change.includes('+') ? 'text-green-500' : 'text-red-500'">
        {{ change }}
      </span>
      <span class="text-gray-500 text-sm ml-2">from last month</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  UserIcon, 
  InboxIcon, 
  DocumentTextIcon 
} from '@heroicons/vue/outline'

const props = defineProps({
  title: String,
  value: [String, Number],
  change: String,
  icon: String
})

const iconComponent = computed(() => {
  return {
    'users': UserIcon,
    'inbox': InboxIcon,
    'document': DocumentTextIcon
  }[props.icon]
})
</script>