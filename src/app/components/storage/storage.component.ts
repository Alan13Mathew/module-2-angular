import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent {
  value = '';
  display!:any;
  constructor(private localstorage: StorageService){}
  setStorage(){
    this.localstorage.setStorage(this.value);
  }
  getStorage(){
    this.display = this.localstorage.getStorage();
  }
  clearStorage(){
    this.localstorage.clearStorage();
  }
}
