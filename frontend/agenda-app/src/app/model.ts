export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    readonly created_at?: { date: string};
    readonly updated_at?: { date: string};
}
