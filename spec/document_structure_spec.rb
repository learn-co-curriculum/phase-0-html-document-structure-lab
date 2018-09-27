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
