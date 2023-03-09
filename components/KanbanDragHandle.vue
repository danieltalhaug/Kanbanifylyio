<script setup lang="ts">
import { IconDragDrop } from '@tabler/icons-vue';

</script>

<template>
    <button class="p-3 drag-handle cursor-move transition rounded">
        <IconDragDrop
            :size="20"
            stroke-width="2"
        />
    </button>
</template>