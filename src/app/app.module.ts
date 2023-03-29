import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { UserListComponent } from './pages/user/user-list.component';
import {MatFormFieldModule} from'@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import {     MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from'@angular/material/icon';
import {MatInputModule} from'@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartementComponent } from './pages/departement/departement.component';
import { FormationComponent } from './pages/formation/formation.component';
import { DocumentComponent } from './pages/document/document.component';
import { SalleComponent } from './pages/salle/salle.component';
import { BureauComponent } from './pages/bureau/bureau.component';
import { ProjectComponent } from './pages/project/project.component';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { LiveComponent } from './pages/live/live.component';
import { UserDialogComponent } from './dialog/user-dialog/user-dialog.component';
import { DepartementDialogComponent } from './dialog/departement-dialog/departement-dialog.component';
import { DocumentDialogComponent } from './dialog/document-dialog/document-dialog.component';
import { FormationDialogComponent } from './dialog/formation-dialog/formation-dialog.component';
import { SalleDialogComponent } from './dialog/salle-dialog/salle-dialog.component';
import { BureauDialogComponent } from './dialog/bureau-dialog/bureau-dialog.component';
import { ProjectDialogComponent } from './dialog/project-dialog/project-dialog.component';
import { ReclamationDialogComponent } from './dialog/reclamation-dialog/reclamation-dialog.component';
import { EmbedVideoService } from 'ngx-embed-video';
import { JitsiMeetExternalAPI } from 'jitsi-meet';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    UserListComponent,
    DepartementComponent,
    FormationComponent,
    DocumentComponent,
    SalleComponent,
    BureauComponent,
    ProjectComponent,
    ReclamationComponent,
    QuizComponent,
    LiveComponent,
    UserDialogComponent,
    DepartementDialogComponent,
    DocumentDialogComponent,
    FormationDialogComponent,
    SalleDialogComponent,
    BureauDialogComponent,
    ProjectDialogComponent,
    
    ReclamationDialogComponent,
         UserDetailsComponent,
    
 
  ],
  imports: [
    BrowserAnimationsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    NgToastModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
   FormsModule,
   ReactiveFormsModule,
   CommonModule ,
   


  ],
  providers: [
    EmbedVideoService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
