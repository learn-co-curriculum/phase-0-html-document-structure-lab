# Document Structure

## Objectives

- Learn the basic skeleton of a modern HTML file
- Examine the skeleton with an existing project

## Getting Started

**Note:** To see your project live as you code, type `httpserver` in the
terminal and this will start a server for you. You can go to the IP address in
your browser that the terminal gives you to view your web pages! (Check out
[this Help Center
article](http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide)
for more information).

## Basic HTML Structure:

Let's begin by making changes to our `index.html` file.

#### `<!DOCTYPE html>`

At the top of every HTML document, you're always going to start off with the
same element, `DOCTYPE`. The `DOCTYPE` element starts with a `<`, followed by
an `!` and `DOCTYPE`, then specifies which version of HTML we want to use. In
HTML5 we just write `html` and the browser interprets the rest of the
document as HTML5. Add a `>` at the end to close the element. Go ahead and
add `<!DOCTYPE html>` to your `index.html` file.

---

#### `<html>`

The next element is also always required: `<html>`. This tells the browser
that everything that falls between the opening and closing `html` tags is to
be interpreted as HTML code.

One attribute that is important to include in the `<html>` tag is `lang`, which
declares what language the webpage is written in. In our case, writing in
English, we will use `lang="en"`. This helps search engines to know what
language a page is written in. Our `index.html` should now look like this:

```html
<!DOCTYPE html>
<html lang="en">
</html>
```

---

#### `<!-- Comments -->`

Sometimes we want to leave notes either for ourselves or for
other developers inside of our HTML files. An example might be a brief explanation of what some part of
the code is doing, or an important message or reminder. We can write comments
by wrapping the text we want like so:

```html
<!-- This is a comment! -->
```

Text included in a comment will not be visible on the webpage, but will be
visible in the browser console and `.html` file.

---

#### `<head>`

Inside our `<html>` tags, we divide the page into two main sections, `<head>`,
and `<body>`, which both play unique roles. Before we get to adding viewable
content, there are some additional bits of information we need to declare about
our webpage, and this information will be stored in the `<head>`. Information stored in the head is generally _not_ displayed in the browser viewport. Instead, the `<body>` contains everything the user generally sees and interacts with.

In the `<head>` section, we place a number of specific tags, most notably:
  - `<meta>`
  - `<link>`
  - `<title>`

Let's look at each of them in turn:

###### `<meta>`

* The `<meta>` tag provides metadata about the document, including what
  character set to use, a description of the content, specific keywords, and the
  author. Adding this metadata on the content of the page helps search engines know what the page contains. There is also a `viewport` method, which
  instructs the browser on how to control the page's dimensions and scaling.
  Examples of `<meta>` tags we can add into our `head` section:

```html
<meta charset="UTF-8">
<meta name="description" content="Exceptional Realty Group, your real estate agent for buying, selling, and renting throughout New York City">
<meta name="keywords" content="Exceptional Realty Group, real estate, houses, property">
<meta name="author" content="Jon Grover">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* The `<link>` tag is for importing files.
  Most commonly, we'll see this being used to import CSS files. In the example below, `link` is used to import a specific
  Google font:

```html
<link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">
```

* Another common tag in the `<head>` is `<title>`. The `<title>`, as its name
  implies, is where the title of the webpage should be entered. Text added inside
  the `<title>` tags will appear up on your browser tab. Let's add a title for
  our `index.html` page:

```html
<title>Exceptional Realty Group - Luxury Homes</title>
```

If you spin up `httpserver` and check out the site, it'll still be blank, but
notice that the tab has our title in it!

## Looking Forward

In the next lesson, we'll jazz up our website, flesh out the `<body>`, and start building the content the user interacts with in the browser.

<p class='util--hide'>View <a href='https://learn.co/lessons/document-structure'>Document Structure</a> on Learn.co and start learning to code for free.</p>

[setting-up-a-new-site]: https://github.com/learn-co-curriculum/setting-up-a-new-site
