<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-indigo-600"> ادارة ال{{ resourceName }}</h1>
      <button 
        @click="openCreateModal"
        class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        إضافة {{ resourceName }} 
      </button>
    </div>

    <!-- جدول البيانات -->
    <div class="bg-white rounded-lg shadow overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-700">
          <tr>
            <th v-for="header in headers" :key="header" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ header }}
            </th>
            <th class="px-6 py-3 text-right">الإجراءات</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in items" :key="item.id">
            <td v-for="(value, key) in item" :key="key" class="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
              {{ value }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="editItem(item)" class="text-indigo-600 hover:text-indigo-900 ml-3">تعديل</button>
              <button @click="deleteItem(item.id)" class="text-red-600 hover:text-red-900">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- مودال الإضافة/التعديل -->
    <Modal :isOpen="showModal" @close="showModal = false">
      <template #title>
        {{ editingItem ? `تعديل ${resourceName}` : `إضافة ${resourceName} جديد` }}
      </template>
      
      <div class="space-y-4">
        <div v-for="field in fields" :key="field.name">
          <label class="block text-sm font-medium text-gray-700 text-right">{{ field.label }}</label>
          <input 
            v-if="field.type !== 'select'"
            v-model="formData[field.name]"
            :type="field.type || 'text'"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
          >
          <select
            v-else
            v-model="formData[field.name]"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-right"
          >
            <option v-for="option in field.options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      
      <template #actions>
        <button 
          @click="saveItem"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          حفظ
        </button>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Modal from '@/components/Modal.vue'

const props = defineProps({
  resourceName: String,
  headers: Array,
  items: Array,
  fields: Array
})

const emit = defineEmits(['update:items'])

const showModal = ref(false)
const editingItem = ref(null)
const formData = reactive({})

const openCreateModal = () => {
  resetForm()
  showModal.value = true
}

const editItem = (item) => {
  Object.assign(formData, item)
  editingItem.value = item.id
  showModal.value = true
}

const saveItem = () => {
  const updatedItems = [...props.items]
  
  if (editingItem.value) {
    // تحديث العنصر الموجود
    const index = updatedItems.findIndex(item => item.id === editingItem.value)
    updatedItems[index] = { ...formData }
  } else {
    // إضافة عنصر جديد
    const newId = updatedItems.length > 0 
      ? Math.max(...updatedItems.map(item => item.id)) + 1 
      : 1
    updatedItems.push({ id: newId, ...formData })
  }
  
  emit('update:items', updatedItems)
  showModal.value = false
}

const deleteItem = (id) => {
  if (confirm(`هل أنت متأكد من حذف ${props.resourceName} هذا؟`)) {
    const updatedItems = props.items.filter(item => item.id !== id)
    emit('update:items', updatedItems)
  }
}

const resetForm = () => {
  Object.keys(formData).forEach(key => delete formData[key])
  props.fields.forEach(field => {
    formData[field.name] = field.default || ''
  })
  editingItem.value = null
}
</script>