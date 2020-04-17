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

export const convertToPascalCase = (str) =>
    split(str)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join('')

export const convertToSnakeCase = (str) => split(str).join('_')

export const convertToUpperSnakeCase = (str) =>
    split(str).join('_').toUpperCase()

export const convertToKebabCase = (str) => split(str).join('-')

export const convertToFreeText = (str) => split(str).join(' ')

const split = (str) =>
    str
        .trim()
        .replace(/([a-z])([A-Z])|\_|\-/g, '$1 $2')
        .split(' ')
        .map((el) => el.toLowerCase())
        .filter((el) => !!el)
