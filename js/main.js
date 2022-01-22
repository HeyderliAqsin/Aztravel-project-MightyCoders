$("#header .header-search .search-top").click(function(){

    var searchIcon=$(".search-icon");
    var xIcon=$(".x-icon");
    var drop=$(".search-dropdown");

    if(searchIcon.hasClass("active-icon")){
        searchIcon.removeClass("active-icon");
        xIcon.addClass("active-icon")
    }
    else{
        searchIcon.addClass("active-icon");
        xIcon.removeClass("active-icon")
    }

    if(drop.hasClass("active-dropdown")){
        drop.removeClass("active-dropdown")
    }
    else{
        drop.addClass("active-dropdown")

    }
})
  

// this is the part where we change the playback speed of the video
//----------------------------------------------------------//
var myVideo=document.querySelector("#video video")
myVideo.playbackRate=2.0
//----------------------------------------------------------//



//Tab menu
const tabTop=[...document.querySelectorAll(".Tab-top button")]
const tabdown=[...document.querySelectorAll(".Tab-down .content")]


for(let i=0;i<tabTop.length;i++){

    tabTop[i].onclick=function(){

        for(let j=0;j<tabdown.length;j++){
            tabdown[j].classList.remove("active")
            tabTop[j].classList.remove("active")

        }
        let indexBtn=tabTop.indexOf(this)
        setTimeout(() => {
            tabdown[indexBtn].classList.add("active")
        }, 100);
       tabTop[indexBtn].classList.add("active")


    }
    console.log(tabdown)

}


//Slick
$('.Loc-Slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });