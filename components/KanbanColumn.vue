<script setup lang="ts">
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
            <button class="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition">+ Add task</button>
        </footer>
    </article>
</template>
