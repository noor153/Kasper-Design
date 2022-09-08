import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { DesignComesWithComponent } from './design-comes-with/design-comes-with.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { AboutComponent } from './about/about.component';
import { JohnDoeComponent } from './john-doe/john-doe.component';
import { AchivesComponent } from './achives/achives.component';
import { TestmonialSkillsComponent } from './testmonial-skills/testmonial-skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MailComponent } from './mail/mail.component';
import { PricingComponent } from './pricing/pricing.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ServicesComponent,
    DesignComesWithComponent,
    PorfolioComponent,
    AboutComponent,
    JohnDoeComponent,
    AchivesComponent,
    TestmonialSkillsComponent,
    ContactComponent,
    FooterComponent,
    MailComponent,
    PricingComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
