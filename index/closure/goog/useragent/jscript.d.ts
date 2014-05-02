// Generated Fri May  2 15:01:53 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />

declare module goog.userAgent.jscript {

    /**
     * Whether we detect that the user agent is using Microsoft JScript.
     * @type {boolean}
     */
    var HAS_JSCRIPT: boolean;

    /**
     * The installed version of JScript.
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the installed version of JScript is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of JScript is as new or
     *     newer than the given version.
     */
    function isVersion(version: string): boolean;
}

