import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HomeScreenpageComponent } from './home-screenpage/home-screenpage.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomePageTopSectionComponent } from './home-page-top-section/home-page-top-section.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { HomepageFooterComponent } from './homepage-footer/homepage-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EmailFieldComponent,
    PasswordFieldComponent,
    LoginButtonComponent,
    HomeScreenpageComponent,
    HomepageHeaderComponent,
    HomePageTopSectionComponent,
    SearchBoxComponent,
    OrderGridComponent,
    HomepageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule, PagerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
