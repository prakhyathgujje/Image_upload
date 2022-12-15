import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url='/assets/img/temp.png'
  title = 'server-check';
  selectedFile:any;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    
  }
  onFileSelected(e:any){
    if(e.target.files){
    //   this.selectedFile=<File>e.target.files[0];
      var read = new FileReader();
      console.log(e);
      read.readAsDataURL(e.target.files[0]);
      read.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  uploadImg(){
    const fd= new FormData();
    fd.append('image', this.selectedFile.name);
    // this.selectedFile.name
    this.http.post('./assets/img/',fd).subscribe(res=>{console.log(res)});
  }
}
