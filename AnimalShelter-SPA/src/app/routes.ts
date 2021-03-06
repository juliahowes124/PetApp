import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { RehomeComponent } from './rehome/rehome.component';
import { LoginComponent } from './login/login.component';
import { AnimalListComponent } from './animals/animal-list/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animals/animal-detail/animal-detail.component';
import { AnimalDetailResolver } from './_resolvers/animal-detail.resolver';
import { AnimalListResolver } from './_resolvers/animal-list.resolver';
import { YourAnimalsComponent } from './your-animals/your-animals.component';
import { YourAnimalsResolver } from './_resolvers/your-animals.resolver';
import { AnimalEditComponent } from './animals/animal-edit/animal-edit.component';
import { AnimalEditResolver } from './_resolvers/animal-edit.resolver';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { SavedAnimalsComponent } from './animals/saved-animals/saved-animals.component';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MessageThreadComponent } from './message-thread/message-thread.component';
import { MessageThreadResolver } from './_resolvers/message-thread.resolver';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard], resolve: {messages: MessagesResolver}},
            // tslint:disable-next-line: max-line-length
            { path: 'message-thread/:id/:recipientId', component: MessageThreadComponent, canActivate: [AuthGuard], resolve: {messages: MessageThreadResolver}},
            { path: 'your-animals', component: YourAnimalsComponent, canActivate: [AuthGuard], resolve: {animals: YourAnimalsResolver}},
            { path: 'animal/edit/:id', component: AnimalEditComponent, canActivate: [AuthGuard], resolve: {animal: AnimalEditResolver}},
            { path: 'user-edit', component: UserEditComponent, canActivate: [AuthGuard], resolve: {user: UserEditResolver}},
            { path: 'saved-animals', component: SavedAnimalsComponent, canActivate: [AuthGuard], resolve: {animals: AnimalListResolver}}
        ]
    },
    { path: 'animals/:id', component: AnimalDetailComponent, resolve: {animal: AnimalDetailResolver}},
    { path: 'animals', component: AnimalListComponent, resolve: {animals: AnimalListResolver}},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'rehome', component: RehomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

