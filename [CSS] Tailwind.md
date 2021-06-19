# Tailwind

Tailwind CSS—a “utility-first CSS framework for rapidly building custom designs”1—can make the CSS for your site easier to control and debug.

Nearly all of the basic Tailwind classes are just thin wrappers around a single CSS style setting, like “m-4” to provide a “margin: 1rem” or “text-lg” to change the text size to “font-size: 1.125rem.”

The Tailwind code is extremely explicit, and makes it possible to understand the display just by looking at the HTML markup.

It also provides a set of prefixes that allow you to specify different behavior at different screen sizes. `bg-blue-500` is better than `background-color: #cdcdcd`

Tailwind makes it easy to make incremental changes, easy to see the results, and easy to understand the scope of the changes you make, which makes it especially useful when prototyping a new site.

## Installing

Recommended to install as a plugin for PostCSS, which is a general CSS processing tool.

`yarn add tailwindcss postcss autoprefixer`

Then in `postcss.config.js` add as plugin:

```js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
```

Next create config file for Tailwind:

`npx tailwind init`

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Finally add Tailwin to CSS file

```scss
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

_Note: if you want to compose your classes with Tailwind prefixes, they need to be defined before the utilities layer._

## Basics

Tailwind is made up of many, many small utility CSS class names, most of which set one specific CSS property to one specific value.

Tailwind class represents a specific element on a page, like `font-bold` or `m-6` for margin.

Because the Tailwind classes are endlessly combinable, you write far less external CSS code in Tailwind than you might in another CSS style. You don’t need to name as many custom CSS classes when using Tailwind.

Tailwind suggests creating a reusable React component or a helper method, and only defining the CSS styles once for that reusable item.

The Tailwind system generates a set of utility CSS classes based on the Tailwind configuration file, and you have a great deal of freedom over which classes are included and even with the names of the classes.

### Duplication

Tailwind does have a way to manage CSS class list duplication, but you are also encouraged to see the duplication issue as part of your larger code setup, not just a CSS issue.

The `@apply` directive lets you use Tailwind classes in the definition of other CSS selectors. So we can redefine our header classes in just CSS like this:

```scss
@layer components {
  .title {
    @apply text-6xl font-bold;
  }
  .subtitle {
    @apply text-4xl font-semibold;
  }
  .subsubtitle {
    @apply text-lg font-medium italic;
  }
}
```

And can use as: `<div class="title">Title</div>`

As far as the browser is concerned, if you use `@layer`, the selectors are defined as part of whatever layer you declare, no matter where in your CSS files the selector definitions are actually located.

Using `@layer` components defines the selector as part of the components and before the utilities.

We can make our definitions part of the HTML by using `@apply` on tags, not class selectors. In this case, we put the definition in the base layer:

```scss
@layer base {
  h1 {
    @apply text-4xl font-bold;
  }
  h2 {
    @apply text-2xl font-semibold;
  }
  h3 {
    @apply text-lg font-medium italic;
  }
}
```

### Prefixes

In Tailwind, you can define most CSS pseudo-classes by adding prefixes to other tailwind utilities. If you wanted an anchor tag to have an underline when the mouse goes over it, you could do this:

```html
<a class="hover:underline">Click me</a>
```

Tailwind also uses the prefixes to allow different utilities to be invoked based on the width of the screen, so you could say, `class="sm:m-2 lg:m-4"` and your element would grow a bigger margin as the screen got wider.

_Note: Tailwind only generates the prefixed utilities for certain CSS properties._

### CSS Units

A CSS pixel is defined as 1/96 of an inch.

`em` refers to the fontsize of the parent, rather than the element being matched.

There’s a more stable alternative, `rem`, which is the font size of the root element, which defaults to 16 points in the Tailwind reset system.

## Typography

The effective default for text size is the `.text-base class`, which defines the CSS properties `font-size: 1rem` and `line-height: 1.5rem`

Tailwind then provides a family of utilities, `.text-{size}`, that includes two smaller steps and 10 larger ones, giving us 12 sizes overall.

| Class      | Font Size | Line Height |
| ---------- | --------- | ----------- |
| .text-xs   | 0.75rem   | 1rem        |
| .text-sm   | 0.875rem  | 1.25rem     |
| .text-base | 1rem      | 1.5rem      |
| .text-lg   | 1.125rem  | 1.75rem     |
| .text-xl   | 1.25rem   | 1.75rem     |
| .text-2xl  | 1.5rem    | 2rem        |
| .text-3xl  | 1.875rem  | 2.25rem     |
| .text-4xl  | 2.25rem   | 2.5rem      |
| .text-5xl  | 3rem      | 1           |
| .text-6xl  | 3.75rem   | 1           |
| .text-7xl  | 4.5rem    | 1           |
| .text-8xl  | 6rem      | 1           |
| .text-9xl  | 8rem      | 1           |

CSS provides nine grades of boldness from 100 to 900

```
.font-hairline
.font-thin
.font-light
.font-normal
.font-medium
.font-semibold
.font-bold
.font-extrabold
.font-black
```

Tailwind provides four utility classes for case:

```
.uppercase
.lowercase
.capitalize
.normal-case
```

Example Usage:

```html
<h1 class="text-4xl font-bold">Title</h1>
<h2 class="text-2xl font-semibold">Subtitle</h2>
<h3 class="text-lg font-medium italic">Header</h3>
```

### Color and Opacity

`text-transparent` class makes the text transparent - you can see the background color through it. With `bg-clip-text` - makes the background match the shape of the text.

`.text-current` sets to the color of the parent element.

`.text-black` and `.text-white` also exist.

Combined classes: `.text-{color}-{level}`

The 8 default colors are: Blue Gray Green Indigo Pink Purple Red Yellow

A JS utility:

```js
const hoverDarker = (color) => {
  return `text-${color}-300 hover:text-${color}-700`;
};
```

### Alignment and Spacing

```
.text-left
.text-center
.text-right
.text-justify
```

Vertically, the CSS property is `vertical-align`, and the Tailwind classes are:

```
.align-baseline
.align-top
.align-middle
.align-bottom
.align-text-top
.align-text-bottom
```

For line spacing, Tailwind has both a relative and an absolute option.

Relative option starts with `.leading-none` - makes the line height exactly
the size of the font.

```
.leading-tight
.leading-snug
.leading-normal (1.5 times the font size, usually your default)
.leading-relaxed
.leading-loose
```

The absolute option is based on `rem`, meaning it’s derived from the root element size, not the size of the DOM element it’s attached to.
`.leading-3` through `.leading-10`, which takes us in 0.25 increments from 0.75rem to 2.5rem.

There is the property that CSS calls `letter-spacing` and Tailwind calls `tracking`

```
.tracking-normal
.tracking-tight
.tracking-tighter
.tracking-wide
.tracking-wider
.tracking-widest
```

These can be nice effects on headers with big text.

### Lists

`.list-disc` (bulleted), `.list-decimal` (numbered), and `.list-none`.
You can also choose whether the bullet or number is inside or outside the text box with `.list-inside` and `.list-outside`.

### Typography Plugin

```
yarn add @tailwindcss/typography
```

Then add to config file:

```js
module.exports = {
  plugins: [require("@tailwindcss/typography")],
};
```

You use the typography plugin by adding the css class `.prose` to any element. To change the size, you use size modifiers `prose prose-sm`

The base size is `1rem` or 16 points. The size modifiers are:

| Name | Size |
| ---- | ---- |
| -sm  | 14pt |
| -lg  | 18pt |
| -xl  | 20pt |
| -2xl | 40pt |

### Tailwind Forms

```
yarn add @tailwindcss/forms
```

Add `require('@tailwindcss/forms')` to the Tailwind configuration file:

```js
module.exports = {
  plugins: [require("@tailwindcss/forms")],
};
```

This will give basic form elements reasonable styles.

## The Box

In Tailwind, the opposite of `.hidden` is usually `.block`. Tailwind also has `.visible` and `.invisible` utilities.

### What’s In the Box?

From inside out, they are:

1. Content — Content is the text or media inside the element.
2. Padding — Padding is the space around the content but inside the border.
3. Border — Border is the edge around your padding. Really, the only thing the separates border from padding is that you can give the border a color and a pattern to draw a border around the padding and content.
4. Margin — The margin is outside the border and between this element and all the other elements. You can specify the margin in all directions the same way you can specify padding.

### Padding and Margin

Padding and margin aren’t next to each other—they are always separated by
the border. Tailwind has pattern of `.p{direction}-{size}`

```
p - Start followed by optional character for direction
t, b, l and r - Directions
x - horizontal
y - vertical
```

There are 34 numerical sizes: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

Each number corresponds to 0.25rem—or one-fourth of the size of the root element of the page.

A special size, `.px`, is equal to `1 pixel`. E.g. `.p-10` is `2.5rem`.

`.px-4` is `1rem` of padding horizontally, `.pr-1.5` is `0.375rem`, and `.pt-px` is `1 pixel` of padding on top.

Margin classes start with an `m`, the pattern is `.m{direction}-{size}`. All directions have an additional size option: `-auto`.

A negative margin starts with `.-m`

### Borders

Pattern: `.border-{side}-{size}`

Side: -b, -t, -l, and -r

Size is also optional: -0, -2, -4, and -8

No specified size means a size of 1.

`.border-2` 2-pixel border on all sides.

you need to specify both sides separately as in `class="border-t border-b"`

`border-gray-500` => `.border-opacity-{level}`

Nine basic rounded options:

| Class Name    | Description |
| ------------- | ----------- |
| .rounded-none | radius 0    |
| .rounded-sm   | 0.125rem    |
| .rounded      | 0.25rem     |
| .rounded-md   | 0.375rem    |
| .rounded-lg   | 0.5rem      |
| .rounded-xl   | 0.75rem     |
| .rounded-2xl  | 1rem        |
| .rounded-3xl  | 1.5rem      |
| .rounded-full | circle      |

Tailwind has a different way to specify a border called a ring. rings are implemented using CSS box shadow properties, so they don’t affect layout spacing. Rings can have width, color, opacity, and an optional offset.

Pattern is `.ring-{width}`, where the width is 0, 1, 2, 4, and 8.

There’s also just `.ring`, which is three pixels, and `.ring-inset`, which draws the ring in the content part of the box, rather than the border part of the box.

More options: `.ring-{color}`, `.ring-opacity-{level}`, `.ring-offset-{pixels}` and `.ring-offset-{color}`

### Background Color

Pattern is: `.bg-{color}`, `.bg-opacity-{level}`. E.g. `.bg-red-700`

**Shadows**

`.shadow` - 10% opacity black border that is 1-pixel vertically offset, with a 3-pixel width.

`<button class="p-10 mx-10 shadow-sm bg-white">One</button>`

**Gradients**

Tailwind also lets you set the background as a gradient.

In pure CSS, you specify a gradient by assigning the `background-image:` property a value from a `linear-gradient` function.

Directions: `from`, `to` and `via` which is middle point.

Pattern is: `.bg-gradient-to-{direction}`. E.g. `.bg-gradient-to-t` gradient `from` color starts at the bottom and shades to `to` color, which is at the top.

Diagonal gradient: `.bg-gradient-to-tr` with options: tl, tr, bl and br.

`bg-none` clears the gradient.

Full form: `bg-gradient-to-l from-red-500 to-blue-500`. E.g.

```html
<div
  class="mb-10 bg-gradient-to-r from-gray-50 via-black to-gray-50 p-10 w-1/2"
