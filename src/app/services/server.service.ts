import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
      edit:'false'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
      edit:'true'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
      edit:'false'
    }
  ];

  constructor() { }

  getServers(){
    return this.servers;
  }
  getServer(id:number){
    const server = this.servers.find((s)=>{
      return s.id === id;
    });
    return server;
  }
  updateServer(id:number, serverInfo:{name:string, status:string}){
    const server = this.servers.find((x)=>{
      return x.id === id;
    });
    if(server){
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
