import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products-mod3-task2',
  standalone: true,
  imports: [CommonModule,MatCardModule,FormsModule,MatButtonModule],
  templateUrl: './products-mod3-task2.component.html',
  styleUrl: './products-mod3-task2.component.css'
})
export class ProductsMod3Task2Component implements OnInit{

  showQuestionVar: boolean = true;
  productsPerTable = 10;
  pageNumber = 1;
  totalPages!: number;
  totalPagesArray: number[]=[];
  products!: Products[];
  productsToDisplay!: Products[];
  PaginatorRange!:string;
  
  constructor(private productService: ProductService){  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
      this.updateDisplayProducts();
    });
  }
  updateDisplayProducts(){
    this.productsToDisplay = this.products.slice((this.pageNumber - 1) * this.productsPerTable , this.pageNumber * this.productsPerTable);
    this.totalPagesArray = [];
      this.totalPages = Math.ceil(this.products.length / this.productsPerTable);
      for(let i = 1; i <= this.totalPages; i++){
        this.totalPagesArray.push(i);
      }
      this.PaginatorRange = `Showing ${(this.pageNumber - 1) * this.productsPerTable + 1}-${Math.min(this.pageNumber * this.productsPerTable, this.products.length)} of ${this.products.length} items`
  }
  onItemsPerTableChange(){
    this.pageNumber = 1;
    this.updateDisplayProducts();
  }
  previousPage(){
    this.pageNumber-=1;
    this.updateDisplayProducts();
  }
  nextPage(){
    this.pageNumber+=1;
    this.updateDisplayProducts();
  }
  currentPage(pageNum:number){
    this.pageNumber = pageNum;
    this.updateDisplayProducts();
  }
  showQuestion(){
    this.showQuestionVar = !this.showQuestionVar;
  }

}
