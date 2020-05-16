import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users-list',
  template: `
  <section class="section">
    <div class="container">
    <div class="columns is-multiline">
  
   

      <!-- loop over our users and give them each a card -->
      <div class="column is-4" *ngFor="let user of users | async">
        <div class="card">
          <div class="card-content">
            <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
          </div>      
        </div>      
      </div>

    </div>
    </div>
    </section>
  `,
  styles: []
})
export class UsersListComponent implements OnInit {
  users;
  filteredUsers;

  

  constructor(private userService: UserService) {}

  ngOnInit() {
    let usernames=[];
    this.users = this.userService.getUsers();
    this.users.subscribe((user) => {
      for (let i = 0; i < user.length; i++) {
         usernames.push(user[i].login);
      }
      this.filteredUsers=usernames;
      
});
    
  }
 
}
