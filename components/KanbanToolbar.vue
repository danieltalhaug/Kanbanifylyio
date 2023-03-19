<script setup lang="ts">
import { IconChevronDown, IconPlus, IconX, IconCopy, IconPalette, IconDragDrop } from '@tabler/icons-vue';
defineProps({
    isCollapsable: {
        type: Boolean,
        default: false,
    },
    isCollapsed: {
        type: Boolean,
        default: false,
    },
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
                v-if="isCollapsable"
                :title="isCollapsed ? 'Close task content' : 'Open task content'"
                @click="$emit('toggle-expand')"
            >
                <IconChevronDown
                    :class="['transition', isCollapsed ? 'rotate-180' : '']"
                    :size="20"
                    stroke-width="2"
                />
            </button>
            <button
                v-if="isAddable"
                :title="`Add new task to column`"
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