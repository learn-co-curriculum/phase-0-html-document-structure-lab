const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const globalJsdom = require("global-jsdom");
const { HtmlValidate } = require("html-validate");

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

globalJsdom(html);

describe("index.html", () => {
  describe("valid document structure", () => {
    it("begins with a DOCTYPE tag", () => {
      expect(html, "Missing DOCTYPE html tag").to.contain("<!DOCTYPE html>");
    });

    it("has opening and closing HTML tags", () => {
      expect(html).to.contain("<html");
      expect(html).to.contain("</html>");
    });

    it("has a language attribute in the <html> tag", () => {
      // This finds the first <html> tag in the HTML document
      const parsedHtml = document.querySelector("html");
      expect(
        parsedHtml.lang,
        'Include a lang attribute assigned to "en" for English'
      ).to.eq("en");
    });

    it("has <head> and <body> tags nested in the <html> tag", () => {
      expect(html, "Include a <head> tag within the <html> tag").to.contain(
        "<head>"
      );
      expect(html).to.contain("</head>", "Include a closing </head> tag");
      expect(html).to.contain(
        "<body>",
        "Include a <body> tag within the <html> tag"
      );
      expect(html).to.contain("</body>", "Include a closing </body> tag");
      // This finds the first <html> tag in the HTML document
      const parsedHtml = document.querySelector("html");
      // parsedHtml.children returns all tags nested within the <html> tag
      // the first child should be a <head> tag
      expect(parsedHtml.children[0].tagName).to.eq("HEAD");
      // the second child should be a <body> tag
      expect(parsedHtml.children[1].tagName).to.eq("BODY");
    });
  });

  describe("valid <head> structure", () => {
    it("has a <link> tag to an external stylesheet", () => {
      // find a <link> tag within the <head> tag
      const link = document.querySelector("head > link");

      expect(link, "No <link> tag found in the <head>").to.exist;
      expect(link.href, "The 'href' attribute is missing in the link tag").to
        .exist;
      expect(link.rel, "The 'rel' attribute is missing in the link tag").to
        .exist;
    });

    it("has a <title> tag to enclose the site title", () => {
      // find a <title> tag within the <head> tag
      const title = document.querySelector("head > title");

      expect(title, "No <title> tag found in the <head>").to.exist;
      expect(title.textContent).to.eq("My Site Title");
    });
  });

  describe("valid html", () => {
    it("has a valid HTML structure", () => {
      // this uses a library to detect invalid HTML
      const validator = new HtmlValidate({
        extends: ["html-validate:recommended"],
        rules: {
          "void-style": ["warn"],
        },
      });
      const report = validator.validateString(html);
      const errors = report.results[0].messages
        .map((m) => m.message)
        .join("\n\t");

      expect(report.valid, `invalid HTML: \n\t${errors}`).to.be.true;
    });
  });
});
