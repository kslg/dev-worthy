# 🧪 DevWorthy Testing

[⬅️ Back to README.md](README.md)  
[🌍 Live Site](https://anthonyradose.github.io/dev-worthy/#/)

[<img src="src/assets/images/devworthy_amiresponsive_whole.png" alt="An image representing how the site looks across different devices of varying size.">](https://anthonyradose.github.io/dev-worthy/#/)

Manual testing was conducted throughout development to ensure all features performed as expected across multiple screen sizes, user flows, and edge cases.

---

## ✅ Automated Testing

### 🧼 HTML & CSS Validation (via [W3C Validator](https://validator.w3.org/))

#### HTML

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

#### CSS

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


<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

-----

### 📜 JavaScript Validation

# 🚧 TO BE COMPLETED 🚧

<sup><sub>[🔝 Back to top](#contents)</sup></sub>

-----

### 💡 Lighthouse Testing

Tested using Chrome DevTools for both **Desktop** and **Mobile** performance, accessibility, best practices, and SEO.

#### 🏠 Index Page

<details><summary>Index</summary>
<img src="src/assets/images/devworthy_lighthouse_homedesktop.png" alt="Desktop test for index page">

<img src="src/assets/images/devworthy_lighthouse_homemobile.png" alt="Mobile test for index page">
</details>

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 96 | 100 | 100| 100 |
| Mobile | 74 | 100 | 100 | 100 |

#### 👥 Credits Page

<details><summary>Credits</summary>
<img src="src/assets/images/devworthy_lighthouse_creditsdesktop.png" alt="Desktop test for credits page">

<img src="src/assets/images/devworthy_lighthouse_creditsmobile.png" alt="Mobile test for credits page">
</details>

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 98 | 98| 100 | 100 |
| Mobile | 71 | 98 | 100 | 100 |

#### ⭐ Favourites Page

<details><summary>Favourites</summary>
<img src="src/assets/images/devworthy_lighthouse_favouritesdesktop.png" alt="Desktop test for favourites page">

<img src="src/assets/images/devworthy_lighthouse_favouritesmobile.png" alt="Mobile test for favourites page">
</details>

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 98 | 100| 100 | 100 |
| Mobile | 78 | 100 | 100 | 100 |

<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

-----

## 🔍 Manual Testing

### ✅ Project Criteria

>#### Criteria
>
>1) The team has built one of the 5 suggested projects
>2) The team has innovated on their choice of project
>3) The project is fully responsive
>4) The project is well planned using github projects or other issues board
> 
>

| Criteria | Description | Image |
| :----: | :----: | :----: |
| __1) The team has built one of the 5 suggested projects__ | The chosen project was the daily boost app | <img src="src/assets/images/devworthy_dailyBoost.png" alt="Daily boost project" width="200"/> |
| __2) The team has innovated on their choice of project__ | The team has innovated in the build of the app, using react and implementing API's to generate content | <img src="src/assets/images/devworthy_api.png" alt="One of the api repos - for visual effect" width="200"/>  |
| __3) The project is fully responsive__ | Project is usable and appealing across all screen sizes | <img src="src/assets/images/devworthy_amiresponsive_whole.png" alt="Responsive view of the site" width="200"/> |
| __4) The project is well planned using github projects or other issues board__ | Github projects has been used throughout | <img src="src/assets/images/devworthy_projectBoard.png" alt="A view of the project board midway through the weekend." width="200"/> |

### 🧑‍💻 Testing User Stories

>#### User Goals
>
>- View inspiring quotes
>- View coding tips and tricks
>- Save quotes to favourites
>- View information about the team
>

| Goal | Implementation | Image |
| :---: | :---: | :---: |
| __View Inspiring quotes__ | Quotes can be viewed on the main page | <img src="src/assets/images/devworthy_userstory_affirmations.png" alt="View of affirmations" width="200"/> |
| __View coding tips and tricks__ | Coding tips can be viewed on the main page | <img src="src/assets/images/devworthy_userstory_devtip.png" alt="View of dev tips" width="200"/> |
| __Save quotes to favourites__ | Quotes can be saves from the quotes page and viewed on the favourites page | <img src="src/assets/images/devworthy_userstory_favourites.png" alt="View of favourites button" width="200"/> |
| __View information about the team__ | Team info can be found on the about us page | <img src="src/assets/images/devworthy_amiresponsive_credits.png" alt="Responsive view of credits page." width="200"/>| |

