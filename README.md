
### How to Install
Clone the repo
Run `npm install` to install the dependencies
`ionic serve` to run the app

### You need Google Map API keys
Google Maps API Key is required to see the map, you can go through the below link to create one and make sure you have given the permissions to your app
https://developers.google.com/maps/documentation/javascript/get-api-key

### Need to enable 3 Google Maps API services
1. Geocoding API
2. Maps JavaScript API
3. Places API

and update the created API key in two places

- src/index.html - `<script src="https://maps.googleapis.com/maps/api/js?key=<KEY>&libraries=places"></script>`
- src/providers/map/map.ts - `this.google_api_key = '<KEY>';`


You can directly install below plugins If they are not installed using `npm install`

add the geolocation plugin

`ionic cordova plugin add cordova-plugin-geolocation`

`npm install --save @ionic-native/geolocation`

### Screenshots
<img src="https://i.imgur.com/oSwBsc9.png" width="250">
<img src="https://i.imgur.com/NwAOhIE.png" width="250">
<img src="https://i.imgur.com/OBxBLG5.png" width="250">
