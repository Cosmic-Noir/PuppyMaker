function requestPuppy(){
    // fetchs the API data
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .then(responseJson => displayPuppies(responseJson))
        .catch(error => alert('Something is not working...'));
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
        } else if ($('#js-numberRequest').val() < 1 || $('#js-numberRequest').val() > 50){
            alert("Please choose a number between 1 and 50!");
        } else {
            let numberRequest = $('#js-numberRequest').val();
            console.log(numberRequest); // Caputures input number
            for (let i=1; i <= numberRequest; i++){
            requestPuppy();
            }
            
        }
    });
}

function displayPuppies(responseJson) {
    console.log(responseJson.message);
    $('.displayHere').append(
        `<img src="${responseJson.message}" class="puppyImage">`
    );
    
}
    

handleForm();


