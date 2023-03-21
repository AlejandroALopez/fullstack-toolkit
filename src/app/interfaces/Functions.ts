export interface Language {
    name: string;
    logo: string;
}

export interface Function {
    name: string;
    language: string;  // should match Language.name
    syntax: string;
    description: string;
    input?: string;
    output?: string;
    code?: string;
}