<script setup lang="ts">
// Libs
import { nanoid } from 'nanoid';
import draggable from 'vuedraggable';

// Components & Types
import type { Column, Task } from '~/types';
import { IconPlus } from '@tabler/icons-vue';
import KanbanColumn from './KanbanColumn.vue';

/**
 * Columns
 */
// Columns data persisted in LocalStorage
const columns = useLocalStorage<Column[]>('KanbanData', []);

function addNewColumn() {
    const defaultColumn: Column = {
        id: nanoid(),
        title: 'New column',
        tasks: [],
    }

    columns.value.push(defaultColumn);
}

/**
 * Tasks
 */
// For enabling cloning of a task
const isAltActive = useKeyModifier('Alt');

function addNewTask(columnId: String) {
    const column = columns.value.find(column => column.id === columnId);
    const defaultTask: Task = {
        id: nanoid(),
        title: 'New task',
        createdAt: new Date(),
    }

    column?.tasks.push(defaultTask);
}
</script>

<template>
    <div class="flex gap-2 h-full">
        <draggable
            v-model="columns"
            :animation="100"
            handle=".drag-handle"
            group="columns"
            item-key="id"
            class="flex gap-2 overflow-x-auto items-start h-full grow"
        >
        <template #item="{element: column}: {element: Column}">
            <KanbanColumn
                v-model:title="column.title"
                :title="column.title"
                :column-id="column.id"
                @add-task="addNewTask"
            >
                <draggable
                    v-model="column.tasks"
                    :animation="100"
                    handle=".drag-handle"
                    :group="{name: 'tasks', pull: isAltActive ? 'clone' : true}"
                    item-key="id"
                    class="flex flex-col gap-4 h-full"
                >
                    <template #item="{element: task}: {element: Task}">
                        <KanbanTask
                            :task="task"
                            @delete="column.tasks = column.tasks.filter(task => task.id !== $event)"
                        />
                    </template>
                </draggable>
            </KanbanColumn>
        </template>
        </draggable>

        <button
            class="flex gap-2 h-fit whitespace-nowrap"
            @click="addNewColumn"
        >
            <IconPlus
                class="self-center"
                :size="20"
                stroke-width="2"
            />
            Column
        </button>
    </div>
</template>