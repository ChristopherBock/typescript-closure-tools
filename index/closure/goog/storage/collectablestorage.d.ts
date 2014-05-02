// Generated Fri May  2 15:01:16 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/storage/errorcode.d.ts" />
/// <reference path="../../goog/storage/storage.d.ts" />
/// <reference path="../../goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../goog/storage/richstorage.d.ts" />
/// <reference path="../../goog/storage/expiringstorage.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />

declare module goog.storage {

    /**
     * Provides a storage with expirning keys and a collection method.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @extends {goog.storage.ExpiringStorage}
     */
    class CollectableStorage extends goog.storage.ExpiringStorage {
        /**
         * Provides a storage with expirning keys and a collection method.
         *
         * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
         *     storage mechanism.
         * @constructor
         * @extends {goog.storage.ExpiringStorage}
         */
        constructor(mechanism: goog.storage.mechanism.IterableMechanism);
    
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {Array.<string>} keys List of all keys.
         * @param {boolean=} opt_strict Also remove invalid keys.
         * @return {!Array.<string>} a list of expired keys.
         * @protected
         */
        collectInternal(keys: string[], opt_strict?: boolean): string[];
    
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {boolean=} opt_strict Also remove invalid keys.
         */
        collect(opt_strict?: boolean): void;
    }
}

