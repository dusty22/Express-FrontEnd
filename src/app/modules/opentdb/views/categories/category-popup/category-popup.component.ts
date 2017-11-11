import { Component } from '@angular/core';
import { DialogComponent,  DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  message: string;
  imageUrl: string;
  linkUrl: string;
}
@Component({
    selector: 'app-categorypopup',
    templateUrl: './category-popup.component.html',
    styleUrls: ['./category-popup.component.css']

})
export class CategoryPopupComponent extends DialogComponent<ConfirmModel,  boolean> implements ConfirmModel {
  title:  string;
  message:  string;
  imageUrl: string;
  linkUrl: string;

 constructor(dialogService:  DialogService) {
    super(dialogService);
  }
  confirm() {
    this.close();
  }
}
