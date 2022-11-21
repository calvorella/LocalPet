import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario{
  nome: string;
  email: string;
  senha: string;
  localizacao: string;
}

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page {
  public listUsuarios: Array<Usuario> = [];
  public mensagem: string;
  public vemail: string;
  public vsenha: string;
  public vlocalizacao: string;
  public vnome: string;


  constructor(private router: Router) {
    this.listUsuarios = [
      {
        nome: 'gilson',
        email: 'gilsonsantos@gmail.com',
        senha: '123',
        localizacao: 'Lorena'
      },
      {
        nome: 'gilson',
        email: 'localpet@gmail.com',
        senha: '123',
        localizacao: 'Lorena'
      },
    ];
    }
    autenticar(){
      let achou = false;
      for( const usuario of this.listUsuarios){
        if(this.vemail === usuario.email && this.vsenha === usuario.senha
         && this.vnome === usuario.nome && this.vlocalizacao === usuario.localizacao){
          achou = true;
          break;

        }
      }
      if(achou === false) {
       this.mensagem = '';
    }else{
      this.entrar();
      }
    }

    entrar(){
    this.router.navigate(['tela1']);
   }
 }



