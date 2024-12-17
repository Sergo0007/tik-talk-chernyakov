import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit{
  name!: string;
  speed!: number;
  model!: string;
  colors!: Colors;
  options!: string[];
  isEdit:boolean = false;
  
  ngOnInit(): void {
        this.name = 'audi';
        this.model = 'RS8';
        this.speed = 235;
        this.colors ={
          car: "белый",
          salon: "черный",
          wheels: "серебристый"
        };
        this.options = ["ABS","Автопилот","Асисстнет парковки"];
      
  }
  showEdit(){
    this.isEdit =!this.isEdit;
  }
  addOpt(option:string){
    this.options.unshift(option)
    return false;

  }
  deleteOpt(option:string){
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i]==option) {
        this.options.splice(i,1);
        break;
        
      }
      
    }
  }
  
carSelect(carName: string){
  if(carName ==='bmw') {
    this.name = 'bmw';
    this.model ='M5';
    this.speed = 230;
    this.colors ={
      car: "Синий",
      salon: "белый",
      wheels: "серебристый"
    };
    this.options = ["ABS","Автопилот","Асисстнет парковки","Камера заднего вида"];
  }else if(carName === 'audi'){
    this.name = 'audi';
    this.model = 'RS8';
    this.speed = 235;
    this.colors ={
      car: "белый",
      salon: "черный",
      wheels: "серебристый"
    };
    this.options = ["ABS","Автопилот","Асисстнет парковки"];

  }else {
    
    this.name = 'mercedes';
    this.model = 'amg';
    this.speed = 245;
    this.colors ={
      car: "череый",
      salon: "черный",
      wheels: "серебристый"
    };
    this.options = ["ABS","Автопилот","Асисстнет парковки","Массаж"]
  }

}
}

 interface Colors {
  car: string,
  salon: string,
  wheels: string

}
