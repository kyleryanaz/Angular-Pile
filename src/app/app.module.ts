import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ErrorHandler } from "@angular/core";
import { AppComponent } from "./app.component";
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { LikeComponent } from "./components/like/like.component";
import { InputFormatDirective } from "./input-format.directive";
import { ZippyComponent } from "./components/zippy/zippy.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { CourseFormComponent } from "./components/course-form/course-form.component";
import { SignupFormComponent } from "./components/signup-form/signup-form/signup-form.component";
import { NewCourseFormComponent } from "./components/new-course-form/new-course-form.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostService } from "./services/post.service";
import { AppErrorHandler } from "./common/app-error-handler";

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FavoriteComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
  providers: [
    PostService,
    // "Wherever you are using ErrorHandler, use this new class"
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
