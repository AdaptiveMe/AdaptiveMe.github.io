# The Adaptive.me Project
[![adaptive.me](https://img.shields.io/badge/adaptive-me-orange.svg)](http://adaptive.me)
[![Adaptive Runtime Platform](https://raw.githubusercontent.com/AdaptiveMe/AdaptiveMe.github.io/master/assets/logos/arp_for_Runtime.png)](#)


## What is Adaptive.me?
Adaptive is a multi-platform, multi-screen app development and build environment that provides the right tools crafted for and by developers, designers and testers like you. We strive to build a better way to create HTML5 hybrid apps for mobile, web and everywhere. 

Adaptive is comprised of a series of PaaS (Platform-As-A-Service) development tools and build services and open-source runtimes to encapsulate hybrid apps on a diversity of platforms. The Adaptive Runtime Platform (ARP) represents all the open-source portions of the platform to facilitate co-creation, contribution and build a community around our project!

For more information please visit <http://adaptive.me>. And, yes, we need to make some money at some stage to feed our developers and pet hamsters - yours truly included - all donations of funds and materials for the development and support of these open-source projects are very welcome. Codingly yours, [Carlos](https://github.com/carloslozano) 

## Projects
### What is Adaptive Runtime Platform (ARP)?
Hybrid apps are applications that are build using HTML5/CSS3/JavaScript web technologies that use a native “container” to present the content to a user and to access – bridging web and native contexts - the native functionalities of the device for which the application is built. 

The Adaptive Runtime Platform (ARP) provides these native “containers” for the main mobile and desktop platforms so that Hybrid apps can be compiled and deployed on a multiplicity of devices leveraging the same code developed using modern web technologies. Adaptive Runtime Platform (ARP) and sub-projects are open-source under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## Administrative Organisation
This project is curated by Carlos Lozano Diez (@carloslozano). For administrative matters;  contributor license agreements (CLA) and/or questions, please send a mail to [carlos@adaptive.me](carlos@adaptive.me). 

### Ideas, Suggestions and Requirements
If you have any ideas, suggestions or requirements that affect the whole Adaptive Runtime Platform (ARP), please open an issue [here](https://github.com/AdaptiveMe/AdaptiveMe.github.io/issues). We welcome any contributions to make the Adaptive Runtime Platform (ARP) better:

* Ideas - things that would be really cool to add to the platform.
* Suggestions - better methods, tools, etc. that make everyone's life easier.
* Requirements - cool stuff you'd like to see appear in the platform; additional APIs, features, etc.

Submit your ideas/suggestions/requirements [here](https://github.com/AdaptiveMe/AdaptiveMe.github.io/issues).

## Project Organisation
There are 2 types of projects; API and Implementation & Runtime Projects.

### API Projects
Represent the common interfaces and implementation for the different language domains – Java, CSharp, Objective-C, etc. – that all platform implementations must adhere to. This project is tightly governed to ensure that all platform implementations contain the same functionality at function and parameter level.

###Implementation & Runtime Projects
Represent the platform specific implementations – iOS, Android, etc. – of the common interfaces defined in the API Projects. These projects also contain the runtime specific code used to build a platform specific application – icons, splash screens, signatures, etc. – for the supported platforms.

### Repositories & Projects
The following diagram illustrates the repository organisation with the different API and Implementation & Runtime Projects:

![Project Packages](https://raw.githubusercontent.com/AdaptiveMe/AdaptiveMe.github.io/master/images/project-packages.png)

## Contributing
We'd *love to accept your patches and contributions to this project*.  There are a just a few small guidelines you need to follow to ensure that you and/or your company and our project are safeguarded from inadvertent copyright infringement. I know, this can be a pain but we want fair-play from the very start so that we're all on the same page.

### Contributor License Agreement
Contributions to any Adaptive project are subject to the [Apache Public License v2.0][] and Adaptive as project curators require that you provide a Contributor License Agreement (CLA).  This is **not** a copyright **assignment**, it simply gives the Adaptive permission to use and redistribute your contributions as part of the project.

  * If you are an individual writing original source code and you're sure you own the intellectual property, then you'll need to sign an [individual CLA][].

  * If you work for a company that wants to allow you to contribute your work on their behalf, then you'll need to sign a [corporate CLA][].

You generally only need to submit a CLA once, so if you've already submitted one for any of the Adaptive projects then you probably don't need to do it again.

[individual CLA]: https://github.com/AdaptiveMe/AdaptiveMe.github.io/blob/master/ICLA.md
[corporate CLA]: https://github.com/AdaptiveMe/AdaptiveMe.github.io/blob/master/CCLA.md
[Apache Public License v2.0]: http://www.apache.org/licenses/LICENSE-2.0.html


### Submitting a patch

  1. It's generally best to start by opening a new issue describing the bug or feature you're intending to fix or add.  Even if you think it's relatively minor, it's helpful to know what people are working on.  Mention in the initial issue that you are planning to work on that bug or feature so that it can be assigned to you.

  1. Follow the normal process of [forking][] the project, and setup a new
     branch to work in.  It's important that each group of changes be done in
     separate branches in order to ensure that a pull request only includes the
     commits related to that bug or feature.

  1. Any significant changes should almost always be accompanied by tests.  We aim to have a good test coverage, so look at some of the existing tests if you're unsure how to go about it. If the project has no tests, feel free to contribute them. Tests are contributions too!

  1. Do your best to have well-formed commit messages for each change. If you're closing an issue with the commit, include the words "Fixes #<issuenumber>" in your comment where <issuenumber> is the number of the issue or feature being fixed or added. This provides consistency throughout the project, and ensures that commit messages are able to be formatted properly by various git tools and that issues are automatically closed by github.

  1. Finally, push the commits to your fork and submit a [pull request][].
  
[forking]: https://help.github.com/articles/fork-a-repo
[pull request]: https://help.github.com/articles/creating-a-pull-request

### Becoming a Contributor

Anyone can become a contributor by the project - you become a contributor when any of your submitted functionality of fixes are accepted after your [pull request][]. 

Ensure that you've provided us with a Contributor License Agreement if you're submitting significant changes or new functionality. Minor changes may be accepted without a CLA at the discretion of existing project committers.

### Becoming a Committer

Consistent and regular contributors can apply to become a Committer by being nominated by an existing committer of the project. You start by becoming a Contributor and graduate to Committer after demonstrating your commitment to the development and continued evolution of the project. Committers become Contributors after a vote by existing Committers of the project.

## Support and Contact

* If you're seeking technical help, head over to [StackOverflow](http://stackoverflow.com/) to ask your question and tag it as **adaptiveme** - we might not see the question if you don't tag it. 
* For general information, head over to our [site](http://adaptive.me) and check out our [blog](http://adaptive.me/blog).
* You can follow us on [twitter](https://twitter.com/adaptiveme) and [Google+](http://www.google.com/+AdaptiveMe).
* If you have something more to discuss, mail [me](mailto:carlos@adaptive.me)!

## Contributing

We'd *love to accept your patches and contributions to this project*.  There are a just a few small guidelines you need to follow to ensure that you and/or your company and our project are safeguarded from inadvertent copyright infringement. I know, this can be a pain but we want fair-play from the very start so that we're all on the same page. Please refer to the [project site](http://adaptiveme.github.io) for more information.

### Governance

This project is curated by [Carlos Lozano][] and [Adaptive.me]. Committers to the project have the right to accept pull requests from contributors. Contributions that do not adhere to the positive karma and spirit of the project may be rejected. Objections may be raised to the curator of the project by [mail](mailto:carlos@adaptive.me). 

```
Copyright (c) 2013-2015 Carlos Lozano Diez.
Copyright (c) 2013-2015 Adaptive.me.
Adaptive Runtime Platform (ARP) is Licensed under Apache Public License v2.0.
```

[Carlos Lozano]: https://github.com/carloslozano
[Adaptive.me]: https://github.com/AdaptiveMe
## Attributions

* Adaptive Runtime Platform (ARP) artwork by [Jennifer Lasso](https://github.com/Jlassob).
* Project badge artwork by [shields.io](http://shields.io/).
* All other logos are copyright of their respective owners.

## License
All the source code of the Adaptive Runtime Platform (ARP), including all Adaptive Runtime Platform (ARP) sub-projects curated by [Carlos Lozano Diez](https://github.com/carloslozano), are distributed, and must be contributed to, under the terms of the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). The [license](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE) is included in this [repository](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE).

Forged with :heart: in Barcelona, Catalonia · © 2013 - 2015 [adaptive.me](http://adaptive.me) / [Carlos Lozano Diez](http://google.com/+CarlosLozano).
