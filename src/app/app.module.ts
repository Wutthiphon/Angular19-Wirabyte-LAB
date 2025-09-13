import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { definePreset, palette } from '@primeng/themes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
const AuraConfig = definePreset(Aura, {
  semantic: {
    primary: palette('{blue}'),
  },
});

// PrimeNG Module
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { InplaceModule } from 'primeng/inplace';
import { SkeletonModule } from 'primeng/skeleton';
import { PopoverModule } from 'primeng/popover';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ListboxModule } from 'primeng/listbox';

// Component
import { HomeComponent } from './sample-component/home/home.component';

// Template Component
import { HeaderComponent } from './sample-component/template/header/header.component';
import { FooterComponent } from './sample-component/template/footer/footer.component';
import { TryPageComponent } from './components/try-page/try-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // Component
    HomeComponent,
    // Template Component
    HeaderComponent,
    FooterComponent,
    TryPageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // PrimeNG Module
    ButtonModule,
    MenubarModule,
    MenuModule,
    CardModule,
    ToastModule,
    InputTextModule,
    CheckboxModule,
    PasswordModule,
    DialogModule,
    DividerModule,
    TimelineModule,
    InputGroupModule,
    InputGroupAddonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InplaceModule,
    SkeletonModule,
    PopoverModule,
    ConfirmDialogModule,
    ToggleSwitchModule,
    ListboxModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: AuraConfig,
        options: {
          darkModeSelector: '.non-dark-selector',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
