// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { reactive } from 'vue';

// إنشاء حالة خارجية قابلة للتعديل
const adminData = reactive({
  projects: [
    {
      id: 1,
      title: "دعم اطفال المدارس",
      status: "متوقف",
      date: "2025-06-01",
    },
    {
      id: 2,
      title: "دعم الصيادين",
      status: "نشط",
      date: "2025-05-15",
    },
  ],
  news: [
    {
      id: 1,
      title: "ورشة عمل لتمكين المرأة الريفية",
      category: "تحديث",
      date: "2025-06-10",
    },
    {
      id: 2,
      title: " مشروع الريف الجديد",
      category: "اعلان",
      date: "2025-05-28",
    },
  ],
  events: [
    {
      id: 1,
      name: "حفل جمع التبرعات",
      location: "عدن",
      date: "2024-07-15",
    },
    {
      id: 2,
      name: "تدريب المتطوعين",
      location: "تعز",
      date: "2024-06-20",
    },
  ],
  users: [
    {
      id: 1,
      name: "مدير النظام",
      email: "admin@forall.org",
      role: "المسؤول",
    },
    {
      id: 2,
      name: "محرر المحتوى",
      email: "editor@forall.org",
      role: "محرر",
    },
  ]
});

const routes = [
  {
    path: "/admin",
    name: "لوحة التحكم",
    component: () => import("@/views/admin/DashboardHome.vue"),
  },
  {
    path: "/admin/projects",
    name: "المشاريع",
    component: () => import("@/views/admin/CRUDView.vue"),
    props: {
      resourceName: "مشروع",
      headers: ["ID", "العنوان", "الحالة", "التاريخ"],
      items: adminData.projects,
      fields: [
        { name: "title", label: "عنوان المشروع" },
        { name: "status", label: "الحالة" },
      ],
    },
  },
  {
    path: "/admin/news",
    name: "الاخبار",
    component: () => import("@/views/admin/CRUDView.vue"),
    props: {
      resourceName: "اخبار",
      headers: ["ID", "العنوان", "الفئة", "التاريخ"],
      items: adminData.news,
      fields: [
        { name: "title", label: "العنوان " },
        { name: "category", label: "الفئة" },
      ],
    },
  },
  {
    path: "/admin/events",
    name: "الفعاليات",
    component: () => import("@/views/admin/CRUDView.vue"),
    props: {
      resourceName: "فعالية",
      headers: ["ID", "الاسم", "الموقع", "التاريخ"],
      items: adminData.events,
      fields: [
        { name: "name", label: "اسم فعالية" },
        { name: "location", label: "الموقع" },
        { name: "date", label: "تاريخ الفعالية", type: "date" },
      ],
    },
  },
  {
    path: "/admin/submissions",
    name: "التقديم",
    component: () => import("@/views/admin/FormSubmissions.vue"),
  },
  {
    path: "/admin/users",
    name: "المستخدمين",
    component: () => import("@/views/admin/CRUDView.vue"),
    props: {
      resourceName: "مستخدم",
      headers: ["ID", "الاسم", "البريد الإلكتروني", "الدور"],
      items: adminData.users,
      fields: [
        { name: "name", label: "الاسم الكامل" },
        { name: "email", label: "البريد الإلكتروني", type: "email" },
        {
          name: "role",
          label: "الدور",
          type: "select",
          options: ["المسؤول", "محرر", "مشاهد"],
        },
      ],
    },
  },
  {
    path: "/admin/settings",
    name: "الاعدادات",
    component: () => import("@/views/admin/Settings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;