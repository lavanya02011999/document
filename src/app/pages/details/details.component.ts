import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Documents } from 'src/documents';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number;
  documents: Documents;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

  

}
