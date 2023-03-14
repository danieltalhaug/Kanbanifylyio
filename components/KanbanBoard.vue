<script setup lang="ts">
// Libs
import { nanoid } from 'nanoid';
import draggable from 'vuedraggable';

// Components & Types
import type { Column, Task } from '~/types';
import { IconPlus } from '@tabler/icons-vue';
import KanbanColumn from './KanbanColumn.vue';
import KanbanColumnEmptyState from './KanbanColumnEmptyState.vue';

// Composables
import { useKanbanColumns } from './composables/KanbanColumns.js';

/**
 * Columns
 */
const { columns } = useKanbanColumns();

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
    <header class="flex justify-end p-4 border-b border-slate-500">
        <button
            class="flex gap-2 h-fit whitespace-nowrap"
            @click="useKanbanColumns().addNewColumn"
        >
            <IconPlus
                class="self-center"
                :size="20"
                stroke-width="2"
            />
            Column
        </button>
    </header>
    <div class="flex min-h-[94%]">
        <KanbanColumnEmptyState v-if="!columns.length" />
        <draggable
            v-else
            v-model="columns"
            :animation="100"
            handle=".drag-handle"
            group="columns"
            item-key="id"
            class="flex overflow-x-auto items-start grow"
        >
        <template #item="{element: column}: {element: Column}">
            <KanbanColumn
                v-model:title="column.title"
                :title="column.title"
                :column-id="column.id"
                :color="column.color"
                :task-count="column.tasks.length"
                @add-task="addNewTask"
                @duplicate-column="useKanbanColumns().doDuplicateColumn"
                @change-column-color="useKanbanColumns().doChangeColumnColor"
                @delete-column="useKanbanColumns().doDeleteColumn"
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
    </div>
</template>