></div>
```

### Background Images

**Positioning**

- .bg-center
- .bg-left
- .bg-right
- .bg-top
- .bg-bottom
- .bg-left-top
- .bg-left-bottom
- .bg-right-bottom
- .bg-right-top

**Tiling**

If the image is smaller than the box, you have the option to tile it. `.bg-repeat` tiles the image horizontally and vertically.

To go in only one direction, you’d use `.bg-repeat-x` or `.bg-repeat-y`. The utility `.bg-no-repeat` resets everything.

`.bg-repeat-round` and `.bg-repeat-space` - change how the tiling places the images.

**Scrolling**

A common effect is to hold the background in place when the page scrolls so that the viewport shows a different part of the image as the user scrolls through. Tailwind lets you do this with `.bg-fixed`; the opposite of which is `.bglocal` or `.bg-scroll`, depending on whether you want a scroll bar in the viewport itself or not.

**Location**

`.bg-clip-padding`, where the background image displays in the content and
padding parts of the box, but not the border.

You can make the image cover the border also with `.bg-clip-border`, or you can limit the image to just the content and not the padding with `.bg-clip-content`. `.bg-clip-text` only shows the background image inside the shape of the content text. You’ll want to combine this with `.text-transparent`

**Specifying Images**

`<div style="backgroundimage: url(whatever)"></div>` or `.bg-pattern-image { background-image: url(whatever); }`

### Height and Width

Tailwind uses the patterns `.w-{size}` and `.h-{size}` for the width and height utility classes.

Special options include:

- `-auto` => auto-sizing
- `-px` => single pixel
- `-full` => 100% of the parent container
- `-screen` => 100% of the viewport

You can use classes like `.h-0`, `.h-8`, or `.h-px`.

Relative width options: `.w-1/2` for 50%. `.w-3/4`, `.w-2/6`, `.w-7/12`.

More options:

- `.min-h-0` => parent container
- `.min-h-full` => parent container
- `.min-w-0` => parent container
- `min-w-full` => parent container
- `.min-h-screen` => viewport option
- `.max-h-full`
- `.max-h-screen`

You still have a 100% of parent option, `.max-w-full`, but the screen option is based on screen size: `.max-w-screen-sm`, `.max-w-screen-md`, `.max-w-screen-lg`, and `.max-w-screen-xl`.

There are also a series of relative width options, starting with `.max-w-none`, which has no max width, and then size options from `-xs` to `6xl` ranging from `20rem` to `72rem`.

## Page Layout

With Tailwind, you can lay out the elements on an entire page and manage common features like navigation, sidebars, and footers.

### Containers

`.container` - specify `max-width` of element based on width of the browser viewport.

E.g. viewport between 640 and 768 pixels wide would be set to a `max-width` of 640 pixels.

The viewport is the area of the browser that the user can use to see content. The HTML `meta` tag is used to control the viewport width on mobile screens.

`content="width=device-width,initial-scale=1"` attribute to the browser to use the device size as the viewport rather than scaling the display down from a wider size.

To get centering behavior, you pair the container with `mx-auto`. A plausible class list can be: `class="container mx-auto py-12 px-6"`

### Floats and Clears

The `float` property positions content inside its container. Tailwind (TW) Options: `.float-left`, `.float-right` and `.float-none`

`clear` property forces an element to be placed below any elements it might otherwise overlap with on one or both sides. TW Options: `.clear-left`, `.clear-right`, `.clear-both`, and `.clear-none`.

### Position and Z-Index

The `z-index` property is an integer determining how items stack on top of each other.

### Tables

`.table-auto` - autospacing the columns of a table based on its content

`.table-fixed` - explicitly specify column widths

`.bordercollapse` - merge the borders of adjacent table cells which is reset with `.border-separate`

### Grids

One of the great innovations of the first round of CSS frameworks was support for a grid layout, where you could easily place things on a 12-column grid.

`.grid` - `display: grid`

The most common use of a grid is to separate the page into a series of columns, which you can do in Tailwind with the `.grid-cols-{count}`

`.grid-cols-none` - reset out of grid land

Instance:

```html
<div class="grid grid-cols-2 w-1/4 gap-4">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

