# Paralign - Jekyll Theme
	
Goal:
	To create a clean and responsive site without the need for a) a database, and b) a paid hosting service.

	Uses Github Pages, Jekyll and markdown to build a dynamic site. Seperate "post" files for blog posts and website portfolio.

Folder Structure:
	.
	├── _config.yml
	├── _drafts
	|   └── newpost.md
	├── _includes
	|	├── disqus.html
	|	├── meta.html
	|   ├── footer.html
	|   └── header.html
	├── _layouts
	|   ├── blog.html
	|   ├── default.html
	|   └── post.html
	├── _posts
	|   └── 2014-03-15-sample-post.md
	├── _data
	|   └── members.yml
	├── _site
	├── img
	├── lib
	|   ├── js
	|   ├── fonts
	|   └── css
	├── about.md
	├── blog.md
	└── index.md

Features:
	- Dynamic content
	- Responsive
	- Disqus commenting
	- Paralax Banner
	- Animated images - animate.css
	- vector social icons - font-awesome
	- Blog
	- Site list with alternating orientation
	- Markdown support

Todos:
	- /blog could use some design work
	- add embedded video support (not responsive) + breaking markdown files
	- find a way to merge blog posts with website posts to simplify posts structure.

Browser support
	Tested on Chrome, Firefox, IE10+. More to come.
