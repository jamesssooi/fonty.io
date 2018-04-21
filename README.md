![Why Hello There!](logo.png)  
The Modern Front-End Dev Boilerplate.

## What is Boilr
'Boilr' is a front-end boilerplate built to make starting a new project a painless experience.

## Features
- **SASS** - Make writing CSS fun again.
- **Webpack** - Bundle up your JavaScript.
- **Babel + ES6** - Take advantage of the latest JavaScript features.
- **Image Optimizer** - Optimize images for improved site load times.
- **Local Server with BrowserSync** - Develop locally with support for live reloading, style injection and proxy servers support.

## How To Use
Boilr can be quickly started up in development mode using:
```bash
gulp dev
```

to use production mode just add a '-p' flag as such:
```bash
gulp dev -p
```

## Documentation
### Folder Structure
Boilr comes with a default folder structure that is already configured to just work instantly.
```bash
Boilr
│  # Main folder for source files
├─ src/
│  ├─ sass           # scss
│  ├─ img            # images
│  ├─ js             # javascript
│  └─ index.html
│  
├─ static/           # Folder for static assets that do not need processing
├─ dist/             # Final output folder
│  
│  # Configuration Files
├─ tasks/
├─ .babelrc
├─ .eslint.json
├─ .gitignore
├─ package.json
├─ gulpfile.babel.js
├─ webpack.config.js
```