`.grid-rows-{count}` - specify number of rows 90-degree twist

The default is `.grid-flow-row`, which causes elements inside the grid to flow horizontally in rows, as is the normal behavior of DOM elements.

`.grid-flow-col` - grid fill vertically column by column

`.gap-{size}` - size of gap using some numbers btwn 0 to 96.

`gap-x-{size}` - horizontal gap

`gap-y-{size}` - vertical gap

### Span

Sometimes you want a cell to cover more than one row or column. TW options: `.col-span-{count}`, `.row-span-{count}`, `.col-span-auto` & `.row-span-auto`

```html
<div class="grid grid-cols-2 w-1/4 gap-4">
  <div class="col-span-2">A</div>
  <div class="row-span-2">B</div>
</div>
```

### Start/End

TW Options: `.col-start-{column}`, `.col-end-{column}`, `.row-start-{row}` & `.row-end-{row}`, where the suffix is either the number of the location or the reset value, `auto`.

You can specify any two of the start, end, and span, and the layout will work.

## Flexbox

- A flexbox container has better controls for managing the size of elements dynamically than a grid does.
- Although a flexbox container is conceptually a single row, it can be made to automatically wrap its contents on the screen when the contents get too wide.
- Flexbox containers can be nested

```html
<div class="flex flex-col w-1/3">
  <div class="flex-grow">Header</div>
  <div class="flex flex-row">
    <div class="w-1/5">Left Sidebar</div>
    <div class="w-3/5">Content</div>
    <div class="w-1/5">Right Sidebar</div>
  </div>
  <div class="flex-grow">Footer</div>
</div>
```

