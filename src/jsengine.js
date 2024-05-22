//js can run any where in your browser,watch,mobile,robots etc
//for js to run in all of these we need javascript runtime environment
//and jsre contains js engine, web apis(it can differ with each jsre and for ex :localstorage,settiemout,console),callback queue,microstack queue,event loop
//we can create our own jsre by following ecmascript standards
//js engine is heart of jsre
//there are many js engines
//mozilla firefox ---spider monkey js engine
//google --v8 engine
//v8 engine is writtrn in c++
//it takes code as input and produces machine level code which can be executed by machime
//how js engine works?
//code---parsing---compilation---execution
//1)every piece of code is converted into tokens
//2)there is something called sytax parser which will convert the code into AST (abstract syntax tree)
//checkout astexplorer.net
//3)compilation and execution stage
//4)AST is passed on to the interpreter and byte level code is executed and sent to execution
//5)interpreter will take help of compiler to make the code efficient
//6)execution phase has 2 major components (memory heap and call stack)
//memory heap is where all the memory is stored
//it is constantly in sync with call stack and garbage collector
//memory heap is where all the functions and variables are assigned memory
//garbage collector will try to free up the memory space when ever possible
//gc uses mark and sweep algorithm
//interpreter code --will execute line by line without knowing what happens in next line --fast
//compiler code --will compile everything and will give optimised version of code--efficiency

//js is compiler and interpreter language and depends on js engine
//JIT compilation
//js engine has memory heap and call stack and garbage collector
//mark and sweep algorithm
//inlining,copy elision,inline caching
//every browser has different engines and google v8 engine is fastest
//initially tokens are generated and parsing happend and sends AST will be passed on to compilation and byte code is sent to execution

//Call Stack operates in LIFO Mode (Last In First Out)
//inside call stack gec is created
//call stack basically tels in what order we have to run our code
