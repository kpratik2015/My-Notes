## Dot Net Concepts

### Why dot net ?

Microsoft provides support.
Learning curve reduces due to one environment providing support for multiple tech.
Microsoft introduced disconnected arch. in dot net. That allows data to be copied on client, work on it and then send to server.
Dot Net introduced ASP.NET that allowed compilation instead of previously interpretation.

### COM
Component Object Model (or DLL): Helps reusability. Dot Net solved problem of DLL hell. The problem disallowed use of another app that would override another app's similar object.
COM was restricted to VB, C++. Memory management was also a pain. 
.NET introduced common object runtime i.e. an execution environment for components written in any language.
.NET allowed interoperability in web services.

### Architecture
Bottom to top:
OS																				-		Visual	
Common Language Runtime like JRE					-		Studio
Base Class Library												-		.NET
XML, ASP.NET, windows forms								
Common Language Specification : It allows a different langugae to provide standard for communicate with .NET							
C++, C#, VB (different langugaes of .NET) : Each language will have its own compiler. Below this the components remain same. 

Something to know about: https://www.mono-project.com/

### .NET Core Components

CLR provides an execution engine for managed applications

FCL

### Java v/s .NET

JAVA
- Intermediate lang. is bytecode
- Original design targeted interpretation
- Java VMs with JIT compilation are used

