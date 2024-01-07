module.exports = {
  plugins: [
    'jest-dom',
    'testing-library',
  ],

  rules: {
    /**********************************************************************************************/
    /* Testing Library ****************************************************************************/
    /**********************************************************************************************/

    // flags sync usage of find* queries
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
    'testing-library/await-async-queries': ['error'],

    // flags sync usage of wait* functions
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
    'testing-library/await-async-utils': [ 'error' ],

    // flags sync usage of fireEvent
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-events.md
    'testing-library/await-async-events': ['error'],

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
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
    'testing-library/no-render-in-lifecycle': ['warn'],

    // flags potentially incorrect usage of the act() function
    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
    'testing-library/no-unnecessary-act': [ 'warn' ],

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
