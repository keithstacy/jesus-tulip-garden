export interface Bulletin {
    date: string;
    name: string;
    url: string;
  }

export interface BulletinData {
    bulletins: Bulletin[];
}
