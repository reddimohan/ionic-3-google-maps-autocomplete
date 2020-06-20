[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/reddimohan/ionic-3-google-maps-autocomplete">
  </a>

  <h3 align="center">Ionic 3 Google maps Auto complete</h3>

  <p align="center">
    Ionic 3 and Google maps integration, Search and Auto complete of address in map, drag map to get the address.
    <br />
    <br />
    <a href="https://github.com/reddimohan/ionic-3-google-maps-autocomplete/issues">Report Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

1. [About the Project](#about-the-project)
    * [Built With](#built-with)
2. [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
3. [Roadmap](#roadmap)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

[![https://reddimohan.github.io][product-screenshot-1]]()
<br />
[![https://reddimohan.github.io][product-screenshot-2]]()
<br />
[![https://reddimohan.github.io][product-screenshot-3]]()


### Built With

* [Ionic 3]()
* [Google API key] - You can get this by login to Google console


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* node, npm, Ionic cli, Angular cli

```sh
npm install npm@latest -g
npm install -g ionic@3.20.0 # If you want to install ionic 3
```

* You need Google Map API keys
Google Maps API Key is required to see the map, you can go through the below link to create one and make sure you have given the permissions to your app.
https://developers.google.com/maps/documentation/javascript/get-api-key

* Enable 3 Google Maps API services
    * Geocoding API
    * Maps JavaScript API
    * Places API

### Installation

1. Clone the repo
```sh
git clone https://github.com/reddimohan/ionic-3-google-maps-autocomplete.git
```
2. Install NPM packages
```sh
npm install
```
3. Update the Google Map API KEY in two places, which we created in *Prerequisites* section
    * src/index.html - `<script src="https://maps.googleapis.com/maps/api/js?key=<KEY>&libraries=places"></script>`
    * src/providers/map/map.ts - `this.google_api_key = '<KEY>';`
4. Install below packages if they are not installed while `npm install`
```sh
ionic cordova plugin add cordova-plugin-geolocation
npm install --save @ionic-native/geolocation
```
3. You can access the app at http://localhost:8100/ by executing `ionic serve`



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/reddimohan/ionic-3-google-maps-autocomplete/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Mohan - [LinkedIn](https://linkedin.com/in/reddimohan) - [Twitter](https://twitter.com/reddimohan)

Project Link: [https://github.com/reddimohan/ionic-3-google-maps-autocomplete](https://github.com/reddimohan/ionic-3-google-maps-autocomplete)







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/reddimohan/ionic-3-google-maps-autocomplete.svg?style=flat-square
[contributors-url]: https://github.com/reddimohan/ionic-3-google-maps-autocomplete/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/reddimohan/ionic-3-google-maps-autocomplete.svg?style=flat-square
[forks-url]: https://github.com/reddimohan/ionic-3-google-maps-autocomplete/network/members
[stars-shield]: https://img.shields.io/github/stars/reddimohan/ionic-3-google-maps-autocomplete.svg?style=flat-square
[stars-url]: https://github.com/reddimohan/ionic-3-google-maps-autocomplete/stargazers
[issues-shield]: https://img.shields.io/github/issues/reddimohan/ionic-3-google-maps-autocomplete.svg?style=flat-square
[issues-url]: https://github.com/reddimohan/ionic-3-google-maps-autocomplete/issues
[license-shield]: https://img.shields.io/github/license/reddimohan/ionic-3-google-maps-autocomplete.svg?style=flat-square
[license-url]: https://github.com/reddimohan/ionic-3-google-maps-autocomplete/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/reddimohan
[product-screenshot-1]: screenshots/1.png
[product-screenshot-2]: screenshots/2.png
[product-screenshot-3]: screenshots/3.png
