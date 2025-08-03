<!-- src/components/Modal.vue -->
<template>
  <transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- الخلفية المعتمة -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75" @click="close"></div>
        </div>

        <!-- محتوى المودال -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <!-- رأس المودال -->
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    <slot name="title"></slot>
                  </h3>
                  <button @click="close" class="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <span class="sr-only">إغلاق</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <!-- محتوى المودال -->
                <div class="mt-2">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
          
          <!-- أزرار المودال -->
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>