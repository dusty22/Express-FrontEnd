import { DialogService } from 'ng2-bootstrap-modal';
import { OpenTDBService } from '../../opentdb.service';
import { Component, OnInit } from '@angular/core';
import {CategoryPopupComponent} from './category-popup/category-popup.component';
import { OrderBy } from "../../../../orderBy.pipe";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  category: number;
  totalQuestions: number;
  totalEasy: number;
  totalMed: number;
  totalHard: number;

   constructor (private httpService: OpenTDBService) {}

  setCategory(category: number) {
    this.category = category;
  }

  onTestGet() {
      this.httpService.getCategories(this.category).subscribe(
        data => {
            this.totalQuestions = (data['category_question_count']['total_question_count']);
            this.totalEasy = (data['category_question_count']['total_easy_question_count']);
            this.totalMed = (data['category_question_count']['total_medium_question_count']);
            this.totalHard = (data['category_question_count']['total_hard_question_count']);
        },
        error => alert(error),
            () => console.log('Finished')
    );
 }



  /*
  categories: any[] = [ ];
  chosenCategories: any[] = [ ];
  constructor(private _apiSvc: OpenTDBService, private _dialogService: DialogService) {
    _apiSvc.getCategories(1).subscribe(x => {
      this.categories = x.trivia_categories;
     });
  }

  // showDetail(index, category) {
  //   console.log(index);
  //   console.log(category.name);
  //   const disposable =  this._dialogService.addDialog(CategoryPopupComponent,  {
  //                     title: category.name,
  //                     message: 'Description: ' + category.description,
  //                     linkUrl: category.url,
  //                     imageUrl: category.image[2]['#text']})
  //                     .subscribe((isConfirmed) => {
  //                     });
  //                 setTimeout(() => {
  //                     disposable.unsubscribe();
  //                 }, 10000);
  // }

  addCategory(category) {
    this.chosenCategories += category;
  }

  removeCategory(category) {
    this.chosenCategories = this.chosenCategories.filter(x => x.name != category);  
  }
  */
}
