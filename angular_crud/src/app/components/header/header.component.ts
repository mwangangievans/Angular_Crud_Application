import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Task List';

  constructor() { }

  ngOnInit(): void {
  }
    toggleAddTask(){
    alert("hello");
  }
}
