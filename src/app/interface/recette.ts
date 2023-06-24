import { Result } from "./result";

export interface Recette {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}
