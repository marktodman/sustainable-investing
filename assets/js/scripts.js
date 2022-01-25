    // TOP BUTTON SCRIPT CODE FROM W3 SCHOOLS WEBSITE WITH HELP FROM THE COMMUNITY AT STACKOVERFLOW TO HIDE THE BUTTON ON SCREENS OVER 850PX //
    var mybutton = document.getElementById("top-button");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        console.log(window.innerWidth);
        if (window.innerWidth <= 850) {
            scrollFunction();
        }
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }