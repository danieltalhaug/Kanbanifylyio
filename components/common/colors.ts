import { Color } from '@/types/index';

export enum Colors {
    SLATE,
    RED,
    AMBER,
    YELLOW,
    LIME,
    GREEN,
    EMERALD,
    CYAN,
    SKY,
    TEAL,
    BLUE,
    INDIGO,
    VIOLET,
    PURPLE,
    FUCHSIA,
    PINK,
    ROSE,
}

/**
 * Tailwind colors for customizing columns and tasks.
 * Classes need to be safelisted in tailwind config in order to properly work
 */
export const kanbanColors: Color[] = [
    'slate',
    'red',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'cyan',
    'sky',
    'teal',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
];
