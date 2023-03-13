<script setup lang="ts">
// Libs
import { nanoid } from 'nanoid';
import draggable from 'vuedraggable';

// Components & Types
import type { Column, Task, ID } from '~/types';
import { Colors, kanbanColors } from './common/colors';
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
        color: kanbanColors[Colors.SLATE],
    }

    columns.value.push(defaultColumn);
}

function doDuplicateColumn(columnId: ID) {
    const duplicate = columns.value.find(col => col.id === columnId) as Column;
    const index = (columns.value.findIndex(col => col.id === columnId)) + 1;

    columns.value.splice(index, 0, {
        ...duplicate,
        id: nanoid(),
        title: duplicate.title + ' (Copy)'
    });
}

function doChangeColumnColor(columnId: ID) {
    const column = columns.value.find(col => col.id === columnId);
    const columnColor = column?.color;
    const columnColorIndex = kanbanColors.findIndex(color => color === columnColor);

    if (column) {
        if ((kanbanColors.length -1) === columnColorIndex) {
            column.color = kanbanColors[0];
        } else {
            column.color = kanbanColors[columnColorIndex + 1];
        }
    }
}

function doDeleteColumn(columnId: ID) {
    const index = columns.value.findIndex(col => col.id === columnId);

    columns.value.splice(index, 1);
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
                :color="column.color"
                :task-count="column.tasks.length"
                @add-task="addNewTask"
                @duplicate-column="doDuplicateColumn"
                @change-column-color="doChangeColumnColor"
                @delete-column="doDeleteColumn"
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