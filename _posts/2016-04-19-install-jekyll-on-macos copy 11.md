---
layout: post
title: Install Jekyll on macOS Mojave
description: How to install Jekyll static site generator on macOS and host your static website on Github Pages.
date: 2016-04-19 22:00:00
last_modified_at: 2018-10-01 12:30:00
author: desired persona
category:
    - Jekyll
    - static website
tags:
    - macOS
---

[Jekyll](https://jekyllrb.com/){:target="_blank"} is a tool for transforming your plain text into static websites and blogs. It is simple, static, and blog-aware. Jekyll uses the [Liquid templating language](https://docs.shopify.com/themes/liquid-basics){:target="_blank"} and has built-in [Markdown](https://daringfireball.net/projects/markdown/){:target="_blank"} and [Textile](https://en.wikipedia.org/wiki/Textile_(markup_language)){:target="_blank"} support. It also ties in nicely to [Github Pages](https://pages.github.com/){:target="_blank"} so you have the option to host your website for free. I highly recommend you join [Jekyll Talk](https://talk.jekyllrb.com/){:target="_blank"} the official support forum, where users and contributors can ask questions and discuss all aspects of Jekyll.

## Preparing to install Jekyll

Installing Jekyll is easy and straight-forward, but there are a few requirements you’ll need to make sure your system has before you start.


1. Go to the Mac app store and Install Xcode.

2. Install the Xcode Command Line Tools using your Terminal app.
```sh
xcode-select --install
```

3. Install [Homebrew](https://brew.sh) a package manager for macOS.

    **Why?**
    
    We will use Homebrew to install Ruby. 
    
    **Why macOS already comes with a version of Ruby?**

    A lot of the system directories in macOS are locked down making it unusable.

    Install Homebrew using the following command in Terminal app.
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

4. Install the latest version of Ruby using Homebrew.
```sh
brew install ruby
```

5. Check the Ruby version to confirm a successful installation.
```sh
ruby -v
```


## Installing Jekyll

1. Install Bundler. [Bundler](https://bundler.io) provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.
```sh
gem install bundler
```

2. Finally you can install Jekyll.
```sh
gem install jekyll
```

3. Check the Jekyll version.
```sh
jekyll -v
```

    Done!

## How to update Jekyll

Bundler will update all your gems to the latest versions by simply running `bundle update` in a Terminal window.


Did you find this tutorial helpful?
