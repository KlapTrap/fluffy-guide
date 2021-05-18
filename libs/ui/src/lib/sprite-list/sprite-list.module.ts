import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SpriteListComponent } from './sprite-list.component';
import { SpriteModule } from '../sprite/sprite.module';

@NgModule({
  imports: [CommonModule, MatCardModule, SpriteModule],
  declarations: [SpriteListComponent],
  exports: [SpriteListComponent],
})
export class SpriteListModule {}
