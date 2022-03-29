export interface As {
  asn: number;
  domain: string;
  name: string;
  route: string;
  type: string;
}

export interface Location {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}

export interface ResponseIp {
  as: As;
  domains: string[];
  ip: string;
  isp: string;
  location: Location;
}

export interface UIIPData {
  summary: Summary[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface Summary {
  title: string;
  description: string;
}
