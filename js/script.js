/* =====================================================
   DEVCLUB - SCRIPT PRINCIPAL
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton = document.querySelector(".menu-mobile");
    const navbar = document.querySelector(".navbar");
    const menuLinks = document.querySelectorAll(".menu a");


    if (menuButton && navbar) {

        menuButton.addEventListener("click", () => {

            menuButton.classList.toggle("active");

            navbar.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });


        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuButton.classList.remove("active");

                navbar.classList.remove("active");

                document.body.classList.remove("menu-open");

            });

        });

    }



    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {


        anchor.addEventListener("click", function(e){


            const target = document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }


        });


    });



    /* =====================================================
       HEADER FIXO COM EFEITO
    ===================================================== */

    const header = document.querySelector(".header");


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }


    });



    /* =====================================================
       BOTÃO VOLTAR AO TOPO
    ===================================================== */

    const backToTop = document.querySelector("#backToTop");


    if(backToTop){


        window.addEventListener("scroll",()=>{


            if(window.scrollY > 500){

                backToTop.classList.add("show");


            }else{

                backToTop.classList.remove("show");

            }


        });



        backToTop.addEventListener("click",()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        });


    }



    /* =====================================================
       MARQUEE DIREITA
    ===================================================== */


    const marquee = document.querySelector(".marquee-content");


    if(marquee){


        marquee.style.animationDirection = "reverse";


    }



    /* =====================================================
       REVEAL ANIMATION AO SCROLL
    ===================================================== */


    const revealElements = document.querySelectorAll(
        ".hero-text, .hero-image, .about-left, .about-right, .language-card, .item, .founder-text, .founder-image"
    );


    revealElements.forEach(element=>{

        element.classList.add("reveal");

    });



    const revealObserver = new IntersectionObserver(
        entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("active");


                    revealObserver.unobserve(
                        entry.target
                    );


                }


            });


        },

        {

            threshold:0.15

        }

    );



    revealElements.forEach(element=>{


        revealObserver.observe(element);


    });



    /* =====================================================
       EFEITO NOS BOTÕES
    ===================================================== */


    const buttons = document.querySelectorAll(".btn-primary");


    buttons.forEach(button=>{


        button.addEventListener("mouseenter",()=>{

            button.style.transform =
            "translateY(-5px)";

        });


        button.addEventListener("mouseleave",()=>{

            button.style.transform =
            "translateY(0)";

        });


    });



});