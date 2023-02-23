import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:any;
  constructor(private _servers:ServerService) { }

  ngOnInit(): void {
    this.servers = this._servers.getServers();
    console.log(this.servers);
  }

}
