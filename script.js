

        var slide_index = 1;

        var cardscontainer = document.getElementById("cards");
        var cardscontainerinside = document.getElementById("slides");

        var count_total_slides = slide_data.length;

        for (var i = 0; i < count_total_slides; i++) {

            console.log(slide_data[i].id);
            var card = document.createElement("div");
            card.classList.add("card_item");
            card.setAttribute("id", slide_data[i].id);

            var card_banners = document.createElement("div");
            card_banners.classList.add("card_banners");

            var card_section_top = document.createElement("div");
            card_section_top.classList.add("card_section_top");

            var card_section_bottom = document.createElement("div");
            card_section_bottom.classList.add("card_section_bottom");

            var card_title = document.createElement("p");
            card_title.classList.add("card_title");
            card_title.innerHTML = slide_data[i].title;

            var card_description = document.createElement("p");
            card_description.classList.add("card_description");
            card_description.innerHTML = slide_data[i].description;

            var card_image = document.createElement("img");
            card_image.classList.add("card_image");
            card_image.src = slide_data[i].image;
            card_image.setAttribute("alt", slide_data[i].title);

            card_section_top.appendChild(card_title);
            card_section_bottom.appendChild(card_description);
            card_banners.appendChild(card_image);
            card.appendChild(card_banners);
            card.appendChild(card_section_top);
            card.appendChild(card_section_bottom);

            cardscontainerinside.appendChild(card);
        }



        let currentSlide = 0;
        const cardItems = document.querySelectorAll('.card_item');

        function showNextSlide() {


            if (window.innerWidth < 1100) {
                if (currentSlide < cardItems.length - 1) {

                    cardItems[currentSlide].classList.remove('active');
                    currentSlide++;
                    cardItems[currentSlide].classList.add('active');

                }
            } else {
                if (currentSlide < cardItems.length - 3) {

                    cardItems[currentSlide].classList.remove('active');
                    currentSlide++;
                    cardItems[currentSlide + 2].classList.add('active');

                }
            }
        }

        function showPreviousSlide() {


            if (window.innerWidth < 1100) {
                if (currentSlide > 0) {

                    cardItems[currentSlide].classList.remove('active');
                    currentSlide--;
                    cardItems[currentSlide].classList.add('active');
                }
            } else {


                if (currentSlide > 0) {

                    cardItems[currentSlide + 2].classList.remove('active');
                    currentSlide--;
                    cardItems[currentSlide].classList.add('active');
                }
            }
        }

        function updateSlidesDisplay() {
            cardItems.forEach((item, index) => {
                if (index >= currentSlide && index < currentSlide + visibleCards) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        function showSlide(index) {
            currentSlide = index;
            updateSlidesDisplay();
        }


        window.addEventListener('load', () => {
            visibleCards = window.innerWidth < 1100 ? 1 : 3;
            showSlide(0); // Reset to the first slide



            if (window.innerWidth < 1100) {
                document.getElementById("background").style.display = "none";
                document.getElementById("background_mobile").style.display = "block";
                document.getElementById("cards").style.marginTop = "50px";
            } else {
                document.getElementById("background").style.display = "block";
                document.getElementById("background_mobile").style.display = "none";

            }

        });


        window.addEventListener('resize', () => {
            visibleCards = window.innerWidth < 1100 ? 1 : 3;
            showSlide(0); // Reset to the first slide



            if (window.innerWidth < 1100) {
                document.getElementById("background").style.display = "none";
                document.getElementById("background_mobile").style.display = "block";
                document.getElementById("cards").style.marginTop = "50px";
            } else {
                document.getElementById("background").style.display = "block";
                document.getElementById("background_mobile").style.display = "none";

            }

        });



        let visibleCards = window.innerWidth < 1100 ? 1 : 3;
        showSlide(0);





        
        var modal_items = document.getElementById("slides").getElementsByClassName("card_item");
        var modal = document.getElementById("modal");
        for (var i = 0; i < modal_items.length; i++) {
            modal_items[i].addEventListener("click", function () {

                if (modal.style.display != "block") {


                    modal.style.display = "block";
                    modal.style.position = "fixed";
                    modal.style.zIndex = "100";
                    modal.style.paddingTop = "100px";
                    modal.style.left = "0";
                    modal.style.top = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.overflow = "auto";
                    modal.style.textAlign = "center";
                    modal.style.color = "#ffffff";

                    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
                    modal.innerHTML = "<div style='width:300px;max-width:80vw;padding:10px;text-align:left;margin:auto;background-color:#fff;overflow:auto;padding-bottom:20px'>" + this.innerHTML + "</div>";
                    modal.addEventListener("click", function () {
                        modal.style.display = "none";
                    });
                }
            });

        }

