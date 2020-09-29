import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { NoticeComponent } from './notice/notice.component';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';
import { ReminderComponent } from './reminder/reminder.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'messages',
    component: MessageComponent,
  },
  {
    path: 'notifications',
    component: NotificationComponent,
  },
  {
    path: 'notices',
    component: NoticeComponent,
  },
  {
    path: 'reminders',
    component: ReminderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonAdminRoutingModule {}
