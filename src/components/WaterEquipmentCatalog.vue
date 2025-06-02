<template>
  <div class="container mx-auto max-w-7xl px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Каталог оборудования для мониторинга воды</h1>
      
      <div class="flex flex-wrap gap-4 mb-6">
        <button 
          v-for="category in categories" 
          :key="category.key"
          @click="selectedCategory = category.key"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            selectedCategory === category.key 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div class="relative">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Поиск по названию или описанию..."
          class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
        <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <WaterEquipmentCard 
        v-for="equipment in filteredEquipment" 
        :key="equipment.id"
        :equipment="equipment"
        @openDialog="openDialog"
      />
    </div>
    
    <div v-if="filteredEquipment.length === 0" class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Ничего не найдено</h3>
      <p class="text-gray-500">Попробуйте изменить критерии поиска</p>
    </div>
    
    <WaterEquipmentDialog 
      :equipment="selectedEquipment"
      :isOpen="isDialogOpen"
      @close="closeDialog"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { AllWaterEquipment, type WaterEquipmentItem } from '@/lib/WaterEquipment'
import WaterEquipmentCard from './WaterEquipmentCard.vue'
import WaterEquipmentDialog from './WaterEquipmentDialog.vue'

const selectedCategory = ref<string>('all')
const searchQuery = ref<string>('')
const selectedEquipment = ref<WaterEquipmentItem | null>(null)
const isDialogOpen = ref<boolean>(false)

const categories = [
  { key: 'all', name: 'Все категории' },
  { key: 'quality', name: 'Качество воды' },
  { key: 'level', name: 'Уровень воды' },
  { key: 'pressure', name: 'Давление и температура' }
]

const filteredEquipment = computed(() => {
  let filtered = AllWaterEquipment
  
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(item => item.category === selectedCategory.value)
  }
  
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.shortDescription.toLowerCase().includes(query) ||
      item.subcategory.toLowerCase().includes(query) ||
      item.features.some(feature => feature.toLowerCase().includes(query))
    )
  }
  
  return filtered
})

const openDialog = (equipment: WaterEquipmentItem) => {
  selectedEquipment.value = equipment
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
  selectedEquipment.value = null
}
</script> 