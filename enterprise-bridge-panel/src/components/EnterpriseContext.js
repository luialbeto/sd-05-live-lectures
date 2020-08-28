import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {

  const [energyGauge, setEnergyGauge] = useState(0);
  const [warpSpeed, setWarpSpeed] = useState(false);
  const [shieldsOnline, setShieldsOnline] = useState(false);
  const [weaponsLevel, setWeaponsLevel] = useState(0);
  const [weaponsEnabled, setWeaponsEnabled] = useState(true);

  const engageWarpSpeed = () => {
    if(warpSpeed || shieldsOnline || weaponsEnabled || energyGauge > 2) return undefined;

    setWarpSpeed(true);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 2);
  }

  const disengageWarpSpeed = () => {
    if(!warpSpeed) return undefined;

    setWarpSpeed(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 2);
  }

  const weaponsOffline = () => {
    if(warpSpeed || !weaponsEnabled) return undefined;

    setWeaponsEnabled(false);
    setWeaponsLevel(0);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - weaponsLevel)
  }

  const weaponsOnline = () => {
    if(warpSpeed || weaponsEnabled) return undefined;

    setWeaponsEnabled(true);
  }

  const increaseFirepower = () => {
    if(warpSpeed || weaponsLevel === 3 || energyGauge === 4 || !weaponsEnabled) return undefined;

    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 1);
    setWeaponsLevel((currentWeaponsLevel) => currentWeaponsLevel + 1);
  }

  const decreaseFirepower = () => {
    if(warpSpeed || weaponsLevel === 0 || energyGauge === 0 || !weaponsEnabled) return undefined;

    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 1);
    setWeaponsLevel((currentWeaponsLevel) => currentWeaponsLevel - 1);
  }

  const raiseShields = () => {
    if(warpSpeed || shieldsOnline || energyGauge > 2) return undefined;
    
    setShieldsOnline(true);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 2);
  }

  const lowerShields = () => {
    if(!shieldsOnline || energyGauge === 0) return undefined;

    setShieldsOnline(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 2);
  }

  const context = {
    energyGauge,
    warpSpeed,
    shieldsOnline,
    weaponsLevel,
    weaponsEnabled,
    engageWarpSpeed,
    disengageWarpSpeed,
    raiseShields,
    lowerShields,
    weaponsOffline,
    weaponsOnline,
    increaseFirepower,
    decreaseFirepower,
  }

  return(
    <EnterpriseContext.Provider value={context}>
      {children}
    </EnterpriseContext.Provider>
  )
}

export { EnterpriseContext, EnterpriseProvider as Provider };