<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'
import { useDateFormat } from '@vueuse/shared'
import { computed } from 'vue'

definePageMeta({
  layout: 'default',
})

// Define the expected type for RFC list items based on the updated schema + query
interface RfcListItem extends ParsedContent {
  path: string // Ensure path is selected
  title: string
  rfcId?: string
  lastUpdated?: string
}

const { data: rfcs, pending, error } = await useAsyncData<RfcListItem[]>('rfcs-list', () => {
  return queryCollection('rfcs')
  // Select only the fields needed for the list view
    .select('path', 'title', 'rfcId', 'lastUpdated')
  // Order by lastUpdated date descending
    .order('lastUpdated', 'DESC')
  // Fetch all matching documents
    .all()
})

useHead({
  title: 'Software RFCs',
  meta: [
    { name: 'description', content: 'List of Software Requests for Comments' },
  ],
})
</script>

<template>
  <div class="mx-auto px-4 py-10 container">
    <h1 class="mb-8 text-3xl font-bold">
      Software RFCs
    </h1>

    <!-- Loading State -->
    <div v-if="pending" class="py-16 text-center">
      <div class="inline-block h-8 w-8 animate-spin border-b-2 border-indigo-600 rounded-full" />
      <p class="mt-4 text-gray-600 dark:text-gray-400">
        Loading RFCs...
      </p>
    </div>

    <!-- RFC List -->
    <div v-else-if="rfcs && rfcs.length > 0" class="grid gap-6">
      <div
        v-for="rfc in rfcs"
        :key="rfc.path"
        class="border rounded-lg bg-white p-6 shadow-sm transition-shadow dark:bg-gray-800 hover:shadow-md"
      >
        <div class="flex items-start justify-between">
          <h2 class="text-xl font-semibold">
            <NuxtLink :to="rfc.path" class="text-blue-600 dark:text-blue-400 hover:underline">
              {{ rfc.title || 'Untitled RFC' }}
            </NuxtLink>
          </h2>
        </div>
        <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>RFC ID: {{ rfc.rfcId || 'N/A' }}</span>
          <span class="mx-2">•</span>
          <span>Updated: {{ useDateFormat(computed(() => rfc.lastUpdated), 'YYYY-MM-DD').value || 'N/A' }}</span>
        </div>
      </div>
    </div>

    <!-- No RFCs Found State -->
    <div v-else class="py-16 text-center">
      <p class="text-gray-600 dark:text-gray-400">
        No RFCs found. Create your first RFC in `content/rfcs/`.
      </p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="py-16 text-center text-red-600">
      <p>Error loading RFCs: {{ error.message }}</p>
    </div>
  </div>
</template>
