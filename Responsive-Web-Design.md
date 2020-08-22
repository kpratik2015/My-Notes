# Responsive Web Design

- [Responsive Web Design](#responsive-web-design)
  - [Essentials](#essentials)
  - [HTML Markup](#html-markup)
  - [Media Query](#media-query)
  - [Flex](#flex)

## Essentials

We can make the page more mobile-friendly by adding this snippet in the `<head>`:

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
```

our viewport meta tag is effectively saying "make the content render at the width of the device."

The first rules we write outside of a media query should be our starter or "base" rules for the most basic devices, which we then enhance for more capable devices and larger screens.

## HTML Markup

Presently the void tags are `area`, `base`, `br`, `col`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `param`, `source`, `track`, and `wbr`.

You can't wrap one `<a>` tag within another `<a>` tag or other interactive element (such as a button) and you can't wrap a form in an `<a>` tag either.

`<main>` - "The main content area of a document includes content that is unique to that document and excludes content that is repeated across a set of documents such as site navigation links, copyright information, site logos and banners and search forms (unless the document or applications main function is that of a search form)."

`<section>` - as the wrapping element for visual components. It provides a simple way to see the beginning and end of components in the markup. You can also qualify for yourself whether you should be using a section based upon whether the content you are sectioning has a natural heading within it (for example, an h1-h6). If it doesn't, it's likely you'd be better off opting for a div.

`<nav>` - wrap major navigational links to other pages or parts within the same page. If you usually mark up your navigational elements with an unordered list (`<ul>`) and a bunch of list tags (`<li>`), you may be better served with a nav and a number of nested `<a>` tags instead

`<article>` - wrap a self-contained piece of content. Obvious examples of content that should be wrapped with an `<article>` element would be blog posts or news stories. Be aware that if you are nesting `<article>` elements, it is presumed that the nested `<article>` elements are principally related to the outer article.

`<aside>` - content that is tangentially related to the content around it. Considered suitable for pull quotes, advertising, and groups of navigation elements; basically, anything not directly related to the main content would work well in an aside.

`<header>` - can be used for the "masthead" area of a site's header but also as an introduction to other content, such as an introduction section within an `<article>` element.

`<footer>` - contain information about the section it sits within. It can
be used multiple times within a page if needed. For example, it could be used for the footer of a blog but also a footer within a blog post `<article>`.

**HTML5 outline algorithm**

HTML5 introduced the ability for each sectioning container to have its own self-contained outline. That means it is not necessary to think about which level of heading tag you're at in terms of the entire document.

**Note on h1-h6 elements**

A quote from the HTML5 specification:

_"h1–h6 elements must not be used to mark up subheadings, subtitles, alternative titles and taglines unless intended to be the heading for a new section or subsection."_

The `<p>` element is used to markup a paragraph. However, don't think that means it can only be used on text 3-4 lines long. On the contrary, use it to mark up any text that cannot be better marked up with one of the other elements.

A `blockquote` is used to markup text that is quoted from somewhere else.

The HTML specification relates that the `<figure>` element: "...can thus be used to annotate illustrations, diagrams, photos, code listings, etc."
So we use it as an element to call out visuals of any sort, and the accompanying `<figcaption>` provides the means to add some text supporting the visuals.

How many times have you wanted to create a simple open and close widget on your page? A piece of summary text that when clicked, opens a panel with additional information? Modern HTML facilitates this pattern with the `<details>` and `<summary>` elements. Currently, there is no way of animating the open and close.

`<address>` - element is to be used explicitly for marking up contact information for its nearest `<article>` or `<body>` ancestor.

`<strong>` - If you do want to emphasize something for strength, urgency, or importance, `<strong>` is the element for you. The strong element can be used in a heading, caption, or paragraph to distinguish the part that really matters from other parts that might be more detailed, more jovial, or merely boilerplate.

`<em>` - element represents stress emphasis of its contents. Therefore, unless you actually want the enclosed contents to be emphasized, consider using a `<b>` tag or, where relevant, an `<i>` or `span` tag instead.

`<i>` - A span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text.

`<source>` - enables us to provide alternate sources for media. For example,
alongside providing an MP4 version of a video, if we wanted to provide support for a new format, we could easily do so. Furthermore, if the user didn't have any suitable playback technology in the browser, we could provide download links to the files themselves.

```html
<video
  width="640"
  height="480"
  controls
  preload="auto"
  loop
  poster="myVideoPoster.png"
>
  <source src="myVideo.sp8" type="video/super8" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p>
    <b>Download Video:</b> MP4 Format:
    <a
      href="myVideo.
mp4"
      >"MP4"</a
    >
  </p>
</video>
```

The browser goes top to bottom deciding what to play, so if it doesn't support super8, it moves on to the next source, mp4 in this case.

**Audio and video tags work almost identically**

However, HTML video implementation is not responsive. Simply remove width and height attribute and add `video { max-width: 100%; height: auto; }`

## Media Query

The `<meta>` tag can also be used to control the amount a user can zoom in and out of the page.

```html
<meta
  name="viewport"
  content="width=device-width, maximum-scale=3,
minimum-scale=0.5"
/>
<!-- allows users to go as large as three times the device's width and as small as half the device's width -->
```

_A media query consists of a media type and zero or more expressions that check for the conditions of particular media features. Among the media features that can be used in media queries are 'width', 'height', and 'color'. By using media queries, presentations can be tailored to a specific range of output devices without changing the content itself._

You can write media queries in links in HTML—to load particular style sheets if the media query passes. You can write media queries on CSS @import at-rules to determine which style sheets should be imported. You can also write media queries directly into a CSS file to determine which rules should be applied on the basis of which media queries resolve to true.

**Media queries in link tags**

```html
<link
  rel="stylesheet"
  media="screen and (orientation: portrait)"
  href="portrait-screen.css"
/>
<!-- media query is asking "Are you a screen and is your orientation portrait?" -->
```

**Media query on an @import at-rule**

```scss
@import url("portrait-screen.css") screen and (orientation: portrait);
```

**What can media queries test for?**

- width
- height
- device-width
- device-height
- orientation
- aspect-ratio
- device-aspect-ratio
- color
- color-index
- monochrome
- resolution
- scan
- grid

Ordinarily, for a browser, CSS is considered to be a render-blocking asset. However, modern browsers are smart enough to discern which style sheets, (linked with media queries in the head) need to be analyzed immediately and which can be deferred until after the initial page rendering.

Apart from preference and/or compartmentalization of code, there is rarely a great tangible advantage in separating different media query styles into separate files. After all, using separate files increases the number of HTTP requests needed to render a page, which in turn can make pages slower in certain other situations.

## Flex

The biggest issue with using inline-block as a layout mechanism is that it renders a space between HTML elements. It's also worth pointing out that there is no simple way to vertically center content within an inline-block.

**Table and table-cell**

Don't confuse `display: table` and `display: table-cell` with the equivalent HTML elements. These CSS properties merely mimic the layout of their HTMLbased brethren. They in no way affect the structure of the HTML.

For one, using `display: table` with a `display: table-cell` child enabled consistent and robust vertical centering of elements. Also, `table-cell` elements inside table elements space themselves perfectly; they don't suffer rounding issues like floated elements.

**Flexbox overcomes them all**

**Inline-flex**
Flexbox has an inline variant to complement _inline-block_ and _inline-table_.

**The align-self property**
Individual flex items can use the align-self property to align themselves.

```html
<style>
  .FlexWrapper {
    background-color: indigo;
    display: flex;
    height: 200px;
    width: 400px;
  }
  .FlexItem {
    background-color: #34005b;
    display: flex;
    height: 100px;
    width: 200px;
  }
  .AlignSelf {
    align-self: flex-end;
  }
</style>
<div class="FlexWrapper">
  <div class="FlexItem">I am content in the inner Flexbox 1</div>
  <div class="FlexItem AlignSelf">I am content in the inner Flexbox 2</div>
  <div class="FlexItem">I am content in the inner Flexbox 3</div>
</div>
```
