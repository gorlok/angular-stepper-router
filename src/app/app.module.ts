import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { HelloComponent } from "./hello/hello.component";
import { HeaderComponent } from "./header/header.component";
import {
  MatToolbarModule,
  MatCardModule,
  MatStepperModule,
  MatButtonModule
} from "@angular/material";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";


import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab4Component } from './tab4/tab4.component';


const routes: Routes = [
  //Just an example for the logic i used
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: 'demo', component: DemoComponent, children: [
    { path: 'step1', component: Tab1Component },
    { path: 'step2', component: Tab2Component },
    { path: 'step3', component: Tab3Component },
    { path: 'step4', component: Tab4Component },
  ]},
];

@NgModule({
  exports: [CommonModule],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true, enableTracing: false}),
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [AppComponent, DemoComponent, HeaderComponent, HelloComponent, Tab1Component, Tab2Component, Tab3Component, Tab4Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
