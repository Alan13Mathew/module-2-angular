# Module2Projects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

# Project Title

This project is a sample project for me to learn MEAN stack as a beginner.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Deployment

To deploy this project .(You should use `npm install` before runing `ng serve` ).Project uses npm json-server to store and fetch data. visit `https://www.npmjs.com/package/json-server/v/0.16.3` for reference.


```bash
  ng serve
```
```bash
  json-server --watch mockdata.json
```
here is some mockdata to help you get started.
```yaml
 "todo": [
    {
      "id": "ae5a",
      "todoName": "jogging",
      "todoDesc": "daily morning 7pm",
      "completed": true,
      "daily": true,
      "dueDate": "2024-08-22"
    },
    {
      "id": "d445",
      "todoName": "workout",
      "todoDesc": "daily workout for atleast 2hrs",
      "completed": true,
      "daily": true,
      "dueDate": "2024-08-21"
    },
    {
      "id": "2b3a",
      "todoName": "studying",
      "todoDesc": "daily 10hrs",
      "completed": true,
      "daily": true,
      "dueDate": "2024-08-21"
    },
    {
      "id": "df8e",
      "todoName": "reading",
      "todoDesc": "read the boks",
      "completed": true,
      "daily": false,
      "dueDate": "2024-08-21"
    }
  ],
  "todoUsers": [
    {
      "fname": "Tammie",
      "lname": "Bruun",
      "email": "tbruun0@bbb.org",
      "password": "yE0\"w<B$C~KJ|",
      "id": "ecc8"
    },
    {
      "fname": "Joellyn",
      "lname": "Alsobrook",
      "email": "jalsobrook1@google.co.jp",
      "password": "dC1+E@zL",
      "id": "c3c4"
    },
    {
      "fname": "Gianni",
      "lname": "Billyeald",
      "email": "gbillyeald2@flavors.me",
      "password": "kY9`u}N5>8",
      "id": "5f61"
    },
    {
      "fname": "Langsdon",
      "lname": "Caller",
      "email": "lcaller3@github.io",
      "password": "gD8{u\"_\"",
      "id": "e5f8"
    },
    {
      "fname": "Ethelda",
      "lname": "Edgerly",
      "email": "eedgerly4@ebay.co.uk",
      "password": "dN1$opfl9",
      "id": "6094"
    },
    {
      "fname": "Cordula",
      "lname": "Wooddisse",
      "email": "cwooddisse5@wired.com",
      "password": "mY6_Z{Il+e(U,",
      "id": "a438"
    }
  ]
  ```
  


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
