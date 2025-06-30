export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@components/(.*)$": "<rootDir>/src/Components/$1",
        "^@root/(.*)$": "<rootDir>/$1",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    },
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            useESM: true,
            tsconfig: {
                target: "ES2022",
                lib: ["ES2022", "DOM", "DOM.Iterable"],
                module: "ES2022",
                moduleResolution: "bundler",
                jsx: "react-jsx",
                baseUrl: ".",
                paths: {
                    "@/*": ["src/*"],
                    "@components/*": ["src/Components/*"],
                    "@root/*": ["./*"]
                },
                strict: true,
                verbatimModuleSyntax: false,
                esModuleInterop: true,
            },
        }],
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
    ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/main.tsx',
        '!src/vite-env.d.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
}; 