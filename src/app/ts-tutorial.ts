class invoice {
  id:number;
  customer:string;
  constructor(a:number, c:string) {
    this.id = a;
    this.customer = c;
  }
}

const inv1 = new invoice(12,'dsds');



// ****    *******   GENERICS ********* GENERICS *************** GENERICS ***************
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}
let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne.name);
//******

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: 'shoppingList',
  data: ['bread', 'milk']
};

console.log(docThree, docFour);
