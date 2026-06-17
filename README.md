# HRM SPA

## Project Description

HRM SPA is a single-page React application for displaying and managing training courses.

The project is built without Create React App and uses a custom Webpack configuration. It includes routing, state management with Redux Toolkit, data fetching and caching with RTK Query, and styling with SCSS.

## Main Features

- User authorization through a mock `Continue with Google` button
- Protected access to the main application page
- Course list display
- Course data fetching from DummyJSON API
- Server data caching with RTK Query
- Course details page with a dynamic route
- Navigation between pages using React Router
- Global state management with Redux Toolkit
- Authorization state management
- Active navigation state management
- Collapsible sidebar
- Modular component-based project structure
- Styling with SCSS

## Application Pages

- `/login` — login page
- `/content` — main page with the course list
- `/courses/:id` — course details page
- `*` — error page for unknown routes

## Technologies

- React
- TypeScript
- React Router
- Redux Toolkit
- RTK Query
- Webpack
- SCSS
- DummyJSON API

## API

The project uses the DummyJSON API as a mock backend.

Main API requests:

- fetching the course list based on `/products`
- fetching a single course by `id` based on `/products/:id`

The data received from DummyJSON is transformed into the internal `Course` model used inside the application.

## Project Structure

```txt
public/
  index.html

src/
  app/
    hooks.ts
    store.ts

  assets/
    svg-images/
    *.tsx
    *.png

  components/
    AppHeader/
    AuthButton/
    CorporateInfo/
    CorporateNav/
    CourseCard/
    CourseFilters/
    CourseList/
    LanguageSelect/
    Pagination/
    SearchInput/
    Sidebar/
    UserMenu/

  features/
    auth/
      authSlice.ts
    courses/
      coursesApi.ts
    nav/
      navSlice.ts

  pages/
    ContentPage/
    CourseDetailsPage/
    LoginPage/
    WrongPage/

  types/
    Course.ts

  App.tsx
  global.d.ts
  index.tsx

package.json
package-lock.json
tsconfig.json
webpack.config.js
README.md
```

## Architecture

The project is divided into several main layers:

### `app`

Contains the Redux store configuration and typed Redux hooks.

### `features`

Contains the main application state and API logic:

- `auth` — user authorization state
- `nav` — active navigation and sidebar state
- `courses` — API layer for fetching course data with RTK Query

### `components`

Contains reusable UI components, such as:

- header
- sidebar
- course card
- course list
- filters
- pagination
- user menu

### `pages`

Contains application pages:

- login page
- content page
- course details page
- error page

### `types`

Contains shared TypeScript types used across the project.

## Installation

```bash
npm install
```

## Running the Project

```bash
npm start
```

After starting the development server, the application will be available in the browser at the address shown in the terminal.

## Production Build

```bash
npm run build
```

After the build is completed, the production version of the application will be generated in the output folder configured in Webpack.

## Deployment

The project can be deployed as a static frontend application after running the production build.

The generated build folder can be hosted on any static hosting service or web server.

http://aleksandrgubich.github.io/HRM/