### Direction and Axis

TW Options: `.flex-row`, `.flex-column`, `.flex-row-reverse` & `.flex-col-reverse`

The axis in the direction of the flow is referred to as the main axis, while the other direction is referred to as the cross axis.

In Tailwind, the parent flexbox container must include the class, `.flex`.

An important thing to know about the row direction is that it is not necessarily left to right, the rows flow in the direction of the text, so if you internationalize your text to say, Hebrew, all your flexboxes will automatically flip direction. The column main axis is always top to bottom.

### Order and Wrap

TW Options: `.flex-no-wrap`, `.flex-wrap`, `.flex-wrap-reverse`.

You can explicitly specify the order of the elements in the flexbox with the `.order-{integer}` utility, where the suffix is any integer 1 to 12, or `.order-first`, `.orderlast`, or `.order-none`.

### Grow, Shrink…Flex

If you do not want an item to grow or shrink, but to stay its default size, you specify it as `.flex-none`.

`.flex-auto` or `.flex-1` to fill the available size of the container, you use.

The difference between the two is that `.flex-auto` starts with the default size of the element and then adds or removes extra size to each element that is able to grow or shrink, whereas `.flex-1` resets each item to zero size, and equally assigns space to all items, regardless of their natural size. In general, `.flex-1` on a set of items will give you equal size items, and `.flex-auto` will not.

