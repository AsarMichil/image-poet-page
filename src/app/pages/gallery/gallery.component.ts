import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})

export class GalleryComponent implements OnInit {
  user = this.authService.getCurrentUser();
  poems = [];
  poemToAdd = this.fb.nonNullable.group({
    title: ['', Validators.required],
    poem:['', Validators.required],
    image_link:['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private data: DataService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.setPoems();
    
  }
  ngOnInit() {}

  async setPoems() {
    this.poems = await this.data.getUsersPoems();
    console.log('poems ', this.poems);
  }
  async createPoem() {
    const newPoem = await this.data.createPoem(this.poemToAdd.getRawValue().title, this.poemToAdd.getRawValue().poem, this.poemToAdd.getRawValue().image_link);
    if(newPoem.error){
      console.log('failed to create poem: ' + newPoem.error.message);
    
    }else{
      console.log('poem add success!')
      this.poems = await this.data.getUsersPoems();

    }
  }

  openPoemCreate(modal) {
    this.modalService.open(modal);
  }
  signOut() {
    this.authService.signOut();
  }
  openLogin() {
    this.router.navigate(['/']);
  }


}


