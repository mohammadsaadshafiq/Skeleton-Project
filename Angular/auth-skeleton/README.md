# AuthSkeleton

Welcome to AuthSkeleton, a project template designed to kickstart your Angular application development with built-in authentication features. This project was generated with Angular CLI version 17.3.7.

## Development server

To start the development server, run `ng serve`. Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you make any changes to the source files.

## Code scaffolding

You can use Angular CLI to generate components, directives, pipes, services, classes, guards, interfaces, enums, or modules. For example, to generate a new component, run `ng generate component component-name`.

## Build

To build the project, run `ng build`. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

You can execute unit tests using Karma by running `ng test`.

## Running end-to-end tests

To execute end-to-end tests, run `ng e2e`. Before using this command, ensure that you have added a package that implements end-to-end testing capabilities.

## Further help

For more help on using the Angular CLI, you can run `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Folder Structure

Here's an overview of the folder structure of AuthSkeleton:

```
src/
├── app/
│   ├── components/
│   │   ├── feature1/
│   │   │   ├── feature1.component.html
│   │   │   ├── feature1.component.ts
│   │   │   ├── feature1.component.css
│   │   │   └── feature1.component.spec.ts
│   │   │
│   │   ├── feature2/
│   │   │   ├── feature2.component.html
│   │   │   ├── feature2.component.ts
│   │   │   ├── feature2.component.css
│   │   │   └── feature2.component.spec.ts
│   │   │
│   │   └── shared/
│   │       ├── shared.component.html
│   │       ├── shared.component.ts
│   │       ├── shared.component.css
│   │       └── shared.component.spec.ts
│   │
│   ├── services/
│   │   ├── auth/
│   │   │   ├── auth.service.ts        // Authentication service
│   │   │   └── auth.guard.ts          // Authentication guard
│   │   │
│   │   ├── feature1.service.ts       // Example service for feature 1
│   │   └── feature2.service.ts       // Example service for feature 2
│   │
│   ├── models/
│   │   ├── feature1.model.ts
│   │   └── feature2.model.ts
│   │
│   ├── guards/
│   │   └── auth.guard.ts
│   │
│   ├── interceptors/
│   │   └── auth.interceptor.ts
│   │
│   ├── modules/
│   │   └── ...
│   │
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.component.css
│   └── ...
│
├── assets/
│   └── ...
│
├── environments/
│   ├── environment.ts
│   ├── environment.prod.ts
│   └── ...
│
├── index.html
├── styles.css
└── ...
```

This structure organizes your Angular application into components, services, models, guards, interceptors, and modules, making it easier to manage and maintain your project. With built-in authentication features, AuthSkeleton provides a solid foundation for building secure and scalable Angular applications.
