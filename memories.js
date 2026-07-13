// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.event").forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="0.8s";

    observer.observe(item);

});

// ===============================
// Go To Letter Page
// ===============================

function nextPage(){

    window.location.href = "letter.html";

}