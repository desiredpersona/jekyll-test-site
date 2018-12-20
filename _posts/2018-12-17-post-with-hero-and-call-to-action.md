---
layout: post
title: Post title with hero image and CTA
subtitle: Adding subtitles couldn't be easier
date: 2018-12-17 17:20:50 +0100
author: desired persona

header:
    layout: hero
    image: "/assets/images/evening.jpg"
    caption: "[Unsplash](https://unsplash.com)"
    class: bg-darken-25 bg-darken-0-ns
    cta:
        text: "Call-to-action"
        url: https://www.desiredpersona.com/themes/
        class: btn btn--secondary grow

categories:
    - post formatting
tags:
    - header
---

To add a hero image with a call-to-action button to any blog post header, simply add the following in that posts YAML front-matter.

```yaml
header:
    layout: hero # Choose hero or header.
    image: "/assets/images/evening.jpg" # Set a background image.
    vh: vh-50 vh-75-m vh-100-l # Set a custom vertical height for mobile/tablet/desktop.
    caption: "[Unsplash](https://unsplash.com)" # Create a header image caption. Support for markdown links.
    class: bg-darken-25 bg-darken-0-ns # Overwrite the themes default header classes on any page. Easily set background overlays for mobile, tablet and desktop.
    cta: 
        text: "Call-to-action" # Create a call-to-action.
        url: https://www.desiredpersona.com/themes/ # Call-to-action link. URL's starting with 'http' will open in a new tab automatically.
        class: btn btn--secondary # Use any theme button class.
```

I highly recommend you take a look at all the features of this theme.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet cursus nisl eu luctus. Mauris vitae diam non risus consequat posuere id sit amet est. Donec eget urna ac magna sagittis interdum. Suspendisse vel dapibus tellus. Curabitur et placerat elit, maximus bibendum leo. Sed ornare, justo nec fringilla luctus, nunc lorem congue nisi, in venenatis turpis neque non purus. Quisque sodales ultrices neque. Fusce bibendum nulla purus, vel laoreet nisi facilisis et. Nulla pulvinar libero sit amet lorem lobortis luctus. Suspendisse aliquet vehicula mauris eu elementum. Aenean eget urna at tellus mollis finibus. Aenean sit amet imperdiet sem, vel bibendum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras eros orci, lobortis id aliquet dictum, venenatis id justo. Nullam vitae sagittis nulla.

Donec fringilla commodo tellus quis dictum. Ut aliquet, urna eget ultricies semper, lacus sapien malesuada felis, nec euismod metus mi nec neque. Sed ullamcorper ipsum elit, et sagittis urna ullamcorper sit amet. Maecenas porta ante non lectus fermentum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac molestie leo, facilisis elementum massa. Proin massa nibh, rhoncus vehicula magna sed, feugiat sodales sem. Ut sit amet nunc ac nisl efficitur congue nec at magna.

Etiam purus dolor, elementum non tempus at, vulputate vitae dolor. Praesent ut gravida turpis. Proin auctor odio id maximus ornare. Quisque nec tempus massa, lacinia aliquet massa. In feugiat metus ac erat pharetra eleifend. In lobortis egestas consequat. Mauris cursus dolor risus, in condimentum sem euismod id. Maecenas scelerisque euismod risus quis accumsan. Donec velit leo, gravida ut diam et, accumsan sagittis tortor. Fusce rhoncus quam non urna dapibus, nec scelerisque dolor finibus. Etiam fermentum arcu libero, non scelerisque risus bibendum eu. Sed in mi id libero mattis sagittis. Sed vitae massa et turpis sodales molestie. Vivamus pellentesque efficitur urna, sagittis suscipit augue euismod vitae.
