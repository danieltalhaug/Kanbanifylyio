import type { Task } from '~/types';
import { nanoid } from 'nanoid';
import { useKanbanColumns } from './KanbanColumns.js';

export function useKanbanTasks() {
    const { columns } = useKanbanColumns();

    function doAddNewTask(columnId: String) {
        const column = columns.value.find(column => column.id === columnId);
        const defaultTask: Task = {
            id: nanoid(),
            title: 'New task',
            createdAt: new Date(),
        }

        column?.tasks.push(defaultTask);
    }

    return { doAddNewTask };
}
