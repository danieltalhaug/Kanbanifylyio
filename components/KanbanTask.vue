<script setup lang="ts">
import type { Task } from '@/types'

const props = defineProps<{
    task: Task,
}>()
</script>

<template>
    <div class="flex flex-col gap-2 bg-slate-900 dark:bg-slate-50 p-2 rounded w-full">
        <header class="flex justify-between">
            <h4 class="text-base truncate leading-9">
                {{ task.title }}
            </h4>
            <KanbanDragHandle />
        </header>
    </div>
</template>

<style scoped>
.sortable-ghost {
    @apply bg-slate-100 dark:bg-slate-800 border-2 border-slate-500 border-dashed;
}
</style>