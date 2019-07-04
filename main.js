function readURL(input) {
    const img = document.getElementById('chosen_image');
    console.log("raed url initiated!");
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;

            img.setAttribute("style", " height: 200px; width: 300px;");
            // Load the model.
            mobilenet.load().then(model => {
                // Classify the image.
                console.log("loaded!");
                model.classify(img).then(predictions => {
                    console.log('Predictions: ');
                    console.log(predictions);
                });
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
    
    

}

