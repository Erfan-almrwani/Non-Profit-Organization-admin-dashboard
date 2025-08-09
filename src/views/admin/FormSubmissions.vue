<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-indigo-600">تقديم النموذج</h1>

    <div class="mb-6 flex space-x-4">
      <button
        v-for="type in formTypes"
        :key="type"
        @click="activeType = type"
        :class="{
          'bg-indigo-600 text-white': activeType === type,
          'bg-white text-gray-700': activeType !== type,
        }"
        class="px-4 py-2 rounded-lg shadow transition-colors"
      >
        {{ type }}
      </button>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="header in headers"
              :key="header"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ header }}
            </th>
            <th class="px-6 py-3">الحدث</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="submission in filteredSubmissions" :key="submission.id">
            <td
              v-for="(value, key) in submission"
              :key="key"
              class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              <template v-if="key === 'date'">
                {{ new Date(value).toLocaleString() }}
              </template>
              <template v-else>
                {{ value }}
              </template>
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
            >
              <button
                @click="viewDetails(submission)"
                class="text-indigo-600 hover:text-indigo-900"
              >
                عرض التفاصيل
              </button>
              <button
                @click="deleteSubmission(submission.id)"
                class="text-red-600 hover:text-red-900 mr-3"
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- نموذج عرض التفاصيل -->
    <Modal :isOpen="showDetailModal" @close="showDetailModal = false">
      <template #title>تفاصيل التقديم</template>
      <div v-if="selectedSubmission" class="space-y-4">
        <div v-for="(value, key) in selectedSubmission" :key="key">
          <label class="block text-sm font-medium text-gray-700 capitalize">{{ key }}</label>
          <p class="mt-1 p-2 bg-gray-50 rounded-md">{{ value }}</p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Modal from '@/components/Modal.vue'

const formTypes = ["تواصل", "متطوع", "متبرع"];
const activeType = ref("تواصل");

const headers = ["ID", "الاسم", "الايميل", "النوع", "التاريخ", "الرسالة"];

const submissions = ref([
  {
    id: 1,
    name: "عرفان محمد",
    email: "Erfan@gmail.com",
    type: "تواصل",
    date: "2025-06-15",
    message: "ماهي مشاريعكم الجديدة",
  },
  {
    id: 2,
    name: "علي",
    email: "ali@gmail.com",
    type: "متطوع",
    date: "2025-01-01",
    skills: "Teaching, Cooking",
    message: "أرغب في التطوع لديكم"
  },
  {
    id: 3,
    name: "احمد",
    email: "ahmed@gmail.com",
    type: "متبرع",
    date: "2025-01-01",
    amount: "500 ريال",
    message: "تبرع شهري"
  }
]);

const filteredSubmissions = computed(() => {
  return submissions.value.filter((sub) => sub.type === activeType.value);
});

const showDetailModal = ref(false);
const selectedSubmission = ref(null);

const viewDetails = (submission) => {
  selectedSubmission.value = submission;
  showDetailModal.value = true;
};

const deleteSubmission = (id) => {
  if (confirm('هل أنت متأكد من حذف هذا التقديم؟')) {
    submissions.value = submissions.value.filter(sub => sub.id !== id);
  }
};
</script>