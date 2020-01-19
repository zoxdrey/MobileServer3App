import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './components/data-table/data-table.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatTableModule} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';


const appRoutes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},
{ path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ButtonComponent,
    CardComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
