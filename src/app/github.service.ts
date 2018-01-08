import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private _http: Http) {
    console.log('server ready');
  }

  getUser(username) {
    return this._http.get('https://api.github.com/users/' + username)
      .map(res => res.json());
  }

  getData(username) {
    this.getUser(username).subscribe(user => {
    });
  }
}
