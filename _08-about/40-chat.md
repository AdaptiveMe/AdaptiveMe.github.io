---
layout: default
layout_grid: true
title: Communicate
keywords: adaptive
description: JHipster is a fully Open Source, widely used application generator. It leverages cool technologies like Spring Boot, AngularJS and Yeoman to give you a high level of productivity and quality.
class: fa fa-comments-o
sitemap:
priority: 1.0
lastmod: 2015-10-27T11:07:00+01:00
---

<h1><i class="{{ page.class }}" style="width: 55px;">{{ page_class_value }}</i> {{page.title}}</h1>

<i class="fa fa-exclamation-triangle" style="padding-left: 4px;width: 25px;color: orange;"></i><i>Please note that we all do this in the spirit of Open Source.</i> All discussions are public, so that everyone can participate and help each other. Misbehaving on any of our channels -  _disrespect, flaming, insults, spamming_ - will not be tolerated. Not only will we ban you permanently but we'll also send Chuck Norris your way to kick your server-side. Keep it friendly - karma.

## Chat with the team and other users on Gitter

* [Main Room](https://gitter.im/AdaptiveMe/AdaptiveMe.github.io) - For general chat.

## Discuss with the team and other users on Google Groups

* [General Group](https://groups.google.com/forum/#!forum/adaptive-general) - For general

## Report issues, request features on GitHub

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
            <td><p>{{p.description}}</p></td>
        </tr>
        {% endfor %}
        </tbody>
    </table>
</div>

## Follow the development team


<br/>
<div class="row">
    {% for p in site.developers %}
    <div class="col-md-3 text-center" style="padding-bottom: 20px;">
        <img class="img-rounded" src="{{p.avatar}}" width="140" height="140">
        <h2 style="padding-bottom: 0px; padding-top: 25px; margin: 0;">{{ p.name }}</h2>
        <p style="letter-spacing: -0.5px;font-weight: 200;color: darkgray; font-size: 20px; padding-bottom: 20px; padding-top: 0px; margin: 0;">{{ p.role }}</p>
        <p>
            {% if p.github !=  %}<a href="https://github.com/{{ p.github }}"><i class="fa fa-github-square" style="padding-right: 5px;padding-left:5px;font-size: 32px;color:#333333"></i></a>{% endif %}
            {% if p.twitter !=  %}<a href="https://twitter.com/{{ p.twitter }}"><i class="fa fa-twitter-square" style="padding-right: 5px;padding-left:5px;font-size: 32px;color:#55acee"></i></a>{% endif %}
            {% if p.googleplus !=  %}<a href="{{ p.googleplus}}"><i class="fa fa-google-plus-square" style="padding-right: 5px;padding-left:5px;font-size: 32px;color:#dc4e41"></i></a>{% endif %}
            {% if p.linkedin !=  %}<a href="{{ p.linkedin}}"><i class="fa fa-linkedin-square" style="padding-right: 5px;padding-left:5px;font-size: 32px;color:#0077b5"></i></a>{% endif %}
        </p>
        <p>
            {% if p.bio !=  %}{{ p.bio }}{% endif %}
        </p>
    </div>
    {% endfor %}
</div>
