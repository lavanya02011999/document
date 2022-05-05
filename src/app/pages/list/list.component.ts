import { Component, OnInit } from '@angular/core';
import { Documents } from 'src/documents';
import { DocserviceService } from 'src/app/docservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

    documents: any
  constructor(private docServiceService: DocserviceService,
  private router: Router) { } 

  ngOnInit(): void {
    this.getDocuments();
  }

  private getDocuments(){
    this.docServiceService.getval().subscribe(data => {
      this.documents = data;
    });
  }
  updateDocuments(id: number){
    this.router.navigate(['update',id]);
  }
  deleteDocuments(id:number){
    this.docServiceService.delval(id).subscribe(data => {
      console.log(data);
      this.getDocuments();
    })
  }
  uploadDocuments(id: number){
    this.router.navigate(['upload',id]);
  }
}
