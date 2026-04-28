/* */


/*
 * =========================== EMERGENCY CONTACT INFORMATION ===========================
 * - Structure for storage of main contact details for different emergency services for different countries.
 * - Service can either be Police, General, Fire or Ambulance.
 */

interface ServiceEntry {
    serviceType: "Police" | "General" | "Fire" | "Ambulance"
    serviceNumber: string
}

export interface DirectoryDataStructure {
  countryName: string
  countryServices: ServiceEntry[]
}
