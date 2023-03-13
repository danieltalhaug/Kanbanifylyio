<script setup lang="ts">
import { IconChevronDown, IconPlus, IconX, IconCopy, IconPalette, IconDragDrop } from '@tabler/icons-vue';
defineProps({
    isAddable: {
        type: Boolean,
        default: false,
    },
    isPaintable: {
        type: Boolean,
        default: false,
    },
    isDuplicatable: {
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
    context: {
        type: String,
        required: true,
        validator(val: string) {
            return ['column', 'task'].includes(val);
        },
    }
});

defineEmits(['add', 'toggle-expand', 'change-color', 'duplicate', 'delete']);
</script>

<template>
    <div class="flex justify-between">
        <span>
            <button
                v-if="isAddable"
                :title="`Add new ${context}`"
                @click="$emit('add')"
            >
                <IconPlus
                    :size="20"
                    stroke-width="2"
                />
            </button>
            <button
                v-if="isPaintable"
                :title="`Change colour of ${context}`"
                @click="$emit('change-color')"
            >
                <IconPalette
                    :size="20"
                stroke-width="2"
                />
            </button>
            <button
                v-if="isDuplicatable"
                :title="`Duplicate ${context}`"
                @click="$emit('duplicate')"
            >
                <IconCopy
                    :size="20"
                    stroke-width="2"
                />
            </button>
            <button
                v-if="isDraggable"
                :title="`Move ${context}`"
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
            :title="`Delete ${context}`"
            @click="$emit('delete')"
        >
            <IconX
                :size="20"
                stroke-width="2"
            />
        </button>
    </div>
</template>