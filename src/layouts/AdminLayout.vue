<!-- src/layouts/AdminLayout.vue -->
<template>
  
  <div class="flex h-screen bg-gray-50 dark:bg-black">
    <!-- Sidebar -->
    <aside class="w-64 bg-indigo-700 text-white shadow-md">
      <div class="p-4 border-b border-indigo-600">
        <h1 class="text-xl font-bold ">مؤسسة لاجل الجميع</h1>
      </div>
      <nav class="mt-4">
        <ul>
          <li v-for="item in navItems" :key="item.name">
            <RouterLink
              :to="item.path"
              class="flex items-center p-3 hover:bg-indigo-600 transition-colors"
              active-class="bg-indigo-800"
            >
              <component :is="item.icon" class="w-5 h-5 mr-3" />
              <span>{{ item.name }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow-sm p-4 flex justify-between items-center">
        <h2 class="text-lg font-semibold">{{ currentRouteName }}</h2>
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <UserDropdown />
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import {
  ChartBarIcon,
  DocumentTextIcon,
  NewspaperIcon,
  CalendarIcon,
  InboxIcon,
  CogIcon,
  UserGroupIcon,
} from "@heroicons/vue/outline";

import ThemeToggle from "@/components/ThemeToggle.vue";
import UserDropdown from "@/components/UserDropdown.vue";

const route = useRoute();
const currentRouteName = computed(() => route.name);

const navItems = [
  { name: "لوحة التحكم", path: "/admin", icon: ChartBarIcon },
  { name: "المشاريع", path: "/admin/projects", icon: DocumentTextIcon },
  { name: "الاخبار", path: "/admin/news", icon: NewspaperIcon },
  { name: "الفعاليات", path: "/admin/events", icon: CalendarIcon },
  { name: " تقديم النماذج", path: "/admin/submissions", icon: InboxIcon },
  { name: "المستخدمين", path: "/admin/users", icon: UserGroupIcon },
  { name: "الاعدادات", path: "/admin/settings", icon: CogIcon },
];
</script>
