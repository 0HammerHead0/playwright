from playwright.sync_api import sync_playwright

def extract_js_from_panel(page):
    # Wait for side panel to appear
    page.wait_for_selector('[data-testid="event-detail-view"] ul.components li.last-non-empty-child div.CodeMirror')

    # Get all code lines
    lines = page.query_selector_all('div.CodeMirror pre > div')

    js_code = []
    for line_index in range(0, len(lines)):
        # Each line has multiple spans
        span_texts = lines[line_index].query_selector_all('span')

        # Skip the first span (line number) and only take the actual code spans
        words = [span_texts[span_index].inner_text().strip() for span_index in range(1, len(span_texts))]

        js_code.append(' '.join(words[1:]))
        # check this 1: first in your code because it works for the div structure i created

    return '\n'.join(js_code)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()

    # Assuming React dev server is running on localhost:3000
    page.goto('http://localhost:5173')

    event_divs = page.query_selector_all('div.cursor-pointer')

    for index, event_div in enumerate(event_divs, start=1):
        event_div.click(timeout = 50000)  # Click on the event div
        js_code = extract_js_from_panel(page)
        print(f"\n--- JS Code for Event #{index} ---\n{js_code}\n")

        # Close panel by clicking "Close Panel" button
        page.click('button:text("Close Panel")', timeout = 50000)
        page.wait_for_timeout(1000)
    exit()
    # browser.close()
    # context.close()
