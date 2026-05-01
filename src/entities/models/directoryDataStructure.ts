/* */

/*
 * =========================== SERVICE ENTRY ===========================
 * - This is a record for a given emergency service.
 * - Type: This is the kind of emergency contact.
 * -       This could either be Ambulance, Fire, Police or Emergency Hotline.
 * - Number: The actual number associated with the service.
 */

interface ServiceEntry {
  serviceType: "Ambulance" | "Fire" | "Police" | "Emergency Hotline";
  serviceNumber: number;
}

/*
 * =========================== SERVICE ENTRY ===========================
 * - Name: The name of country in question.
 * - Services: List of the emergency services on record.
 */

export interface DirectoryDataStructure {
  countryName: string;
  countryServices: ServiceEntry[];
}
