var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "prefaceX",
  "level": "1",
  "url": "prefaceX.html",
  "type": "Preface",
  "number": "",
  "title": "Preface: To the student",
  "body": " Preface: To the student  This book is designed for students pursuing a career in early childhood or elementary education. Its aim is for you to understand the mathematics you will teach to your students.  When teaching, you should understand the topic more deeply than your students. This is for many reasons. One is that later learning builds on earlier education, and you need to know where students are going to better prepare them. This is especially the case in mathematics education, due to the cumulative nature of the discipline. Another reason is that you will occasionally get advanced students who quickly pick up the material and want more. You want to know enough to be able to guide them to further self-study. Yet another reason is that methods and fads in pedagogy change over time. A deeper understanding of the material enables you to better adapt to these changes and see how they are new looks at the same concepts.  For these reasons, this book is not organized the same as the elementary mathematics curriculum. Instead, chapters are broken up by topic, with each chapter covering material that is spread across multiple years in an elementary school. The goal is for you to understand the unifying mathematical concepts and see how topics across multiple years are aspects of a larger pattern.   is an introduction covering how to read mathematics and how to think about problem solving. The next chapters are organized around different number systems. introduces the natural numbers , those numbers used for counting. then covers how to write natural numbers and how to do arithmetical calculations with them, and goes into a different perspective on the natural numbers. In expand the natural numbers to build the integers , then the rational numbers in and the real numbers in .  "
},
{
  "id": "prefaceX-5",
  "level": "2",
  "url": "prefaceX.html#prefaceX-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers integers rational numbers real numbers "
},
{
  "id": "sec0-howto",
  "level": "1",
  "url": "sec0-howto.html",
  "type": "Section",
  "number": "0.1",
  "title": "Reading mathematics",
  "body": " Reading mathematics  Mathematics is a specialized genre. Reading a mathematics textbook like this one as such requires knowing some conventions for how mathematicians write. The key thing underlying all these conventions is, mathematics is a discipline that requires precision.  Probably the best known quirk of mathematicians is the tendency to use letters to refer to numbers. While this quirk is a hurdle for many when they first see it, its purpose is simple. It's convenient to have names to refer to things. You might, as with the word problems in , want to determine the value of some quantity. To do this, you can write an equation which describes the quantity and use rules of algebra to solve for it. For this repeated symbol pushing it's nice to have a short name. You could call it many different things—Fred, question mark, smiley face, whatever—but convention in mathematics is to use a single letter.  Indeed, it can be useful to use names even if you know the value of a quantity. For example, we know the circle constant is approximately , and rather than writing all that out it's easier to just call it .  Mathematicians call these names variables . While numbers are where students first see variables, they're also used for any kind of mathematical object—from shapes and sets to complex manifolds. There's a few different phrases that are used to give names to mathematical objects. What they all have in common is, they have to say what the variable is, that is what letter is being used, and they have to say what object is being named. Here are a few examples.  Let be… This can be quite specific, like let be the height of the flag pole or it could say as little as let be a number , depending on what's appropriate for the context.   Consider a positive distance . Here you're told the name ( ), a mathematical fact about it (it's positive, ), and what it represents (a distance), all in a single compact phrase.   Call the time when the projectile reaches its highest point. This example doesn't explicitly say what type of mathematical object is, but you can infer that it's a real number (i.e. a quantity you can express in decimal) based on what it's representing.    Another quirk of mathematical writing comes in its use of logical language. Some of these should be highlighted. The first is that or always allows the possibility of both options. A sentence like is a multiple of or a multiple of could mean that is a multiple of both and . (For example, .)  Don't go out to lunch with a mathematician. The waiter will ask Would you like the soup or salad with that? and she will think it's funny to answer Yes .  Mathematics is often interested in logical consequences; if I know this then I can also conclude that. There are multiple ways if is true then is true gets phrased. Here are a few.  implies .    Whenever , also .    only if    is a sufficient condition for .    is a necessary condition for .     If two triangles have the same angles then they can be rescaled to have the same side lengths. The way you can use a fact like this is, if you know an instance of the if part—if you have two triangles and their angles are the same—then you get to for free also know the then part—you know one can be rescaled to be the same size as the other. For example, this means that the ratio of the side lengths, such as the ratio of the side adjacent to an angle and the hypotenuse, are the same across both triangles. This if-then statement is one of the key facts underlying the area of mathematics known as trigonemetry .  Also of interest is when two things are equivalent. This can be expressed as if and only if or, if you're stuffy, as is a necessary and sufficient condition for . Either way, this amounts to asserting both if then and if then .   A triangle has all three angles the same if and only if all its sides are the same length. This fact tells you these two statements are equivalent. If you know one, you automatically know the other.  Ordinary nonfiction writing is broken up into paragraphs, with information being unfolded across them. Mathematicians break from this convention by pulling out certain statements from the rest of the text. One place this is done is for important definitions.  Prime numbers  A positive whole number is prime if it has exactly two factors, itself and .  The italicized term, in this case prime , is what is being defined. The rest of the paragraph (just a single sentence in this case, though more complicated definitions can take many sentences) describes what objects the definition applies to and how it is defined. In this case, it only makes sense to ask about positive whole numbers being prime; so you wouldn't ask whether, say, or is prime.  Sometimes definitions don't appear in a special block. For instance, I did this above with variable . The same conventions apply, but when reading you should take note of anything the author considers important enough to emphasize by separating it from the main text.  The other main thing you see pulled from the main text are theorems. A theorem is a mathematical fact, usually one that we think is cool and useful and informative.  The Pythagorean theorem  If and are the lengths of the legs of a right triangle and is the length of its hypotenuse, then    A right triangle with its sides labeled a, b, and c.     Mathematicians aren't just interested in what's true, but in why it's true. We call an explanation of why a theorem is true a proof . In this book, proofs are mostly omitted, as they are too long or too difficult. I do include a few, however, where they are not too bad. You should read these. We tell students to show their work on math problems because the process is more important than the final result. The same is true with theorems; understanding why something is true is more important than just the theorem itself. If you don't fully understand a proof on one read, that is normal. Come back to it later or ask about it at office hours. No one perfectly understands mathematics immediately.   If a number is even so are any of its multiples.   Let be an even number and consider one of its multiples, call it . Being even means being a multiple of , and so there is some number so that . Substituting this, we get Thus we see that is a multiple of . This shows it is even.   Note that this theorem takes the form of an if-then statement. Many theorems take this form. The explanation for why it's true follows from this form. If then means that if we know then we can conclude . So to show why it's true, we assume that is true and we work to show that must also be true.  Mathematics books will include material they ask the reader to explain. While it may seem this comes from sadism, it's actually because you learn mathematics by doing it. Passively reading or watching lecture is not enough. In this book, these take two forms. One is exercises collected at the end of each chapter. These are problems to practice your understanding of the material. The other are checkpoints inserted at various points in the text. These are smaller exercises to do as part of your reading; as the name says, they serve as checkpoints to test that you understand what is going on.   Try out the definition-theorem style of writing mathematics yourself. Write out a definition of a mathematical concept and a mathematical fact using the style you've seen above. If you're feeling extra adventurous, write a proof for your theorem.      "
},
{
  "id": "sec0-howto-5",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variables "
},
{
  "id": "sec0-howto-9",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-9",
  "type": "Example",
  "number": "0.1.1",
  "title": "",
  "body": "If two triangles have the same angles then they can be rescaled to have the same side lengths. The way you can use a fact like this is, if you know an instance of the if part—if you have two triangles and their angles are the same—then you get to for free also know the then part—you know one can be rescaled to be the same size as the other. For example, this means that the ratio of the side lengths, such as the ratio of the side adjacent to an angle and the hypotenuse, are the same across both triangles. This if-then statement is one of the key facts underlying the area of mathematics known as trigonemetry . "
},
{
  "id": "sec0-howto-11",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-11",
  "type": "Example",
  "number": "0.1.2",
  "title": "",
  "body": " A triangle has all three angles the same if and only if all its sides are the same length. This fact tells you these two statements are equivalent. If you know one, you automatically know the other. "
},
{
  "id": "sec0-howto-13",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-13",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Prime numbers.",
  "body": "Prime numbers  A positive whole number is prime if it has exactly two factors, itself and . "
},
{
  "id": "sec0-howto-14",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime "
},
{
  "id": "sec0-howto-15",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable "
},
{
  "id": "sec0-howto-16",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "theorem "
},
{
  "id": "sec0-howto-17",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-17",
  "type": "Theorem",
  "number": "0.1.4",
  "title": "The Pythagorean theorem.",
  "body": "The Pythagorean theorem  If and are the lengths of the legs of a right triangle and is the length of its hypotenuse, then    A right triangle with its sides labeled a, b, and c.    "
},
{
  "id": "sec0-howto-18",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof "
},
{
  "id": "sec0-howto-19",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-19",
  "type": "Theorem",
  "number": "0.1.5",
  "title": "",
  "body": " If a number is even so are any of its multiples.   Let be an even number and consider one of its multiples, call it . Being even means being a multiple of , and so there is some number so that . Substituting this, we get Thus we see that is a multiple of . This shows it is even.  "
},
{
  "id": "sec0-howto-22",
  "level": "2",
  "url": "sec0-howto.html#sec0-howto-22",
  "type": "Checkpoint",
  "number": "0.1.6",
  "title": "",
  "body": " Try out the definition-theorem style of writing mathematics yourself. Write out a definition of a mathematical concept and a mathematical fact using the style you've seen above. If you're feeling extra adventurous, write a proof for your theorem.  "
},
{
  "id": "sec0-problems",
  "level": "1",
  "url": "sec0-problems.html",
  "type": "Section",
  "number": "0.2",
  "title": "Problem solving",
  "body": " Problem solving  I promised that mathematics is useful for real world problems. Instead of giving examples of this, we will talk about contrived fake problems commonly called word problems . Let me give an example to demonstrate why we use word problems instead of real problems.   You are trying to determine your budget for the month. Your only expenses are rent and food. If you have dollars and your share of rent is dollars, how much do you have left over for food?  Give a name to the unknown quantity, namely how much money you have for food. The name doesn't really matter, but I will pick —for food . Now write an equation that describes how the unknown quantity relates to the known quantities. Next use algebra to solve this equation for . In this case, solving the equation is the single step of moving the to the other side by subtracting it from both sides. This is the answer to the question. You have dollars to spend on food this month.   In the real world, household budgeting is a task many have to do. It is much more complicated, however. You have more than two expenses to worry about—energy bill, cell phone bill, internet bill, car expenses, school supplies, child care, entertainment to distract you from your economic precarity, and so on. The numbers aren't going to be nice, round multiples of , and they're going to change from month to month. Mathematics can still help you to determine your budget. But the simplified problem is clearer for demonstrating problem solving techniques. If you understand it, you can apply that same understanding to the more complicated problem.  If a future student ever asks you why they have to solve problems about someone buying forty watermelons, maybe something like the above will be helpful to them. Or maybe an analogy is more their style. A hockey coach has her players drill by skating in between cones while carrying the puck. She doesn't do this because that's what a match of hockey consists of. Rather, it is a drill that trains the skills used in a real match.  The above example also illustrates a basic principle of mathematical problem solving: identify the known and unknown quantities, and determine how they relate. Usually this takes the form of writing an equation expressing the relationship between the quantities. This transfers your problem into the mathematical realm, where you can use patterns to extract more information. In the previous case, those patterns took the form of algebra rules for manipulating equations.  Try a more complicated problem. Attempt it yourself before you check versus my solution.   You are packing a suitcase for a vacation, and you want to take as many paperback books as possible. The airline enforces a pound limit for checked baggage, and your suitcase weighs pounds. If each book weighs pounds, what is the largest number of books you can fit?  Call by the number of books you take. The total weight is then , and we want to know how big can be and this still be . We will figure this out by solving , rounding down if necessary. (You can't pack a third a book!) Solving this equation takes a couple steps. We round down and conclude you can pack books. Probably you will take fewer—some must be sacrified for clothes, etc.—but that is the maximum before going over weight.   Many applications of mathematics require specialized formulas, especially in the sciences and engineering. That is, the process requires a lot of work to determine which mathematical concept gives a good model of a real world phenomenon. While this kind of application is the most common and most important use of mathematics, it makes for bad examples. Either a formula must be given without explanation, or a long detour must be taken to explain another subject.  Let's see an example to illustrate this.   A ball is launched upward from the ground with an initial speed of meters per second. Determine its height after seconds.  If an object is launched straight upward from the ground with an initial speed of , then its height (in meters) after seconds is given by the formula   Use the formula from the hint, plugging in for and for . We conclude the object is meters above the ground.   This exercise was probably unsatisfying. Without the hint, you had no way to proceed. And the formula in the hint wasn't explained in any way. Where does that come from?  It gets even worse. This formula is inaccurate. Even if we had gone through a detour of calculus and physics to explain the formula, we'd still get a bad answer. The culprit is friction. This formula works if there is negligible air resistance, but that probably isn't the case. (You can try this yourself. Throw a ball and it makes a nice arc, but toss a piece of paper and it floats about.) If we want a more accurate formula we'd have to take an even longer, more difficult detour to arrive at an even more complicated formula.  If you are an engineer, then you want to take these extra detours. You need more accurate calculations. But if you just want to see an example of how to apply math, they're no good. So instead we go with contrived, simplistic examples.  On that note, let's see a few more contrived problems.   You have two rods. You measure that the longer one is inches longer and when you lay them end-to-end the total length is inches. How long are the rods?  Give names to the lengths. Call the longer length and the shorter length , both measured in inches. We know that Adding the two equations together, we get , and so . Plugging this into the second equation we get and so .   An alternative way you might have solved this is, the longer rod being inches longer can be written in an equation as . This can be substituted into the second equation to get . From this you can solve for , and then use that to find .  Another way you might have gone about solving this is guessing and checking . Knowing that the longer rod is inches longer, you might have guessed they are and inches long. This makes the total length inches, which is too short. So you revise your guess to get the extra two inches by upping them each by one inch, arriving at the correct answer of and .  Guessing and checking can be a slow process, since it may take many rounds of guessing to settle on the correct answer. The virtue of this method is that it works even if you don't see how to write an equation (or, in this case, two equations) which describe the unknown quantities. It's also useful if you have an equation you don't know how to solve. As such it can be a useful problem solving technique to keep in your toolbox.   A rectangular flower bed has an area of square feet, and the longer side is feet longer than the shorter side. What are the dimensions of the flower bed?  Let denote the length of the shorter side. Then the sides have lengths and , so the area is expressed by the equation This is a quadratic equation , which can be solved by factoring or the quadratic formula. If you don't remember either of those methods, you can use guessing and checking. After a few tries you should settle on , giving you side lengths of and as being the guess that works.    "
},
{
  "id": "sec0-problems-2",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "word problems "
},
{
  "id": "sec0-problems-3",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-3",
  "type": "Checkpoint",
  "number": "0.2.1",
  "title": "",
  "body": " You are trying to determine your budget for the month. Your only expenses are rent and food. If you have dollars and your share of rent is dollars, how much do you have left over for food?  Give a name to the unknown quantity, namely how much money you have for food. The name doesn't really matter, but I will pick —for food . Now write an equation that describes how the unknown quantity relates to the known quantities. Next use algebra to solve this equation for . In this case, solving the equation is the single step of moving the to the other side by subtracting it from both sides. This is the answer to the question. You have dollars to spend on food this month.  "
},
{
  "id": "sec0-problems-8",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-8",
  "type": "Checkpoint",
  "number": "0.2.2",
  "title": "",
  "body": " You are packing a suitcase for a vacation, and you want to take as many paperback books as possible. The airline enforces a pound limit for checked baggage, and your suitcase weighs pounds. If each book weighs pounds, what is the largest number of books you can fit?  Call by the number of books you take. The total weight is then , and we want to know how big can be and this still be . We will figure this out by solving , rounding down if necessary. (You can't pack a third a book!) Solving this equation takes a couple steps. We round down and conclude you can pack books. Probably you will take fewer—some must be sacrified for clothes, etc.—but that is the maximum before going over weight.  "
},
{
  "id": "sec0-problems-11",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-11",
  "type": "Checkpoint",
  "number": "0.2.3",
  "title": "",
  "body": " A ball is launched upward from the ground with an initial speed of meters per second. Determine its height after seconds.  If an object is launched straight upward from the ground with an initial speed of , then its height (in meters) after seconds is given by the formula   Use the formula from the hint, plugging in for and for . We conclude the object is meters above the ground.  "
},
{
  "id": "sec0-problems-16",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-16",
  "type": "Checkpoint",
  "number": "0.2.4",
  "title": "",
  "body": " You have two rods. You measure that the longer one is inches longer and when you lay them end-to-end the total length is inches. How long are the rods?  Give names to the lengths. Call the longer length and the shorter length , both measured in inches. We know that Adding the two equations together, we get , and so . Plugging this into the second equation we get and so .  "
},
{
  "id": "sec0-problems-18",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "guessing and checking "
},
{
  "id": "sec0-problems-20",
  "level": "2",
  "url": "sec0-problems.html#sec0-problems-20",
  "type": "Checkpoint",
  "number": "0.2.5",
  "title": "",
  "body": " A rectangular flower bed has an area of square feet, and the longer side is feet longer than the shorter side. What are the dimensions of the flower bed?  Let denote the length of the shorter side. Then the sides have lengths and , so the area is expressed by the equation This is a quadratic equation , which can be solved by factoring or the quadratic formula. If you don't remember either of those methods, you can use guessing and checking. After a few tries you should settle on , giving you side lengths of and as being the guess that works.  "
},
{
  "id": "sec0-exercises",
  "level": "1",
  "url": "sec0-exercises.html",
  "type": "Section",
  "number": "0.3",
  "title": "Exercises",
  "body": " Exercises    A college drama club is selling tickets to a production they are putting on. Early bird tickets are sold for dollars each, while tickets at the door cost dollars. If the club sold early bird tickets, how many tickets at the door do they need to sell to make their target revenue of dollars? What if they want to make dollars? (Round your answer to the nearest whole number.)    You are designing a conical pour-over coffee brewer. If the radius of the base of the cone must be centimeters and you want the cone to be able hold milliliters, how tall must the cone be? Round up to the nearest centimeter.  One milliliter is the same as one cubic centimeter. And the formula for the volume of a cone is where is the volume, is the radius of the base, and is the height. Of course is the familiar circle constant .    Use guessing and checking to find the whole numbers closest to the solutions to these equations.     Write your own word problem about arithmetic. Then solve it.    Write your own word problem about geometry. Then solve it.    "
},
{
  "id": "sec0-exercises-2-1",
  "level": "2",
  "url": "sec0-exercises.html#sec0-exercises-2-1",
  "type": "Exercise",
  "number": "0.3.1",
  "title": "",
  "body": " A college drama club is selling tickets to a production they are putting on. Early bird tickets are sold for dollars each, while tickets at the door cost dollars. If the club sold early bird tickets, how many tickets at the door do they need to sell to make their target revenue of dollars? What if they want to make dollars? (Round your answer to the nearest whole number.)  "
},
{
  "id": "sec0-exercises-2-2",
  "level": "2",
  "url": "sec0-exercises.html#sec0-exercises-2-2",
  "type": "Exercise",
  "number": "0.3.2",
  "title": "",
  "body": " You are designing a conical pour-over coffee brewer. If the radius of the base of the cone must be centimeters and you want the cone to be able hold milliliters, how tall must the cone be? Round up to the nearest centimeter.  One milliliter is the same as one cubic centimeter. And the formula for the volume of a cone is where is the volume, is the radius of the base, and is the height. Of course is the familiar circle constant .  "
},
{
  "id": "sec0-exercises-2-3",
  "level": "2",
  "url": "sec0-exercises.html#sec0-exercises-2-3",
  "type": "Exercise",
  "number": "0.3.3",
  "title": "",
  "body": " Use guessing and checking to find the whole numbers closest to the solutions to these equations.   "
},
{
  "id": "sec0-exercises-2-4",
  "level": "2",
  "url": "sec0-exercises.html#sec0-exercises-2-4",
  "type": "Exercise",
  "number": "0.3.4",
  "title": "",
  "body": " Write your own word problem about arithmetic. Then solve it.  "
},
{
  "id": "sec0-exercises-2-5",
  "level": "2",
  "url": "sec0-exercises.html#sec0-exercises-2-5",
  "type": "Exercise",
  "number": "0.3.5",
  "title": "",
  "body": " Write your own word problem about geometry. Then solve it.  "
},
{
  "id": "sec1-what-is",
  "level": "1",
  "url": "sec1-what-is.html",
  "type": "Section",
  "number": "1.1",
  "title": "What even is counting?",
  "body": " What even is counting?  This may seem like a silly question. Everyone knows what counting is! But when teaching children, you should resist the urge to dismiss a question. It is your job to teach those things that everyone knows , and children ask silly questions in order to learn.  Mathematicians are a lot like children. Much progress in mathematics is made by thinking deeply about an obvious question. This understanding can then be the foundation for building new concepts. So let's think about this question.   Answer this question. What do you think counting is?   Perhaps your answer went something like this. When you count, you point at a collection of things one by one and list off the numbers in order: one, two, three and so on. When you're pointing at the last thing, the number you said is the count of the collection.  This is a fine enough answer, but let's dig deeper. What is a collection? Books on a shelf, social media accounts you follow, and solutions to an algebraic equation are examples of collections you can count. What about the tea in a mug, is that a collection? You might very well count the mug, but you can't count the tea. With counting, there's always a next thing in line to point at. That isn't so with tea. You might have 200  of tea, but there's no next quantity. You could have 201  , but you could also have 200.1  .  What we're seeing is, we can only count discrete collections, where discrete means the collection can be separated into individual members. This is in contrast to a continuous collection, like the tea in a mug. To measure continuous collections we will need a different kind of number, which is the topic of .  Another thing we need to count a collection is for it to be finite , meaning that no matter what order we count it there's a start and an end. Collections of physical objects in ordinary life are all finite. But if you're talking about collections of mathematical objects, they can be infinite , meaning not finite. For example, you cannot count the collection of natural numbers. No matter how you order them, there's no last one. There's always a bigger number.   In summary, counting is about finite, discrete collections. This is the topic we now turn to.  "
},
{
  "id": "sec1-what-is-4",
  "level": "2",
  "url": "sec1-what-is.html#sec1-what-is-4",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "",
  "body": " Answer this question. What do you think counting is?  "
},
{
  "id": "sec1-what-is-7",
  "level": "2",
  "url": "sec1-what-is.html#sec1-what-is-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete continuous "
},
{
  "id": "sec1-what-is-8",
  "level": "2",
  "url": "sec1-what-is.html#sec1-what-is-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "finite infinite "
},
{
  "id": "sec1-sets",
  "level": "1",
  "url": "sec1-sets.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sets",
  "body": " Sets   A set is a discrete collection. A set could be a collection of physical things, such as the set of students in a classroom. It could also be a collection of abstract things, such as the set of counting numbers. The objects in a set are called its elements or members .   Many of the sets of interest to mathematicians are infinite. Our focus, however, will be on finite sets, as those are the ones counting is about. We will talk about a few important infinite sets later, however.  First, however, let's talk about how we write sets.  Set notation   We name sets with capital letters, such as or . To say that an object is an element of a set we use the symbol , and we write to say something is not an element. For example, if is the set of cats the author of this book loves then but .  One way to define a set is by listing its elements. We write this by putting the elements between curly braces. For example, is the set of prime numbers .  For large sets it's impractical to define them by listing all their elements. For these we can use set-builder notation . The basic format is Here, is a variable or name to refer to an unspecified object. For example, to define the set of even numbers below you could write   Sometimes when using set-builder notation you want to only look at objects in a set you're already talking about. We do this by writing on the left side of the colon. For example, with our set from earlier you might want to restrict to those numbers which are also a multiple of . To do that, you'd write This set is called a subset of , because it is contained inside .     When defining a set by listing its elements, stay away from dotdotdots! To you, it might be obvious what pattern is intended with , but others won't find it obvious. (The pattern, by the way, was the powers of up to and so the set was . Is that what you thought the pattern was?) Instead, use set-builder notation to explicitly say what the pattern is. In this case, it'd be better to write the set as     Consider the set of colors.  List the elements of .  Use set-builder notation to write the sets and .      Consider the set Use set-builder notation to define two different subsets of , and list the elements of those subsets.    A set can be formed from any objects, even if they're wildly unrelated. For example, is a perfectly fine definition for a set. In practice, however, the elements of a set are usually related. It's not useful to consider a set with three random elements.   Special sets  A few sets are worth highlighting, to understand the edge cases of the concept.  The empty set is the set containing zero elements. We write it with the symbol . That is, for any object we have .  A set containing only one element is called a singleton . You would write it like, for instance, . That is, an object is an element of if and only if .      Is a singleton set the same thing as its element? For example, is the number the same thing as the set ? Explain your answer.   "
},
{
  "id": "sec1-sets-2",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-2",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": " A set is a discrete collection. A set could be a collection of physical things, such as the set of students in a classroom. It could also be a collection of abstract things, such as the set of counting numbers. The objects in a set are called its elements or members .  "
},
{
  "id": "sec1-sets-5",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-5",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Set notation.",
  "body": "Set notation   We name sets with capital letters, such as or . To say that an object is an element of a set we use the symbol , and we write to say something is not an element. For example, if is the set of cats the author of this book loves then but .  One way to define a set is by listing its elements. We write this by putting the elements between curly braces. For example, is the set of prime numbers .  For large sets it's impractical to define them by listing all their elements. For these we can use set-builder notation . The basic format is Here, is a variable or name to refer to an unspecified object. For example, to define the set of even numbers below you could write   Sometimes when using set-builder notation you want to only look at objects in a set you're already talking about. We do this by writing on the left side of the colon. For example, with our set from earlier you might want to restrict to those numbers which are also a multiple of . To do that, you'd write This set is called a subset of , because it is contained inside .   "
},
{
  "id": "sec1-sets-6",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-6",
  "type": "Warning",
  "number": "1.2.3",
  "title": "",
  "body": " When defining a set by listing its elements, stay away from dotdotdots! To you, it might be obvious what pattern is intended with , but others won't find it obvious. (The pattern, by the way, was the powers of up to and so the set was . Is that what you thought the pattern was?) Instead, use set-builder notation to explicitly say what the pattern is. In this case, it'd be better to write the set as   "
},
{
  "id": "sec1-sets-7",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-7",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "",
  "body": " Consider the set of colors.  List the elements of .  Use set-builder notation to write the sets and .    "
},
{
  "id": "sec1-sets-8",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-8",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " Consider the set Use set-builder notation to define two different subsets of , and list the elements of those subsets.  "
},
{
  "id": "sec1-sets-9",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-9",
  "type": "Remark",
  "number": "1.2.6",
  "title": "",
  "body": " A set can be formed from any objects, even if they're wildly unrelated. For example, is a perfectly fine definition for a set. In practice, however, the elements of a set are usually related. It's not useful to consider a set with three random elements.  "
},
{
  "id": "sec1-sets-10",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-10",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Special sets.",
  "body": "Special sets  A few sets are worth highlighting, to understand the edge cases of the concept.  The empty set is the set containing zero elements. We write it with the symbol . That is, for any object we have .  A set containing only one element is called a singleton . You would write it like, for instance, . That is, an object is an element of if and only if .    "
},
{
  "id": "sec1-sets-11",
  "level": "2",
  "url": "sec1-sets.html#sec1-sets-11",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Is a singleton set the same thing as its element? For example, is the number the same thing as the set ? Explain your answer.  "
},
{
  "id": "sec1-counting",
  "level": "1",
  "url": "sec1-counting.html",
  "type": "Section",
  "number": "1.3",
  "title": "The meaning of the natural numbers",
  "body": " The meaning of the natural numbers  The natural numbers  The natural numbers are numbers which measure the quantities of finite sets. In mathematical jargon, we say that the cardinality of a set is the number of elements in it, and so the natural numbers are the cardinalities of finite sets. We write to refer to the set of all natural numbers. And we write for the cardinality of the set .  When we need names for natural numbers, it is common practice to use variables from either the middle of the alphabet, such as , or from the beginning of the alphabet, such as .  Speaking informally, it is common to talk about the size of a set when referring to its cardinality.  Unfolding jargon into ordinary language, the natural numbers measure quantities of finite, discrete collections. They are the answer to how many? questions. How many students failed the math exam? The answer could be seven, three, or, best of all, zero. On the other hand how much? questions probably don't natural numbers as their answer. How much water did you drink today? most likely has a non-whole number as an answer. To measure continuous quantities like these we need a different number system, which we study in .  We can give names to some natural numbers. Let's start with the very smallest a set can be, namely the empty set. We call the cardinality of the empty set zero and write . The next smallest a set can be is if we add a single element to it, call that element . Starting from the emptyset this gives a singleton . We call the cardinality of a singleton one and write .  We can keep going with this process. We always get the next smallest cardinality by adding a single element. In this way we get two ( ), three ( ), four ( ), five ( ), and so on. We've so far named six natural numbers, and there's infinitely many still to go. It's apparent that at some point we need a more systematic naming scheme; that will be a topic in .  What we will do in this chapter, however, is talk about operations on natural numbers. After all, you don't just want numbers to count, you also want them to calculate. Since natural numbers are so closely tied to sets it makes sense to first talk about the corresponding operations on sets. Once we understand those then we can see how they give rise to arithmetic operations.   "
},
{
  "id": "sec1-counting-2",
  "level": "2",
  "url": "sec1-counting.html#sec1-counting-2",
  "type": "Definition",
  "number": "1.3.1",
  "title": "The natural numbers.",
  "body": "The natural numbers  The natural numbers are numbers which measure the quantities of finite sets. In mathematical jargon, we say that the cardinality of a set is the number of elements in it, and so the natural numbers are the cardinalities of finite sets. We write to refer to the set of all natural numbers. And we write for the cardinality of the set .  When we need names for natural numbers, it is common practice to use variables from either the middle of the alphabet, such as , or from the beginning of the alphabet, such as . "
},
{
  "id": "sec1-counting-4",
  "level": "2",
  "url": "sec1-counting.html#sec1-counting-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "sec1-counting-5",
  "level": "2",
  "url": "sec1-counting.html#sec1-counting-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "zero one "
},
{
  "id": "sec1-counting-6",
  "level": "2",
  "url": "sec1-counting.html#sec1-counting-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "two three four five "
},
{
  "id": "sec1-operations",
  "level": "1",
  "url": "sec1-operations.html",
  "type": "Section",
  "number": "1.4",
  "title": "Operations on sets",
  "body": " Operations on sets  First let's talk about how to compare sets.  Subsets and set equality   A set is a subset of a set , written , if every element of is an element of . That is, if then . Similar to how we write for not equals, we write to say that is not a subset of .  Two sets and are equal if they have the same elements. That is, for any object , we have if and only if . Note that this says if and only if and .    Explain why the note that from the definition is true.    The following summarizes some important properties of the subset relation . Each property is given its formal mathematical name.  Properties of    Reflexivity    Antisymmetry If and then .  Transitivity If and then .    These symbols can be unpacked into ordinary language. Reflexivity says that any set is contained in itself. Antisymmetry says that if two sets are contained in each other they must be the same. Transitivity says that if a set is contained inside a bigger set contained inside a yet bigger set, then the smallest set is contained inside the biggest.    When comparing numbers, either they are the same or one is bigger than the other. This isn't the case with sets. Given two sets it is possible neither one is a subset of the other. Demonstrate this by finding two sets and so that and .   In addition to comparing sets, we also want to combine them to make new sets. There are multiple ways we can do this  Intersection  The intersection of two sets is the set of their common elements. We use as the intersection symbol. Using set-builder notation:     Consider and . Then     Consider two disjoint sets, meaning they have no elements in common. For instance, consider and . Then their intersection will have no elements, because nothing is in both and , and be the empty set. In symbols, .  Union  The union of two sets is the set containing all elements from each of the sets. We use as the union symbol. Using set-builder notation:      Consider and . Then    Set difference  The set difference of from , written , is the set you obtain by throwing everything from out of . Using set-builder notation:     Consider and . Then and    Often you want to express the idea of first this thing, then that thing . For example, when you buy a ticket at a movie theater you might have to pick the row and then the seat in that row. In mathematics, we abstract this kind of choice in the object of an ordered pair . Namely, we write for the ordered pair whose first object is and whose second object is .  Cartesian product  Let and be sets. The Cartesian product of and , written , is the set of all ordered pairs where and . In set-builder notation:    What is the Cartesian product of and ?     You can visualize a Cartesian product as a rectangle. The vertical side represents the set with all of its elements and the horizontal side represents the set with all of its elements. To specify a position inside the rectangle you need to give both the vertical and horizontal position, which amounts to specifying first an element from and second an element from . Thus, the positions inside correspond to all the possible ordered pairs from followed by .       "
},
{
  "id": "sec1-operations-3",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-3",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Subsets and set equality.",
  "body": "Subsets and set equality   A set is a subset of a set , written , if every element of is an element of . That is, if then . Similar to how we write for not equals, we write to say that is not a subset of .  Two sets and are equal if they have the same elements. That is, for any object , we have if and only if . Note that this says if and only if and .  "
},
{
  "id": "sec1-operations-4",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-4",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": " Explain why the note that from the definition is true.  "
},
{
  "id": "sec1-operations-6",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-6",
  "type": "Theorem",
  "number": "1.4.3",
  "title": "Properties of <span class=\"process-math\">\\(\\subseteq\\)<\/span>.",
  "body": "Properties of    Reflexivity    Antisymmetry If and then .  Transitivity If and then .   "
},
{
  "id": "sec1-operations-8",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-8",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "",
  "body": " When comparing numbers, either they are the same or one is bigger than the other. This isn't the case with sets. Given two sets it is possible neither one is a subset of the other. Demonstrate this by finding two sets and so that and .  "
},
{
  "id": "sec1-operations-10",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-10",
  "type": "Definition",
  "number": "1.4.5",
  "title": "Intersection.",
  "body": "Intersection  The intersection of two sets is the set of their common elements. We use as the intersection symbol. Using set-builder notation:   "
},
{
  "id": "sec1-operations-11",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-11",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": " Consider and . Then   "
},
{
  "id": "sec1-operations-12",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disjoint "
},
{
  "id": "sec1-operations-13",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-13",
  "type": "Definition",
  "number": "1.4.7",
  "title": "Union.",
  "body": "Union  The union of two sets is the set containing all elements from each of the sets. We use as the union symbol. Using set-builder notation:   "
},
{
  "id": "sec1-operations-14",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-14",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Consider and . Then   "
},
{
  "id": "sec1-operations-15",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-15",
  "type": "Definition",
  "number": "1.4.9",
  "title": "Set difference.",
  "body": "Set difference  The set difference of from , written , is the set you obtain by throwing everything from out of . Using set-builder notation:   "
},
{
  "id": "sec1-operations-16",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-16",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": " Consider and . Then and   "
},
{
  "id": "sec1-operations-17",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordered pair "
},
{
  "id": "sec1-operations-18",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-18",
  "type": "Definition",
  "number": "1.4.11",
  "title": "Cartesian product.",
  "body": "Cartesian product  Let and be sets. The Cartesian product of and , written , is the set of all ordered pairs where and . In set-builder notation:  "
},
{
  "id": "sec1-operations-19",
  "level": "2",
  "url": "sec1-operations.html#sec1-operations-19",
  "type": "Checkpoint",
  "number": "1.4.12",
  "title": "",
  "body": " What is the Cartesian product of and ?    "
},
{
  "id": "sec1-numbers",
  "level": "1",
  "url": "sec1-numbers.html",
  "type": "Section",
  "number": "1.5",
  "title": "Number classes",
  "body": " Number classes  Before we see how these set operations correspond to arithmetic operations with natural numbers, let's take a detour to look at some special sets much beloved by mathematicians. Namely, mathematicians work a lot with different kinds of numbers, and so it is convenient to have names for the sets of those numbers. These form a hierarchy of larger and larger classes of numbers. We use a special font, called blackboard bold to write these number classes. This font choice makes it clear that we are talking about a number class and not using a letter as a variable for some other kind of thing.  Number classes    The natural numbers  are the counting numbers used to measure discrete collections. ( for Natural.)  The integers  are the positive and negative whole numbers. ( for Zahlen , the German word for integers.)  The rational numbers  are the numbers formed from fractions of integers. ( for Quotient.)  The real numbers  are the numbers which measure continuous quantities. ( for, you guessed it, Real.)  The complex numbers  are an extension of the reals used for advanced applications in, for instance, physics and engineering.  These number classes are larger and larger as you go along. In set-theoretic notation:   In this chapter we are looking at the natural numbers. The next two chapters will give a deeper look at them. Then in we look at the integers, followed by the rational numbers in and the real numbers in . We won't look at the complex numbers in this book.  "
},
{
  "id": "sec1-numbers-3",
  "level": "2",
  "url": "sec1-numbers.html#sec1-numbers-3",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Number classes.",
  "body": "Number classes    The natural numbers  are the counting numbers used to measure discrete collections. ( for Natural.)  The integers  are the positive and negative whole numbers. ( for Zahlen , the German word for integers.)  The rational numbers  are the numbers formed from fractions of integers. ( for Quotient.)  The real numbers  are the numbers which measure continuous quantities. ( for, you guessed it, Real.)  The complex numbers  are an extension of the reals used for advanced applications in, for instance, physics and engineering.  These number classes are larger and larger as you go along. In set-theoretic notation:  "
},
{
  "id": "sec1-arithmetic",
  "level": "1",
  "url": "sec1-arithmetic.html",
  "type": "Section",
  "number": "1.6",
  "title": "The arithmetic of natural numbers",
  "body": " The arithmetic of natural numbers  Now that we've seen operations for combining sets we can talk about their counterpart operations on numbers.  If you have four mangos and three pineapples, how many fruits do you have in total? If is the set of your mangos and is the set of your pineapples, what's being asked is, what's the cardinality of ?  Addition of natural numbers  Suppose and are natural numbers. Let and be disjoint sets with and . Then When we need to refer to the different parts of addition, we call the sum , while and are the summands .  You can phrase this as being about counting choices. If you have your choice either from one of options or from one of options, then you have many choices. For example, if a restaurant offers options of soup or options of salad, that is many options total.  Once you know about addition you can give a clear definition of what it means for one natural number to be bigger than another. On the level of sets, the idea is, a finite set is larger than another if you can add things to to make it the same size as . On the level of numbers, is larger than if you can add to to get .  Order on natural numbers  Suppose and are natural numbers. Then if there is a natural number so that . If but we say . And we reverse the order of the symbols to mean the opposite direction: means and means .  Next we define subtraction. If you have nine fruits and I take away your five guavas, how many fruits do you have in total? If is the set of your fruits and is the set of your guavas, what's being asked is, what's the cardinality of ?  Subtraction of natural numbers  Suppose are natural numbers. Let be a set with cardinality and let be a subset of cardinality . Then When we need names for the different parts, is the difference , the number being subtracted from is the minuend , and the number being subtracted is the subtrahend .  An alternative way you can think about subtraction is as the opposite of addition. Namely, is true if and only . For example, because . In words, to solve you ask, what do I add to to get a sum of ?  This perspective on subtraction is fruitful as a foundation to build further understanding, as we will see in . In general in mathematics, having multiple perspectives on the same idea is great. It gives us more tools and more approaches to understand things and to solve problems.  Note that, if we are only dealing with natural numbers, subtraction only makes sense when the subtrahend is the minuend. If you have fruits you can't take away! In we will see how to expand to a larger number system which allows you to subtract any two numbers without worrying about which one is bigger.  Multiplication is a step trickier to define. To illustrate, suppose you have four boxes, each of which contains six papayas. How many papayas do you have in total? One way to think of this is, how many ways are there for you to pick out a single papaya? It's a two-step process: first pick a box, then choose a papaya from that box. Mathematically, we represent a two-step process as an ordered pair. If we number the boxes and number the papayas in each box, each choice can be represented as the pair of the box number followed by the papaya number .  Multiplication of natural numbers  Suppose and are natural numbers. Let be a set of cardinality and be a set of cardinality . Then When we need a name for the parts of multiplication, is the product while and are the multiplicands .  When used with variables, multiplication is often written just by putting them next to each other, e.g. instead of . One also sees this when one of the two multiplicands is a number, such as . More rarely, one sees multiplication written as .  Like with addition, you can phrase this in terms of counting choices. If you make one choice from options then you independently make a second choice from options, there are different ways of making the two-step choice. For example, if a fast food restaurant offers sandwiches and sides, then there are many combos you could order.  Now that we've established the meaning of the basic operations, let's make clear the basic rules they satisfy.  Arithmetic properties of natural numbers  All of the following are true for any integers .  Additive identity    Associativity of addition    Commutativity of addition    Multiplicative identity    Multiplicative annihilation    Associativity of multiplication    Commutativity of multiplication    Distributivity      Mathematicians call these properties the commutative semi-ring axioms , but that term will not be helpful to us.  We will tackle exponentiation in a different way. With addition, subtraction, and multiplication, we defined these in terms of cardinalities of sets based on certain operations. That approach is possible for exponentiation—indeed, the exercises in this chapter guide you through that approach—but it is helpful to take another perspective.  Namely, we will consider exponentiation as iterated multiplication. In plain terms, exponentiation means repeatedly multiplying a number by itself.  Exponentiation of natural numbers  Let and be natural numbers. Then, We call the base and the exponent .  This rule doesn't tell us what to do with an exponent of . We will do the only sensible thing, and say that , no matter what is.  Like with the other operations, we can write down rules that describe how exponentiation behaves.  Rules for exponentiation  All of the following are true for any integers .          "
},
{
  "id": "sec1-arithmetic-4",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-4",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Addition of natural numbers.",
  "body": "Addition of natural numbers  Suppose and are natural numbers. Let and be disjoint sets with and . Then When we need to refer to the different parts of addition, we call the sum , while and are the summands . "
},
{
  "id": "sec1-arithmetic-7",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-7",
  "type": "Definition",
  "number": "1.6.2",
  "title": "Order on natural numbers.",
  "body": "Order on natural numbers  Suppose and are natural numbers. Then if there is a natural number so that . If but we say . And we reverse the order of the symbols to mean the opposite direction: means and means . "
},
{
  "id": "sec1-arithmetic-9",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-9",
  "type": "Definition",
  "number": "1.6.3",
  "title": "Subtraction of natural numbers.",
  "body": "Subtraction of natural numbers  Suppose are natural numbers. Let be a set with cardinality and let be a subset of cardinality . Then When we need names for the different parts, is the difference , the number being subtracted from is the minuend , and the number being subtracted is the subtrahend . "
},
{
  "id": "sec1-arithmetic-14",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-14",
  "type": "Definition",
  "number": "1.6.4",
  "title": "Multiplication of natural numbers.",
  "body": "Multiplication of natural numbers  Suppose and are natural numbers. Let be a set of cardinality and be a set of cardinality . Then When we need a name for the parts of multiplication, is the product while and are the multiplicands .  When used with variables, multiplication is often written just by putting them next to each other, e.g. instead of . One also sees this when one of the two multiplicands is a number, such as . More rarely, one sees multiplication written as . "
},
{
  "id": "thm1-arith-prop",
  "level": "2",
  "url": "sec1-arithmetic.html#thm1-arith-prop",
  "type": "Theorem",
  "number": "1.6.5",
  "title": "Arithmetic properties of natural numbers.",
  "body": "Arithmetic properties of natural numbers  All of the following are true for any integers .  Additive identity    Associativity of addition    Commutativity of addition    Multiplicative identity    Multiplicative annihilation    Associativity of multiplication    Commutativity of multiplication    Distributivity     "
},
{
  "id": "sec1-arithmetic-18",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative semi-ring axioms "
},
{
  "id": "sec1-arithmetic-21",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-21",
  "type": "Definition",
  "number": "1.6.6",
  "title": "Exponentiation of natural numbers.",
  "body": "Exponentiation of natural numbers  Let and be natural numbers. Then, We call the base and the exponent . "
},
{
  "id": "sec1-arithmetic-24",
  "level": "2",
  "url": "sec1-arithmetic.html#sec1-arithmetic-24",
  "type": "Definition",
  "number": "1.6.7",
  "title": "Rules for exponentiation.",
  "body": "Rules for exponentiation  All of the following are true for any integers .        "
},
{
  "id": "sec1-div",
  "level": "1",
  "url": "sec1-div.html",
  "type": "Section",
  "number": "1.7",
  "title": "Division",
  "body": " Division  Division, denoted by the symbol , is the most difficult—one might say the most divisive—operation to handle, so let's address it in its own section.  When talking about the other operations, we saw that one way to think about subtraction is as the opposite of addition. We can do the same for division. Namely, define that if . We call the dividend , the divisor , and the quotient . For example, because .  You can phrase division as being about dividing up a collection. That is, if you can divide many objects up into many groups each with things. For example, because you can divide six kiwis into three groups of two kiwis each.  A difficulty with division is that if you divide two random natural numbers almost certainly the quotient won't be a whole number. For example, living in we can't do the division because there is no whole number which gives when multiplied by . If you have three students and you are trying to split them into two equally sized groups, there is no way to do that.  On the other hand, if you are trying to split three oranges between two students, you can do that. Each student gets one and a half oranges. What this example mathematically illustrates is, we can make sense of divisions like but it requires going beyond the whole numbers. This will be the subject of .  If we want to divide in the whole numbers, instead of exact division we have to do division with remainder .  Division with remainder  Let and be natural numbers, with . Then there are unique numbers and , the quotient and remainder , so that It is perhaps easier to see what is going on if you phrase this equation as an equivalent one about fractions: In words, if you want to divide objects into groups, you can split them into groups of size with many left over.   For example, if we want exact division then cannot be done in the whole numbers. But we can do division with remainder to get a quotient of and a remainder of . That is, . You can think of it this way: if you want to divide students into groups of you will have groups with students left over.  Another way to think about division with remainder is, if you tried to get an exact answer to you wouldn't get a whole number—in this case, you get about . The quotient for division with remainder is the natural number you get if you round down to the nearest whole number, and the remainder represents the fractional part many 's. In this case, the remainder is about  's.  In we will talk about how you compute division with remainder. In we will talk more about what further math you can do with this idea.   Explain why division by zero is never defined. That is, explain why there is never a unique number you can pick so that makes sense.  Remember that division is the opposite of multiplication. Turn into an equivalent equation about multiplication.  Treat the case where the dividend separately. It needs a different explanation.   "
},
{
  "id": "sec1-div-3",
  "level": "2",
  "url": "sec1-div.html#sec1-div-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dividend divisor quotient "
},
{
  "id": "sec1-div-7",
  "level": "2",
  "url": "sec1-div.html#sec1-div-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exact division division with remainder "
},
{
  "id": "sec1-div-8",
  "level": "2",
  "url": "sec1-div.html#sec1-div-8",
  "type": "Theorem",
  "number": "1.7.1",
  "title": "Division with remainder.",
  "body": "Division with remainder  Let and be natural numbers, with . Then there are unique numbers and , the quotient and remainder , so that It is perhaps easier to see what is going on if you phrase this equation as an equivalent one about fractions: In words, if you want to divide objects into groups, you can split them into groups of size with many left over.  "
},
{
  "id": "sec1-div-12",
  "level": "2",
  "url": "sec1-div.html#sec1-div-12",
  "type": "Checkpoint",
  "number": "1.7.2",
  "title": "",
  "body": " Explain why division by zero is never defined. That is, explain why there is never a unique number you can pick so that makes sense.  Remember that division is the opposite of multiplication. Turn into an equivalent equation about multiplication.  Treat the case where the dividend separately. It needs a different explanation.  "
},
{
  "id": "sec1-ooo",
  "level": "1",
  "url": "sec1-ooo.html",
  "type": "Section",
  "number": "1.8",
  "title": "Order of Operations",
  "body": " Order of Operations  When doing calculations, you often have to combine different operations. The order you combine them matters. For example, consider Which operation is done first, addition or multiplication? If you do addition first, the value of the expression is . If you do multiplication first, the value of the expression is .  It's convenient to have a convention for which operation gets performed first.  Order of operations  When computing arithmetic expressions, do them in the following order. (Parentheses) Parentheses ( and ) are used to indicate priority. Do operations inside parentheses first.  (Exponentiation) Next do exponentiation.  (Multiplication\/Division) Next do multiplication and division. The order doesn't matter here; you get the same value whether you multiply or divide first.  (Addition\/Subtraction) Last do addition and subtraction. The order doesn't matter.  Additionally, when doing multiplication or addition you can freely write three or more terms without using parentheses to indicate priority. For instance, is the same value whether you do left sum or the right sum first, so you don't need to specify. On the other hand, take care with subtraction or division with three or more terms. Convention is to go left to right, so means (that is, do the left subtraction then the right subtraction). But this is a different value than .    The parentheses mean you must do what's inside before you can do the multiplication on the outside. Inside the parentheses, multiplication must done before subtraction. So the order of operations is: Multiply and .  Then subtract from that.  Then multiply that by .     Consider the following arithmetic expression. Draw a tree diagram which illustrates the order of operations for this expression.   Some rules of mathematics can't be bent (or at least, not without breaking a lot of other things). For example the rules in are firm. Anything times is , is the same as , and so on. The order of operations, however, isn't like that. It's merely a convention in how we write expressions. We could choose a different order, and math would work just as well. The reasons for this specific choice is that it makes many common expressions fast to write. For example, a polynomial like is efficiently written using this order of operations.  Other conventions for order of operations get used in some calculators and programming languages. One example is prefix notation , also called Polish notation . (The latter name is in honor of Jan Łukasiewicz, the Polish logician who invented the notation.) In this notation, the operations are written first and the numbers\/inputs afterward. For example, reads add the next two things, namely and . More complicated expressions can also be made. reads add the next two things, namely the product of and , and . On the other hand, reads mulitply the next two things, namely the sum of and , and . As shown by these two examples, prefix notation doesn't need parentheses to give priority, which makes it appealing to logicians and computers. But it's not how humans usually write math, and we won't discuss it any further in this book.  "
},
{
  "id": "sec1-ooo-4",
  "level": "2",
  "url": "sec1-ooo.html#sec1-ooo-4",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Order of operations.",
  "body": "Order of operations  When computing arithmetic expressions, do them in the following order. (Parentheses) Parentheses ( and ) are used to indicate priority. Do operations inside parentheses first.  (Exponentiation) Next do exponentiation.  (Multiplication\/Division) Next do multiplication and division. The order doesn't matter here; you get the same value whether you multiply or divide first.  (Addition\/Subtraction) Last do addition and subtraction. The order doesn't matter.  Additionally, when doing multiplication or addition you can freely write three or more terms without using parentheses to indicate priority. For instance, is the same value whether you do left sum or the right sum first, so you don't need to specify. On the other hand, take care with subtraction or division with three or more terms. Convention is to go left to right, so means (that is, do the left subtraction then the right subtraction). But this is a different value than . "
},
{
  "id": "sec1-ooo-5",
  "level": "2",
  "url": "sec1-ooo.html#sec1-ooo-5",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": "  The parentheses mean you must do what's inside before you can do the multiplication on the outside. Inside the parentheses, multiplication must done before subtraction. So the order of operations is: Multiply and .  Then subtract from that.  Then multiply that by .   "
},
{
  "id": "sec1-ooo-6",
  "level": "2",
  "url": "sec1-ooo.html#sec1-ooo-6",
  "type": "Checkpoint",
  "number": "1.8.3",
  "title": "",
  "body": " Consider the following arithmetic expression. Draw a tree diagram which illustrates the order of operations for this expression.  "
},
{
  "id": "sec1-ooo-7",
  "level": "2",
  "url": "sec1-ooo.html#sec1-ooo-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial "
},
{
  "id": "sec1-ooo-8",
  "level": "2",
  "url": "sec1-ooo.html#sec1-ooo-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prefix notation Polish notation "
},
{
  "id": "sec1-exercises",
  "level": "1",
  "url": "sec1-exercises.html",
  "type": "Section",
  "number": "1.9",
  "title": "Exercises",
  "body": " Exercises   For these counting exercises, write your answer as a formula, not as a number. For example, write instead of .   A date night special at a restaurant lets you pick either a soup or salad as a starter, then an entree, and finally a dessert. If there are three soups, two salads, five entrees, and four desserts, how many different meals can you choose? If you and your date independently choose your own meals, how many combinations are there for how the two of you can order?    In a race with racers, how many different outcomes are there for who gets first through sixth place?  Think of choosing an outcome as first picking who comes in first, then picking a different person for second, and so on to sixth place. How many options do you have for first? Then how many for second? And so on.    How many ways are there to pick a digit PIN? A digit PIN. A digit PIN for any positive whole number ?  Think of picking each digit as an independent choice. How many options for one digit? Now put it together for multiple digits.   In more advanced uses of sets, it's helpful to talk about mappings or correspondances between them. How do you assign each element of the input set an element of the output set?  Functions  Let and be sets. A function  from to , which we write as is a way of assigning each input to an output .   Consider and . Give an example of a function by specifying the three outputs .   We can use functions to give an alternative definition of exponentiation. Namely, counts the number of functions from a set of size to a set of size .   Confirm the two definitions of exponentiation are equivalent for a specific case by counting how many functions there are from a set with elements to a set with elements.  Think of choosing a function as choosing an output for the first element of , then the next one, and so on until you've picked an output for every function.    Confirm that this is in general equivalent to the definition by iterated multiplication by explaining why there are functions from a set of size to a set of size .  Same hint as before, but now instead of having a specific value for and you have to think a step more abstractly.   A function is called one-to-one if different inputs get sent to different outputs. It is called onto if every element of is the output for some input . If is both one-to-one and onto it is called bijective .   Let and . Come up with a function which is one-to-one by specifying the outputs for every input . Also come up with a function which is onto. Can you come up with a function which is onto but not one-to-one? Either demonstrate such a function or explain why you think it's impossible.    Consider defined as . Explain why is one-to-one but not onto. Also consider defined as is the whole number you get rounding down from . Explain why is onto but not one-to-one.   One use of functions is to give a way to compare sizes of sets. If and are sets, then if there is a one-to-one function and if there is a bijective function .   Demonstrate that your left hand and right hand have the same number of fingers by describing a bijection from the set of fingers on your left hand to the set of fingers on your right hand.    Demonstrate that any two singletons and have the same cardinality by giving a bijective function between them.    "
},
{
  "id": "sec1-exercises-2-2",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-2",
  "type": "Exercise",
  "number": "1.9.1",
  "title": "",
  "body": " A date night special at a restaurant lets you pick either a soup or salad as a starter, then an entree, and finally a dessert. If there are three soups, two salads, five entrees, and four desserts, how many different meals can you choose? If you and your date independently choose your own meals, how many combinations are there for how the two of you can order?  "
},
{
  "id": "sec1-exercises-2-3",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-3",
  "type": "Exercise",
  "number": "1.9.2",
  "title": "",
  "body": " In a race with racers, how many different outcomes are there for who gets first through sixth place?  Think of choosing an outcome as first picking who comes in first, then picking a different person for second, and so on to sixth place. How many options do you have for first? Then how many for second? And so on.  "
},
{
  "id": "sec1-exercises-2-4",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-4",
  "type": "Exercise",
  "number": "1.9.3",
  "title": "",
  "body": " How many ways are there to pick a digit PIN? A digit PIN. A digit PIN for any positive whole number ?  Think of picking each digit as an independent choice. How many options for one digit? Now put it together for multiple digits.  "
},
{
  "id": "sec1-exercises-2-6",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-6",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Functions.",
  "body": "Functions  Let and be sets. A function  from to , which we write as is a way of assigning each input to an output . "
},
{
  "id": "sec1-exercises-2-7",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-7",
  "type": "Exercise",
  "number": "1.9.4",
  "title": "",
  "body": " Consider and . Give an example of a function by specifying the three outputs .  "
},
{
  "id": "sec1-exercises-2-9",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-9",
  "type": "Exercise",
  "number": "1.9.5",
  "title": "",
  "body": " Confirm the two definitions of exponentiation are equivalent for a specific case by counting how many functions there are from a set with elements to a set with elements.  Think of choosing a function as choosing an output for the first element of , then the next one, and so on until you've picked an output for every function.  "
},
{
  "id": "sec1-exercises-2-10",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-10",
  "type": "Exercise",
  "number": "1.9.6",
  "title": "",
  "body": " Confirm that this is in general equivalent to the definition by iterated multiplication by explaining why there are functions from a set of size to a set of size .  Same hint as before, but now instead of having a specific value for and you have to think a step more abstractly.  "
},
{
  "id": "sec1-exercises-2-11",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-to-one onto bijective "
},
{
  "id": "sec1-exercises-2-12",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-12",
  "type": "Exercise",
  "number": "1.9.7",
  "title": "",
  "body": " Let and . Come up with a function which is one-to-one by specifying the outputs for every input . Also come up with a function which is onto. Can you come up with a function which is onto but not one-to-one? Either demonstrate such a function or explain why you think it's impossible.  "
},
{
  "id": "sec1-exercises-2-13",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-13",
  "type": "Exercise",
  "number": "1.9.8",
  "title": "",
  "body": " Consider defined as . Explain why is one-to-one but not onto. Also consider defined as is the whole number you get rounding down from . Explain why is onto but not one-to-one.  "
},
{
  "id": "sec1-exercises-2-15",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-15",
  "type": "Exercise",
  "number": "1.9.9",
  "title": "",
  "body": " Demonstrate that your left hand and right hand have the same number of fingers by describing a bijection from the set of fingers on your left hand to the set of fingers on your right hand.  "
},
{
  "id": "sec1-exercises-2-16",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-16",
  "type": "Exercise",
  "number": "1.9.10",
  "title": "",
  "body": " Demonstrate that any two singletons and have the same cardinality by giving a bijective function between them.  "
},
{
  "id": "sec2-roman",
  "level": "1",
  "url": "sec2-roman.html",
  "type": "Section",
  "number": "2.1",
  "title": "Roman Numerals",
  "body": " Roman Numerals  It is easy to look at ideas that are the products of millennia of work and think they are natural or obvious, and thereby take them for granted. To forestall this mismove, let's look at a clumsy numeral system before an efficient one. We will look at one which still sees limited use, e.g. sometimes for dates. Namely we will look at Roman numerals .  The kernel of the idea for Roman numerals can be seen in tally marks. Here, a number is represented by the corresponding number of tallies. For example, and . Beyond very small numbers this hard to read, so there are devices such as grouping tally marks by fives by writing the fifth tally mark diagonally across the group. Roman numerals iterate on this idea by having different letters stand for different quantities. Rather than writing three groups of ten tally marks to mean you would just write XXX, with each X standing for ten.  Roman numerals  From smallest to largest, these are the quantities letters represent in Roman numerals. I represents .  V represents .  X represents .  L represents .  C represents .  D represents .  M represents . These are combined according to the following rules. Up to three I's, X's, C's, or M's may be written in a row to represent that many s, s, and so on. V's, L's, and D's can only be written in groups of one, possibly followed by the next lowest denomination. For example, VII represents .  To represent four or nine copies you use subtractive notation: IV for , IX for , XL for , XC for , CD for , and CM for .  Write the letters representing different denominations from largest to smallest. For example, MCXI represents the number and MMCDVI represents the number .    Here are a few examples of Roman numerals. is XL + VIII = XLVIII.  is MM + XX + VI = MMXXVI.  is MMM + CM + XC + IX = MMMCMXCIX, the largest number that can be represented.  is MM + III = MMIII.  is CD + IX = CDIX.   There are many downsides to Roman numerals. Just writing and reading them can be awkward, as you maybe got from these examples. The rules are finnicky, and the subtractive notation means that a symbol can play two different roles; depending on location, X might mean add ten, or it might mean subtract ten.  Another downside is that Roman numerals can only represent numbers up to . While that suffices for many everyday uses, such as dates, it quickly becomes a problem. You can address the problem by expanding the notation—introduce new letters for , , and so on. But that just pushed the problem upward a little. What do you do when you run out of letters?  The biggest problem, however, is that Roman numerals don't admit easy calculations. How do you quickly compute the sum LXXIV + XLVIII? Indeed, even when Roman numerals were in common use to write numbers, actual calculations were done by representing numbers with abacuses. For that reason, we won't even try to come up with algorithms for doing calculations with Roman numerals. Instead, we will look at a better system.  "
},
{
  "id": "sec2-roman-2",
  "level": "2",
  "url": "sec2-roman.html#sec2-roman-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Roman numerals "
},
{
  "id": "sec2-roman-4",
  "level": "2",
  "url": "sec2-roman.html#sec2-roman-4",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Roman numerals.",
  "body": "Roman numerals  From smallest to largest, these are the quantities letters represent in Roman numerals. I represents .  V represents .  X represents .  L represents .  C represents .  D represents .  M represents . These are combined according to the following rules. Up to three I's, X's, C's, or M's may be written in a row to represent that many s, s, and so on. V's, L's, and D's can only be written in groups of one, possibly followed by the next lowest denomination. For example, VII represents .  To represent four or nine copies you use subtractive notation: IV for , IX for , XL for , XC for , CD for , and CM for .  Write the letters representing different denominations from largest to smallest. For example, MCXI represents the number and MMCDVI represents the number .  "
},
{
  "id": "sec2-roman-5",
  "level": "2",
  "url": "sec2-roman.html#sec2-roman-5",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Here are a few examples of Roman numerals. is XL + VIII = XLVIII.  is MM + XX + VI = MMXXVI.  is MMM + CM + XC + IX = MMMCMXCIX, the largest number that can be represented.  is MM + III = MMIII.  is CD + IX = CDIX.  "
},
{
  "id": "sec2-hindu-arabic",
  "level": "1",
  "url": "sec2-hindu-arabic.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Hindu–Arabic numeral system",
  "body": " The Hindu–Arabic numeral system  A key insight of this numeral system is that it is a positional system. This means that the magnitude a symbol represents is determined in part by its location. This enables a greater flexibility, that both allows arbitrarily large numbers to written and facilitates easier calculations. In this section we describe how to write numbers in this system, and in the following section we will see how to do calculations with them.  First, a little history to explain the name. The Hindu-Arabic numeral system originates in India and moved west to the Arabic world. An important milestone here is the work of the Persian mathematician Al-Khwarizmi (whose name the word algorithm derives from). He wrote books on calculations with these numerals and on algebra calculation. Indeed, the word algebra comes from the title of one of his works. From the Arabic world these numerals eventually made their way to Italy and the rest of Europe. Eventually, they overtook their competitors due to their better facilitation of calculation, until they became the numeral system we teach to schoolchidren today.  An important discovery to enable the positional system was the number zero. For example, consider the numbers , , and . In each of these, is in the units place, counting the number of ones in the quantity. The , however, varies. In these numbers it counts, in order, the number of tens, hundreds, or thousands. If we didn't have a digit for zero how would we distinguish these? If you write them all as you can't tell them apart. Leaving space is hardly any better and is prone to error. How many spaces does have?  One solution to this problem, such as in a numeral system used by the ancient Greeks, is to use a different symbol for versus . Then there is no ambiguity which is meant. This has similar shortcomings as the Roman numeral system. You also need a new symbol for , , and so on. Useable if you're only dealing with small numbers, but unwieldy when things start to get large.  With you can use the single symbol to refer to all of these, with the position—the number of other digits to the right—determining whether it represents one ten, one hundred, one thousand, or so on.   Consider the number . This represents three hundreds plus seven tens plus two ones. (It is common to say units instead of ones .) That is, this represents the number given by Or consider the number . This represents Or consider the number . This represents Note that in each case, each digit represents some number of a power of ten.   As these examples illustrate, this numeral system can flexibly represent numbers of any magnitude using just ten symbols. Sometimes people use a comma to separate out blocks of digits to make it easier to read. Standard convention in America is to separate out blocks of three. For example, rather than write you might write This way you can easily count blocks and see that this number is about three billion.  The Hindu–Arabic numeral system  Numbers in the Hindu–Arabic numeral system are written as finite sequences of digits . Digits are the numerals and represent the first ten natural numbers, starting at zero. Each digit in a numeral represents the corresponding number of a power of ten. The rightmost place represents the number of units s, the next place represents the number of tens s, the next represents the number of hundreds s, and so on.  In symbols, we write a number as where each digit is a numeral through . The th digit represents the number of s. So this represents the number given by   This numeral system is also called a decimal or base ten numeral system because it uses ten different digits and each place represents a power of ten.   This numeral system lets us represent numbers efficiently. If you have seen logarithms before, to represent the number we need about many digits. If you haven't seen logarithms, the point is that this number of digits is much smaller than itself. For example, to represent one million you need only seven digits. Seven is much smaller than one million! Compare to a tally mark system. To represent you need many tallies. That is horribly inefficient.  While this system is nice for writing and reading numbers, its main virtue is in how it enables efficient algorithms for arithmetic. This is the topic we turn to in the next section, and will make up the bulk of this chapter.  "
},
{
  "id": "sec2-hindu-arabic-2",
  "level": "2",
  "url": "sec2-hindu-arabic.html#sec2-hindu-arabic-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positional "
},
{
  "id": "sec2-hindu-arabic-7",
  "level": "2",
  "url": "sec2-hindu-arabic.html#sec2-hindu-arabic-7",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": " Consider the number . This represents three hundreds plus seven tens plus two ones. (It is common to say units instead of ones .) That is, this represents the number given by Or consider the number . This represents Or consider the number . This represents Note that in each case, each digit represents some number of a power of ten.  "
},
{
  "id": "sec2-hindu-arabic-9",
  "level": "2",
  "url": "sec2-hindu-arabic.html#sec2-hindu-arabic-9",
  "type": "Definition",
  "number": "2.2.2",
  "title": "The Hindu–Arabic numeral system.",
  "body": "The Hindu–Arabic numeral system  Numbers in the Hindu–Arabic numeral system are written as finite sequences of digits . Digits are the numerals and represent the first ten natural numbers, starting at zero. Each digit in a numeral represents the corresponding number of a power of ten. The rightmost place represents the number of units s, the next place represents the number of tens s, the next represents the number of hundreds s, and so on.  In symbols, we write a number as where each digit is a numeral through . The th digit represents the number of s. So this represents the number given by   This numeral system is also called a decimal or base ten numeral system because it uses ten different digits and each place represents a power of ten.  "
},
{
  "id": "sec2-algorithms",
  "level": "1",
  "url": "sec2-algorithms.html",
  "type": "Section",
  "number": "2.3",
  "title": "Algorithms for adding, subtracting, and multiplying",
  "body": " Algorithms for adding, subtracting, and multiplying  Now that we know how to write any natural number, we want to be able to do arithmetic with them. In this section we will talk about how to use Hindu-Arabic numerals to do addition, subtraction, and multiplication.  A key thing a positional numeral system does is allow us to break down a large calculation into small pieces, which can be individually tackled. All of our arithmetic algorithms will be carried out digit by digit. Rather than having to memorize what is you can break it down into three single digit problems.  Before seeing the general algorithm, let's see an example to illustrate what's going on.   Consider the sum . We will work from the units digit to the left. For the units digit, we compute the sum . We know that will be the units digit of the sum because the rest of the digits of the summands are too large to affect the units digit. Next we handle the tens digit. We compute . That is, the tens from the two summands add up to tens in the sum. We will keep as the tens digit of the sum, carrying the over to be part of the hundreds digit. Finally, for the hundreds digit we do . Altogether, the sum is .   A few points. First, this example was intentionally wordy to emphasize the process. The algorithm you remember from elementary school is the same idea, but in a compact and efficient form. Second, note that the number of steps in the process was the number of digits in the summands. Each extra digit adds one more step. In other words, you can solve a problem ten times as large with just one extra step. That is very efficient. Third, for each step we had to do a sum of one-digit numbers. For this to be fast we relied on having the one-digit sums memorized. You can do this process without having them memorized, but it will be a slower process.   This explains the reason for making children learn times tables and similar for addition\/subtraction. Certainly one can critique the implementation—for example, timed quizzes creating counterproductive stress for students. But larger calculations consist of multiple single digit calculations done in succession. For example, multiplying two three digit numbers requires nine one-digit multiplications. Besides the speed advantage of automatic recall of these one-digit results, it reduces the cognitive load on the student. This allows them to focus their attention on mastering the new concepts.  This is a pattern that recurs in mathematics education. A student who needs to spend a lot of mental energy on arithmetic will have a harder time picking up algebra. A student who needs to spend a lot of mental energy on algebra will have a harder time picking up calculus. This is why elementary educators—people like you!—play such an important role in math education. What you teach is the foundation for the rest of their education.   This example done, let's move on to the general algorithm. First I'll verbally describe it, then I'll show a compact way to visually organize the calculation.  Algorithm for addition  To add two numbers written in the Hindu–Arabic numeral system, use the following procedure, starting at the units digit and moving to the left. Add the two digits together to get the total for the corresponding digit of the sum. If the total is , that is the digit for the sum. If the total is , the units digit becomes the digit for the sum and the in the tens digit gets carried left to be added to the next digit.  If one number has more digits than the other, treat the empty digits as s. That is, the digit for the sum is just the lone digit copied, possibly with carried from the previous digit.  Stop when you have exhausted all digits for both numbers. If there is a being carried, put it in the next digit for the sum.     Now let's see a visual representation of a sum.  The sum . This is the same example as before, but with a compact representation rather than a short essay.  The algorithm for computing the sum 342 + 596. The numbers are written on top of each other so that the digits line up column by column. In this way, you can start at the rightmost column, do the one-digit sum there, and move left to the next column, possibly carrying a . You can write the above the column to denote the carrying, or you might prefer to keep it in your head. In each column, the digit of the sum is written below a horizontal bar, so that it is easy to read off the final answer.    This algorithm is flexible and can be modified to handle adding more than two numbers. To do so, rather than add two digits per column, you add more than that. This has the extra complication that carrying is more common and it's possible to have to carry or more. (If you add a truly absurd volume of numbers you might have to carry forward two digits, but there's a simple solution to that: don't add so many numbers at once. If you must, break it up into smaller sums and combine them.) Here's an example.  The sum .  The algorithm for computing the sum 123 + 456 + 789. Like with the previous example, the numbers are written on top of each other so that the digits line up column by column. The only difference is now there are three digits in each column, plus the digit for the sum. Note that there's a carrying of happening from the units to the tens digit in this sum. Carries are not shown.    Let's move on now to subtraction. Like with addition, we proceed digit by digit, starting at the units digit moving to the left. An example before the general algorithm.   We compute the difference . For the units digit we do to get the units digit of the difference. For the tens digit, we first try , but that's a problem because . To make this work, we have to borrow a from the hundreds column. Then the subtraction is , giving us the tens digit of the difference. Finally, for the hundreds digit we borrowed a so we have to reduce our minuend by one: . We then do to get the hundreds of the difference. Altogether, this gives as the difference.   With addition, we sometimes had extra value spill over and be carried to the next column. Subtraction, being the opposite of addition, has the opposite phenomenon—we have to borrow extra value from the next column. You might worry that we borrow so much that eventually there's not enough left. That's what would happen if you tried to subtract a larger number from a smaller. But as long as we keep where subtraction is defined on the natural numbers—subtracting a smaller number from a larger—this will not be a problem.  Remember the terminology. It's minuend – subtrahend = difference!  Algorithm for subtraction  To subtract a subtrahend from a larger minuend, both written in the Hindu–Arabic numeral system, use the following procedure, starting at the units digit and moving to the left. Subtract the two digits together to get the corresponding digit of the difference. If you are subtracting a smaller digit, there is no complication. If you are subtracting a larger digit, you need to borrow a from the next digit so that you are subtracting a smaller number.  If the previous digit had to borrow a , subtract from the digit of the minuend before subtracting digits. This might require you to borrow from the next digit.  If the minuend has more digits than the subtrahend, treat the empty digits as s. That is, the digit for the difference is just the lone digit copied, possibly with borrowed by the previous digit.  Stop when you have exhausted all digits for both numbers.     The difference . This is the same example as before, but with a compact representation rather than a short essay.  The algorithm for computing the difference 437 - 182. The numbers are written on top of each other so that the digits line up column by column. In this way, you can start at the rightmost column, do the one-digit difference there, and move left to the next column, possibly borrowing . To represent borrowing, you can cross out the digit and replace it with one lower, or you might prefer to keep it in your head. In each column, the digit of the difference is written below a horizontal bar, so that it is easy to read off the final answer.    Now let's discuss multiplication. Algorithms from multiplication are built on an algebra fact, namely the distributive property of multiplication: If is itself a sum, you can distribute twice: You can visualize this double distributivity by drawing it as a box. The two columns represent and while the two rows represent and . Each square in the box represents the product of the two, and the overall product is the sum of all four squares.  The multiplication box for .                                 If each of represents a single digit, then to carry out the multiplications inside the squares only requires you to know the one-digit products, similar to how we reduced the algorithms for addition and subtraction to knowing the one-digit sums and differences. For example consider the multiplication We think of this as , and we can use a multiplication box.  The multiplication box for .                                 To get the overall product we add up these four numbers: And thus we have calculated .   Use the box method to calculate the product .   This box method can be used for any two digit multiplication. If you do enough of them, you'll start to notice that the upper left number always has two , the upper right and lower left squares have one , and the bottom right square has none. (Caveat: you may have extra zeros from the one-digit multiplication, for example if its .) You may find it convenient to not write the extra zeroes and only write the value of the one-digit product, knowing where to put zeroes when adding them up. Or you may prefer to always write out the zeroes.  You can adjust the box method to work with more two digits of multiplication. For example, to multiply two three-digit numbers you would need a box with squares in it. You would do the multiplication for each square, then add up all nine numbers. In general, to multiply an -digit number by an -digit number you need a box with many squares to add up.  Larger boxes can get unwieldy, so let's look at a different presentation of the same idea. This looks more like the presentation of the algorithms for addition and subtraction. It essentially amounts to collapsing the box into a single column. Accordingly, as a stepping stone we will first look at multiplying by a one-digit number.   Let's do the multiplication . We think of this as . Do each one-digit multiplication separately and then add the answers. We can organize this into a box.  The multiplication box for .                       Adding up the values we get that the product is .  You could also write this in the column format similar to the algorithms for addition and multiplication. First compute to get , which means in the units place and carry the to the tens digit. Then in the tens digit we do and add in the carried to get . That means in the tens column and carry the other to the hundreds place.  The product .  The algorithm for computing the product , following the process in the above paragraph. Carries are not shown explicitly.     This process lets us do a multiplication by a one-digit number as a single row. To do a multiplication by a multi-digit number we do this process for each digit, then add everything together. When we do this, we offset the multiplication by a number of tens to account for the position shift given by the ten. Let's see an example.   Let's do the multiplication . We think of this as . Each of these multiplications requires computing two one-digit products. For the first, , and we must remember to carry the one to the next column, and , so the overall product is . For the second, (carry the four) and (carry the one again). So the overall product is . Note the extra zero, which came from the zero in . We then add up these two numbers to get an overall product of .  This description of the algorithm can be organized neatly.  The product .  The algorithm for computing the product . The numbers are written on top of each other so that the digits line up column by column. Each row below the first horizontal bar represents one of the two products: then . We then add these up to get the overall product, which we write below the second horizontal bar. Excess zeroes from position are left blank for ease of reading and writing. Carries are not shown explicitly.      Use the box method to compute . Compare the two methods.   Both methods require four one-digit multiplications. The box method organizes it into four different squares while the columns method does them two at a time, organizing them into rows. This makes it more compact, which is convenient when doing larger multiplications. For instance, to multiply two three-digit numbers it would have three rows to add up for the overall product, while the box method would have nine squares to add.  Algorithm for multiplication.  To multiply two multi-digit numbers and , do the following. Write and aligned so that the units, tens, etc. places are in the same columns.  Multiply by the units digit of , according to the above method. Write this product aligned with the units digits of the inputs.  Multiply by the next digit of . Write this product aligned with the next column of the inputs.  Repeat this process until all digits of are used up. Finally, sum up the partial products to get the overall product.     This algorithm works fine if has more digits than . But it's nicer to organize it so the second multiplicand is the one with fewer digits. This way there's fewer rows to write down and add up.  Let's see an example. We will multiply .  The product .  The algorithm for computing the product . The numbers are written on top of each other so that the digits line up column by column. Each row below the first horizontal bar represents one of the two products: then . We then add these up to get the overall product, which we write below the second horizontal bar. Excess zeroes from position are left blank for ease of reading and writing. Carries are not shown explicitly.     Use a version of the box method to calculate . (You will need a box.) Compare the two methods.   The box method and the columns method are essentially the same algorithm. At base, each reduces the multi-digit multiplication into many one-digit multiplications. And both rely on the same algebric property to work, namely the distributivity of multiplication over addition. In a sense, it's not quite right to say they are two different methods. Rather, they are two different ways of organizing the same method. A common trick in mathematics education is to present multiple views on the same concept. Different lenses work better for different people, and the flexibility to see the same thing in different ways is valuable for future learning.  For certain products you can optimize the space the column method takes up. Namely, if a digit is then multiplying by it gives , so you can just not write down the row corresponding to multiplication by that digit. For example, the multiplication can be done with only two rows.  The product .  The algorithm for computing the product . On the left, only the rows corresponding to multiplication by a nonzero digit are shown. On the right, all rows are shown. Three of them are all zeroes and don't contribute anything to the overall product.    "
},
{
  "id": "sec2-algorithms-5",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-5",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": " Consider the sum . We will work from the units digit to the left. For the units digit, we compute the sum . We know that will be the units digit of the sum because the rest of the digits of the summands are too large to affect the units digit. Next we handle the tens digit. We compute . That is, the tens from the two summands add up to tens in the sum. We will keep as the tens digit of the sum, carrying the over to be part of the hundreds digit. Finally, for the hundreds digit we do . Altogether, the sum is .  "
},
{
  "id": "sec2-algorithms-9",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-9",
  "type": "Definition",
  "number": "2.3.2",
  "title": "Algorithm for addition.",
  "body": "Algorithm for addition  To add two numbers written in the Hindu–Arabic numeral system, use the following procedure, starting at the units digit and moving to the left. Add the two digits together to get the total for the corresponding digit of the sum. If the total is , that is the digit for the sum. If the total is , the units digit becomes the digit for the sum and the in the tens digit gets carried left to be added to the next digit.  If one number has more digits than the other, treat the empty digits as s. That is, the digit for the sum is just the lone digit copied, possibly with carried from the previous digit.  Stop when you have exhausted all digits for both numbers. If there is a being carried, put it in the next digit for the sum.    "
},
{
  "id": "sec2-algorithms-11",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-11",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "The sum . This is the same example as before, but with a compact representation rather than a short essay.  The algorithm for computing the sum 342 + 596. The numbers are written on top of each other so that the digits line up column by column. In this way, you can start at the rightmost column, do the one-digit sum there, and move left to the next column, possibly carrying a . You can write the above the column to denote the carrying, or you might prefer to keep it in your head. In each column, the digit of the sum is written below a horizontal bar, so that it is easy to read off the final answer.   "
},
{
  "id": "sec2-algorithms-13",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-13",
  "type": "Figure",
  "number": "2.3.4",
  "title": "",
  "body": "The sum .  The algorithm for computing the sum 123 + 456 + 789. Like with the previous example, the numbers are written on top of each other so that the digits line up column by column. The only difference is now there are three digits in each column, plus the digit for the sum. Note that there's a carrying of happening from the units to the tens digit in this sum. Carries are not shown.   "
},
{
  "id": "sec2-algorithms-15",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-15",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": " We compute the difference . For the units digit we do to get the units digit of the difference. For the tens digit, we first try , but that's a problem because . To make this work, we have to borrow a from the hundreds column. Then the subtraction is , giving us the tens digit of the difference. Finally, for the hundreds digit we borrowed a so we have to reduce our minuend by one: . We then do to get the hundreds of the difference. Altogether, this gives as the difference.  "
},
{
  "id": "sec2-algorithms-18",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-18",
  "type": "Definition",
  "number": "2.3.6",
  "title": "Algorithm for subtraction.",
  "body": "Algorithm for subtraction  To subtract a subtrahend from a larger minuend, both written in the Hindu–Arabic numeral system, use the following procedure, starting at the units digit and moving to the left. Subtract the two digits together to get the corresponding digit of the difference. If you are subtracting a smaller digit, there is no complication. If you are subtracting a larger digit, you need to borrow a from the next digit so that you are subtracting a smaller number.  If the previous digit had to borrow a , subtract from the digit of the minuend before subtracting digits. This might require you to borrow from the next digit.  If the minuend has more digits than the subtrahend, treat the empty digits as s. That is, the digit for the difference is just the lone digit copied, possibly with borrowed by the previous digit.  Stop when you have exhausted all digits for both numbers.    "
},
{
  "id": "sec2-algorithms-19",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-19",
  "type": "Figure",
  "number": "2.3.7",
  "title": "",
  "body": "The difference . This is the same example as before, but with a compact representation rather than a short essay.  The algorithm for computing the difference 437 - 182. The numbers are written on top of each other so that the digits line up column by column. In this way, you can start at the rightmost column, do the one-digit difference there, and move left to the next column, possibly borrowing . To represent borrowing, you can cross out the digit and replace it with one lower, or you might prefer to keep it in your head. In each column, the digit of the difference is written below a horizontal bar, so that it is easy to read off the final answer.   "
},
{
  "id": "sec2-algorithms-20",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distributive "
},
{
  "id": "sec2-algorithms-21",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-21",
  "type": "Table",
  "number": "2.3.8",
  "title": "The multiplication box for <span class=\"process-math\">\\((a+b) \\cdot (y + z)\\text{.}\\)<\/span>",
  "body": "The multiplication box for .                                "
},
{
  "id": "sec2-algorithms-23",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-23",
  "type": "Table",
  "number": "2.3.9",
  "title": "The multiplication box for <span class=\"process-math\">\\(13 \\cdot 27\\text{.}\\)<\/span>",
  "body": "The multiplication box for .                                "
},
{
  "id": "sec2-algorithms-25",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-25",
  "type": "Checkpoint",
  "number": "2.3.10",
  "title": "",
  "body": " Use the box method to calculate the product .  "
},
{
  "id": "sec2-algorithms-29",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-29",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": " Let's do the multiplication . We think of this as . Do each one-digit multiplication separately and then add the answers. We can organize this into a box.  The multiplication box for .                       Adding up the values we get that the product is .  You could also write this in the column format similar to the algorithms for addition and multiplication. First compute to get , which means in the units place and carry the to the tens digit. Then in the tens digit we do and add in the carried to get . That means in the tens column and carry the other to the hundreds place.  The product .  The algorithm for computing the product , following the process in the above paragraph. Carries are not shown explicitly.    "
},
{
  "id": "sec2-algorithms-31",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-31",
  "type": "Example",
  "number": "2.3.14",
  "title": "",
  "body": " Let's do the multiplication . We think of this as . Each of these multiplications requires computing two one-digit products. For the first, , and we must remember to carry the one to the next column, and , so the overall product is . For the second, (carry the four) and (carry the one again). So the overall product is . Note the extra zero, which came from the zero in . We then add up these two numbers to get an overall product of .  This description of the algorithm can be organized neatly.  The product .  The algorithm for computing the product . The numbers are written on top of each other so that the digits line up column by column. Each row below the first horizontal bar represents one of the two products: then . We then add these up to get the overall product, which we write below the second horizontal bar. Excess zeroes from position are left blank for ease of reading and writing. Carries are not shown explicitly.    "
},
{
  "id": "sec2-algorithms-32",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-32",
  "type": "Checkpoint",
  "number": "2.3.16",
  "title": "",
  "body": " Use the box method to compute . Compare the two methods.  "
},
{
  "id": "sec2-algorithms-34",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-34",
  "type": "Definition",
  "number": "2.3.17",
  "title": "Algorithm for multiplication..",
  "body": "Algorithm for multiplication.  To multiply two multi-digit numbers and , do the following. Write and aligned so that the units, tens, etc. places are in the same columns.  Multiply by the units digit of , according to the above method. Write this product aligned with the units digits of the inputs.  Multiply by the next digit of . Write this product aligned with the next column of the inputs.  Repeat this process until all digits of are used up. Finally, sum up the partial products to get the overall product.    "
},
{
  "id": "sec2-algorithms-37",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-37",
  "type": "Figure",
  "number": "2.3.18",
  "title": "",
  "body": "The product .  The algorithm for computing the product . The numbers are written on top of each other so that the digits line up column by column. Each row below the first horizontal bar represents one of the two products: then . We then add these up to get the overall product, which we write below the second horizontal bar. Excess zeroes from position are left blank for ease of reading and writing. Carries are not shown explicitly.   "
},
{
  "id": "sec2-algorithms-38",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-38",
  "type": "Checkpoint",
  "number": "2.3.19",
  "title": "",
  "body": " Use a version of the box method to calculate . (You will need a box.) Compare the two methods.  "
},
{
  "id": "sec2-algorithms-41",
  "level": "2",
  "url": "sec2-algorithms.html#sec2-algorithms-41",
  "type": "Figure",
  "number": "2.3.20",
  "title": "",
  "body": "The product .  The algorithm for computing the product . On the left, only the rows corresponding to multiplication by a nonzero digit are shown. On the right, all rows are shown. Three of them are all zeroes and don't contribute anything to the overall product.   "
},
{
  "id": "sec2-bases",
  "level": "1",
  "url": "sec2-bases.html",
  "type": "Section",
  "number": "2.4",
  "title": "Other bases",
  "body": " Other bases  Our number system is base or decimal . There are ten digits, and each column we write represents a power of . There's nothing special about here. You can write numbers with any base and the algorithms we've discussed still work, with appropriate modification.  The most used base besides is base , also called binary . In binary, there are only two bits (= binary digits ), namely and . Each column represents a power of , with representing that you include that power of while represents excluding that power of . This simplicity of each bit being either on or off is part of why binary works so well in computers. The ons versus offs— s versus s—can be implemented in electrical circuits and you can connect wires with logic gates to create hardware that can perform calculations such as addition or multiplication.  For example, consider the binary number . This number represents the value Or consider these examples. Note that it takes more bits than it did digits to represent the same numbers. In decimal we can write two digits for while in binary it takes five bits .  Another base that gets used with computers is base , also called . Because , hexadecimal lets you collapse four bits into a single hexit (= hexadecimal digit ). Because we need sixteen hexits, we need new symbols for the ones beyond . Standard practice is to use the letters a through f, so that   For example, consider the two hexit number . This number represents You might instead convert it to binary. This is easier to do, because you can simply replace each hexit with the four bits it is equivalent to. In this case, and so   Back to binary, when doing one-digit sums or products there's only a small number of possible cases. This allows you to produce simple rules. For example, when adding you will carry a just in case both inputs are s. And for the value left in that column, it will be if both inputs are the same and it will be if the colums are different. If you're adding three numbers, you carry if at least two of them are s and the value in that column is just in case an odd number of inputs are s. Rather than having a table of about a hundred one-digit sums memorized, you can simply apply these a few simple rules repeatedly. This comes with the trade-off mentioned earlier; more bits to represent the same number means you have to apply this simpler rule a larger number of times.  Indeed, what I've just described is essentially how the circuit called an adder works. The inputs are ons and offs representing two numbers in binary, and these rules are repeatedly applied to quickly calculate the sum. In this way you can make it so a computer's processor can compute sums. Other operations such as multiplication, division, and so on can be implemented using more complicated circuits.   Compute the following binary sum: .   "
},
{
  "id": "sec2-bases-2",
  "level": "2",
  "url": "sec2-bases.html#sec2-bases-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decimal "
},
{
  "id": "sec2-bases-3",
  "level": "2",
  "url": "sec2-bases.html#sec2-bases-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary bits binary digits logic gates "
},
{
  "id": "sec2-bases-5",
  "level": "2",
  "url": "sec2-bases.html#sec2-bases-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hexit hexadecimal digit "
},
{
  "id": "sec2-bases-8",
  "level": "2",
  "url": "sec2-bases.html#sec2-bases-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adder "
},
{
  "id": "sec2-bases-9",
  "level": "2",
  "url": "sec2-bases.html#sec2-bases-9",
  "type": "Checkpoint",
  "number": "2.4.1",
  "title": "",
  "body": " Compute the following binary sum: .  "
},
{
  "id": "sec2-exercises",
  "level": "1",
  "url": "sec2-exercises.html",
  "type": "Section",
  "number": "2.5",
  "title": "Exercises",
  "body": " Exercises       An important fact we used over and over in the algorithms for multiplying is that multiplying by a power of ten means adding zeroes to the right of a number. Give an explanation for this fact. That is, explain why if is a digit then can be written as . More generally, explain why can be written as and can be written as . What is the rule for ?    Do the following calculations using the column algorithms. Show all steps in your work.     Calculate the following product using both the box and columns methods. Show all steps in your work.     When adding two numbers you might have to carry a into the next digit, but you never have to carry a or higher. Explain this phenomenon. If you add three numbers, what are the possible values you might have to carry to the next digit? What if you add four numbers? Explain.    When multiplying a number by a one-digit number, you often have to carry a value into the next digit. Unlike with adding two numbers where you only carried s, with multiplying you can also carry s, s, and so on. Is it ever possible that you have to carry so much that you to carry ahead to the next two digits, not just the next one digit? Explain your answer. If it is possible, give an example to demonstrate. If it is not possible, what is the largest amount you might have to carry to the next digit?    Describe a cube method for calculating the product of three two-digit numbers. Use your method to calculate . Reflect on whether this is better than doing a two step multiplication (i.e. first multiply and then multiply the result by ).  Use a cube where each of the spots corresponds to a multiplication of three one-digit numbers.    Consider the number written in base . Rewrite it in bases , , and .    Modify the addition algorithm to calculate the base sum Show all your work.  Instead of each step in the calculation being a one-digit decimal sum, it will be a one-digit base sum.    Modify the subtraction algorithm to calculate the base difference Show all your work.  Instead of each step in the calculation being a one-digit decimal difference, it will be a one-digit base difference.    Modify the multiplication method—your choice of the box version of the column version—to do the binary multiplication Show all your work.    "
},
{
  "id": "sec2-exercises-2-1",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " An important fact we used over and over in the algorithms for multiplying is that multiplying by a power of ten means adding zeroes to the right of a number. Give an explanation for this fact. That is, explain why if is a digit then can be written as . More generally, explain why can be written as and can be written as . What is the rule for ?  "
},
{
  "id": "sec2-exercises-2-2",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-2",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " Do the following calculations using the column algorithms. Show all steps in your work.   "
},
{
  "id": "sec2-exercises-2-3",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-3",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " Calculate the following product using both the box and columns methods. Show all steps in your work.   "
},
{
  "id": "sec2-exercises-2-4",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-4",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": " When adding two numbers you might have to carry a into the next digit, but you never have to carry a or higher. Explain this phenomenon. If you add three numbers, what are the possible values you might have to carry to the next digit? What if you add four numbers? Explain.  "
},
{
  "id": "sec2-exercises-2-5",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-5",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": " When multiplying a number by a one-digit number, you often have to carry a value into the next digit. Unlike with adding two numbers where you only carried s, with multiplying you can also carry s, s, and so on. Is it ever possible that you have to carry so much that you to carry ahead to the next two digits, not just the next one digit? Explain your answer. If it is possible, give an example to demonstrate. If it is not possible, what is the largest amount you might have to carry to the next digit?  "
},
{
  "id": "sec2-exercises-2-6",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-6",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": " Describe a cube method for calculating the product of three two-digit numbers. Use your method to calculate . Reflect on whether this is better than doing a two step multiplication (i.e. first multiply and then multiply the result by ).  Use a cube where each of the spots corresponds to a multiplication of three one-digit numbers.  "
},
{
  "id": "sec2-exercises-2-7",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-7",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": " Consider the number written in base . Rewrite it in bases , , and .  "
},
{
  "id": "sec2-exercises-2-8",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-8",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": " Modify the addition algorithm to calculate the base sum Show all your work.  Instead of each step in the calculation being a one-digit decimal sum, it will be a one-digit base sum.  "
},
{
  "id": "sec2-exercises-2-9",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-9",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": " Modify the subtraction algorithm to calculate the base difference Show all your work.  Instead of each step in the calculation being a one-digit decimal difference, it will be a one-digit base difference.  "
},
{
  "id": "sec2-exercises-2-10",
  "level": "2",
  "url": "sec2-exercises.html#sec2-exercises-2-10",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": " Modify the multiplication method—your choice of the box version of the column version—to do the binary multiplication Show all your work.  "
},
{
  "id": "sec3-blah",
  "level": "1",
  "url": "sec3-blah.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prime numbers",
  "body": " Prime numbers  If we think of natural numbers as being formed by multiplication, then the building blocks are those numbers we can't split up any further. These are what we call the prime numbers. For example, we can break up as , but there's no way to break up into a multiplication of two smaller numbers.  Divisibility  Let and be natural numbers. We say that  divides  if is a multiple of , that is if for some natural number . Symbolically we write this as . This concept has many synonyms; you also hear is a divisor of , is a factor of , or is a multiple of .  For example, is a factor of because .  A useful fact is that the divisibility relation is what mathematicians call transitive : if and then . For example, if you know that then you can automatically conclude that , because .  Primes and composites  A natural number is called prime if it has exactly two divisors, itself and . A natural number is called composite if it has more than two divisors. Equivalently, is composite if it can be written as a product of two smaller numbers: where .  A few comments are in order. First, observe that is neither prime nor composite. This is intentional. One practical reason is that allowing to be prime means we'd have to awkwardly exclude it in important results about prime numbers; see and the discussion afterward. Lurking behind this is the fact that multiplying by doesn't change a number. If we allowed as a basic building block of forming numbers by multiplication we'd always be able to add more blocks. One way to think about this is, is the value you get before you start doing any multiplying; we want to think of as what you get by multiplying together many numbers. Thus it doesn't make sense to consider as a prime number.  Second, let's see why the two definitions of composite are equivalent. For one direction, think of a number like with more than two divisors. Since it has itself and and divisors, that means it has a divisor between and itself. But if, say, is a divisor of that means you can split into a product of two smaller numbers: . For the other direction, if you can write, for example, then that gives more divisors on top of and , so has more than two divisors.   List the first ten prime numbers.   A prime factorization of a number is a complete factorization of it down to primes. For example, is not a prime factorization, because is not prime. But is a prime factorization, since you can't factor any further. An important result is every number has a prime factorization.  The fundamental theorem of arithmetic  Every positive natural number has a unique prime factorization.  Note that this theorem says two things. First, it says that for any number there is some way to write a prime factorization of it. Second, it says that there is only one way to do so. To be more clear, you can write a prime factorization in different orders. For instance, Rearranging the order of the multiplication doesn't count as a different factorization; as we know, order doesn't matter for multiplication. Also, let me highlight the role of . If we had decided that counted as a prime number then we would have many different prime factorizations for any number: So we would've had to pharse the result like, every positive natural number has a unique prime factorization where we exclude s . Thus we see the practical utility in excluding from the prime numbers.  Second, you might wonder whether itself has a prime factorization. It does. Namely, is what you get when you multiply zero primes together. If this bothers you, feel free to imagine the fundamental theorem of algebra saying that every number has a prime factorization.  To close out this section, let me mention another fundamental result about prime numbers. This theorem dates back at least as far as the ancient Greek mathematician Euclid (circa 300 BCE).  The infinitude of primes  There are infinitely many prime numbers. Phrase differently, for any natural number there is a prime number .  A more recent result, from 1896, tells us more about where the prime numbers are. By Euclid, no matter how far out you go there's always more prime numbers. The prime number theorem says that they get more and more sparse; there's more prime numbers to be found but you will have to look further and further out. (The precise statement of the prime number theorem requires both logarithms and ideas from calculus, so let me leave you with this gloss.)  The fundamental theorem of arithmetic tells us that every number has a prime factorization. Euclid's theorem tells us that these factorizations aren't composed of just a few small prime numbers. In general, the prime factorization of a number can include primes at the same order of magnitude of the number itself. As such, you might not be surprised to hear that the problem of finding the prime factorization for a number is in general very hard. Indeed, it can be so hard that it is used as the basis of the RSA cryptosystem . Put crudely, if you've ever wondered how you can access your bank info over the internet without anyone stealing it, that is because it can be really hard to factor numbers.  Nonetheless, for some small numbers there are rules you can learn to determine divisibility. This is the topic we turn to in the next section.  "
},
{
  "id": "sec3-blah-3",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-3",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Divisibility.",
  "body": "Divisibility  Let and be natural numbers. We say that  divides  if is a multiple of , that is if for some natural number . Symbolically we write this as . This concept has many synonyms; you also hear is a divisor of , is a factor of , or is a multiple of . "
},
{
  "id": "sec3-blah-5",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transitive "
},
{
  "id": "sec3-blah-6",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-6",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Primes and composites.",
  "body": "Primes and composites  A natural number is called prime if it has exactly two divisors, itself and . A natural number is called composite if it has more than two divisors. Equivalently, is composite if it can be written as a product of two smaller numbers: where . "
},
{
  "id": "sec3-blah-9",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-9",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "",
  "body": " List the first ten prime numbers.  "
},
{
  "id": "sec3-blah-10",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime factorization "
},
{
  "id": "thm3-fta",
  "level": "2",
  "url": "sec3-blah.html#thm3-fta",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "The fundamental theorem of arithmetic.",
  "body": "The fundamental theorem of arithmetic  Every positive natural number has a unique prime factorization. "
},
{
  "id": "sec3-blah-15",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-15",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "The infinitude of primes.",
  "body": "The infinitude of primes  There are infinitely many prime numbers. Phrase differently, for any natural number there is a prime number . "
},
{
  "id": "sec3-blah-16",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime number theorem "
},
{
  "id": "sec3-blah-17",
  "level": "2",
  "url": "sec3-blah.html#sec3-blah-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "RSA cryptosystem "
},
{
  "id": "sec3-blahblah",
  "level": "1",
  "url": "sec3-blahblah.html",
  "type": "Section",
  "number": "3.2",
  "title": "Divisibility Rules",
  "body": " Divisibility Rules  In this section we learn rules for checking divisibility by a small number. Let's start with the easiest and, for that reason, the least useful.  Rule for divisibility by  A natural number is always divisible by .  Because .  Let's see a more useful rule.  Rule for divisibility by  A natural number is divisible by if the last digit of is .  Every other digit of represents times something, so the only way could fail to be a multiple of is if the units digit is nonzero.  Knowing the rule for divisibility by lets us also know rules for divisibility by and , because .  Rule for divisibility by  A natural number is divisible by if and only if its last digit is even: or .  The other digits of represent a number divisible by , and hence also divisible by . So all that remains is to check that the quantity represented by the units digit is divisible by . Those are the five even numbers which are one digit.  Rule for divisibility by  A natural number is divisible by if and only if its last digit is either or .  Same logic as the rule for . The only possible issue is the units digit, so check if the units digit is one of the two one-digit numbers divisible by .  Before we see the rule for , let's look at an example. Consider the number . You can break this apart as follows. When you expand out the multiplications, everything with a as a term is a multiple of . The remainder are , , and . So is a multiple of if and only if these remainders sum to a multiple of . But this is just looking at the sum of the digits.  Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of . (To check if the sum of the digits is a multiple of , repeat this process until you get to a small enough number you don't need to check.)  Do what we did with , except you have to write it abstractly to work for any number.  The same idea gives us a divisibility rule for . What we used in the breakdown for was s, and those will also give divisibility by .  Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of .  Same as with .  We can get a rule for by combining the rules for and . This is because and so checking divisibility by is the same as checking divisibility by both and .  Rule for divisibility by  A natural number is divisible by if and only if its last digit is even and the sum of its digits is a multiple of .  Explained above.  The rules for and are maybe a little less convenient, but they are the best we can do.  Rule for divisibility by  A natural number is divisible by if and only if its last two digits form a number divisible by .  The rest of the digits represent a quantity divisible by , and is a multiple of . So the only thing to check is that the last two digits are divisible by .  Rule for divisibility by  A natural number is divisible by if and only if its last three digits form a number divisible by .  Similar to the rule for . Namely, the rest of the digits represent a quantity divisible by , and . So the only thing to check is that the last three digits are divisible by .  There's too many two digit and three digit numbers to memorize which of them are divisible by and . But at least checking a two or three digit number is easier than many digit number.  Conspicuously missing from this list is a divisibility rule for . This is not because there is no rule for , but because any rule for is too complicated to be practically useful. You will discover this in an exercise for this chapter.  Putting these rules together, we have a method to get the prime factorization of a number , provided its only prime factors are small. Namely, run through the rules. If you determine is divisible by, say, , then divide it by . Keep going with this process until all the rules fail. At that point, you may have to manually check if you can divide by small primes like or , until you recognize that what's left cannot be factored any further.   Find the prime factorization of .   Immediately you can see that is divisible by . You might further notice that it's divisible by , because . Divide out by : This number is even so we can pull out another : We now see we cannot factor out any more s. Next we check divisibility by : , and repeating the summing the digits rule we get . This is a multiple of , so in fact we can pull out two copies of : We repeat the rule for with : . Thus we can pull out yet another : At this point, all that is left over is , which is small enough that we can recognize it as a prime. We can't go any further, so we have the final prime factorization.    Find the prime factorization of .   "
},
{
  "id": "sec3-blahblah-3",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-3",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(1\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is always divisible by .  Because . "
},
{
  "id": "sec3-blahblah-5",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-5",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(10\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if the last digit of is .  Every other digit of represents times something, so the only way could fail to be a multiple of is if the units digit is nonzero. "
},
{
  "id": "sec3-blahblah-7",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-7",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last digit is even: or .  The other digits of represent a number divisible by , and hence also divisible by . So all that remains is to check that the quantity represented by the units digit is divisible by . Those are the five even numbers which are one digit. "
},
{
  "id": "sec3-blahblah-8",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-8",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(5\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last digit is either or .  Same logic as the rule for . The only possible issue is the units digit, so check if the units digit is one of the two one-digit numbers divisible by . "
},
{
  "id": "sec3-blahblah-10",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-10",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(3\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of . (To check if the sum of the digits is a multiple of , repeat this process until you get to a small enough number you don't need to check.)  Do what we did with , except you have to write it abstractly to work for any number. "
},
{
  "id": "sec3-blahblah-12",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-12",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(9\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of .  Same as with . "
},
{
  "id": "sec3-blahblah-14",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-14",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(6\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last digit is even and the sum of its digits is a multiple of .  Explained above. "
},
{
  "id": "sec3-blahblah-16",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-16",
  "type": "Theorem",
  "number": "3.2.8",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(4\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last two digits form a number divisible by .  The rest of the digits represent a quantity divisible by , and is a multiple of . So the only thing to check is that the last two digits are divisible by . "
},
{
  "id": "sec3-blahblah-17",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-17",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(8\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last three digits form a number divisible by .  Similar to the rule for . Namely, the rest of the digits represent a quantity divisible by , and . So the only thing to check is that the last three digits are divisible by . "
},
{
  "id": "sec3-blahblah-21",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-21",
  "type": "Checkpoint",
  "number": "3.2.10",
  "title": "",
  "body": " Find the prime factorization of .   Immediately you can see that is divisible by . You might further notice that it's divisible by , because . Divide out by : This number is even so we can pull out another : We now see we cannot factor out any more s. Next we check divisibility by : , and repeating the summing the digits rule we get . This is a multiple of , so in fact we can pull out two copies of : We repeat the rule for with : . Thus we can pull out yet another : At this point, all that is left over is , which is small enough that we can recognize it as a prime. We can't go any further, so we have the final prime factorization.  "
},
{
  "id": "sec3-blahblah-22",
  "level": "2",
  "url": "sec3-blahblah.html#sec3-blahblah-22",
  "type": "Checkpoint",
  "number": "3.2.11",
  "title": "",
  "body": " Find the prime factorization of .  "
},
{
  "id": "sec3-gcd",
  "level": "1",
  "url": "sec3-gcd.html",
  "type": "Section",
  "number": "3.3",
  "title": "GCD and LCM",
  "body": " GCD and LCM  Let's talk about some other topics regarding divisibility. Given two integers, they will have some divisors in common. For example, consider and . Their common divisors are and . It can be useful to know about common divisors. This is used, for instance, in fraction arithmetic; see .  Greatest common divisor (GCD)  Given two numbers , their greatest common divisor (GCD) is the largest number which divides both of them. It also makes sense to talk about the GCD of a list of more than two numbers; it is the largest number which divides all of them. We write for the GCD of and .  Note that is always . This is because any number divides —after all, for any —and so the largest common divisor is the largest divisor of , namely itself. On the other hand, is undefined; every number divides both and , so there isn't a largest one.  One way to determine the GCD of a group of numbers is to write out all of their prime factorizations, look for the primes common to all, and then multiply them together.   Find the GCD of and .  First find the prime factorizations, by the methods of the last section. Looking at these factorizations, we see that they have in common and . We multiply those together to get .   This method works, but it ranges from tedious to practically impossible, because it first requires you to find the prime factorizations of all the numbers. This is reasonable for two digit numbers, but it quickly gets awful. Surely, one hopes, there is a better way. If you are like me, then in elementary school you were not taught a better way. This happened because math teachers hate their students and want them to suffer. You can break the cycle of violence, however. You can teach your own students to use the Euclidean algorithm.   If are positive numbers then .  Suppose is a divisor of both and . That is, and for some numbers . Then , so . A similar argument shows that if is a divisor of both and , then . Together, these show that the common divisors of and are the same as the common divisors of and . Since they have the same set of common divisors, they have the same largest common divisor.   The Euclidean algorithm for finding the GCD, first version  To find the GCD of and , where we assume , follow this process. If , then we are done. Return that value as the GCD.  If , then instead compute , using this same process. While this algorithm may look circular, at each stage you have decreased one of the two numbers you are looking at. You can't keep decreasing numbers forever—you eventually hit bottom at —so this process will eventually stop.  An algorithm like this, which reduces a problem to a smaller or easier case until it eventually bottoms out, is called a recursive algorithm.   Find .  We recursively apply the Euclidean algorithm (first version).    This algorithm is fastest when one number is approximately half as big as the other. When one is much bigger than the other or they are close in size it can take a long time for the subtraction process to bottom out. There is a faster version of the Euclidean algorithm using a different operation from subtraction.  The mod operation  Let and be natural numbers. Then is the remainder when is divided by .  Mod is short for modulo , which is a Latinate word meaning up to this specified difference . This use comes from its use in phrases like and are equivalent modulo , meaning that and are equivalent after you divide out by and only look at the remainder. A slightly more informal use would be and are the same modulo the whole number part . If you want your friends to think you're a nerd, you can sprinkle this word into your everday vocabulary.  For an example, because .   When calculating mods by hand, often the quickest way is to repeatedly subtract until you can see the remainder. For example, to compute you can just do . Or to compute you repeatedly subtract until you get a result smaller than : so .  This method is reasonable when there aren't many subtractions to do, but is clunky when calculating for much larger than .  If you are using a calculator, a trick to calculate mods is do the division then multiply the fractional part by the divisor. For example, to calculate you'd calculate and then you'd mulitply to get the remainder. Some calculators and most programming languages will have a mod function to calculate it directly, in which case you can just use that.    Explain why is always the units digit of . How do you quickly see ?    If are positive numbers then .  The idea is much the same as before. Suppose that is a divisor of both and . That is, and for some numbers . Doing division with remainder, , where is the quotient and the remainder . Then, showing that . A similar argument shows that if is a divisor of both and then .  Like before, this shows that the common divisors of and are the same as the common divisors of and , and so they have the same greatest common divisor.   The Euclidean algorithm for finding the GCD, fast version  To find the GCD of and , where we assume , follow this process. If , then we are done. Return as the GCD.  If , then instead compute , using this same process. Like before, this recursive process eventually bottoms out because we're dealing with smaller numbers at each step  Repeatedly computing instead of will give you a much faster decreasing sequence, and so this version of the algorithm will take fewer steps to bottom out. The trade-off is that computing mod is usually slower than computing subtraction. You can use a calculator to help you.   Find the GCD of and .  We repeatedly apply the Euclidean algorithm (fast version).    Going in the opposite direction, given two integers you can talk about their common multiples. For instance, the common multiples of and are Just like two numbers have a largest common divisor, they also have a smallest common multiple.  Least common multiple (LCM)  Given two numbers their least common multiple , written is the smallest number which is a multiple of both of them. In symbols, is the smallest number so that and .    The least common multiple can be calculated as follows:     The LCM of and can be calculated as where you can use any of the previously described methods for finding the GCD. In this example, the numbers are small enough that you might immediately see that their GCD is . (And if you didn't immediately see that then you can look at their prime factorizations or use the Euclidean algorithm.)   An alternative way to compute the LCM goes through prime factorizations. The smallest common multiple of two numbers must contain the prime factors of both of them, but without anything else. So to find the LCM list out the numbers' prime factorizations. Then grab all the primes which occur in at least one of the two factorizations, with the largest exponent that occurs.   To calculate the LCM of and , first find their prime factorizations. We now go through the factorizations, grabbing the largest exponent which occurs on one side or the other. Thus we get    This method also can be used to explain why the division by the GCD method works. Namely, in the formula the numerator says to take the prime factorization of and add in the prime factorization of . But some primes are added in twice, namely the ones that are common to both factorization. So to throw out the excess we divide by the common prime factors, which is the same as dividing by the GCD.   What is ? What about for any positive number ?   "
},
{
  "id": "sec3-gcd-3",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-3",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Greatest common divisor (GCD).",
  "body": "Greatest common divisor (GCD)  Given two numbers , their greatest common divisor (GCD) is the largest number which divides both of them. It also makes sense to talk about the GCD of a list of more than two numbers; it is the largest number which divides all of them. We write for the GCD of and . "
},
{
  "id": "sec3-gcd-6",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-6",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": " Find the GCD of and .  First find the prime factorizations, by the methods of the last section. Looking at these factorizations, we see that they have in common and . We multiply those together to get .  "
},
{
  "id": "sec3-gcd-8",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-8",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "",
  "body": " If are positive numbers then .  Suppose is a divisor of both and . That is, and for some numbers . Then , so . A similar argument shows that if is a divisor of both and , then . Together, these show that the common divisors of and are the same as the common divisors of and . Since they have the same set of common divisors, they have the same largest common divisor.  "
},
{
  "id": "sec3-gcd-9",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-9",
  "type": "Definition",
  "number": "3.3.4",
  "title": "The Euclidean algorithm for finding the GCD, first version.",
  "body": "The Euclidean algorithm for finding the GCD, first version  To find the GCD of and , where we assume , follow this process. If , then we are done. Return that value as the GCD.  If , then instead compute , using this same process. While this algorithm may look circular, at each stage you have decreased one of the two numbers you are looking at. You can't keep decreasing numbers forever—you eventually hit bottom at —so this process will eventually stop. "
},
{
  "id": "sec3-gcd-10",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive "
},
{
  "id": "sec3-gcd-11",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-11",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "",
  "body": " Find .  We recursively apply the Euclidean algorithm (first version).   "
},
{
  "id": "sec3-gcd-13",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-13",
  "type": "Definition",
  "number": "3.3.6",
  "title": "The mod operation.",
  "body": "The mod operation  Let and be natural numbers. Then is the remainder when is divided by . "
},
{
  "id": "sec3-gcd-17",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-17",
  "type": "Checkpoint",
  "number": "3.3.7",
  "title": "",
  "body": " Explain why is always the units digit of . How do you quickly see ?  "
},
{
  "id": "sec3-gcd-18",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-18",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "",
  "body": " If are positive numbers then .  The idea is much the same as before. Suppose that is a divisor of both and . That is, and for some numbers . Doing division with remainder, , where is the quotient and the remainder . Then, showing that . A similar argument shows that if is a divisor of both and then .  Like before, this shows that the common divisors of and are the same as the common divisors of and , and so they have the same greatest common divisor.  "
},
{
  "id": "sec3-gcd-19",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-19",
  "type": "Definition",
  "number": "3.3.9",
  "title": "The Euclidean algorithm for finding the GCD, fast version.",
  "body": "The Euclidean algorithm for finding the GCD, fast version  To find the GCD of and , where we assume , follow this process. If , then we are done. Return as the GCD.  If , then instead compute , using this same process. Like before, this recursive process eventually bottoms out because we're dealing with smaller numbers at each step "
},
{
  "id": "sec3-gcd-21",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-21",
  "type": "Checkpoint",
  "number": "3.3.10",
  "title": "",
  "body": " Find the GCD of and .  We repeatedly apply the Euclidean algorithm (fast version).   "
},
{
  "id": "sec3-gcd-23",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-23",
  "type": "Definition",
  "number": "3.3.11",
  "title": "Least common multiple (LCM) <span class=\"process-math\">\\(\\lcm\\)<\/span>.",
  "body": "Least common multiple (LCM)  Given two numbers their least common multiple , written is the smallest number which is a multiple of both of them. In symbols, is the smallest number so that and .  "
},
{
  "id": "sec3-gcd-24",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-24",
  "type": "Theorem",
  "number": "3.3.12",
  "title": "",
  "body": " The least common multiple can be calculated as follows:   "
},
{
  "id": "sec3-gcd-25",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-25",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": " The LCM of and can be calculated as where you can use any of the previously described methods for finding the GCD. In this example, the numbers are small enough that you might immediately see that their GCD is . (And if you didn't immediately see that then you can look at their prime factorizations or use the Euclidean algorithm.)  "
},
{
  "id": "sec3-gcd-27",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-27",
  "type": "Example",
  "number": "3.3.14",
  "title": "",
  "body": " To calculate the LCM of and , first find their prime factorizations. We now go through the factorizations, grabbing the largest exponent which occurs on one side or the other. Thus we get   "
},
{
  "id": "sec3-gcd-29",
  "level": "2",
  "url": "sec3-gcd.html#sec3-gcd-29",
  "type": "Checkpoint",
  "number": "3.3.15",
  "title": "",
  "body": " What is ? What about for any positive number ?  "
},
{
  "id": "sec3-exercises",
  "level": "1",
  "url": "sec3-exercises.html",
  "type": "Section",
  "number": "3.4",
  "title": "Exercises",
  "body": " Exercises    Come up with rules for divisibility by , , and . Explain why your rule works. Can you give a general rule for divisibility by , for any number of zeroes?    Some people think it is odd that is the only even prime. Analgously to the definition of even, say that a number is threeven if it is a multiple of three. How many threeven primes are there? What are they? Explain. Do the same for fiveven numbers (those which are multiples of ) and seveven numbers (multiples of ). Reflect on whether it is odd that is the only even prime.    Explain why the number is even.    Go to the wikipedia page for divisibility rules and look at the rules for divisibility by . Use one of them (your choice!) to determine whether is a multiple of . Do you think this is a practical calculation to do by hand? Reflect.    Compute the prime factorization for . It is okay to use a calculator for division, but show your work for each factor.    A reason for the use of for the number of degrees in a circle is that is highly divisible with many numbers dividing it. List all the divisors of .  If you know the prime factorization of , each divisor corresponds to a choice of primes from the factorization.    Find the GCD of and using two different methods. Which method do you find nicer to use? Reflect.    You can talk about the GCD of more than two numbers. For example, the GCD of three numbers , , and is the largest number which divides all of them. Use the prime factorization method to find .  The prime factorization method to find the GCD of two numbers had you look for common factors in their prime factorizations. How do you adapt that to find the GCD of three numbers?    Find the LCM of and using two different methods. Which method do you prefer? Reflect.    You can talk about the LCM of more than two numbers. For example, the LCM of three numbers , , and is the smallest number which is a multiple of all of them. Use the prime factorization method to find .  The prime factorization method to find the LCM of two numbers had you look at their prime factorizations. How do you adapt that to find the LCM of three numbers?    "
},
{
  "id": "sec3-exercises-2-1",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-1",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": " Come up with rules for divisibility by , , and . Explain why your rule works. Can you give a general rule for divisibility by , for any number of zeroes?  "
},
{
  "id": "sec3-exercises-2-2",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-2",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": " Some people think it is odd that is the only even prime. Analgously to the definition of even, say that a number is threeven if it is a multiple of three. How many threeven primes are there? What are they? Explain. Do the same for fiveven numbers (those which are multiples of ) and seveven numbers (multiples of ). Reflect on whether it is odd that is the only even prime.  "
},
{
  "id": "sec3-exercises-2-3",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-3",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": " Explain why the number is even.  "
},
{
  "id": "sec3-exercises-2-4",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-4",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": " Go to the wikipedia page for divisibility rules and look at the rules for divisibility by . Use one of them (your choice!) to determine whether is a multiple of . Do you think this is a practical calculation to do by hand? Reflect.  "
},
{
  "id": "sec3-exercises-2-5",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-5",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": " Compute the prime factorization for . It is okay to use a calculator for division, but show your work for each factor.  "
},
{
  "id": "sec3-exercises-2-6",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-6",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": " A reason for the use of for the number of degrees in a circle is that is highly divisible with many numbers dividing it. List all the divisors of .  If you know the prime factorization of , each divisor corresponds to a choice of primes from the factorization.  "
},
{
  "id": "sec3-exercises-2-7",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-7",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": " Find the GCD of and using two different methods. Which method do you find nicer to use? Reflect.  "
},
{
  "id": "sec3-exercises-2-8",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-8",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": " You can talk about the GCD of more than two numbers. For example, the GCD of three numbers , , and is the largest number which divides all of them. Use the prime factorization method to find .  The prime factorization method to find the GCD of two numbers had you look for common factors in their prime factorizations. How do you adapt that to find the GCD of three numbers?  "
},
{
  "id": "sec3-exercises-2-9",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-9",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": " Find the LCM of and using two different methods. Which method do you prefer? Reflect.  "
},
{
  "id": "sec3-exercises-2-10",
  "level": "2",
  "url": "sec3-exercises.html#sec3-exercises-2-10",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": " You can talk about the LCM of more than two numbers. For example, the LCM of three numbers , , and is the smallest number which is a multiple of all of them. Use the prime factorization method to find .  The prime factorization method to find the LCM of two numbers had you look at their prime factorizations. How do you adapt that to find the LCM of three numbers?  "
},
{
  "id": "sec4-motivation",
  "level": "1",
  "url": "sec4-motivation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Some motivation",
  "body": " Some motivation  When we talked about arithmetic in the natural numbers, subtraction was how you counted a taking away. For example, means that if you have seven oranges and I take three away then you have four remaining. A consequence of this is that subtraction doesn't make sense if the amount you are taking away is larger. The formula doesn't make sense in because if you have only three oranges you don't have enough for me to take away seven of them.  For many uses in mathematics, this limitation is inconvenient. We want to be able to subtract any two numbers without having to know in advance which one is larger. One place this shows up is in solving equations. Consider the equation One way to solve it would be to subtract from each side. But if we only live in that isn't allowed, even though this equation's solution is a natural number, namely . Further, there are equations which don't have a solution at all if you only are looking at natural numbers. For instance, has no solution in . (One way to see this: in the natural numbers, adding can never make a value smaller, so nothing you add to can make it smaller to become .)  If we want to be able to solve equations like we need to introduce new numbers. As part of this, we need to explain the meaning of these new numbers and make sure that our familiar rules of arithmetic and algebra continue to work in these new numbers. These are the tasks to which we now turn.  "
},
{
  "id": "sec4-definition",
  "level": "1",
  "url": "sec4-definition.html",
  "type": "Section",
  "number": "4.2",
  "title": "Defining the integers",
  "body": " Defining the integers  No doubt you know the solution already—throw in negative numbers!—but let's pretend that we don't already know about negative numbers. How might we come to invent them?  Our original definition of subtraction in , namely counting what happens when you take away from a collection, won't work. So we need a different way of thinking about subtraction to guide us. Another way we've understood subtraction is, it is the opposite of addition. For example, the formula can be understood as asking, what do you need to add to to get a sum of ? This way of thinking can be generalized. As good starting place is subtracting from , the additive identity. The equation means, is the value you add to to get . This is saying that is a sort of opposite of . It turns out that this one idea is enough to completely solve our subtraction problem.  Additive inverses   If is a number then the additive inverse of , written , is the number so that    Inverse means opposite. So additive inverse means opposite in the sense of addition. The following theorem makes precise the idea that subtraction is the opposite of addition.   For any two numbers and , subtracting is the same as adding an inverse: Thus, for any number we have    Positive and negative numbers  A positive number is one which is . A negative number is an additive inverse of a positive number. The number is considered neither positive nor negative. The sign of a number refers to whether it is positive or negative.  Absolute value  The absolute value , also called magnitude and written , of a number is its distance from . More precisely, if then and if is negative then .   Warning! While we write negative numbers by putting a minus sign in front, such as , if you put a minus sign in front of a variable the result could be either negative or positive. For example, will be negative if is positive but it will be positive if is negative. In general you won't know which.   The integers  The integers consist of the natural numbers plus including additive inverses for every natural number. That is, the integers consist of both the positive and negative whole numbers. We write for the set of integers. ( Z stands for the German word Zahlen , meaning integers. Mathematics is a cosmopolitan discipline so some symbols come from non-English words.)  Note that while we have now said what the integers are, we haven't yet said how to make sense of arithmetic with integers. It will turn out that all of your favorite arithmetic properties about the natural numbers will continue to be true about the integers, plus the new property that additive inverses always exist. For convenience they are listed below, and afterward we will talk about how to make sense of arithmetic in .  Arithmetic properties of integers  All of the following are true for any integers .  Additive identity    Additive inverses  has an additive inverse.  Associativity of addition    Commutativity of addition    Multiplicative identity    Multiplicative annihilation    Associativity of multiplication    Commutativity of multiplication    Distributivity      Mathematicians call these properties the commutative ring axioms . There are many interesting mathematical structures, called commutative rings , which have these same properties. We will see one example later in this chapter when we look at clocks.  "
},
{
  "id": "sec4-definition-4",
  "level": "2",
  "url": "sec4-definition.html#sec4-definition-4",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Additive inverses.",
  "body": "Additive inverses   If is a number then the additive inverse of , written , is the number so that   "
},
{
  "id": "sec4-definition-6",
  "level": "2",
  "url": "sec4-definition.html#sec4-definition-6",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": " For any two numbers and , subtracting is the same as adding an inverse: Thus, for any number we have   "
},
{
  "id": "sec4-definition-7",
  "level": "2",
  "url": "sec4-definition.html#sec4-definition-7",
  "type": "Definition",
  "number": "4.2.3",
  "title": "Positive and negative numbers.",
  "body": "Positive and negative numbers  A positive number is one which is . A negative number is an additive inverse of a positive number. The number is considered neither positive nor negative. The sign of a number refers to whether it is positive or negative. "
},
{
  "id": "sec4-definition-8",
  "level": "2",
  "url": "sec4-definition.html#sec4-definition-8",
  "type": "Definition",
  "number": "4.2.4",
  "title": "Absolute value.",
  "body": "Absolute value  The absolute value , also called magnitude and written , of a number is its distance from . More precisely, if then and if is negative then . "
},
{
  "id": "sec4-definition-10",
  "level": "2",
  "url": "sec4-definition.html#sec4-definition-10",
  "type": "Definition",
  "number": "4.2.5",
  "title": "The integers <span class=\"process-math\">\\(\\Zbb\\)<\/span>.",
  "body": "The integers  The integers consist of the natural numbers plus including additive inverses for every natural number. That is, the integers consist of both the positive and negative whole numbers. We write for the set of integers. ( Z stands for the German word Zahlen , meaning integers. Mathematics is a cosmopolitan discipline so some symbols come from non-English words.) "
},
{
  "id": "thm3-ring",
  "level": "2",
  "url": "sec4-definition.html#thm3-ring",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "Arithmetic properties of integers.",
  "body": "Arithmetic properties of integers  All of the following are true for any integers .  Additive identity    Additive inverses  has an additive inverse.  Associativity of addition    Commutativity of addition    Multiplicative identity    Multiplicative annihilation    Associativity of multiplication    Commutativity of multiplication    Distributivity     "
},
{
  "id": "sec4-definition-13",
  "level": "2",
  "url": "sec4-definition.html#sec4-definition-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative ring axioms commutative rings "
},
{
  "id": "sec4-geometry",
  "level": "1",
  "url": "sec4-geometry.html",
  "type": "Section",
  "number": "4.3",
  "title": "The geometric meaning of integers",
  "body": " The geometric meaning of integers  In the last section we talked about how we build the integers from the natural numbers, namely throwing in additive inverses. Now we talk about a geometric interpretation of , which will give us a way to understand the meaning of addition and multiplication.  Think of as a line of dots, stretching infinitely far in both directions. One dot represents . Moving right from it you count up in the positive numbers and moving left from it you count down in the negative numbers . Call this picture the integer line .  In this picture, absolute value represents the number of steps to get to a number starting from . For example, and have the same absolute value—namely —because they are the same distance from .   What this picture tells us is that positive versus negative is about direction. With the natural numbers, you could get bigger and bigger forever, but if you tried going the other way you'd eventually get stuck at . With the integers, we add in an opposite direction which you can also travel infinitely.  This direction also tells us how to define order for the integers.  Order on integers  For two integers and , we say if is to the left of on the number line. Put explicitly: Any negative number is less than any positive number.  If and are both then if and only if .  If and are both then if and only if .   As we did with natural numbers, we use , and .  The use of left for the negative direction and right for the positive direction is merely a convention. If your native language is, like English, written left-to-right this probably makes sense. Going forward means going to the right, going backward means going to the left. If your native language is written right-to-left, such as Arabic, then this might seem wrong, and you might ask if you could draw it differently. Everything would work just as well. What is important is that the negative direction and the positive direction are opposites.  This picture and the idea of positive versus negative as directions tells us the meaning of addition. Consider . Think of this as meaning you start at and you take steps to the right. (Right because that is the positive direction.) Then you would end at . Or consider . This means starting at and taking steps to the left (the negative direction). Counting them off you see .  In general, adding means taking steps, where you go to th eright if is positive and to the left if is negative. (Adding is taking no steps, which doesn't change your position.)  You can think about in terms of a single starting and ending point, but it's also useful to think about what addition does to the entire line. No matter your starting point, adding means taking steps to the left. This is the entire line stepping to the left.   Adding, for instance, is the etnire line stepping to the right.   Mathematicians liking to have too many names for things, we call these translations or shifts . In summary, the geometric meaning is translation. Adding by shifts the entire number line units, with the sign of telling which direction—left for negative, right for positive.  Now let's think about multiplication. Consider . This takes the starting position at and moves it times as far away from , namely to . Or consider . Like before, this moves the starting position times as far away from , ending at . Before this movement, our two starting points were only steps apart, but at the end they were steps apart. Multiplying stretched the number line so the points become farther apart.  In general, multiplying by a positive number stretches out the number line. If you multiply by the positive number you stretch the line so points are times farther apart. More formally, we call this a scaling .  How should we understand multiplication by a negative number? Let's focus on the simplest case, namely multiplication by . Multiplying by should be the same as putting a minus sign in front of the number; more formally, multiplying by should give you the additive inverse of . What this amounts to is changing which side of the number line you are on. For example, , so it gets moved from the right side to the left, while , so it gets moved from the left side to the right.  Altogether, what multiplication by does is flip the number line, swapping the left and right sides. More formally, we call this a reflection . You should think of this as swapping the two directions.   Here's an algebraic way to convince yourself that multiplying by should give the additive inverse. Consider the formula . On the one hand, and so the product will be . On the other hand, the distributivity property lets us rewrite this as . Putting those together we get , whence we get that is the thing you add to to get —in other words, its additive inverse.  Consider now mulitplication by, say, . Think of this multiplication as a two-step process: . Geometrically, we reflect the number line and then scale by a factor of .  Multiplication by is a special case. Anything multiplied by becomes , so multiplying by collapses the entire number line down to a point. This usually isn't interesting or useful.    To sum up this section, addition corresponds to translation , where the magnitude tells you how far to translate and the sign tells you what direction. Multiplication corresponds to scaling and reflection , where the magnitude tells you how much to scale by and the sign tells you whether to reflect.  "
},
{
  "id": "sec4-geometry-3",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integer line "
},
{
  "id": "sec4-geometry-7",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-7",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Order <span class=\"process-math\">\\(\\lt\\)<\/span> on integers.",
  "body": "Order on integers  For two integers and , we say if is to the left of on the number line. Put explicitly: Any negative number is less than any positive number.  If and are both then if and only if .  If and are both then if and only if .   As we did with natural numbers, we use , and . "
},
{
  "id": "sec4-geometry-13",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "translations shifts "
},
{
  "id": "sec4-geometry-15",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scaling "
},
{
  "id": "sec4-geometry-17",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection "
},
{
  "id": "sec4-geometry-21",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "addition translation Multiplication scaling reflection "
},
{
  "id": "sec4-arithmetic",
  "level": "1",
  "url": "sec4-arithmetic.html",
  "type": "Section",
  "number": "4.4",
  "title": "Arithmetic with integers",
  "body": " Arithmetic with integers  Now that we understand the geometric meaning of the addition and multiplication, let's see how that provides us algorithms to compute arithmetic operations. We already know algorithms for adding, subtracting, multiplying, and dividing natural numbers, so our task will be to explain the extra steps added by needing to consider negative numbers.    Algorithm for adding integers  How you add integers and depends on their signs. If one or more of the numbers are , simply use that adding doesn't change the value.  If their signs are the same their sum will have the same sign, with the magnitude being the sum of the magnitudes. That is, if and are both positive then is positive, and if they are negative then is negative. In either case, , where you can use your favorite way of adding natural numbers to calculate this sum of magnitudes.  If and have opposite signs and equal magnitudes, then . This is because in this case and are additive inverses.  If and have opposite signs and different magnitudes, then the sign of is the same as the sign of the one with larger magnitude. Let's suppose that happens to name the one with larger magnitude. The magnitude of the sum is then found by subtraction: .   Algorithm for subtracting integers  Use that subtraction means addition by the additive inverse, so you can use the algorithm for adding. Subtracting a positive number is the same as adding a negative and subtracting a negative number is the same as adding a positive.   Algorithm for multiplying integers  When you multiply integers and , the magnitude of the product is always the product of the magnitudes: . To determine the sign of the product, use the following rule. If and have the same sign, then is positive.  If and have opposite signs, then is negative.   The intuition for the rule of signs is, multiplying by represents a reflection. So multiplying by two negatives is two reflections, which cancel out. In general if you are multiplying more than two numbers, to know the sign of the product you count the number of negatives. An even number of negatives being multiplied all cancel out to be positive, while an odd number of negatives being multiplied gives a negative product.   If you multiply together many numbers, what is the rule for when the product is positive and when it is negative? Explain.      "
},
{
  "id": "sec4-arithmetic-4",
  "level": "2",
  "url": "sec4-arithmetic.html#sec4-arithmetic-4",
  "type": "Definition",
  "number": "4.4.1",
  "title": "Algorithm for adding integers.",
  "body": "Algorithm for adding integers  How you add integers and depends on their signs. If one or more of the numbers are , simply use that adding doesn't change the value.  If their signs are the same their sum will have the same sign, with the magnitude being the sum of the magnitudes. That is, if and are both positive then is positive, and if they are negative then is negative. In either case, , where you can use your favorite way of adding natural numbers to calculate this sum of magnitudes.  If and have opposite signs and equal magnitudes, then . This is because in this case and are additive inverses.  If and have opposite signs and different magnitudes, then the sign of is the same as the sign of the one with larger magnitude. Let's suppose that happens to name the one with larger magnitude. The magnitude of the sum is then found by subtraction: .  "
},
{
  "id": "sec4-arithmetic-5",
  "level": "2",
  "url": "sec4-arithmetic.html#sec4-arithmetic-5",
  "type": "Definition",
  "number": "4.4.2",
  "title": "Algorithm for subtracting integers.",
  "body": "Algorithm for subtracting integers  Use that subtraction means addition by the additive inverse, so you can use the algorithm for adding. Subtracting a positive number is the same as adding a negative and subtracting a negative number is the same as adding a positive. "
},
{
  "id": "sec4-arithmetic-6",
  "level": "2",
  "url": "sec4-arithmetic.html#sec4-arithmetic-6",
  "type": "Definition",
  "number": "4.4.3",
  "title": "Algorithm for multiplying integers.",
  "body": "Algorithm for multiplying integers  When you multiply integers and , the magnitude of the product is always the product of the magnitudes: . To determine the sign of the product, use the following rule. If and have the same sign, then is positive.  If and have opposite signs, then is negative.  "
},
{
  "id": "sec4-arithmetic-8",
  "level": "2",
  "url": "sec4-arithmetic.html#sec4-arithmetic-8",
  "type": "Checkpoint",
  "number": "4.4.4",
  "title": "",
  "body": " If you multiply together many numbers, what is the rule for when the product is positive and when it is negative? Explain.  "
},
{
  "id": "sec4-clocks",
  "level": "1",
  "url": "sec4-clocks.html",
  "type": "Section",
  "number": "4.5",
  "title": "Clocks and modular arithmetic",
  "body": " Clocks and modular arithmetic  Natural numbers let us count up infinitely forever. Integers extend that to let us count infinitely in two directions. But there are many important phenomena in our lives which are cyclic, not stretching forth forever. You might count forward days of the week, and when you reach the end of the week you start over again at the beginning. Or you might count forward hours, resetting back to after you pass .   If it is currently what time will the clock show after hours? One way to calculate this is to count up from , resetting to after passing . This is the same as calculating then subtracting . Thus we see the time will be .  The counting up method is less practical if you ask what time the clock will show after hours. What you want to do is, calculate and get rid of the extra copies of . That is, you want to know what the remainder is if you divide by . Doing division with remainder, you can see that , and so the time will be .   A minor inconvenience with the remainder method is what happens at . For example, if it is then in hours it will be . But if we did the remainder method we'd get a remainder of (because is a multiple of itself). That is, using this method you have to know that a remainder of means the time is , because we don't allow as a time.  This inconvenience goes away if you allow as a time. This is commonly done with hour clocks. In this system, is midnight and the hours count up throughout the day, until is the minute before the next midnight. Whereas with hour clocks each morning and evening is hours and we use am versus pm to distinguish them.  The same methods for counting time with hour clocks work with hour clocks.   Using a hour clock, suppose it is . What time will it be after hours? After hours?  For the first question, we calculate and then calculate the remainder when we divide by . In this case, that is mostly easily seen by calculating , so it will be .  For the second question, we calculate and then calculate the remainder when we divide by . A little work tells us , and so it will be .   In we introduced the mod notation to talk about remainders after division, and this is a place where it is useful. As a reminder, refers to the remainder when is divided by . For instance, we could succintly write our previous calculation as .  If the same process works for both hour and hour clocks, you might suspect it also works for hour clocks, or hour clocks, or any number of hours. You would be correct. Indeed, you can do this clock arithmetic not only with addition but also with subtraction and multiplication. This gives what mathematicians call modular arithmetic .  Modular arithmetic  Fix a positive integer . Then arithmetic modulo is the following number system. The numbers are the integers . That is, the numbers in arithmetic modulo are the natural numbers .  All arithmetic operations are done , so that the result is between and . You add and take the sum , subtract and take the difference , multiply and take the product . To differentiate modular arithmetic from ordinary arithmetic, we write e.g. The use of instead of reminds us that and aren't equal as integers, but are only the same modulo .   A hour clock is the same as arithmetic modulo (except that you have to keep in mind we say where mathematicians would say ) and a hour clock is the same as arithmetic modulo .   Arithmetic modulo is the arithmetic of parity —even versus odd. Even means modulo and odd means modulo . You can turn questions about parity into calculations modulo . For example, if you want to know the parity of the product of an even and odd number you can compute and conclude that the product must be even.    If you add the product and sum of two odd numbers, is the result even or odd?  Do arithmetic mod : so the result must be odd.     Arithmetic modulo is boring. The only number is and the result of any calculation is that one number .   A nice fact about modular arithmetic is that all the usual algebraic rules for integers also apply. So you can do all the same calculations with all the same rules, just remembering that you have do a mod at the end.   There is an exception here, namely that order doesn't make sense in modular arithmetic. In the integers, it makes sense to say that . But this doesn't make sense for the integers modulo . Think in terms of clocks: is before , but it's also after (the from the previous cycle). You can say that this morning is before this morning, but you can't in general say is before .  But so long as you just work with the arithmetic operations you can freely use the familiar rules.    The integers modulo form a commutative ring. That is, they satisfy all the axioms in .   One use of modular arithmetic is in cryptography , the practice of encrypting data to ensure secure communication without eavesdropping. In brief, the way it works is your data, such as bank info, is turned into a number. Some calculations are done modulo a really big with this number and a secret key. This produces a ciphertext , which is then transmitted over the internet. Knowing the secret key you can reverse the calculations to recover the data. But without that knowledge it's very difficult and slow to reverse the calculations. So someone spying on your internet traffic won't be able to figure out your bank info.  "
},
{
  "id": "sec4-clocks-3",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-3",
  "type": "Example",
  "number": "4.5.1",
  "title": "",
  "body": " If it is currently what time will the clock show after hours? One way to calculate this is to count up from , resetting to after passing . This is the same as calculating then subtracting . Thus we see the time will be .  The counting up method is less practical if you ask what time the clock will show after hours. What you want to do is, calculate and get rid of the extra copies of . That is, you want to know what the remainder is if you divide by . Doing division with remainder, you can see that , and so the time will be .  "
},
{
  "id": "sec4-clocks-7",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-7",
  "type": "Checkpoint",
  "number": "4.5.2",
  "title": "",
  "body": " Using a hour clock, suppose it is . What time will it be after hours? After hours?  For the first question, we calculate and then calculate the remainder when we divide by . In this case, that is mostly easily seen by calculating , so it will be .  For the second question, we calculate and then calculate the remainder when we divide by . A little work tells us , and so it will be .  "
},
{
  "id": "sec4-clocks-9",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modular arithmetic "
},
{
  "id": "sec4-clocks-10",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-10",
  "type": "Definition",
  "number": "4.5.3",
  "title": "Modular arithmetic.",
  "body": "Modular arithmetic  Fix a positive integer . Then arithmetic modulo is the following number system. The numbers are the integers . That is, the numbers in arithmetic modulo are the natural numbers .  All arithmetic operations are done , so that the result is between and . You add and take the sum , subtract and take the difference , multiply and take the product . To differentiate modular arithmetic from ordinary arithmetic, we write e.g. The use of instead of reminds us that and aren't equal as integers, but are only the same modulo .  "
},
{
  "id": "sec4-clocks-12",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-12",
  "type": "Example",
  "number": "4.5.4",
  "title": "",
  "body": " Arithmetic modulo is the arithmetic of parity —even versus odd. Even means modulo and odd means modulo . You can turn questions about parity into calculations modulo . For example, if you want to know the parity of the product of an even and odd number you can compute and conclude that the product must be even.  "
},
{
  "id": "sec4-clocks-13",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-13",
  "type": "Checkpoint",
  "number": "4.5.5",
  "title": "",
  "body": " If you add the product and sum of two odd numbers, is the result even or odd?  Do arithmetic mod : so the result must be odd.   "
},
{
  "id": "sec4-clocks-14",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-14",
  "type": "Example",
  "number": "4.5.6",
  "title": "",
  "body": " Arithmetic modulo is boring. The only number is and the result of any calculation is that one number .  "
},
{
  "id": "sec4-clocks-17",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-17",
  "type": "Theorem",
  "number": "4.5.7",
  "title": "",
  "body": " The integers modulo form a commutative ring. That is, they satisfy all the axioms in .  "
},
{
  "id": "sec4-clocks-18",
  "level": "2",
  "url": "sec4-clocks.html#sec4-clocks-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cryptography ciphertext "
},
{
  "id": "sec4-exercises",
  "level": "1",
  "url": "sec4-exercises.html",
  "type": "Section",
  "number": "4.6",
  "title": "Exercises",
  "body": " Exercises    Do both subtractions and by hand, showing all work. What do you notice about the results?    Draw transformations of the integer number line which represent the three-step process given by the formula . You should have four number lines in total, the starting one and then one for each step of the process.  That formula represents the following three-step process applied to an input integer . Multiply by .  Then add . Finally multiply by .      Draw transformations of the integer number line which represent the two-step process given by the formula . (You should have three number lines in total.) Compare your final number line to the one from the previous problem. Explain what you see.  That formula represents the following two-step process applied to an input integer . Multiply by .  Then add .      The triangle inequality is the inequality , which is true for any numbers and . Confirm the instance of the triangle inequality for the following pairs of numbers and . Also place the values , , and on a number line, and show on your picture the distances that correspond to , , and .  and ,   and ,  and .      When we talked about natural numbers, we defined exponentiation as repeated multiplication: The same definition makes sense when is any integer, i.e. possibly negative. Note however, that must be . (We can make sense of negative exponents using fractions, but that will come later.) Give a rule for when is positive versus negative.  Your rule should break into two cases when is positive or negative. Handle what happens in each case separately.    A square root is the opposite of squaring: is a square root of means . For example, is a square root of because . Explain why every positive number has exactly two square roots, has exactly one square root, and every negative number has no square roots.    With clocks it makes sense to add or subtract—what time will it be after three hours? what time was it three hours ago?—but multiplication doesn't quite make sense. What would three o'clock times five o'clock even mean? Nonetheless you could try to make sense of it by doing multiplication modulo . Do so to try to make sense of the following> three o'clock times five o'clock,  three o'clock times seven o'clock,  three o'clock times eleven o'clock.  Can you give another example where you can do a mathematical calculation but it doesn't correspond to anything in reality?    Recall that in the integers every number has an additive inverse—a number you add to it to get a sum of . (This was one of the axioms of commutative rings.) This is also true in the integers modulo . Check this in the case of the integers modulo by finding the additive inverses for each number. That is, for each find the number so that . Can you give a general rule for what , the additive inverse of , is in the integers modulo ?    A fun fact about the integers modulo a prime is that every nonzero number has a multiplicative inverse . That is, for any there is so that . Check this fact for the integers modulo by finding, for each nonzero number the number that multiply to get .    Another fun fact about modular arithmetic is that if is composite then there are zero divisors —nonzero numbers which multiply to have a product of . That is, if is composite then there are nonzero so that . Check this fact for the integers modulo by finding two numbers that multiply to get . How many pairs of zero divisors can you find?    "
},
{
  "id": "sec4-exercises-2-1",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-1",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": " Do both subtractions and by hand, showing all work. What do you notice about the results?  "
},
{
  "id": "sec4-exercises-2-2",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-2",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": " Draw transformations of the integer number line which represent the three-step process given by the formula . You should have four number lines in total, the starting one and then one for each step of the process.  That formula represents the following three-step process applied to an input integer . Multiply by .  Then add . Finally multiply by .    "
},
{
  "id": "sec4-exercises-2-3",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-3",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "",
  "body": " Draw transformations of the integer number line which represent the two-step process given by the formula . (You should have three number lines in total.) Compare your final number line to the one from the previous problem. Explain what you see.  That formula represents the following two-step process applied to an input integer . Multiply by .  Then add .    "
},
{
  "id": "sec4-exercises-2-4",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-4",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "",
  "body": " The triangle inequality is the inequality , which is true for any numbers and . Confirm the instance of the triangle inequality for the following pairs of numbers and . Also place the values , , and on a number line, and show on your picture the distances that correspond to , , and .  and ,   and ,  and .    "
},
{
  "id": "sec4-exercises-2-5",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-5",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": " When we talked about natural numbers, we defined exponentiation as repeated multiplication: The same definition makes sense when is any integer, i.e. possibly negative. Note however, that must be . (We can make sense of negative exponents using fractions, but that will come later.) Give a rule for when is positive versus negative.  Your rule should break into two cases when is positive or negative. Handle what happens in each case separately.  "
},
{
  "id": "sec4-exercises-2-6",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-6",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "",
  "body": " A square root is the opposite of squaring: is a square root of means . For example, is a square root of because . Explain why every positive number has exactly two square roots, has exactly one square root, and every negative number has no square roots.  "
},
{
  "id": "sec4-exercises-2-7",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-7",
  "type": "Exercise",
  "number": "4.6.7",
  "title": "",
  "body": " With clocks it makes sense to add or subtract—what time will it be after three hours? what time was it three hours ago?—but multiplication doesn't quite make sense. What would three o'clock times five o'clock even mean? Nonetheless you could try to make sense of it by doing multiplication modulo . Do so to try to make sense of the following> three o'clock times five o'clock,  three o'clock times seven o'clock,  three o'clock times eleven o'clock.  Can you give another example where you can do a mathematical calculation but it doesn't correspond to anything in reality?  "
},
{
  "id": "sec4-exercises-2-8",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-8",
  "type": "Exercise",
  "number": "4.6.8",
  "title": "",
  "body": " Recall that in the integers every number has an additive inverse—a number you add to it to get a sum of . (This was one of the axioms of commutative rings.) This is also true in the integers modulo . Check this in the case of the integers modulo by finding the additive inverses for each number. That is, for each find the number so that . Can you give a general rule for what , the additive inverse of , is in the integers modulo ?  "
},
{
  "id": "sec4-exercises-2-9",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-9",
  "type": "Exercise",
  "number": "4.6.9",
  "title": "",
  "body": " A fun fact about the integers modulo a prime is that every nonzero number has a multiplicative inverse . That is, for any there is so that . Check this fact for the integers modulo by finding, for each nonzero number the number that multiply to get .  "
},
{
  "id": "sec4-exercises-2-10",
  "level": "2",
  "url": "sec4-exercises.html#sec4-exercises-2-10",
  "type": "Exercise",
  "number": "4.6.10",
  "title": "",
  "body": " Another fun fact about modular arithmetic is that if is composite then there are zero divisors —nonzero numbers which multiply to have a product of . That is, if is composite then there are nonzero so that . Check this fact for the integers modulo by finding two numbers that multiply to get . How many pairs of zero divisors can you find?  "
},
{
  "id": "sec5-motivation",
  "level": "1",
  "url": "sec5-motivation.html",
  "type": "Section",
  "number": "5.1",
  "title": "Motivating the rational numbers",
  "body": " Motivating the rational numbers  The motivation is much the same as with . With the integers, we wanted to always be able to subtract. Equivalently, we wanted to be able to always solve equations like . Our solution was to add in negative numbers—in jargon, additive inverses. Now we want to always be able to divide. That is, we want to always be able to solve equation like . This presents a little extra complication.  To illustrate the complication, let's try the analogous thing we did for subtraction. Let's add in multiplicative inverses . For a number , its multiplicative inverse, also called a reciprocal and written , is the number you multiply it by to get , the additive identity. As an equation: . If you take the integers and throw in all multiplicative inverses you still don't have enough numbers. To see this, consider the equation . You should know using algebra that the solution should be . But isn't the reciprocal of any whole number; indeed, it's the reciprocal of .  What this example shows is that we need to add in more than just multiplicative inverses. Another complication is, there is an integer which cannot have an additive inverse, namely . One of our basic rules of arithmetic is that for any number . So adding a number which multiplies with to produce would render that rule void. The solution is simple: we don't want to have a reciprocal.  These two obstacles are the only ones to overcome. With that in mind, let's now see the formal definition of the rational numbers.  "
},
{
  "id": "sec5-motivation-3",
  "level": "2",
  "url": "sec5-motivation.html#sec5-motivation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicative inverses reciprocal "
},
{
  "id": "sec5-definition",
  "level": "1",
  "url": "sec5-definition.html",
  "type": "Section",
  "number": "5.2",
  "title": "The definition of the rational numbers",
  "body": " The definition of the rational numbers  The new numbers we add in are to come from dividing, so we need to introduce a new notation to talk about division. A fraction  is a shorthand for division. It represents the value of the numerator  divided by the denominator  .  A fraction might result in a number which we have another way to write. For example, the fraction is shorthand for the division of by , which you know gives the number . But in general this won't happen. In effect, what we are doing is giving names to these new numbers formed from division, and what better name than to directly describe how we created them?  We will see later how we can use these new names to do arithmetic. For now, let's officially define the rational numbers.  The rational numbers  The rational numbers are those numbers which can be formed as fractions of integers. More precisely, a rational number is one which can be written in the form where and are integers, with . We write to refer to the set of all rational numbers. ( Q stands for Quotient , the result of division.)  You can make fractions with any kind of number as the numerator and denominator. For example, you could write the fraction to represent the result of dividing by . However, only fractions of integers count for being rational numbers. It is a difficult mathematical result that , and hence also , cannot be written as a fraction of integers.  As a first step, let's see that this is an expansion of the integers.  Every integer is a rational number. In the language of sets, .  Because the integer can be written as the fraction .  With integers, there was a unique name for each new number—just take a positive whole number and slap a minus sign in front of it. With rational numbers that's no longer the case. For example, you should be able to convince yourself that and name the same number (namely ). Our first task is to explain when two fractions name the same number. That is, we need to talk about equality.  Because fractions represent division, two fractions should name the same number if the divisions result in the same value. How can we check that? Let's cheat a little by remembering what we already know about fraction arithmetic. Consider an equality like You can rewrite this equation by moving both denominators to the top. That is, you can multiply both sides by both and to get an equivalent equation with no division And you can check these really are equal by doing the multiplication. In general, this cross multiplying trick works for any equality of fractions: What this means is, checking that two fractions name the same number can be reduced to integer multiplication, something we already understand.  Fraction equality  Two fractions and are equal , written , if .  I just gave you a definition of equality of fractions, but why should you trust me? How could you check that this is a reasonable definition?  One thing you could do is check that this has the correct basic properties equality should have. Here's three important properties.   Equality of fractions has the following properties.  Reflexivity  for any fraction.  Symmetry If then for any fractions.  Transitivity If and then for any fractions.     The reason fraction equality has these properties is because it's defined using equality of integers, which already has those properties. For example, if you unroll the definition then Symmetry states that if then .  A final important property, Substitution , says that if you replace a fraction with an equal fraction in a formula then you get an equal result. This amounts to saying that when computing the arithmetic operations you get the same answer if you use an equal fraction.   That's the segue into the next topic, how to do fraction arithmetic.  "
},
{
  "id": "sec5-definition-2",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fraction numerator denominator "
},
{
  "id": "sec5-definition-5",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-5",
  "type": "Definition",
  "number": "5.2.1",
  "title": "The rational numbers <span class=\"process-math\">\\(\\Qbb\\)<\/span>.",
  "body": "The rational numbers  The rational numbers are those numbers which can be formed as fractions of integers. More precisely, a rational number is one which can be written in the form where and are integers, with . We write to refer to the set of all rational numbers. ( Q stands for Quotient , the result of division.) "
},
{
  "id": "sec5-definition-6",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-6",
  "type": "Warning",
  "number": "5.2.2",
  "title": "",
  "body": "You can make fractions with any kind of number as the numerator and denominator. For example, you could write the fraction to represent the result of dividing by . However, only fractions of integers count for being rational numbers. It is a difficult mathematical result that , and hence also , cannot be written as a fraction of integers. "
},
{
  "id": "sec5-definition-8",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-8",
  "type": "Theorem",
  "number": "5.2.3",
  "title": "",
  "body": "Every integer is a rational number. In the language of sets, .  Because the integer can be written as the fraction . "
},
{
  "id": "sec5-definition-10",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross multiplying "
},
{
  "id": "sec5-definition-11",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-11",
  "type": "Definition",
  "number": "5.2.4",
  "title": "Fraction equality.",
  "body": "Fraction equality  Two fractions and are equal , written , if . "
},
{
  "id": "sec5-definition-14",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-14",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "",
  "body": " Equality of fractions has the following properties.  Reflexivity  for any fraction.  Symmetry If then for any fractions.  Transitivity If and then for any fractions.    "
},
{
  "id": "sec5-definition-16",
  "level": "2",
  "url": "sec5-definition.html#sec5-definition-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Substitution "
},
{
  "id": "sec5-arithmetic",
  "level": "1",
  "url": "sec5-arithmetic.html",
  "type": "Section",
  "number": "5.3",
  "title": "Arithmetic of fractions",
  "body": " Arithmetic of fractions  In this section we talk about how to perform arithmetic with fractions. As part of this, we will see the important fact that if you add, subtract, multiply, or divide two rational numbers then you get another rational number. This tells us that if we want to solve equations with rational numbers then we don't need to introduce yet more new numbers.  We will first talk about how to multiply and divide fractions. Adding and subtracting will come later, as those are in fact more difficult.  Algorithm for fraction multiplication  Consider two fractions and . Then their product is That is, to multiply fractions you multiply their numerators to get the product's numerator and you multiply their denominators to get the product's denominator.  Here's a way to think about this definition. When you multiply, you multiply the numerators, but why do you also multiply the denominators? Fractions, as a key point of this chapter that has been repeatedly emphasized, are a way to denote that division is happening. What you're asking is, if you divide twice what is the total amount by which you are dividing? The answer is, your total division is by the product of the two.  Because exponentiation is repeated multiplication, this definition also tells you how to compute exponents of fractions. Namely, The idea is, you multiply by itself many times. So that multiplication becomes multiplying by itself in the numerator and by itself in the denominator.  Next we discuss division. To understand it, let's first understand what it has to do with multiplicative inverses. Consider for example the division . This is equivalent to the multiplication . In general, division is the same as multiplication by the inverse.  Reciprocal of a fraction  The reciprocal or multiplicative inverse of a fraction is the fraction . That is, to take the reciprocal of a fraction swap the numerator and denominator.  You can check that is the multiplicative inverse of by multiplying them:   Algorithm for fraction division  Consider two fractions and . Then their quotient is That is, to divide fractions you multiply by the reciprocal, using the rule for how to multiply fractions.  Writing division of fractions can be annoying, since it involves fractions inside fractions! Good practice is to write the outer fraction in form and the inner fractions in form. If you write them both the same way it can be hard to tell the order. For example, which division happens first in    To calculate we turn it into a multiplication, namely the multiplication of the numerator by the reciprocal of the denominator:    Let's now turn to addition (and its sister subtraction). When the denominators are the same, the distributivity rule tells us what to do. Consider the following example. In general, if two fractions have the same denominator then their sum is obtained by adding their numerators and keeping the denominator. (And the rule for subtraction is similar.)    Write the rule for subtracting fractions with the same denominator.   But you shouldn't expect to only add fractions which already have the same denominator. In this case, you have to rewrite the fractions to get a common denominator. Note that if you have any fraction multiplying the top and bottom by the same value gives an equal fraction. For example, . If we want to rewrite two fractions to have the same denominator we can do this process for each.  Rewriting fractions to have a common denominator  Suppose you have two fractions and . Here are a few different ways you can rewrite them to have a common denominator. If one denominator is a multiple of the other, say , then is a common denominator. In this case, keep the same and multiply the other fraction by .   The smallest common denominator is always the least common multiple of the denominators, which you can find by the methods of . You then have to determine which you multiply each denomniator by the get this least common multiple. Give these names: and . These are what you multiply the fractions by.   If you don't want to find the least common multiple you can always take the product of the two denominators as a common denominator.    The different methods have different advantages. The first requires the least work but it doesn't always apply. The second gives you as small a common denominator as possible, but it might be a bit of work to find the least common multiple. The last method avoids that work but has the downside that your common denominator may be much larger than necessary.  Also useful is the opposite direction, namely simplifying a fraction by canceling out common terms from the numerator and denominator. After performing an addition you may have a fraction that can be written more simply, and it's good to know how to do that.  Reduced form of a fraction  A fraction is in reduced form if there are no common factors of the numerator and denominator, that is if . If a fraction is not already in reduced form, you can turn it into reduced form by dividing this GCD out from both parts: Note that in this second fraction both parts are whole numbers.   With these in hand, we can now see how to add\/subtract any two fractions.  Algorithm for fraction addition and subtraction  Consider two fractions and . To add (or subtract) them, first rewrite them to have a common denominator. Then add (or subtract) the two fractions with a common denominator. If you like, then simplify your result to reduced form.  Having a common denominator also lets us compare fractions. First however, let's observe that you can always rewrite a fraction to have a positive denominator.  Rewriting a fraction to have a positive denominator  Consider a fraction . If is already positive, there's nothing to be done.  If both and are negative, then the negatives cancel out. For example, .  If is positive but is negative, then you can move the negative to the numerator. For example, .  If two fractions have a positive denominator, then to compare them you simply compare their numerators. The larger numerator gives the larger fraction. If the fractions don't have a common denominator, rewrite them to have a common denominator and then compare.  Algorithm for comparing fractions  Consider two fractions and . Here's how you determine which one is larger. First ensure both denominators are positive.  Then rewrite the fractions, if necessary, to have the same denominator.  Once you have a common denominator, compare the fractions by comparing the numerator. The one with the larger numerator is the larger fraction, and if the numerators are equal the fractions are equal.  Note that this algorithm also gives you a way to check whether two fractions, probably written in different bases, are equal. First you rewrite them to have a common denominator, then they are equal if and only if the numerators are equal.  Now that we have an idea of how to compare fractions, let's think about what the number line of rational numbers looks like. Remember that the number line for integers consisted of equally spaced dots marching off to infinity in both directions.   With the rational numbers we are putting in more dots in the gaps. For instance, between any two adjacent integers and there are infinitely many rational numbers, such as In general, between any two dots on the rational number line you can find another dot. If and are two rational numbers then their average sits between them. Since you can repeat this process indefinitely, taking more and more averages to get more and more intermediate points, this means between and are infinitely many dots. Thus, the rational number line looks like an infinitely dense line of dots.   Let's close out this section by mentioning an important algebraic fact about the rational numbers. With integers, adding, subtracting, or multiplying always gave you another integer, but division might take you outside the integers. This doesn't happen with rational numbers.  Closure of the rational numbers under arithmetic operations  The rational numbers are closed under addition, subtraction, multiplication, and division. That is, if you take two rational numbers then their sum, difference, product, and quotient can all be written as a single fraction of integers. (Of course we exclude the case of division by zero.)  We will expand out number system again in the next chapter, but the reason for this expansion cannot be the basic arithmetic operations. It must be for something new.  "
},
{
  "id": "sec5-arithmetic-4",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-4",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Algorithm for fraction multiplication.",
  "body": "Algorithm for fraction multiplication  Consider two fractions and . Then their product is That is, to multiply fractions you multiply their numerators to get the product's numerator and you multiply their denominators to get the product's denominator. "
},
{
  "id": "sec5-arithmetic-8",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-8",
  "type": "Definition",
  "number": "5.3.2",
  "title": "Reciprocal of a fraction.",
  "body": "Reciprocal of a fraction  The reciprocal or multiplicative inverse of a fraction is the fraction . That is, to take the reciprocal of a fraction swap the numerator and denominator. "
},
{
  "id": "sec5-arithmetic-10",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-10",
  "type": "Definition",
  "number": "5.3.3",
  "title": "Algorithm for fraction division.",
  "body": "Algorithm for fraction division  Consider two fractions and . Then their quotient is That is, to divide fractions you multiply by the reciprocal, using the rule for how to multiply fractions. "
},
{
  "id": "sec5-arithmetic-12",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-12",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": " To calculate we turn it into a multiplication, namely the multiplication of the numerator by the reciprocal of the denominator:   "
},
{
  "id": "sec5-arithmetic-14",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-14",
  "type": "Checkpoint",
  "number": "5.3.5",
  "title": "",
  "body": " Write the rule for subtracting fractions with the same denominator.  "
},
{
  "id": "sec5-arithmetic-16",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-16",
  "type": "Definition",
  "number": "5.3.6",
  "title": "Rewriting fractions to have a common denominator.",
  "body": "Rewriting fractions to have a common denominator  Suppose you have two fractions and . Here are a few different ways you can rewrite them to have a common denominator. If one denominator is a multiple of the other, say , then is a common denominator. In this case, keep the same and multiply the other fraction by .   The smallest common denominator is always the least common multiple of the denominators, which you can find by the methods of . You then have to determine which you multiply each denomniator by the get this least common multiple. Give these names: and . These are what you multiply the fractions by.   If you don't want to find the least common multiple you can always take the product of the two denominators as a common denominator.   "
},
{
  "id": "sec5-arithmetic-19",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-19",
  "type": "Definition",
  "number": "5.3.7",
  "title": "Reduced form of a fraction.",
  "body": "Reduced form of a fraction  A fraction is in reduced form if there are no common factors of the numerator and denominator, that is if . If a fraction is not already in reduced form, you can turn it into reduced form by dividing this GCD out from both parts: Note that in this second fraction both parts are whole numbers.  "
},
{
  "id": "sec5-arithmetic-21",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-21",
  "type": "Definition",
  "number": "5.3.8",
  "title": "Algorithm for fraction addition and subtraction.",
  "body": "Algorithm for fraction addition and subtraction  Consider two fractions and . To add (or subtract) them, first rewrite them to have a common denominator. Then add (or subtract) the two fractions with a common denominator. If you like, then simplify your result to reduced form. "
},
{
  "id": "sec5-arithmetic-23",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-23",
  "type": "Definition",
  "number": "5.3.9",
  "title": "Rewriting a fraction to have a positive denominator.",
  "body": "Rewriting a fraction to have a positive denominator  Consider a fraction . If is already positive, there's nothing to be done.  If both and are negative, then the negatives cancel out. For example, .  If is positive but is negative, then you can move the negative to the numerator. For example, . "
},
{
  "id": "sec5-arithmetic-25",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-25",
  "type": "Definition",
  "number": "5.3.10",
  "title": "Algorithm for comparing fractions.",
  "body": "Algorithm for comparing fractions  Consider two fractions and . Here's how you determine which one is larger. First ensure both denominators are positive.  Then rewrite the fractions, if necessary, to have the same denominator.  Once you have a common denominator, compare the fractions by comparing the numerator. The one with the larger numerator is the larger fraction, and if the numerators are equal the fractions are equal. "
},
{
  "id": "sec5-arithmetic-30",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-30",
  "type": "Theorem",
  "number": "5.3.11",
  "title": "Closure of the rational numbers under arithmetic operations.",
  "body": "Closure of the rational numbers under arithmetic operations  The rational numbers are closed under addition, subtraction, multiplication, and division. That is, if you take two rational numbers then their sum, difference, product, and quotient can all be written as a single fraction of integers. (Of course we exclude the case of division by zero.) "
},
{
  "id": "sec5-percents",
  "level": "1",
  "url": "sec5-percents.html",
  "type": "Section",
  "number": "5.4",
  "title": "Percents",
  "body": " Percents  To close out this chapter we look at a commonly used kind of fraction, namely percents. The meaning is in the name: percent = per cent = per hundred (think cent as in centimeter).  Percents  Let be a number. Then , pronounced  percent , is the fraction    Percents are useful when talking about parts of a whole. For instance, when setting up direct deposit for your paycheck you can choose how to split it between multiple accounts. Putting in one account would be putting the whole paycheck in one place. Or you might instead split it and between two accounts; the first account would receive of your paycheck while the second would receive .  What percent represents one quarter? One fifth? One tenth?  One way to remember the meaning of the percents is to look at the symbol . The slash represents a fraction and the two O's are the zeroes in .  One place you may see percents used to describe relative changes. A population of a city might increase by over a decade. If the initial population was people, then the extra is people, so the new population is . You could equivalently calculate the new population by where the represents the initial population and the is the increase.  In the other direction, percents also can describe decreases. Your car might depreciate in value by in a year. If its initial value was dollars then its new value is dollars. Because the value is decreasing we subtract the from the representing the initial value.  There's nothing special about the number . It's used for percents because it's a round number that's familiar from our base number system. You could use the same idea but pick a different number for the denominator. Though less commonly used than percents, some of these have been used enough to have names.  Permilles  Let be a number. Then ‰, pronounced  permille , is the fraction Think: per mille = per thousand (mille as in milligram).   For example, ‰ is the fraction . It is equivalent to .  You also don't need to use a power of ten. You could, say, break things up into sixtieths. If this seems weird to you, it's how we break up hours and minutes. Or you could break things up into ths, like how the degree measurement for angles breaks a circle up into ths of the whole.  These examples have special names and notation. If you wanted to be talk about it for any denominator, you arrive back at fractions. Indeed, you can use this as a way to think about what fractions are. We divide wholes into parts—per for percents, per for seconds, and so on. Fractions are a generalization of that idea to divide wholes into any number of parts.  The reason why and get used is that they are highly divisible. Many different integers evenly divide into them. On the other hand, percents have fewer divisors. For instance, you cannot express as a whole number fraction. (You can express it using decimals, but even then writing it exactly requires infinitely many digits. We will talk about these in .) On the other hand, percents fit nicely with our base-ten numeral system.  "
},
{
  "id": "sec5-percents-3",
  "level": "2",
  "url": "sec5-percents.html#sec5-percents-3",
  "type": "Definition",
  "number": "5.4.1",
  "title": "Percents.",
  "body": "Percents  Let be a number. Then , pronounced  percent , is the fraction   "
},
{
  "id": "sec5-percents-5",
  "level": "2",
  "url": "sec5-percents.html#sec5-percents-5",
  "type": "Checkpoint",
  "number": "5.4.2",
  "title": "",
  "body": "What percent represents one quarter? One fifth? One tenth? "
},
{
  "id": "sec5-percents-10",
  "level": "2",
  "url": "sec5-percents.html#sec5-percents-10",
  "type": "Definition",
  "number": "5.4.3",
  "title": "Permilles.",
  "body": "Permilles  Let be a number. Then ‰, pronounced  permille , is the fraction Think: per mille = per thousand (mille as in milligram).  "
},
{
  "id": "sec5-exercises",
  "level": "1",
  "url": "sec5-exercises.html",
  "type": "Section",
  "number": "5.5",
  "title": "Exercises",
  "body": " Exercises    Check an instance of the closure of the rational numbers by showing that can be written as a fraction of integers. Do the same for their product .    Check an instance of the closure of the rational numbers by showing that can be written as a fraction of integers. Do the same for their quotient .    If William Shakespeare were a mathematician, he might have written the following couplet for Ratio and Juliet : What's in a name? That which we call a fraction \/ By any other name would smell as sweet. Check that would smell just as sweet if we called it by showing that these two fractions name the same number.    A student simplifies by canceling out the s to get . They then simplify by canceling out the s to get . Show that these two calculations happen to get the correct answer. Then show that this isn't a valid method in general by showing that .    Check that the average of and is between them.  First compute the average using the formula . Then convert everything to a common denominator to check the order.   Now that we have fractions we can make sense of negative exponents. Recall that positive exponents were defined as repeated multiplication: is the product of with itself many times. Negatives, being the opposite of positives, should in the exponent have the opposite meaning of multiplication. That is, negative exponents represent repeated division. If is a negative number, then    Calculate , , and .  For the last two, it can be useful to think of it as . That is, think of it as taking a reciprocal then a positive power.  When taking powers of fractions, a helpful rule is     The usual rules for exponents still work given this definition of negative exponents. Check an instance of the rule by showing that Show all steps of your calculations so that it is clear the calculations represented by each side really do give the same answer.    Check an instance of the rule by showing that Show all steps of your calculations so that it is clear the calculations represented by each side really do give the same answer.    Each of the following values is given as a fraction, a percent, or a permille. For each of them, rewrite it into the other two forms. Please fully simplify all fractions.     Each year, an investment increases in value from its current value by . How much has it increased from its initial value after two years? If it is initially worth dollars, how much is it worth after two years?  The answer is not .      "
},
{
  "id": "sec5-exercises-2-1",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-1",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": " Check an instance of the closure of the rational numbers by showing that can be written as a fraction of integers. Do the same for their product .  "
},
{
  "id": "sec5-exercises-2-2",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": " Check an instance of the closure of the rational numbers by showing that can be written as a fraction of integers. Do the same for their quotient .  "
},
{
  "id": "sec5-exercises-2-3",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": " If William Shakespeare were a mathematician, he might have written the following couplet for Ratio and Juliet : What's in a name? That which we call a fraction \/ By any other name would smell as sweet. Check that would smell just as sweet if we called it by showing that these two fractions name the same number.  "
},
{
  "id": "sec5-exercises-2-4",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": " A student simplifies by canceling out the s to get . They then simplify by canceling out the s to get . Show that these two calculations happen to get the correct answer. Then show that this isn't a valid method in general by showing that .  "
},
{
  "id": "sec5-exercises-2-5",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": " Check that the average of and is between them.  First compute the average using the formula . Then convert everything to a common denominator to check the order.  "
},
{
  "id": "sec5-exercises-2-7",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-7",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": " Calculate , , and .  For the last two, it can be useful to think of it as . That is, think of it as taking a reciprocal then a positive power.  When taking powers of fractions, a helpful rule is   "
},
{
  "id": "sec5-exercises-2-8",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-8",
  "type": "Exercise",
  "number": "5.5.7",
  "title": "",
  "body": " The usual rules for exponents still work given this definition of negative exponents. Check an instance of the rule by showing that Show all steps of your calculations so that it is clear the calculations represented by each side really do give the same answer.  "
},
{
  "id": "sec5-exercises-2-9",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-9",
  "type": "Exercise",
  "number": "5.5.8",
  "title": "",
  "body": " Check an instance of the rule by showing that Show all steps of your calculations so that it is clear the calculations represented by each side really do give the same answer.  "
},
{
  "id": "sec5-exercises-2-10",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-10",
  "type": "Exercise",
  "number": "5.5.9",
  "title": "",
  "body": " Each of the following values is given as a fraction, a percent, or a permille. For each of them, rewrite it into the other two forms. Please fully simplify all fractions.   "
},
{
  "id": "sec5-exercises-2-11",
  "level": "2",
  "url": "sec5-exercises.html#sec5-exercises-2-11",
  "type": "Exercise",
  "number": "5.5.10",
  "title": "",
  "body": " Each year, an investment increases in value from its current value by . How much has it increased from its initial value after two years? If it is initially worth dollars, how much is it worth after two years?  The answer is not .  "
},
{
  "id": "sec6-decimal",
  "level": "1",
  "url": "sec6-decimal.html",
  "type": "Section",
  "number": "6.1",
  "title": "Writing fractions in decimal",
  "body": " Writing fractions in decimal  Recall the idea of the Hindu–Arabic numeral system. The positions of the digits correspond to powers of , and the digit in that place tells you how many copies of that power of to include. For example, To expand upon this idea to represent non-whole numbers, rather than just having positions which represent repeated multiplication by we want to also have positions which represent repeated division by .  It is notationally convenient to use negative powers to represent repeated division. If is a negative number then represents dividing by  many times. Recall that the usual rules for exponents still work under this definition.  With this notation in hand, what we want is to expand our positional notation system to have positions not just for positive powers of but also negative powers. The first thing you might try presents an issue. Suppose you want to write to mean . How do you know that you don't mean ? Or ? When we only had positive powers there was no ambiguity—start with power on the right. Now there is ambiguity.  The solution is simple: mark in some way where the zeroth power position is. The way we do this is via a decimal point , written as a period. Left of the decimal point is the positive power positions and right of the decimal point is the negative power positions. If only positive powers are included we don't write the decimal point. Thus we can distinguish between the following.   Hindu–Arabic numeral system, with fractional part  The Hindu–Arabic numeral system can be expanded to allow fractional parts as follows. Here, each is a digit, a numeral through . First, an example with a fixed number of digits. And an example with an arbitrary number of digits, before the decimal point and after the decimal point. We call the part before the decimal point the integer part and the part after the fractional part .  Any number written in this form can be written as a single fraction. For example, look at . The fractional part represents the number of hundreths = s, so this number is or . In general, if there are digits after the decimal point then the number can be written as a fraction with denominator .   Going in the other direction, any fraction whose denominator is a power of can be written in this form. If the denominator is then you need digits past the decimal point. If there are not enough digits in the numerator you fill in the missing slots with s. For example:   A reasonable question is, can any fraction be written in this form? If the fraction can be written to have a denominator which is a power of , the answer is yes. That can happen just in case the denominator's only prime factors are or , as those are the prime factors of . For example: For fractions with other denominators, however, it would take infinitely many digits past the decimal point to write exactly. For example, is written in decimal as where the s repeat forever. The upshot of this is, the real numbers can't just consist of numbers with finitely many digits past the decimal. For another example, the circle constant requires infinitely many digits to write.  Those numbers which require infinitely many digits present complications for calculations. How do you add two numbers if there are infinitely many digits to look at? For practical purposes, however, this isn't a problem. If you're out in the real world you don't know quantities to that level of precision. Thus it suffices to be able to work with finitely many digits. Our next topic is how to modify our algorithms for arithmetic to deal with these, and then we will talk about approximation.  "
},
{
  "id": "sec6-decimal-5",
  "level": "2",
  "url": "sec6-decimal.html#sec6-decimal-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decimal point "
},
{
  "id": "sec6-decimal-6",
  "level": "2",
  "url": "sec6-decimal.html#sec6-decimal-6",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Hindu–Arabic numeral system, with fractional part.",
  "body": "Hindu–Arabic numeral system, with fractional part  The Hindu–Arabic numeral system can be expanded to allow fractional parts as follows. Here, each is a digit, a numeral through . First, an example with a fixed number of digits. And an example with an arbitrary number of digits, before the decimal point and after the decimal point. We call the part before the decimal point the integer part and the part after the fractional part . "
},
{
  "id": "sec6-arithmetic",
  "level": "1",
  "url": "sec6-arithmetic.html",
  "type": "Section",
  "number": "6.2",
  "title": "The arithmetic of Hindu–Arabic numerals",
  "body": " The arithmetic of Hindu–Arabic numerals  The algorithms for arithmetic of whole numbers written as Hindu–Arabic numerals can be modified to work with fractional parts. With addition and subtraction the new complication is, we need to make sure the decimal points line up. The reason is, when you add in columns for the algorithm each column needs to represent the same power of ten. Here's an example.  The sum .  The algorithm for computing the sum 432.53 + 278.9.     In general, the procedure for addition with fractional parts work the same as 's case without fractional parts. You start at the rightmost column and add columns as you move to the left, carrying as necessary. As usual, if a number is blank in a column that represents zero copies of that power of . What is new is that now blanks can appear on the right, after the decimal point, as opposed to only on the left.  Let's see a couple more examples of addition.  The sum .  The algorithm for computing the sum 4.418 + 2.003.    The sum .  The algorithm for computing the sum 0.0034 + 0.021.    Subtraction works much the same, except you subtract in each column rather than add. As with integers, you may need to borrow from the next column. Let's see a couple examples.  The difference .  The algorithm for computing the difference 2.003 – 1.418.    The difference .  The algorithm for computing the difference 0.0201 – 0.0034.    Multiplication largely works as before, but presents an extra complication with where to place the decimal point in the product. To illustrate the issue, let's think of our numbers as fractions. For example, write as . Whatever the numerator of the product, it is clear that the denominator ought be . That is, instead of the product having one digit past the decimal point it should have two. Once we know where it goes, the rest of the work goes through the same. Namely, multiply by the rightmost digit, then as you move left through the digits shift your position left each time, and finally sum up all the pieces.  The product .  The algorithm for computing the product 2.3 × 3.1.    In general, we can determine where the place the decimal point of the product by counting the digits after it in each multiplicand. Consider the product . There are a total of digits after the decimal point, which correspond to a least ten's place of , so the product will have five digits after the decimal point.  The product .  The algorithm for computing the product 2.51 × 3.131.    Division creates a problem. You can do the long division algorithm, taking the partial remainders farther and farther out in the decimal expansion. But there's no guarentee that this process ever stops. With long division of integers, the process eventually stopped because you got to the units digit and there were no more digits to take from. Here there's always more space. Indeed, most of the time, the process will never stop. You will get an infinite loop of a calculation that goes on forever, producing more and more digits. This happens with an example as simple as or .  Later in this chapter we will talk about real numbers that need infinitely many digits to write. For now let me leave this as a signpost of the need for infinite decimal expansions.   Do the division , where instead of stopping with a remainder of you take from past the decimal point to keep going. Stop after the pattern becomes clear.   "
},
{
  "id": "sec6-arithmetic-3",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-3",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": "The sum .  The algorithm for computing the sum 432.53 + 278.9.   "
},
{
  "id": "sec6-arithmetic-6",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-6",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": "The sum .  The algorithm for computing the sum 4.418 + 2.003.   "
},
{
  "id": "sec6-arithmetic-7",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-7",
  "type": "Figure",
  "number": "6.2.3",
  "title": "",
  "body": "The sum .  The algorithm for computing the sum 0.0034 + 0.021.   "
},
{
  "id": "sec6-arithmetic-9",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-9",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": "The difference .  The algorithm for computing the difference 2.003 – 1.418.   "
},
{
  "id": "sec6-arithmetic-10",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-10",
  "type": "Figure",
  "number": "6.2.5",
  "title": "",
  "body": "The difference .  The algorithm for computing the difference 0.0201 – 0.0034.   "
},
{
  "id": "sec6-arithmetic-12",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-12",
  "type": "Figure",
  "number": "6.2.6",
  "title": "",
  "body": "The product .  The algorithm for computing the product 2.3 × 3.1.   "
},
{
  "id": "sec6-arithmetic-14",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-14",
  "type": "Figure",
  "number": "6.2.7",
  "title": "",
  "body": "The product .  The algorithm for computing the product 2.51 × 3.131.   "
},
{
  "id": "sec6-arithmetic-17",
  "level": "2",
  "url": "sec6-arithmetic.html#sec6-arithmetic-17",
  "type": "Checkpoint",
  "number": "6.2.8",
  "title": "",
  "body": " Do the division , where instead of stopping with a remainder of you take from past the decimal point to keep going. Stop after the pattern becomes clear.  "
},
{
  "id": "sec6-approx",
  "level": "1",
  "url": "sec6-approx.html",
  "type": "Section",
  "number": "6.3",
  "title": "Approximations",
  "body": " Approximations  In real life, you never know quantities to exact precision. If your speedometer reads that your car is going miles per hour, it could be miles per hour, or or . Indeed, that level of precision isn't helpful, so you would just round all of these to miles per hour.  A useful feature of writing numbers in decimals is that it makes it straightforward to handle approximations. You can look at, say and immediately see it is close to . In contrast, it would take a little thought to see that is close to .  Let's first talk about rounding to a whole number.  Rounding to an integer   Rounding a real number to an integer is a way to replace with an integer which is close to . There are few ways you can do this.  Rounding toward zero , also called truncation , is the closest integer between and . If is written in decimal, this is deleting all the digits past the decimal point. For instance, the truncation of is .  The floor of is the closest integer . This is also called rounding toward or rounding down . If is positive this is equivalent to truncation.  The ceiling of is the closest integer . This is also called rounding toward or rounding up .  Rounding to the nearest integer replaces with the integer closest to . That is, if the first digit of is through then you round toward zero, and if the first digit of is through then you round away from zero.     Consider the number . Rounding toward zero, rounding down, and rounding to the nearest integer all round to . Rounding up rounds to .  Or consider . Rounding toward zero and rounding down both round to . Rounding up and rounding to the nearest integer both round to .   With positive numbers, rounding toward zero and rounding down are equivalent. The distinction between them shows up for negative numbers. Consider . Rounding down rounds to while rounding toward zero rounds to . On the other hand, for negative numbers rounding up and rounding toward zero are equivalent.   Sometimes people simply say rounding to mean rounding to the nearest integer. If you see it said without specifying the method this is probably what they mean.   When rounding to the nearest integer, what do you do when a number is exactly halfway between two integers? Do you round to or to ? The two integers are tied for how close they are, so how do you decide the tie-breaker?  The rule given above is to always round up in case of a tie. For some purposes, however, this rule can introduce bias. To illustrate this, imagine you are using a digital scale which gives weights accurate to one tenth of the gram and you are rounding to the nearest gram. For instance, it might display a weight of grams, which you would round to grams. One possible digit after the decimal point, namely , doesn't give you any error when you round. Of the remaining nine, eight of them are balanced. Rounding down from introduces an error of below the measured weight, but rounding up from introduces an error of above the measured weight. If you do lots of measurements on average these errors will cancel. The remaining digit, , always rounds upward, introducing an error of above the measured weight. This one error is not canceled out, and so if you weight many different things and added them up the errors would tend to bias upward.  This is, admittedly, quite in the weeds. If you're using your digital scale for, say, home baking then the error is too small to matter. But for more precise matters, such as scientific or engineering uses, this bias can matter. In such a case, you'll want to use a different tie-breaker rule.  The lesson here is, there is no one rule that's the best for all circumstances. There are trade-offs of convenience and precision, and what is best depends on what you're using it for. This is common. Mathematics may furnish many possible methods one could use, and no one of them is better than the others for all applications.  Indeed, this is true for rounding. Is it best to round up? Round down? Round to the nearest integer? The answer is: it depends.   Rounding to an integer is the same as rounding to the units place. You can do the same process, but rounding to any other place. When you round to the units digit, all digits to the right—that is, all digits after the decimal point—become s. The same applies when rounding to other places. For example, if you round to the hundreds place then the tens and units digits, as well as all digits after the decimal, become . Or if you round to the tenths place, then all digits after that—hundreths, thousandths, etc.—get set to .  As with rounding to an integer, there are multiple methods to round to the nearest tens, etc. You can round up to the next thousand, you can round to the nearest thousand, you can round toward zero to the next thousand, and so on. If you round to the nearest, you can tell which direction to round by looking at the next place. For example, to round to the nearest tenth you look at the digit in the hundreths place. The digits to you round toward zero, and the digits to you round away from zero.   Consider the number . Rounded to the nearest tenth it is . Rounded down to the tenths place it is . Rounded to the nearest ten it is . Rounded up to the next ten it is . Rounded to the nearest thousand it is while rounded up to the next thousand it is .   Physicists tell us that the speed of light is meters per second. This value is known exactly. But when doing calculations, you probably don't need the number to that precision. It's enough to say it's about three hundred million meters per second. Rounding gives you an easier number to say and work with.  The reason we know the speed of light exactly is because that is the modern definition of the meter: it is defined to be of the distance traveled by light in one second. This is not the original definition of the meter. Older definitions were based on distances around the globe, so as to create a standard that could be used internationally. Advances in physics allowed this to be replaced by the current, light-based definition.  Most quantities in the real world aren't known to that level of precision. For example, suppose you measure the sides of a square box to be about foot. Using the Pythagorean theorem, you calculate that the length of the diagonal of the box is feet. It wouldn't make sense to report that length to that level of precision. The sides of the box are not exactly foot, and so the diagonal is not exactly feet. For example, if the true length of the side was feet then the diagonal would be about feet long. For this reason, it makes sense to round the value; reporting too precise a measure gives the misimpression that you know the value to that many decimal points.   Significant digits are a convenient way to organize this information. The idea is, the number of digits you write down represents how precisely you know a value. These are the digits that are significant , and any other digits are noise and shouldn't be reported. When doing calculations, you round your final values to the same number of significant digits. You can use the following rules to read and use significant digits. Nonzero digits within the level of precision are always significant. You should round so digits outside the level of precision aren't reported. For example, if you have two digits of precision then you should report as .  Zeroes left of the first nonzero digit are never significant.  Zeroes after the decimal point are significant and should be reported if they are within the level of precision. For example, if you have three digits of precision then you should write instead of , to communicate that the first digit past the decimal point is signicant.  Zeroes before the decimal point may or may not be significant. For example, might represent a value with two digits of precision, or it might represent one with three or four digits of precision. Some underline or overline the last significant zero to indicate the level of precision. For instance, one could write to represent three digits of precision. But this is not a universal convention.  When doing calculations with multiple numbers, values should use the smallest number of significant digits from your inputs.     You have two strips of cloth, one centimeters long and the other centimeters long. (For both of these, the numbers are at two digits of precision.) If you need centimeters of length from each to sew them together, how long will your sewn-together strips be?  To answer this, calculate You then round to two digits of precision, giving you centimeters. Note that this is the same answer you'd get if you just calculated and ignored the amount of cloth needed for the stitching.  If instead the cloths were and centimeters long, with the same length needed for sewing, you would calculate This is already at the correct level of precision so you don't need to round to report the total length will be centimeters. Note that this is not the same value as .   Intuitively, it should make sense that if the strips are really long then the length needed for sewing them together is a rounding error. Whereas if the lengths of the cloths are close to the amount reserved to sew them together then that difference is significant.   Suppose you measure that a toy building brick is milimeters long. If you placed of them in a row, with no space between them, how long would it be? What if you did of them  The calculations are each a single multiplication. For the first, milimeters. This is already the correct level of precision—three digits, matching the input—so you don't have to round. For the second, . This is more digits than your level of precision, so you should round to milimeters.    You have a rope which you measured to be meters long. You cut off meters of rope from it. How much length is left over?  Calculate This is three digits of precision, whereas your input measurements had two and three digits of precision. You should round to the smaller of those, so round to two digits of precision: you have meters of rope left over.  The rounding here represents the uncertainty in your initial measurements. You measured that the rope was originally meters, but it could be or or . You don't know, and these will give slightly different lengths for what's left after cutting. You can't be more sure of your calculated length then you are of the measurements that went into it.   A practical way of dealing with both significant figures and magnitudes—is the number approximately one million? one trillion? one thousandth?—is given by scientific notation . Let me give an example first. The speed of light is, to four digits of precision, meters per second. The magnitude of this number is some number of hundred millions, or s. How many s is it? The first significant digit gives the whole number, and the rest are the fractional part. Namely, this is many s. We represent this succinctly as a multiplication: the speed of light is approximately meters per second.  Scientific notation  A number is written in scientific notation when it is written in the form where are digits – and is an integer. The number is called the exponent and the digits are called the significand . Phrased another way, a number is written in scientific notation when it is written in the form , where is a number between and and is an integer.    Some calculators use a shorthand for scientific notation, writing to mean . (The E naturally stands for Exponent .)   You write in scientific notation as .  You write in scientific notation as .  You write in scientific notation as .  You write in scientific notation as .  The number isn't quite in scientific notation. To write it that way, it should be .    The virtue of scientific notation is that it lets you quickly see how large a quantity is and its number of significant digits. It is commonly used, as the name suggests, in science. For example, in chemistry Avogadro's constant is used to convert between mass of a chemical and the number of particles therein. It is approximately . This is too large in magnitude to comfortably write out in the Hindu–Arabic numeral system: (This number is actually wrong; it's so it's off by an order of magnitude. But checking that requires counting digits and is prone to mistakes!)  Another way this problem is handled is with prefixes for units in the metric system. Rather than write grams one writes kilograms. Or instead of saying that visible light has a wavelength of about meters you can say it's about nanometers.  "
},
{
  "id": "sec6-approx-5",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-5",
  "type": "Definition",
  "number": "6.3.1",
  "title": "Rounding to an integer.",
  "body": "Rounding to an integer   Rounding a real number to an integer is a way to replace with an integer which is close to . There are few ways you can do this.  Rounding toward zero , also called truncation , is the closest integer between and . If is written in decimal, this is deleting all the digits past the decimal point. For instance, the truncation of is .  The floor of is the closest integer . This is also called rounding toward or rounding down . If is positive this is equivalent to truncation.  The ceiling of is the closest integer . This is also called rounding toward or rounding up .  Rounding to the nearest integer replaces with the integer closest to . That is, if the first digit of is through then you round toward zero, and if the first digit of is through then you round away from zero.    "
},
{
  "id": "sec6-approx-6",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-6",
  "type": "Example",
  "number": "6.3.2",
  "title": "",
  "body": "Consider the number . Rounding toward zero, rounding down, and rounding to the nearest integer all round to . Rounding up rounds to .  Or consider . Rounding toward zero and rounding down both round to . Rounding up and rounding to the nearest integer both round to .  "
},
{
  "id": "sec6-approx-7",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-7",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "With positive numbers, rounding toward zero and rounding down are equivalent. The distinction between them shows up for negative numbers. Consider . Rounding down rounds to while rounding toward zero rounds to . On the other hand, for negative numbers rounding up and rounding toward zero are equivalent.  "
},
{
  "id": "sec6-approx-12",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-12",
  "type": "Example",
  "number": "6.3.4",
  "title": "",
  "body": " Consider the number . Rounded to the nearest tenth it is . Rounded down to the tenths place it is . Rounded to the nearest ten it is . Rounded up to the next ten it is . Rounded to the nearest thousand it is while rounded up to the next thousand it is .  "
},
{
  "id": "sec6-approx-16",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Significant digits significant "
},
{
  "id": "sec6-approx-17",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-17",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": " You have two strips of cloth, one centimeters long and the other centimeters long. (For both of these, the numbers are at two digits of precision.) If you need centimeters of length from each to sew them together, how long will your sewn-together strips be?  To answer this, calculate You then round to two digits of precision, giving you centimeters. Note that this is the same answer you'd get if you just calculated and ignored the amount of cloth needed for the stitching.  If instead the cloths were and centimeters long, with the same length needed for sewing, you would calculate This is already at the correct level of precision so you don't need to round to report the total length will be centimeters. Note that this is not the same value as .  "
},
{
  "id": "sec6-approx-19",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-19",
  "type": "Checkpoint",
  "number": "6.3.6",
  "title": "",
  "body": " Suppose you measure that a toy building brick is milimeters long. If you placed of them in a row, with no space between them, how long would it be? What if you did of them  The calculations are each a single multiplication. For the first, milimeters. This is already the correct level of precision—three digits, matching the input—so you don't have to round. For the second, . This is more digits than your level of precision, so you should round to milimeters.  "
},
{
  "id": "sec6-approx-20",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-20",
  "type": "Checkpoint",
  "number": "6.3.7",
  "title": "",
  "body": " You have a rope which you measured to be meters long. You cut off meters of rope from it. How much length is left over?  Calculate This is three digits of precision, whereas your input measurements had two and three digits of precision. You should round to the smaller of those, so round to two digits of precision: you have meters of rope left over.  The rounding here represents the uncertainty in your initial measurements. You measured that the rope was originally meters, but it could be or or . You don't know, and these will give slightly different lengths for what's left after cutting. You can't be more sure of your calculated length then you are of the measurements that went into it.  "
},
{
  "id": "sec6-approx-21",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scientific notation "
},
{
  "id": "sec6-approx-22",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-22",
  "type": "Definition",
  "number": "6.3.8",
  "title": "Scientific notation.",
  "body": "Scientific notation  A number is written in scientific notation when it is written in the form where are digits – and is an integer. The number is called the exponent and the digits are called the significand . Phrased another way, a number is written in scientific notation when it is written in the form , where is a number between and and is an integer.  "
},
{
  "id": "sec6-approx-24",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-24",
  "type": "Example",
  "number": "6.3.9",
  "title": "",
  "body": " You write in scientific notation as .  You write in scientific notation as .  You write in scientific notation as .  You write in scientific notation as .  The number isn't quite in scientific notation. To write it that way, it should be .   "
},
{
  "id": "sec6-approx-25",
  "level": "2",
  "url": "sec6-approx.html#sec6-approx-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Avogadro's constant "
},
{
  "id": "sec6-definition",
  "level": "1",
  "url": "sec6-definition.html",
  "type": "Section",
  "number": "6.4",
  "title": "Defining the real numbers",
  "body": " Defining the real numbers  Having spent a bunch of time on working practically with real numbers, let's close the section with a little theory. How do we make sense of what the real numbers are?  Natural numbers we made sense of in terms of what they do—they count discrete, finite collections. With integers and rational numbers we built on top of the natural numbers. Integers are natural numbers with sign (plus or minus) to represent direction. Rational numbers are formed as fractions of integers. These let us solve the problems, respectively, of not always being able to subtract and not always being able to divide.  The problem that real numbers solve is the problem of holes in the number line. While there are lots and lots of rational numbers and you can get them as close as you like, there's still holes—numbers that can't be written as a fraction of integers at all. We call these numbers irrational , because they are not rational numbers. Examples of these include and the circle constant .  It can be very difficult to show that a number is irrational. To get a taste, here is an explanation of why the square root of is irrational.  Do not feel bad if you look at the following proof and don't understand it. The logic of it can be difficult to wrap your head around. I included it not because I expect you to read and immediately understand it but instead to illustrate the challenge in concluding that a number is irrational.  The number is irrational. That is, there are no integers so that .  How do you show that there are no such integers ? One way is to assume that there were such and show that that is impossible. That is the approach we will take. To that end, suppose that and are integers so that . As we discussed in the chapter on rational numbers, any fraction can be written in reduced form where there are no common factors between the numerator and denominator. Let's thereby assume that we've already done any canceling out so and have no common factors.  Now we do a little algebra. What this shows is, is even. This means that is also even, because if it were odd then its square would also be odd. In symbols, for some integer . Substitute that into the equation and do a little more algebra. This shows us that is even, so like before is also even. But this is impossible! If and are both even then they have a common factor of , when they were supposed to have no common factor.  We have seen that our assumption that there are integers so that is impossible, so must be irrational.  With some heavy-duty number theory you can generalize this fact. Say that an integer is a perfect square if it is a square of an integer. And an integer is a perfect -th power if it is an -th power of an integer. Note that the square root of a perfect square is a rational number, because it is a whole number. And similarly for -th roots of perfect -th powers.  The number is irrational if is not a perfect square. And is irrational if is not a perfect -th power.  The upshot is, there are lots and lots of numbers we can't represent as fractions of integers, and so the rational numbers aren't enough.  We can fill some of these holes in the number line by declaring that , , , and so on are all numbers too. But how do we know that we didn't miss any? For example, if we just include -th roots of integers then we won't have thrown in . (The fact that isn't a root of an integer is a difficult theorem.) If we want to fill all the holes, we need something less piecemeal.  Decimal expansions give us a way to do this. We can say that a real number is any number you can write in decimal, possibly with infinitely many digits past the decimal point. This will include , , and so on.  The real numbers  The real numbers are all numbers which can be expressed with infinite decimal expansions. That is, a real number is one of the form where each digit is a whole number between and . We write to refer to the set of real numbers.   The fraction can be written as . If you want to make the infinite decimal expansion clear, this is where the s repeat infinitely.  The fraction can be written as where the s repeat infinitely.  The fraction can be written as where the digits repeat forever.  The number can be written as The decimal expansion of never repeats. No matter how far out you go it will always be a new pattern.    Numbers written with finitely many digits represent sums. For example, the number represents the sum Numbers with infinite decimal expansions also represent sums, but now the sums have infinitely many terms. For example, represents an infinite sum, with each term getting smaller and smaller. Infinite sums require calculus to fully understand. Without going into the calculus ideas, let me give you a taste of the challenges.  When adding finitely many numbers, the sum always makes sense. This is not the case when adding infinitely many numbers. For instance, consider the sum of all positive integers: This doesn't add up to a number. You keep adding larger and larger values, so the overall sum would have to be infinite in size, but all numbers are finite. That is, there's no number you can consistently declare to be the sum of these infinitely many numbers.  For another example, consider the sum This also doesn't add up to a number. If you try to evaluate this sum by adding more and more terms, you'll see that the partial sum flipflips betwen and . Because it keeps flipflipping between two different values there's no single number to be the value of the entire infinite sum.  On the other hand, some infinite sums do add up to a single finite value. Imagine you have a cake and a scheme to feed infinitely many friends with it. You cut it in half and take one half for yourself. Then you take the remainder and cut it in half again, giving about one of the two pieces to your first friend. You cut the remainder in half and give it to the next friend. You repeat this process, so each friend gets half as much as the previous one, feeding infinitely many people. (Although some might be insulted at the tiny piece of cake you gave them.  If the original cake had a size of , how big is each piece? Your piece has size . Your first friend gets half of that, namely . The next friend gets , then . In general, the -th person to get a slice had it cut in half many times before it gets to them, so they get much cake. Add all these pieces together and you get the sum Since these infinitely many pieces together comprise the entire cake, the value of this infinite sum must be the size of the cake, namely the sum is .  In mathematician-speak, infinite sums that have a value are called convergent while those that don't are called divergent . The good news is, if you're just dealing with the sums from numbers written in decimal you don't have to worry about this, because everything is convergent.   Every real number represents a convergent sum. That is, every real number really is a number.  It's perhaps helpful to contrast real numbers with something you could write that isn't a number. What if you tried to write infinitely many digits to the left of the decimal point? Consider the number  . This would represent the sum Much like the sum from before, this infinite sum diverges to infinity, since the values you are adding grow without bound.  In summary, infinitely many digits after the decimal point is good, while infinitely many before the decimal point is bad.  You might ask at this point, what about the holes? Did this really fill all of them? The answer is yes. The real numbers give a complete number line with no gaps. Making this mathematically precise and proving it is, on the other hand, a really big task. The undergraduate math class in which one would learn all these details, called real analysis, is one which is too high level to be taught at community colleges. As such I will leave us with that statement.  Is this the end of the story for number systems then? The answer is no. There are interesting and useful number systems which go beyond the real numbers. For example, the complex numbers were invented to make sense of square roots of negative numbers. (Remember that doesn't make sense in the real numbers; if you multiply a real number by itself it will always be and so won't be .) These form a two-dimensional plane of numbers, and enjoy use in electrical engineering, physics, and more.  There are yet other, more exotic number systems of interest to few outside of mathematics. Hyperreal numbers, surreal numbers, quaternions, ordinal numbers, and other number systems get used for specialized purposes. But for most people, the real numbers are all you will ever need.  "
},
{
  "id": "sec6-definition-4",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "irrational "
},
{
  "id": "sec6-definition-7",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-7",
  "type": "Theorem",
  "number": "6.4.1",
  "title": "",
  "body": "The number is irrational. That is, there are no integers so that .  How do you show that there are no such integers ? One way is to assume that there were such and show that that is impossible. That is the approach we will take. To that end, suppose that and are integers so that . As we discussed in the chapter on rational numbers, any fraction can be written in reduced form where there are no common factors between the numerator and denominator. Let's thereby assume that we've already done any canceling out so and have no common factors.  Now we do a little algebra. What this shows is, is even. This means that is also even, because if it were odd then its square would also be odd. In symbols, for some integer . Substitute that into the equation and do a little more algebra. This shows us that is even, so like before is also even. But this is impossible! If and are both even then they have a common factor of , when they were supposed to have no common factor.  We have seen that our assumption that there are integers so that is impossible, so must be irrational. "
},
{
  "id": "sec6-definition-8",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perfect square perfect -th power "
},
{
  "id": "sec6-definition-9",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-9",
  "type": "Theorem",
  "number": "6.4.2",
  "title": "",
  "body": "The number is irrational if is not a perfect square. And is irrational if is not a perfect -th power. "
},
{
  "id": "sec6-definition-13",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-13",
  "type": "Definition",
  "number": "6.4.3",
  "title": "The real numbers <span class=\"process-math\">\\(\\Rbb\\)<\/span>.",
  "body": "The real numbers  The real numbers are all numbers which can be expressed with infinite decimal expansions. That is, a real number is one of the form where each digit is a whole number between and . We write to refer to the set of real numbers. "
},
{
  "id": "sec6-definition-14",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-14",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": " The fraction can be written as . If you want to make the infinite decimal expansion clear, this is where the s repeat infinitely.  The fraction can be written as where the s repeat infinitely.  The fraction can be written as where the digits repeat forever.  The number can be written as The decimal expansion of never repeats. No matter how far out you go it will always be a new pattern.   "
},
{
  "id": "sec6-definition-20",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convergent divergent "
},
{
  "id": "sec6-definition-21",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-21",
  "type": "Theorem",
  "number": "6.4.5",
  "title": "",
  "body": " Every real number represents a convergent sum. That is, every real number really is a number. "
},
{
  "id": "sec6-definition-25",
  "level": "2",
  "url": "sec6-definition.html#sec6-definition-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex numbers "
},
{
  "id": "sec6-characterizations",
  "level": "1",
  "url": "sec6-characterizations.html",
  "type": "Section",
  "number": "6.5",
  "title": "Characterizing rational and irrational numbers",
  "body": " Characterizing rational and irrational numbers  It's neat that decimal expansions can be used to characterize which real numbers are rational versus irrational. This is of limited practical use—you can't survey an entire infinite string of digits in any reasonable time—but it serves as a nice coda for this chapter.  Characterizing the rational numbers with decimal expansions  A real number is rational, meaning it can be written as a fraction of integers, if and only if its decimal expansion eventually repeats. Thus, an irrational number is one whose decimal expansion goes forever without repeating.  Let's look at a few different examples. We will write a bar over the sequence of digits which repeat, rather than relying on unclear dotdotdots. For example, we will write as .  The number has a decimal expansion which eventually repeats—after the it's all s, which we don't write. Thus it represents a rational number. Namely, this is .  The number has its decimal expansion consisting entirely of s repeated. It represents the rational number .  The number represents the rational number . Note that the repeating sequence of digits doesn't start right after the decimal point.  The decimal expansion for starts with . Since this number is irrational it will never repeat, no matter how far out you go.  The decimal expansion for starts with . This number is irrational, so it will never repeat.  Note the order of the logic here. We know is irrational, therefore we know the decimal expansion never repeats. In theory you could go the other way, but how would you conclusively show that its decimal expansion never repeats? It would take infinitely long to look at the whole thing. Much quicker to just spend years studying math to understand a proof that is irrational.  On the other hand, you can create patterns that don't repeat and thereby produce yet more irrational numbers. However, these numbers aren't useful for much. Consider the number where between each pair of s there is one more zero than last time. This decimal expansion never repeats—there's always longer and longer blocks of s the farther out you go. So this number is irrational.   Give a definition of an irrational number and explain how you know it's irrational.   "
},
{
  "id": "sec6-characterizations-3",
  "level": "2",
  "url": "sec6-characterizations.html#sec6-characterizations-3",
  "type": "Theorem",
  "number": "6.5.1",
  "title": "Characterizing the rational numbers with decimal expansions.",
  "body": "Characterizing the rational numbers with decimal expansions  A real number is rational, meaning it can be written as a fraction of integers, if and only if its decimal expansion eventually repeats. Thus, an irrational number is one whose decimal expansion goes forever without repeating. "
},
{
  "id": "sec6-characterizations-12",
  "level": "2",
  "url": "sec6-characterizations.html#sec6-characterizations-12",
  "type": "Checkpoint",
  "number": "6.5.2",
  "title": "",
  "body": " Give a definition of an irrational number and explain how you know it's irrational.  "
},
{
  "id": "sec6-exercises",
  "level": "1",
  "url": "sec6-exercises.html",
  "type": "Section",
  "number": "6.6",
  "title": "Exercises",
  "body": " Exercises     Calculate the following sum and difference. Show all steps in your calculation.     Each year, an investment increases in value from its current value by . If it is initially worth dollars, how much is it worth after two years? After six years? After twelve years? Round all your answers to the nearest hundreth.  You can write in decimal as and is . Using this, write a formula which describes the value of the investment after years.  If you're completely stuck, reread the section from about percents.    For the following products, state how many digits past the decimal point the product will have.     Calculate the product by the box method. That is, individually do the four products and add them up to get the sum. For each of the four intermediate products, how many digits past the decimal point does it have?  One way to determine the number of digits past the decimal point is to write things as fractions: and . Then use rules for multiplying fractions.    For each of the following numbers, round to the nearest ten and the nearest tenth using each of: rounding toward zero, rounding up, rounding down, and rounding to the nearest ten\/tenth. Clearly label your rounding method for each.     Consider a new rule for rounding, namely rounding away from zero . That is, to round a number away from zero to the nearest integer you move away from zero toward the next integer. Demonstrate this new rule by rounding away from zero to the next integer for all of the following. For which numbers is this rule equivalent to rounding down? For which numbers is this rule equivalent to rounding up?     Write the following numbers in scientific notation. For each one, how many significant digits does it have?     Come up with a rule for how to multiply two numbers written in scientific notation. Demonstrate your rule by calculating the product   A product like can be thought of as multiplying four numbers together. Use rules for multiplication and exponents to rewrite.   Numbers with a repeating decimal expansion are examples of what mathematicians call geometric sums . Namely, a geometric sum is one of the form The rule for geometric sums is, if then the sum converges to . For example, In this case, we had and .   Write the numbers and as infinite sums and use the rule for geometric sums to determine their values. What do your answers tell you about the rational numbers these are equal to?  Follow the same steps as the example.    Consider the two numbers and given by the following patterns for their decimal expansions. Each number has an integer part of . The digits after the decimal point for are obtained by writing the integers through in order one after another, looping back to whenever they reach .  The digits after the decimal point for are obtained by writing the integers starting at in order one after another, never looping back.  For each of these numbers, is it rational or irrational? Explain your answers.   If you are not sure, begin by writing out the decimal expansion of the number. What patterns can you notice?    "
},
{
  "id": "sec6-exercises-2-1",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-1",
  "type": "Exercise",
  "number": "6.6.1",
  "title": "",
  "body": " Calculate the following sum and difference. Show all steps in your calculation.   "
},
{
  "id": "sec6-exercises-2-2",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-2",
  "type": "Exercise",
  "number": "6.6.2",
  "title": "",
  "body": " Each year, an investment increases in value from its current value by . If it is initially worth dollars, how much is it worth after two years? After six years? After twelve years? Round all your answers to the nearest hundreth.  You can write in decimal as and is . Using this, write a formula which describes the value of the investment after years.  If you're completely stuck, reread the section from about percents.  "
},
{
  "id": "sec6-exercises-2-3",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-3",
  "type": "Exercise",
  "number": "6.6.3",
  "title": "",
  "body": " For the following products, state how many digits past the decimal point the product will have.   "
},
{
  "id": "sec6-exercises-2-4",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-4",
  "type": "Exercise",
  "number": "6.6.4",
  "title": "",
  "body": " Calculate the product by the box method. That is, individually do the four products and add them up to get the sum. For each of the four intermediate products, how many digits past the decimal point does it have?  One way to determine the number of digits past the decimal point is to write things as fractions: and . Then use rules for multiplying fractions.  "
},
{
  "id": "sec6-exercises-2-5",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-5",
  "type": "Exercise",
  "number": "6.6.5",
  "title": "",
  "body": " For each of the following numbers, round to the nearest ten and the nearest tenth using each of: rounding toward zero, rounding up, rounding down, and rounding to the nearest ten\/tenth. Clearly label your rounding method for each.   "
},
{
  "id": "sec6-exercises-2-6",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-6",
  "type": "Exercise",
  "number": "6.6.6",
  "title": "",
  "body": " Consider a new rule for rounding, namely rounding away from zero . That is, to round a number away from zero to the nearest integer you move away from zero toward the next integer. Demonstrate this new rule by rounding away from zero to the next integer for all of the following. For which numbers is this rule equivalent to rounding down? For which numbers is this rule equivalent to rounding up?  "
},
{
  "id": "sec6-exercises-2-7",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-7",
  "type": "Exercise",
  "number": "6.6.7",
  "title": "",
  "body": " Write the following numbers in scientific notation. For each one, how many significant digits does it have?   "
},
{
  "id": "sec6-exercises-2-8",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-8",
  "type": "Exercise",
  "number": "6.6.8",
  "title": "",
  "body": " Come up with a rule for how to multiply two numbers written in scientific notation. Demonstrate your rule by calculating the product   A product like can be thought of as multiplying four numbers together. Use rules for multiplication and exponents to rewrite.  "
},
{
  "id": "sec6-exercises-2-9",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric sums "
},
{
  "id": "sec6-exercises-2-10",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-10",
  "type": "Exercise",
  "number": "6.6.9",
  "title": "",
  "body": " Write the numbers and as infinite sums and use the rule for geometric sums to determine their values. What do your answers tell you about the rational numbers these are equal to?  Follow the same steps as the example.  "
},
{
  "id": "sec6-exercises-2-11",
  "level": "2",
  "url": "sec6-exercises.html#sec6-exercises-2-11",
  "type": "Exercise",
  "number": "6.6.10",
  "title": "",
  "body": " Consider the two numbers and given by the following patterns for their decimal expansions. Each number has an integer part of . The digits after the decimal point for are obtained by writing the integers through in order one after another, looping back to whenever they reach .  The digits after the decimal point for are obtained by writing the integers starting at in order one after another, never looping back.  For each of these numbers, is it rational or irrational? Explain your answers.   If you are not sure, begin by writing out the decimal expansion of the number. What patterns can you notice?  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
