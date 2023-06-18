export const objectKeys = <T extends object>(object: T) => Object.keys(object) as (keyof T)[]
