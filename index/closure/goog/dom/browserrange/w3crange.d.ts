// Generated Fri May  2 14:57:01 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/dom/browserrange/abstractrange.d.ts" />

declare module goog.dom.browserrange.W3cRange {

    /**
     * Returns a browser range spanning the given node's contents.
     * @param {Node} node The node to select.
     * @return {Range} A browser range spanning the node's contents.
     * @protected
     */
    function getBrowserRangeForNode(node: Node): Range;

    /**
     * Returns a browser range spanning the given nodes.
     * @param {Node} startNode The node to start with - should not be a BR.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with - should not be a BR.
     * @param {number} endOffset The offset within the end node.
     * @return {Range} A browser range spanning the node's contents.
     * @protected
     */
    function getBrowserRangeForNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): Range;

    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {goog.dom.browserrange.W3cRange} A Gecko range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.W3cRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the start node.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the end node.
     * @return {goog.dom.browserrange.W3cRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.W3cRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for W3C specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.AbstractRange}
     */
    class W3cRange extends goog.dom.browserrange.AbstractRange {
        /**
         * The constructor for W3C specific browser ranges.
         * @param {Range} range The range object.
         * @constructor
         * @extends {goog.dom.browserrange.AbstractRange}
         */
        constructor(range: Range);
    
        /**
         * Select this range.
         * @param {Selection} selection Browser selection object.
         * @param {*} reverse Whether to select this range in reverse.
         * @protected
         */
        selectInternal(selection: Selection, reverse: any): void;
    }
}

