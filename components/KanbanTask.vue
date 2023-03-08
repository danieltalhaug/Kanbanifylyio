<script setup lang="ts">
import type { Task } from '@/types'

const props = defineProps<{
    task: Task,
}>()
</script>

<template>
    <div class="flex flex-col gap-2 bg-slate-900 dark:bg-slate-50 p-2 rounded w-full">
        <h4 class="text-base truncate">
            {{ task.title }}
        </h4>
    </div>
</template>