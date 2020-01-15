export interface IFormData {
  givenName: string;
  surname: string;
  email: string;
  tel: string;
  house: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  avatar: File | null;
}

export interface IFormHandler {
  setGivenName: React.Dispatch<React.SetStateAction<string>>;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setTel: React.Dispatch<React.SetStateAction<string>>;
  setHouse: React.Dispatch<React.SetStateAction<string>>;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  setSuburb: React.Dispatch<React.SetStateAction<string>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setPostcode: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File | null>>;
}
