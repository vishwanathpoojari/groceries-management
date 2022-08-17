import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  inputMessage: any = '';
  toggleBot:boolean = true;
  constructor() { }
  messages:any=[{
    msg:'Hi, welcome to groceries store',
    css:'item',
  },
]

  ngOnInit(): void {
  }

  sendMsg(){
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var Regex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m; 
    let obj:any;
    let reply:any;
    if(re.test(this.inputMessage) || Regex.test(this.inputMessage)){
       obj={
        msg: this.inputMessage,
        css: 'item-right'
      }
       reply={
        msg: 'Thank you!',
        css: 'item'
      }
    }
    else{
       obj={
        msg: this.inputMessage,
        css: 'item-right'
      }
       reply={
        msg: 'Could you please provide your emailId and contact number?',
        css: 'item'
      }
    }
    this.messages.push(obj);
    this.messages.push(reply);
    this.inputMessage = ''
  }

  // closeChatbot(){
  //   this.toggleBot = false
  // }

}
