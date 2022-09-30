# Random Quote Machine

This is a simple quotes generator, made with React and Typescript.

## Features

- More than 50 quotes from several books and authors.
- Getting new quote also randomize color scheme.
- Color scheme and quote cannot be repeated consecutively
- When color scheme changes new colors will be at least 50deg of separation from previous scheme.
- Ability to share quote and url to facebook twitter and whatsapp.
- Ability to get new quote by tapping/clicking the current quote and/or button.
- Responsive and accessible.

[DEMO](https://pp-random-quote-machine.netlify.app).

**Requires** Node 16+.

**Clone this repo**: `git clone https://github.com/PabloPenia/random-quote-machine.git`.

**Install dependencies**: `yarn install`.

**Build**: `yarn build`.

**Run**: `yarn dev` (development).
_More scripts can be found on package.json for linting/formatting_

# Changelog

### v.1.1.0 (2022/09/26)

- added color schemes with random Hue.
- added ability to get new quote when clicking the quote box.
- Random abilities has been remade:
  - Can't repeat consequentely.
  - Color scheme has to be at least 50deg of diff from previous scheme.
- added facebook and whatsapp share links.
- sharing a quote now shares the current quote and url (before was only url).
- Improved accesibility and responsiveness.

### v.1.0.0 (2022/09/20)

- React Updated to V.18.2.0.
- Migrated from CRA to Vite.
- All source code has been refactored to Typescript.

### v.0.1.0 (2021)

- First version for FreeCodeCamp Certification (React v.17): [Random Quote Machine](https://codepen.io/3dm777/full/dyZJdJQ).
