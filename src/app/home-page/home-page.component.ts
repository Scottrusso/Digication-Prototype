import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  modules: any[] = [];
  public styles: object[] = [];
  public textStyles: object[] = [];
  public selectedModuleIndex: number = -1;
  

  addModule() {
    this.modules.push({ type: 'textarea', content: '' });

    const newStyle = {
      width: 200,
      height: 100
    }
    this.styles.push(newStyle);
    this.textStyles.push(newStyle);
  }

  editModule(index: number){

  }

  openModuleSettings(index: number){

  }

  moveModule(index:number){

  }

  deleteModule(index: number){
    const moduleToDelete = this.modules[index];
    this.modules.splice(index, 1);
  }

  

  selectModule(index: number){
    this.selectedModuleIndex = index;
  }



  //resizing functionality

  onResizeEnd(event: ResizeEvent, moduleIndex: number): void {
    if(event.rectangle.width == null || event.rectangle.height == null) return;

    this.styles[moduleIndex] = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };

    this.textStyles[moduleIndex] = {
      width: `${event.rectangle.width - 30}px`,
      height: `${event.rectangle.height - 30}px`,
    };
  }

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }
}
