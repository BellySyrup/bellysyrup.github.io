---
layout: default
title: reconstructing mnmlist
---

### Step 1: Steal Underpants

### Step 2: ???

		permalink: /:categories/:title  
		+ [Gmail](mailto:sconzen@gmail.com)  
		---
		layout: default
		title: what it is
		---  
		### More about me:
		{% for post in site.posts limit: 5%}[{{post.title}}]({{post.url}})  
		{% endfor %}

### Step 3: Profit