export type ResponseType = {
    unix_seconds: string[];
    production_types: { name: string; data: number[] }[];
  };
  
  type Datum = {
    timestamp: number, 
    value: number
  } 
  
  export type PowerGenerationDatum = {
    name: string;
    data: Datum[];
  };