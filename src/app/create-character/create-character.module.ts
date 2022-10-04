import { NgModule } from "@angular/core";
import { CreateCharacterComponent } from '../create-character/create-character.component';
import { RouterModule, RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule ({
    declarations: [
    CreateCharacterComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: '', component: CreateCharacterComponent }
        ])
    ]
})
export class CreateCharacterModule {}