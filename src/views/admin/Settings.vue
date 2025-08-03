<!-- src/views/admin/Settings.vue -->
<template>
  <div>
    <h1 class="text-2xl text-black font-bold mb-6">اعدادات النظام </h1>

    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">المظهر</h2>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-700">الوضع الداكن</p>
          <p class="text-gray-500 text-sm">التبديل بين المظهر الفاتح والداكن</p>
        </div>
        <ThemeToggle />
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">ادارة البيانات</h2>
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-700">مسح ذاكرة التخزين المؤقت</p>
            <p class="text-gray-500 text-sm">إزالة الملفات والبيانات المؤقتة</p>
          </div>
          <button 
            @click="clearCache"
            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            حذف
          </button>
        </div>
        
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-700">إعادة تعيين بيانات العرض التوضيحي</p>
            <p class="text-gray-500 text-sm">استعادة حالة العرض التوضيحي الأولية</p>
          </div>
          <button 
            @click="resetData"
            class="bg-red-100 text-red-700 px-4 py-2 rounded-md hover:bg-red-200"
          >
           إعادة الضبط 
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Backup & Export</h2>
      <div class="flex space-x-4">
        <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Export Content
        </button>
        <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
          Download Backup
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue'

const clearCache = () => {
  if (confirm('Clear all cached data?')) {
    console.log('Cache cleared')
  }
}

const resetData = () => {
  if (confirm('WARNING: This will reset all data to demo state. Continue?')) {
    console.log('Data reset')
  }
}
</script>