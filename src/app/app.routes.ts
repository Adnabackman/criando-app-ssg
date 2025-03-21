import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent, 
        path: ""
    },
    {
        component: ExplorePageComponent, 
        path: "explore/:country"
    },
    {
        path: "**", 
        redirectTo: '', 
    }
];
