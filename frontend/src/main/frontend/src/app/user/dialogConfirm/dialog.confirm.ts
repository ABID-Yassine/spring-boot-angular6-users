import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog.confirm.html',
  styleUrls: []
})
export class DialogConfirm {


  constructor(public dialogRef: MatDialogRef<DialogConfirm>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }



}
