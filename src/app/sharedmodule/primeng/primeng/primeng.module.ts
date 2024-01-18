import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PanelModule } from 'primeng/panel';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SplitterModule } from 'primeng/splitter';
import { EditorModule } from 'primeng/editor';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    TabViewModule,
    ToastModule,
    AutoCompleteModule,
    PanelModule,
    ConfirmPopupModule,
    AccordionModule,
    ChipModule,
    MenuModule,
    FieldsetModule,
    TreeTableModule,
    DialogModule,
    OverlayPanelModule,
    SplitterModule,
    EditorModule,
    ImageModule,
    CardModule
  ],
  exports: [
    MultiSelectModule,
    TableModule,
    CalendarModule,
    AccordionModule,
    DropdownModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
    TabViewModule,
    ToastModule,
    AutoCompleteModule,
    PanelModule,
    ConfirmPopupModule,
    ChipModule,
    MenuModule,
    FieldsetModule,
    TreeTableModule,
    DialogModule,
    OverlayPanelModule,
    SplitterModule,
    EditorModule,
    ImageModule,
    CardModule
  ],
})
export class PrimengModule { }
