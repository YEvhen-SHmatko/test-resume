export interface ISkilItem {
  title: string;
  list: string[];
}

export interface IProject {
  id: string;
  name: string;
  link: string;
}

export interface IWork {
  id: string;
  name: string;
  description: string;
}

export interface IData {
  photo_link: string;
  skils: ISkilItem[];
  fio: string;
  description: string;
  projects: IProject[];
  works: IWork[];
}
