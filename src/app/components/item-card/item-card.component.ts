import { Component, input, output } from '@angular/core';
import { NgIf,UpperCasePipe,CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Product } from '../../models/product';
import { CapitalLetterPipe } from '../../customPipes/capital-letter.pipe';
@Component({
  selector: 'item-card',
  standalone: true,
  imports: [
      MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    CapitalLetterPipe,
    UpperCasePipe,CurrencyPipe
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

product = input<Product>();
delete = output();
edit = output();
details = output();


deleteItem(){
  this.delete.emit()
}

updateItem(){
  this.edit.emit()
}

showDetailsItem(){
  this.details.emit()
}


}
