---
layout: default
title: reconstructing mnmlist
---

### Step 1: Steal Underpants

### Step 2: ???

#### Permalinks:

		permalink: /:categories/:title  

changing the permalink setting in the _config.yml displays the url in a cleaner, more readable fashion. (removes .html at the end)

		+ [Gmail](mailto:sconzen@gmail.com)  
		---
		layout: default
		title: what it is
		---  
		### More about me:
		{% for post in site.posts limit: 5%}[{{post.title}}]({{post.url}})  
		{% endfor %}

### Step 3: Profit