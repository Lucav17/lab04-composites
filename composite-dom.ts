interface IDomElement {
  print();
}


class TextNode implements IDomElement {
  private text:string;
  constructor(text:string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}

class DomElement implements IDomElement {
  name:string;
  text: string;
  elements: IDomElement[];

  constructor(name : string, text?: string) {
    this.name = name;
    this.elements = [];
    this.text = text;
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.name}>`);
    if (this.text) {
      console.log(this.text);
    }
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.name}>`);
  }
}

let em1 = new DomElement("p");
let em2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));

div.add(em1);
div.add(em2);
html.add(div);

html.print();
