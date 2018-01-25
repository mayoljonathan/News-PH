import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Import module
import { MaterialModule } from './shared/modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './shared/pipes/pipes.module';

// Import starting entry component
import { AppComponent } from './app.component';

// Import components from pages
import { HomeComponent } from './pages/home/home.component';

// Import child components
import { NewsCardComponent } from './components/news-card/news-card';

// Import services
import { NewsService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    PipesModule,
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
