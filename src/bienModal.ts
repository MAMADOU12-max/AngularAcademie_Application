export class BienModal {
  constructor(id: number, title: string, description: string, price: number, image: string, sale: boolean, createAt: Date, category: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.sale = sale;
    this.createAt = createAt;
    this.category = category;
  }

  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  sale: boolean;
  createAt: Date;
  category: string;


}
