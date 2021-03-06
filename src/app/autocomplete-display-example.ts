import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDictionary, Relacoes, RelationConfig, Tokens } from './formula-tokens';

export interface User {
  name: string;
}

const whenEmpty = ['numerico', 'logico', 'negacao'];
/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'autocomplete-display-example',
  templateUrl: 'autocomplete-display-example.html',
  styleUrls: ['autocomplete-display-example.css']
})
export class AutocompleteDisplayExample implements OnInit {

  mentionConfig = {
    triggerChar: ' ',
    returnTrigger: true,
    mentionSelect: (a: any) => this.select(a)
  };
  myControl = new FormControl();

  allowedGroups: string[] = whenEmpty;
  public operation = '';
  inIf = false;
  inParentesis = false;
  inBrackets = false;
  existingArrays: IDictionary<number> = {};

  ngOnInit() { }


  getItens(): string[] {
    let allowedTokens: string[] = [];
    this.allowedGroups.forEach(c => allowedTokens = allowedTokens.concat(Tokens[c]));
    return allowedTokens;
  }

  select(arg: any) {
    const valor = arg?.label;
    const keys = Object.keys(Tokens);

    const grupo = keys.filter(
      c => c !== 'empty' && Tokens[c].some(a => a === valor)
    )[0];

    this.allowedGroups = this.relationMap(grupo);
    console.log(grupo);
    return valor;
  }

  relationMap(grupo: string) {
    let grupos: string[] = [];

    Relacoes.forEach(c => grupos = grupos.concat(this.nextRelation(c, grupo)));

    return grupos.length > 0 ? grupos : whenEmpty;
  }

  nextRelation(relation: RelationConfig, grupo: string): string[] {
    if ((!this.inIf) && (relation.name === 'senao')) {
      return [];
    }
    if (relation.name === grupo) {

      if (relation.name === 'se') {
        this.inIf = true;
      }

      this.operation = grupo;
      return [relation.right];
    } else {
      this.operation = '';
    }
    if (relation.left === grupo) {
      return [relation.name];
    }
    if ((relation.name === this.operation) && (relation.right === grupo)) {
      return this.relationMap(relation.result);
    }
    return [];
  }
}
