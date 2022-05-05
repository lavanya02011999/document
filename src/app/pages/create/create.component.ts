import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { DocserviceService } from 'src/app/docservice.service';
import { Documents } from 'src/documents';



@Component({
  selector: 'app-upload',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public documents:Documents= new Documents();

  docName!: string;
  fileData: any;
 
 public doc!:Documents[];
  constructor(private docservice:DocserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getdata();
  }
onsubmit(){
  console.log(this.documents)
  this.addval()
}
 addval(){
   this.docservice.addval(this.documents).subscribe(data=>{
    console.log(data)
      this.documents=new Documents();
        this.route.navigate(['/list']);
      
  },
   error=>console.log(error))
}

public onFileChange(event:any) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    this.docName = event.target.files[0].name;
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem(this.docName, reader.result as string);
      // console.log(fileData);
      console.log(this.docName);
      // console.log(reader.result);
      this.documents.docName=this.docName
    };
  }
}

getdata(){
  this.docservice.getval().subscribe(data=>{
    this.doc=data
    console.log(data)
  })
}


  
}