<script setup lang="ts">
const title: string = 'Kanban-ify-ly...io';
const subtitles: string[] = [
    'With a side of sass',
    'Passive-Aggressive Productivity',
    'No more excuses, just Kanban-it',
    'You\'ll get things done, or else...',
    'Just a friendly reminder to do your job, no pressure though',
    'Because clearly, you can\'t manage your own tasks.',
    'We\'ll remind you of what you forgot to do',
    'You\'re welcome for the organization',
    'If you use this for your job we\'ll expect a piece of your salary',
];

function getRandom(length: number) {
    return  Math.floor(Math.random() * length);
}
</script>

<template>
    <header class="relative flex flex-col gap-1 relative h-48">
        <Placeholder :styling="['absolute', 'inset-0', 'w-full', 'h-full']" />
        <div class="absolute inset-0 flex justify-center items-center">
            <span class="flex flex-col items-center">
                <h1 class="text-slate-900 dark:text-slate-50 text-8xl font-[Dongle] font-light leading-[0]">
                    <span>Kanban</span>
                    <span class="text-6xl">ify</span>
                    <span class="text-4xl">-ly</span>
                    <span class="text-xl">...io</span>
                </h1>
                <h2 class="text-slate-800 dark:text-slate-200 text-base">
                    ({{ subtitles[getRandom(subtitles.length)] }})
                </h2>
            </span>
        </div>
    </header>
</template>