// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'ios',
    modalTitle: 'Framework7',
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/breakfast/',
    	url: 'breakfast.html',
    	name: 'breakfast',
  		},
		{
		path: '/drinks/',
    	url: 'drinks.html',
    	name: 'drinks',
  		},
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/producto/',
    	url: 'info-producto.html',
    	name: 'producto',
  		},
		{
		path: '/women/',
    	url: 'breakfast.html',
    	name: 'women',
  		},
		
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

