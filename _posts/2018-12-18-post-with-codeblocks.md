---
layout: post
title: Post with codeblocks
date: 2018-12-18 12:05:50 +0100
last_modified_at: 2018-12-24 22:02:07 +0100
author: desired persona
author_bio: false
categories:
  - codeblocks
  - linenos
  - syntax highlighting
---

This is how to add codeblocks to your posts


### Codeblocks

Input:

{% highlight text %}
``` ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```
{% endhighlight %}

Output:

``` ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```


### Codeblocks with line numbers

Input:

{% highlight text %}
{% raw %}{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}{% endraw %}
{% endhighlight %}

Output:

{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}


### Command line prompt

Input:

```text
{% raw %}{% highlight shell %}
gem install jekyll
{% endhighlight %}{% endraw %}
```

Output:

{% highlight shell %}
gem install jekyll
{% endhighlight %}

### Code in a paragraph

Input:

```
{% raw %}This is what `<html>` code looks like in a paragraph of text.{% endraw %}
```

Output:

This is what `<html>` code looks like in a paragraph of text.



