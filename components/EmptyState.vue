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
    <section class="flex flex-col gap-2 text-center">
        <figure class="mb-2">
            <slot name="figure" />
        </figure>
        <h3 class="text-2xl text-slate-800 dark:text-slate-100">
            {{ title }}
        </h3>
        <p class="text-base text-slate-600 dark:text-slate-400">
            {{ description }}
        </p>
    </section>
</template>