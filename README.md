### React Test

We have provided a simple React application with 2 pages:

<ul>
<li>A “Posts” page that lists the titles of a user’s posts.</li>
<li>A “User Details” page that displays some information about the active user.</li>
</ul>

We’ve used a publicly available [API](https://jsonplaceholder.typicode.com/).

Please add the following:

1. A dropdown in the top right corner of the application that allows us to select the active user.</li>
2. The ability to click on a post in the “Posts” page and expand it to see the post body.</li>
3. A search bar in the “Posts” page that matches the design specified [here](https://www.figma.com/design/4Lhm0Oj7EXsKzXvp7OIDEB/search-bar?node-id=0-1&t=GjAOQlc4I8XLUAQf-1).</li>
4. Any single test that checks whether the search bar is working as expected.</li>

We've used [Ant Design](https://ant.design/) for some of the components. You can use that or any other libraries you choose to complete the steps above.

To start the application run <code>npm install</code>, and then <code>npm start</code>.

We recommend spending about 2 hours on this task. If there is anything you missed or would have done differently given more time, feel free to comment what you would have done, or bring it up with us in the technical interview.

### Features Implemented

- [x] Added dropdown to select users.
- [x] Expanded post to show post details.
- [x] Added search bar to the Posts page.
- [x] Added a sample test for the input.

### Improvements Made

- [x] Modularized the app with a proper folder structure.
- [x] Made navigation links active.
- [x] Used Layout from React Router to avoid wrapping each page with a layout component.
- [x] Moved some dependencies to dev dependencies.

### Future Improvements

- Use React Query to handle data fetching.
- Switch to (CSS modules/Tailwind/ShadCN/Styled Components) for styling to prevent global CSS from overriding each other.
- Set up path aliases for imports.
- Write more tests.
- Add SVG component support with SVGR.
- Use Zod for runtime data validation.
- Auto-sort imports.
- Implement code-splitting for routes.
