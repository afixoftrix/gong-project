import '@testing-library/jest-dom';
import "@testing-library/react";

jest.mock('@root/src/envs', () => ({
    metaEnv: {
        apiUrl: 'test-url',
    },
}));

global.fetch = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;