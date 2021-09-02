import $ from 'jquery';

// var $ = require('jquery');
function stopSliding() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var windowIsThin = window.matchMedia("(max-width:992px)").matches;

    if (isMobile || windowIsThin) {
        $('.carousel').attr("data-bs-interval", "false");
    };
}

$(document).ready(stopSliding());

