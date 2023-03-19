import type { Column, Task, ID, Color } from '~/types';
import { nanoid } from 'nanoid';
import { useKanbanColumns } from './KanbanColumns.js';
import { Colors, kanbanColors } from '../common/colors';

export function useKanbanTasks() {
    const { columns } = useKanbanColumns();

    function doAddNewTask(columnId: ID) {
        const column = columns.value.find(column => column.id === columnId);
        const defaultTask: Task = {
            id: nanoid(),
            title: 'New task',
            createdAt: new Date(),
            description: '',
            color: kanbanColors[Colors.SLATE],
        }

        column?.tasks.push(defaultTask);
    }

    function doDuplicateTask(columnId: ID, taskId: ID) {
        const column = columns.value.find(column => column.id === columnId) as Column;
        const duplicatedTask = column?.tasks.find(task => task.id === taskId) as Task;
        const duplicatedTaskIndex: number = (column?.tasks.findIndex(task => task.id === taskId)) + 1;

        column.tasks.splice(duplicatedTaskIndex, 0, {
            ...duplicatedTask,
            id: nanoid(),
            title: duplicatedTask.title + ' (Copy)',
        });
    }

    function doChangeTaskColor(columnId: ID, taskId: ID) {
        const column = columns.value.find(col => col.id === columnId) as Column;
        const task = column.tasks.find(task => task.id === taskId) as Task;
        const taskColor = task?.color as Color;
        const taskColorIndex: number = kanbanColors.findIndex(color => color === taskColor);

        if ((kanbanColors.length - 1) === taskColorIndex) {
            task.color = kanbanColors[0];
        } else {
            task.color = kanbanColors[taskColorIndex + 1];
        }
    }

    function doDeleteTask(columnId: ID, taskId: ID) {
        const column = columns.value.find(column => column.id === columnId);
        const taskIndex: number = column?.tasks.findIndex(task => task.id === taskId)!;

        column?.tasks.splice(taskIndex, 1);
    }

    return { doAddNewTask, doDuplicateTask, doChangeTaskColor, doDeleteTask };
}
