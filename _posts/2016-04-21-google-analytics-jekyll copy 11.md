---
layout: post
title: Google Analytics for Jekyll
description: Learn how to add Google Analytics tracking code to your Jekyll static website. Google Analytics is a free web analytics service offered by Google that tracks and reports website traffic.
date: 2016-04-21 10:00:00
last_modified_at: 2018-02-21 18:03:00
author: desired persona
category: 
  - Jekyll
tags:
  - Google Analytics
  - Github Pages
---

Google Analytics tracking is a free web analytics service offered by Google that tracks and reports website traffic. It’s really easy to add the tracking code to your Jekyll static website.

Login to [Google Analytics](https://www.google.com/analytics){:target="_blank"} and create a new property to receive a tracking ID for your website. You will find your Universal Analytics tracking code under **Admin > Property > Tracking Info > Tracking Code**. Your tracking ID and property number are displayed at the top of the page.

## Install Google Analytics tracking code

First create a new file called `analytics.html` in your site's `_includes` directory.

Now paste the following Google Analytics tracking code in to your `analytics.html` file and save it.

{% highlight liquid %}{% raw %}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '{{ site.google_analytics }}', 'auto');
  ga('send', 'pageview');

</script>
{% endraw %}{% endhighlight %}

The JavaScript tracking snippet described above ensures the script will be loaded and executed asynchronously on all browsers, it has the disadvantage of not allowing modern browsers to preload the script.

The alternative async tracking snippet below adds support for preloading, which will provide a small performance boost on modern browsers, but can degrade to synchronous loading and execution on IE 9 and older mobile browsers that do not recognize the async script attribute. Only use this tracking snippet if your visitors primarily use modern browsers to access your site.

{% highlight liquid %}{% raw %}
<script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '{{ site.google_analytics }}', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
{% endraw %}{% endhighlight %}

The `{% raw %}{{ site.google_analytics }}{% endraw %}` liquid object included above will allow us to set our tracking ID in Jekyll's `_config` file.

## Add Google Analytics tracking ID to Jekyll’s config file

Open your sites `_config.yml` file and add the following lines of code. It is important to reference your own tracking ID, so replace `UA—XXXXXXXX-X` below with your websites unique tracking ID.

```yaml
# Google Analytics
google_analytics: UA—XXXXXXXX-X
```

Finally, Google recommends placing the code in the `<head>` section of your site, so that all visits to your website are tracked correctly.

Opened your `head.html` file which is normally located in your site's `_includes/` directory and paste the following code just before the end `</head>` tag.

(**Important:** The code must go in the `<head>` section of your website so that all your pages are tracked correctly by Google. This `head.html` file name may vary depending on what Jekyll theme you are using.)

```liquid
{% raw %}{% if site.google_analytics and jekyll.environment == 'production' %}
{% include analytics.html %}
{% endif %}{% endraw %}
```

In future, when you run `bundle exec jekyll serve` your Analytics tracking will no longer render when browsing your website locally. This prevents visit from `localhost:4000` messing up your analytics because by default Jekyll's environment is set to development.


Great right?

"But how do i setup Google Analytics to only track site visitors on a production environment?" I hear you say.

## Setting Jekyll's environment to production

We only need to add our Google Analytics script when Jekyll's environment = production. This prevents us from messing up our analytics with visits from our localhost development server.

If you are using Github Pages to build your site, GitHub Pages will automatically set `jekyll.environment == 'production'` for you.

If you are using another hosting provider or building your site locally, you will now need to prefix the build command with `JEKYLL_ENV=production` like so

{% highlight shell %}
JEKYLL_ENV=production bundle exec jekyll build
{% endhighlight %}

If you have followed all the steps correctly, you should now have Google Analytics installed correctly on your Jekyll website.

Unsure?

Open your `_site` folder after you build your site. Check to see if Google Analytics tracking code was added to the `<head>` section of the generated files before you push updates to your live site.

Did you find this tutorial helpful? Let me know in the comments.
