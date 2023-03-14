import type { Task, ID } from '~/types';
import { nanoid } from 'nanoid';
import { useKanbanColumns } from './KanbanColumns.js';

export function useKanbanTasks() {
    const { columns } = useKanbanColumns();

    function doAddNewTask(columnId: ID) {
        const column = columns.value.find(column => column.id === columnId);
        const defaultTask: Task = {
            id: nanoid(),
            title: 'New task',
            createdAt: new Date(),
        }

        column?.tasks.push(defaultTask);
    }

    function doDeleteTask(columnId: ID, taskId: ID) {
        const column = columns.value.find(column => column.id === columnId);
        const taskIndex: number = column?.tasks.findIndex(task => task.id === taskId)!;

        column?.tasks.splice(taskIndex, 1);
    }

    return { doAddNewTask, doDeleteTask };
}
