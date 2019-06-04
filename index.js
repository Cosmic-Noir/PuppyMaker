function requestPuppy(){
    // fetch's the API data
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function handleForm(){
    // responsible for hanlding click form
    $('#js-puppyMaker').submit(event => {
        event.preventDefault();
        
        if ($('#js-numberRequest').val() === ""){
            let numberRequest = 3;
            for (let i=1; i <= numberRequest; i++){
                requestPuppy();
                }
        } else {
            let numberRequest = $('#js-numberRequest').val();
            console.log(numberRequest); // Caputures input number
            for (let i=1; i <= numberRequest; i++){
            requestPuppy();
            }
        }
    });
}
    

handleForm();


