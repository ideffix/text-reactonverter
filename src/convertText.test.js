import {
    convertToCamelCase,
    convertToFreeText,
    convertToKebabCase,
    convertToPascalCase,
    convertToSnakeCase,
    convertToUpperSneakCase,
} from './convertText'

export const camelCase = 'oneTwoThree'
export const PascalCase = 'oneTwoThree'
export const snake_case = 'one_two_three'
export const UPPER_SNAKE_CASE = 'ONE_TWO_THREE'
export const kebabCase = 'one-two-three'
export const freeText = 'one two three'

describe('text converter', () => {
    it('should convert to camelCase', () => {
        expect(convertToCamelCase(camelCase)).toBe(camelCase)
        expect(convertToCamelCase(PascalCase)).toBe(camelCase)
        expect(convertToCamelCase(snake_case)).toBe(camelCase)
        expect(convertToCamelCase(UPPER_SNAKE_CASE)).toBe(camelCase)
        expect(convertToCamelCase(kebabCase)).toBe(camelCase)
        expect(convertToCamelCase(freeText)).toBe(camelCase)
    })
    it('should convert to PascalCase', () => {
        expect(convertToPascalCase(camelCase)).toBe(camelCase)
        expect(convertToPascalCase(PascalCase)).toBe(camelCase)
        expect(convertToPascalCase(snake_case)).toBe(camelCase)
        expect(convertToPascalCase(UPPER_SNAKE_CASE)).toBe(camelCase)
        expect(convertToPascalCase(kebabCase)).toBe(camelCase)
        expect(convertToPascalCase(freeText)).toBe(camelCase)
    })
    it('should convert to snake_case', () => {
        expect(convertToSnakeCase(camelCase)).toBe(camelCase)
        expect(convertToSnakeCase(PascalCase)).toBe(camelCase)
        expect(convertToSnakeCase(snake_case)).toBe(camelCase)
        expect(convertToSnakeCase(UPPER_SNAKE_CASE)).toBe(camelCase)
        expect(convertToSnakeCase(kebabCase)).toBe(camelCase)
        expect(convertToSnakeCase(freeText)).toBe(camelCase)
    })
    it('should convert to UPPER_SNAKE_CASE', () => {
        expect(convertToUpperSneakCase(camelCase)).toBe(camelCase)
        expect(convertToUpperSneakCase(PascalCase)).toBe(camelCase)
        expect(convertToUpperSneakCase(snake_case)).toBe(camelCase)
        expect(convertToUpperSneakCase(UPPER_SNAKE_CASE)).toBe(camelCase)
        expect(convertToUpperSneakCase(kebabCase)).toBe(camelCase)
        expect(convertToUpperSneakCase(freeText)).toBe(camelCase)
    })
    it('should convert to kebab-case', () => {
        expect(convertToKebabCase(camelCase)).toBe(camelCase)
        expect(convertToKebabCase(PascalCase)).toBe(camelCase)
        expect(convertToKebabCase(snake_case)).toBe(camelCase)
        expect(convertToKebabCase(UPPER_SNAKE_CASE)).toBe(camelCase)
        expect(convertToKebabCase(kebabCase)).toBe(camelCase)
        expect(convertToKebabCase(freeText)).toBe(camelCase)
    })
    it('should convert to free text', () => {
        expect(convertToFreeText(camelCase)).toBe(camelCase)
        expect(convertToFreeText(PascalCase)).toBe(camelCase)
        expect(convertToFreeText(snake_case)).toBe(camelCase)
        expect(convertToFreeText(UPPER_SNAKE_CASE)).toBe(camelCase)
        expect(convertToFreeText(kebabCase)).toBe(camelCase)
        expect(convertToFreeText(freeText)).toBe(camelCase)
    })
})
