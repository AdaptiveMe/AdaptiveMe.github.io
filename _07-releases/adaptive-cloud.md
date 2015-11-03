---
layout: default
layout_grid: true
title: Adaptive Cloud
keywords: adaptive cloud app developers build help adaptive cloud cloud adaptive
description: Create, Develop, Build & Distribute Apps As-A-Service. 
class: fa fa-file-text-o
class_value:
sitemap:
priority: 1.0
lastmod: 2015-10-27T11:07:00+01:00
---

<h1><i class="{{ page.class }}" style="width: 55px;">{{ page_class_value }}</i> {{page.title}} Releases</h1>
<br/>
{% for p in site.07-releases %}
{% if p.isrelease != and p.url contains page.url %}
* **[{{ p.project }} {{ p.version }} _{{ p.type }}_]({{ p.url }})** - _{{ p.lastmod | date: '%B %d, %Y' }}_
{% endif %}
{% endfor %}

<br/>