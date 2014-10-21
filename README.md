## Browser-Sync for VCCW Underscores Theme
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/maepon/bs4vccw_s?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Browser-Sync Setting for VCCW with compiling Underscores Theme's sass.

[VCCW](http://vccw.cc/) is Vagrant configuration designed for development of WordPress plugins, themes, or websites.

based on [gaspanik/bs4vccw](https://github.com/gaspanik/bs4vccw)

## Usage

### Clone to your VCCW directory. 

	git clone https://github.com/maepon/bs4vccw_s.git
		
### Edit your vhost name and theme path in 'gulpfile.js'.

> var paths = {  
>   "vhost": "wordpress.local",  
>   "themes": "../www/wordpress/wp-content/themes/_s/\*\*",  
>  "sassDir": "../www/wordpress/wp-content/themes/_s/\*\*/*.scss",  
>  "sass": "../www/wordpress/wp-content/themes/_s/sass/style.scss",  
>  "style": "../www/wordpress/wp-content/themes/_s/"  
> }


### Install some dependencies.

	npm install

### Run gulp.

	npm start

### Open browser

Connect to 'http://localhost:3000'

---
MIT
