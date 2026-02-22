/*preview docs*/
const previewDocumentary1 = document.getElementById("previewDocumentary1");

if (previewDocumentary1) {
    previewDocumentary1.addEventListener("click", function() {
        window.location.href = "documentaries/documentaries.html";
    });
}


/*documentaries page*/
const documentary1 = document.getElementById("documentary1");

documentary1.addEventListener("click", function() {
    window.location.href = "document1.html";
});

