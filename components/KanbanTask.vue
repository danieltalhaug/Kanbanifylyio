<script setup lang="ts">
import type { Task, ID } from '@/types'
import { emit } from 'process';

const props = defineProps<{
    task: Task,
}>()

const emit = defineEmits<{
    (e: 'delete', payload: ID) : void;
}>();

const isFocused = ref(false);

onKeyStroke('Delete', () => {
    if(isFocused.value) {
        emit('delete', props.task.id)
    }
})
</script>

<template>
    <div
        tabindex="0"
        class="flex flex-col gap-2 bg-slate-900 dark:bg-slate-50 p-2 rounded w-full focus:shadow-2xl focus:shadow-purple-500"
        @focus="isFocused = true"
        @blur="isFocused = false"
    >
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