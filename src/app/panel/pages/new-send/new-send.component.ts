import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { SendService } from '../../services/send.service';

import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';

import { Send } from '../../interfaces/send.interface';

import { switchMap, filter } from 'rxjs';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

import { ZipService } from '../../services/zip.service';

import { WeightService } from '../../services/weight.service';

 

@Component({

  selector: 'app-new-send',

  templateUrl: './new-send.component.html',

  styles: [],

})

export class NewSendComponent implements OnInit {

  company: string = "";

  precio: number = 0;

  public sendForm = new FormGroup({

    id: new FormControl<number>(0),

    address: new FormControl<string>(''),

    destinationPostalCode: new FormControl<string>(''),

    recieverName: new FormControl<string>(''),

    senderName: new FormControl<string>(''),

    packageType: new FormControl<number>(0),

    weight: new FormControl<number>(0),

    companyId: new FormControl<number>(0),

  });

 

  constructor(

    private sendService: SendService,

    private activatedRoute: ActivatedRoute,

    private router: Router,

    private snackbar: MatSnackBar,

    private dialog: MatDialog,

    private zipService: ZipService,

    private weightService: WeightService

  ) {}

 newValue: Send = {
  id: 0,
  address: "",
  companyId: 0,
  destinationPostalCode: "",
  packageType: 0,
  price: 0,
  recieverName: "",
  senderName: "",
  weight: 0
 }

  get currentSend(): Send {

    const send = this.sendForm.value as Send;

    return send;

  }

 

  ngOnInit(): void {

    if (!this.router.url.includes('del')) return;

 

    this.activatedRoute.params

      .pipe(switchMap(({ id }) => this.sendService.getSendsById(id)))

      .subscribe((send) => {

        if (!send) return this.router.navigateByUrl('/');

 

        this.sendForm.reset(send);

        return;

      });

  }

  onSubmit(): void {

    if (this.sendForm.invalid) return;

 
    this.currentSend.price = this.weightService.calculatePrice(
      this.sendForm.value.weight || 0 
    );
    this.sendService.addSend(this.currentSend).subscribe((send) => {

      this.router.navigate(['/panel/send']);

      this.showSnackbar(`Envío número ${send.id} creado!`);

    });

  }

 

  onDeleteSend() {

    if (!this.currentSend.id) throw Error('Se requiere una ID de envío');

 

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {

      data: this.sendForm.value,

    });

 

    dialogRef

      .afterClosed()

      .pipe(

        filter((result: boolean) => result),

        switchMap(() => this.sendService.deleteSendById(this.currentSend.id)),

        filter((wasDeleted: boolean) => wasDeleted)

      )

 

      .subscribe(() => {

        this.router.navigate(['panel/send']);

      });

  }

  showSnackbar(message: string): void {

    this.snackbar.open(message, 'Hecho', {

      duration: 2500,

    });

  }

 

  getCompanyName() {

    const postalCode = this.sendForm.get('destinationPostalCode')?.value;

 

    if(postalCode){

      this.sendForm.get('companyId')?.setValue(Number(this.zipService.assignCompanyByZipCode(postalCode)));

    }

 

    const companyId = this.sendForm.get('companyId')?.value;

 

    if(companyId){

      this.company = this.zipService.getCompanyNameFromId(String(companyId))

    }

  }

 

  getPrice(){

    const peso = this.sendForm.get('weight')?.value;
    console.log('A')

    if(peso){
      console.log('B')
      this.precio = this.weightService.calculatePrice(peso)

    }

   

  }

}

 