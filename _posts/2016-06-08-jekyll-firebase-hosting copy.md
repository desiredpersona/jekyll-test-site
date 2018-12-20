---
layout: post
title: Deploy Jekyll to Firebase Hosting
description: How to host your Jekyll static websites on Firebase Hosting. Deploy your blog to a global content-delivery network (CDN) with a single command.
date: 2016-06-08 02:00:00
last_modified_at: 2018-03-20 11:40:00
author: desired persona
category:
    - Jekyll
    - web hosting
tags: 
    - Firebase hosting
---

Firebase Hosting is a developer focused static web hosting provider that is super fast, secure and reliable. You can quickly and easily deploy your static websites to a global content-delivery network (CDN) with a single command.

Key features of Firebase Hosting include:

- CDN-backed global content delivery.
- Free Automatic SSL certificate provisioning.
- Custom (and even naked) domain support.
- One-command deploys; one-click rollbacks.

Ready to get started?

## Create a free Google Firebase account

{% include figure image_path="/assets/images/firebase-hosting.png" alt="firebase hosting homepage" caption="Firebase homepage" %}

Sign in to the [Firebase Console](https://firebase.google.com){:target="_blank"} and create a new project. You will be prompted to enter a ‘Project name’ and choose a ‘Country/region’.

## Install Xcode
Go to the Mac app store and Install Xcode if you haven't already. Then install Xcode Command Line Tools with the follow command


{% highlight shell %}
xcode-select --install
{% endhighlight %}

## Install Node.js using Homebrew

The Firebase CLI (Command Line Interface) requires Node.js and npm. Installing Node.js will also install npm.

To install [Homebrew](https://brew.sh){:target="_blank"} just open the Terminal app on your Mac and run

{% highlight shell %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
{% endhighlight %}

If you have previously installed Homebrew make sure you have the latest version.

{% highlight shell %}
brew update
{% endhighlight %}

Now you can install Node

{% highlight shell %}
brew install node
{% endhighlight %}

It worth mentioning you can update Node at a later date using this Homebrew command

{% highlight shell %}
brew upgrade node
{% endhighlight %}

Check what version of Node you have installed. The Firebase CLI requires Node.js version 0.10.0 or greater.

{% highlight shell %}
node -v
{% endhighlight %}

You can also check what version of npm was installed

{% highlight shell %}
npm -v
{% endhighlight %}

## Installing the Firebase CLI
Once you have Node.js and npm installed, you can then install the Firebase CLI via npm

{% highlight shell %}
sudo npm install -g firebase-tools
{% endhighlight %}

When Firebase is finished installing you will need to login

{% highlight shell %}
firebase login
{% endhighlight %}

When prompted, allow Firebase to collect anonymous CLI usage information by typing `y` in Terminal and hitting the ‘Return’ key. Your browser will now automatically open to allow you to sign-in  to your Google account and accept some permissions.

## Setting up a Firebase project

Change directory to your Jekyll website’s directory.

{% highlight shell %}
cd ~/Sites/Jekyll/desiredpersona
{% endhighlight %}

Create a Firebase project

{% highlight shell %}
firebase init
{% endhighlight %}

Running the firebase init command creates a ‘firebase.json’ settings file in the root of your Jekyll website’s directory.

In Terminal you will be prompted to answer a few questions

**What Firebase CLI features do you want to setup for this folder?**

The only option we need to select here for our Jekyll static website is ‘Hosting’. Press the ‘spacebar’ key to deselect ‘Database’ and then hit the ‘return’ key.

**What do you want to use as your public directory? (public)**

You need to set `_site` to be used as your public directory.

**Configure as a single-page app (rewrite all urls to /index.html)? (y/N)**

Type the letter ’N’ for No.

**File _site/404.html already exists. Overwrite? (y/N)**

Type the letter ’N’ for No.

**File _site/index.html already exists. Overwrite? (y/N)**

Type the letter ’N’ for No.

**What Firebase project do you want to associate as default?**

Choose your Firebase project folder that you created earlier in this tutorial from the list. Firebase initialization is now complete!


## Deploy your website to Firebase

Open your ’firebase.json’ file located in your Jekyll website’s root directory and add any files you want to ignore when Firebase deploys your website. Here’s what my file currently looks like

{% highlight json %}
{
  "hosting": {
    "public": "_site",
    "ignore": [
      "firebase.json",
      "Gemfile",
      "Gemfile.lock",
      "Rakefile",
      "CNAME",
      "README.md"
    ]
  }
}
{% endhighlight %}

You can find out more about the ‘firebase.json’ file settings in the [Firebase Documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json){:target="_blank"}{:rel="nofollow”}.


Just like Jekyll, Firebase has a built in server which allows you to preview your website locally using this command

{% highlight shell %}
firebase serve
{% endhighlight %}

Now you can view your Jekyll website at [http://localhost:5000](http://localhost:5000){:target="_blank"}{:rel="nofollow”}

When you are ready you can deploy your website to Firebase hosting using the command

{% highlight shell %}
firebase deploy
{% endhighlight %}

You can view your live website by running `firebase open` in Terminal. Then select ‘Hosting: Deployed Site’ which will open your live website in a new browser window.

## Setup a custom domain with Free SSL
Open the [Firebase Console](https://console.firebase.google.com){:target="_blank"}{:rel="nofollow”} and choose the Firebase project you just created.

Then select **Hosting > Connect Domain** and enter your domain name when prompted.

Finally you will need to update your domain names DNS settings at your registrar with the new TXT and CNAME records that Firebase provides.

Did you find this tutorial helpful?
