import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
    MatPasswordStrengthModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule
  ],

  providers: [RichiestaService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})



export class AppModule { }
