
from playwright.sync_api import sync_playwright

def verify_feature_section():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        page.goto("http://localhost:3000")

        # Wait for content to load
        page.wait_for_timeout(2000)

        # Check if the text "Modern" is present in the DOM
        if page.locator("text=Modern").count() == 0:
            print("Text 'Modern' not found on page")
            print(page.content())
            browser.close()
            return

        print("Found 'Modern'")

        # Try to scroll using mouse wheel instead of scroll_into_view
        page.mouse.wheel(0, 3000)
        page.wait_for_timeout(1000)

        page.screenshot(path="verification/feature_section_laptop.png")

        # Also check mobile layout
        page.set_viewport_size({"width": 375, "height": 800})
        page.mouse.wheel(0, 3000)
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/feature_section_mobile.png")

        browser.close()

if __name__ == "__main__":
    verify_feature_section()
