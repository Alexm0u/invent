import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SendService } from '../../services/send.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Send } from '../../interfaces/send.interface';
import { switchMap, filter } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-send',
  templateUrl: './new-send.component.html',
  styles: [],
})
export class NewSendComponent implements OnInit {
  public sendForm = new FormGroup({
    id:                       new FormControl<number>(0),
    address:                  new FormControl<string>(''),
    destinationPostalCode:    new FormControl<string>(''),
    recieverName:             new FormControl<string>(''),
    senderName:               new FormControl<string>(''),
    packageType:              new FormControl<number>(0),
    weight:                   new FormControl<number>(0),
    companyId:                new FormControl<number>(0),
  });

  constructor(
    private sendService: SendService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  get currentSend(): Send {
    const send = this.sendForm.value as Send;
    return send;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.sendService.getSendsById(id)))
      .subscribe((send) => {
        if (!send) return this.router.navigateByUrl('/');

        this.sendForm.reset(send);
        return;
      });
  }
  onSubmit(): void {
    console.log({formIsValid: this.sendForm.valid, value: this.sendForm
    })
    // if (this.sendForm.invalid) return;

    // this.sendService.addSend(this.currentSend).subscribe((send) => {
    //   this.router.navigate(['/panel/send', send.id])
    //   this.showSnackbar(`Envío número ${send.id} creado!` );
    // });
    
  }

  onDeleteSend(){
    if (!this.currentSend.id) throw Error('Se requiere una ID de envío');

    
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: this.sendForm.value,
      });

      dialogRef.afterClosed()
      .pipe(
        filter((result:boolean) => result ),
        switchMap(()=> this.sendService.deleteSendById(this.currentSend.id)),
        filter((wasDeleted:boolean) => wasDeleted ),
      )
      
      
      .subscribe(() => {
        this.router.navigate(['panel/send']);
      })
  
  }
  showSnackbar(message: string):void{
    this.snackbar.open(message, 'Hecho',{
      duration: 2500,
    } )
  }
}

