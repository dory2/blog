import { Component, Input, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { BlogsModel } from '../Models/BlogsModel';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() blogList:any;
 // @Input() totalCount;
  blogsList:BlogsModel[]=[];
  constructor(private blogService:BlogServiceService) {
      this.blogsList=this.blogService.getBlogs();
   }

   deleteBlog(id:number){
      this.blogService.deleteBlogsModel(id);
   }

  ngOnInit(): void {
  }

}
