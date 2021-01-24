import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { BlogsModel } from '../Models/BlogsModel';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  id:number=0;
  index:string="";
  blogList:BlogsModel[]=[];
  blogObject:BlogsModel=new BlogsModel();
  validationMsg:string="";
  constructor(private route:Router,private router:ActivatedRoute, private service:BlogServiceService) { }

  ngOnInit(): void {
    if(this.router.snapshot.paramMap!=null){
    this.id=+this.router.snapshot.paramMap.get('id')!;
    this.index!=this.router.snapshot.paramMap.get('index');
    }
    if(this.id!=0){
      let obj=this.service.onGetById(this.id);
      if(obj?.BlogName!="")
      this.blogObject=obj!=undefined?obj:this.blogObject;
    }
  }

  submitForm(){
      if(this.id==0)
      this.service.addBlogsModel(this.blogObject); 
      else
      this.service.updateBlogsModel(this.blogObject,parseInt(this.index));
      this.route.navigateByUrl('bloglist');
  }

  clear(){
    this.blogObject.BlogName="";
    
  }
  


}
