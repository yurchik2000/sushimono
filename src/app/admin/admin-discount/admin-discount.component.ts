import { Component } from '@angular/core';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { IDiscount } from '../../shared/interfaces/discount/discount.interface';

@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.scss']
})
export class AdminDiscountComponent {

  public adminDiscounts: IDiscount[] =  [];
  public isShowAddDiscount: boolean = false;
  public addTitle: string = '';
  public addDescription: string = '';
  public addImagePath: string = 'http://localhost:4200/assets/images/a-rol-tyzhnya.jpg';

  constructor(
    private discountService: DiscountService
    ) {}

    ngOnInit(): void {
      this.adminDiscounts = this.discountService.getDiscounts();
    }

    showAddDiscount(): void {
      this.isShowAddDiscount = true;
    }
    hideAddDiscount(): void {
      this.isShowAddDiscount = false;
    }
    addNewDiscount(): void {
      const discount: IDiscount = {
        id: 3,
        date: new Date(),
        title: this.addTitle,
        description: this.addDescription,
        imagePath: this.addImagePath
      }
      this.discountService.addDiscount(discount);
      this.adminDiscounts = this.discountService.getDiscounts();
      this.isShowAddDiscount = false;
    }




}
