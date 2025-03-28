export enum DocumentType {
  Dni = "DNI",
  Passport = "PASSPORT",
  Ce = "CE",
}

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
}

export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  age: string | null;
  document: string;
  documentType: DocumentType;
  gender: Gender;
  hasFamily: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserPayload = {
  name: string;
  phone: string;
  email: string;
  age: string | null;
  document: string;
  documentType: DocumentType;
};

export type CalculateCreditScoreResponse = {
  billPayment: {
    score: string;
    qualify: boolean;
    recommendations: string[];
  };
  socialMedia: {
    score: string;
    qualify: boolean;
    recommendations: string[];
  };
  residenceAge: {
    score: string;
    qualify: boolean;
    recommendations: string[];
  };
  bankTransactions: {
    score: string;
    qualify: boolean;
    recommendations: string[];
  };
  stabilityEmployment: {
    score: string;
    qualify: boolean;
    recommendations: string[];
  };
};
