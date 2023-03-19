<script setup lang="ts">
import type { Task, ID, Color } from '@/types'
import { useKanbanTasks } from './composables/KanbanTasks';

const props = defineProps<{
    task: Task,
    columnId: ID,
    color: Color,
}>()

const isFocused = ref(false);
const isCollapsed = ref(false);

onKeyStroke('Delete', () => {
    if(isFocused.value) {
        useKanbanTasks().doDeleteTask(props.columnId, props.task.id);
    }
});

function formatDate(date: Date): string {
    const createdAt = new Date(date);
    const options = {
        day: 'numeric',
        year: 'numeric',
        month: 'short',
        weekday: 'long'
    }

    return createdAt.toLocaleDateString('en-US', options);
}

const borderColor = computed(() => {
    return `border-${props.color}-500`;
});
</script>

<template>
    <div
        tabindex="0"
        :class="['task', 'flex', 'flex-col', 'gap-2', 'bg-slate-900', 'dark:bg-slate-50', 'w-full', 'rounded', 'overflow-hidden', 'focus:shadow-2xl', 'focus:shadow-purple-500', 'transition', 'm-h-[86px]']"
        @focus="isFocused = true"
        @blur="isFocused = false"
    >
        <Placeholder :styling="['hidden','w-full', 'h-[86px]','rounded', 'border', 'border-dashed', 'border-slate-500']" />
        <div :class="['task-content', 'border-solid', 'border-l-8', borderColor]">
            <header class="flex flex-col gap-1 pt-[2px] px-[1px] mb-2">
                <KanbanToolbar
                    is-duplicatable
                    is-collapsable
                    :is-collapsed="isCollapsed"
                    is-paintable
                    is-deletable
                    context="task"
                    @toggle-expand="isCollapsed = !isCollapsed"
                    @duplicate="useKanbanTasks().doDuplicateTask(columnId, task.id)"
                    @change-color="useKanbanTasks().doChangeTaskColor(columnId, task.id)"
                    @delete="useKanbanTasks().doDeleteTask(columnId, task.id)"
                />
                <input
                    v-model="task.title"
                    class="mx-2 text-lg py-1 bg-transparent truncate text-slate-50 dark:text-slate-900 focus=border-2 focus:outline outline-2 outline-purple-500 rounded"
                />
            </header>
            <section class="overflow-hidden">
                <div :class="['transition-all', 'px-2', isCollapsed ? 'h-32' : 'h-0']">
                    <span class="flex flex-col">
                        <textarea
                            v-model="task.description"
                            class="mt-1 text-base w-full h-20 bg-transparent focus=border-2 focus:outline outline-2 outline-purple-500 rounded resize-none"
                            placeholder="Task description"
                        >
                        </textarea>
                    </span>
                    <p class="text-slate-500 text-sm mt-2">
                        Created: {{ formatDate(task.createdAt) }}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.sortable-ghost {
    @apply bg-slate-100 dark:bg-slate-900;
}
.sortable-ghost .placeholder {
    @apply block;
}
.sortable-ghost .task-content {
    @apply hidden;
}
</style>