<!-- src/App.vue -->
<template>
  <AdminLayout>
  <RouterView />
  </AdminLayout>
  
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue'
import { RouterView } from 'vue-router'
</script>