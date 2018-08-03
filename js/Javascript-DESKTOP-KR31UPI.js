

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function() {
    document.getElementById('Email').onclick = function() {
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
    sr.reveal(document.getElementById('Github'));
    sr.reveal(document.getElementById('Home-icon'));
    sr.reveal(document.getElementById('Email-logo'));
    sr.reveal(document.getElementById('resume-logo'));
    sr.reveal(document.getElementById('linkedin-logo'));
    sr.reveal(document.getElementById('contact'));
    sr.reveal(document.getElementById('Fade-in-overlay'));
    sr.reveal(document.getElementById('random-paragraph'));
    sr.reveal(document.getElementById('head'));
});
function navShow() {
    document.getElementById('nav').style.display = 'block';
}
function navHide() {
    document.getElementById('nav').style.display = 'none';
}