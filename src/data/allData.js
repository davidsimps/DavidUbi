import { GET_WORKSTATIONS_URL, GET_ENGINES_URL } from '../constants/API.js' ;
 
let workStations = [];
let engines = [];

  export async function getWorkStations(){
    await fetch(GET_WORKSTATIONS_URL)
        .then((response) => {
          if(response.ok){
            return response.json()
          }
          throw new Error('Unable to get Work Stations!');
        })
        .then((data) => {
          workStations = data
        })
        .catch((error) => {
          console.log(error)
        });

    return workStations;
  }


  export async function getEngines() {
    await fetch(GET_ENGINES_URL)
        .then((response) => {
          if(response.ok){
            return response.json()
          }
          throw new Error('Unable to get Engines!');
        })
        .then((data) => {
          engines = data
          // console.log(engines)
        })
        .catch((error) => {
          console.log(error)
        });

    return engines;
  }

  /// return list of engines by engine id (ideally this should be an endpoint in thet API
  export function getEngineById(id) {
    
    return engines.find(
      (eng) => eng.id === id
    );
  }
