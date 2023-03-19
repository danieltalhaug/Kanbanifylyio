export type ID = String;

export type Color = String;

export interface Column {
    id: ID,
    title: String,
    tasks: Task[],
    color: Color,
}

export interface Task {
    id: ID,
    title: String,
    createdAt: Date,
    description: string,
    color: Color,
}