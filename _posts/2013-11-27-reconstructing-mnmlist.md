---
layout: default
title: reconstructing mnmlist
---

### Step 1: Steal Underpants

I will document my current project, building this website in this post.  
I'll note some of the roadblocks I've faced, my solutions, and tips for anyone wanting to use this jekyll template.  
Also this is my first time using markdown, so I will post examples of the syntax used in this site.  

### Clean URLs:

		permalink: /:categories/:title  

changing the permalink setting in the _config.yml displays the url in a cleaner, more readable fashion. (removes .html at the end)

### Links:

		[google](www.google.com)  
		
the first value will be the text displayed, and the second value is the url it will navigate to.

### Tamplates & Page Titles:

		---
		layout: default
		title: what it is
		---

description here  

### Headers:  

		### More about me:  