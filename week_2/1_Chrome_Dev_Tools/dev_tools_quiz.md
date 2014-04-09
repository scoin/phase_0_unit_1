#### Include an inline screenshot of your codeschool's points from the profile page:

http://imgur.com/C0LdSbu

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 
  

The elements and sources tabs allow realtime editing of HTML and CSS.
The console is for javascript debugging.
The network tab aids in performance optimization.
  

* What's the quick key for your OS to spawn the Dev Tools inspector?

On Linux it is Ctrl - Shift - I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  

The background color for postmachina.com is #0b0f11.
http://imgur.com/vxqxGfs


* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

Because that <p> text is not displayed. There is a background-image in css set for p in the #main div. You are seeing an image titled home_bg.gif

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  * 
  The largest image is held in their "featurette", which is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

This information is obtained by going to the "network" tab and sorting by size. 

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
* 
By losslessly compressing images, this site could save 885.9KiB in load data.
