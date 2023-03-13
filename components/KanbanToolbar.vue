<script setup lang="ts">
import { IconChevronDown, IconPlus, IconX, IconCopy, IconPalette, IconDragDrop } from '@tabler/icons-vue';
defineProps({
    isAddable: {
        type: Boolean,
        default: false,
    },
    isAddable: {
        type: Boolean,
        default: false,
    },
    isDraggable: {
        type: Boolean,
        default: true,
    },
    isDeletable: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['add', 'toggle-expand', 'paint', 'copy', 'delete']);
</script>

<template>
    <div class="flex justify-between">
        <span>
            <button
                v-if="isAddable"
                @click="$emit('add')"
            >
                <IconPlus
                    :size="20"
                    stroke-width="2"
                />
            </button>
                stroke-width="2"
            <button
                v-if="isDraggable"
                class="drag-handle cursor-move"
            >
                <IconDragDrop
                    :size="20"
                    stroke-width="2"
                />
            </button>
        </span>
        <button
            v-if="isDeletable"
            @click="$emit('delete')"
        >
            <IconX
                :size="20"
                stroke-width="2"
            />
        </button>
    </div>
</template>