## Adaptive Runtime Platform (ARP) Project
This is the AdaptiveMe Runtime Platform project site, here you will find general information about Adaptive, the organisation of the project and its subprojects, how to contribute and how to communicate with other contributors and committers of the project. This project is curated by @carloslozano. Welcome!

### What is Adaptive?
Adaptive is a multi-platform, multi-screen app development and build environment that provides the right tools crafted for and by developers, designers and testers like you. We strive to build a better way to create HTML5 hybrid apps for mobile, web and everywhere. 

Adaptive is comprised of a series of PaaS (Platform-As-A-Service) development tools and build services and open-source runtimes to encapsulate hybrid apps on a diversity of platforms. The Adaptive Runtime Platform (ARP) represents all the open-source portions of the platform to facilitate co-creation, contribution and build a community around our project!

For more information please visit <http://adaptive.me>. And, yes, we need to make some money at some stage to feed our developers and pet hamsters - yours truly included - all donations of funds and materials for the development and support of these open-source projects are very welcome. Codingly yours, @carloslozano. 

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

[individual CLA]: https://developers.google.com/open-source/cla/individual
[corporate CLA]: https://developers.google.com/open-source/cla/corporate
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

### Governance

This project is curated by [Carlos Lozano][] and [Adaptive.me]. Committers to the project have the right to accept pull requests from contributors. Contributions that do not adhere to the positive karma and spirit of the project may be rejected. Objections may be raised to the curator of the project (@carloslozano) using the issue tracker for the project in question. 

```
Copyright (c) 2013-2014 Carlos Lozano Diez.
Copyright (c) 2013-2014 Adaptive.me.
Licensed under Apache Public License v2.0.
```

[Carlos Lozano]: https://github.com/carloslozano
[Adaptive.me]: https://github.com/AdaptiveMe

## Support and Contact

***Adaptive General Q&A***

* **Forum:** <https://groups.google.com/forum/#!forum/adaptive-general>
* **Mailing list:** <mailto:adaptive-general@googlegroups.com>

***Adaptive API Discussion***

For matters pertaining to the cross-platform APIs (interfaces and common code), please use the following communication channels.

* **Forum:** <https://groups.google.com/forum/#!forum/adaptive-api>
* **Mailing list:** <mailto:adaptive-api@googlegroups.com>


***Adaptive Implementation Discussion***

For matters pertaining to platform specific implementation of the APIs.

* **Forum:** <https://groups.google.com/forum/#!forum/adaptive-impl>
* **Mailing list:** <mailto:adaptive-impl@googlegroups.com>

***Adaptive Runtime Discussion***

For matters pertaining to platform specific build and runtime topics.

* **Forum:** <https://groups.google.com/forum/#!forum/adaptive-runtime>
* **Mailing list:** <mailto:adaptive-runtime@googlegroups.com>

***Adaptive Official***

* **Site:** <http://adaptive.me>
* **Blog:** <http://adaptive.me/blog>
* **Twitter:** <https://twitter.com/adaptiveme>

## License
All the source code of the Adaptive Runtime Platform (ARP), including all sub-projects curated by @carloslozano, are distributed, and must be contributed, under the terms of the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). Included here verbatim for convenience:

```
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   Copyright 2013-2014 Carlos Lozano Diez

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

#### Forged with ♥ in Barcelona · © 2013 - 2014 [adaptive.me](http://adaptive.me) / [Carlos Lozano Diez](http://google.com/+CarlosLozano).