`.flex-shrink` - allow shrinking

`.flex-shrink-0` - prevent shrinking

`.flex-grow` - allow element from growing without affecting shrink

`.flex-grow-0` - prevent

## Box Alignment

Tailwind includes utilities that allow you to be more specific about the alignment and justification of elements within the flexbox.

### Main Axis

TW Options: `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between` (AxBxC) , `.justify-evenly` (xAxBxCx), `.justify-around` (xAxxBxxCx), `.justify-items-start`, `.justify-items-end`, `.justify-items-center`, `.justify-items-stretch`, `justify-items-auto`.

Note that you would normally use ether a regular `.justify-` to space items, or a `.justify-items-` to space items within a space, but you wouldn’t normally need to do both.

If a single element of the box wants to override the containers justification, you can use `.justify-self-`

### Cross Axis

Offers `.content-` with the same six options, so `.content-start` pushes items against the top of a multi-row flexbox, while `.content-center` vertically centers them.

Finally, you can manage both axes at the same time with the prefixes `.place-content-`, `.place-items-`, and `.place-self-`, with the result equivalent to having done both the main and cross axis spacing. So, `.place-content-center` is equivalent to `.justify-center` and `.content-center`, while `.place-items-start` is equivalent to `.justify-items-start` and `.items-start`.

