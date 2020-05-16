import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-single',
  template: `

  <section class="hero is-primary is-bold">
  <div class="hero-body">
  <div class="container">  
    <h1 class="title">Repositories Us</h1>  
  </div>
  </div>
  </section>


  <section class="section">
  <div class="container">
  <div class="columns is-multiline">

    <!-- loop over our users and give them each a card -->
    <div class="column is-4" *ngFor="let user of user ">
      <div class="card">
        <div class="card-content">
          <a routerLink="/users/{{ user.login }}">{{ user.name }}</a>
        </div>      
      </div>      
    </div>

  </div>
  </div>
  </section>
  `,
  styles: []
})
export class UserSingleComponent implements OnInit {
  user; // property to hold our user when we eventually grab them from github api

  // inject the things we need
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  // watch the route parameters for changes
  // every time it changes (or on first load), go get a user from userservice
  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    });
  }
}

