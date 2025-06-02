<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" @click="openDialog">
    <div class="relative">
      <img :src="equipment.image" :alt="equipment.name" class="w-full h-48 object-cover rounded-t-lg bg-gray-200">
      <div class="absolute top-2 right-2">
        <span class="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {{ getCategoryName(equipment.category) }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ equipment.name }}</h3>
      <p class="text-sm text-blue-600 mb-3">{{ equipment.subcategory }}</p>
      <p class="text-gray-700 mb-4 line-clamp-3">{{ equipment.shortDescription }}</p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="feature in equipment.features.slice(0, 2)" :key="feature" 
              class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
          {{ feature.length > 30 ? feature.substring(0, 30) + '...' : feature }}
        </span>
        <span v-if="equipment.features.length > 2" class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
          +{{ equipment.features.length - 2 }} еще
        </span>
      </div>
      
      <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Подробнее
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WaterEquipmentItem } from '@/lib/WaterEquipment'

interface Props {
  equipment: WaterEquipmentItem
}

const props = defineProps<Props>()
const emit = defineEmits<{
  openDialog: [equipment: WaterEquipmentItem]
}>()

const getCategoryName = (category: string) => {
  const names = {
    quality: 'Качество',
    level: 'Уровень',
    pressure: 'Давление'
  }
  return names[category as keyof typeof names] || category
}

const openDialog = () => {
  emit('openDialog', props.equipment)
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 