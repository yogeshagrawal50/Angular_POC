import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  serverId:number;
  server:any;
  serverName:string;
  serverStatus:any;
  constructor(private _activatedRoute:ActivatedRoute, private _server:ServerService, private router:Router) { }
  allowEdit:any;
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((queryParams:Params)=>{
      this.allowEdit = queryParams['edit'] === 'true' ? true: false;
    });
    this.serverId = +this._activatedRoute.snapshot.params['id'];
    this.server = this._server.getServer(this.serverId);
    console.log(this.server);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer(){
    this._server.updateServer(this.serverId,{name:this.serverName, status:this.serverStatus});
    this.router.navigate(['../'],{relativeTo:this._activatedRoute});
  }

  canDeactivate(){
    if(this.serverName !== this.server.name || this.serverStatus !== this.server.status){
      return confirm('do you want to discard your changes?');
    }
    return true;
  }

}
