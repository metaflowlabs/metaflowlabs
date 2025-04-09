<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <!-- Header Section -->
    <header class="from-indigo-600 to-purple-600 bg-gradient-to-r py-16">
      <div class="mx-auto px-4 container">
        <h1 class="mb-4 text-4xl text-white font-bold md:text-5xl">
          MetaflowLabs Documentation
        </h1>
        <p class="max-w-2xl text-xl text-indigo-100">
          Create structured, interactive documentation with built-in code highlighting and type information.
        </p>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="mx-auto px-4 py-16 container">
      <!-- Template Gallery Section -->
      <div class="mb-16">
        <h2 class="mb-6 text-3xl text-gray-800 font-bold dark:text-white">
          Template Gallery
        </h2>
        <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Choose from our collection of professionally designed templates for different documentation needs.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Software RFC Card (Example) -->
          <div class="template-card">
            <div class="card-header border-blue-100 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/30">
              <h3 class="text-xl text-blue-900 font-bold dark:text-blue-200">
                Software RFC
              </h3>
              <p class="mt-1 text-blue-800/70 dark:text-blue-300/70">
                Technical specifications for software changes
              </p>
            </div>
            <div class="card-body">
              <ul class="text-gray-700 space-y-2 dark:text-gray-300">
                <li class="flex items-start">
                  <span class="i-heroicons:check-circle-solid mr-2 mt-1 flex-shrink-0 text-green-500" />
                  <span>Structured format for technical proposals</span>
                </li>
                <li class="flex items-start">
                  <span class="i-heroicons:check-circle-solid mr-2 mt-1 flex-shrink-0 text-green-500" />
                  <span>Code examples with type annotations</span>
                </li>
                <li class="flex items-start">
                  <span class="i-heroicons:check-circle-solid mr-2 mt-1 flex-shrink-0 text-green-500" />
                  <span>Implementation and testing plans</span>
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <NuxtLink to="/rfcs" class="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                View RFCs
              </NuxtLink>
            </div>
          </div>
          <!-- Placeholder Cards (Example) -->
          <div class="opacity-50 template-card">
            <div class="card-header border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
              <h3 class="text-xl text-gray-800 font-bold dark:text-gray-200">
                Coming Soon
              </h3>
              <p class="mt-1 text-gray-700/70 dark:text-gray-300/70">
                More templates in development
              </p>
            </div>
            <div class="card-body">
              <p class="text-gray-600 dark:text-gray-400">
                We're working on additional template types to support various documentation needs.
              </p>
            </div>
          </div>
          <div class="opacity-50 template-card">
            <div class="card-header border-gray-100 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
              <h3 class="text-xl text-gray-800 font-bold dark:text-gray-200">
                Coming Soon
              </h3>
              <p class="mt-1 text-gray-700/70 dark:text-gray-300/70">
                More templates in development
              </p>
            </div>
            <div class="card-body">
              <p class="text-gray-600 dark:text-gray-400">
                We're working on additional template types to support various documentation needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div>
        <h2 class="mb-6 text-3xl text-gray-800 font-bold dark:text-white">
          Features
        </h2>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          <!-- Feature Item (Example) -->
          <div class="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
            <div class="mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
              <span class="i-heroicons:code-bracket text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 class="mb-2 text-xl font-bold">
              Syntax Highlighting
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Beautiful code highlighting for over 100 programming languages using Shiki.
            </p>
          </div>
          <div class="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
            <div class="mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
              <span class="i-heroicons:cursor-arrow-ripple text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 class="mb-2 text-xl font-bold">
              Type Information
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Hover over types to see detailed information, just like in your IDE.
            </p>
          </div>
          <div class="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
            <div class="mb-4 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50">
              <span class="i-heroicons:document-duplicate text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 class="mb-2 text-xl font-bold">
              Structured Templates
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Pre-defined templates for consistent documentation across your organization.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
