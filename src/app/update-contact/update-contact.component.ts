import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId: string = ''
  contact:MyContact = {} as MyContact
  groups:MyGroup[] = [] as MyGroup[]
  constructor(private activatedRoute: ActivatedRoute,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((data: any) => {
        this.contactId = data['contactId']
        console.log(data['contactId']);
        
      })

      //call api for getting particular contact detail
      this.api.viewContact(this.contactId).subscribe(
        (data:any)=>{
          this.contact = data
          console.log(this.contact);
          
        }
      )
      //call api for getting all groups from service class
      this.api.getAllGroups().subscribe(
        (data:any)=>{
          this.groups = data
        }
      )
  }
//update contact
  updateContact(){
    //api call for updating the existing contact, arg: update contact, contact id
    this.api.updateContact(this.contactId,this.contact).subscribe(
      (data:any)=>{
        this.router.navigateByUrl('')
      }
    )
  }


}
