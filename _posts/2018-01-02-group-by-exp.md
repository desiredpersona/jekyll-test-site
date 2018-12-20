---
layout: post
title:  "`group_by_exp` by company"
date:   2018-01-02 18:21:11 +0000
---

## Example using `group_by_exp`


### Input
```
{%raw%}
{{ site.members | group_by_exp:"items", "items.company" }}
{%endraw%}
```


### Output
```
{{ site.members | group_by_exp:"items", "items.company" }}
```


### Input
```
{%raw%}
{% assign groups = site.members | group_by_exp: "items", "items.company" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>

    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
{%endraw%}
```


### Output:
```
{% assign groups = site.members | group_by_exp: "items", "items.company" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>

    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
```
