RSpec.describe "Well-Formed HTML Document" do
  it 'has a valid document structure' do
    expect(parsed_html.children.first).to be_html5_dtd, "Missing DOCTYPE html tag"
    expect(parsed_html.child.name).to match(/html/i)

    expect(html_file_contents).to include('<html')
    expect(html_file_contents).to include('</html>')

    head = parsed_html.search('html > head').first

    expect(head.name).to eq('head')

    expect(html_file_contents).to include('</head>')
    body = parsed_html.search('html > body').first

    expect(body.name).to eq('body')

    expect(html_file_contents).to include('</body>')

    validator = W3CValidators::NuValidator.new
    html = File.read('./index.html')
    results = validator.validate_text(html)

    error_messages = "Expected a valid w3c document but got:\n#{results.errors.collect{|e| e.to_s}.join("\n")}"

    expect(results.errors).to be_empty, error_messages
  end

  it 'has a language attribute in the <html> tag' do
    expect(html_file_contents).to include('<html lang="en">'), 'Include a lang attribute assigned to "en" for English'
  end

  context 'within <head>' do
    it 'contains a <meta> tag for the character set' do
      head = parsed_html.search('html > head')
      meta = head.children.select {|ch|
        ch.name == "meta" &&
        ch.attributes["charset"]
      }.first
      expect(meta).to_not be_nil, "No <meta> tag with a 'charset' attribute found"
      expect(meta.attributes["charset"].value).to eq("UTF-8"), "The 'charset' attribute does not equal 'UTF-8'"
    end

    it 'contains a <meta> tag for the description' do
      head = parsed_html.search('html > head')
      meta = head.children.select {|ch|
        ch.name == "meta" &&
        ch.attributes["name"] &&
        ch.attributes["name"].value == "description"
      }.first
      expect(meta).to_not be_nil, "No <meta> tag with a 'name' attribute set to 'description' was found"
      expect(meta.attributes["content"]).to_not be_nil, "No 'content' attribute found for the description meta tag"
      expect(meta.attributes["content"].value).to_not eq(""), "The content attribute needs a text value"
    end

    it 'contains a <meta> tag for keywords' do
      head = parsed_html.search('html > head')
      meta = head.children.select {|ch|
        ch.name == "meta" &&
        ch.attributes["name"] &&
        ch.attributes["name"].value == "keywords"
      }.first
      expect(meta).to_not be_nil, "No <meta> tag with a 'name' attribute set to 'keywords' was found"
      expect(meta.attributes["content"]).to_not be_nil, "No 'content' attribute found for the keywords meta tag"
      expect(meta.attributes["content"].value).to_not eq(""), "The content attribute needs a text value"
    end

    it 'contains a <meta> tag for the author' do
      head = parsed_html.search('html > head')
      meta = head.children.select {|ch|
        ch.name == "meta" &&
        ch.attributes["name"] &&
        ch.attributes["name"].value == "author"
      }.first
      expect(meta).to_not be_nil, "No <meta> tag with a 'name' attribute set to 'author' was found"
      expect(meta.attributes["content"]).to_not be_nil, "No 'content' attribute found for the author meta tag"
      expect(meta.attributes["content"].value).to_not eq(""), "The content attribute needs a text value"
    end

    it 'contains a <meta> tag for the viewport' do
      head = parsed_html.search('html > head')
      meta = head.children.select {|ch|
        ch.name == "meta" &&
        ch.attributes["name"] &&
        ch.attributes["name"].value == "viewport"
      }.first
      expect(meta).to_not be_nil, "No <meta> tag with a 'name' attribute set to 'viewport' was found"
      expect(meta.attributes["content"]).to_not be_nil, "No 'content' attribute found for the viewport meta tag"
      expect(meta.attributes["content"].value).to eq("width=device-width, initial-scale=1.0"), "The content attribute for the viewport meta tag should equal 'width=device-width, initial-scale=1.0'"
    end

    it 'contains a <link> tag to an external stylesheet' do
      link = parsed_html.search('html > head > link').first
      expect(link).to_not be_nil, "No <link> tag found in the <head>"
      expect(link.attributes["href"]).to_not be_nil, "The 'href' attribute is missing in the link tag"
    end


    it 'contains a <title> tag to enclose the site title' do
      title = parsed_html.search('html > head > title').first

      expect(title.name).to eq('title')

      expect(html_file_contents).to include('</title>')
    end
  end

end
