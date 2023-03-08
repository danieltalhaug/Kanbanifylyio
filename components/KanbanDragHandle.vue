<script setup lang="ts">
import { IconDragDrop } from '@tabler/icons-vue';

</script>

<template>
    <span class="p-3 drag-handle cursor-move transition rounded">
        <IconDragDrop
            class="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400"
            :size="20"
            stroke-width="2"
        />
    </span>
</template>