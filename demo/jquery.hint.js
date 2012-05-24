/*
*   jQuery hint plugin
*   
*   Copyright (c) 2012 Mike Fitzgerald
*   http://www.xpressivecode.com
*

    Allows you to generate hints for your textboxes without modifying the value of your textboxes.
    This helps to avoid the situation of validating your form submissions against the hint values,
    when a user blindly submits a form. The textboxes value will be empty as this solution uses a
    span overlay instead of modifying the value of your textboxes.

    Usage:

    *assumes you have at least 1 input field of type "text" with a title attribute filled out
    *example: <input type="text" title="Search..." name="search" />

    <script type="text/javascript">
        $(document).ready(function(){
           $.hint(); 
        });
    </script>

    You can pass in some options via anonymous object

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
*/

(function($){
    if($.hint)return;
    $.hint = function(options){
        
        var defaults = {
            className:   'hint',
            cloneStyles: true,
            styles:      ['font-size', 'font-family', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
            skipStyles:  [], 
            color:       '#B3AAAD',
            element:     'span'
        }
            
        var settings = $.extend({}, defaults, options);
        $(':input[title]').each(function(){
            var txt = $(this);
            
            var title = txt.attr('title');
            var lbl = $('<' + settings.element + '>');
            
            lbl.text(title);
            if(txt.val() != ''){
                lbl.hide();
            }
               
            lbl.css('color', settings.color);
            lbl.addClass(settings.className);
        
            lbl.css('position', 'absolute');
            lbl.css('top', txt.offset().top);
            lbl.css('left', txt.offset().left);
            
            if(settings.cloneStyles){
                $.each(settings.styles, function(index, style){
                    if($.inArray(style, settings.skipStyles) === -1){
                        lbl.css(style, txt.css(style)); 
                    }
                });
            }
        
            lbl.click(function(){
                lbl.hide();
                txt.focus();
            });
        
            txt.focus(function(){
               lbl.hide(); 
            });
            txt.blur(function(){
                if(txt.val() === title || txt.val() === ''){
                    lbl.show();
                }
            });
            $(document.body).append(lbl);
        });            
    };
})(jQuery);