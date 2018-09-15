import { PostService } from "./../../services/post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response.json();
      }
      // ,
      // error => {
      //   alert("An unexpected error occured.");
      //   console.log(error);
      // }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";
    this.service.createPost(post).subscribe(
      response => {
        post["id"] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        if (error.status === 400) {
          // If there were a form here, we could pass an error like this:
          // this.form.setErrors(error.json());
        } else {
          alert("An unexpected error occured.");
          console.log(error);
        }
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response.json());
      }
      // ,
      // error => {
      //   alert("An unexpected error occured.");
      //   console.log(error);
      // }
    );
  }

  deletePost(post) {
    // To test alert error
    // this.service.deletePost(345)
    this.service.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("This post has already been deleted.");
        } else {
          throw error;
        }
      }
    );
  }
}
