<template>
  <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
    <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">خلاصة النشاط</h2>
    <ul class="space-y-3">
      <li v-for="(activity, index) in activities" :key="index" class="flex items-start">
        <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
        <div>
          <p class="text-sm text-gray-700 dark:text-gray-300">{{ activity.message }}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ activity.timestamp }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ActivityFeed',
  data() {
    return {
      activities: [
        { message: 'مستخدم جديد مسجل: عرفان محمد', timestamp: '5 minutes ago' },
        { message: 'مشروع "ورشة عمل لتمكين المرأة الريفية" محدث', timestamp: '20 minutes ago' },
        { message: 'تم تسجيل دخول المسؤول', timestamp: '1 hour ago' },
        { message: 'مشروع الريف الجديد', timestamp: '3 hours ago' }
      ]
    }
  }
}
</script>

<style scoped>
/* يمكنك إضافة تنسيقات مخصصة هنا إن احتجت */
</style>
