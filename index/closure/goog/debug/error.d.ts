/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog.debug {

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     * @extends {Error}
     */
    class Error extends Error {
        /**
         * Base class for custom error objects.
         * @param {*=} opt_msg The message associated with the error.
         * @constructor
         * @extends {Error}
         */
        constructor(opt_msg?: any);
    }
}