<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

-----

### 🧪 Full Testing

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

#### 🌐 Navbar & Layout

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----|----|----|----|----|
| Navbar Links | All links in the navbar redirect to the correct pages | Clicked each navbar link | Each link navigated to the intended section/page | ✅ Pass |
| Brand Logo | Brand logo redirects to the homepage | Clicked logo | Redirected accordingly | ✅ Pass |
| Footer Links | Links open in new tabs to GitHub | Clicked links | Links open in new tabs to GitHub profile/repos | ✅ Pass |

#### 🏠 Index Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----|----|----|----|----|
| Default Affirmation Load  | A random affirmation quote loads automatically on page load  | Opened the homepage | Affirmation quote displayed correctly on initial load | ✅ Pass |
| View Affirmation Quote | Affirmation quote is displayed when Affirmation tab is clicked | Clicked the Affirmation tab | Quote displayed correctly | ✅ Pass |
| View Dev Tip Quote | Dev tip quote is displayed when Dev Tip tab is clicked | Clicked the Dev Tip tab | Dev tip quote displayed correctly | ✅ Pass |
| Refresh Affirmation Tab | New affirmation appears when revisiting the Affirmation tab | Navigated to Dev Tip then back to Affirmation tab | New affirmation quote displayed | ✅ Pass |
| Refresh Dev Tip Tab | New dev tip appears when revisiting the Dev Tip tab | Navigated to Affirmation then back to Dev Tip tab | New dev tip quote displayed | ✅ Pass |
| Save Quote to Favourites | Quote is added to the Favourites section when save is clicked | Clicked save button under a displayed quote | Quote appeared in Favourites section | ✅ Pass |

#### 👥 Credits Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----|----|----|----|----|
| Flip Team Member Card | Card flips when clicked to reveal social links | Clicked on each team member card | Each card flipped successfully to show the back with links | ✅ Pass |
| Social Links Open Externally | Social links open in new browser tabs | Clicked on each social media icon | Each link opened the correct profile in a new browser tab | ✅ Pass |

#### ⭐ Favourites Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
|----|----|----|----|----|
| View Favourite Quotes | Saved quotes appear in a styled carousel | Visited Favourites page after saving | Carousel displayed all previously saved quotes  | ✅ Pass |
| Carousel Navigation | Users can scroll through multiple saved quotes using carousel controls | Clicked previous/next buttons | Carousel navigated smoothly between quotes | ✅ Pass |
| Remove Individual Quote | Clicking “Remove” deletes that quote from favourites | Clicked remove on a specific quote | Quote disappeared from the carousel instantly | ✅ Pass |
| Empty State Display | A message is shown when there are no favourite quotes | Removed all quotes or loaded with none   | Message like “No favourite quotes saved” shown | ✅ Pass |

#### 🚫 404 Page

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Appears when incorrect url entered | View 404 page | Input incorrect url path | Page appears | ✅ Pass |
| Home button | User is returned to index if logged out or their profile if logged in | Click Home button | Redirected accordingly | ✅ Pass |

<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

-----

## ♿ Accessibility Testing

✅ Site tested using Android’s **TalkBack** screen reader.  
All interactive components are readable, labelled, and navigable.


<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

---

## 🐞 Bugs

### ✅ Solved Bugs

| # | Issue | Details | What was done | Fixed? |
| --- | --- | --- | --- | --- |
| 1 | 404 Refresh error | Any time the about or favourites pages were refreshed it would redirect to the 404 page. | Added hashrouter to main.jsx | ✅ |
| 2 | Quote rendering issue | The aspirational quotes API would not render quotes onto the devworthy page. | Review of the API code caught a class error when retreiving the information. " | ✅ |

<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

-----

### ⚠️ Known Bugs

| #  | Issue | Details | Next Steps |
|-----|-----|-----|-----|
| 1 | Layout Issue | Mobile view on dev tools doesn't synch up with actual mobile view | To fix real mobile layout would involve coding blind and extensive manual testing outside the scope of the project timeline |

<sup><sub>[🔝 Back to top](#devworthy-testing)</sup></sub>

-----