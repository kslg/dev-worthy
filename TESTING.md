# DevWorthy Testing

[Back to README.md](README.md)

[<img src="src/assets/images/devworthy_amiresponsive_whole.png" alt="An image representing how the site looks across different devices of varying size.">](https://anthonyradose.github.io/dev-worthy/#home)

[View the live project here.](https://anthonyradose.github.io/dev-worthy/#home)

Manual testing was conducted continuously throughout the development process to ensure the functionality of various features across the site.

-----

## AUTOMATED TESTING

### ✅ W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the site along with validation of CSS.

<details>
  <summary><strong>Index HTML: No Errors ✅</strong></summary>
  <br>
  <img src="src/assets/images/devworthy_w3_index.png" alt="No Errors found." style="border: 2px solid #ccc; border-radius: 8px; max-width: 100%;">
</details>

<details>
  <summary><strong>404 HTML: No Errors ✅</strong></summary>
  <br>
  <img src="src/assets/images/devworthy_w3_404.png" alt="No Errors found." style="border: 2px solid #ccc; border-radius: 8px; max-width: 100%;">
</details>

>
> #### 404 Testing notes
>At the time of testing there were elements of CSS and JS within the file.
>The HTML ONLY was tested here.
>The separation and integration of separate styling and script files may need to be implemented in >future, due to time constraints.
>

<details><summary><strong>Credits.module.css: No Errors ✅</strong></summary>
<img src="src/assets/images/devworthy_w3_css_creditsmodule.png" alt="No Errors found.">
</details>

<details><summary><strong>Favorites.module.css: 🚧 TO BE COMPLETED 🚧</strong></summary>
<img src="src/assets/images/devworthy_w3_css_favoritesmodule.png" alt="No Errors found.">
</details>

<details><summary><strong>Footer.module.css: No Errors ✅</strong></summary>
<img src="src/assets/images/devworthy_w3_css_footermodule.png" alt="No Errors found.">
</details>

<details><summary><strong>Navbar.module.css: 🚧 TO BE COMPLETED 🚧</strong></summary>
<img src="src/assets/images/devworthy_w3_css_navbarmodule.png" alt="No Errors found.">
</details>

<details><summary><strong>QuoteCard.module.css: No Errors ✅</strong></summary>
<img src="src/assets/images/devworthy_w3_css_quotecardmodule.png" alt="No Errors found.">
</details>

<details><summary><strong>index.css: No Errors ✅</strong></summary>
<img src="src/assets/images/devworthy_w3_css_index.png" alt="No Errors found.">
</details>


<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

### Javascript Validation


<sup><sub>[*Back to top*](#contents)</sup></sub>

-----

### Lighthouse

The lighthouse tool within the chrome developer tools has been used to test performance, best practices, accessibility, and SEO. Desktop and mobile tests have been run for each page.

<details><summary>Index</summary>
<img src="" alt="Desktop test for index page">

<img src="" alt="Mobile test for index page">
</details>

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 100 | 100 | 100| 100 |
| Mobile | 100 | 100 | 100 | 100 |

<details><summary>Credits</summary>
<img src="" alt="Desktop test for register page">

<img src="" alt="Mobile test for register page">
</details>

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 100 | 100| 100 | 100 |
| Mobile | 100 | 100 | 100 | 100 |

> Notes for Lighthouse Testing:
>
>
>

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

### WAVE Testing

The site has been tested for accessibility with [WAVE](https://wave.webaim.org). __I ASSUME__

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

## Manual Testing

### Testing Project Criteria

>#### Criteria
>
>1) The team has built one of the 5 suggested projects
>2) The team has innovated on their choice of project
>3) The project is fully responsive
>4) The project is well planned using github projects or other issues board


| Criteria | Description | Image |
| :----: | :----: | :----: |
| 1) The team has built one of the 5 suggested projects | The chosen project was the daily boost app | |
| 2) The team has innovated on their choice of project | The team has innovated in the build of the app, using react and implementing API's to generate content | |
| 3) The project is fully responsive | Project is usable and appealing across all screen sizes | |
| 4) The project is well planned using github projects or other issues board | Github projects has been used throughout | |

### Testing User Stories

>#### User Goals
>
>- View inspiring quotes
>- View coding tips and tricks
>- Save quotes to favourites
>- View information about the team
>

| Goal | Implementation | Image |
| :---: | :---: | :---: |
| View Inspiring quotes | Quotes can be viewed on the main page | |
| View coding tips and tricks | Coding tips can be viewed on the main page | |
| Save quotes to favourites | Quotes can be saves from the quotes page and viewed on the favourites page | |
| View information about the team | Team info can be found on the about us page | |

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

### Full Testing

Full testing was performed on the following devices:

* Laptop
  * Lenovo IDEAPAD Flex 5i

* Mobile
  * Samsung Galaxy S24
 
 Desktop device tested the site using the following browsers:
 
 * Google Chrome
 * Mozilla Firefox
 * Opera
 * Microsoft Edge

_Additional testing if anybody has mac and safari_

#### Site-Wide

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Navbar Links | | | __PASS?__ |
| Brand Logo | Brand logo redirects to the homepage | Clicked logo | Redirected accordingly | __PASS?__ |
| Footer Links | Links open in new tabs to github | Clicked links | Links open in new tabs to github | __PASS?__ |

#### Index Home

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| | | |  | __PASS?__ |
| |  | |  | __PASS?__ |

#### Credits Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| | | | | __PASS?__ |
| | | | | __PASS?__ |

#### 404 Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Appears when incorrect url entered | View 404 page | Input incorrect url path | Page appears | __PASS?__ |
| Home button | User is returned to index if logged out or their profile if logged in | Click Home button | Redirected accordingly | __PASS?__ |

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

### Accessibility Testing

Accessibility has been tested via narrator for windows and talkback on android…

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

## Bugs

### Solved Bugs

| # | Issue | Details | What was done | Fixed? |
| --- | --- | --- | --- | --- |
| 1 | | | | __YES__ |
| 2 | | | | __NO__ |

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----

### Known Bugs

| # | Issue | Details | Next Steps |
| --- | --- | --- | --- |
| 1 | | | |
| 2 | | | |

<sup><sub>[*Back to top*](#devworthy-testing)</sup></sub>

-----