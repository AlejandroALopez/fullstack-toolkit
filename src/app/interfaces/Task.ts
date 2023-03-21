export interface Task {
    id?: number; // optional, null on 1st time
    text: string;
    day: string;
    reminder: boolean;
}