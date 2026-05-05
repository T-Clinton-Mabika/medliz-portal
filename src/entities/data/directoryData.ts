/* */

import { DirectoryDataStructure } from "../models/directoryDataStructure";

export const Directory: DirectoryDataStructure[] = [
  {
    countryName: "United Kingdom",
    countryServices: [
      {
        serviceType: "Emergency Hotline",
        serviceNumber: 999,
      },
    ],
  },
  {
    countryName: "United States",
    countryServices: [
      {
        serviceType: "Emergency Hotline",
        serviceNumber: 911,
      },
    ],
  },
  {
    countryName: "Zimbabwe",
    countryServices: [
      {
        serviceType: "Ambulance",
        serviceNumber: 994,
      },
      {
        serviceType: "Fire",
        serviceNumber: 993,
      },
      {
        serviceType: "Police",
        serviceNumber: 995,
      },
    ],
  },
  {
    countryName: "South Africa",
    countryServices: [
      {
        serviceType: "Emergency Hotline",
        serviceNumber: 112,
      },
      {
        serviceType: "Ambulance",
        serviceNumber: 10177,
      },
      {
        serviceType: "Police",
        serviceNumber: 10111,
      },
    ],
  },
];
