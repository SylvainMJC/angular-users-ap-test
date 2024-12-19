import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { JsonPipe } from '@angular/common';
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

  private userId: number = 2;

  ngOnInit(): void {
    this.httpService.getOneUser(this.userId).subscribe((data) => {
      this.userDetail = data;
      console.log(data);
    });
  }
}
