// Random puppy picture generator that designates number of pics
function requestPuppy(){
    // fetchs the API data
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => displayPuppies(responseJson));
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


// Breed specific generator that displays one picture
function requestBreed(){
    // fetchs the API data
    fetch('https://dog.ceo/api/breed/hound/images')
        .then(response => response.json())
        .then(responseJson => displayPuppies(responseJson));
}

function handleBreedForm() {
    $('#js-breedMaker').submit(event => {
        event.preventDefault();
        requestBreed();

    })
}

