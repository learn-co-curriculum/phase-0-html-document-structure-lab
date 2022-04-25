const chai = require("chai");
const fs = require("fs");
const path = require("path");
const globalJsdom = require("global-jsdom");
const { HtmlValidate } = require("html-validate");

chai.use(require("chai-dom"));
const { expect } = chai;

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

globalJsdom(html);

describe("index.html", () => {
  describe("valid document structure", () => {
    it("has a DOCTYPE tag", () => {
      expect(html).to.contain("<!DOCTYPE html>");
    });

    it("has opening and closing HTML tags", () => {
      expect(html).to.contain("<html");
      expect(html).to.contain("</html>");

      // document.querySelector("html") finds the first <html> tag in the HTML document
      const htmlElement = document.querySelector("html");
      const hint = "Missing <html> tag";

      expect(htmlElement, hint).to.exist;
    });

    it("has <head> and <body> tags nested in the <html> tag", () => {
      expect(html).to.contain("<head>");
      expect(html).to.contain("</head>");
      expect(html).to.contain("<body>");
      expect(html).to.contain("</body>");

      // This finds the first <html> tag in the HTML document
      const htmlElement = document.querySelector("html");
      // parsedHtml.children returns all tags nested within the <html> tag

      // the first child should be a <head> tag
      const hint1 = "Include a <head> element nested inside the <html> element";
      expect(htmlElement, hint1).to.have.descendant("head");

      // the second child should be a <body> tag
      const hint2 = "Include a <body> element nested inside the <html> element";
      expect(htmlElement, hint2).to.have.descendant("body");
    } );
    
    it("has a language attribute in the <html> tag", () => {
      const htmlElement = document.querySelector("html");
      expect(htmlElement).to.have.attribute("lang", "en");
    });
  });

  describe("valid <head> structure", () => {
    it("has a <link> tag that links to an external stylesheet", () => {
      // find a <link> tag within the <head> tag
      const link = document.querySelector("head > link");

      const hint1 = "No <link> tag found in the <head>";
      expect(link, hint1).to.exist;

      expect(link).to.have.attribute("href", "style.css");

      expect(link).to.have.attribute("rel", "stylesheet");
    });

    it("has a <title> tag to enclose the site title", () => {
      // find a <title> tag within the <head> tag
      const title = document.querySelector("head > title");

      const hint1 = "No <title> tag found in the <head>";
      expect(title, hint1).to.exist;

      const hint2 =
        "The content inside the <title> tag should be 'My Site Title'";
      expect(title, hint2).to.contain.text("My Site Title");
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

      let errorReport;
      if (report.results.length > 0) {
        errorReport = report.results[0].messages
          .map((m) => m.message)
          .join("\n\t");
      }

      expect(report.valid, `invalid HTML: \n\t${errorReport}\n\t`).to.be.true;
    });
  });
});
