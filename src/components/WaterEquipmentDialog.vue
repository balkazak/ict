<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" @click="closeDialog">
    <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
      <div class="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-900">{{ equipment?.name }}</h2>
        <button @click="closeDialog" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="p-6" v-if="equipment">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img :src="equipment.image" :alt="equipment.name" class="w-full h-64 object-cover rounded-lg mb-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-900 mb-2">Категория</h3>
              <p class="text-blue-800">{{ equipment.subcategory }}</p>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Описание</h3>
            <p class="text-gray-700 mb-6">{{ equipment.shortDescription }}</p>
            
            <h3 class="text-xl font-semibold mb-4">Ключевые особенности</h3>
            <ul class="space-y-2 mb-6">
              <li v-for="feature in equipment.features" :key="feature" class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Технические характеристики</h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <table class="w-full">
                <tbody>
                  <tr v-for="(value, key) in equipment.specifications" :key="key" class="border-b border-gray-200 last:border-b-0">
                    <td class="py-2 pr-4 font-medium text-gray-900">{{ key }}</td>
                    <td class="py-2 text-gray-700">{{ value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Области применения</h3>
            <ul class="space-y-2">
              <li v-for="application in equipment.applications" :key="application" class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ application }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div v-if="equipment.versions" class="mt-8">
          <h3 class="text-xl font-semibold mb-4">Модификации</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="version in equipment.versions" :key="version.name" class="border rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">{{ version.name }}</h4>
              <p class="text-sm text-gray-600 mb-1"><strong>Материал:</strong> {{ version.material }}</p>
              <p class="text-sm text-gray-600"><strong>Применение:</strong> {{ version.application }}</p>
            </div>
          </div>
        </div>
        
        <div v-if="equipment.advantages" class="mt-8">
          <h3 class="text-xl font-semibold mb-4">Преимущества</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="advantage in equipment.advantages" :key="advantage" class="flex items-start bg-green-50 p-3 rounded-lg">
              <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-green-800">{{ advantage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { WaterEquipmentItem } from '@/lib/WaterEquipment'

interface Props {
  equipment: WaterEquipmentItem | null
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const closeDialog = () => {
  emit('close')
}

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script> 