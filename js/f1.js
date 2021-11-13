
let body = document.getElementById('tbody');

const doAPICall = async (year, round) => {
    let ergastURL = `https://ergast.com/api/f1/${year}/${round}/driverStandings.json`;
    const response = await fetch(ergastURL);
    const data = await response.json();
    const driverStandings = await data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    
    for(racer of driverStandings){
        let row = body.insertRow(-1);
        let first = row.insertCell(-1);
        let last = row.insertCell(-1);
        let dateOfBirth = row.insertCell(-1);
        let position = row.insertCell(-1);
        let wins = row.insertCell(-1);
        let nationality = row.insertCell(-1);
        let constructor = row.insertCell(-1);


        first.innerHTML = racer.Driver.givenName;
        last.innerHTML = racer.Driver.familyName;
        dateOfBirth.innerHTML = racer.Driver.dateOfBirth;
        position.innerHTML = racer.position;
        wins.innerHTML = racer.wins;
        nationality.innerHTML = racer.Driver.nationality;
        constructor.innerHTML = racer.Constructors[0].name;
    }
  }


handleSubmit=()=>{
    let yearInput = document.getElementById('year').value;
    let roundInput = document.getElementById('round').value;

    let data = doAPICall(yearInput, roundInput);
    console.log(data);

}
// document.addEventListener('submit', handleSubmit);
