// Generated Wed Apr 30 22:46:09 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/result/result_interface.d.ts" />

declare module goog.result {

    /**
     * A DependentResult represents a Result whose eventual value depends on the
     * value of one or more other Results. For example, the Result returned by
     * @see goog.result.chain or @see goog.result.combine is dependent on the
     * Results given as arguments.
     * @interface
     * @extends {goog.result.Result}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    interface DependentResult {
        getParentResults(): goog.result.Result[];
    }
}
