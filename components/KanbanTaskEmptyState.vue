<script setup lang="ts">
import type { EmptyStateHelper } from '@/types/empty-state';
import EmptyState from './EmptyState.vue';

const random = ref();

const emptyStates = <EmptyStateHelper[]>[
    {
        title: 'Awesome',
        description: 'Nothing to do, might as well put your feet on the table and relax',
    },
    {
        title: 'No tasks',
        description: 'Looks like you\'re out of taks, maybe consider adding some if you get bored',
    },
    {
        title: 'Out of tasks',
        description: 'You could.. you know, add some',
    },
    {
        title: 'Nothing to do',
        description: 'Feel free to add tasks when done procrastinating',
    },
    {
        title: 'Lonely',
        description: 'This column is lonely, some tasks might make it feel better',
    },
    {
        title: 'Sympathize',
        description: 'I sympathize with batteries. I\'m not included in anything either',
    },
    {
        title: 'Data',
        description: 'There are two kinds of people in the world: those who can extrapolate from incomplete data',
    },
    {
        title: 'Gravity',
        description: 'Gravity is one of the most fundamental forces in the universe, but if you remove it, you get... Gravy'
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
        class="w-full h-80"
    >
        <template #figure>
            <div class="flex flex-col gap-2">
                <Placeholder
                    v-for="(n, i) in 3"
                    :key="i"
                    :styling="['h-10', 'rounded', 'border', 'border-dashed', 'border-slate-500']"
                />
            </div>
        </template>
    </EmptyState>
</template>