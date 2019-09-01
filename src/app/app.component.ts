import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'extends-components-abstract';
  data = {
    title: 'adrian',
    paragraph: "loreasdfas adf asdf asdf asdf asdfasfasd"
  };

  data1 = {
    title: 'walter sdf asdf asdfasd',
    paragraph: "loreasdfas adf asdf asdf asdf asdfasfasd"
  };

  data2 = {
    title: 'chicho chicho',
    paragraph: "aaasfasdfasd asdf asdf asdf asdf asdf asdf"
  };
}
