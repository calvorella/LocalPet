import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario{
  email: string;
  senha: string;
}

@Component ({
  selector: 'app-tela1',
  templateUrl: 'tela1.page.html',
  styleUrls: ['tela1.page.scss'],
})
export class Tela1Page {
  public listUsuarios: Array<Usuario> = [];
  public mensagem: string;
  public vemail: string;
  public vsenha: string;

  constructor(private router: Router) {
    this.listUsuarios = [
      {
        email: 'brunobarbosa@gmail.com',
        senha: '123'
      },
      {
        email: 'micaelfipino@gmail.com',
        senha: '321'
      },
      {
        email: 'localpet@gmail.com',
        senha: '123'
      },
      {
        email: 'seginhobomdebola@gmail.com',
        senha: '999'
      }
    ];
    }
       autenticar(){
         let achou = false;
         for( const usuario of this.listUsuarios){
           if(this.vemail === usuario.email && this.vsenha === usuario.senha){
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
       this.router.navigate(['forum']);
      }
    }

