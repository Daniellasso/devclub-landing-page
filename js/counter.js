/* =====================================================
   DEVCLUB - COUNTER ANIMATION
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const counters = document.querySelectorAll(".counter");


    if (!counters.length) return;



    function animateCounter(counter) {


        const target = Number(
            counter.dataset.target
        );


        const prefix =
            counter.dataset.prefix || "";


        const suffix =
            counter.dataset.suffix || "";



        let current = 0;


        const duration = 2000;


        const increment =
            target / (duration / 16);




        function updateCounter() {


            current += increment;



            if (current < target) {


                let value;



                // Número decimal
                if (target % 1 !== 0) {


                    value =
                        current.toFixed(1);


                } 
                
                // Número inteiro
                else {


                    value =
                        Math.floor(current)
                        .toLocaleString("pt-BR");


                }



                counter.innerText =
                    prefix +
                    value +
                    suffix;



                requestAnimationFrame(
                    updateCounter
                );


            } else {



                let finalValue;



                if (target % 1 !== 0) {


                    finalValue =
                        target.toFixed(1);


                } 
                
                else {


                    finalValue =
                        target.toLocaleString("pt-BR");


                }



                counter.innerText =
                    prefix +
                    finalValue +
                    suffix;



            }


        }



        updateCounter();



    }





    const observer =
        new IntersectionObserver(
            (entries) => {


                entries.forEach(entry => {


                    if (entry.isIntersecting) {



                        animateCounter(
                            entry.target
                        );



                        observer.unobserve(
                            entry.target
                        );


                    }


                });


            },
            {

                threshold: 0.5

            }

        );






    counters.forEach(counter => {


        observer.observe(counter);


    });



});