import $ from "jquery";
import Plyr from "plyr";
import Swiper from "swiper/bundle";

function swiperJS() {
  const swiper = new Swiper(".mySwiperImage", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
  });
}

function initPlyr() {
  const player = new Plyr("#player");

  const selectorId = $("#mediaVideoSelector");
  selectorId.on("change", function () {
    const selectorValue = $("#mediaVideoSelector").val();
    const newVideo = "video_" + selectorValue + ".mp4";
    player.source = {
      type: "video",
      sources: [
        {
          src: "uploads/" + newVideo,
        },
      ],
    };
  });
}

swiperJS();
initPlyr();
