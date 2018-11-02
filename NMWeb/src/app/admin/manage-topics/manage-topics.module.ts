import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageTopicsRoutingModule} from "./manage-topics-routing.module";
import {ListTopicsComponent} from "./list-topics/list-topics.component";
import {MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    ManageTopicsRoutingModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,

  ],
  declarations: [
    ListTopicsComponent,
  ]
})
export class ManageTopicsModule { }