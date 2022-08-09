const pageSections = new fullpage('#fullpage', {
    // Basic options
    autoScrolling: true, // Scroll activation
             fitToSection: false, // Fit scroll automatically.
             fitToSectionDelay: 300, // Delay before fit the slide
             easing: 'easeInOutCubic', // Time function animation
             scrollingSpeed: 700, // Scroll speed ms
             css3: true, // Between css or javascript
             easingcss3: 'ease-out', // Spreed curve
             loopBottom: false, // Return first section automatically
        
    //Navigation bar
        navigation: true, // Show navigation bar
        menu: '#menu', // Nav menu
        anchors: ['inicio', 'productos', 'contacto'], // Anchors to identify each section
        navigationTooltips: ['', '', ''], // Tooltips for each buttom
        showActiveTooltip: false, // Show active tooltip
    
        sectionsColor : ['#000', '#c2c2c2', '#50130e'], // Bg color for sections
        verticalCentered: true, // Align vertically each section
    
    //  Slides
        controlArrows: true, // Slide arrows
        slidesNavigation: false, // Indicators slide
    
    //  Animations (Callbacks FullPage.js)
    
    afterLoad: function(origin, destination){
        if(destination.anchor == 'contacto'){
             document.querySelector('.footer').querySelector('h2').style.opacity = 1;
        }
    }
    });