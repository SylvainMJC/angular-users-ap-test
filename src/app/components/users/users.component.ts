import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  private httpService = inject(HttpService);

  public users: any = [];

  ngOnInit(): void {
    this.httpService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
