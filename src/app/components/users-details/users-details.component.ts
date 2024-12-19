import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css',
})
export class UsersDetailsComponent {
  private httpService = inject(HttpService);

  public userDetail: any;

  private userId: number = 0;

  private subscribtions: Subscription[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const subscription = this.route.params.subscribe((data) => {
      this.userId = +data['userId'];
      this.fetchUserData();
    });
    this.subscribtions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscribtions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  fetchUserData() {
    if (this.userId != 0) {
      this.httpService.getOneUser(this.userId).subscribe((data) => {
        this.userDetail = data;
        console.log(data);
      });
    }
  }
}
