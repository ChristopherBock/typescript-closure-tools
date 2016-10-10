/**
 * Subscribe to the callback test events.
 *
 * @method subscribeCallbackTest
 * @param {callbackTest} callback - Callback that returns whether test i was successfull.
 */
example.subscribeCallbackTest = function (callback) {
    // do something here...
};

/**
 * Callback that returns whether test i was successfull
 * @callback callbackTest
 * @param {number} testIndex - Index of the test.
 * @returns {boolean} success - Was the test successfull?
 */