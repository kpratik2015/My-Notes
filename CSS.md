- [Q&A](#qa)

# Rules and Selectors

- Universal selector: The \* in CSS is a universal selector that matches every element on the page.
- Type selector: Selecting an element in CSS can be as simple as using the tag name. `img { width: 200px }`
- ID selector: The ID selector # selects an element based upon its ID attribute. `#ok { font-size: 1.5rem; }`
- Attribute Selector: The attribute selector matches an element based upon one of its attributes. This selector uses square brackets to contain the attribute match and may be optionally combined with a type selector.
- Combinators:
  - " ": Descendant
  - ">": Child
  - "~": Sibling
  - "+": Adjacent Sibling
- Pseudo Elements:
  - :hover
  - :focus
  - :active - match an element in the process of being activated (such as clicking, while the mouse button is pressed)
  - :target - select an element that has an ID matching the URL's fragment
  - :in-range, :out-of-range - numeric value compared to defined range (in form)
  - :placeholder-shown - if placeholder text is currently visible
  - :invalid, :valid
  - :checked, :indeterminate - used to select a checkbox or radio button that is currently selected or if the selected option cannot be determined
  - :default - matches only if this element is the default in a group of elements (such as default radio option)
  - :disabled, :read-only, :read-write - matches the current status of a form field based on availability to user interaction
  - :optional, :required
  - :not() - negation

## Units

There are a number of CSS properties that expect a <length> data type. This length is a scalar (numeric) value with an associated unit of measure.

### Absolute

- px : The traditional unit of measure for computer graphics; this is only suitable for screen-based displays.
- in : Inch. `1in. = 6pc = 72pt = 2.54cm`. This will be a true inch on printers, but defined relative to a reference pixel for screens which is 96px regardless of the screen resolution.
- pc – Pica. A traditional unit of measure in typography.
- pt – Point. A traditional unit of measure in typography.
- cm – Centimeter. 1cm = 10mm.
- mm – Millimeter.

Note Absolute units of measure do not scale relative to user settings such as font-size.

### Font-Relative

- ch : Represents the width of the “0” character in the element’s font (consisting of both typeface and size).
- ex : Represents the height of the “x” character in the element’s font (consisting of both typeface and size).
- em : The calculated font-size of the element. If this unit is used on the font-size property, it will be relative to the inherited fontsize.
- rem : Exactly the same as em, but always relative to the font-size of the root element (which is the <html> for HTML documents). This is the preferred default unit for many web designers as it allows for manageable fluid layouts while addressing accessibility concerns.

### Viewport-Relative

- vh : Equal to 1% of the height of the viewport
- vw : Equal to 1% of the width of the viewport
- vmin : Equal to the smaller of vh or vw
- vmax : Equal to the larger of vh or vw

### Percentage

Percentage works relative to any inherited size including font-relative, view-relative, or even absolute units.

## Functions

- Shape: circle(), ellipse(), inset(), and polygon(). Combine with the shape-outside property to wrap text to a specific shape, or with clip-path to crop an image or container.
- Transformation: rotateX(), scale(), and skewY(). There are also 3D transformations such as perspective(), matrix3d(), and scaleZ().These transformations can adjust the shape, orientation, and position of elements on the screen to create a wide range of visual effects and layouts.
- Gradients: linear-gradient(), radialgradient(), repeating-linear-gradient(), and repeatingradial-gradient().The blending of colors enabled by gradients supports a large number of visual effects.
- Effects: The blur() function will produce a Gaussian blur on the selected element, even an image. The drop-shadow() adds some dimension to a theme. opacity() allows elements to be somewhere between fully opaque and fully transparent, to allow dimensional overlays.
- Color: Colors can also be specified by hue, saturation, and lightness using the hsl() and hsla() functions. Colors can also be manipulated in a consistent fashion using the filter property with alterations such as contrast(), saturate(), and hue-rotate() and effects applied such as grayscale() or sepia().
- Resources: The url() function is used to add image resources to a design through CSS.
- Counting: The counting functions counter(), counters(), and symbols() are used to manage counter variables.
- Math: calc() function makes it possible to do some basic math with a mix of units.

# Specificity

Selector Ranking

```
-------------------
Category  Selectors
-------------------
A         ID selectors
B         Class selectors, attribute selectors, pseudo classes
C         Type selectors, pseudo elements
0         Universal selector
```

The specificity of any given selector is calculated as a three-digit number, with the digits A, B, and C, where A, B, and C represent the total number of selectors of their category.

```
Example Selector            A B C   Specificity
*                           0 0 0   0
button                      0 0 1   1
ul li                       0 0 2   2
button:not([type=submit])   0 1 1   11
a[href$=".pdf"]::before     0 1 2   12
button.outline.bold         0 2 1   21
button#submit               1 0 1   101
```

# Layouts

## Box Model

The base for laying out content is rooted in the box model which describes the rectangular boxes that are generated for elements in the document tree.

### Box Sizing

Box-sizing, or the property that defines the height and width of an element, by default has a value of content-box which means that when a width and height is defined for an element, it is only applied to the content. Adding padding or margin to the element therefore increases the percentage width of the total available viewport that the element utilizes.

### Content-Box

If a two-column layout, with each div equaling 50% of the width of the viewport, is desired, the amount of padding applied to each column needs to be subtracted from the width given to the element or the total width of both elements will exceed 100%.

### Border-Box

Instead of encompassing just the content, it takes in the content, padding, and border. When padding or border is added, the width and height of the content itself is therefore decreased.

**Float**

Unlike flex and grid, float is not part of the display property, but a property in and of itself.
A great use case for float is when a figure is included within text, allowing text to flow around the figure

# Preprocessors

The benefit of these includes access to functionality such as color-editing functions or nesting rules that are not yet available in CSS.

# Misc.

## will-change

`will-change` informs the browser ahead of time of the changes that will be animated, allowing the browser to optimize for them; however, when misused, it can do more harm than good. Some guidelines to the proper use of will-change include the following:

- Sparse use – It should only be used when it is actually needed. The browser already attempts to optimize everything. Unnecessary use will actually slow down the page.
- Only on when needed – Should be turned on before the animation will trigger and then turned off again to free up browser resources being used for optimization.
- Enough time – Optimization is time-consuming; therefore, will-change needs to be applied to the element with enough time to take effect before the animation is set to begin

# Q&A

## What are the different variations of CSS ?

The variations for CSS are:

- CSS 1
- CSS 2
- CSS 2.1
- CSS 3
- CSS 4

## What is CSS Box Model and what are its elements?

This box defines design and layout of elements of CSS. The elements are:
**Margin** : the top most layer, the overall structure is shown
**Border** : the padding and content option with a border around it is shown. Background color affects the border.
**Padding** : Space is shown. Background colour affects the border.
**Content** : Actual content is shown.
