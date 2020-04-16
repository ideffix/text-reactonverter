export const convertToCamelCase = (str) => {
    const spl = split(str)
    return (
        spl[0] +
        spl
            .slice(1)
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join('')
    )
}

export const convertToPascalCase = (str) => str

export const convertToSnakeCase = (str) => str

export const convertToUpperSneakCase = (str) => str

export const convertToKebabCase = (str) => str

export const convertToFreeText = (str) => str

const split = (str) =>
    str
        .trim()
        .replace(/([a-z])([A-Z])|\_|\-/g, '$1 $2')
        .split(' ')
        .map((el) => el.toLowerCase())
