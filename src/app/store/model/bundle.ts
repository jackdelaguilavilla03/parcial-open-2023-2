export class Bundle {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  youSave: number;
  rating: number;

  constructor() {
    this.id = 'id';
    this.title = 'title';
    this.description = 'description';
    this.photoUrl = 'photoUrl';
    this.price = 0;
    this.youSave = 0;
    this.rating = 0;
  }

}
