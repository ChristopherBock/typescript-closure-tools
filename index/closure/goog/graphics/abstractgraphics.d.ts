// Generated Fri May  2 15:02:08 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/graphics/path.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />

declare module goog.graphics {

    /**
     * Base class for the different graphics. You should never construct objects
     * of this class. Instead us goog.graphics.createGraphics
     * @param {number|string} width The width in pixels or percent.
     * @param {number|string} height The height in pixels or percent.
     * @param {?number=} opt_coordWidth Optional coordinate system width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight Optional coordinate system height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class AbstractGraphics extends goog.ui.Component {
        /**
         * Base class for the different graphics. You should never construct objects
         * of this class. Instead us goog.graphics.createGraphics
         * @param {number|string} width The width in pixels or percent.
         * @param {number|string} height The height in pixels or percent.
         * @param {?number=} opt_coordWidth Optional coordinate system width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight Optional coordinate system height - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(width: any /*number|string*/, height: any /*number|string*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The root level group element.
         * @type {goog.graphics.GroupElement?}
         * @protected
         */
        canvasElement: goog.graphics.GroupElement;
    
        /**
         * Left coordinate of the view box
         * @type {number}
         * @protected
         */
        coordLeft: number;
    
        /**
         * Top coordinate of the view box
         * @type {number}
         * @protected
         */
        coordTop: number;
    
        /**
         * @return {goog.graphics.GroupElement} The root level canvas element.
         */
        getCanvasElement(): goog.graphics.GroupElement;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth  The coordinate width.
         * @param {number} coordHeight  The coordinate height.
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * @return {goog.math.Size} The coordinate size.
         */
        getCoordSize(): goog.math.Size;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left  The coordinate system left bound.
         * @param {number} top  The coordinate system top bound.
         */
        setCoordOrigin(left: number, top: number): void;
    
        /**
         * @return {!goog.math.Coordinate} The coordinate system position.
         */
        getCoordOrigin(): goog.math.Coordinate;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth  The width in pixels.
         * @param {number} pixelHeight  The height in pixels.
         */
        setSize(pixelWidth: number, pixelHeight: number): void;
    
        /**
         * @return {goog.math.Size} The size of canvas.
         * @deprecated Use getPixelSize.
         */
        getSize(): goog.math.Size;
    
        /**
         * @return {goog.math.Size?} Returns the number of pixels spanned by the
         *     surface, or null if the size could not be computed due to the size being
         *     specified in percentage points and the component not being in the
         *     document.
         */
        getPixelSize(): goog.math.Size;
    
        /**
         * @return {number} Returns the number of pixels per unit in the x direction.
         */
        getPixelScaleX(): number;
    
        /**
         * @return {number} Returns the number of pixels per unit in the y direction.
         */
        getPixelScaleY(): number;
    
        /**
         * Remove all drawing elements from the graphics.
         */
        clear: any /*missing*/;
    
        /**
         * Remove a single drawing element from the surface.  The default implementation
         * assumes a DOM based drawing surface.
         * @param {goog.graphics.Element} element The element to remove.
         */
        removeElement(element: goog.graphics.Element): void;
    
        /**
         * Sets the fill for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Fill?} fill The fill object.
         */
        setElementFill(element: goog.graphics.StrokeAndFillElement, fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         */
        setElementStroke(element: goog.graphics.StrokeAndFillElement, stroke: goog.graphics.Stroke): void;
    
        /**
         * Set the transformation of an element.
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} angle The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         */
        setElementTransform(element: goog.graphics.Element, x: number, y: number, angle: number, centerX: number, centerY: number): void;
    
        /**
         * Draw a circle
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} r Radius length.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.EllipseElement} The newly created element.
         */
        drawCircle(cx: number, cy: number, r: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
    
        /**
         * Draw an ellipse
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.EllipseElement} The newly created element.
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
    
        /**
         * Draw a rectangle
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.RectElement} The newly created element.
         */
        drawRect(x: number, y: number, width: number, height: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.RectElement;
    
        /**
         * Draw a text string within a rectangle (drawing is horizontal)
         *
         * @param {string} text The text to draw.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {string} align Horizontal alignment: left (default), center, right.
         * @param {string} vAlign Vertical alignment: top (default), center, bottom.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill  Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.TextElement} The newly created element.
         */
        drawText(text: string, x: number, y: number, width: number, height: number, align: string, vAlign: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
    
        /**
         * Draw a text string vertically centered on a given line.
         *
         * @param {string} text  The text to draw.
         * @param {number} x1 X coordinate of start of line.
         * @param {number} y1 Y coordinate of start of line.
         * @param {number} x2 X coordinate of end of line.
         * @param {number} y2 Y coordinate of end of line.
         * @param {string} align Horizontal alingnment: left (default), center, right.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.TextElement} The newly created element.
         */
        drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
    
        /**
         * Draw a path.
         *
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.PathElement} The newly created element.
         */
        drawPath(path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.PathElement;
    
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.GroupElement} The newly created group.
         */
        createGroup(opt_group?: goog.graphics.GroupElement): goog.graphics.GroupElement;
    
        /**
         * Create an empty path.
         *
         * @return {!goog.graphics.Path} The path.
         * @deprecated Use {@code new goog.graphics.Path()}.
         */
        createPath(): goog.graphics.Path;
    
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated
         * area. The way text length is measured is by writing it into a div that is
         * after the visible area, measure the div width, and immediatly erase the
         * written value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         *
         * @return {number} The width in pixels of the text strings.
         */
        getTextWidth(text: string, font: goog.graphics.Font): number;
    
        /**
         * @return {boolean} Whether the underlying element can be cloned resulting in
         *     an accurate reproduction of the graphics contents.
         */
        isDomClonable(): boolean;
    
        /**
         * Start preventing redraws - useful for chaining large numbers of changes
         * together.  Not guaranteed to do anything - i.e. only use this for
         * optimization of a single code path.
         */
        suspend(): void;
    
        /**
         * Stop preventing redraws.  If any redraws had been prevented, a redraw will
         * be done now.
         */
        resume(): void;
    }
}

