# Clean Code

"Good code matters" - Kent Beck

Productivity is highest at the start of project as there's no other code to impede progress. Later on a feature addition could take months. Productivity v/s Time rollercoaster.

Zeno's paradox. Big redesigns don't tend to do well. The only way to go fast is to go well. Bad code tends to slow you down in minutes.

## What is Clean Code?

- "I like my code to be elegant and efficient... clean code does one thing well." - Bjarne Stroustrup
  - Cohesion
  - The problem with one thing is it's subjective concept. However, there is a way to make it objective.
- "Clean code is simple and direct. Clean code reads like well-written prose..." - Grady Booch
- "Clean code always looks like it was written by someone who cares." - Michael Feathers
- "You know you 're working on clean code when each routine you read turns out to be pretty much what you expected..." - Ward Cunningham
- Code is read much more than it's written. Just play back an edit session...
- "Any fool can write coe that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
- If given a code that can be understood but not working then it can be made workable.
- Leave the campground cleaner than you found it.

[Original Wiki](http://c2.com/)

**Code Review**

- You don't want functions to have a noun name. We want functions to have a verb name as they do things.
- Java makes things redundant so can't complain about that. `WikiPage wikiPage = pageData.getWikiPage()`
- Don't take your reader from highest level of concept in code to low level like StringBuffer or null check.
- Humans are not good with interruptions or concept breaks. We want something that takes us from one concept to another gradually.
- First make it work, then make it right and then make it fast & small.
- Most important aspect of writing code is sleep.
- Parameterized tests are good when you wanna check against a lot of data points. It's not necessary for clean test.
- You should have a suite of tests that checks foreign code.
- TDD doesn't create clean code by default.

**The Rules of Functions**:

- They should be small.
- They should be smaller than that.
- Functions should not be 100 lines long.
- Functions should hardly ever be 20 lines long.
- Such function is polite as it lets you out quickly.
- We should write functions like articles. High level concepts first i.e. like abstract, and low level concepts below.

**Do One Thing**

- A powerful IDE would have extract function option.
- A function does one thing if you cannot extract another meaningful function out of it.
- There's a function call in if statement, there's a function call in else... The function names can get pretty long.

**No more than three arguments**

- `n!` ways of getting wrong a function call.
- Same rule for constructor. Use Setters instead.
- The languages that support function calls to have keyword arguments or passing in a hash table, they can have more arguments as they're named.

**Output Arguments**

- Harder to understand than input arguments.
- We're used to the idea of information going to the function through arguments and out through the return value.

If you've things cohesive enough then you can pass them together in an object to function.

**Schindler's List**

- Nothing can be quite so helpful as a good comment.
- Nothing can be quite so obscuring as a bad comment.
- Comments are not "pure good".

**Comments are a last resort**

- The proper use of comments is:
  - To compensate for our failure to express ourselves in code.
- Every use of a comment represents a failure.
  - So don't comment first. Try everything else, then comment as a last resort.

**Comments Lie**

- Not always
- Not intentionally
- But they silently not
- They migrate

**Good Comments/Acceptable**

- Legal Comments
- Informative Comments

```
// format matched hh:mm:ss EEE, MMM dd, yyyy
// Pattern timeMatcher = pattern.compile(...);
```

- Explaination of Intent

  - `compareTo` takes an object and then we can check for right type. There are 2 right types: 1 & -1.
  - // this is our best attempt to get a race condition

- Warning of Consequences

```
// SimpleDateFormat is not thread safe, so we need to create each instance independently.
```

This is surprising for a language that is suppose to handle web. Since there's a static variable in SimpleDateFormat if you're not careful it can be bad

- Amplification

  - The `trim()` is important here for so & so reason. Such comment is important because trim is done frequently without serving a purpose

- JavaDocs in PUBLIC APIs

**Bad Comments**

- Mumbling
  - A comment in catch which is empty
- Redundant comments
  - Code is easier to read than comment
- Misleading comments
- Mandated comments
- Journal comments
- Noise comments
- Scary noise i.e. comments for every variable
- Position Markers
- Attributions and ByLines. Don't put bug number.
- Commented-Out Code
  - Source Code control systems are there for this. Just put a tag and tell it's here if needed.
- Non-Local information
  - Comments that specify information that has been done somewhere else
- Too much information

Don't need to put I infront of interface name. User is not suppose to know he is using an interface - you're suppose to be hiding that. You can prefix or suffix class names of implementation.

Every large function is hiding a class inside it.

Don't pass boolean in function. Extract into 2 functions.

CRP metric - takes code coverage of a function and mixes with cyclomatic complexity.

Mutation Testers
