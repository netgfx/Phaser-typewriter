[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# Phaser-typewriter
A typewriter effect wrapper for Phaser.io Javascript library

<h3>Initialize the typewriter anywhere in your game</h3>

```
var typewriter = new Typewriter();
typewriter.init(gameInstance, options);
```

pass necesery options like: context (the object that launches the typewriter)

```
typewriter.init(gameInstance, {
    x: 290,
    y: 40,
    fontFamily: "chillerBlack",
    fontSize: 26,
    maxWidth: 300,
    sound: reg.track,
    text: "Some text to be typed!"
  });
  typewriter.start();
```

<hr>

<img src="https://netgfx.com/trunk/randomPICS/Recording%209_zpsj4j8pxgo.gif"/>

<strong>View example: <a href="http://www.netgfx.com/trunk/games/tools/phaser-typewriter">Complete example <span>(make sure to listen to the writing sound playing in the background ;) )</span></a></strong>

  <hr>

<strong>Game Instance</strong>
The game instance that we want the tooltips to appear to, such as "game"

<strong>General Options:</strong>

<ul>
	<li><strong>text:</strong> The text to be written automatically</li>
  <li><strong>x</strong> The x position of the text (default: 100)</li>
	<li><strong>y</strong> The y position of the text (default: 100)</li>
	<li><strong>writerObj</strong> A Phaser.Text or Phaser.BitmapText object, pre-created</li>
	<li><strong>writerFn: </strong> The function to call when writing the text (default: null)</li>
  <li><strong>endFn: </strong> The function to call when the writing ends (defailt: null)</li>
  <li><strong>time: </strong> The duration of the animation effect writing each letter (default: 100ms)</li>
  <li><strong>maxWidth: </strong> The maximum width where the text will wrap (default: 200)</li>
	<li><strong>fontFamily: </strong> The font family for the text to be writen (default: Arial)</li>
  <li><strong>fontSize: </strong> The font size for the text (default: 28)</li>
  <li><strong>sound: </strong> The sound effect to play during the typewriter effect, it auto-stops when typing ends (default: null)</li>
</ul>

<strong>API Functions</strong>

<ul>
    <li><strong>init: </strong> Adds the options and game object to the Typewriter constructor</li>
    <li><strong>start: </strong> Enables and starts the typewriter effect</li>
    <li><strong>destroy: </strong> Destroys the typewriter object</li>
    <li><strong>hideText: </strong> Hide the text</li>
    <li><strong>showText: </strong> Show the text</li>
    <li><strong>moveToTop: </strong> Move the text to the top</li>
</ul>

<i>
</i>

<hr>

<strong>Buy me a coffee or tea!</strong> <br>
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JCFPKZJ7Y23JJ&lc=GR&item_name=NetGfx%2ecom&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_92x26.png"/></a>


<hr>

>The TODO list is diminising!

>Please let me know if you come across some bug or have something to contribute





