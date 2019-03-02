# jQuery.Passwordify.js

This jQuery plugin allows you to turn any input field into a smartphone-style password field. The field will show the character just typed
and then replace it with an asterisk "*" a moment later. The real value of the entered password is stored in an HTML data attribute for
the target element.

This plugin also accepts a callback for when the enter key is pressed. The callback returns the original jQuery object.

See a working fiddle at: https://jsfiddle.net/cloudulus/13qc5d8m/8/

### NOTE:
This plugin requires jquery.mask, a very useful and lightweight input field masking utility. Details here:
https://igorescobar.github.io/jQuery-Mask-Plugin/

## Usage:

### HTML
```html
<input type="tel" id="password1" value="" data-val="" placeholder="Enter your password..." />

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
```

### JS
```javascript
$("#password1").passwordify({
    maxLength: 8,
    alNumOnly: true
    enterKeyCallback: handleEnter
});

function handleEnter(pw1)
{
    alert("You entered: " + pw1.data('val'));
}
```

That's it!