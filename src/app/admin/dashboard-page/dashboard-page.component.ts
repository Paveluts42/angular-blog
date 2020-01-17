import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../shared/post.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
    post: Post[] = [];
    pSub: Subscription;
    dSub: Subscription;
    searchStr = '';

    constructor(
        private postsService: PostService,
        private alert: AlertService
    ) {
    }

    ngOnInit() {
        this.pSub = this.postsService.getAll().subscribe(posts => {
            this.post = posts;
        });
    }

    remove(id: string) {
        this.dSub = this.postsService.remove(id).subscribe(() => {
            this.post = this.post.filter(posts => posts.id !== id);
            this.alert.warning('post be delete');
        });
    }

    ngOnDestroy() {
        if (this.pSub) {
            this.pSub.unsubscribe();
        }
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    }

}
