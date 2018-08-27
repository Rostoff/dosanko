import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FormsModelsComponent } from './home/forms-models/forms-models.component';
import { DemandsComponent } from './home/demands/demands.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { InformationsComponent } from './home/informations/informations.component';
import { SearchComponent } from './directory/search/search.component';
import { SocietyListComponent } from './directory/society-list/society-list.component';
import { FormsModule } from '@angular/forms';
import { MarketsComponent } from './markets/markets.component';
import { SocietysComponent } from './societys/societys.component';
import { PersonalComponent } from './personal/personal.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ScreeningComponent } from './screening/screening.component';
import { AdminComponent } from './admin/admin.component';
import { SynthesesComponent } from './syntheses/syntheses.component';
import { MarketListComponent } from './markets/market-list/market-list.component';
import { MarketSearchComponent } from './markets/market-search/market-search.component';


const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'directory', component: DirectoryComponent},
  {path: 'markets', component: MarketsComponent},
  {path: 'societys', component: SocietysComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: 'screening', component: ScreeningComponent},
  {path: 'syntheses', component: SynthesesComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    DirectoryComponent,
    FormsModelsComponent,
    DemandsComponent,
    TasksComponent,
    InformationsComponent,
    SearchComponent,
    SocietyListComponent,
    MarketsComponent,
    SocietysComponent,
    PersonalComponent,
    MeetingsComponent,
    ScreeningComponent,
    AdminComponent,
    SynthesesComponent,
    MarketListComponent,
    MarketSearchComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