## Animation

Tailwind documentation admits that these are really just suggestions, and that most projects that use animation will need to define custom behavior.

TW Options: `.animate-spin` (It’s designed to be used for things like a loading status marker), `.animate-pulse` (produces a slight fade effect on the element), `.animate-bounce`, and `.animate-ping` (a notification effect).

Negated by `.animate-none`

### Transitions

`"bg-green-500 hover:bg-yellow-500"` will change color from green to yellow when the user hovers over it.

`.transition` - causes the element to use transition effects for the CSS properties

`.transition-all` to place all properties under the transition banner.

Options: `.transition-color`, `.transition-opacity`, `.transition-shadow`, `.transition-transform`

`.duration-{milliseconds}` family of utilities, where the suffix is one of 75, 100, 150, 200, 300, 500, 700, and 1000, indicating the number of milliseconds the transition should cover.

`.delay-{milliseconds}` - delay start of transition

`.ease-linear` - hange to the property happens in a series of identically-sized chunks. Options: `.ease-in`, `.ease-out`

### Transformation

`.transform`, `.scale-{percentage}`, `.scale-x-{percentage}`, `.scale-y-{percentage}`, `rotate-{degrees}`, `.origin-`, `.skew-x-{degrees}`, `.skew-y-{degrees}`, `.translate-x-{size}`, `translate-x-full` or `translate-y-1/2` etc.

An example usage: `transform transition duration-1000 hover:scale-110` with addition of `hover:box-shadow-lg` seem like the element was getting closer to
the user on hover

### Others

TW Options: `.cursor-auto`, `.cursor-default`, `.cursor-move`, `.cursor-not-allowed`, `.cursor-pointer`, `.cursor-text`, and `.cursor-wait`.

`.select-none`, `.select-text`, & `.select-all`

## Responsive Design

- Any responsive prefix causes the utility to take effect at that screen width and any larger screen width.
- Tailwind utilities define a minimum width to take effect but not a maximum width.
- If no prefix is used, the default minimum width is 0—the utility is always in effect.

If you define something as being for small screen widths, then Tailwind applies that behavior all the way up, small, medium, large and beyond.

The five screen widths are:

Small (sm:) — 640 pixels and up
Medium (md:) — 768 pixels and up
Large (lg:) — 1024 pixels and up
Extra large (xl:) — 1280 pixels and up
Extra Extra large (2xl:) — 1536 pixels and up

`sm:` (for example, `sm:m-2`), that `m-2` utility is defined for all screens that are sized 640 pixels and up.

`sm:m-2 md:m-4 lg:m-8` to have your margin get progressively wider as you have more screen width.

If you want to unapply a utility at a wider width, you need to negate it explicitly at the larger width. For example, something like `sm:shadow-xl md:shadow-none` uses the `.shadow-none` reset utility to undo the `.shadow-xl`.

### Fewer Grid Columns on Small

On a smartphone, you might just want one item across the screen; on a desktop, maybe four. So:

```html
<div
  class="grid items-stretch
          md:grid-cols-2 md:gap-4
          lg:grid-cols-4 lg:gap-4"
>
  <div class="mb-6 lg:mb-0"></div>
  <!-- ... -->
</div>
```

