window.addEventListener("load", function() {

    var $main = this.document.querySelector(".main");
    var $textSection = $main.querySelector(".text-section");
    var $countDiv = $textSection.querySelector(".button-div").querySelector(".count-div");
    
    var $addButton = $countDiv.querySelector(".add-button");
    var $subButton = $countDiv.querySelector(".sub-button");

    $addButton.onclick = function() {
        var countSpan = $main.querySelector(".count-span");
        countSpan.value = parseInt(countSpan.value) + 1;
    };

    $subButton.onclick = function() {
        var countSpan = $main.querySelector(".count-span");

        if(parseInt(countSpan.value) > 0)
            countSpan.value = parseInt(countSpan.value) - 1;
    };

    var $imageSection = $main.querySelector(".image-section");
    var $thumbnailDiv = $imageSection.querySelector(".thumbnail-list");
    var $extendImg = $imageSection.querySelector(".extend-image");

    
    $thumbnailDiv.onclick = function(e) {
        if(e.target.src == undefined) 
            return;
        $extendImg.src = e.target.src;
        
    };

    var dialog = $main.querySelector("dialog");
    var $dialogImg = dialog.querySelector(".extend-image"); 
    var closeButton = dialog.querySelector(".close-button");
    

    $extendImg.onclick = function(e) {
        dialog.showModal();

        var $thumbnailDiv = dialog.querySelector(".thumbnail-list");

        $thumbnailDiv.onclick = function(e) {
            if(e.target.src == undefined) 
                return;
            $dialogImg.src= e.target.src;
        };
        
    };

    closeButton.onclick = function() {
        dialog.close();
    };

    
});