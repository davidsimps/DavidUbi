import { GET_WORKSTATIONS_URL, GET_ENGINES_URL } from '../constants/API.js' ;
 
 let workStations = [];
 
// let workStations = JSON.stringify([
//     {
//       name: "Assembly A",
//       cycleTimeHrs: 1.5,
//       currentProduct: {
//         id: "604676cf40ef9e9137f831e7",
//         entryTime: now - (31 * 60 * 1000)
//       }
//     },
//     {
//       name: "Assembly B",
//       cycleTimeHrs: 1,
//       currentProduct: {
//         id: "604676cf40ef9e9137f831e7",
//         entryTime: now - (20 * 60 * 1000)
//       }
//     },
//     {
//       name: "Assembly C",
//       cycleTimeHrs: 2,
//       currentProduct: null
//     },
//     {
//       name: "Inspection",
//       cycleTimeHrs: 0.5,
//       currentProduct: {
//         id: "604676cf40ef9e9137f831e7",
//         entryTime: now - (5 * 60 * 1000)
//       }
//     },
//   ])

let engines = [];
// let engines = JSON.stringify([
//     {
//       id: "604676cf40ef9e9137f831e7",
//       serialNumber: "121612129",
//       model: "5R",
//       image: "https://i.postimg.cc/MKbJTkrx/5R.jpg"
//     },
//     {
//       id: "60467703c7e7ca6bca3b598c",
//       serialNumber: "342612171",
//       model: "2R",
//       image: "https://i.postimg.cc/RVzz4CdX/2R.jpg"
//     },
//     {
//       id: "6046770b70a8ffd3e95e7dc8",
//       serialNumber: "9232842345",
//       model: "8R",
//       image: "https://i.postimg.cc/cLxytDV3/8R.png"
//     },
//     {
//       id: "604677132b5381c3d19a0dcc",
//       serialNumber: "784213414",
//       model: "5R",
//       image: "https://i.postimg.cc/MKbJTkrx/5R.jpg"
//     },
//     {
//       id: "6046771b40c3fce9a6f8c11f",
//       serialNumber: "4315112123",
//       model: "2R",
//       image: "https://i.postimg.cc/RVzz4CdX/2R.jpg"
//     },
//   ])

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

  /// return list of engines by engine id
  export function getEngineById(id) {
    
    return engines.find(
      (eng) => eng.id === id
    );
  }