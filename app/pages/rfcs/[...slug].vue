<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content'
import { useDateFormat } from '@vueuse/shared'
import { computed } from 'vue'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const contentPath = `/rfcs/${(route.params.slug as string[]).join('/')}`

const { data, pending, error } = await useAsyncData<ParsedContent | null>(
  `rfc-${contentPath}`, // Unique key for caching
  () => queryCollection('rfcs').path(contentPath).first(),
)

const formattedDateCreated = computed(() => {
  if (data.value?.dateCreated) {
    return useDateFormat(data.value.dateCreated, 'YYYY-MM-DD').value
  }
  return 'Undefined'
})

const formattedLastUpdated = computed(() => {
  if (data.value?.lastUpdated) {
    return useDateFormat(data.value.lastUpdated, 'YYYY-MM-DD').value
  }
  return 'Undefined'
})

// Optional: Handle errors or log not found cases server-side
if (process.server && !data.value) {
  console.warn(`RFC not found server-side for path: ${contentPath}`)
  // Optionally set 404 status:
  // import { setResponseStatus } from '#imports'
  // const event = useRequestEvent(); if (event) setResponseStatus(event, 404);
}
if (error.value) {
  console.error(`Error fetching RFC for path ${contentPath}:`, error.value)
}

useHead(() => ({
  title: data.value?.title || 'Software RFC',
  meta: [
    { name: 'description', content: data.value?.description || `Software RFC document at ${contentPath}` },
  ],
}))
</script>

<template>
  <div class="py-10">
    <!-- Loading state -->
    <div v-if="pending" class="py-20 text-center">
      <div class="inline-block h-8 w-8 animate-spin border-b-2 border-indigo-600 rounded-full" />
      <p class="mt-4 text-gray-600 dark:text-gray-400">
        Loading RFC...
      </p>
    </div>

    <!-- Content Area: Render metadata header THEN the content body -->
    <div v-else-if="data">
      <!-- RFC Metadata Header (Rendered directly from page data) -->
      <div class="rfc-header">
        <h1 class="rfc-title">
          {{ data.title || 'RFC Title' }}
        </h1>
        <div class="rfc-metadata">
          <div class="flex flex-col">
            <span class="text-sm text-gray-500 dark:text-gray-400">RFC ID</span>
            <span class="font-medium">{{ data.rfcId || 'Unassigned' }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm text-gray-500 dark:text-gray-400">Date Created</span>
            <span class="font-medium">{{ formattedDateCreated }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm text-gray-500 dark:text-gray-400">Last Updated</span>
            <span class="font-medium">{{ formattedLastUpdated }}</span>
          </div>
          <div v-if="data.related" class="flex flex-col lg:col-span-1 sm:col-span-2">
            <span class="text-sm text-gray-500 dark:text-gray-400">Related</span>
            <span class="font-medium">{{ data.related }}</span>
          </div>
        </div>
      </div>

      <!-- Use ContentRenderer to display the Markdown body -->
      <!-- This will render the ::SoftwareRfc block, which now only contains slots -->
      <ContentRenderer :value="data">
        <template #empty>
          <!-- Fallback if data is fetched but body is empty/invalid -->
          <p>Document body is empty or invalid: {{ contentPath }}</p>
        </template>
      </ContentRenderer>
    </div>

    <!-- Not found or error state (covers !data after pending is false) -->
    <div v-else class="py-20 text-center">
      <h2 class="mb-4 text-2xl font-semibold">
        RFC Not Found
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        Sorry, the RFC at path `{{ contentPath }}` could not be found.
      </p>
      <p v-if="error" class="mt-2 text-sm text-red-500">
        Error: {{ error.message }}
      </p>
      <NuxtLink class="mt-6 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700" to="/rfcs">
        Back to RFC List
      </NuxtLink>
    </div>
  </div>
</template>
