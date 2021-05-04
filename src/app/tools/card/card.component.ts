import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrivacyModalComponent } from '../modals/privacy-modal/privacy-modal.component';
import { ShareModalComponent } from '../modals/share-modal/share-modal.component';
import { RenameModalComponent } from '../modals/rename-modal/rename-modal.component';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { CardItem } from '../../components/interfaces/CardItem';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public item: CardItem;
  @Input() set SetItem(value: CardItem) {
    this.item = value;
  }
  @Input() selection_list;
  // @Input() item_checked: boolean;
  // @Output() itemSelected = new EventEmitter<CardItem>();
  
  // @Input() item: CardItem;
  constructor(public dialog: MatDialog) {
  }

  openDialog(type: string) {
    if (type === "privacy") {
      this.dialog.open(PrivacyModalComponent, {
        data: this.item,
        width: '600px',
      });
    }
    else if (type === "share") {
      this.dialog.open(ShareModalComponent, {
        data: {
          animal: 'panda'
        },
        width: '740px',
      });
    }
    else if (type === "rename") {
      this.dialog.open(RenameModalComponent, {
        data: {
          animal: 'panda'
        },
        width: '600px',
      });
    }
    else if (type === "delete") {
      this.dialog.open(DeleteModalComponent, {
        data: {
          animal: 'panda'
        },
        width: '600px',
      });
    }

  }

  ngOnInit(): void {
  }
  jsEncode(param: string){
    let re = /\//gi;
    param = param.replace(re, '>');
    return param;
    //return encodeURIComponent(param);
  }
  dispDate(m_date: string): string {
    let date = new Date(m_date);
    return date.toLocaleString('default', {day: 'numeric', month: 'short', year: 'numeric'});
  }
}
