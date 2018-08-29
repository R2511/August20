import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  students: any[] = [ {
    "name":"sowmiya",
    "rollno":"1",
    "email":"sowmiya@gmail.com",
    "marks":"20",
    "rank":"1"
  },
  {
    "name":"john",
    "rollno":"2",
    "email":"john@gmail.com",
    "marks":"10",
    "rank":"2"

   },
   {

     "name":"marry",
     "rollno":"3",
     "email":"marry@gmail.com",
     "marks":"20",
     "rank":"1"
   } ]
 }
