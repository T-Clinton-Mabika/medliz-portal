/* */

export interface ServiceRecord {
    serviceType: "Police" | "General" | "Fire" | "Ambulance"
    serviceNumber: string
}

export interface DirectoryEntrySchema {
  countryName: string
  countryServices: ServiceRecord[]
}
