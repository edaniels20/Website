

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function() {
    document.getElementsByClassName('email').onclick = function() {
        var textArea = document.createElement("textarea");
        textArea.value = 'e.daniels20@live.com';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Copied To clipboard')
    }

    window.sr = ScrollReveal();
});
(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));
$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $('.head').replaceClass('head', 'navfixed')
    }
    else {
        $('.navfixed').replaceClass('navfixed', 'head');
    }
})
