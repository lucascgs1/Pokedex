export class Paginacao {
  constructor() {
    this.count = 0;
    this.next = "";
    this.previous = "";
    this.results = [];
  }
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
