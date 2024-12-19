import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

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

  private subscribtions: Subscription[] = [];

  ngOnInit(): void {
    const subscription = this.httpService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
    this.subscribtions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscribtions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
