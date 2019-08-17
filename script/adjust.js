// alert("fb volume adjuster open !")


const contentFromPosts = document.querySelector('#contentArea')
const contentFromPages = document.querySelector('#pagelet_timeline_main_column')
const content = contentFromPosts || contentFromPages

function volume_adjust () {
    var vids = document.querySelectorAll('video')

    vids.forEach(function (vid) {
        vid.volume = 0.3
    })
}



if(content) {
    content.addEventListener('DOMContentLoaded', function (event) {
        volume_adjust()
    })
      
    content.addEventListener('DOMNodeInserted', function (event) {
        volume_adjust()
    })
      
    content.addEventListener('DOMSubtreeModified', function (event) {
        volume_adjust()
    })
}


