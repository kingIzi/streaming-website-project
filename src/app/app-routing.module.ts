import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StreamingComponent } from './pages/streaming/streaming.component';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'biso', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'videos/:videoId',
    component: StreamingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
