# Notas

Notas sobre aprendizajes adquiridos en el desarrollo de esta app

## Conventional Commits

El mensaje del commit debe ser estructurado de la siguiente manera:

`tipo(Scope/ámbito *opcional): descripción`\
`cuerpo opcional`\
`nota opcional`

### tipo - Por que se ha hecho el commit de una forma muy breve:
   - fix - para reparar algo

   - feat - para agregar una funcionalidad nueva

   - build - cambios que afectan build components (build tool, dependencies, project version, etc.)

   - refactor - cambios que restructuran el código, pero no cambian su comportamiento

   - perf - como el refactor, pero aparte mejora el performance

   - ci - cambios en la configuración de CI

   - test - cambios en test

   - release - para indicar el release de una nueva versión

   - docs - cambios en la documentación

   - chore - cambios en otros archivos, como '.gitignore'

   - style - cambios que no afectan el significado del código (espacios en blanco, formatting )

Si después del tipo se añade un '!' y/o en el footer se escribe 'BREAKING CHANGE' , significa que se hizo un cambio que puede afectar a aquel que utiliza este código. 
Ejemplo: 

`'refactor ! : drop support for Node 6`\
`BREAKING CHANGE: Refactor to use the latest JS features'`

### Scope/Ámbito opcional:
- Cuando el repo es muy grande, puedes especificar en que sección estas haciendo este cambio.

### Descripción: 
- Mensaje corto en imperativo. Ej. usa add en lugar de added o adds

### Cuerpo opcional:
- Explica con tus propias palabras los cambios que hiciste. No todos los commits son tan complejos como para añadir un cuerpo.

### Notas opcionales:
- Por lo general se usa para cuando quieres dar seguimiento a un issue. Ej. Resolves #1232]/
O para indicar que persona tiene que revisar este commit.

Mas info: https://www.conventionalcommits.org/en/v1.0.0/


# GitFlow

## Nombramiento de las ramas y su uso:
### master 
- rama principal
### hotfix/{something} 
- rama temporal para bug fixing de emergencia en producción, antes de ser eliminada se hace merge a master y develop
### release/{major.minor.bugfix} 
- rama temporal para hacer bug fixing, antes de ser eliminada se hace merge a master y develop
### develop 
- rama con todos los features finalizados
### feature/{something} 
- rama temporal para un feature especifico, antes de ser eliminada se hace merge a develop

Mas info: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
