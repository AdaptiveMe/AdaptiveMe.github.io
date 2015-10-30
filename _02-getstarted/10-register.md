---
layout: default
layout_grid: true
title: Register with Adaptive
keywords: adaptive register app developers help cloud register adaptive adaptive cloud
description: Getting started - Register with Adaptive and manage your account. 
class: fa fa-sign-in
sitemap:
priority: 1.0
lastmod: 2015-10-27T11:07:00+01:00
---

<h1><i class="{{ page.class }}" style="width: 55px;">{{ page_class_value }}</i> {{page.title}}</h1>


<div class="diagram .img-responsive">
    User->Adaptive CLI: register
    Note right of Adaptive CLI: - Email\n- Username\n- Password
    Adaptive CLI->Adaptive Cloud: register user
    
</div>
