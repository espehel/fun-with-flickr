export interface Photo {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  datetaken: string;
  ownername: string;
  views: string;
}

export interface User {
  iconfarm: number;
  iconserver: string;
  id: string;
  nsid: string;
}
