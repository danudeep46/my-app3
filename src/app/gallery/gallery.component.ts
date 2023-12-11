import { Component } from '@angular/core';
import { GallerysService } from '../gallerys.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  
public galary:any=[];
  
constructor(private _galaryService:GallerysService){
_galaryService.getUsers().subscribe(
  (data:any)=>{
    this.galary=data.data.memes;
  },
  (err:any)=>{
    alert("Internal Server Error");
  }
)
}


}
