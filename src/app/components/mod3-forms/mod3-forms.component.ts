import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mod3-forms',
  standalone: true,
  imports: [RouterLink,RouterOutlet,
    MatCardModule,MatButtonModule
  ],
  templateUrl: './mod3-forms.component.html',
  styleUrl: './mod3-forms.component.css'
})
export class Mod3FormsComponent {
    select: boolean =  false;
  constructor(private route:ActivatedRoute,private router:Router){
    this.gotoTemplate();
    }

  gotoTemplate(){
    this.select = false;
    this.router.navigate(['templateForms'],{relativeTo:this.route})
  }
  gotoReactive(){
    this.select = true;
    this.router.navigate(['ReactiveForms'],{relativeTo:this.route})
  }
}
