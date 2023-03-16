<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <section class="flex flex-col text-center">
        <figure class="mb-4">
            <slot name="figure" />
        </figure>
        <h3 class="text-5xl text-slate-800 dark:text-slate-100 font-[Dongle]">
            {{ title }}
        </h3>
        <p class="text-base text-slate-600 dark:text-slate-400">
            {{ description }}
        </p>
    </section>
</template>