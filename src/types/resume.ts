export interface UserData {
  image: File | null;
  name: string;
  age: number;
  sex: string;
  birthdate: string;
  birthplace: string;
}

export interface ProjectData {
  skills: string[];
  experiences: string[];
  projects: string[];
}

export interface AccountData {
  number: number;
  email: string;
  github: string;
  linkedin: string;
}

export type ResumeData = {
  personal: UserData;
  projects: ProjectData;
  account: AccountData;
};
