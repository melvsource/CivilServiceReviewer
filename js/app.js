/*
=========================================
Civil Service Reviewer
Version 0.1
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Animate Progress Bar
    // -----------------------------

    const progress = document.querySelector(".progress-fill");

    if(progress){

        setTimeout(function(){

            progress.style.transition = "width 1.5s ease";

            progress.style.width = "65%";

        },500);

    }

    // -----------------------------
    // Smooth Button Effect
    // -----------------------------

    const buttons = document.querySelectorAll("button, .primary-btn, .secondary-btn");

    buttons.forEach(function(button){

        button.addEventListener("click",function(e){

            e.preventDefault();

            alert("Coming in Version 0.2");

        });

    });

    // -----------------------------
    // Card Hover Lift
    // -----------------------------

    const cards = document.querySelectorAll(".card, .subject-card");

    cards.forEach(function(card){

        card.addEventListener("mouseenter",function(){

            card.style.transition=".3s";

            card.style.transform="translateY(-10px)";

        });

        card.addEventListener("mouseleave",function(){

            card.style.transform="translateY(0px)";

        });

    });

});
