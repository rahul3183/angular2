import { Component} from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'hs',
  template: `
            <input
            (keyup.enter) = "createPost(title)" #title
            type = "text"
            class = "form-control">
            
            <ul class="list-group">
            <li
            *ngFor="let post of posts"
            class="list-group-item">

                <button
            (click)="updatePost(post)"
            class="btn btn-info btn-sm">Update</button>

            <button
            (click)="deletePost(post)"
            class="btn btn-danger btn-sm">Delete</button>
            {{post.title}}
</li>
                <br>
                <h3>Comments</h3><br>

                <input
            (keyup.enter) = "createComments(email)" #email
            type = "text"
            class = "form-control">

            <li
            *ngFor="let comment of comments"
            class="list-group-item">

             <button
            (click)="updateComments(comment)"
            class="btn btn-info btn-sm">Update</button>

            <button
            (click)="deleteComments(comment)"
            class="btn btn-danger btn-sm">Delete</button>
            {{comment.email}}

            

            
            </li>
            </ul>


  `
})
export class HTTPServiceComponent {

posts: any[];
comments: any[];

constructor(private http: Http)
{
  http.get('http://jsonplaceholder.typicode.com/posts')
  .subscribe(response => {
    console.log(response.json());
    this.posts = response.json();

  });

  http.get('http://jsonplaceholder.typicode.com/comments')
  .subscribe(response => {
    console.log(response.json());
    this.comments = response.json();

  });

}

    createPost(title: HTMLInputElement) {
    let post = {title : title.value};
    title.value = '';

    this.http.post('http://jsonplaceholder.typicode.com/posts' ,JSON.stringify(post))
    .subscribe(response => {
    post['id'] = response.json().id;
    this.posts.splice(0,0,post)

    });

    }

    createComments(email: HTMLInputElement) {
    let comment = {email : email.value};
    email.value = '';

    this.http.post('http://jsonplaceholder.typicode.com/comments' ,JSON.stringify(comment))
    .subscribe(response => {
    comment['id'] = response.json().id;
    this.comments.splice(0,0,comment)

    });

    }

    updatePost(post){
    this.http.patch('http://jsonplaceholder.typicode.com/posts' + '/' + post.id, JSON.stringify
    ({isUpdate : true}))
    .subscribe(response => {
    console.log(response.json());

    });

    }

    updateComments(comment){
    this.http.patch('http://jsonplaceholder.typicode.com/comments' + '/' + comment.id, JSON.stringify
    ({isUpdate : true}))
    .subscribe(response => {
    console.log(response.json());

    });

    }

    deletePost(post){
    this.http.delete('http://jsonplaceholder.typicode.com/posts' + '/' + post.id)
    .subscribe(response => {
    let location = this.posts.indexOf(post);
    this.posts.splice(location, 1);

    });

    }

    deleteComments(comment){
    this.http.delete('http://jsonplaceholder.typicode.com/comments' + '/' + comment.id)
    .subscribe(response => {
    let location = this.comments.indexOf(comment);
    this.comments.splice(location, 1);

    });

    }


  
}


