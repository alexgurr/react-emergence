# react-emergence &middot; [![npm](https://img.shields.io/npm/v/react-emergence.svg?style=flat-square)](https://www.npmjs.com/package/react-emergence)   [![npm](https://img.shields.io/npm/dw/react-emergence.svg?style=flat-square)]()

A React wrapper for detecting element visibility in the browser, using https://xtianmiller.github.io/emergence.js/.

react-emergence is a simple way for React users to pull in and use this.

Explanations for individual arguments can be found on the emergence git page. All credits go to the original author for the Emergence library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [ToDo](#todo)

## Installation

`npm install react-emergence`

or

`yarn add react-emergence`

## Usage

    <EmergeContainer>
        <Emerge>
            <div className="element-to-emerge"/>
        </Emerge
    </EmergeContainer

  )

## Options
### Emerge Container
* `className` - *string* Custom classname for the container. Ignored if *useWindowAsContainer* is true*
* `children` - *node* React children to render inside the container (**required**)
* `useWindowAsContainer` - *boolean* Use the default container (window)
* `args` - *object* Set of custom args - see https://xtianmiller.github.io/emergence.js/ for more information

### Emerge
* `children` - *node* React component to be handled as as an emerge element (**required**)

## ToDo:

- Tests
- More storybook examples