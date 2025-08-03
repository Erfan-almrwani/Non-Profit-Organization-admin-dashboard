<!-- src/views/admin/DashboardHome.vue -->
<template>
  <div>
    <h1 class="text-2xl text-green-600 font-bold mb-6">نظرة عامة على لوحة التحكم</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8  overflow-x-auto">
      <StatCard 
        title="إجمالي الزوار" 
        value="24.8K" 
        change="+12.4%" 
        icon="users"
      />
      <StatCard 
        title="تقديمات النموذج" 
        value="186" 
        change="+8.2%" 
        icon="inbox"
      />
      <StatCard 
        title="المشاريع النشطة" 
        value="14" 
        change="+2" 
        icon="document"
      />
    </div>

    <div class="bg-white  rounded-lg shadow p-6 mb-6">
      <h2 class="text-xl text-green-600 font-semibold mb-4">النشاط الأخير</h2>
      <ActivityFeed :items="activities" />
    </div>
  </div>
</template>

<script setup>
import StatCard from '@/components/StatCard.vue'
import ActivityFeed from '@/components/ActivityFeed.vue'

const activities = [
  { id: 1, action: 'Updated', item: 'Annual Report', user: 'Erfan', time: '2 hours ago' },
  { id: 2, action: 'Created', item: 'New Event: Fundraiser', user: 'Ahmed', time: '5 hours ago' },
  { id: 3, action: 'Submitted', item: 'Volunteer Form', user: 'Ali', time: '1 day ago' },
]
</script>