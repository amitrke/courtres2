[![Build Status](https://travis-ci.org/amitrke/courtres2.svg?branch=master)](https://travis-ci.org/amitrke/courtres2)
[![Build Status](https://david-dm.org/amitrke/courtres2.svg?branch=master)](https://david-dm.org/amitrke/courtres2)

[![Code Climate](https://codeclimate.com/github/amitrke/courtres2/badges/gpa.svg)](https://codeclimate.com/github/amitrke/courtres2)
[![Test Coverage](https://codeclimate.com/github/amitrke/courtres2/badges/coverage.svg)](https://codeclimate.com/github/amitrke/courtres2/coverage)
[![Issue Count](https://codeclimate.com/github/amitrke/courtres2/badges/issue_count.svg)](https://codeclimate.com/github/amitrke/courtres2)

# Court Reservation 2

##Introduction

This project is a complete rewrite of courtres
I am rewriting from scratch because I wanted to use Express, Typescript, Angular 4 for this project.
The application can be used by a sports facility to reserve courts for its members, some of the features include..
* Member signup
* Facility to checkin members as they come to play
* Checked in members can reserve the court using their smartphone or the facility admin can reserve court for them
* After 20 mins ( or whatever time set for the facility) the system puts the members back into the queue for reservation.
* The system logs out all members at the end of day, and they can't reserve the court using smartphone until then are checked in by the facility again.
* Every court can be configured for time slots, and the system maintains a court reservation queue.

## Steps to Run
```sh
    npm install
    npm run build
    npm run start
```

## Project Structure

```
courtres2
      |-- node_modules
      |-- client
           |-- app
                |-- app.component.ts
                |-- main.ts
           |-- typings
           |-- index.html
           |-- tsconfig.json
           |-- typings.json
      |-- server
           |-- typings
           |-- server.ts
           |-- tsconfig.json
           |-- typings.json
      gulpfile.ts
      package.json
      tsconfig.json
      tslint.json
```

## Dependencies

1. Angular 4
2. TypeScript
3. Gulp
4. ExpressJS
5. NodeJS
6. Nodemon
7. TsLint
