import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpriteComponent } from './sprite.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [SpriteComponent],
  exports: [SpriteComponent],
})
export class SpriteModule {}