The parent div is a grid at all widths, but the default grid size at the narrowest width is 1, growing to 2 on a medium screen and to 4 on a large screen.

`items-stretch` means that each individual child element will stretch to fill its portion of the width

### Flex as Larger

Another way to adjust between sizes is to have an element use default block spacing on smaller devices, and convert to flex spacing on larger devices. The
small device block spacing ensures that the items stay in a column, even if some of them are narrow, while the flex spacing at a larger size spreads them out in a row.

## Customizing Tailwind

Tailwind is just an engine that generates a lot of CSS classes, and that engine has a lot of hooks that allow us to alter the set of utilities available to us.

- Change defaults: margin, padding or other spacing items. breakpoints, set of colors.
- Change the set of classes: For file-size purposes, you might want to reduce that list.
- Add new behavior
- Integrate with legacy CSS

### Configuration File Basics

`npx tailwindcss init`. If for some reason you want a configuration file with all the default configuration explicitly listed, you can get it with `npx tailwindcss init --full`.

Tailwind considers each family of utilities to be a core plugin. The theme object references these core plugin names to allow you to customize the core plugin—most of the core plugins have customization options.

[Default Theme](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js). If you want to change color schemes, you need to use CSS variables or else use the dark: prefix to specify behavior under dark mode.

Overriding the theme object this way completely replaces the default values:

```
theme: {
  screens: {
    'phone': '640px',
    'landscape': '768px',
    'tablet': '1024px',
    'laptop': '1280px',
  }
}
```

If you want to preserve the existing default values but add new ones on top, you can use `themes#extend`

This config adds an extra extra wide screen breakpoint:

```
theme: {
extend: {
screens: {
3xl: '2440px',
}
}
}
```

If the value you provide for the screen width keys is just a string, it’s considered the `min-width` of the breakpoint when generating the CSS.

You can also pass an object with min and max keys if you want to specify the breakpoints differently. If you specify just max values, then the responsive behavior is reversed, and unprefixed utilities apply at the largest size, and prefixes take effect as the screen gets smaller:

```js
module.exports = {
  theme: {
    screens: {
      "2xl": { max: "9999px" },
      xl: { max: "1535px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
};
```

Media queries are not only based on size. If you want to base a prefix on something else, you can do so with a raw option. Here’s a configuration that adds a print mode:

```js
module.exports = {
  theme: {
    extend: {
      screens: { print: { raw: "print" } },
    },
  },
};
```

### Default Colors

You are more likely to just want to add your own extra colors in theme#extend#colors, like this:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        "company-orange": "#ff5715",
        "company-dark-blue": "#323C64",
        "company-grey": "#DADADA",
      },
    },
  },
};

// OR

module.exports = {
  theme: {
    extend: {
      colors: {
        company: {
          orange: "#ff5715",
          "dark-blue": "#323C64",
          grey: " #DADADA",
        },
      },
    },
  },
};

// Resulting class e.g. .text-company-orange
```

If you want to extend a color with a new level, you can use the spread operator:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          450: " #CC0000",
        },
      },
    },
  },
};
```

The closest you can get to color themes in standard Tailwind is by using the `dark:` prefix. To enable the `dark:` prefix, you need to add this line to your Tailwind config:

```js
module.exports = {
  darkMode: "media",
};
```

For instance: `class="bg-grey-100 dark:bg-grey-900 text-grey-700 dark:text-grey-100".`

If `darkMode` is set to `media`, then Tailwind uses the `prefers-color-scheme` media setting of the browser.

### Spacing

`theme#spacing` or extended with `theme#extend#spacing`.

```js
module.exports = {
  theme: {
    spacing: {
      small: "4px",
      medium: "12px",
      large: "36px",
    },
  },
};

// Usage: .p-small, .h-medium, etc.
```

### Change Generated Classes

The keys of this object are the name of core plugins you want to eliminate, and the values are all false:

