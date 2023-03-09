<script setup lang="ts">
// Libs
import { nanoid } from 'nanoid';
import draggable from 'vuedraggable';

// Components & Types
import type { Column, Task } from '~/types';
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

// For enabling cloning of a task
const isAltActive = useKeyModifier('Alt');

</script>

<template>
    <draggable
        v-model="columns"
        :animation="100"
        handle=".drag-handle"
        group="columns"
        item-key="id"
        class="flex gap-2 overflow-x-auto items-start h-full"
    >
    <template #item="{element: column}: {element: Column}">
        <KanBanColumn :title="column.title">
            <draggable
                v-model="column.tasks"
                :animation="100"
                handle=".drag-handle"
                :group="{name: 'tasks', pull: isAltActive ? 'clone' : true}"
                item-key="id"
                class="flex flex-col gap-4"
            >
                <template #item="{element: task}: {element: Task}">
                    <KanbanTask :task="task" />
                </template>
            </draggable>
        </KanBanColumn>
    </template>
    </draggable>
</template>