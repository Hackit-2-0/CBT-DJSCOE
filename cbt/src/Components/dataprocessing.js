import React from "react";
import data from "./Data";
let fossilFuelData = [],
  hydroElectricData = [],
  renewableEnergyData = [],
  biomassData = [];

let dataProcessing = (yearFrom, yearTo) => {
  let msg;
  if (yearFrom <= yearTo) {
    let coal = 0,
      pliquids = 0,
      pcoke = 0,
      ngas = 0,
      ogas = 0,
      nuclear = 0,
      chydroelectric = 0,
      wind = 0,
      solar = 0,
      geothermal = 0,
      biomass = 0,
      wood = 0,
      otherbio = 0;
    for (let i = yearFrom; i - 1 < yearTo; i++) {
      coal += data.coal[i];
      pliquids += data.pliquids[i];
      pcoke += data.pcoke[i];
      ngas += data.ngas[i];
      ogas += data.ogas[i];
      nuclear += data.nuclear[i];
      chydroelectric += data.chydroelectric[i];
      wind += data.wind[i];
      solar += data.solar[i];
      geothermal += data.geothermal[i];
      biomass += data.biomass[i];
      wood += data.wood[i];
      otherbio += data.otherbio[i];
    }

    fossilFuelData = [
      { name: "Below 18", y: coal },
      { name: "18-29", y: pliquids },
      { name: "30-44", y: pcoke },
      { name: "45-59", y: ngas },
      { name: "60+", y: ogas }
    ];

    hydroElectricData = [
      { name: "Boy", y: nuclear },
      { name: "Girls", y: chydroelectric }
    ];

    biomassData = [
      { name: "Alcohol", y: biomass },
      { name: "Drugs", y: wood },
      { name: "Smoking", y: otherbio }
    ];

    renewableEnergyData = [
      { name: "Major depression", y: wind },
      { name: "Persistent depression", y: solar },
      { name: "Bipolar disorder", y: geothermal }
    ];
    msg = "Select the range";
  } else {
    msg = (
      <>
        Year <b>From</b> should be less or equal to year <b>To</b>
      </>
    ); //do nothing
  }
  return msg;
};

export default dataProcessing;
export { fossilFuelData, hydroElectricData, biomassData, renewableEnergyData };
