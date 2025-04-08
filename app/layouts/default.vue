<script setup lang="ts">
// Layout-specific script logic (if any) can go here
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
    <header class="bg-white shadow-sm dark:bg-gray-800">
      <div class="mx-auto flex items-center justify-between px-4 py-4 container">
        <!-- Site Title Link -->
        <NuxtLink to="/" class="text-xl text-indigo-600 font-bold dark:text-indigo-400">
          MetaflowLabs Docs
        </NuxtLink>
        <!-- Navigation -->
        <nav class="flex gap-6">
          <NuxtLink to="/" class="hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </NuxtLink>
          <NuxtLink to="/rfcs" class="hover:text-indigo-600 dark:hover:text-indigo-400">
            RFCs
          </NuxtLink>
          <!-- More links will be added in later milestones -->
        </nav>
      </div>
    </header>

    <!-- Main Content Slot -->
    <main class="mx-auto px-4 py-8 container">
      <!-- Added padding -->
      <slot />
    </main>

    <footer class="mt-8 border-t border-gray-200 bg-white py-6 dark:border-gray-700 dark:bg-gray-800">
      <!-- Added margin-top -->
      <div class="mx-auto px-4 text-center text-gray-600 container dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} MetaflowLabs. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Layout-specific scoped styles (if any) can go here */
</style>
