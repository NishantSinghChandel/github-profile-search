import {Component, OnInit} from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user_name = '';
  public user_detail = [];

  constructor(private _githubService: GithubService) {
  }

  ngOnInit() {
  }

  getData(user_name) {
    this._githubService.getUser(user_name).subscribe(user => {
      this.user_detail = user;
      console.log(this.user_detail);
    });
  }

}
