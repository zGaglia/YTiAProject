import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AziendaComponent } from './azienda/azienda.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RichiestaService } from './richiesta.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CambiaPasswordComponent } from './cambia-password/cambia-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [

  { path: 'privato', component: FormComponent },
  { path: 'azienda', component: AziendaComponent },
  { path: 'index',component: MainComponent},
  { path: 'changepassword', component: CambiaPasswordComponent},
  { path: '', redirectTo: "index", pathMatch: "full"},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AziendaComponent,
    MainComponent,
    NotFoundComponent,
    CambiaPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],

  providers: [RichiestaService],
  bootstrap: [AppComponent]
})



export class AppModule { }
