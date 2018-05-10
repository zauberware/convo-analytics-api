# Reporting Issues and Asking Questions

Before opening an issue, please search the (issue tracker)[https://github.com/zauberware/convo-analytics-api/issues] to make sure your issue hasn’t already been reported.

## Sending a Pull Request

For non-trivial changes, please open an issue with a proposal for a new feature or refactoring before starting on the work. We don’t want you to waste your efforts on a pull request that we won’t want to accept.

On the other hand, sometimes the best way to start a conversation is to send a pull request. Use your best judgement!

In general, the contribution workflow looks like this:

- Open a new issue in the (issue tracker)[https://github.com/zauberware/convo-analytics-api/issues]
- Fork the repo.
- Create a new feature branch based off the master branch.
- Make sure all tests pass and there are no linting errors.
- Submit a pull request, referencing any issues it addresses.
- Please try to keep your pull request focused in scope and avoid including unrelated commits.

After you have submitted your pull request, we’ll try to get back to you as soon as possible. We may suggest some changes or improvements.

Thank you for contributing!


## Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests. Tests can be written with ES6 (WOW!)
- `npm test:watch` - You can even re-run tests on file changes!
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `npm run test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `npm run build` - Do some magic with ES6 to create ES5 code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing you module.

