# TODO

## Server-Side

- [x] Write SQL code to setup table of data (one person) |
- [x] Set up DB each individually in Postico (everybody)
- [x] Set up pool

## Client-Side

- [x] Create form inputs
  - [x] 5 inputs (name, gender, age, ready to transfer, notes)
  - [x] Submit button
- [x] On submit, append vals to DOM
- [x] ajax POST input data to Server
- [x] Next to each entry, button to mark 'ready for transfer' that updates DB
  - [x] Button should only appear for Koalas that haven't yet been marked ready for transfer.
- [x] Toggle true/false ready-to-transfer
      -[] Add form validation, additional styling and a README.md.

## Server-Side

- [x] GET route will send info to the DB
- [x] POST will send data to the client
- [x] PUT will update ready-to-transfer in the DB
- [] DELETE (No deleting koala's)
- [x] Toggle true/false ready-to-transfer
- [] UPDATE: Ability to edit other information (Name, Age, Notes) for existing Koalas in the db.

## Upon completion

- [] Provide not only the source (via GitHub url), but also instructions on how the database table should be set up.
  - This can be in a simple `database. sql` file in the repo

STRETCH GOALS
Ability to delete a specific Koala from the database.
Confirmation dialog before deleting (research SweetAlert).
Client side filtering with a text box
