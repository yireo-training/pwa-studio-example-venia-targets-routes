# Yireo Example for Adobe PWA Studio Venia targetable routes

This little NPM package demos code for using the targetable routes of Venia in Adobe PWA Studio. 


### NPM installation
To install this package, run the following command in the root of your PWA project:

```bash
yarn add @yireo-training/pwa-studio-example-venia-targets-routes
```

Make sure to update your root `package.json` to add this vendor as trusted:
```json
{  
  ...
  "pwa-studio": {
    "targets": {
      "intercept": "./local-intercept.js"
    },
    "trusted-vendors": [
      "@yireo-training"
    ]
  }
}
```

### Local installation
Alternatively, clone the sources of this repository to a folder `src/yireo/example` and add the following to the `dependencies` of your roots `package.json` file:

```json
{
  "dependencies": {
    "@yireo-training/pwa-studio-example-venia-targets-routes": "src/yireo/example"
  }
}
```
