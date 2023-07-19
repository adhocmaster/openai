module.exports = {
    // preset: 'ts-jest',
    rootDir: '.',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    modulePaths: ['<rootDir>', '<rootDir>/src'],
    
    // moduleDirectories: ["node_modules", "src"],

    moduleNameMapper: {
      // see: https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-517944368
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    preset: "ts-jest/presets/default-esm",
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
    moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue', "cjs"],
    moduleDirectories: ["node_modules"],
    };