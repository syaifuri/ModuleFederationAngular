# ModuleFederationAngular

This is a simple project angular with module federation add on on individual project.
the project contains :
- home as shell project loader
- app01 as angular micro frontend from app01
- app02 as angular micro frontend from app02

steps:
- clone on your pc
- go to root folder and run npm install
- run individual projects
-   npm run start:home  ==> for home
-   npm run start:app01  ==> for app01
-   npm run start:app02  ==> for app02

this command script set on package.json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "start:home": "ng serve --project home ",
    "start:app01": "ng serve --project app01 ",
    "start:app02": "ng serve --project app02 ",