```js
module.exports = {
  corePlugins: {
    flex: false,
    flexDirection: false,
    flexGrow: false,
    flexShrink: false,
    flexWrap: false,
  },
};
```

If you want an inclusion list instead, just pass an array of the list of core plugins you want. _Note: not recommended_

```js
module.exports = {
  corePlugins: [flex, flexDirection, flexGrow, flexShrink, flexWrap],
};
```

### Configure Variant Prefixes

Tailwind defines about a dozen or so potential prefixes, but most of them are not enabled by default.

- `active`: Applies when the element is active.
- `checked`: Applies if the checkbox or radio button has been checked.
- `dark`: Applies if Tailwind thinks it is in dark mode.
- `disabled`: Applies when the element is disabled.
- `focus`: Applies when the element has focus, as in a text field.
- `focus-within`: Applies to a parent class when any child inside that parent has focus. Enabled by default wherever hover is enabled.
- `hover`: Applies when the user is hovering the pointer over the element.
- `motion-reduce`: Applies if the user has enabled reduce motion on the system. It is often applied with hover, and you’d often have a motion-reduce and a motion-safe variant.
- `motion-safe`: Applies if the user has not enabled reduce motion on the system. It is often applied with hover, and you’d often have a motion-reduce and a motion-safe variant.
- `visited`: Applies if a link has been visited.
- `group-focus`: Applies to any child when any child under the parent gets the
  focus.
- `group-hover`: Applies to any child when the parent is hovered over. Enabled by default wherever hover is enabled.
- `even`: Applies if the element is an even-number child.
- `first-child`: Applies if the element is the first (top-most) child of its parent element.
- `last-child`: Applies if the element is the last (bottom-most) child of its parent element.
- `odd`: Applies if the element is an odd-numbered child.

**Declaring Variants**

Suppose we want `odd` and `even` variants for background color:

```js
module.exports = {
  variants: {
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "hover",
      "focus",
      "odd",
      "even",
    ],
  },
};
```

The list overrides the existing list + the order matters due to specificity. So `even:bg-color-gray-500` will take effect over `hover:bg-color-gray-900`.

_Note: There’s an exception to the precedence rule. Responsive variants are generated separately._

Tailwind does have utilities that allow you to add just a single variant at a specific place in the existing list, but they seem overly complex and hard to read.

### Integrate with Existing CSS

If you declare `prefix: "twind"`, then all the Tailwind utilities are transformed

`important: true` - adds the CSS marker `!important` to all the Tailwind utilities

Some template tools don’t allow you to use the colon (:) character in class names, making Tailwind’s prefixes illegal. You can specify a separator: option to choose your own separator, so separator: "--" means prefixes would look like `hover--text-black` or `lg--m0-4`. (I think I like the look of that more than the colon.)

### Access Tailwind from JavaScript

Tailwind provides a resolveConfig method that takes as an argument the Tailwind config object and allows you to query the configuration—the full configuration, not just your overrides in the file:

```js
import resolveConfig from "tailwindcss/resolveConfig";
import myConfig from "./tailwind.config.js";
const tailwindConfig = resolveConfig(myConfig);
tailwindConfig.theme.colors;
```

The resulting object from resolveConfig merges your config overrides with the defaults and provides an object you can query.

### Purge CSS

Tailwind uses a tool called `PurgeCSS` to identify which classes you actually use and remove unused classes from your build.

To enable purging, change array in the tailwind configuration file to contain a list of file patterns for any file in your project that might reference a Tailwind utility.

```js
module.exports = {
  future: {},
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

If the purge key is not empty, when Tailwind is compiled and the `NODE_ENV` is production, the purge list will be used to generate a list of used classes and other classes will be purged.

Any class names created dynamically would prevent classes from being found by PurgeCSS. Since PurgeCSS only uses a RegEx

```
[^<>"'`\s]*[^<>"'`\s:]/g
```

A tailwind utility is purged if it's not in the list.
