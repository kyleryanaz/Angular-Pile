import { Http } from "@angular/http";
import { Component } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent {
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";
    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      // console.log(response.json());
      post["id"] = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }
}
