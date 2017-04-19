import { HomeComponent } from "components/sites/home/home";

export const ROUTES =
[
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'   
    },
    {
        path: 'home',
        component: HomeComponent
    }
];