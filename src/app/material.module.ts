import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatMomentDateModule, MatInputModule, BrowserAnimationsModule, MatDividerModule, MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatMomentDateModule, MatInputModule, BrowserAnimationsModule, MatDividerModule, MatSidenavModule,MatToolbarModule,MatListModule,MatCardModule]
})


export class MaterialModule { }
