<script setup lang="ts">
import type { Task, ID } from '@/types'
import { useKanbanTasks } from './composables/KanbanTasks';

const props = defineProps<{
    task: Task,
    columnId: ID,
}>()

const isFocused = ref(false);
const isCollapsed = ref(false);

onKeyStroke('Delete', () => {
    if(isFocused.value) {
        useKanbanTasks().doDeleteTask(props.columnId, props.task.id);
    }
});
</script>

<template>
    <div
        tabindex="0"
        class="flex flex-col gap-2 bg-slate-900 dark:bg-slate-50 rounded w-full focus:shadow-2xl focus:shadow-purple-500 transition"
        @focus="isFocused = true"
        @blur="isFocused = false"
    >
        <header class="flex flex-col gap-1 pt-[2px] px-[1px]">
            <KanbanToolbar
                is-collapsable
                :is-collapsed="isCollapsed"
                is-deletable
                context="task"
                @toggle-expand="isCollapsed = !isCollapsed"
                @delete="useKanbanTasks().doDeleteTask(columnId, task.id)"
            />
            <input
                v-model="task.title"
                class="mx-2 text-lg py-1 bg-transparent truncate text-slate-50 dark:text-slate-900 focus=border-2 focus:outline outline-2 outline-purple-500 rounded"
            />
        </header>
        <section class="overflow-hidden">
            <div :class="['transition-all', 'px-2', isCollapsed ? 'h-16' : 'h-0']">
                Content Goes here :)
            </div>
        </section>
    </div>
</template>

<style scoped>
.sortable-ghost {
    @apply bg-slate-100 dark:bg-slate-800 border-2 border-slate-500 border-dashed;
}
</style>