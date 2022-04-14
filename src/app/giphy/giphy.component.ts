import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  constructor(private giphyService:GiphyService) { }
  gifList:any;

  ngOnInit(): void {
   this.giphyService.getGif().subscribe(data=>{
    this.gifList=data;
    })
  }

}
