import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent implements OnInit {

  @Input('icons') icons!:string[] ;
  @Input('links') links!:string[] ;

  buttons:any[]= [];

  constructor() { }

  ngOnInit(): void {
    this.fillButtons(this.icons,this.links)
  }

  fillButtons(icons:string[],links:string[]){
    icons.forEach((icon,index)=>{
      const item = {icon, link:links[index]}
      this.buttons.push(item)
    })
  }

}
