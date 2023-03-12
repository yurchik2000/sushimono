import { Injectable } from '@angular/core';
import { IDiscount } from '../../interfaces/discount/discount.interface';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private discounts: Array<IDiscount> = [
    {
      id: 1,
      date: new Date(),      
      title: 'Рол тижня',
      description: 'Щотижня діє знижка 50% на один з ролів у нашому меню ..',
      imagePath: 'http://localhost:4200/assets/images/a-rol-tyzhnya.jpg',      
    },
    {
      id: 2,
      date: new Date(),      
      title: 'Рол тижня',
      description: 'Щотижня діє знижка 50% на один з ролів у нашому меню ..',
      imagePath: 'http://localhost:4200/assets/images/a-rol-tyzhnya.jpg',      
    },
    {
      id: 2,
      date: new Date(),      
      title: 'Рол тижня',
      description: 'Щотижня діє знижка 50% на один з ролів у нашому меню ..',
      imagePath: 'http://localhost:4200/assets/images/a-rol-tyzhnya.jpg',      
    },
  ]

  constructor() { }

  getDiscounts(): Array<IDiscount> {
    return this.discounts
  }

  addDiscount(discount: IDiscount): void {
    console.log(discount);
    this.discounts.push(discount); 
  }
}
