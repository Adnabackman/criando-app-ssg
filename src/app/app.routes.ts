import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';

export const routes: Routes = [
    {
        component: PostComponent, 
        path: "/user/:userId"
    },
    {
        component: ExplorePageComponent, 
        path: "/explore/:country"
    },
    {
        path: "", 
        redirectTo: '', 
    }
];
