import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { FeedComponent } from '../../components/feed/feed.component';

@Component({
  selector: 'app-home-page',
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
      
  }
    fetchData(){
      this.httpClient.get<{ posts: Post[]}> ('https://localhost:3000/friends')
       .subscribe((data: { posts: Post[]}) => {
        this.posts = data.posts; 
      });
    }
  }
