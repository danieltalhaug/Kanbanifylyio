<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue';
import { ID, Color } from '@/types/index';

const props = defineProps<{
    title: String,
    columnId: ID,
    color: Color,
    taskCount: {
        type: Number,
        default: 0,
    },
}>();

const emit = defineEmits<{
    (e: 'update:title', payload: String) : void,
    (e: 'addTask', payload: ID) : void,
    (e: 'duplicateColumn', payload: ID) : void,
    (e: 'changeColumnColor', payload: ID) : void,
    (e: 'deleteColumn', payload: ID) : void,
}>();

function updateTitle(title: String) {
    emit('update:title', title)
}

/**
 * Border color
 */
const borderColor = computed(() => {
    return `border-${props.color}-500`;
});
</script>

<template>
    <article class="flex flex-col p-4 min-w-[300px] w-96 border-x border-slate-200 dark:border-slate-700 h-full">
        <header :class="['flex', 'flex-col', 'border-solid', 'border-b-4', 'pb-4', borderColor]">
            <KanbanToolbar
                :is-addable="true"
                :is-movable="true"
                :is-deletable="true"
                :is-duplicatable="true"
                :is-paintable="true"
                @add="$emit('addTask', columnId)"
                @duplicate="$emit('duplicateColumn', columnId)"
                @change-color="$emit('changeColumnColor', columnId)"
                @delete="$emit('deleteColumn', columnId)"
            />
            <input
                :value="title"
                type="text"
                class="py-1 text-lg bg-transparent flex-grow focus=border-2 border-t-1 text-slate-900 dark:text-slate-50 focus:outline outline-2 outline-purple-500 rounded truncate"
                @keyup.enter="updateTitle(($event.target as HTMLInputElement).value)"
                @blur="updateTitle(($event.target as HTMLInputElement).value)"
            >
            <p class="text-sm text-slate-600 dark:text-slate-300">
                <span>Tasks: </span>{{ taskCount }}
            </p>
        </header>

        <section class="flex flex-col gap-4 mt-8 grow">
            <slot />
        </section>

        <footer class="self-end">
            <button
                class="flex gap-2 justify-center"
                @click="$emit('addTask', columnId)"
            >
                <IconPlus
                    :size="20"
                    stroke-width="2"
                />
                Add task
            </button>
        </footer>
    </article>
</template>
