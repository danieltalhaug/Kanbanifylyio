<script setup lang="ts">
import type { EmptyStateHelper } from '@/types/empty-state';
import EmptyState from './EmptyState.vue';

const random = ref();

const emptyStates = <EmptyStateHelper[]>[
    {
        title: 'Candle',
        description: 'Why did the candle quit his job? He was burned out',
    },
    {
        title: 'No columns',
        description: 'Add a column to start working, or you know.. don\'t',
    },
    {
        title: 'Maths',
        description: 'Not all math puns are terrible. Just sum',
    },
    {
        title: 'Welcome!',
        description: 'Add a column and get workin\'',
    },
    {
        title: 'Add a column',
        description: 'To get organizing your tasks, add a column to the board',
    },
];

function getRandomEmptyState() {
    return emptyStates[Math.floor(Math.random() * emptyStates.length)]
}

onMounted(() => {
    random.value = getRandomEmptyState();
});
</script>

<template>
    <EmptyState
        :title="random?.title"
        :description="random?.description"
        class="w-full h-80 self-center"
    >
        <template #figure>
            <div class="flex flex-row justify-center items-center gap-2">
                <Placeholder
                    v-for="(n, i) in 3"
                    :key="i"
                    :styling="['w-20', 'h-60', 'rounded']"
                />
            </div>
        </template>
    </EmptyState>
</template>