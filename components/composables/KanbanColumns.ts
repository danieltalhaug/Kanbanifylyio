import { nanoid } from 'nanoid';
import type { Column, ID } from '~/types';
import { Colors, kanbanColors } from '../common/colors';

export function useKanbanColumns() {
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

    return {
        columns,
        addNewColumn,
        doDuplicateColumn,
        doChangeColumnColor,
        doDeleteColumn 
    };
}
