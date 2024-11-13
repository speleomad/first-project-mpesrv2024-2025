import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { GetCharPipe } from './pipes/get-char.pipe';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GetCharPipe,
    CommentComponent,
    HomeComponent,
    NotFoundComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
