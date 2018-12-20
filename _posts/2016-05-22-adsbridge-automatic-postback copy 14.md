---
layout: post
title: How to set up postback tracking in AdsBridge
date: 2016-05-22 21:00:00
description: Learn how to set up postback in AdsBridge tracking platform to pass conversion data to your affiliate network.
author: desired persona
category: affiliate marketing
tags:
    - Adsbridge
    - postback URL
---

To setup your AdsBridge postback URL login to the [AdsBridge tracking platform](http://www.adsbridge.com/){: rel="nofollow"} and select ‘Affiliate Networks/Create affiliate network’.

Choose your ‘Affiliate Networks Template’ which is provided by AdsBridge or manually enter your own network configuration.

Click the ‘Offers’ menu then select ‘Create offer’.

Make sure ‘Select assigned accounts offer’ is ticked.
Under ‘Assigned Account Info’ select your Affiliate network, Account, Offer and Creative.

{% include figure image_path="/assets/images/adsbridge-create-offer.png" alt="Creating an offer with AdsBridge" caption="Creating an offer with AdsBridge" %}

Next under the ‘Basic’ menu select your ‘Vertical’ and ‘Group’ to keep everything organised. AdsBridge automatically adds the name of your offer but it falls short of adding the affilate networks Offer ID to the ‘Name’ menu. I highly recommend adding your Offer ID to the title so its clear what offer you are running later.

**Tip:** You can quickly get your Offer ID from the above ‘Offer’ menu without leaving the page.
Also under the ‘URL’ menu you can optionally click to add the `<campaign_id>` to your s1 tracking token.

Now select your Offer type. This will be either Cost-Per-Action or Cost-Per-Sale.

{% include figure image_path="/assets/images/adsbridge-create-offer-basic-menu.png" alt="AdsBridge offer setup basic menu" caption="AdsBridge offer setup basic menu" %}

Under ‘Advance’ menu AdsBridge will automatically tick ‘Campaign tokens’ and add your Tracking token and your Payout.

If your Offer is capped its a good idea to come back later and enter a value in ‘Daily cap’ menu and setup a redirect to a similar offer.

{% include figure image_path="/assets/images/adsbridge-create-offer-advance-menu.png" alt="AdsBridge offer setup advanced menu" caption="AdsBridge offer setup advanced menu" %}

Under ‘Postback Settings’ menu you will notice that AdsBridge will show you your current postback url from your affilate network if any under ‘Current Postback URL’. If none is set AdsBridge can automatically setup your postback url with your affiliate network by clicking the ‘Set Postback Url’ button under ’Postback URL to set’. This is a great time saver.

Finally click the ‘Save’ button.

{% include figure image_path="/assets/images/adsbridge-create-offer-postback-settings.png" alt="AdsBridge postback settings menu" caption="AdsBridge postback settings menu" %}

If you made it this far, you have now successfully setup an offer with AdsBridge. The next step is to create a campaign.

Did you find this tutorial helpful?
