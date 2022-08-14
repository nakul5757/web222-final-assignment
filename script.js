/*Name: Nakul Mankoo
Email: nmankoo@myseneca.ca
Student Id: 159486216
Date: 14 August, 2022

I declare that my assessment is wholly my own work in accordance with Seneca Academic
Policy. No part of this assessment has been copied manually or electronically from any other
source (including web sites) except for the information supplied by the WEB222 instructors and /
or made available in this assessment for my use. I also declare that no part of this assignment
has been distributed to other students.*/


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Web Developer", "Computer Geek!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Web Developer", "Computer Geek!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
        }
    });



    var ques = document.getElementById("question");
    var cmnt = document.getElementById("comment");
    var hiring = document.getElementById("payRate");
    var input = document.getElementById("msg_comment");
    
    hiring.onclick = function() {
        input.placeholder = "Message and Hourly Pay Rate Please..";
    }
    
    
    cmnt.onclick = function() {
        input.placeholder = "Message..";
    }
    
    ques.onclick = function() {
        input.placeholder = "Message..";
    }

});
