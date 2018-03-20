# Document Structure

**Note:** To see your project live as you code, simply type `httpserver` in the terminal, and this will start a server for you. Now you can go to the IP address that the terminal gives you to view your web pages! (Check out [this Help Center article](http://help.learn.co/the-learn-ide/common-ide-questions/viewing-html-pages-in-the-learn-ide) for more information).

<iframe width="640" height="480" src="//www.youtube.com/embed/RBQX-Ko7A_s?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>

<p><a href="https://www.youtube.com/watch?v=RBQX-Ko7A_s">Alternate video link</a>.</p>

<p><a href="http://www.w3schools.com/html/html_charset.asp">Resource Link: HTML Encoding (Character Sets)</a></p>

### Cloning Down Your Repository

If you've completed the steps in the Setting Up a New Site lesson, clone down
your existing exceptional-realty repository by do the following:

* Open the Learn IDE, and in the terminal, type `git clone https://github.com/<your_username_here>/exceptional-realty`
* A folder with your previous work will appear in the IDE file tree.

Alternatively, if you are having trouble or do not have a repository
set up, you can access all the files you need to follow along by following the following steps to clone down the demo:

* In your terminal, type `git clone https://github.com/learn-co-curriculum/exceptional-realty-demo`.
* Once the repository is cloned down, type `cd exceptional-realy-demo` to navigate into the repository folder.
* In the project folder, type `git fetch document-structure`. This will copy the branch `document-structure` to your local environment.
* To switch to this branch, type `git checkout document-structure`, and you should see files appear in your directory tree.

These files mirror the files that exist at the start of this lesson, so use these to build from and follow along.

### Basic HTML structure

#### `<!DOCTYPE html>`

At the top of every HTML document, you're always going to start off with the same element, `doctype`. The `doctype` element starts with a `<`, followed by an `!` and `doctype`, then specifies which version of HTML we want to use. In HTML5, we just say `html`, and the browser will interpret the rest of the document as HTML5. Go ahead and add `<!DOCTYPE html>` to your `index.html` file.

#### `<html> </html>`

The next element is also always required: `<html>`. This tells the browser that everything that falls between the opening and closing `html` tags is to be interpreted as HTML code.

One attribute that is important to include in the `<html>` tag is `lang`, which declares what language the webpage is written in. In our case, writing in English, we will use `lang="en"`. This helps search engines to know what language a page is in. Our `index.html` should now look like this:

```
<!DOCTYPE html>
<html lang="en">
</html>
```

#### `<!-- Comments -->`

Inside our HTML, sometimes we want to leave notes either for ourselves or for other developers. An example might be a brief explanation of what some part of the code is doing, or an important message or reminder. We can write comments by wrapping the text we want like so:

```
<!-- This is a comment! -->
```

Text included in a comment will not be visible on the webpage, but will be visible in the browser console and `.html` file.

#### `<head> </head>`

Inside our `<html>` tags, we divide the page into two main sections, `<head>`, and `<body>`, which both play unique roles. Before we get to adding viewable content, there are some additional bits of information we need to declare about our webpage, and this information will be stored in the `<head>`.

In the `<head>` section, we place a number of specific tags.

* The `<meta>` tag provides metadata about the document, including what character set to us, a description of the content, specific keywords, and the author. Adding this metadata on the content of the page helps search engines to know what the page contains. There is also a `viewport` method, which instructs the browser on how to control the page's dimensions and scaling. Examples of `<meta>` tags:

```
<meta charset="UTF-8">
<meta name="description" content="Exceptional Realty, your real estate agent for buying, selling, and renting in all of Rhode Island">
<meta name="keywords" content="Exceptional Realty, real estate, houses, property">
<meta name="author" content="Jon Grover">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* The `<link>` tag is also used here, and is for importing in external files. Most commonly, we'll see this being used to import in CSS style sheets, fonts, and JavaScript files and libraries.
* Another common tag in the `<head>` is `<title>`. The `<title>`, as its name implies, is where the title of the webpage should be entered. Text added inside the `<title>` tags will appear up on your browser tab.

### `<body> </body>`

All viewable content of a webpage is contained within the `<body>` section of the page. In the next lesson, we'll go into some of the basic text elements that go into the `<body>`.

<p class='util--hide'>View <a href='https://learn.co/lessons/document-structure'>Document Structure</a> on Learn.co and start learning to code for free.</p>