.NET
- Intermediate lang. is MSIL (MSIL is Common Language Specificaiton) [Microsoft Intermediate Language]
- Provides JIT compilation (removes overhead of interpretation

CLR understands CLS and not machine code.

### Common Language Runtime

CLR sits on top of OS to provide a virtual environment for hosting managed applications. Managed applications are those that require CLR.
CLR loads modules containing executable and executes their code.
Code might be managed or unmanaged. - In either case CLR determines what to do with it.
Managed code is written in pseudo machine language.

Physical copy of our code is in MSIL. On running the code, JIT compiler comes in picture and converts to native code.

### Language for .NET

C# since it has strict standards. Like case sensitive. 
Microsoft provides few languages like C++, Visual Basic, and C#. Other languages are from 3rd party.

.NET increases developer productivity by providing type safety, garbage collection and exceptions.


V2.0 and V4.0 are main versions. Since CLR verison changed. In V3.0 WPF, WCF and WF (Windows Workflow foundation) came.
Language Integrated Query (LINQ) came in V3.5

### Visual Studio 2015 Hands on with .NET
One solution in .NET can have multiple projects. E.g. Banking application is solution and then we can have bank website, desktop, etc.
Everything you do in .NET is a class. 

The things in 'using ...' do not have physical folders like java. They are namespace.
Namespace is a collection of namespaces and classes. E.g. Linq is a namespace inside System namespace.

Red color : method to echo back something
Blue color : keyword / class

Console.ReadLine(); will wait even if you start in debugging.

Use F10 to debug step by step.

On pressing F10, when reached function. If you press F11, then it will debug the function.

Breakpoint will execute code till that point and then start debugging.

### Basic Coding
```
string myname = "Pratik";
string greet = "Wassup?";
Console.WriteLine("Hello {0}! {1}", myname, greet);
Console.ReadLine();
string msg = string.Format("How is .NET {0}. And {1}", myname, greet);
Console.WriteLine(msg);
```
Developer command prompt inside visual studio tools. Type command: ildasm 
It's integrated language disassembler
Any compiled file is assembly.
mscorlib is MS file that has all namespaces stored.
.ctor is constructor in IL code.
S on icon denotes static.

### Memory

Data segment
Code segment
Heap
Stack : declared variables stored here.

Objects will always point to the heap.
E.g. 
```
object o;
int x = 20;
o = x; // object will create copy and point to heap
Console.WriteLine(o);	// 20
x = 30;	
Console.WriteLine(o);	// 20
```
In object we can store anything. It's called as boxing. A scalar value you can box in object.
Object is advantage to a certain extent as we can store any variable type in it. However, if we do for i 1..1000 o = x; It will create 1000 copies that will decrease performance.

Unboxing: reverse of boxing. int y = Convert.ToInt32(o);

Generics was then introduced to solve problems with object.

### Pass by reference 2 ways:
```
swap(ref a, ref b);
calc(a, b, out c, out d);
public static void calc(int p, int q, out int r, out int s)
{
    r = p + q;
    s = p * q;
}

public static void swap(ref int x, ref int y)
{
    x = y + -x + (y = x);
}
```
### Generics 
```
string name = "Pratik";
string city = "Pune";
NewSwap(ref name, ref city);
Console.WriteLine("name = {0}, city = {1}", name, city);
public static void NewSwap<T>(ref T x, ref T y)
{
  T z = x;
  x = y;
  y = z;
}

```
### Internal v/s public

internal class can be used inside assembly and not outside. 
assembly is the .exe/dll.
The internal access specifier hides its member variables and methods from other classes and objects, that is resides in other namespace. The variable or classes that are declared with internal can be access by any member within application. It is the default access specifiers for a class in C# programming.

### Getter and setter
```
public string Name
{
		get
		{
				return name;
		}

		set
		{
				name = value;
		}
}

string name;
```
To get this done automatically for a property. Right click on property name and click on Quick Action and refactoring.

Getters and Setters help us to perform checks or formatting or other things. This is why they are used.

Auto implementation: public string Name { get; set; }

### Constructor
```
public Employee()
{
		// Constructor
		Empno = 1234;
		Name = "Pratik";
		Dept = "IT";
		Salary = 66667;
}

// In void main:
// OLD: Employee emp1 = new Employee();
// NEW:
Employee emp2 = new Employee { Name="Bob", Empno = 4321 };
```
We can have a static constructor. It increments static variable whenever class instantiated.
Note: static method is for using static variables.

### To make a class not be a base class for some child class i.e. stop inhertiance. We use sealed keyword before class

### DLL

Most of the time in DLL there are no print statements i.e. writeline. And 80% of the time DLL is constructed.
We can create it using class library option from New of Visual Studio.

Then in executable file with static void main() we do:
using DllName;
ClassNameInDLL obj = new ClassNameInDLL();
obj.method();

#### There are 2 concepts in Assembly:
- Private
- Shared : can be shared by multiple projects. This reduces copies generated of DLLs.

Global Assemlby Cache (GAC) has all the shared DLLs. Location: C:\Windows\assembly

An example on key: Bank locker. It opens up only after your own key and the key with banker is inserted at same time.
So with public key concept in dll, it secures against same name dll being inserted.

#### Sn utility creates a key and then we can put in our project. It gets combined. Thus, making the dll strong.

You gotta publish the dll to GAC after public key combining.

The public key will be used to encrypt the hidden private key.

gacutil will put DLL in GAC area. (this isn't mandatory)

Proper command: gacutil /i calc.dll

### Delegates

Delegate helps to propagate the functioning to a method. Where the method is present is not known so we use delegate.
If we want to store a reference to function name then we use delegate.
It helps to fill in the blanks.
Another main thing is Events.

Example:
```
MyMaths mm = new MyMaths(); // class which has add method
MyDelegates.CalcDelegate cd = new MyDelegates.CalcDelegate(mm.add); // MyDelegates class has CalcDelegate
int x = cd(10, 40);
Console.WriteLine("Addition: {0}", x);
int x = cd(10, 40);
Console.WriteLine("Addition: {0}", x);
cd = new MyDelegates.CalcDelegate(mm.multiply);
Console.WriteLine("Multiplication: {0}", cd(3, 9));
Console.ReadLine();
```

#### Multicase delegate

One delegate is associated with multiple things. 
Doesn't work if both functions return in below example.
E.g.
```
MyDelegates.CalcDelegate cd = new MyDelegates.CalcDelegate(mm.add);
cd += new MyDelegates.CalcDelegate(mm.diff);
```

#### Delegate inside function

E.g.
```
class MyDelegates
{
		public delegate int CalcDelegate(int x, int y);
		public delegate void TopDelegate(string name);
		public void MakePizza(TopDelegate td, string name)
		{
				Console.WriteLine("Today is Friday");
				Console.WriteLine("Month is July");
				Console.WriteLine("-------");
				td(name);
				Console.WriteLine("-------");
				Console.WriteLine("Year is 2018");
				Console.WriteLine("Its Raining");
		}

}

 class TestDelegate
{
	public static void Main()
	{
			MyDelegates.TopDelegate td = new MyDelegates.TopDelegate(CheeseTop);
			MyDelegates md = new MyDelegates();
			md.MakePizza(td, "Tom");
			Console.ReadLine();
	}

	private static void CheeseTop(string name)
	{
			Console.WriteLine("This is Cheese Topping");
			Console.WriteLine("We are using Mozerala Cheese");
			Console.WriteLine("Thank You!");
	}
}
```


_Note: Another way to use variable in print - Console.WriteLine($"Thank You {name}");_

### Events

Why use Events or publish / subscribe?
Any number of classes can be notified when an event is raised.

At the most basic conceptual level, Events are what let the computer react to what you do, rather than you being required to react to what the computer does

1. Declare Event (Class level)
2. Raise Event: raising event on some condition (Class level)
3. Handle Event: like where to display a message (User/Client level)

E.g.
```
class Products
{
		public int Pno { get; set; }
		public string Pname { get; set; }
		public int Stock { get; set; }
		public delegate void StockHandler(string msg);
		// StockChange is event name. 
		// When the event is raised, it will execute the delegated method StockHandler
		public event StockHandler StockChange; 
		public void AddQty(int qty)
		{
				if(StockChange != null)			// This is important
					StockChange("Stock had changed");
				Stock += qty;
		}
}
    
class TestEvent
{
	public static void Main()
	{
	    Products pd = new Products { Pno = 101, Pname = "Monitor", Stock = 300 };
			// Immediately after object is created. The object has to subscribe to the event to get the message.
			pd.StockChange += Pd_StockChange; // press TAB after += to get auto insertion of handling event (subscribing)
	    pd.AddQty(50);
	    Console.WriteLine($"Stock = {pd.Stock}");
	    Console.ReadLine();
	}
	
	private static void Pd_StockChange(string msg)
	{
			Console.WriteLine(msg);
	}
}
```

Events can be raised in constructor, properties and methods.
Event of parent class cannot be raised in derived class.
