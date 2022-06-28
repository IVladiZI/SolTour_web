import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatMomentDateModule, MatInputModule, BrowserAnimationsModule,MatDividerModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatMomentDateModule, MatInputModule, BrowserAnimationsModule,MatDividerModule]
})


export class MaterialModule { }
