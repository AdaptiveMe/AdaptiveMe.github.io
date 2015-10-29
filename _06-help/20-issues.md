---
layout: default
layout_grid: true
title: Bug Tracker
keywords: adaptive
description: JHipster is a fully Open Source, widely used application generator. It leverages cool technologies like Spring Boot, AngularJS and Yeoman to give you a high level of productivity and quality.
class: fa fa-bug
sitemap:
priority: 1.0
lastmod: 2015-10-27T11:07:00+01:00
---

<h1><i class="{{ page.class }}" style="width: 55px;">{{ page_class_value }}</i> {{page.title}}</h1>
<p><i class="fa fa-info-circle" style="padding-left: 4px;width: 20px;color: green;"></i>Click on the project link or the issues icon below to report an issue/request.</p>
<div class="table-responsive">
    <table id="projects" class="table table-striped">
        <thead>
        <tr>
            <th>Project</th>
            <th>Type</th>
            <th>Tech</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {% for p in site.projects %}
        <tr>
            <td><a href="https://github.com/AdaptiveMe/{{p.project_slug}}/issues" target="project_{{p.project_slug}}">{{p.project_slug}}</a></td>
            <td>{{p.project_type}}</td>
            <td>{{p.project_tech}}</td>
            <td><p>{{p.description}}</p><p align="right"><a href="https://github.com/AdaptiveMe/{{p.project_slug}}/issues" target="issues_{{p.project_slug}}"><img src="http://i.4dp.me/github/issues/AdaptiveMe/{{p.project_slug}}.svg"></a></p></td>
        </tr>
        {% endfor %}
        </tbody>
    </table>
</div>