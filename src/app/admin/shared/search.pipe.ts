import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../shared/interfaces';

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
    transform(post: Post[], search = ''): Post[] {
        if (!search.trim()){
return post
        }
        return post.filter(posts=>{
return posts.title.toLowerCase().includes(search.toLowerCase())
        })
            }

}
