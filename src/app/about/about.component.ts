import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public matricula: String = '0050832011035';
  public nome: String = 'Gabriel Castro';
  public linkGithub: String = 'https://github.com/retr0byte';

  constructor() {}

  ngOnInit() {}
}
