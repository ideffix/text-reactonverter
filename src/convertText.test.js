import {
    convertToCamelCase,
    convertToFreeText,
    convertToKebabCase,
    convertToPascalCase,
    convertToSnakeCase,
    convertToUpperSnakeCase,
} from './convertText'

export const camelCase = 'oneTwoThree'
export const PascalCase = 'OneTwoThree'
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
        expect(convertToPascalCase(camelCase)).toBe(PascalCase)
        expect(convertToPascalCase(PascalCase)).toBe(PascalCase)
        expect(convertToPascalCase(snake_case)).toBe(PascalCase)
        expect(convertToPascalCase(UPPER_SNAKE_CASE)).toBe(PascalCase)
        expect(convertToPascalCase(kebabCase)).toBe(PascalCase)
        expect(convertToPascalCase(freeText)).toBe(PascalCase)
    })
    it('should convert to snake_case', () => {
        expect(convertToSnakeCase(camelCase)).toBe(snake_case)
        expect(convertToSnakeCase(PascalCase)).toBe(snake_case)
        expect(convertToSnakeCase(snake_case)).toBe(snake_case)
        expect(convertToSnakeCase(UPPER_SNAKE_CASE)).toBe(snake_case)
        expect(convertToSnakeCase(kebabCase)).toBe(snake_case)
        expect(convertToSnakeCase(freeText)).toBe(snake_case)
    })
    it('should convert to UPPER_SNAKE_CASE', () => {
        expect(convertToUpperSnakeCase(camelCase)).toBe(UPPER_SNAKE_CASE)
        expect(convertToUpperSnakeCase(PascalCase)).toBe(UPPER_SNAKE_CASE)
        expect(convertToUpperSnakeCase(snake_case)).toBe(UPPER_SNAKE_CASE)
        expect(convertToUpperSnakeCase(UPPER_SNAKE_CASE)).toBe(UPPER_SNAKE_CASE)
        expect(convertToUpperSnakeCase(kebabCase)).toBe(UPPER_SNAKE_CASE)
        expect(convertToUpperSnakeCase(freeText)).toBe(UPPER_SNAKE_CASE)
    })
    it('should convert to kebab-case', () => {
        expect(convertToKebabCase(camelCase)).toBe(kebabCase)
        expect(convertToKebabCase(PascalCase)).toBe(kebabCase)
        expect(convertToKebabCase(snake_case)).toBe(kebabCase)
        expect(convertToKebabCase(UPPER_SNAKE_CASE)).toBe(kebabCase)
        expect(convertToKebabCase(kebabCase)).toBe(kebabCase)
        expect(convertToKebabCase(freeText)).toBe(kebabCase)
    })
    it('should convert to free text', () => {
        expect(convertToFreeText(camelCase)).toBe(freeText)
        expect(convertToFreeText(PascalCase)).toBe(freeText)
        expect(convertToFreeText(snake_case)).toBe(freeText)
        expect(convertToFreeText(UPPER_SNAKE_CASE)).toBe(freeText)
        expect(convertToFreeText(kebabCase)).toBe(freeText)
        expect(convertToFreeText(freeText)).toBe(freeText)
    })
})
