import { LikeComponent } from "./components/like/like.component";
import { Component } from "@angular/core";
import { FavoriteChangedEventArgs } from "./components/favorite/favorite.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  };

  tweet = {
    body: "Here is the body of a tweet...",
    isLiked: false,
    likesCount: 0
  };

  onTweetChanged(changeObj) {
    this.tweet.isLiked = changeObj.isLiked;
    this.tweet.likesCount = changeObj.likesCount;
    console.log(this.tweet);
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }
}
