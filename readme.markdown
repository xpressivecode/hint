jQuery hint plugin
==================

Allows you to generate hints for your textboxes without modifying the value of your textboxes.
This helps to avoid the situation of validating your form submissions against the hint values,
when a user blindly submits a form. The textboxes value will be empty as this solution uses a
span overlay instead of modifying the value of your textboxes.

http://xpressivecode.com/open-source/jquery-hint-plugin.aspx

Usage:
------

Assumes you have at least one input on your page that has it's title attribute in use.

```
<input type="text" name="search" title="Search..." />
```

Now you just call the hint method and the plugin will scan your page for qualified textboxes and apply the hint overlay.

```javascript
$(document).ready(function(){
	$.hint();
});
```

You can pass in optional settings to the plugin which will modify it's behavior in different ways.

Settings:
---------

	className: 
        default value: 'hint'
        use: applied to the span so that you can target it for styling
             so that you can give it an italic look if you want etc

    color:
        default value: '#B3AAAD'
        use: gives a little bit of an offset colour to look like a hint

    element:
        default value: 'span'
        use: allows you to change the element type that is used to overlay your textbox

    cloneStyles: 
        default value: true
        use: automatically clones css attributes from the textbox and applies them to your 
             hint overlay. this helps to rectiy positioning issues with padding and margins

    styles:
        default value: ['font-size', 'font-family', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left']
        use: these are the css attributes that will be cloned from the textbox to your overlay element if the cloneStyles option is set to true

    skipStyles:
        defalut value: [],
        use: if you want to keep the majority of the styles to clone them, but want to omit just a few, then use this setting to skip them
        example: if you want to omit the padding but retain the rest of your textboxes css attributes then you could pass in
        $.hint({ skipStyles: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'] });

