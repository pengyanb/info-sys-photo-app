module.exports = {
  "roots": ["./src/test"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "setupFilesAfterEnv": ["./src/test/setupTests.ts"],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}