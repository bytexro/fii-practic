function ConstructorFunction() {
  this.message = 'hello World';

  this.showMessage = () => {
    console.log(this.message);
  }
}

let ArrowFunction = () => {
  this.message = 'hello World';

  this.showMessage = () => {
    console.log(this.message);
  }
}

let constructorFunctionInstance = new ConstructorFunction();

let arrowFunctionInstance = new ArrowFunction(); 
// will throw an error
// arrowFunctionInstance is undefined

constructorFunctionInstance.showMessage(); 
// will print 'hello world'

arrowFunctionInstance.showMessage(); 
// will throw an error 
// Uncaught ReferenceError: arrowFunctionInstance is not defined