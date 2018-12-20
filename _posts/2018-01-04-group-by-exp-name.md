---
layout: post
title:  "`group_by_exp` by name"
date:   2018-01-02 18:21:11 +0000
---

## Example using `group_by_exp` with name filter

Group members by name

### Input
```
{%raw%}
{{ site.members | group_by_exp:"item", "item.name" }}
{%endraw%}
```


### Output
```
{{ site.members | group_by_exp:"item", "item.name" }}
```


### Input
```
{%raw%}
{% assign groups = site.members | group_by_exp: "item", "item.name" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>
{%endfor%}
{%endraw%}
```


### Output
```
{% assign groups = site.members | group_by_exp: "item", "item.name" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>
{%endfor%}
```
