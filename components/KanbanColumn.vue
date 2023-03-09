<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue';

const props = defineProps({
    title: String,
});

</script>

<template>
    <article class="flex flex-col bg-slate-100 dark:bg-slate-800 p-4 rounded min-w-[250px] w-96 h-full">
        <header class="flex justify-between content-center">
            <h3 class="text-slate-900 dark:text-slate-50 text-lg font-medium truncate leading-10">
                {{ title }}
            </h3>
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
