import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {


  new: any;
  image: string;

  constructor(private newsService: ApiService, private router: Router, private route: ActivatedRoute ) {

    // get a new
    const id = +this.route.snapshot.paramMap.get('id');
    this.newsService.getOneNew(id).subscribe(
        resp => {
        // tslint:disable-next-line:no-string-literal
        this.new = resp;
        // tslint:disable-next-line:quotemark
        this.image = "new._embedded['wp:featuredmedia']['0'].source_url";
        console.log(this.new);
  });

}

}
