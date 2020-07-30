'use strict';

$(function() {
    $('#change').on('submit', function(evnt) {
        evnt.preventDefault();
        $('#results').html('');
        let elements = this.elements;
        let index = 0;
        while (elements.item(index) !== null) {
            let el = elements.item(index);
            el = $(el);
            let name = el.attr('name');
            let val = el.val();
            $('#results').append('<p><strong>' + name + '</strong>: ' + val + '</p>');
            index++;
        }
    });
});
let color = 'blue';
let color2 = 'red';
let color3 = 'orange';

$(document).ready(function() {
    $('option').click(function() {
        $('p').css('color', color);
    });
});
$(document).ready(function() {
    $('#red').click(function() {
        $('p').css('color', color2);
    });
});
$(document).ready(function() {
    $('#orange').click(function() {
        $('p').css('color', color3);
    });
});

let bgcolor = 'yellow';
let bgcolor2 = 'green';
let bgcolor3 = 'purple';

$(document).ready(function() {
    $('#bgcolor').click(function(){
        $('body').css('background-color', bgcolor);
    });
});

$(document).ready(function() {
    $('#bgcolor2').click(function(){
        $('body').css('background-color', bgcolor2);
    });
});

$(document).ready(function() {
    $('#bgcolor3').click(function(){
        $('body').css('background-color', bgcolor3);
    });
});

$(document).ready(function() {
    $('#text-size').click(function(){
        $('p').css('font-size', );
    });
});