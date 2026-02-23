/*preview docs*/
const previewDocumentary1 = document.getElementById("previewDocumentary1");

if (previewDocumentary1) {
    previewDocumentary1.addEventListener("click", function() {
        window.location.href = "documentaries/documentaries.html";
    });
}

const previewDocumentary2 = document.getElementById("previewDocumentary2");

if (previewDocumentary2) {
    previewDocumentary2.addEventListener("click", function() {
        window.location.href = "documentaries/documentaries.html";
    });
}


/*documentaries page*/
const documentary1 = document.getElementById("documentary1");

documentary1.addEventListener("click", function() {
    window.location.href = "document1.html";
});

const documentary2 = document.getElementById("documentary2");

documentary1.addEventListener("click", function() {
    window.location.href = "document2.html";
});


