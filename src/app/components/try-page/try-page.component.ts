import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-try-page',
  standalone: false,
  templateUrl: './try-page.component.html',
  styleUrl: './try-page.component.scss',
})
export class TryPageComponent {
  page_id: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.page_id = id ? Number(id) : null;
    });
  }
}
