import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSortModule,
    MatTableModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TabComponent } from './components/tab/tab.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {AuthService} from './services/auth/auth.service';
import {ApiService} from './services/api.service';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import {ProjectsComponent} from './pages/projects/projects.component';
import {UsersComponent} from './pages/users/users.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { SelectComponent } from './components/select/select.component';
import { ApkTableComponent } from './components/apk-table/apk-table.component';
import { SettingsTableComponent } from './components/settings-table/settings-table.component';


const appRoutes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent},
  { path: 'devices', component: DevicesComponent},
{ path: 'projects', component: ProjectsComponent},
{ path: 'users', component: UsersComponent},
{ path: '', component: LoginComponent},
{ path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DeviceTableComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    ToolbarComponent,
    TabComponent,
    SidenavComponent,
    UsersComponent,
    ProjectsComponent,
    DevicesComponent,
    SelectComponent,
    ApkTableComponent,
    SettingsTableComponent
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
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ],
  providers: [AuthService,
  ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
