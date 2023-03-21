export interface Language {
    name: string;
    alias: string;
    logo?: string;
}

export interface Function {
    name: string;
    language: string;  // should match Language.alias
    syntax: string;
    description: string;
    input?: string;
    output?: string;
    code?: string;
}