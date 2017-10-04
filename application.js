$(document).ready(function(){
    
    var sizeOfGrid = 400;
    var gridLength = 20;
    var $pixelColour = "black";


    $('#grid').css({
        height: sizeOfGrid,
        width: sizeOfGrid
    });

    $('#introduction').css({
        width: sizeOfGrid
    });

   
    function createGrid(sizeOfGrid, gridLength){

        var pixel = "<div class='pixel'></div>";
        var numOfPixels = gridLength * gridLength;
        var pixelSize = sizeOfGrid / gridLength;       

        // clears grids
        $('#grid').empty();
        for(var i = 0; i <numOfPixels; i++){
            $('#grid').append(pixel);
        }

        $('.pixel').css({
            height: pixelSize,
            width: pixelSize
        });
        
    

        $('.pixel').hover(function(){
            $(this).css({"background-color": $pixelColour, "opacity": "+=0.20"});
        });
    }
    
    $('button').click(function(){
        switch(this.id){
            case 'red' :
                $pixelColour = "red";
                break;
            case 'black' :
                $pixelColour = "black";
                break;
            case 'blue' :
                $pixelColour = "blue";
                break;
            case 'clear' :
                break;
        }
        $('.pixel').css({"background-color" : $pixelColour, "opacity": 0});
    });

    createGrid(sizeOfGrid, gridLength);
});