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
function requestBreed(selection){
    // fetchs the API data

    fetch(`https://dog.ceo/api/breed/${selection}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayBreed(responseJson));
}

function handleBreedForm() {
    $('#js-breedMaker').submit(event => {
        event.preventDefault();
        let selection = $('#js-breed').val();
        console.log(selection);
        requestBreed(selection);

    })
}

function displayBreed(responseJson) {
    console.log(responseJson.message);
    $('.breedPic').replaceWith(
        `<img src="${responseJson.message}" class="breedPic">`
    )
    $('.displayBreed').removeClass('hidden');
}

handleBreedForm();
