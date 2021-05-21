# WagePoint - Exercise 2

## Questions to Consider

1. What technologies are being used on the current website?

2. Is the current website managed through a CMS platform?

3. Would WagePoint consider having the website rebuilt using a lightweight framework? (React)

---

## Method 1 - (Changes to current website)

- **Removing unused scripts, styles, and other unused code**

  - According to PageSpeed Insights, there are several scripts and CSS files that are not being utilized. Clearing them up will help optimize the website. 
  - Deferring unnecessary JavaScript scripts can help with load times because having scripts deferred will allow the script to be executed once the page has finished parsing.

- **Optimize images on the site**
  - Resize all photos to have a width of **800px** and photos that only take up half the width of the page to about **300px** (Ideal for both desktop and mobile viewing).
  - Convert all photos that don't require a transparent background from PNG over to JPEG (This will allow the images to load in faster).
  - To further optimize images tools like [Kraken.io](https://kraken.io) can help further compress images without losing image quaility.

- **Utilize OPcache on PHP server**
  - Built in cache engine within PHP (Disabled by default).
  - Will help cache pre-compiled scripts and will not allow them to recompile on later requests.
  - Will save execution time when the initial scripts are compiled.

- **Combine and minify JS files**
  - Using tools such as [Minifier](https://www.minifier.org/) or [JScompress](https://jscompress.com) can help remove unnecessary data without sacrificing the functionality of the scripts/files.
  - Combining similar files will signicantly reduce load times on the website because less files will have be rendered.

- **Use a CDN to load jQuery**
  - Loading jQuery scripts from a CDN like Google can help speed up page loading.
  - Visitors have most likely already visited several sites using the same jQuery scripts.
  - Therefore, jQuery scripts will already be downloaded onto the users machine.

- **If everything has been optimized already, consider switching to a faster website hosting service.**

---

## Method 2 - (Rebuilding the site in React)

- **Using a modern framework, like React, can help make a website a lot more "lightweight".**

  - React focuses on building single-page applications (SPA), which makes sites load very quickly.

- **Components can be easily reused and moved around throughout the entire web app.**

  - Custom buttons, dropdown, menus, etc. can be built as components which then can be used throughout the entire site.

- **React uses a Virtual DOM which allows for quicker and more efficient UI updates.**
  - This also allows only specific components to rerender and update, as opposed to having the entire website refresh.
  - Well established framework with a plethora of developer tools built by both companies and the community.
  - Tons of ready-made and customizable tools, charts, and components that help build a web app in less time.

### _Issues with using React_

- React depends on client-side routing.
  - Because React serves webpages through the client-side. This would lead to poor SEO which could be an issue.
  - Because webapges are rendering on the client-side, this could cause issues for maintainability. (Routing logic, form validation, etc.)

I built a simple mock up of the [Partners Page](https://wagepoint.com/ca/partners) in React. With the usage of components,it makes it very simple to edit the webpage by simply adding/removing the necessary components.  The mock up can be found [here](https://wagepoint-exercise2.herokuapp.com).
---

## Method 3 - (Rebuilding the site in WordPress)

- **Wordpress is easily customizable with themes and plugins.**
  - Many free and paid plugins are available to WordPress users.
  - Plugins such as [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) can be used to help optimize the efficiency of the website.
- **SEO friendly.**
  - WordPress sites are ranked higher than others in search engine algorithms.
  - SEO plugins can also be used to optimize the website.
- **Easy to Manage/Update site.**
  - Has a built in update management system which allows plugins and themes to be updated within the WordPress admin dashboard.
  - Helps protect against potential security threats.

---
