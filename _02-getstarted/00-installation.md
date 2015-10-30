---
layout: default
layout_grid: true
title: Install your Environment
keywords: adaptive app environment install help	cloud install environment adaptive cloud cli nodejs
description: Getting started - Install your Environment for Adaptive development; OSX, Windows & Linux. 
class: fa fa-desktop
sitemap:
priority: 1.0
lastmod: 2015-10-27T11:07:00+01:00
---

<h1><i class="{{ page.class }}" style="width: 55px;">{{ page_class_value }}</i> {{page.title}}</h1>

<h2>Prerequisites</h2>

You probably already have NodeJS installed, if you do, make sure you're running a recent version. Version 4.x or higher should be fine. 

If you don't have have node installed, please read on:

<h3><i class="fa fa-windows" style="padding-right: 10px;"></i> Windows</h3>

* You can download the installer for Windows directly from the <a href="http://nodejs.org/#download">NodeJS</a> site.
* If you use a package manager for Windows, please refer to the following [NodeJS](https://nodejs.org/en/download/package-manager/#windows) page for recommended alternatives.

<h3><i class="fa fa-apple" style="padding-right: 10px;"></i> Mac OS X</h3>

We strongly recommend that you use [Homebrew](http://brew.sh/) to install NodeJS on your Mac. It's _"The missing package manager for OS X"_, literally. 

* Open a terminal prompt and copy & paste the following command at the prompt to download and install it:
  * <code> ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" </code>
  * You may be asked for your password to <code>sudo</code> and install the Xcode Command Line tools.
* After installation, issue the following command: <code> brew -v </code> to check everything's fine. The command should output it's version and you're ready to install node!


If you already had a previous installation of [Homebrew](http://brew.sh/) on your machine and/or recently installed OSX El Capitan, we recommend you update and upgrade your installation.

* Open a terminal prompt and copy & paste the following command at the prompt to update and upgrade your packages for OSX El Capitan:
  * <code> brew update && brew upgrade </code>
  * You may be asked for your password to <code>sudo</code> and also upgrade the Xcode Command Line tools.


Install NodeJS and NPM with the following:

* Open a terminal prompt and copy & paste the following command at the prompt to download and install NodeJS and NPM:
  * <code> brew install node </code>
* After installation, issue the following command: <code> node -v </code> to check everything's fine. The command should output it's version and you're all set!
  
<h3><i class="fa fa-linux" style="padding-right: 10px;"></i> Linux</h3>

It's important you get the latest NodeJS for your distribution. There's considerable lag between official distro packages and latest NodeJS builds. We recommend you source your NodeJS packages from the nice guys at [NodeSource](https://nodesource.com/).

If you're on Ubuntu:

* <code>curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -</code> - to get your package sources updated.
* <code>sudo apt-get update</code> - never hurts to make sure.
* <code>sudo apt-get install -y nodejs</code> - you're good to go!
* <code>sudo apt-get install -y build-essential</code> - this is a bonus to compile and install native addons from npm.

If you're on Debian:

* <code>sudo apt-get install curl</code> - can't curl without it.
* <code>curl --silent --location https://deb.nodesource.com/setup_4.x | bash - </code> - to get your package sources updated.
* <code>sudo apt-get update</code> - never hurts to make sure.
* <code>sudo apt-get install -y nodejs</code> - you're good to go!
* <code>sudo apt-get install -y build-essential</code> - this is a bonus to compile and install native addons from npm.

For other distros, please check out the following [NodeJS](https://nodejs.org/en/download/package-manager/) page.

<h2>Installing the Adaptive CLI</h2>

The Adaptive CLI is a _Command Line Interface_ for interacting with the Adaptive Services on the cloud. 

<img class="img-responsive" src="/images/adaptive-cloud-cli/login.gif" alt="Adaptive CLI">

Install Adaptive CLI globally and you'll have access to the *adaptive* command anywhere on your system (as seen above).

* Install with <code> npm install -g adaptive-cloud-cli </code>

**Note:** If you're on **Mac OSX** and didn't install NodeJS using Homebrew, you may need to install the above package using <code>sudo</code>. If you're on **Linux**, depending on your distro, this may also be the case. You should install the above package with <code> sudo npm install -g adaptive-cloud-cli </code>.

