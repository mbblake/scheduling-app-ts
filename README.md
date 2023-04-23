# scheduling-app-ts

Experimenting using TypeScript for a simple commandline-based CRUD application.

## Getting Started

### Installing

-   Install git
-   Clone the repo: `git clone https://github.com/mbblake/scheduling-app-ts.git`
-   Install Node 18+
-   Install NPM
-   Install dependencies: `npm install`

### Running the app

-   Use `npm run start` to compile and start the application
-   Alternatively, you can run `npx tsc` followed by `node dist/index.js` from the project root folder

## Help

The app allows you to schedule an event, update an event, cancel an event, and then display the scheduled events. Some things to be aware of:

-   Event names must be unique.
-   Event names can be anything BUT blank.
-   Event time must be specified in `hh:mm` format. E.g. `13:30`.
-   All events must occur sequentially. Their time slots can't overlap.
-   The events are scheduled within a single day (i.e. between `00:00 and 23:59`). E.g. `23:00 to 02:00` is not a valid range.

## Known issues

-   Using backspace when prompted for input doesn't behave too well right now. It simply moves the cursor back but doesn't delete the characters.
