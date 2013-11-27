---
layout: default
title: mnmlist redefined
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna arcu, ultricies a lacinia sit amet, porttitor eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel lectus eleifend urna aliquam hendrerit a sed nibh. Cras eget consequat tortor, quis semper odio. Duis sagittis volutpat lorem sed rutrum. Nulla semper leo ut libero consequat, ut sagittis libero placerat. Curabitur auctor nulla sit amet mauris bibendum congue. Integer mollis tincidunt felis, sed convallis felis ultrices nec.

{% for post in site.posts limit: 5%}[{{post.title}}]({{post.url}})  
{% endfor %}