import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocserviceService } from 'src/app/docservice.service';
import { Documents } from 'src/documents';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!:number;
  documents:Documents=new Documents();

 
  fileName!: string;
  fileData: any;
 
  constructor(private docservice:DocserviceService, private activateRoute:ActivatedRoute,private router:Router) { }


  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    this.docservice.getvalbyid(this.id).subscribe(data=>{
      this.documents=data;
    },error=>console.log(error));
    }


   onSubmit(){
    this.docservice.updateval(this.id,this.documents).subscribe(data=>
      {
        this.gotoList();
      },
      error=>console.log(error));
   }

   gotoList(){
    
      this.router.navigate(['/list']);
    
   }

   public onFileChange(event:any) {
    const reader = new FileReader();
  
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        localStorage.setItem(this.fileName, reader.result as string);
        console.log(this.fileName);
        this.documents.docName=this.fileName
      };
    }
  } 

}

