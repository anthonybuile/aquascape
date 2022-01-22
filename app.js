$(document).ready(function(){

})

//insert image to the carousel
$(`div#imgContainer`).ready(function(){
    
    for(var i = 1; i <= 5;i++){
        var button = $(`<button type="button" class="btn p-0 photoButton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-photo='picture${i}'>`)
        var image = $(`<img class="previewImg" src="photos/preview/picture${i}.jpg" alt="">`)
        
        button.append(image)
        $(`#imgContainer`).append(button)
    }

    
})

//insert image to the modal
$(document).on('click', 'button.photoButton', function() {

    $(`#fullPhoto`).empty();
    var picture = $(this).attr('data-photo')
    var image = $(`<img src="photos/fullPhoto/${picture}.jpg" style='max-width: 100%'>`)

    $(`#fullPhoto`).append(image)


    $(`#downloadButton`).empty();
    var download = $(`<a target="_blank" download='${picture}.jpg' href="photos/fullPhoto/${picture}.jpg" >DOWNLOAD</a>`)
    
    $(`#downloadButton`).append(download)
})
