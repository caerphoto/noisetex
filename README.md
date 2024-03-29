# NoiseTex

A tiny (729 bytes minified) function that generates a block of noise of your chosen size
and opacity, then uses it as the background image for an element you specify.
Also returns a DataURL string so you can use the generated image on other
elements.

## Usage

Add the `noisetex.min.js` file to your page then simply call the `addNoise`
function:

```
    <script src="noisetex.min.js"></script>

    <script>
      addNoise(document.body, 200, 0.05);
    </script>
  </body>
</html>
```

The first parameter is the element to which you want to apply the noise texture.
The second is the size of noise block to generate &ndash; larger blocks will
show less obvious repetition, but take up a bit more memory and make your HTML
element inspector more awkward to use due to the giant inline dataURL. The last
parameter is the opacity; the value in the example results in a nice subtle
texture that looks a bit like paper. Values over 0.2 will be very obvious.
Maximum value is 1.

## Globalness

The function is presented as a global variable, which is generally not ideal for
non-trivial web sites/applications. If you&rsquo;re using some means of avoiding
this, such as namespacing, it&rsquo;s very easy to adapt the function to whatever
system you&rsquo;re using.

## Demo

I created the background textures on [this version] of T. S. Eliot&rsquo;s The
Waste Land using the script.  The [mockup] for a UI overhaul I&rsquo;m planning
for my [Soda] application also uses it for the Preview display.

[this version]: http://caerphoto.com/misc/the_waste_land.html
[mockup]: http://caerphoto.com/misc/soda_mockup.html
[Soda]: http://soda.heroku.com/

## Browser Support

Since it uses canvas, the function won't work in IE < 9. Tested in Chrome,
Firefox 10, Safari 5, Opera 11, Mobile Safari and Opera Mini (latter two both on
an iPhone 4S).

On IE 6, 7 and 8, will just not do anything &ndash; no exceptions will be raised
or anything.
