import { Component, OnInit } from '@angular/core';
import { Package } from '../../interfaces/package.interface';
import { PackageService } from '../../services/package.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{

  public packages: Package[] = [];

  constructor(private packageService: PackageService) {

  }
  ngOnInit(): void {
    this.packageService.getPackages()
      .subscribe( packages => this.packages = packages)
  }

}
