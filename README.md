# SUSTAINABLE INVESTING

## By Mark Todman
---

![Example of the application on multiple devices.](/assets/images/readme-images/amiresponsive.png)

The deployed [Sustainable Investing website](https://marktodman.github.io/sustainable-investing/).

The [GitHub repository](https://github.com/marktodman/sustainable-investing).

---
## USER EXPERIENCE (UX)
---

## Strategy

Sustainable Investing is a webite designed for retail investors looking for more information on sustainable investment. Sustainable Investing aims to be a credible starting point for retail investors looking for guidance to inform sustainable investment decisions, providing ideas and access to resources to move forward with sustainable investments.

### Target Audience:

- People who want to invest their money in sustainable assets
- First time investors
- Existing investors looking for new investment ideas

## Scope

Sustainable Investing provides an introduction to people considering investing in a sustainable manner. 

Ease-of-use is defined by mobile-first, responsive design, with simple navigation and clearly marked links to external resources.

The site includes a sign-up funcition to start and build a relationship with the audience.

## Structure

Sustainable Investing is split into four clear sections:

1. What is sustainable investing?
- an introduction to sustainable investing

2. Why invest sustainably?
- guidance on why investors should consider investing in sustainable assets
- factors to consider when making sustainable investments

3. How to start investing sustainably?
- suggestions about the type of sustainable investments to consider
- links to external sites to make investments in sustainable assets

4. Newsletter sign-up 
- access additional information in the future

## Features

The site is designed to be easy to use and to quickly access useful information on sustainable investing, which is why the site is on one scrolling mobile-friendly page. 

The navigation bar is simple and intuitive with a hover function to help guide the user. The punctuation (?, ?, !, +) in the Nav links is included to emphaise the words.

![Nav bar with hover highlight.](/assets/images/readme-images/nav.png)

The hero image text is in a complimentary call out box, ensuring the message is clear. The messaging is to reassure the user that sustainable investments can be impactful. The arrow on the hero image invites the readers to scroll down on screens where the section text is not visible.

![Hero text call out and arrow.](/assets/images/readme-images/hero-image-text-arrow.png)

On smaller screens (less than 850px) there is a back to top button, designed so the user can easily move back to the navigation bar to access additional information. The button activates once the user has scrolled 20px from the top. The back to top button is removed on larger screens as the full content is easy to access via scroll.

![Back to top button on smaller screens.](/assets/images/readme-images/back-to-top-button.png)

The website provides integrated links to additional external services that help people make a start in sustainable investing. Links have a hover function to help them stand out. All external links open in a new tab.

![Text link example with hover highlight.](/assets/images/readme-images/text-link-example.png)

There is a newsletter sign-up under the More+ section. This provides the user with the opportunity to access regular updates and additional information on sustainable investing. The newsletter is in a call out box, designed to stand out on the page. The required fields have been kept simple to make it easy for the user to sign up, with just first name (so emails can be personalised) and email address - both fields are required. The input fields are labelled to improve accessibility. The subscribe button is highlighted on hover to demonstrate that this is actively clickable by the user.

![Newsletter sign up box.](/assets/images/readme-images/newsletter.png) ![Subscribe button with hover effect.](/assets/images/readme-images/subscribe-hover.png)

The footer includes links to social media sites, so that users can connect and access more information on sustainable investing. The links open in a new tab. The footer also includes a disclaimer making it clear that the site is not making recommendations about particular investments or any of the external sources linked on the website.

![Footer with social links and disclaimer text.](/assets/images/readme-images/footer.png)

## Visual Design

The website is designed to be clean and clear for the user. A green color palette was chosen using suggestions on [Coolors](https://coolors.co/). These colors were used throughout with darker colors for the text and lighter colors for the call out boxes. Links use the inverse of dark colors for the padding and light colors for the text.

![Coolors color palette for Sustainable Investing website.](/assets/images/readme-images/sustainable-investing-colors.png)

Cabin Sketch was chosen for the logo as it is an informal font. As the site is designed for new investors and investors looking for new ideas, an informal font is used to make the user feel relaxed (unlike many other financial webites). Cabin Sketch is used for the logo and throughout the website in the section headers.

![Logo with Cabin Sketch font.](/assets/images/readme-images/logo.png)

Cabin, a sans-serif font, was chosen for the sub-section headers as this compliments the logo and section headers.

Libre Baskerville, a serif font, was chosen for the main text as it is easy to read and offers a good contrast with the Cabin and Cabin Sketch.

The sections and sub-sections appear as rows on smaller (less than 850px) screens. On larger (over 850px) screens the sections are in three sub-section columns. This design is repeated throughout the page and provides emphasis and balance.

The sections are separated by rows of icons that visually emphasise the section text that has gone before. They serve to break up the sections and to reinforce the messaging.

![Environmental Social and Governance icons.](/assets/images/readme-images/esg-icons.png) ![Impact Growth and Balance icons.](/assets/images/readme-images/igb-icons.png)

--- 
## TESTING
---

## HTML Validation

The HTML code has been tested for errors with the [W3 HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarktodman.github.io%2Fsustainable-investing%2F) and passed with no errors.

## CSS Validation

The CSS code has been tested for errors with the [W3 CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarktodman.github.io%2Fsustainable-investing%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) and passed with no errors.

## Accessibility 

The website has been tested for accessbility using Lighthouse on Chrome DevTools and scored 100.

![Extract from Lighthouse report.](/assets/images/readme-images/lighthouse.png)

## Fixes

There were a number of fixes identified during validation:

1. Duplicate classes. Some classes had been duplicated in the HTML elements associated with the icons. The duplications were deleted.
2. Font contrast. The icon fonts did not provide enough contrast. The font-family and font-color were changed to improve accessiblity.
3. Input fields on Newsletter. The input fields were not labelled. Labels were added to improve accessibility.
4. Image file size. The hero image was origianlly 4MB causing the site to load slowly. The image was resolution was reduced, compressed and converted to WebP format, which has improved performance.

---
## DEPLOYMENT
---

The site has been deployed through [GitHub Pages](https://marktodman.github.io/sustainable-investing/). 

## Remote Deployment

The steps to remote deployment via GitHub Pages are:

1. Create an account at [GitHub](www.gitpod.io).
2. Log into your GitHub account.
3. Go to the GitHub repository for [Sustainable Investing](https://github.com/marktodman/sustainable-investing).
4. Click on 'Settings'.
5. Select 'Pages' from the menu on the left-hand-side.
6. Under 'Source' select 'Main' and click 'Save'.
7. Notification that the site is published appears on the top of the pages section together with a [link to the site](https://marktodman.github.io/sustainable-investing/).

## Local Depoloyment

The steps to make a local copy via GitHub pages are:

1. Create an account at [GitHub](www.gitpod.io).
2. Log into your GitHub account.
3. Go to the GitHub repository for [Sustainable Investing](https://github.com/marktodman/sustainable-investing).
4. Click the green 'Code' button.
5. Select your chosen clone format: HTTPS, SSH or GitHub CLI.
6. Click the 'copy' button.
7. Deploy the copy locally.

## Forking the GitHub Repository

To use this code and make changes without affecting the original code, it is possible to 'fork' the code on the GitHub repository through the following steps:

1. Create an account at [GitHub](www.gitpod.io).
2. Log into your GitHub account.
3. Go to the GitHub repository for [Sustainable Investing](https://github.com/marktodman/sustainable-investing).
4. Click the 'Fork' button in the upper right hand corner of the page.
5. A copy of the repository will be available in your own repository.

---
## CREDITS
---

All content is originaly written by the site author, Mark Todman. Additional links to external material are provide in the website.

[Scott Webb on Pexels](https://www.pexels.com/@scottwebb) provided the hero image.

Icons were sourced from [Font Awesome](https://fontawesome.com/).

[Tiny JPG](https://tinyjpg.com/) and [Compress.com](https://www.compresss.com/compress-webp.html) were utilised to compress images. [Cloud Convert](https://cloudconvert.com/jpg-to-webp) was used to convert JPG to WebP format to try and improve Performance.

The scroll to top button was created using code taken directly from [W3 Schools](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp). The helpful community at [Stack Overflow](https://stackoverflow.com/questions/70734242/hidden-javascript-button-on-larger-screen) ensured that it would not display on larger screens.

[Kevin Powell](https://www.youtube.com/user/KepowOb) provided invaluable guidance on CSS Grid.

Example code and source database address from the [Code Institute](https://codeinstitute.net/) were utilised in the Newsletter sign up feature.

Chris Quinn as Mentor and John Traas in Tutor Support at the [Code Institute](https://codeinstitute.net/) provided excellent direction and helped with resources to solve CSS Grid and Flexbox challenges.







