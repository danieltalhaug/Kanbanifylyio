<script setup lang="ts">
import type { Task, ID } from '@/types'

const props = defineProps<{
    task: Task,
}>()

const emit = defineEmits<{
    (e: 'delete', payload: ID) : void;
}>();

const isFocused = ref(false);

function doDeleteTask() {
    emit('delete', props.task.id)
}
onKeyStroke('Delete', () => {
    if(isFocused.value) {
        doDeleteTask();
    }
});
</script>

<template>
    <div
        tabindex="0"
        class="flex flex-col gap-2 bg-slate-900 dark:bg-slate-50 p-2 rounded w-full focus:shadow-2xl focus:shadow-purple-500"
        @focus="isFocused = true"
        @blur="isFocused = false"
    >
        <header class="flex flex-col">
            <KanbanToolbar
                is-deletable
                context="task"
                @delete="doDeleteTask"
                
            />
            <h4 class="text-base truncate leading-9">
                {{ task.title }}
            </h4>
        </header>
    </div>
</template>

<style scoped>
.sortable-ghost {
    @apply bg-slate-100 dark:bg-slate-800 border-2 border-slate-500 border-dashed;
}
</style>