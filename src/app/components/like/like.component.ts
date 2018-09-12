import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"]
})
export class LikeComponent implements OnInit {
  @Input("likesCount")
  likesCount: Number;
  @Input("isActive")
  isActive: Boolean;
  @Output("change")
  click = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount = this.isActive ? 1 : 0;
    this.click.emit({ isLiked: this.isActive, likesCount: this.likesCount });
  }
}
