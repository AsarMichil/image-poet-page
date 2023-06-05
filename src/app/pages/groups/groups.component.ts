import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit{
  user=this.authService.getCurrentUser();
  groups =[];

  constructor(private authService: AuthService, private data: DataService, private router: Router,){

    this.setGroups();
  }
  ngOnInit(){}

  async setGroups(){
    this.groups = await this.data.getGroups();
    console.log('groups: ' + this.groups)
  }

  async createGroup(){

  }

  signOut(){
    this.authService.signOut();
  }

  openLogin(){
    this.router.navigate(['/']);
  }
}
