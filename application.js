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
            if($(this).css("background-color") !== $pixelColour){
                $(this).css({"background-color": $pixelColour, "opacity": 0});
                console.log($(this).css("background-color"));
                console.log($pixelColour);
            }
            $(this).css({"background-color": $pixelColour, "opacity": "+=0.20"});
        });
    }
    
    $('button').click(function(){
        switch(this.id){
            case 'red' :
                $pixelColour = "rgb(255, 0, 0)";
                break;
            case 'black' :
                $pixelColour = "rgb(0, 0, 0)";
                break;
            case 'blue' :
                $pixelColour = "rgb(0, 0, 255)";
                break;
            case 'clear' :
                $('.pixel').css({"opacity": 0});
                break;
        }
        
        
    });

    createGrid(sizeOfGrid, gridLength);
});