const submitBtn = document.getElementById('submitBtn');
const cityName  = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo =async(event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText = `plz write the city name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=fd3287655eeadcdb2383ab038b48e53d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMod = arrData[0].weather[0].main;
            // condition to check sunny or cloud
            if(tempMod == 'Clear')
            {
               temp_status.innerHTML = "<i class='fas fa-sun' style='#eccc68'></i>";
            }else if(tempMod == 'Clouds'){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='#f1f2f6'></i>";
            }else if(tempMod == 'Rain'){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='#a4b0be'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='#f1f2f6'></i>";
            }
            datahide.classList.remove('data_hide');

            console.log(data);
        }catch{
            city_name.innerText = `plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click',getInfo);