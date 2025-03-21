import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FeedComponent } from '../../components/feed/feed.component';

@Component({
  selector: 'app-explore-page',
  imports: [FeedComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent {
  posts: Post[] = [];
  country: string = "";
  route: any;

  constructor(private httpClient: HttpClient, route: ActivatedRoute) {}
    ngOnInit(): void {
      this.route.paraMap.suqubscribe((params: { get: (arg0: string) => string; }) => {
        this.country = params.get('country');
        if (this.country) {
          this.fetchData(this.country);
        }
      });
    }
    fetchData(countryId: string){
      let countryFormatted = countryId.toLowerCase();
      this.httpClient.get<{ posts: Post[]}> ('https://localhost:3000/explore_${countryFormatted}')  
       .subscribe((data: { posts: Post[]}) => {
        this.posts = data.posts; 
      });
    }
  }
