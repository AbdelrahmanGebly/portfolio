import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
ngOnInit(): void {
  let links = document.getElementsByClassName('nav-link');
  for(let i = 0; i<links.length; i++){
    links[i].addEventListener('click',function(){
      links[i].classList.add('active');
      for(let j = 0; j<links.length; j++){
        if(j == i) continue;
        else links[j].classList.remove('active');
      }
    });
  }
}
}
