module.exports = {
  plugins: [
    'jest',
    'jest-dom',
    'testing-library',
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

    /**********************************************************************************************/
    /* Testing Library ****************************************************************************/
    /**********************************************************************************************/

    // flags sync usage of find* queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-query.md
    'testing-library/await-async-query': [ 'error' ],

    // flags sync usage of wait* functions
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
    'testing-library/await-async-utils': [ 'error' ],

    // flags sync usage of fireEvent
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-fire-event.md
    'testing-library/await-fire-event': [ 'error' ],

    // ensures that all testids match a constistent naming scheme
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
    'testing-library/consistent-data-testid': [ 'warn', {
      testIdPattern: '^[a-z]+(-[a-z]+)*$',
      testIdAttribute: 'data-testid',
    } ],

    // flags async usage of syncronous functions
    'testing-library/no-await-sync-events': [ 'off' ],
    'testing-library/no-await-sync-query': [ 'off' ],

    // flag usage of container, as this can be an anti-pattern
    'testing-library/no-container': [ 'warn' ],

    // error if a debug statement is left in a test
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
    'testing-library/no-debugging-utils': [ 'error' ],

    // flags imports against @testing-library/dom, as this is probably the wrong import
    'testing-library/no-dom-import': [ 'warn', 'react' ],

    // flags use of the g flag in a regexp, as this can result in incorrect results
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
    'testing-library/no-global-regexp-flag-in-query': [ 'warn' ],

    // flags calls of cleanup(), as this is automatically done via afterEach
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
    'testing-library/no-manual-cleanup': [ 'warn' ],

    // flags usage of DOM functions to traverse elements, as this can be an anti-pattern
    // NOTE: Disabling this because zenlibrary is no where near accessible enough,
    // yet, to make this viable
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
    'testing-library/no-node-access': [ 'off' ],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
    'testing-library/no-promise-in-fire-event': [ 'error' ],

    // flags render functions used in setup, in favor of placing them into the test itself
    // this rule may require more code for tests, but it ensures fewer test mistakes
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md
    'testing-library/no-render-in-setup': [ 'warn' ],

    // flags potentially incorrect usage of the act() function
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
    'testing-library/no-unnecessary-act': [ 'warn' ],

    // flags empty waitFor invocations
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-empty-callback.md
    'testing-library/no-wait-for-empty-callback': [ 'warn' ],

    // flags waitFor calls that conduct more than one assertion
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
    'testing-library/no-wait-for-multiple-assertions': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
    'testing-library/no-wait-for-side-effects': [ 'error' ],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
    'testing-library/no-wait-for-snapshot': [ 'error' ],

    // prevents certain shortcuts for ensuring an element is in the document
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
    'testing-library/prefer-explicit-assert': [ 'off' ],

    // flags uses for waitFor that would be better achieved with findBy*
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
    'testing-library/prefer-find-by': [ 'warn' ],

    // enforces using getBy when testing only a single node, instead of queryBy.
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
    'testing-library/prefer-presence-queries': [ 'off' ],

    // enforces using getBy when waiting for an element to be removed
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
    'testing-library/prefer-query-by-disappearance': [ 'warn' ],

    // encourages devs to use the screen object instead of destructuring queries from render
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
    'testing-library/prefer-screen-queries': [ 'off' ],

    // recommends using userEvent instead of fireEvent, since it gives more realistic behavior
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
    'testing-library/prefer-user-event': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
    'testing-library/prefer-wait-for': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
    'testing-library/render-result-naming-convention': [ 'off' ],

    /**********************************************************************************************/
    /* Jest DOM       *****************************************************************************/
    /**********************************************************************************************/

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
    'jest-dom/prefer-checked': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
    'jest-dom/prefer-empty': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
    'jest-dom/prefer-enabled-disabled': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
    'jest-dom/prefer-focus': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
    'jest-dom/prefer-in-document': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
    'jest-dom/prefer-required': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
    'jest-dom/prefer-to-have-attribute': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
    'jest-dom/prefer-to-have-class': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
    'jest-dom/prefer-to-have-style': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
    'jest-dom/prefer-to-have-text-content': [ 'warn' ],

    // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
    'jest-dom/prefer-to-have-value': [ 'warn' ],
  },
};
