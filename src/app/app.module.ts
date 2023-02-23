import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BgColorDirective } from './directives/bg-color.directive';
import { ShorthandPipe } from './pipes/shorthand.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { WeatherComponent } from './weather/weather.component';
import { CommonService } from './services/common.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component'
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { AuthGuardService } from './auth-guard.service';
import { CandeactivateGuardService } from './candeactivate-guard.service';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { LoginComponent } from './login/login/login.component';
import { LoaderComponent } from './loader/loader.component';

const appRoute : Routes = [
  {path:'', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {
      
      path:'servers', component:ServersComponent,
      children:[
        {
          path:':id',
          component:ServerComponent,
          canActivate:[AuthGuardService]
        },
        {
          path:':id/edit',
          component:EditServerComponent,
          canDeactivate:[CandeactivateGuardService]
        }
      ]
    
    
    },
    {path:'users', component:UsersComponent,canActivate:[AuthGuardService]},
    {path:'server',component:ServerComponent},
    // {path:'servers/:id', component:ServerComponent},
    // {path:'servers/:id/edit', component:EditServerComponent},
    {path:'**',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BgColorDirective,
    ShorthandPipe,
    SortPipe,
    FilterPipe,
    LifeCycleComponent,
    WeatherComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    CommonService,
    HttpClient
  ],
  bootstrap: [AppComponent, AuthGuardService]
})
export class AppModule { }
