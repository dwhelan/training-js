[![Build Status](https://travis-ci.org/dwhelan/training-js.svg?branch=master)](https://travis-ci.org/dwhelan/training-js)

# Agile Engineering Training

This repository contains training exercises and katas for the LeanIntuit Agile Engineering training course in javascript.

# Getting started

## Install node.js and yarn
These katas require that `Node.js` be installed. Go to the [node site](https://nodejs.org/) and following the install instructions for your operating system.

`npm`, the node package manager, will be installed when you install `Node.js`.

If you are running on Windows you will need to restart your computer in order for `Node.js` to work. However, `yarn` is used in this repo so please install `yarn` as described in [yarn install instructions](https://yarnpkg.com/en/docs/install).

## Download the training exercises
The easiest way to access the training exercises is to use `git`. If you really, really don't want to use `git` then
click **Clone or download** on this page, select **Download Zip** and  unzip the files on your local file system.

If you do want to use `git` but don't have it installed we suggest you download it from the [git download page](https://git-scm.com/download/).

With `git` installed you simply open up a shell or command window and do the following

```
git clone https://github.com/dwhelan/training-js.git
cd training-js
yarn install
yarn test bowling
```

The output should look something like:
```
  Bowling
    - should do something


  0 passing (4ms)
  1 pending

Done in 0.29s.
```

# Running tests
[Mocha](https://github.com/mochajs/mocha) is used as the test framework for these katas. You specify the test(s) you want to run on the command line:

```sh
yarn test bowling
```

If you are on Windows you may see the error `File sizes do not match` because of line ending differences. The fix is to delete the `Gilded_Rose.should_update_items.approved.txt` file and rename the `Gilded_Rose.should_update_items.received.txt` file to `Gilded_Rose.should_update_items.approved.txt`.

If you want to run your tests everytime you save a file (recommended) then run:

```sh
yarn watch bowling
```

On non-Windows systems you can also run your tests with code coverage:

```sh
yarn cover bowling
```

You should see a summary of the file coverage on the console. Uou can also see a more detailed coverage report at [coverage/lcov-report/index.html](coverage/lcov-report/index.html) with your browser.
# Compatability
The javascript code is ECMAScript 5.1.

The following `Node.js` versions are supported:
- 3.x
- 4.x
- 5.x
- 6.x
- 7.x
- 8.x
- 9.x

Other versions will likely work but have not been tested.

# IDE suggestions
For some tips on using some popular IDEs you might to check out:
* [WebStorm](WebStorm.md)
* [Atom](Atom.md)

# To do
* DRY up `var expect = require("expect");`
* get working with Jasmine
* create an ecmascript 6 version of the katas
* fix missing bartender.md => or simplify how kata descriptions are done
