let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

function dropDown() {
    navbarLinks.classList.toggle('open')
    toggleButton.classList.toggle('open')
}

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    if (offset > 100)
    {
        document.getElementById('up').style.opacity = "100%";
    }
    else if (offset < 100)
    {
        document.getElementById('up').style.opacity = "0%";
    }
})

function scrollUp()
{
    window.scrollTo(0, 0);
}

function scrollDown()
{
    window.scrollTo(0, 4000);
}