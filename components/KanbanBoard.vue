<script setup lang="ts">
// Libs
import { nanoid } from 'nanoid';

// Components & Types
import type { Column } from '~/types';
import KanBanColumn from './KanbanColumn.vue';

const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: 'Backlog',
        tasks: [
            {
                id: nanoid(),
                title: 'Create marketing landing page',
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: 'Develop cool new feature',
                createdAt: new Date(),
            },
            {
                id: nanoid(),
                title: 'Fix navigation bug',
                createdAt: new Date(),
            }
        ],
    },
    {id: nanoid(), title: 'Selected for Dev', tasks: [] },
    {id: nanoid(), title: 'In progress', tasks: [] },
    {id: nanoid(), title: 'QA', tasks: [] },
    {id: nanoid(), title: 'Complete', tasks: [] },
]);

</script>

<template>
    <div class="flex gap-2 overflow-x-auto items-start h-full">
        <KanBanColumn
            v-for="column in columns" :key="column.id"
            :title="column.title"
        >
            <KanbanTask
                v-for="task in column.tasks"
                :key="task.id"
                :task="task"
            >
                {{ task.title }}
            </KanbanTask>
        </KanBanColumn>
    </div>
</template>