<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue';

const props = defineProps({
    title: String,
});

const emit = defineEmits(['update:title'])

function updateTitle(title: String) {
    emit('update:title', title)
}

</script>

<template>
    <article class="flex flex-col bg-slate-100 dark:bg-slate-800 p-4 rounded min-w-[250px] w-96 h-full">
        <header class="flex justify-between content-center">
            <input
                :value="title"
                type="text"
                class="bg-transparent flex-grow focus=border-2 border-t-1 text-slate-900 dark:text-slate-50 focus:outline outline-2 outline-purple-500 rounded"
                @keyup.enter="updateTitle(($event.target as HTMLInputElement).value)"
                @blur="updateTitle(($event.target as HTMLInputElement).value)"
            >
            <KanbanDragHandle />
        </header>

        <section class="flex flex-col gap-4 mt-8 grow">
            <slot />
        </section>

        <footer class="self-end">
            <button class="flex gap-2 justify-center">
                <IconPlus
                    :size="20"
                    stroke-width="2"
                />
                Add task
            </button>
        </footer>
    </article>
</template>
