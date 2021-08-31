import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingDescriptorsService {

  ratings = [
    {
      value: "10",
      url: "https://images.pluto.tv/ratingsymbols/production/BR/10-1600729692589.png"
    },
    {
      value: "12",
      url: "https://images.pluto.tv/ratingsymbols/production/BR/12-1600729692590.png"
    },
    {
      value: "14",
      url: "https://images.pluto.tv/ratingsymbols/production/BR/14-1600729692591.png"
    },
    {
      value: "16",
      url: "https://images.pluto.tv/ratingsymbols/production/BR/16-1600729692593.png"
    },
    {
      value: "18",
      url: "https://images.pluto.tv/ratingsymbols/production/BR/18-1600729692592.png"
    },
    {
      value: "L",
      url: "https://images.pluto.tv/ratingsymbols/production/BR/L-1600729692573.png"
    }
  ];

  ratingDescriptors = [
    {
      value: "br-atos-criminosos",
      displayName: "Atos Criminosos"
    },
    {
      value: "br-conteudo-sexual",
      displayName: "Conteúdo Sexual"
    },
    {
      value: "br-drogas",
      displayName: "Drogas"
    },
    {
      value: "br-drogas-ilicitas",
      displayName: "Drogas Ilícitas"
    },
    {
      value: "br-drogas-licitas",
      displayName: "Drogas Lícitas"
    },
    {
      value: "br-linguagem-impropria",
      displayName: "Linguagem Imprópria"
    },
    {
      value: "br-medo",
      displayName: "Medo"
    },
    {
      value: "br-nao-ha-inadequacoes",
      displayName: "Não há inadequações"
    },
    {
      value: "br-nudez",
      displayName: "Nudez"
    },
    {
      value: "br-procedimentos-medicos",
      displayName: "Procedimentos Médicos"
    },
    {
      value: "br-sexo-explicito",
      displayName: "Sexo Explícito"
    },
    {
      value: "br-temas-sensiveis",
      displayName: "Temas Sensíveis"
    },
    {
      value: "br-violencia",
      displayName: "Violência"
    },
    {
      value: "br-violencia-extrema",
      displayName: "Violência Extrema"
    },
    {
      value: "br-violencia-fantasiosa",
      displayName: "Violência Fantasiosa"
    }
  ];

  constructor() { }

  getDisplayName(rating: string = ''): string {
    const foundIndex = this.ratingDescriptors.findIndex(item => item.value == rating);
    if(foundIndex <= 0) return '';

    return this.ratingDescriptors[foundIndex].displayName;
  }

  getRatingIcon(rating: string = ''): string {
    const foundIndex = this.ratings.findIndex(item => item.value == rating);
    if(foundIndex <= 0) return '';

    return this.ratings[foundIndex].url;
  }

}
