import { Component, OnInit } from '@angular/core';
import { ModalVisitePage } from '../visite/modal-visite/modal-visite.page';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-tabs-visite',
  templateUrl: './tabs-visite.page.html',
  styleUrls: ['./tabs-visite.page.scss'],
})
export class TabsVisitePage implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVisitePage, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
