
    

    // sau
//     fetch("https://api.wunderground.com/api/097a75858a1bcea7/conditions/q/RO/Brasov.json")
//     .then(resp => resp.json())
//     .then(showWeather ) 
//     .catch(e => conseole.warn(e))

    function showWeather (weather){
        
            document.querySelector("span").innerHTML= weather.current_observation.temp_c;
            document.querySelector("img").src = weather.current_observation.icon_url;
    }
    


document.addEventListener('change', selectTemp);

function selectTemp (e){
    if(e.target.name != 'temp') return;

    const value = e.target.value;
    setTemp(value);
  }

  function setTemp(value){

   fetch("https://api.wunderground.com/api/097a75858a1bcea7/conditions/q/RO/Brasov.json")
        .then(resp => resp.json())
        .then(weather => {
                console.log(weather.current_observation.value);
        document.querySelector("span").innerHTML= weather.current_observation[value];

        document.querySelector("img").src = weather.current_observation.icon_url;
    }) 
  }

  document.querySelector('button').addEventListener('click', buttonClick);


  function buttonClick (){
        history.pushState({current:'next'}, 'third page', 'third.html');
        const newP = document.createElement('p');
        newP.innerHTML = "Newly created element";
        document.querySelector('.theDiv').appendChild(newP);
  }