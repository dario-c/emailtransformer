## Conventions in this section
The commands written in this manual begins with the dollar symbol ($) 
simulating the command line prompt. You don't have to type the dollar symbol. 
Some commands require you to be a super user. In those cases the prompt symbol
will be the hash (#). On some Linux systems like Ubuntu,
you can precede the command with the word "sudo" in order to execute it as such.

    # this is the prompt for a command executed as superuser.
    $ this is the prompt for a command executed as a regular user.

In JavaScript there are two ways to write comments. Comments are not interpreted,
they are left for humans to add annotations. The double slash affects only
one line:

    // this is a comment line, this line is not interpreted.

The slash with the asterisk is used to comment several lines:

    /*
     * this is a multi line comment 
     */

In this manual we use comments with dots in between to illustrate that in an
actual code, there would be some other lines of code in there but they are
irrelevant for the example at hand:

    /* ... */


# Configuring the project
There is an online project that accompanies this manual, containing source files and 
libraries. You can download it using [Mercurial](Version control tool) or through 
the downloads section in the project's site: 

    https://bitbucket.org/carlosble/javascript4testers/downloads

## Setting up the tools for the session
JavaScript is already installed in all browsers, they are ready to execute it 
right away. We just need to start up the browser, open the console and write
JavaScript for the browser to interpret it on the fly.
In that regard, it's like BASIC back in the 80's on computers like 
Commodore or Atari where 
one could just start up the machine and code without any additional installation. 
However we are going to use frameworks and libraries 
that depend on [Node.js](http://nodejs.org/). You need to install Node.js which
comes along with the Node Package Manager (npm).
Node.js is a platform but most of the time we are going to use it just as a 
JavaScript interpreter in the command line. For now, you just have to know that
Node.js can interpret JavaScript without a browser. It's the technology used to
execute JavaScript in the server side. Npm is a software installer that 
works in the command line. 

All the tools work on Windows, Linux, MacOS and other platforms. 

The project contains the Jasmine test framework already as well as libraries like 
jQuery. 

### Installing Karma
Karma is an open source test runner for JavaScript written mostly by Vojta Jina, 
a Google employee. It was named
Testacular at the beginning, aiming to illustrate that it is a spectacular 
test runner, but they changed the name for obvious reasons. We are
going to use Karma because it's really fast, it supports several test frameworks 
and can run on multiple browsers, even on mobile devices.
Installing Karma:

    $ npm install karma --save-dev
    $ npm install karma-jasmine karma-chrome-launcher --save-dev
    $ npm install karma-coverage --save-dev

Then start karma:

    $ ./node_modules/karma/bin/karma start karma.conf

The karma.conf file exists in the project folder and it's been generated using 
the wizard that comes with karma ("karma init karma.conf"), you don't have to
worry about this file for now. After running this
line you should see some tests passing and some failing. It will also open up
a Chrome window to use the real browser as the execution environment, however
the test results are displayed in the console (command line).


