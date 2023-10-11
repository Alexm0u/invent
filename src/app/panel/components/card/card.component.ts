import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../interfaces/package.interface';

@Component({
  selector: 'packages-package-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
    if (!this.package) throw Error('Se requiere la propiedad package');
  }
  @Input()
  public package!: Package
}
