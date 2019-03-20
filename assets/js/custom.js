document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        var loader = document.querySelector(".loader-background");
        if(loader) {
            loader.remove();
        }
    }, 500);
}, false);