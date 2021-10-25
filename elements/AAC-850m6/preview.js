function(instance, properties) {
    $('head').css('height', "0px");
    
    $('html, body').css({
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "top":"0px"
    });
    
    let container = $('<div></div>');
    container.css({
        "width": "40px",
        "height": "40px",
        "position":"absolute",
        "top":"50%",
        "left":"50%",
        "transform":"translate(-50%,-50%)",
        "background-image": "url(https://s3.amazonaws.com/appforest_uf/f1635087817558x553058910813549950/board_logo.png)",
        "background-size": "cover",
        "border-radius": "10px"
    });
    
    $('body').append(container);
    
}