module.exports = {
  plugins: [
    'jest',
  ],
  env: {
    jest: true,
  },

  rules: {

    /**********************************************************************************************/
    /* Jest Behaviors *****************************************************************************/
    /**********************************************************************************************/

    // enforce using test() at root level and it() inside describes
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': [ 'off' ],

    // enforce there must be an assertion in a test
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
    'jest/expect-expect': [ 'warn' ],

    // enforce a maximum number of assertions in a test
    'jest/max-expects': [ 'off' ],

    // enforces a maximum nested level of describes
    'jest/max-nested-describe': [ 'off' ],

    // recommends the original assertion rather than the alias
    'jest/no-alias-methods': [ 'warn' ],

    // warns about tests that have been left commented out
    'jest/no-commented-out-tests': [ 'warn' ],

    // warns about assertions performed behind conditions. These are an antipattern
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
    'jest/no-conditional-expect': [ 'off' ],

    // checks for conditional logic inside tests. This is usually a sign
    // of a test trying to do too much
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
    'jest/no-conditional-in-test': [ 'off' ],

    // flags any jest functions which have been deprecated
    'jest/no-deprecated-functions': [ 'warn' ],

    // flags test.skip, it.skip and describe.skip
    'jest/no-disabled-tests': [ 'off' ],

    // recommends using async/await tests instead of callback based tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
    'jest/no-done-callback': [ 'warn' ],

    // flags duplicate setup and teardown hooks within the same level.
    'jest/no-duplicate-hooks': [ 'warn' ],

    // errors if a test file is exporting something. tests should always be standalone
    'jest/no-export': [ 'error' ],

    // flags tests marked as .only
    'jest/no-focused-tests': [ 'error' ],

    // prevents setup and teardown hooks
    'jest/no-hooks': [ 'off' ],

    // error on duplicate test name
    'jest/no-identical-title': [ 'error' ],

    // Disallow string interpolation inside snapshots
    'jest/no-interpolation-in-snapshots': [ 'warn' ],

    // prevents using any of the jasmine globals that leak into the jest environment.
    'jest/no-jasmine-globals': [ 'error' ],

    // flags imports of the jest object, as it is always already in scope
    'jest/no-jest-import': [ 'warn' ],

    // flags snapshots that are tracking a bit too much
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': [ 'warn', {
      maxSize: 30,
      inlineMaxSize: 10,
    } ],

    // importing directly from __mocks__ is an anti-pattern
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': [ 'error' ],

    // disallows specific matchers
    'jest/no-restricted-matchers': [ 'off' ],

    // flags assertions conducted outside of a test
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': [ 'error' ],

    // disallows using `f` and `x` prefixes, developers should use .only and .skip
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': [ 'error' ],

    // tests should never return anything. use async/await for promises
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': [ 'warn' ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': [ 'off' ],

    // flags comparisons that could be better serviced with a specific matcher
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
    'jest/prefer-comparison-matcher': [ 'warn' ],
    'jest/prefer-equality-matcher': [ 'warn' ],

    // enforces having an expected assertion count at the start of the test
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
    'jest/prefer-expect-assertions': [ 'off' ],

    // enforces using expect.resolves instead of awaiting a value inside expect()
    'jest/prefer-expect-resolves': [ 'off' ],

    // enforces order of setup/teardown hooks
    'jest/prefer-hooks-in-order': [ 'off' ],

    // enforces that setup/teardown always comes before tests
    'jest/prefer-hooks-on-top': [ 'warn' ],

    // enforces all lower case test names
    'jest/prefer-lowercase-title': [ 'off' ],

    // enforces snapshots having hint text
    'jest/prefer-snapshot-hint': [ 'off' ],

    // recommends using spyOn instead of hard writing jest.fn onto existing objects
    'jest/prefer-spy-on': [ 'warn' ],

    'jest/prefer-strict-equal': [ 'off' ],
    'jest/prefer-to-be': [ 'off' ],

    // warns if toBe, toEqual or toStrictEqual are used against an array
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': [ 'warn' ],

    // warns if a comparison is done against array length instead of using toHaveLength
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': [ 'warn' ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
    'jest/prefer-todo': [ 'warn' ],

    // warns if code is done inside a describe without setup/teardown hooks,
    // as this can have unintended consequences.
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
    'jest/require-hook': [ 'warn' ],

    // enforces checking for a specific message when using toThrow
    'jest/require-to-throw-message': [ 'off' ],

    // requires that all tests must be inside a describe block
    'jest/require-top-level-describe': [ 'warn' ],

    // validates correct usage of the describe callback
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
    'jest/valid-describe-callback': [ 'warn' ],

    // validate that expect() is only called with one argument, and has a matcher.
    'jest/valid-expect': [ 'error', {
      alwaysAwait: false,
      asyncMatchers: [ 'toResolve', 'toReject' ],
      minArgs: 1,
      maxArgs: 1,
    } ],

    // flags any assertions which are being incorrectly used in an async context
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': [ 'warn' ],

    // flags invalid test titles
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
    'jest/valid-title': [ 'warn' ],
  },
};
