export type ID = String;

export interface Column {
    id: ID,
    title: String,
    tasks: Task[],
}

export interface Task {
    id: ID,
    title: String,
    createdAt: Date,
}