<p align="center">
  <h1 align="center">Tv Guide</h1>
</p>

<p align="center">
  <b>Jobsity React Native Code Challenge</b>

  <br />

  <p align="center">
    <img alt="Supports iOS" longdesc="Supports iOS" src="https://img.shields.io/badge/iOS-000.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <img alt="Supports Android" longdesc="Supports Android" src="https://img.shields.io/badge/Android-000.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </p>

  <p align="center">
    <a href="https://expo.dev/client">
      <img alt="Runs with Expo Go" src="https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000" />
    </a>
  </p>
</p>

## Summary
Application for listing TV series, using TVMaze's API. The app is written in React Native and can be executed on iOS and Android devices. It is also available for bigger devices like Tablets and iPads (responsive).

## Features
- Mandatory
  - [x] List all series, using the API paginated scheme
  - [x] Allow users to search series by name
  - [x] Listing and Search views containing name and poster image of series
  - [x] Display series' details
    - [x] Name
    - [x] Poster
    - [x] Air times (schedule)
    - [x] Genres
    - [x] Summary
    - [ ] Episodes, filtered by season
  - [ ] Displaying episode's details
    - [ ] Name
    - [ ] Number
    - [ ] Season
    - [ ] Summary
    - [ ] Image

- Bonus
  - [ ] Pin authorization
  - [ ] Fingerprint authorization
  - [ ] Save series as favorite
  - [ ] Remove series from favorites
  - [ ] Browse favorites series
  - [x] People search
  - [x] Display person's details
    - [x] Name
    - [x] Image
    - [ ] Series they have participated

## Running Locally (Dev)
Assuming that you have [Node 14 LTS](https://nodejs.org/en/download/) or greater installed, you can use npm to install the Expo CLI command line utility:

```sh
npm install --global expo-cli
```

Follow [this guide](https://docs.expo.dev/get-started/installation/) if you need more info around the needed tools.

When the environment is ready, open your terminal and type the following commands:

```sh
# clone the project and cd into it
git clone https://github.com/scalfs/tv-guide; cd ./tv-guide

# install dependencies
yarn

# start the development environment
yarn start
```

You'll then be in the [expo development environment](https://docs.expo.io/versions/latest/).

Android Studio and XCode Simulators can be used to open the app. If they are already installed, you can just press `i` or `a` to start.

If you prefer, there's also a mobile client app called [Expo Go](https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and) used to open the project on iOS and Android platforms.
You just need to install it and then scan the Expo QR Code displayed on your terminal (press `c` to view it).

## Pre-release versions
To avoid installing all of the required environment,

Download the [iOS](https://github.com/scalfs/tv-guide/blob/main/distribution/ios-preview.tar.gz) or [Android](https://github.com/scalfs/tv-guide/blob/main/distribution/android-preview.apk) builds

Then, install it on your physical device ([Android](https://docs.expo.dev/build-reference/apk/#installing-your-build)) or in the simulator ([Android](https://docs.expo.dev/build-reference/apk/#installing-your-build)/[iOS](https://docs.expo.dev/build-reference/simulators/#installing-your-build-on-the-simulator)) and enjoy the app!

## Commands

- `start`: starts the expo server, dev mode
- `lint`: runs the linter in all components and screens
- `test`: runs jest to test all components and screens
- `test:watch`: runs jest in watch mode

## Technologies
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [React Navigation](https://reactnavigation.org/)
- [Jest](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Axios](https://github.com/axios/axios)
- [React Query](https://tanstack.com/query/v4/docs/adapters/react-query)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [GitHub Actions](https://github.com/features/actions)
