# TODO

## Server-Side
- [x] Write SQL code to setup table of data (one person) |
- [x] Set up DB each individually in Postico (everybody)
- [x] Set up pool

## Client-Side

- [x] Create form inputs
  - [x] 5 inputs (name, gender, age, ready to transfer, notes)
  - [x] Submit button
- [] On submit, append vals to DOM
- [] ajax POST input data to Server
- [] Next to each entry, button to mark 'ready for transfer' that updates DB
  - Button should only appear for Koalas that haven't yet been marked ready for transfer.

## Server-Side

- [x] GET route will send info to the DB
- [] POST will send data to the client
- [] PUT will update ready-to-transfer in the DB
- [] DELETE (No deleting koala's)

## Upon completion

- [] Provide not only the source (via GitHub url), but also instructions on how the database table should be set up.
  - This can be in a simple `database. sql` file in the repo
