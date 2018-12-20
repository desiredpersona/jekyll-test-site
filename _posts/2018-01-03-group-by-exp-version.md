---
layout: post
title:  "`group_by_exp` - version number"
date:   2018-02-27 18:21:11 +0000

# test data
software:
- name: "New shiny software"
  version: "0.4"
- name: "ABC software"
  version: "1.2"
- name: "XYZ software"
  version: "1.9"
---


## Example using `group_by_exp` with age filter


### Input
```
{%raw%}
{{ page.software | group_by_exp:"item", "item.version | slice: 0" }}
{%endraw%}
```

### Output

{{ page.software | group_by_exp:"item", "item.version | slice: 0" }}




### Input
```
{%raw%}
{% assign groups = page.software | group_by_exp:"item", "item.version | slice: 0" %}
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

### Output
```
{% assign groups = page.software | group_by_exp:"item", "item.version | slice: 0" %}
{% for group in groups %}
    <h3>Major version number {{ group.name }}</h3>

    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
```
