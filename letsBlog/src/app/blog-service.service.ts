import { Injectable } from '@angular/core';
import { BlogsModel } from './Models/BlogsModel';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  blogs:BlogsModel[]=[{
    BlogName:"First-Blog",
    BlogId:101
  },
  {
    BlogName:"Second-Blog",
    BlogId:102
  }]
  constructor() { }

  getBlogs():BlogsModel[]{
    return this.blogs;
  }

  addBlogsModel(BlogsModel:BlogsModel){
    let blog=this.blogs[this.blogs.length-1]
    BlogsModel.BlogId=blog.BlogId+1;
    this.blogs.push(BlogsModel);
  }

  deleteBlogsModel(id:number){
    let obj=this.blogs.find(x=>x.BlogId==id);
    if(obj!=undefined){
    let index=this.blogs.indexOf(obj);
    this.blogs.splice(index,1);
    }
  }

  onGetById(id:number){
    return this.blogs.find(x=>x.BlogId==id);
  }

 updateBlogsModel(BlogsModel:BlogsModel,index:number){
    let io=this.blogs.find(x=>x.BlogId==BlogsModel.BlogId);
    if(io!=undefined)
    io.BlogName=BlogsModel.BlogName;
     this.blogs[index]=BlogsModel;
  }
}




