/* =====================================================
   DEVCLUB - SCROLL EFFECTS
===================================================== */


document.addEventListener("DOMContentLoaded", () => {



    /* =====================================================
       ANIMAÇÃO DE SEÇÕES AO ENTRAR NA TELA
    ===================================================== */


    const sections = document.querySelectorAll(
        "section"
    );


    const sectionObserver = new IntersectionObserver(
        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "section-visible"
                    );


                }


            });


        },

        {

            threshold:0.15

        }

    );



    sections.forEach(section=>{


        sectionObserver.observe(section);


    });



    /* =====================================================
       ACTIVE MENU AO ROLAR
    ===================================================== */


    const menuLinks = document.querySelectorAll(
        ".menu a"
    );


    const sectionLinks = document.querySelectorAll(
        "section[id]"
    );



    window.addEventListener(
        "scroll",
        ()=>{


            let current = "";


            sectionLinks.forEach(section=>{


                const sectionTop =
                section.offsetTop - 150;


                const sectionHeight =
                section.clientHeight;



                if(
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ){

                    current =
                    section.getAttribute("id");

                }


            });



            menuLinks.forEach(link=>{


                link.classList.remove(
                    "active"
                );



                if(
                    link.getAttribute("href")
                    === "#" + current
                ){

                    link.classList.add(
                        "active"
                    );

                }


            });



        }

    );




    /* =====================================================
       PARALLAX HERO
    ===================================================== */


    const heroImage =
    document.querySelector(
        ".hero-image img"
    );



    window.addEventListener(
        "scroll",
        ()=>{


            if(heroImage){


                const scroll =
                window.scrollY;



                heroImage.style.transform =
                `
                translateY(${scroll * 0.15}px)
                `;


            }


        }

    );





    /* =====================================================
       STAGGER NOS CARDS
    ===================================================== */


    const cards = document.querySelectorAll(
        ".language-card, .feature, .item"
    );



    const cardObserver =
    new IntersectionObserver(

        (entries)=>{


            entries.forEach(
                (entry,index)=>{


                    if(entry.isIntersecting){


                        setTimeout(()=>{


                            entry.target.classList.add(
                                "show-card"
                            );


                        }, index * 120);



                    }


                }

            );


        },

        {

            threshold:.2

        }


    );



    cards.forEach(card=>{


        cardObserver.observe(card);


    });





    /* =====================================================
       IMAGENS COM FADE-IN
    ===================================================== */


    const images =
    document.querySelectorAll(
        "img"
    );



    images.forEach(img=>{


        img.style.opacity = "0";


        img.style.transition =
        "opacity .8s ease";



        if(img.complete){


            img.style.opacity="1";


        }else{


            img.addEventListener(
                "load",
                ()=>{

                    img.style.opacity="1";

                }

            );


        }


    });



});