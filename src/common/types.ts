import { LANGUAGE_COLORS } from "../constants/language-colors"

export type Repository = {
    full_name: string,
    name:string,
    private:boolean,
    description: string,
    forks: number,
    watchers: number,
    language:keyof typeof LANGUAGE_COLORS,
    stargazers_count:number

}