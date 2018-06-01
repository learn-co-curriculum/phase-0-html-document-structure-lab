# Document Structure Continued

## Problem Statement

Every HTML document has a specific set of required tags. Because these are
required _every_ time we create a web page, it is valuable to gain a more
in-depth understanding of what these tags do and why they are useful and how
they work in context to the modern web.

In this lesson, we will be both reviewing what we have learned about a well
formed HTML document and expanding a bit on the `doctype`, `html` and `head`
tags, as well as introducing how to add comments within our HTML code.

## Objectives

1. Reinforce our understanding of the basic HTML document structure
2. Introduce HTML comments
3. Expand our understanding of the `head` section and its contents
4. Reinforce our understanding of document structure through creation

## Reinforce Our Understanding Of The Basic HTML Document Structure

Let's quickly review the bare essentials of an HTML document. In the provided
`index.html` file, add the following tags:

* A `doctype` tag
* Opening and closing `html` tags
* Opening and closing `head` tags nested inside the `html` tags
* Opening and closing `body` tags nested inside the `html` tags

If written correctly, running `learn` now will pass the first test of this lab.
Let's take a closer look at these tags.

### `<!DOCTYPE html>`

At the top of every HTML document, you're always going to start off with the
same element, `doctype`. In the early days of the internet, there were fewer
standards, and it was important to declare the specific way we wanted browsers
to interpret the file at the top of each file. Netscape and Internet Explorer
would look for this declaration and handle the content differently depending on
what it found. These days, every current browser is compatible with HTML5, and
`doctype` is mainly used to tell the browser to render the page in standards
compliant mode.

The `DOCTYPE` element, as with all HTML, starts with a `<`
and ends with a `>`. Uniquely, the `doctype` tag starts with an exclamation
point, `!`, followed by `DOCTYPE`, then specifies which version of HTML we want
to use. In HTML5, we just write `html` and the browser interprets the rest of the
document as HTML5.

### `<html>`

The next element is also always required: `<html>`. This tells the browser
that everything that falls between the opening and closing `html` tags is to
be interpreted as HTML code.

One attribute that is important to include in the `<html>` tag is `lang`, which
declares what language the webpage is written in. In our case, writing in
English, we will use `lang="en"`. This helps search engines to know what
language a page is written in. Google, for instance, can use the `lang`
attribute to know when to prompt uses about translating web content.

```html
<html lang="en">
</html>
```

## Introduce HTML Comments

Sometimes we want to leave notes either for ourselves or for other developers
inside of our HTML files. An example might be a brief explanation of what some
part of the code is doing, or an important message or reminder. We can write
comments by wrapping the text we want like so:

```html
<!-- This is a comment! -->
```

Text included in a comment will not be visible on the webpage, but will be
visible in the browser console and `.html` file.

## Expand Our Understanding Of The `head` Section And Its Contents

Inside our `html` tags, we divide the page into two main sections, `head`, and
`body`, which both play unique roles. The remainder of our HTML lessons will
cover everything within the `body` section, but before we get there, there are
some additional bits of information we need to understand regarding the `head`.
The `head` section is not visible to a website visitor, but it contains a lot of
useful info about our webpage.

In the `head` section, we place a number of specific tags, most notably:
  - `<meta>`
  - `<link>`
  - `<title>`

Let's look at each of them in turn:

### `meta`

The `meta` tag provides metadata about the document, including what character
set to use, a description of the content, specific keywords, and the author.
Adding this metadata on the content of the page helps search engines know what
the page contains, so taking the time to include these will help bump your web
pages up in rank on relevant searches.

There is also a `viewport` method, which instructs the browser on how to control
the page's dimensions and scaling. This becomes important when adding styling,
as some mobile devices automatically scale web pages if there is not specific
setting provided.

Examples of the `<meta>` tags types we can add into our `head` section:

```html
<!-- UTF-8 is the standard for HTML5 web pages -->
<meta charset="UTF-8">

<!-- This description will appear on search engines, displayed as the summary under a web page's link -->
<meta name="description" content="A website devoted to pictures of all my favorite cats, kittens and felines">

<!-- Keywords, separated by commas, help search engine spiders in understanding page content -->
<meta name="keywords" content="cats, kittens, felines, lions, tigers">

<!-- Take credit for your work by including this author meta tag on pages you create -->
<meta name="author" content="Cat Perry">

<!-- Setting the viewport like this will ensure mobile devices don't scale content -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### `link`

The `<link>` tag is for importing files. Most commonly, we'll see this being
used to import CSS files. In the example below, `link` is used to import a
specific Google font:

```html
<link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">
```

Linking stylesheets this way allows multipage websites to share a source of
styling content for every page, making for a consistent, easy to maintain file
structure.  Often, on fully developed websites, multiple stylesheets are linked
in the `head`.  For example, when designing a web page, we can import in fonts
from Google, some specific styling from an external source, like
[Bootstrap](https://getbootstrap.com/), as well as our own custom styling.

### `title`

One more common tag we find in the `head` is `title`. The `title`, as its name
implies, is where the title of the webpage should be entered. Text added inside
the `title` tags will appear up on your browser tab. Adding a title for our
`index.html` page would look something like:

```html
<title>Cat Perry's Favorite Cats</title>
```

Notice that unlike the previous tags we've discussed, `title` has an opening and
closing tag. In most modern browsers, tabs are fairly small, so it is often best
to keep the title brief, or it will not be fully visible.

## Reinforce Our Understanding Of Document Structure Through Creation

Okay, time to put what we've learned to the test. To complete this lab, you must
apply all the tags we've discussed in this lesson.  Run `learn` to see what is
required to pass each test. Each test will urge you on.

## Conclusion

In this lesson, we've reviewed the basics of document structure, as well as what
is typically contained within the `head`.  Using the `head` section, we are able
to add relevant data about our webpage as a whole. As a bonus surprise, by
learning how to make our web pages _search engine friendly_, we've also dabbled
a bit into the basics of Search Engine Optimization! We are now ready to take a
deeper dive into the visual content of HTML pages.

<p class='util--hide'>View <a href='https://learn.co/lessons/document-structure'>Document Structure</a> on Learn.co and start learning to code for free.</p>
