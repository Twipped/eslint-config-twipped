const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [ 'error', { allowImplicit: true } ],

    // treat var statements as if they were block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'warn',

    // specify the maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: [ 'off', 20 ],

    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [ 'warn', {
      exceptMethods: [],
    } ],

    // require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'warn',

    // specify curly brace conventions for all control statements
    curly: [ 'error', 'multi-line' ],

    // require default case in switch statements
    'default-case': [ 'error', { commentPattern: '^no default$' } ],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'warn',

    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // encourages use of dot notation whenever possible
    'dot-notation': [ 'warn', { allowKeywords: true } ],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': [ 'error', 'property' ],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: [ 'error', 'smart' ],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'warn',

    // make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': [ 'error', { allowImplicit: true } ],

    // require constructor names to begin with a capital letter
    'new-cap': [ 'error', {
      newIsCap: true,
      capIsNew: true,
      properties: false,
      newIsCapExceptions: [ 'url' ],
    } ],

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': [ 'off', 1 ],

    // disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow using await in for loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',

    // disallow use of arguments.caller or arguments.callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // disallow assignment in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [ 'warn', 'except-parens' ],

    // don't leave any console.log statements around
    // https://eslint.org/docs/rules/no-console
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] } ],

    // disallow conditions that evaluate based on constants
    'no-constant-condition': [ 'error', { 'checkLoops': false } ],

    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [ 'warn', { allowElseIf: false } ],

    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [ 'warn', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    } ],

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'warn',

    // disallow use of eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow adding to native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'warn',

    // disallow the use of leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [ 'error', { exceptions: [] } ],

    // deprecated in favor of no-global-assign
    // https://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 'off',

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [ 'off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    } ],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    // https://eslint.org/docs/rules/no-labels
    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'warn',

    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [ 'off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    } ],

    // disallow use of multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [ 'warn', {
      ignoreEOLComments: false,
    } ],

    // disallow use of multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // disallow use of new operator when not part of the assignment or comparison
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // disallow use of new operator for Function object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // disallow use of the Object constructor
    'no-new-object': 'error',

    // disallows creating new instances of String, Number, and Boolean
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow \8 and \9 escape sequences in string literals
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',

    // disallow use of (old style) octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [ 'warn', {
      props: false,
    } ],

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': [ 'error', { allowVoid: true } ],

    // disallow usage of __proto__ property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'off',

    // disallow declaring the same variable more than once
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // disallow specific globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(confusingBrowserGlobals),

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [ 'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      } ],

    // disallow use of assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [ 'warn', 'always' ],

    // disallow redundant `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'warn',

    // disallow use of `javascript:` urls.
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [ 'error', {
      props: true,
    } ],

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow use of comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'warn',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'warn',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // warn about unreachable code in functions
    'no-unreachable': 'warn',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': [ 'error', {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    } ],

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': [ 'error', { disallowArithmeticOperators: true } ],

    // disallow usage of expressions in statement position
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [ 'error', {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false,
    } ],

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow Unused Private Class Members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'warn',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [ 'error', { vars: 'local', args: 'after-used' } ],

    // disallow unnecessary .call() and .apply()
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [ 'off', { terms: [ 'todo', 'fixme', 'xxx' ], location: 'start' } ],

    // disallow use of the with statement
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: true } ],

    // Suggest using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
    // https://eslint.org/docs/rules/prefer-object-has-own
    // TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
    'prefer-object-has-own': 'error',

    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': [ 'error', {
      disallowRedundantWrapping: true,
    } ],

    // require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Enforce the use of u flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // requires to declare all vars on top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // ensure that typeof checks are always against actual things
    'valid-typeof': [ 'error', { 'requireStringLiterals': true } ],

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],

    // require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
  },
};
