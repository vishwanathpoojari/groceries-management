import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  toggleChatbox:boolean = false
  showbot:boolean = false;

  ngOnInit(): void {
    let item = localStorage.getItem('showchatbot')
    if(item == 'true'){
      this.showbot = true;
    }
  }

  toggleChatbot(){
    this.toggleChatbox = !this.toggleChatbox
  }
}
