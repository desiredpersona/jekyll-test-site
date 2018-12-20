---
layout: post
title: Generate a static website with Ghost
description: Create a static website with Ghost using Buster static site generator. Then install GIT for version control of your website.
date: 2016-02-15 14:00:00
last_modified_at: 2016-04-20 11:56:00
author: desired persona
category:
    - static website
    - Ghost
tags:
    - Cloudflare
    - Amazon S3
---

At the time i was looking for a blogging solution that would allow me to generate a static website that could be hosted on Amazon S3. I also liked the idea of being able to write in a split-screen editor with Markdown syntax on the left and a live preview on the right, rather than using a text editor.

>Ghost is a platform dedicated to one thing: Publishing.

[Ghost](https://ghost.org){:target="_blank"} is beautifully designed, completely customisable and completely Open Source. Ghost allows you to write and publish your own blog, giving you the tools to make it easy and even fun to do.

This tutorial will cover the following steps

* Installing Node.js locally on your computer.
* Installing Ghost and how to login to Ghost admin.
* Create a static website with Ghost using Buster Static Site Generator.
* Installing GIT for version control of your static website. (Optional)
* Hosting your static website on Amazon S3.
* Setting up Cloudflare DNS and CDN.

## Download and install Node

Ghost will be following & supporting Node's LTS versions. Check to see what version of [node the Ghost team currently recommends](https://docs.ghost.org/docs/supported-node-versions){:target="_blank"} installing.

Install Homebrew a package manager for macOS from the [www.brew.sh](http://www.brew.sh){:target="_blank"} website. Copy and paste the follow command in to your mac Terminal.

{% highlight shell %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

First check what versions of Node are available to install via Homebrew.

{% highlight shell %}
brew search node
{% endhighlight %}

Install the recommended version of Node(currently Node v6 boron LTS) via Homebrew by typing the following command in terminal.

{% highlight shell %}
brew install node@6
{% endhighlight %}

Now check the Node and NPM version you installed.

{% highlight shell %}
node -v
{% endhighlight %}

If you followed the steps above carefully you should have node.js installed on your Mac.

## Download and install Ghost

To download Ghost go to the [developers page](https://ghost.org/developers/){:target="_blank"} and press the button to download the latest zip file.

Unzip and rename the folder to 'ghost'. For this tutorial i put Ghost in my documents folder at this location `/Sites/ghost/`. You may prefer to change the location and folder name to suit your own preferences.

To install Ghost you’ll need to open a terminal window. Change the directory to the location of your Ghost website with the following command.

{% highlight shell %}
cd ~/Sites/ghost/
{% endhighlight %}

Now install Ghost

{% highlight shell %}
npm install --production
{% endhighlight %}

When npm is finished installing, type npm start to start Ghost in development mode

{% highlight shell %}
npm start
{% endhighlight %}

Open your web browser and navigate to `127.0.0.1:2368` to see your new Ghost blog.

Change the url to `127.0.0.1:2368/ghost` and create your admin user to login to the Ghost admin.

## Create a Ghost static website with Buster static site generator

We will need to install the following packages. Copy and paste the commands in to your mac terminal one by one and hit the return key.

Wget is a free software package for retrieving files using HTTP, HTTPS and FTP.

{% highlight shell %}
brew install wget
{% endhighlight %}

Git is a widely used version control system for software development.

{% highlight shell %}
brew install git
{% endhighlight %}

Buster Static Site Generator will be used to create our static website from Ghost. Buster is written in Python so we need to install the Python programming language.

{% highlight shell %}
brew install python
{% endhighlight %}

You may be prompted in your terminal to update Xcode Command Line Tools with the follow command

{% highlight shell %}
xcode-select --install
{% endhighlight %}

After installing Python successfully, we can now install Buster static site generator for Ghost using this command

{% highlight shell %}
pip install git+https://github.com/desiredpersona/buster.git
{% endhighlight %}

You will need to generate a new [SSH key for GitHub](https://help.github.com/articles/generating-ssh-keys/){:target="_blank"} if none exist. You can check for existing SSH keys on your computer using the following command in Terminal.

{% highlight shell %}
ls -al ~/.ssh
{% endhighlight %}

If you already have an SSH key ensure ssh-agent is enabled

{% highlight shell %}
eval "$(ssh-agent -s)"
{% endhighlight %}

Add your existing private SSH key to the ssh-agent

{% highlight shell %}
ssh-add ~/.ssh/id_rsa
{% endhighlight %}

Copy your public SSH key to your clipboard

{% highlight shell %}
pbcopy < ~/.ssh/id_rsa.pub
{% endhighlight %}

Add your public SSH key to your GitHub account under 'Settings/SSH Keys'.

Next create a Git repository by clicking the ‘+’ icon and select ‘New repository’ in the top right navigation menu. Give your repository a name and then click ‘create repository’ button.

Test your GitHub connection to see if your SSH Key is working correctly

{% highlight shell %}
ssh -T git@github.com
{% endhighlight %}

If the username in the message is yours, you've successfully set up your SSH key!

Now its time to generate your static website.

{% highlight shell %}
cd ~/Sites/ghost/
{% endhighlight %}

You can view all buster commands so you know whats available

{% highlight shell %}
buster -h
{% endhighlight %}

First we need to setup buster, run this command in the Terminal

{% highlight shell %}
buster setup
{% endhighlight %}

Buster will now ask you to ‘Enter the GitHub repository URL’. Your SSH repo url should look similar to this ‘git@github.com:username/repository.git’. You will see this displayed on your GitHub repo page.

With the following command, Buster will generate a static version of your Ghost website in a directory called 'static' inside your local Ghost directory.

{% highlight shell %}
buster generate
{% endhighlight %}

You can preview the static website by running the Buster preview.

{% highlight shell %}
buster preview
{% endhighlight %}

Now visit [http://localhost:9000](http://localhost:9000){:target="_blank"} in a web browser to view your static website locally.

If you are happy with how your website looks, type `ctrl+x` then `ctrl+c` to exit the Buster preview server.

You will now need to change the domain from localhost to your websites domain. Replace 'example.com' with your domain name.

{% highlight shell %}
buster generate --new-domain=example.com
{% endhighlight %}

Deploy repository to GitHub.

{% highlight shell %}
buster deploy
{% endhighlight %}

Your static website files have now been deployed to your GitHub repository!

## How to update your static Ghost website

Open Terminal window.

Change location to your Ghost websites root directory

{% highlight shell %}
cd ~/Sites/ghost/
{% endhighlight %}

Startup your Node server.

{% highlight shell %}
npm start
{% endhighlight %}

Login to your Ghost website in a web browser at [http://localhost:2368/ghost/](http://localhost:2368/ghost/){:target="_blank"} and add a new blog post.

Open a second Terminal window and change the location to your Ghost websites root directory

{% highlight shell %}
cd ~/Sites/ghost/
{% endhighlight %}

Update the changes to your static website. Replace 'example.com' with your domain name.

{% highlight shell %}
buster generate --new-domain=example.com
{% endhighlight %}

View the updated version of static website by running Buster preview

{% highlight shell %}
buster preview
{% endhighlight %}

Now visit [http://localhost:9000](http://localhost:9000){:target="_blank"} in a web browser to view your static website locally. When you are finished viewing your site use `ctrl+c` to exit Buster preview in Terminal.

Deploy your website updates to GitHub using command

{% highlight shell %}
buster deploy
{% endhighlight %}

Your GitHub repository is now updated with your latest website changes!

## Host your static website on Amazon S3

Go to [Amazon Web Services](https://aws.amazon.com){:target="_blank"} and sign in. Select 'S3' under 'Storage & Content Delivery'. Next create a bucket called after your domain name. For example if you want 'www' in your websites URL name the bucket in the following format 'www.example.com', if not call it 'example.com'.
I choose to leave out the 'www' from my website URL so adjust the tutorial accordingly. I also choose US Standard region.

You now need to setup your bucket for static website hosting. Click 'Properties', 'Permissions' then 'Add bucket policy'. Copy and paste the following lines of code and make sure to replace 'example.com' with your domain name in the Resource key section below.

{% highlight json %}
{
  "Version":"2012-10-17",
  "Statement":[{
  "Sid":"PublicReadForGetBucketObjects",
        "Effect":"Allow",
    "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::example.com/*"
      ]
    }
  ]
}
{% endhighlight %}

Click on 'Properties', 'Static Website Hosting' and set 'Index Document' as index.html and set 'Error Document' as error.html. Note: You will need to create the ghost 404 page by creating an 'error.hbs' file and adding it to your ghost root directory.

It is important to redirect all website visitors who type 'www' before your domain name to the correct URL of your website. Create a new bucket and name it 'www.example.com'. Click on 'Properties' and choose 'redirect all requests to another host name'. Type in your host name 'example.com'.

To upload your static website to Amazon s3 we will use [S3 Static Site Uploader](https://github.com/jamestalmage/s3-static-site-uploader){:target="_blank"}. Uploads are fast and the best part is that only the files you have changed are uploaded.

First we need to install 'S3 Static Site Uploader' in Terminal.

{% highlight shell %}
sudo npm install -g s3-upload
{% endhighlight %}

Log into your AWS Console and go to the [Users management console](https://console.aws.amazon.com/iam/home?#users){:target="_blank"}. Click the 'Create New Users' button and enter a username called after your domain name. AWS will create a new key pair for the user.


Create a 'aws-credentials.json' file in your local Ghost static directory using the following commands in Terminal. You can also do this manually if you prefer using a [text editor](https://atom.io){:target="_blank"}.

Change to static directory

{% highlight shell %}
cd ~/Sites/ghost/static/
{% endhighlight %}

Create 'aws-credentials.json' file.

{% highlight shell %}
touch aws-credentials.json
{% endhighlight %}

Open and edit the file

{% highlight shell %}
nano aws-credentials.json
{% endhighlight %}

 Add your keys and the [correct region](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region){:target="_blank"} that matches your bucket location. If you choose 'US Standard region' like i did earlier then your region is 'us-east-1'.

Your 'aws-credentials.json' file should look like this when your finished.

{% highlight json %}
{
    "accessKeyId": "PUBLIC_KEY",
    "secretAccessKey": "SECRET_KEY",
    "region": "us-east-1"
}
{% endhighlight %}

To save file changes in Terminal use 'Ctrl-X' to exit. Type 'Y' to save changes and then press the 'Return' key.

Create a '.gitignore' file and add 'aws-credentials.json' and if you are using a mac add '.DS_Store' also. Git uses a '.gitignore' file to determine which files and directories to ignore, before you make a commit.

Change to static directory

{% highlight shell %}
cd ~/Sites/ghost/static/
{% endhighlight %}

Create '.gitignore' file.

{% highlight shell %}
touch .gitignore
{% endhighlight %}

Open and edit the file

{% highlight shell %}
nano .gitignore
{% endhighlight %}

Your '.gitignore' file should look like this when your finished

```
.gitignore
.DS_Store
```

To save file changes in Terminal use 'Ctrl-X' to exit. Type 'Y' to save changes, then press the 'Return' key.

Please note that both '.gitignore' and '.DS_Store' and any files beginning with a dot are hidden files. Here is how to use Mac Terminal to show hidden files if you would like to create and edit the files using a text editor.

Open Terminal window and copy and paste both lines listed below into Terminal one at a time, and press the Return key after each line

{% highlight shell %}
defaults write com.apple.finder AppleShowAllFiles YES
{% endhighlight %}

{% highlight shell %}
killall Finder
{% endhighlight %}

This is how to hide hidden files again in Mac using Terminal. You use the same command but write NO at the end. Cut and paste these two commands one at a time into Terminal

{% highlight shell %}
defaults write com.apple.finder AppleShowAllFiles NO
{% endhighlight %}

{% highlight shell %}
killall Finder
{% endhighlight %}

From the [AWS IAM Users Console](https://console.aws.amazon.com/iam/home?#users){:target="_blank"} select the newly created user (your website domain name) you created earlier in this tutorial. Next click the 'Permissions' Tab, then click the 'Attach User Policy' button. Type 's3' and select 'AmazonS3FullAccess' policy.

Create a file called 'aws-upload.conf.js' in your Ghost static directory of your project. The 'aws-upload.conf.js' file should mirror all the files currently available in your own `ghost/static` directory under the 'patterns' array. You will need to check and update this file every time you use Buster to generate the latest version of your static website. Also don't forget to change example.com under 'bucketName' to your own domain name.

Change to static directory

{% highlight shell %}
cd ~/Sites/ghost/static/
{% endhighlight %}

Create 'aws-upload.conf.js' file.

{% highlight shell %}
touch aws-upload.conf.js
{% endhighlight %}

Open and edit the file

{% highlight shell %}
nano aws-upload.conf.js
{% endhighlight %}

As a guide here is what my 'aws-upload.conf.js' file currently includes.

{% highlight javascript %}
module.exports = {
    credentials:"aws-credentials.json",
    bucketName:"example.com",
    patterns:[
        "assets/css/screen.css",
        "assets/fonts/casper-icons.eot",
        "assets/fonts/casper-icons.svg",
        "assets/fonts/casper-icons.ttf",
        "assets/fonts/casper-icons.woff",
        "assets/js/index.js",
        "assets/js/jquery.fitvids.js",
        "author/colin/index.html",
        "favicon.ico",
        "how-to-create-a-static-website-with-ghost/index.html",
        "index.html",
        "robots.txt",
        "rss/index.html",
        "sitemap-authors.xml",
        "sitemap-pages.xml",
        "sitemap-posts.xml",
        "sitemap-tags.xml",
        "sitemap.xml",
        "sitemap.xsl",
        "tag/amazon-s3/index.html",
        "tag/ghost-tag/index.html",
        "tag/static-website/index.html"
    ]
} 
{% endhighlight %}

Now its finally time to upload your static website files to your Amazon s3 bucket.

Change to your static directory in Terminal

{% highlight shell %}
cd ~/Sites/ghost/static/
{% endhighlight %}

Upload your static website files using this command

{% highlight shell %}
s3-upload
{% endhighlight %}

You website is now live but you need to point your domain name to your website using Cloudflare DNS. Cloudflare is a free alternative to Amazon Route 53.

## How to setup Cloudflare DNS

In Amazon S3 click on both bucket names then select 'Properties' then 'Static Website Hosting' and copy both endpoint urls which should look similar to these

```
example.com.com.s3-website-us-east-1.amazonaws.com

www.example.com.com.s3-website-us-east-1.amazonaws.com
```

Login to [Cloudflare](https://www.cloudflare.com){:target="_blank"} and click 'Add site' then enter your domain name and select 'Begin Scan'. Cloudflare will try to copy your current DNS setting.

You will need to create two CNAME records as follows to point Cloudflare to your S3 website.

```
TYPE     NAME               VALUE
CNAME    example.com        example.com.s3-website-us-east-1.amazonaws.com

CNAME    www.example.com    www.example.com.s3-website-us-east-1.amazonaws.com
```

You will need to change your domain nameservers over at your domain registrar. CloudFlare will email these to you but you can also find your CloudFlare nameservers by going to the DNS settings page on your CloudFlare dashboard.

Your domain name should now point to your new static website successfully.
