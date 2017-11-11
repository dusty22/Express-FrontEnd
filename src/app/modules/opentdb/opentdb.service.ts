import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OpenTDBService {
  baseUri: string;
  baseCategory: number;
  baseDifficulty: string;
  catUrl: string;
  quizUrl: string;
  catId: number;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }

  // getArtists = (page: number) => this.http.get(
  //   this.baseUri + '/?method=chart.gettopartists&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit=' +
  //     this.limit + '&page=' + page,
  //     { headers: this.headers }).map(x => {
  //       console.log(x.json());
  //       return x.json();
  //     })

  // getTracks = (page: number) => this.http.get(
  //   this.baseUri + '/?method=chart.getTopTracks&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit=' +
  //   this.limit + '&page=' + page,
  //   { headers: this.headers }).map(x => {
  //     console.log(x.json());
  //     return x.json();
  //   })

  //change this to retrieve a list of categories
  /*
  getCategories = (page: number) => this.http.get(
    this.baseUri + 'api_category.php',
     //+ this.limit + '&page=' + page,
      { headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
      })
      */

      getCategories(catId: number) {
        this.catId = catId;
        this.catUrl = this.baseUri + 'api_count.php?category=' + catId;
        return this. http.get(this.catUrl)
        .map(res => res.json());
      }

  //change this to retrieve a list of questions
  /*
  getQuestions = (page: number, questionCount: number, difficulty: string, categoryId: number, type: string) => this.http.get(
    this.baseUri + 'api.php?' + 'amount=' + questionCount + '&'
    + 'category=' + categoryId + '&'
    + 'difficulty=' + difficulty + '&' //easy, medium, hard
    + 'type=' + type, //multiple, boolean
    //+ this.limit + '&page=' + page,

    { headers: this.headers }).map(x => {
      console.log(x.json());
      return x.json();
    })
    */

    getQuiz(baseCategory: number, baseDifficulty: string) {
      this.baseCategory = baseCategory;
      this.baseDifficulty = baseDifficulty;
       this.quizUrl = this.baseUri + 'api.php?' + 'amount=1';
       // id range for cats [9,32]
       if (this.baseCategory >= 9 && this.baseCategory <= 32) {
           this.quizUrl = this.quizUrl + '&category=' + this.baseCategory;
       }
       if (this.baseDifficulty !== '') {
           this.quizUrl = this.quizUrl + '&difficulty=' + this.baseDifficulty;
       }
       this.quizUrl = this.quizUrl + '&type=multiple';

       return this. http.get(this.quizUrl)
         .map(res => res.json());
   }
}
