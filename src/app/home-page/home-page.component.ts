import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  modules: any[] = [];

  addModule() {
    // You can add different types of modules (text boxes, images) based on user choice
    // For simplicity, let's add a text box as an example
    this.modules.push({ type: 'textbox', content: '' });
  }
}
