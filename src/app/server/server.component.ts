import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number;
  servers:any;
  server:any;
  constructor(private _activatedRoute:ActivatedRoute, private _server:ServerService, private router:Router) { }

  ngOnInit(): void {
    // this.serverId = +this._activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.serverId);
    // this.server = this._server.getServers().find((x)=> x.id === this.serverId);
    // console.log(this.server);

    this._activatedRoute.paramMap.subscribe((param)=>{
      this.serverId = +param.get('id');
      this.server = this._server.getServer(this.serverId);
    })

  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this._activatedRoute, queryParams:{edit:this.server.edit}});
  }

}
