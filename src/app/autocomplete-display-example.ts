import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Operadores, Tokens } from "./formula-tokens";

export interface User {
  name: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: "autocomplete-display-example",
  templateUrl: "autocomplete-display-example.html",
  styleUrls: ["autocomplete-display-example.css"]
})
export class AutocompleteDisplayExample implements OnInit {
  myControl = new FormControl();
  actualGroup: string;

  ngOnInit() {}

  mentionConfig = {
    triggerChar: " ",
    returnTrigger: true,
    mentionSelect: a => this.select(a)
  };

  getItens(): string[] {
    if (!this.actualGroup || this.actualGroup === "") {
      return Tokens.empty;
    } else {
      return Tokens[this.actualGroup];
    }
  }

  select(arg: any) {
    let valor = arg.label;
    let keys = Object.keys(Tokens);
    let grupo = keys.filter(
      c => c !== "empty" && Tokens[c].some(a => a === valor)
    )[0];
    this.actualGroup = grupo;
    console.log(grupo);
    return arg.label;
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
