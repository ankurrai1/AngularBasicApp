import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ReversepipePipe } from './reversepipe.pipe';
import { RedblackDirective } from './redblack.directive';
import { HeadersComponent } from './headers/headers.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent,
    PipeExampleComponent,
    ReversepipePipe,
    RedblackDirective,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
