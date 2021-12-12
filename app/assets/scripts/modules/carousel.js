import $ from 'jquery';

// var $ = require('jquery');
function stopSliding() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var windowIsThin = window.matchMedia("(max-width:768px)").matches;

    if (isMobile || windowIsThin) {
        $('.carousel').attr("data-bs-interval", "false");
        // $('#images').attr("class", "container-sm");
    };

    var tablet = window.matchMedia("(min-width:768px)").matches;

    if (tablet) {
        console.log('tablet');
        // $('#images').attr("class", "container-md");
    }
}

$(document).ready(stopSliding());

document.body.style.webkitTransform =  'scale(1)';
document.body.style.msTransform =   'scale(100)';
document.body.style.transform = 'scale(1)';
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;