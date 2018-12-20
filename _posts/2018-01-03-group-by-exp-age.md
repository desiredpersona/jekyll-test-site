---
layout: post
title:  "`group_by_exp` by age > 30"
date:   2018-01-02 18:21:11 +0000
---


## Example using `group_by_exp` with age filter

**NB: This doesn't work!**


### Input
```
{%raw%}
{{ site.members | group_by_exp:"item", "item.age > 30" }}
{%endraw%}
```

### Output

{{ site.members | group_by_exp:"item", "item.age > 30" }}



### Input
```
{%raw%}
{% assign groups = site.members | group_by_exp: "item", "item.age > 30" %}
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
{% assign groups = site.members | group_by_exp: "item", "item.age > 30" %}
{% for group in groups %}
    <h3>{{ group.name }}</h3>

    <ul>
    {% for item in group.items %}
        <li>{{item.name}}</li>
    {%endfor%}
    </ul>
{%endfor%}
```