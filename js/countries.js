const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
// loadCountries();
const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of countries){
    //     p = document.createElement('p');
    //     p.innerText = `Country Name: ${country.name}`;
    //     div.appendChild(p);
    // }
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML =`
            <h2>${country.name}</h2>
            <h4>${country.capital}</h4>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        // const h2 = document.createElement('h2');
        // h2.innerText = `Name: ${country.name}`;
        // div.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText = `Capital: ${country.capital}`;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    });

}

const loadCountryByName = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]));
}

const displayDetails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h2>${country.name}</h2>
        <p> Polulation : ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `
}