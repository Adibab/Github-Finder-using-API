//Example fetch using pokemonapi.co
let searchBtn =document.querySelector('#searchBtn').addEventListener('click', getFetch);
let searchUser = document.querySelector('#search-user');
let ui = new UI; 
function getFetch(){
  const userText = searchUser.value;
   if ( userText != ''){
       //Fetch API
  const url= `https://api.github.com/users/${userText}`

        fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                console.log(data);
                if (data.message == 'Not Found'){
                //show alert
                ui.showAlert("USER NOT FOUND!", "alert alert-danger");

                }else{
             //show profile
                ui.showProfile(data);
            }
            })
    }else{
    //clear profile
    ui.clearProfile();
    }
//.catch(err => {
//console.log(`error ${err}`)
//});

}
