export interface WeddingData {
  couple: {
    bride: Person;
    groom: Person;
  };
  date: string;
  time: string;
  venue: Venue;
  events: WeddingEvent[];
  loveStory: LoveStory[];
  gallery: string[];
  bankAccounts: BankAccount[];
  quotes: Quote;
  streaming: Streaming;
}

export interface Person {
  name: string;
  fullName: string;
  parent: string;
  instagram: string;
  image: string;
  description?: string;
}

export interface Venue {
  name: string;
  address: string;
  mapsUrl: string;
  mapEmbed?: string;
}

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  icon?: string;
}

export interface LoveStory {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface BankAccount {
  bank: string;
  name: string;
  number: string;
}

export interface Quote {
  text: string;
  source: string;
}

export interface Streaming {
  youtube?: string;
  zoom?: string;
  facebook?: string;
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  date: string;
  avatar: string;
}

export interface RSVPData {
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  guestCount: number;
  message: string;
}
