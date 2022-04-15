# Document Structure Continued

## Learning Goals

- Recognize basic HTML document structure
- Recognize HTML comments
- Describe the `head` section and its contents
- Create an HTML document

## Introduction

Every HTML document has a specific set of required tags. Because these are
required _every_ time we create a web page, it is valuable to gain a more
in-depth understanding of what these tags do, why they are useful, and how they
work in context to the modern web.

We will be both reviewing setting up well-formed HTML documents and expanding a
bit on the `DOCTYPE`, `html` and `head` tags, as well as introducing how to add
comments within our HTML code.

## Getting Started

If you haven't already, fork and clone this lesson into your local environment.
Navigate into its directory in the terminal, then run `code .` to open the files
in Visual Studio Code.

## Recognize Basic HTML Document Structure

Let's start by adding the bare essentials of an HTML document to the provided
`index.html` file:

- A `DOCTYPE` tag, which looks like this: `<!DOCTYPE html>`
- Opening and closing `html` tags
- Opening and closing `head` tags nested inside the `html` tags
- Opening and closing `body` tags nested inside the `html` tags

> Note: Recall that best practice indicates that any HTML elements that are
> nested inside other HTML elements (i.e., between the opening and closing tags
> of another element) should be indented. It is not *necessary* to use
> indenting, either for the HTML to render properly or to pass the tests, but
> it's a good habit to get into. Go ahead and indent the `head` and `body` tags
> inside the `html` tags, if you haven't already.

If written correctly, running `learn test` now will pass three of the seven
tests:

- `has a DOCTYPE tag`
- `has opening and closing HTML tags`
- `has <head> and <body> tags nested in the <html> tag`

However you will not be done yet! We have to make **all** the tests pass in
order to make the test code happy! Let's get to it!

Let's take a closer look at these tags.

### `<!DOCTYPE html>`

At the top of every HTML document, you're always going to start off with the
same element, `DOCTYPE`. In the early days of the internet, there were fewer
standards, and it was important to declare the specific way we wanted browsers
to interpret the file at the top of each file. Netscape and Internet Explorer
would look for this declaration and handle the content differently depending on
what it found. These days, every current browser is compatible with HTML5, and
`DOCTYPE` is mainly used to tell the browser to render the page in standards
compliant mode.

The `DOCTYPE` element, as with all HTML, starts with a `<` and ends with a `>`.
Uniquely, the `DOCTYPE` tag starts with an exclamation point, `!`, followed by
`DOCTYPE`, then specifies which version of HTML we want to use. In HTML5, we
just write `html` and the browser interprets the rest of the document as HTML5.

### `<html>`

The next element is also always required: `<html>`. This tells the browser that
everything that falls between the opening and closing `html` tags is to be
interpreted as HTML code.

One attribute that is important to include in the `<html>` tag is `lang`, which
declares what language the webpage is written in. In our case, writing in
English, we will use `lang="en"`. This helps search engines to know what
language a page is written in. Google, for instance, can use the `lang`
attribute to know when to prompt users about translating web content.

```html
<html lang="en"></html>
```

Go ahead and add the language attribute to the `html` element. Now, if you run
the tests again, there should be four passing.

## Recognize HTML Comments

Sometimes we want to leave notes either for ourselves or for other developers
inside of our HTML files. An example might be a brief explanation of what some
part of the code is doing, or an important message or reminder. We can write
comments by wrapping the text we want like so:

```html
<!-- This is a comment! -->
```

Text included in a comment will not be visible on the webpage, but will be
visible in the browser console and `.html` file.

## Describe the `head` Section and its Contents

Inside our `html` tags, we divide the page into two main sections, `head`, and
`body`, which both play unique roles. The remainder of our HTML lessons will
cover everything within the `body` section, but before we get there, there are
some additional bits of information we need to understand regarding the `head`.
The `head` section is not visible to a website visitor, but it contains a lot of
useful info about our webpage.

In the `head` section, we place a number of specific tags, most notably:

- `<link>`
- `<title>`

Let's look at each of them in turn:

### `link`

The `<link>` tag is for importing files.

**CAREFUL**: It's easy to get confused here because web pages are full of links,
but also use a `<link>` tag. "Links" that you click on are located within the
`<body>` element. The `<link>` tags are located in the `<head>` element.

Most commonly, we'll use `<link>` to import CSS files. Go ahead and add the
following inside your `head` element (don't forget to indent!):

```html
<link rel="stylesheet" type="text/css" href="style.css" >
```

With a simple website, linking a single style sheet might work just fine. Often,
however, on fully developed websites, multiple style sheets are linked in the
`head`. For example, when doing the final polishing of a web site you might see
a series of `<link>` definitions like:

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
/>
<link rel="stylesheet" type="text/css" href="company.css" />
<link rel="stylesheet" type="text/css" href="engineering-department.css" />
<link rel="stylesheet" type="text/css" href="project-x-launch.css" />
<link rel="stylesheet" type="text/css" href="typography.css" />
```

In this example we're getting some CSS information from the
[Bootstrap](https://getbootstrap.com/) project, we're integrating a company
style standard, an engineering style standard, a style motif for the launch of
"Project X" and then we're adding some specific rules about font display. You
can bring in a **lot** of information with the `<link>` tag!

This specific example aside, you'll be learning a lot more about linking files
to create stylistic effect in later lessons.

Run the test again; you should now have five passing. Only two more to go!

### `title`

One more common tag we find in the `head` is `title`. The `title`, as its name
implies, is where the title of the webpage should be entered. Text added inside
the `title` tags will appear up on your browser tab. Add the following title for
our `index.html` page:

```html
<title>My Site Title</title>
```

Notice that unlike the previous tags we've discussed, `title` has an opening and
closing tag. In most modern browsers, tabs are fairly small, so it is often best
to keep the title brief, or it will not be fully visible.

Adding the title should get the last two tests passing! Run the tests one last
time to verify.

## Conclusion

In this lesson, we've reviewed the basics of document structure, as well as what
is typically contained within the `head`. Using the `head` section, we are able
to add relevant data about our webpage as a whole. As a bonus surprise, by
learning how to make our web pages _search engine friendly_, we've also dabbled
a bit into the basics of Search Engine Optimization! We are now ready to take a
deeper dive into the visual content of HTML pages.
