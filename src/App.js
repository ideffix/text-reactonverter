import React, { useState } from 'react'
import './App.css'
import {
    convertToCamelCase,
    convertToFreeText,
    convertToKebabCase,
    convertToPascalCase,
    convertToSnakeCase,
    convertToUpperSnakeCase,
} from './convertText'

const fooMap = {
    camelCase: convertToCamelCase,
    freeText: convertToFreeText,
    kebabCase: convertToKebabCase,
    pascalCase: convertToPascalCase,
    snakeCase: convertToSnakeCase,
    upperSnakeCase: convertToUpperSnakeCase,
}

const converters = [
    {
        key: 'camelCase',
        value: 'camelCase',
    },
    {
        key: 'PascalCase',
        value: 'pascalCase',
    },
    {
        key: 'snake_case',
        value: 'snakeCase',
    },
    {
        key: 'UPPER_SNAKE_CASE',
        value: 'upperSnakeCase',
    },
    {
        key: 'kebab-case',
        value: 'kebabCase',
    },
    {
        key: 'free text',
        value: 'freeText',
    },
]

const App = () => {
    const [input, setInput] = useState('')
    const [converter, setConverter] = useState(converters[0].value)
    const outputTransformer = (str) =>
        str
            .split('\n')
            .map((s) => fooMap[converter](s))
            .join('\n')
    return (
        <div className="App">
            <header className="App-header">
                <h1>Konwerter wszystkiego na wszystko</h1>
                <h3>Input</h3>
                <textarea
                    cols={100}
                    rows={10}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <h3>Output</h3>
                Transformation:
                <select
                    value={converter}
                    onChange={(e) => setConverter(e.target.value)}
                >
                    {converters.map((c) => (
                        <option key={c.key} value={c.value}>
                            {c.key}
                        </option>
                    ))}
                </select>
                <textarea
                    cols={100}
                    rows={10}
                    value={outputTransformer(input)}
                />
            </header>
        </div>
    )
}

export default App
