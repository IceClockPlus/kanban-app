export interface Board {
    name: string;
    description: string | null;
    users: BoardUser[];
}

export interface BoardUser{
    fullName: string;
    avatar: string | null;
    type: string;
}

export interface BoardList {
    name: string;
    maxIssues: number | null;
    position: number;
    issues: ListIssue[];
}

export interface ListIssue {
    _id: string;
    name: string;
}