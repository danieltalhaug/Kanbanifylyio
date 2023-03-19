<template>
  <main class="h-screen bg-slate-50 dark:bg-slate-900 overflow-auto">
    <KanbanHeader />
    <KanbanBoard />
    <KanbanFooter />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');

button {
  @apply p-2 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition rounded focus:ring-2 ring-purple-500;
}
</style>