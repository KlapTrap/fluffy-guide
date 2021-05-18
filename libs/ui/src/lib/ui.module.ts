import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpriteComponent } from './sprite/sprite.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpriteComponent],
  exports: [SpriteComponent],
})
export class UiModule {}
