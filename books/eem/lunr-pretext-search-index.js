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
  "body": " Preface: To the student  This book is designed for students pursuing a career in early childhood or elementary education. Its aim is for you to understand the mathematics you will teach to your students.  When teaching, you should understand the topic more deeply than your students. This is for many reasons. One is that later learning builds on earlier education, and you need to know where students are going to better prepare them. This is especially the case in mathematics education, due to the cumulative nature of the discipline. Another reason is that you will occasionally get advanced students who quickly pick up the material and want more. You want to know enough to be able to guide them to further self-study. Yet another reason is that methods and fads in pedagogy change over time. A deeper understanding of the material enables you to better adapt to these changes and see how they are new looks at the same concepts.  For these reasons, this book is not organized the same as the elementary mathematics curriculum. Instead, chapters are broken up by topic, with each chapter covering material that is spread across multiple years in an elementary school. The goal is for you to understand the unifying mathematical concepts and see how topics across multiple years are aspects of a larger pattern.  This book is broken up into three parts, intended to be covered over the course of a year-long sequence. is about arithmetic, the mathematics of quantities.   is an introduction covering how to read mathematics and how to think about problem solving. The next chapters are organized around different number systems. introduces the natural numbers , those numbers used for counting. then covers how to write natural numbers and how to do arithmetical calculations with them, and goes into a different perspective on the natural numbers. In expand the natural numbers to build the integers , then the rational numbers in and the real numbers in .   is about geometry, the mathematics of shapes.   is an introduction, surveying many kinds of shapes in both two and three dimensions. is about measurement. How do we measure and calculate distance, area, volume? is about symmetry. How do we mathematically precise the idea that a shape is symmetric? covers the notions of congruence and similarity, making precise the idea when two shapes are the same.   is about statistics, the mathematics of dealing with data, uncertainty, and making predictions. This is the shortest part.   is about data and how you interpret it, summarize it, and use it to make predicitons. is about probability, the quantification of uncertainty.  "
},
{
  "id": "prefaceX-6",
  "level": "2",
  "url": "prefaceX.html#prefaceX-6",
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
  "body": " Exercises   For these counting exercises, write your answer as a formula, not as a number. For example, write instead of .   A date night special at a restaurant lets you pick either a soup or salad as a starter, then an entree, and finally a dessert. If there are three soups, two salads, five entrees, and four desserts, how many different meals can you choose? If you and your date independently choose your own meals, how many combinations are there for how the two of you can order?    In a race with racers, how many different outcomes are there for who gets first through sixth place?  Think of choosing an outcome as first picking who comes in first, then picking a different person for second, and so on to sixth place. How many options do you have for first? Then how many for second? And so on.    How many ways are there to pick a digit PIN? A digit PIN. A digit PIN for any positive whole number ?  Think of picking each digit as an independent choice. How many options for one digit? Now put it together for multiple digits.   In more advanced uses of sets, it's helpful to talk about mappings or correspondances between them. How do you assign each element of the input set an element of the output set?  Functions  Let and be sets. A function  from to , which we write as is a way of assigning each input to an output .   Consider and . Give an example of a function by specifying the three outputs .   We can use functions to give an alternative definition of exponentiation. Namely, counts the number of functions from a set of size to a set of size .   Confirm the two definitions of exponentiation are equivalent for a specific case by counting how many functions there are from a set with elements to a set with elements.  Think of choosing a function as choosing an output for the first element of , then the next one, and so on until you've picked an output for every element.    Confirm that this is in general equivalent to the definition by iterated multiplication by explaining why there are functions from a set of size to a set of size .  Same hint as before, but now instead of having a specific value for and you have to think a step more abstractly.   A function is called one-to-one if different inputs get sent to different outputs. It is called onto if every element of is the output for some input . If is both one-to-one and onto it is called bijective .   Let and . Come up with a function which is one-to-one by specifying the outputs for every input . Also come up with a function which is onto. Can you come up with a function which is onto but not one-to-one? Either demonstrate such a function or explain why you think it's impossible.    Consider defined as . Explain why is one-to-one but not onto. Also consider defined as is the whole number you get rounding down from . Explain why is onto but not one-to-one.   One use of functions is to give a way to compare sizes of sets. If and are sets, then if there is a one-to-one function and if there is a bijective function . Phrased in ordinary language, two sets have the same number of elements if and only if there is a bijective function between them.   A question mathematicians grappled with as the nineteenth century was turning into the twentieth century was, how do you make precise and formal what a number is? One approach, pioneered by the German logician Gottlob Frege, was to take this notion of bijective correspondence as the fundamental concept on top of which to say what numbers are. You can think of this approach as saying, more fundamental than counting a collection of things is telling whether two collections have the same number of things in them. Counting—pointing at things in order and saying one, two, … is a special case of this. When you count the fingers on a hand you are demonstrating a bijective function from the set and the set of fingers on that hand.  For this book, that formal approach isn't appropriate and so it's relegated to a short detour in the exercises. There are yet other approaches to try to make precise sense of what numbers are, but those require concepts beyond the scope of this course.    Demonstrate that your left hand and right hand have the same number of fingers by describing a bijective function from the set of fingers on your left hand to the set of fingers on your right hand.    Demonstrate that any two singletons and have the same cardinality by giving a bijective function between them.    "
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
  "body": " Confirm the two definitions of exponentiation are equivalent for a specific case by counting how many functions there are from a set with elements to a set with elements.  Think of choosing a function as choosing an output for the first element of , then the next one, and so on until you've picked an output for every element.  "
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
  "id": "sec1-exercises-2-16",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-16",
  "type": "Exercise",
  "number": "1.9.9",
  "title": "",
  "body": " Demonstrate that your left hand and right hand have the same number of fingers by describing a bijective function from the set of fingers on your left hand to the set of fingers on your right hand.  "
},
{
  "id": "sec1-exercises-2-17",
  "level": "2",
  "url": "sec1-exercises.html#sec1-exercises-2-17",
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
  "id": "sec3-prime",
  "level": "1",
  "url": "sec3-prime.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prime numbers",
  "body": " Prime numbers  If we think of natural numbers as being formed by multiplication, then the building blocks are those numbers we can't split up any further. These are what we call the prime numbers. For example, we can break up as , but there's no way to break up into a multiplication of two smaller numbers.  Divisibility  Let and be natural numbers. We say that  divides  if is a multiple of , that is if for some natural number . Symbolically we write this as . This concept has many synonyms; you also hear is a divisor of , is a factor of , or is a multiple of .  For example, is a factor of because .  A useful fact is that the divisibility relation is what mathematicians call transitive : if and then . For example, if you know that then you can automatically conclude that , because .  Primes and composites  A natural number is called prime if it has exactly two divisors, itself and . A natural number is called composite if it has more than two divisors. Equivalently, is composite if it can be written as a product of two smaller numbers: where .  A few comments are in order. First, observe that is neither prime nor composite. This is intentional. One practical reason is that allowing to be prime means we'd have to awkwardly exclude it in important results about prime numbers; see and the discussion afterward. Lurking behind this is the fact that multiplying by doesn't change a number. If we allowed as a basic building block of forming numbers by multiplication we'd always be able to add more blocks. One way to think about this is, is the value you get before you start doing any multiplying; we want to think of as what you get by multiplying together many numbers. Thus it doesn't make sense to consider as a prime number.  Second, let's see why the two definitions of composite are equivalent. For one direction, think of a number like with more than two divisors. Since it has itself and and divisors, that means it has a divisor between and itself. But if, say, is a divisor of that means you can split into a product of two smaller numbers: . For the other direction, if you can write, for example, then that gives more divisors on top of and , so has more than two divisors.   List the first ten prime numbers.   A prime factorization of a number is a complete factorization of it down to primes. For example, is not a prime factorization, because is not prime. But is a prime factorization, since you can't factor any further. An important result is every number has a prime factorization.  The fundamental theorem of arithmetic  Every positive natural number has a unique prime factorization.  Note that this theorem says two things. First, it says that for any number there is some way to write a prime factorization of it. Second, it says that there is only one way to do so. To be more clear, you can write a prime factorization in different orders. For instance, Rearranging the order of the multiplication doesn't count as a different factorization; as we know, order doesn't matter for multiplication. Also, let me highlight the role of . If we had decided that counted as a prime number then we would have many different prime factorizations for any number: So we would've had to pharse the result like, every positive natural number has a unique prime factorization where we exclude s . Thus we see the practical utility in excluding from the prime numbers.  Second, you might wonder whether itself has a prime factorization. It does. Namely, is what you get when you multiply zero primes together. If this bothers you, feel free to imagine the fundamental theorem of algebra saying that every number has a prime factorization.  To close out this section, let me mention another fundamental result about prime numbers. This theorem dates back at least as far as the ancient Greek mathematician Euclid (circa 300 BCE).  The infinitude of primes  There are infinitely many prime numbers. Phrase differently, for any natural number there is a prime number .  A more recent result, from 1896, tells us more about where the prime numbers are. By Euclid, no matter how far out you go there's always more prime numbers. The prime number theorem says that they get more and more sparse; there's more prime numbers to be found but you will have to look further and further out. (The precise statement of the prime number theorem requires both logarithms and ideas from calculus, so let me leave you with this gloss.)  The fundamental theorem of arithmetic tells us that every number has a prime factorization. Euclid's theorem tells us that these factorizations aren't composed of just a few small prime numbers. In general, the prime factorization of a number can include primes at the same order of magnitude of the number itself. As such, you might not be surprised to hear that the problem of finding the prime factorization for a number is in general very hard. Indeed, it can be so hard that it is used as the basis of the RSA cryptosystem . Put crudely, if you've ever wondered how you can access your bank info over the internet without anyone stealing it, that is because it can be really hard to factor numbers.  Nonetheless, for some small numbers there are rules you can learn to determine divisibility. This is the topic we turn to in the next section.  "
},
{
  "id": "sec3-prime-3",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-3",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Divisibility.",
  "body": "Divisibility  Let and be natural numbers. We say that  divides  if is a multiple of , that is if for some natural number . Symbolically we write this as . This concept has many synonyms; you also hear is a divisor of , is a factor of , or is a multiple of . "
},
{
  "id": "sec3-prime-5",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transitive "
},
{
  "id": "sec3-prime-6",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-6",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Primes and composites.",
  "body": "Primes and composites  A natural number is called prime if it has exactly two divisors, itself and . A natural number is called composite if it has more than two divisors. Equivalently, is composite if it can be written as a product of two smaller numbers: where . "
},
{
  "id": "sec3-prime-9",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-9",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "",
  "body": " List the first ten prime numbers.  "
},
{
  "id": "sec3-prime-10",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime factorization "
},
{
  "id": "thm3-fta",
  "level": "2",
  "url": "sec3-prime.html#thm3-fta",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "The fundamental theorem of arithmetic.",
  "body": "The fundamental theorem of arithmetic  Every positive natural number has a unique prime factorization. "
},
{
  "id": "sec3-prime-15",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-15",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "The infinitude of primes.",
  "body": "The infinitude of primes  There are infinitely many prime numbers. Phrase differently, for any natural number there is a prime number . "
},
{
  "id": "sec3-prime-16",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime number theorem "
},
{
  "id": "sec3-prime-17",
  "level": "2",
  "url": "sec3-prime.html#sec3-prime-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "RSA cryptosystem "
},
{
  "id": "sec3-divisibility",
  "level": "1",
  "url": "sec3-divisibility.html",
  "type": "Section",
  "number": "3.2",
  "title": "Divisibility Rules",
  "body": " Divisibility Rules  In this section we learn rules for checking divisibility by a small number. Let's start with the easiest and, for that reason, the least useful.  Rule for divisibility by  A natural number is always divisible by .  Because .  Let's see a more useful rule.  Rule for divisibility by  A natural number is divisible by if the last digit of is .  Every other digit of represents times something, so the only way could fail to be a multiple of is if the units digit is nonzero.  Knowing the rule for divisibility by lets us also know rules for divisibility by and , because .  Rule for divisibility by  A natural number is divisible by if and only if its last digit is even: or .  The other digits of represent a number divisible by , and hence also divisible by . So all that remains is to check that the quantity represented by the units digit is divisible by . Those are the five even numbers which are one digit.  Rule for divisibility by  A natural number is divisible by if and only if its last digit is either or .  Same logic as the rule for . The only possible issue is the units digit, so check if the units digit is one of the two one-digit numbers divisible by .  Before we see the rule for , let's look at an example. Consider the number . You can break this apart as follows. When you expand out the multiplications, everything with a as a term is a multiple of . The remainder are , , and . So is a multiple of if and only if these remainders sum to a multiple of . But this is just looking at the sum of the digits.  Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of . (To check if the sum of the digits is a multiple of , repeat this process until you get to a small enough number you don't need to check.)  Do what we did with , except you have to write it abstractly to work for any number.  The same idea gives us a divisibility rule for . What we used in the breakdown for was s, and those will also give divisibility by .  Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of .  Same as with .  We can get a rule for by combining the rules for and . This is because and so checking divisibility by is the same as checking divisibility by both and .  Rule for divisibility by  A natural number is divisible by if and only if its last digit is even and the sum of its digits is a multiple of .  Explained above.  The rules for and are maybe a little less convenient, but they are the best we can do.  Rule for divisibility by  A natural number is divisible by if and only if its last two digits form a number divisible by .  The rest of the digits represent a quantity divisible by , and is a multiple of . So the only thing to check is that the last two digits are divisible by .  Rule for divisibility by  A natural number is divisible by if and only if its last three digits form a number divisible by .  Similar to the rule for . Namely, the rest of the digits represent a quantity divisible by , and . So the only thing to check is that the last three digits are divisible by .  There's too many two digit and three digit numbers to memorize which of them are divisible by and . But at least checking a two or three digit number is easier than many digit number.  Conspicuously missing from this list is a divisibility rule for . This is not because there is no rule for , but because any rule for is too complicated to be practically useful. You will discover this in an exercise for this chapter.  Putting these rules together, we have a method to get the prime factorization of a number , provided its only prime factors are small. Namely, run through the rules. If you determine is divisible by, say, , then divide it by . Keep going with this process until all the rules fail. At that point, you may have to manually check if you can divide by small primes like or , until you recognize that what's left cannot be factored any further.   Find the prime factorization of .   Immediately you can see that is divisible by . You might further notice that it's divisible by , because . Divide out by : This number is even so we can pull out another : We now see we cannot factor out any more s. Next we check divisibility by : , and repeating the summing the digits rule we get . This is a multiple of , so in fact we can pull out two copies of : We repeat the rule for with : . Thus we can pull out yet another : At this point, all that is left over is , which is small enough that we can recognize it as a prime. We can't go any further, so we have the final prime factorization.    Find the prime factorization of .   "
},
{
  "id": "sec3-divisibility-3",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-3",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(1\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is always divisible by .  Because . "
},
{
  "id": "sec3-divisibility-5",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-5",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(10\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if the last digit of is .  Every other digit of represents times something, so the only way could fail to be a multiple of is if the units digit is nonzero. "
},
{
  "id": "sec3-divisibility-7",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-7",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last digit is even: or .  The other digits of represent a number divisible by , and hence also divisible by . So all that remains is to check that the quantity represented by the units digit is divisible by . Those are the five even numbers which are one digit. "
},
{
  "id": "sec3-divisibility-8",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-8",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(5\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last digit is either or .  Same logic as the rule for . The only possible issue is the units digit, so check if the units digit is one of the two one-digit numbers divisible by . "
},
{
  "id": "sec3-divisibility-10",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-10",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(3\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of . (To check if the sum of the digits is a multiple of , repeat this process until you get to a small enough number you don't need to check.)  Do what we did with , except you have to write it abstractly to work for any number. "
},
{
  "id": "sec3-divisibility-12",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-12",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(9\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if the sum of its digits is a multiple of .  Same as with . "
},
{
  "id": "sec3-divisibility-14",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-14",
  "type": "Theorem",
  "number": "3.2.7",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(6\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last digit is even and the sum of its digits is a multiple of .  Explained above. "
},
{
  "id": "sec3-divisibility-16",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-16",
  "type": "Theorem",
  "number": "3.2.8",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(4\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last two digits form a number divisible by .  The rest of the digits represent a quantity divisible by , and is a multiple of . So the only thing to check is that the last two digits are divisible by . "
},
{
  "id": "sec3-divisibility-17",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-17",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "Rule for divisibility by <span class=\"process-math\">\\(8\\)<\/span>.",
  "body": "Rule for divisibility by  A natural number is divisible by if and only if its last three digits form a number divisible by .  Similar to the rule for . Namely, the rest of the digits represent a quantity divisible by , and . So the only thing to check is that the last three digits are divisible by . "
},
{
  "id": "sec3-divisibility-21",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-21",
  "type": "Checkpoint",
  "number": "3.2.10",
  "title": "",
  "body": " Find the prime factorization of .   Immediately you can see that is divisible by . You might further notice that it's divisible by , because . Divide out by : This number is even so we can pull out another : We now see we cannot factor out any more s. Next we check divisibility by : , and repeating the summing the digits rule we get . This is a multiple of , so in fact we can pull out two copies of : We repeat the rule for with : . Thus we can pull out yet another : At this point, all that is left over is , which is small enough that we can recognize it as a prime. We can't go any further, so we have the final prime factorization.  "
},
{
  "id": "sec3-divisibility-22",
  "level": "2",
  "url": "sec3-divisibility.html#sec3-divisibility-22",
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
  "body": " The geometric meaning of integers  In the last section we talked about how we build the integers from the natural numbers, namely throwing in additive inverses. Now we talk about a geometric interpretation of , which will give us a way to understand the meaning of addition and multiplication.  Think of as a line of dots, stretching infinitely far in both directions. One dot represents . Moving right from it you count up in the positive numbers and moving left from it you count down in the negative numbers . Call this picture the integer line .  In this picture, absolute value represents the number of steps to get to a number starting from . For example, and have the same absolute value—namely —because they are the same distance from .   The integer number line. Numbers, represented here as dots, march out infinitely in both directions. Infinitely many dots is a lot to draw, so arrows are placed on the line to encourage the viewer to imagine this finite image continuing on forever.    What this picture tells us is that positive versus negative is about direction. With the natural numbers, you could get bigger and bigger forever, but if you tried going the other way you'd eventually get stuck at . With the integers, we add in an opposite direction which you can also travel infinitely.  This direction also tells us how to define order for the integers.  Order on integers  For two integers and , we say if is to the left of on the number line. Put explicitly: Any negative number is less than any positive number.  If and are both then if and only if .  If and are both then if and only if .   As we did with natural numbers, we use , and .  The use of left for the negative direction and right for the positive direction is merely a convention. If your native language is, like English, written left-to-right this probably makes sense. Going forward means going to the right, going backward means going to the left. If your native language is written right-to-left, such as Arabic, then this might seem wrong, and you might ask if you could draw it differently. Everything would work just as well. What is important is that the negative direction and the positive direction are opposites.  This picture and the idea of positive versus negative as directions tells us the meaning of addition. Consider . Think of this as meaning you start at and you take steps to the right. (Right because that is the positive direction.) Then you would end at . Or consider . This means starting at and taking steps to the left (the negative direction). Counting them off you see .  In general, adding means taking steps, where you go to th eright if is positive and to the left if is negative. (Adding is taking no steps, which doesn't change your position.)  You can think about in terms of a single starting and ending point, but it's also useful to think about what addition does to the entire line. No matter your starting point, adding means taking steps to the left. This is the entire line stepping to the left.   Two integer number lines one placed above the other. Dashed arrows in between illustrate the movement of all numbers steps to the left. This is what adding does to the number line.    Adding, for instance, is the entire line stepping to the right.   Two integer number lines one placed above the other. Dashed arrows in between illustrate the movement of all numbers steps to the right. This is what adding does to the number line.    Mathematicians liking to have too many names for things, we call these translations or shifts . In summary, the geometric meaning is translation. Adding by shifts the entire number line units, with the sign of telling which direction—left for negative, right for positive.  Now let's think about multiplication. Consider . This takes the starting position at and moves it times as far away from , namely to . Or consider . Like before, this moves the starting position times as far away from , ending at . Before this movement, our two starting points were only steps apart, but at the end they were steps apart. Multiplying stretched the number line so the points become farther apart.  In general, multiplying by a positive number stretches out the number line. If you multiply by the positive number you stretch the line so points are times farther apart. More formally, we call this a scaling .   Two integer number lines one placed above the other. Dashed arrows in between illustrate a scaling by a factor of , corresponding to multiplication by . All numbers are moved to be twice as far away from .    How should we understand multiplication by a negative number? Let's focus on the simplest case, namely multiplication by . Multiplying by should be the same as putting a minus sign in front of the number; more formally, multiplying by should give you the additive inverse of . What this amounts to is changing which side of the number line you are on. For example, , so it gets moved from the right side to the left, while , so it gets moved from the left side to the right.  Altogether, what multiplication by does is flip the number line, swapping the left and right sides. More formally, we call this a reflection . You should think of this as swapping the two directions.   Two integer number lines one placed above the other. Dashed arrows in between illustrate a reflection, corresponding to multiplication by . All numbers are flipped to be on the other side of . For legibility half of the dashed lines are not shown.    Here's an algebraic way to convince yourself that multiplying by should give the additive inverse. Consider the formula . On the one hand, and so the product will be . On the other hand, the distributivity property lets us rewrite this as . Putting those together we get , whence we get that is the thing you add to to get —in other words, its additive inverse.  Consider now mulitplication by, say, . Think of this multiplication as a two-step process: . Geometrically, we reflect the number line and then scale by a factor of . Or we could scale first and then reflect; the order doesn't matter.   Three integer number lines one placed above each other in order. Dashed arrows in between the top and middle lines illustrate multiplication by , a scaling so all points are twice as far from the center. Dashed arrows in between the middle and bottom lines illustrate a reflection, corresponding to multiplication by .    Multiplication by is a special case. Anything multiplied by becomes , so multiplying by collapses the entire number line down to a point. This usually isn't interesting or useful.   An illustration of the entire number being sent to the point at .    To sum up this section, addition corresponds to translation , where the magnitude tells you how far to translate and the sign tells you what direction. Multiplication corresponds to scaling and reflection , where the magnitude tells you how much to scale by and the sign tells you whether to reflect.  "
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
  "id": "sec4-geometry-8",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-8",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Order <span class=\"process-math\">\\(\\lt\\)<\/span> on integers.",
  "body": "Order on integers  For two integers and , we say if is to the left of on the number line. Put explicitly: Any negative number is less than any positive number.  If and are both then if and only if .  If and are both then if and only if .   As we did with natural numbers, we use , and . "
},
{
  "id": "sec4-geometry-16",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "translations shifts "
},
{
  "id": "sec4-geometry-18",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scaling "
},
{
  "id": "sec4-geometry-21",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection "
},
{
  "id": "sec4-geometry-28",
  "level": "2",
  "url": "sec4-geometry.html#sec4-geometry-28",
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
  "body": " Arithmetic of fractions  In this section we talk about how to perform arithmetic with fractions. As part of this, we will see the important fact that if you add, subtract, multiply, or divide two rational numbers then you get another rational number. This tells us that if we want to solve equations with rational numbers then we don't need to introduce yet more new numbers.  We will first talk about how to multiply and divide fractions. Adding and subtracting will come later, as those are in fact more difficult.  Algorithm for fraction multiplication  Consider two fractions and . Then their product is That is, to multiply fractions you multiply their numerators to get the product's numerator and you multiply their denominators to get the product's denominator.  Here's a way to think about this definition. When you multiply, you multiply the numerators, but why do you also multiply the denominators? Fractions, as a key point of this chapter that has been repeatedly emphasized, are a way to denote that division is happening. What you're asking is, if you divide twice what is the total amount by which you are dividing? The answer is, your total division is by the product of the two.  Because exponentiation is repeated multiplication, this definition also tells you how to compute exponents of fractions. Namely, The idea is, you multiply by itself many times. So that multiplication becomes multiplying by itself in the numerator and by itself in the denominator.  Next we discuss division. To understand it, let's first understand what it has to do with multiplicative inverses. Consider for example the division . This is equivalent to the multiplication . In general, division is the same as multiplication by the inverse.  Reciprocal of a fraction  The reciprocal or multiplicative inverse of a fraction is the fraction . That is, to take the reciprocal of a fraction swap the numerator and denominator.  You can check that is the multiplicative inverse of by multiplying them:   Algorithm for fraction division  Consider two fractions and . Then their quotient is That is, to divide fractions you multiply by the reciprocal, using the rule for how to multiply fractions.  Writing division of fractions can be annoying, since it involves fractions inside fractions! Good practice is to write the outer fraction in form and the inner fractions in form. If you write them both the same way it can be hard to tell the order. For example, which division happens first in    To calculate we turn it into a multiplication, namely the multiplication of the numerator by the reciprocal of the denominator:    Let's now turn to addition (and its sister subtraction). When the denominators are the same, the distributivity rule tells us what to do. Consider the following example. In general, if two fractions have the same denominator then their sum is obtained by adding their numerators and keeping the denominator. (And the rule for subtraction is similar.)    Write the rule for subtracting fractions with the same denominator.   But you shouldn't expect to only add fractions which already have the same denominator. In this case, you have to rewrite the fractions to get a common denominator. Note that if you have any fraction multiplying the top and bottom by the same value gives an equal fraction. For example, . If we want to rewrite two fractions to have the same denominator we can do this process for each.  Rewriting fractions to have a common denominator  Suppose you have two fractions and . Here are a few different ways you can rewrite them to have a common denominator. If one denominator is a multiple of the other, say , then is a common denominator. In this case, keep the same and multiply the other fraction by .   The smallest common denominator is always the least common multiple of the denominators, which you can find by the methods of . You then have to determine which you multiply each denomniator by the get this least common multiple. Give these names: and . These are what you multiply the fractions by.   If you don't want to find the least common multiple you can always take the product of the two denominators as a common denominator.    The different methods have different advantages. The first requires the least work but it doesn't always apply. The second gives you as small a common denominator as possible, but it might be a bit of work to find the least common multiple. The last method avoids that work but has the downside that your common denominator may be much larger than necessary.  Also useful is the opposite direction, namely simplifying a fraction by canceling out common terms from the numerator and denominator. After performing an addition you may have a fraction that can be written more simply, and it's good to know how to do that.  Reduced form of a fraction  A fraction is in reduced form if there are no common factors of the numerator and denominator, that is if . If a fraction is not already in reduced form, you can turn it into reduced form by dividing this GCD out from both parts: Note that in this second fraction both parts are whole numbers.   With these in hand, we can now see how to add\/subtract any two fractions.  Algorithm for fraction addition and subtraction  Consider two fractions and . To add (or subtract) them, first rewrite them to have a common denominator. Then add (or subtract) the two fractions with a common denominator. If you like, then simplify your result to reduced form.  Having a common denominator also lets us compare fractions. First however, let's observe that you can always rewrite a fraction to have a positive denominator.  Rewriting a fraction to have a positive denominator  Consider a fraction . If is already positive, there's nothing to be done.  If both and are negative, then the negatives cancel out. For example, .  If is positive but is negative, then you can move the negative to the numerator. For example, .  If two fractions have a positive denominator, then to compare them you simply compare their numerators. The larger numerator gives the larger fraction. If the fractions don't have a common denominator, rewrite them to have a common denominator and then compare.  Algorithm for comparing fractions  Consider two fractions and . Here's how you determine which one is larger. First ensure both denominators are positive.  Then rewrite the fractions, if necessary, to have the same denominator.  Once you have a common denominator, compare the fractions by comparing the numerator. The one with the larger numerator is the larger fraction, and if the numerators are equal the fractions are equal.  Note that this algorithm also gives you a way to check whether two fractions, probably written in different bases, are equal. First you rewrite them to have a common denominator, then they are equal if and only if the numerators are equal.  Now that we have an idea of how to compare fractions, let's think about what the number line of rational numbers looks like. Remember that the number line for integers consisted of equally spaced dots marching off to infinity in both directions.   The integer number line. Numbers, represented here as dots, march out infinitely in both directions. Infinitely many dots is a lot to draw, so arrows are placed on the line to encourage the viewer to imagine this finite image continuing on forever.    With the rational numbers we are putting in more dots in the gaps. For instance, between any two adjacent integers and there are infinitely many rational numbers, such as In general, between any two dots on the rational number line you can find another dot. If and are two rational numbers then their average sits between them. Since you can repeat this process indefinitely, taking more and more averages to get more and more intermediate points, this means between and are infinitely many dots. Thus, the rational number line looks like an infinitely dense line of dots.   The rational number line. The dots representing numbers are now infinitely dense rather than being spaced out. Visually this is represented as a line but drawn thicker. Only some of the numbers are labeled because there are too many to fit.    Let's close out this section by mentioning an important algebraic fact about the rational numbers. With integers, adding, subtracting, or multiplying always gave you another integer, but division might take you outside the integers. This doesn't happen with rational numbers.  Closure of the rational numbers under arithmetic operations  The rational numbers are closed under addition, subtraction, multiplication, and division. That is, if you take two rational numbers then their sum, difference, product, and quotient can all be written as a single fraction of integers. (Of course we exclude the case of division by zero.)  We will expand out number system again in the next chapter, but the reason for this expansion cannot be the basic arithmetic operations. It must be for something new.  "
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
  "id": "sec5-arithmetic-32",
  "level": "2",
  "url": "sec5-arithmetic.html#sec5-arithmetic-32",
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
  "id": "sec7-shapes",
  "level": "1",
  "url": "sec7-shapes.html",
  "type": "Section",
  "number": "7.1",
  "title": "Shapes on a plane",
  "body": " Shapes on a plane  Arithmetic, as we studied in , has numbers as its primary object of interest. Geometry, which we now begin studying, has shapes as its central focus.  To give a definition, a shape is a region of two-dimensional space enclosed by a boundary . The boundary consists of one or more edges —curved or straight lines—with edges meeting at vertices .   You might ask, why two dimensional? Is the number two special? Later we will talk about what shapes mean in other dimensions.    There are many shapes, and some of them are given names. Let's catalogue some common shapes.  The circle is a shape with a single curved edge. Every point on this edge is the same distance from the center of the circle. This distance is called the radius of the circle. You can specify a circle by giving its center and radius; from that information you can uniquely draw it. Doing so produces a very symmetric object.  If two circles have the same center we call them concentric .   Three circles. Two are concentric, meaning they have the same center, while the other has a different center. All three radii are different.    Note that the boundary of a circle is a one dimensional object. If you live on the boundary and can't leave, you only have one dimension of movement available—clockwise or counterclockwise. On the other hand, the interior of a circle is two dimensional. If you're inside the circle you have two independent direction of movement available. This is a general pattern. The boundary of a shape is one dimension smaller.  Another shape with a single curved edge the ellipse . This shape can be thought of as what you get by starting with a circle and stretching it outward from opposite points. If you prefer a stuffy definition, the edge of an ellipse consists of points whose distance to two focus points sum to the same number. In common language, one hears the word oval (literally: egg-shaped). This is not a mathematically precise term. Indeed, it refers also to shapes that aren't symmetrical enough to be ellipses, such as the shape of an egg.   Two ellipses. One has its major axis, the longest distance from edge to edge, vertical while the others is horizontal. Their minor axes, the shortest distance from edge to edge, are respcetively horizontal and vertical. Note that the shapes are symmetric across both minor and major axes. Contrast to a lopsided egg which only has one axis of symmetry.  A circle is also included, as a special case of an ellipse.    Other interesting shapes have all edges being straight lines. We call shapes will all edges straight polygons . A triangle is any shape with exactly three straight edges. Between these three edges sit three angles , hence the name. If you draw dots and three different points in two-dimensional space, as long as those three dots aren't all on the same straight line, if you connect the dots you will draw a triangle. To say that briefly, colinear means the points are on the same line, so any three non-colinear points form a triangle.   Three triangles. One has its edges drawn in as dashed lines between dots for its corners, to make you think of it as formed from taking three non-colinear points and drawing edges between them.    A square is a shape with four straight edges whose edges all have the same length and whose angles all have the same measure. If you only require all angles to be the same the shape is called a rectangle .   Two squares. One has horizontal and vertical sides. The other is oriented diagonally to guard against the mistaken idea that the sides of a square must be verical\/horizontal. Also two rectangles of different dimensions. One rectangle is wider than it is tall and the other is taller than it is wide. Both rectangles happen to be aligned with the vertical\/horizontal axes, but the square example is enough to tell you that they needn't be, correct?    This is a good place to detour to a question. In many distiplines you want to categorize objects—numbers or shapes in mathematics, chemical substances in chemistry, organisms in biology, and so on. Do you want your categories to overlap? Or should each object belong to only one category? In this case, are squares and rectangles disjoint classes of objects, or can a shape be both? After all, a rectangle is a four-sided shape whose angles are all the same, and that applies to squares.  In ordinary speech, the answer might be yes, these are different shapes. If a shape were a square you'd simply call it a square, so if you call something a rectangle that implies it's not a square. Mathematically, however, it is convenient to have the answer be that all squares are rectangles. In general in mathematics, when categorizing things we like our categories to overlap. Thus, a fact about rectangles is for free a fact about squares. For instance, rather than have to memorize different formulas for the areas of squares versus rectangles you can just remember the formula for rectangles.  For another example of this, every circle is also an ellipse. (But not vice versa.) You can think of this in a couple ways. First, if an ellipse is a stretched circle then a circle is the ellipse you get by doing the do nothing stretch. If you prefer the focus point definition, a circle is an ellipse whose focus points are the same point.  To close this section let's clear up an ambiguity. Is a shape its interior , the area enclosed, or its boundary ? The answer is, kinda both. You can be more careful and make this distinction; for instance, in advanced fields of mathematics such as topology it's important to distinguish the interior of a shape from its boundary. In that context mathematicians will distinguish the circle (the boundary) from the disk (the boundary and the interior together). But in ordinary use people aren't so precise. We will also not be so precise.  "
},
{
  "id": "sec7-shapes-2",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "numbers shapes "
},
{
  "id": "sec7-shapes-3",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shape boundary edges vertices "
},
{
  "id": "sec7-shapes-6",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circle center radius "
},
{
  "id": "sec7-shapes-7",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "concentric "
},
{
  "id": "sec7-shapes-10",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ellipse focus points oval "
},
{
  "id": "sec7-shapes-12",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polygons triangle angles colinear "
},
{
  "id": "sec7-shapes-14",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square rectangle "
},
{
  "id": "sec7-shapes-19",
  "level": "2",
  "url": "sec7-shapes.html#sec7-shapes-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interior boundary topology "
},
{
  "id": "sec7-triangles",
  "level": "1",
  "url": "sec7-triangles.html",
  "type": "Section",
  "number": "7.2",
  "title": "Triangles and quadrilaterals",
  "body": " Triangles and quadrilaterals  Having seen some shapes let's now do a deeper dive into two important kinds of shapes, triangles —those shapes with three straight sides—and quadrilaterals —those with four straight sides.  Let's begin with triangles. One way we can classify triangles is by their largest angle.  An angle is a measure of rotational distance. The angle between two lines is the amount you need to rotate one to overlap the other. We will talk in more detail in about angles, but for now we just need a coarse classification. To start, we only look at angles smaller than a half turn of the circle. Note that if two non-parallel lines meet at a point the shortest angular distance from one to the other is less than a half turn of the circle.  Acute, right, and obtuse angles  A right angle is one formed by two perpendicular lines, like adjacent sides of a rectangle. That is, a right angle is equal to one quarter turn of a circle. An acute angle is one which is smaller than a right angle. An obtuse angle is one which is larger than a right angle but smaller than a half turn of a circle.   Three angles formed by pairs of lines meeting. One is right, one is acute, one is obtuse. For the acute and obtuse angles an arc is drawn across the angle to show its position. For the right angle a box is used instead. The box is an indication that this really is a right angle and not something that's merely close to right.    When drawing angles, circular arcs are used to show the corresponding turn of a circle. The exception is with right angles, where a small rectangular box is draw instead. The reason for this convention is to make it clear that the angle is exactly right, and not an obtuse or acute angle that happens to be close to right.    An important fact about triangles in the plane is that their angles always add up to a half turn of a circle. This implies that at most one of the angles can be right or obtuse, and the other two angles are always acute.  Acute, right, and obtuse triangles  A triangle is called an acute triangle , right triangle , or obtuse triangle if its largest angle is, respectively, acute, right, or obtuse.   A right, acute, and obtuse triangle. For the right and obtuse triangles the largest angle is marked. The acute triangle has all three angles the same.      Angles and sides of a triangle  Label the three sides of a triangle from largest to smallest as , so that . Then the angles opposite those sides have the same order. That is, if we call the opposite angles then , where equality holds for two angles if and only if it holds for the corresponding sides.   A right triangle. Its hypotenuse is labeled and its two legs are labeled and . The right angle is labeled and the two acute angles are labeled and , each opposite the correspondingly labeled side.    Let's make explicit a few features of this fact. The largest angle is opposite the largest side. Thus, if a triangle is right or obtuse its largest side is the one opposite the right\/obtuse angle. For a right triangle this side has a special name. We call it the hypotenuse .  The smallest angle is opposite the smallest side.  If two angles are the same then the opposite sides are the same length, and vice versa.     A consequence of this fact is that if you want to classify triangles by how many sides are equal, it's equivalent to asking how many angles are equal.  Equilateral, isosceles, and scalene triangles  An equilateral triangle is one whose sides are all the same size. An isosceles triangle is one with two sides the same size, and the other different. A scalene triangle is one where all sides are different sizes.    Explain why an equilateral triangle must be acute but an isosceles triangle and scalene triangle can be right or obtuse. Draw pictures to give examples of isosceles\/scalene right\/obtuse triangles.   Next let's talk about different kinds of quadrilaterals. We have already seen rectangles and squares. Those were the quadrilaterals with all angles the same and with all angles the same and all sides the same. Note that this is unlike triangles; for triangles all angles being the same was enough to imply all sides are the same. Whereas with four sides you now have to separate the two notions.  Indeed, with quadrilaterals all sides having the same length doesn't imply the angles are the same. Picture a square whose sides are rigid but loosely attached at the corners. So you can gently push it to create a diamond shape. We call these quadrilaterals with all sides the same rhobmuses .   A couple rhombuses. One is oriented so it has a pair of horizontal sides, the other is oriented in a diagonal diamond-like shape.     True or false: if a shape is both a rhombus and a rectangle, then it is a square. Explain.   Opposite sides of rhombuses are always parallel. Just like you can imagine forming a rectangle from a square by stretching two opposite sides, you can do the same with a rhombus. The shape you produce is a parallelogram , a quadrilateral whose opposite sides are parallel. Observe that opposite sides of a parallelogram are equal in length.   A couple parallelograms. One is oriented so it has a pair of horizontal sides, the other is oriented so it has a pair of vertical sides.    If just one pair of opposite sides are parallel we call the quadrilateral a trapezoid .   Three trapezoids. Following an earlier theme, they vary in orientation. By now you should have internalized that things don't have to be nicely aligned in an -grid. One trapezoid has its middle side attached at right angles to the parallel sides. One has diagonal sides of the same slope. One has diagonal sides of different slope. They are all trapezoids and they are all beautiful.     Is a rectangle a trapezoid? Make a case for your anwer.   "
},
{
  "id": "sec7-triangles-2",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triangles quadrilaterals "
},
{
  "id": "sec7-triangles-4",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angle "
},
{
  "id": "sec7-triangles-5",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-5",
  "type": "Definition",
  "number": "7.2.1",
  "title": "Acute, right, and obtuse angles.",
  "body": "Acute, right, and obtuse angles  A right angle is one formed by two perpendicular lines, like adjacent sides of a rectangle. That is, a right angle is equal to one quarter turn of a circle. An acute angle is one which is smaller than a right angle. An obtuse angle is one which is larger than a right angle but smaller than a half turn of a circle.   Three angles formed by pairs of lines meeting. One is right, one is acute, one is obtuse. For the acute and obtuse angles an arc is drawn across the angle to show its position. For the right angle a box is used instead. The box is an indication that this really is a right angle and not something that's merely close to right.    When drawing angles, circular arcs are used to show the corresponding turn of a circle. The exception is with right angles, where a small rectangular box is draw instead. The reason for this convention is to make it clear that the angle is exactly right, and not an obtuse or acute angle that happens to be close to right.   "
},
{
  "id": "sec7-triangles-7",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-7",
  "type": "Definition",
  "number": "7.2.2",
  "title": "Acute, right, and obtuse triangles.",
  "body": "Acute, right, and obtuse triangles  A triangle is called an acute triangle , right triangle , or obtuse triangle if its largest angle is, respectively, acute, right, or obtuse.   A right, acute, and obtuse triangle. For the right and obtuse triangles the largest angle is marked. The acute triangle has all three angles the same.     "
},
{
  "id": "sec7-triangles-8",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-8",
  "type": "Theorem",
  "number": "7.2.3",
  "title": "Angles and sides of a triangle.",
  "body": "Angles and sides of a triangle  Label the three sides of a triangle from largest to smallest as , so that . Then the angles opposite those sides have the same order. That is, if we call the opposite angles then , where equality holds for two angles if and only if it holds for the corresponding sides.   A right triangle. Its hypotenuse is labeled and its two legs are labeled and . The right angle is labeled and the two acute angles are labeled and , each opposite the correspondingly labeled side.    Let's make explicit a few features of this fact. The largest angle is opposite the largest side. Thus, if a triangle is right or obtuse its largest side is the one opposite the right\/obtuse angle. For a right triangle this side has a special name. We call it the hypotenuse .  The smallest angle is opposite the smallest side.  If two angles are the same then the opposite sides are the same length, and vice versa.    "
},
{
  "id": "sec7-triangles-10",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-10",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Equilateral, isosceles, and scalene triangles.",
  "body": "Equilateral, isosceles, and scalene triangles  An equilateral triangle is one whose sides are all the same size. An isosceles triangle is one with two sides the same size, and the other different. A scalene triangle is one where all sides are different sizes.  "
},
{
  "id": "sec7-triangles-11",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-11",
  "type": "Checkpoint",
  "number": "7.2.5",
  "title": "",
  "body": " Explain why an equilateral triangle must be acute but an isosceles triangle and scalene triangle can be right or obtuse. Draw pictures to give examples of isosceles\/scalene right\/obtuse triangles.  "
},
{
  "id": "sec7-triangles-13",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rhobmuses "
},
{
  "id": "sec7-triangles-15",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-15",
  "type": "Checkpoint",
  "number": "7.2.6",
  "title": "",
  "body": " True or false: if a shape is both a rhombus and a rectangle, then it is a square. Explain.  "
},
{
  "id": "sec7-triangles-16",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelogram "
},
{
  "id": "sec7-triangles-18",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trapezoid "
},
{
  "id": "sec7-triangles-20",
  "level": "2",
  "url": "sec7-triangles.html#sec7-triangles-20",
  "type": "Checkpoint",
  "number": "7.2.7",
  "title": "",
  "body": " Is a rectangle a trapezoid? Make a case for your anwer.  "
},
{
  "id": "sec7-polygons",
  "level": "1",
  "url": "sec7-polygons.html",
  "type": "Section",
  "number": "7.3",
  "title": "Polygons",
  "body": " Polygons  A shape whose sides are all straight is called a polygon . Polygons with three sides are triangles, which we've already talked about. Those with four sides are also called quadrilaterals , and include squares, rectangles, rhombuses, parallelograms, and trapezoids. As we increase the number of sides we use Greek prefixes. Pentagons have five sides.  Hexagons have six sides.  Heptagons have seven sides.  Octagons have eight sides.  And so on. If you talk about a heptakaidecagon no one will know what you mean. After about six to eight sides it's better to just say -gon to refer to a polygon with sides. In this case, -gon is more likely to get the point across to another human.   Five regular polygons. In a two by two grid are a pentagon, hexagon, heptagon, and octagon. Off to the side is a heptakaidecagon. Observe that due to its large number of sides it is close to circular.    Polygons are particularly nice shapes, and we can say a lot about them. Let's begin by talking about angles, in more detail than before.  Angles and degrees  An angle is a measure of rotation. More precisely, if two line segments and meet at a vertex the angle between them is a measure of how far you'd have to rotate to overlap with .  A common unit of measurement for angles is degrees , which divide up a full circle of rotation into degrees. We write for the angle of degrees. Thus, is the measure of a straight line (half turn of a circle) and is the measure of a right angle , a quarter turn of a circle, like the angles of a square.  Given an angle smaller than , its supplementary angle is the angle you add to it to get . That is, two supplementary angles put next to each other will travel a half circle. Given an angle smaller than its complementary angle is the angle you add to it to get . That is, two complementary angles form a right angle when put together.   A pair of supplementary angles which add up to . The angle on the left is obtuse while the one on the right is acute. Also a pair of complementary angles which add up to . Both of these angles necessarily are acute to fit inside a right angle.       What is the supplementary angle for a right angle? What angle is its own complementary angle?   Interior and exterior angles  In a polygon an interior angle is the angular measure on the inside of the shape from one side to the next. A polygon is convex if all of its interior angles are . For a convex polygon, the corresponding exterior angle to an interior angle is its supplemantary angle. You can think, if you are traveling along the outside of a polygon in one direction the exterior angle is how far you have to turn at the corner to continue along the next side.   A regular hexagon with an interior angle and exterior angle marked. Although they are drawn at different vertices for visual clarity, because all angles of the hexagon are the same you can see that they are supplementary angles.      Here's another way to think about convexity. A shape is convex if and only if whenever you take two points in its interior the line between them is entirely inside the interior. This way of thinking about convexity also applies to shapes with curves.   Two quadrilaterals. One is kite-shaped and convex. The other is arrowhead-shaped and not convex. You can tell it's not convex because if you take two points in the tails at the back end of the arrowhead the line between them will pass outside the shape into the notch.    Interior angles of a polygon  The interior angles of a triangle sum to . The interior angles of a quadrilateral sum to . In general, the interior angles of an -gon sum to .  The fact for triangles requires a geometric construction, which I omit. To get from that to the general fact, note that you can divide a polygon into triangles by drawing lines to connect non-adjacent vertices. In this way you can divide a polygon with sides into triangles. The angles of these triangles together compose the interior angles of the polygon, so add them all up to get the sum of the interior angles to be .   Exterior angles of a polygon  The exterior angles of a convex polygon sum to .  If you start at a point on the boundary of a convex polygon and travel all the way around, you will have turned a full circle to get back to the direction you started. Since you only turn at corners (exterior angles), this means the exterior angles sum to a full circle, namely .   There's a lot of variation in polygons. Especially pleasing are those with lots of symmetry.  Regular polygons  A regular polygon is one whose sides are all the same length and whose angles are all the same length.   Most the pictures in this section have been of regular polygons.   You know other names for a regular triangle and a regular quadrilateral. What are they? Explain.    Draw a regular hexagon and two non-regular hexagons. Make one of the non-regular hexagons convex and the other non-convex.    Must a regular polygon be convex? Explain.    "
},
{
  "id": "sec7-polygons-2",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polygon quadrilaterals -gon "
},
{
  "id": "sec7-polygons-5",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-5",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Angles and degrees.",
  "body": "Angles and degrees  An angle is a measure of rotation. More precisely, if two line segments and meet at a vertex the angle between them is a measure of how far you'd have to rotate to overlap with .  A common unit of measurement for angles is degrees , which divide up a full circle of rotation into degrees. We write for the angle of degrees. Thus, is the measure of a straight line (half turn of a circle) and is the measure of a right angle , a quarter turn of a circle, like the angles of a square.  Given an angle smaller than , its supplementary angle is the angle you add to it to get . That is, two supplementary angles put next to each other will travel a half circle. Given an angle smaller than its complementary angle is the angle you add to it to get . That is, two complementary angles form a right angle when put together.   A pair of supplementary angles which add up to . The angle on the left is obtuse while the one on the right is acute. Also a pair of complementary angles which add up to . Both of these angles necessarily are acute to fit inside a right angle.     "
},
{
  "id": "sec7-polygons-6",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-6",
  "type": "Checkpoint",
  "number": "7.3.2",
  "title": "",
  "body": " What is the supplementary angle for a right angle? What angle is its own complementary angle?  "
},
{
  "id": "sec7-polygons-7",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-7",
  "type": "Definition",
  "number": "7.3.3",
  "title": "Interior and exterior angles.",
  "body": "Interior and exterior angles  In a polygon an interior angle is the angular measure on the inside of the shape from one side to the next. A polygon is convex if all of its interior angles are . For a convex polygon, the corresponding exterior angle to an interior angle is its supplemantary angle. You can think, if you are traveling along the outside of a polygon in one direction the exterior angle is how far you have to turn at the corner to continue along the next side.   A regular hexagon with an interior angle and exterior angle marked. Although they are drawn at different vertices for visual clarity, because all angles of the hexagon are the same you can see that they are supplementary angles.     "
},
{
  "id": "sec7-polygons-10",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-10",
  "type": "Theorem",
  "number": "7.3.4",
  "title": "Interior angles of a polygon.",
  "body": "Interior angles of a polygon  The interior angles of a triangle sum to . The interior angles of a quadrilateral sum to . In general, the interior angles of an -gon sum to .  The fact for triangles requires a geometric construction, which I omit. To get from that to the general fact, note that you can divide a polygon into triangles by drawing lines to connect non-adjacent vertices. In this way you can divide a polygon with sides into triangles. The angles of these triangles together compose the interior angles of the polygon, so add them all up to get the sum of the interior angles to be .  "
},
{
  "id": "sec7-polygons-11",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-11",
  "type": "Theorem",
  "number": "7.3.5",
  "title": "Exterior angles of a polygon.",
  "body": "Exterior angles of a polygon  The exterior angles of a convex polygon sum to .  If you start at a point on the boundary of a convex polygon and travel all the way around, you will have turned a full circle to get back to the direction you started. Since you only turn at corners (exterior angles), this means the exterior angles sum to a full circle, namely .  "
},
{
  "id": "sec7-polygons-13",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-13",
  "type": "Definition",
  "number": "7.3.6",
  "title": "Regular polygons.",
  "body": "Regular polygons  A regular polygon is one whose sides are all the same length and whose angles are all the same length.  "
},
{
  "id": "sec7-polygons-15",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-15",
  "type": "Checkpoint",
  "number": "7.3.7",
  "title": "",
  "body": " You know other names for a regular triangle and a regular quadrilateral. What are they? Explain.  "
},
{
  "id": "sec7-polygons-16",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-16",
  "type": "Checkpoint",
  "number": "7.3.8",
  "title": "",
  "body": " Draw a regular hexagon and two non-regular hexagons. Make one of the non-regular hexagons convex and the other non-convex.  "
},
{
  "id": "sec7-polygons-17",
  "level": "2",
  "url": "sec7-polygons.html#sec7-polygons-17",
  "type": "Checkpoint",
  "number": "7.3.9",
  "title": "",
  "body": " Must a regular polygon be convex? Explain.  "
},
{
  "id": "sec7-solids",
  "level": "1",
  "url": "sec7-solids.html",
  "type": "Section",
  "number": "7.4",
  "title": "Solids and three-dimensional space",
  "body": " Solids and three-dimensional space  In this section we make a move many a flagging movie series has resorted to in desperation: we go to space. Specifically, we stop talking about shapes in the two-dimensional plane and start talking about shapes in three-dimensional space. We call them solids .  An example of a solid is a sphere . This is the same idea as a circle, but one dimension up. Remember that a circle's boundary consists of all the points in the plane with the same distance from its center. Similarly, a sphere's boundary consists of all the points in space the same distance from its center. As with circles, we call this distance the radius .   A sphere. More honestly, we are looking at a two-dimensional representation and not really a three dimensional object. It looks like a circle, except some shading was done to give the illusion of three dimensionality.    Imagine living on the surface of a sphere, for example as many humans on earth do. Locally, the surface looks like a plane. You can move independently in two different directions. The surface eventually curves around, but on the local level it looks flat.  This is a general fact about solids. Their boundaries are two-dimensional surfaces , one dimension lower than their interior. Compare to how shapes in the plane have a two-dimensional interior and a one-dimensional boundary.  Another example of a solid is a cube . This is like like a square but in three dimensions. The surface of a cube consists of multiple polygonal faces , namely six squares of equal side length positioned at right angles to each other. Two squares meet at an edge and the vertices are the corners where edges meet. In this case, three edges with the three faces between them meet at a vertex.   A cube. More accurately, a two dimensional representation of a cube. It takes the form of four parallelograms joined at a common vertex. One represents the top of the cube and the other two represent two of the the vertical sides of the cube. The remaining two vertical sides and the bottom side are not visible, as they are blocked by the three sides we can see. The sides are colored different shades of gray to suggest a light source and help sell the illusion that this is a three dimensional object.     You already know a cube has six faces. Count how many edges and vertices it has.  Twelve edges and eight vertices.   Those are the two most important solids. Before we look at more let's mention an important bifurcation of solids. A polyhedron (plural polyhedra) is a solid whose faces are all polygons. That is, a polyhedron consists only of flat faces with straight edges between them. They are the higher dimensional analogue of polygons. A cube is an example of a polyhedron. On the other hand, a sphere is not a polyhedron.  Both spheres and cubes, however, are convex . The easiest way to say this in three dimensions is, if you take two points in their interior and draw a line between them the line is entirely in the interior. It doesn't pass outside. Consider on the other hand a bean-shaped solid whose curve leaves an indent through which such a line could pass. This solid would not be convex.  Some solids you can think of as being like three dimensional versions of two dimensional shapes you know and love. For example, in two dimensions a rectangle is like a square but you don't require all sides to be the same length. You can similarly relax the definition of a cube. A cuboid is a solid whose faces are rectangles that all meet at right angles. It's like a cube but you can stretch out the faces. Note that opposite faces must be same-sized rectangles. Like a rectangle is composed of two pairs of equal sides, a cuboid is composed of three pairs of equal faces.  Cuboids go by other names. You may also see them called rectangular cuboids , rectangular prisms , or rectangular parallelepipeds . In this book we go by cuboid for reason that it is the shortest name.   A cuboid. Continuing a theme, I will elaborate that actually this is a two dimensional representation of a cuboid. It looks much like the earlier cube, except the three dimensions aren't all the same length. Again, the sides are shaded to help sell the illusion of a three dimensional object.    Another way to think about a cuboid is you start with a horizontal rectangle as a base. You grab the base and raise it upward, thickening it to have a height. A way to think of this is, imagine having many copies of the rectangle cut in paper and you stack them to have a three dimensional shape. If the paper copies are infinitely thin and you stack them perfectly to have straight vertical sides, that is a cuboid.  This same idea can be applied to any two dimensional shape to produce a three dimensional solid. Such solids are variously called prisms —think like a prism used to separate white light into its constituent colors—or cylinders . However, we will reserve the word cylinder to refer just to these solids formed with a circle as base.  A cylinder is a solid formed by taking a circle and thickening it in a perpendicular direction to create a three dimensional shape.   Two (two dimensional representations of) cylinders. One is oriented vertically, as when we think of the circular sides as being the top and bottom of the shape. The second is diagonal, so as to warn against the mistake of thinking orientation matters. They are both cylinders no matter their orientation.  Neither cylinder is shaded. Perhaps by now we are confident in using our imaginations to see them in three dimensions without artistic aid. Or perhaps the author's artistic skills have surpassed their limits.    We can tweak this idea for building solids. Again we start with a two dimensional shape as the base, and we want to thicken it into the third dimension to create a solid. But now instead of keeping the same shape as we go up we will gradually shrink it down to a point. That is, instead of vertical sides rising to a top side identical to the bottom, diagonal sides rise to a point at the top. Often the point is in the middle so that things are symmetric, but that isn't necessary. A shape like this formed from a circular base is called a cone . A shape like this formed from a polygonal base is called a pyramid .   A cone, inverted so its point is at the bottom. To reiterate a repeated point: the orientation doesn't matter for classifying a shape. Tilt your head upside down if you must see the circle on the bottom. Also present is a pyramid with a rectangular base. It is oriented with the base on the bottom.  You didn't need to be told that these were not a cone and a pyramid but rather two dimensional representations thereof.    In plane geometry the most symmetric polygons were the regular polygons. Their solid counterparts are called the regular polyhedra . The convex regular polyhedra are called platonic solids . To be maximally symmetric their faces must be regular polygons of the same size, and how the faces meet at each vertex look the same.  Unlike with the two dimensional plane where there's a regular -gon for every , there are only five platonic solids. Namely they are the regular tetrahedron with four faces, hexahedron with six faces, octahedron with eight faces, dodecahedron with twelve faces, and icosahedron with twenty faces. The regular tetrahedron, octahedron, and icosahedron have triangular faces, the hexahedron has square faces, and the dodecahedron has regular pentagonal faces.   The five platonic solids. Starting at one o'clock and going clockwise, there is the icosahedron, the octahedron, the dedecahedron, the hexahedron, and the tetrahedron. The solids are a pleasant dark green with gold numbers etched on the surface, on account of the author being exactly the sort of nerd to own polyhedral dice.   You can describe the platonic solids by giving two numbers, together known as their Schläfli symbols : the number of sides of their faces and the number of faces which meet at each vertex. The regular tetrahedron has Schläfli symbol : triangular faces with three meeting at each vertex.   The regular hexahedron has Schläfli symbol : square faces with three meeting at each vertex.   The regular octahedron has Schläfli symbol : triangular faces with four meeting at each vertex.   The regular dodecahedron has Schläfli symbol : pentagonal faces with three meeting at each vertex.   The regular icosahedron has Schläfli symbol : triangular faces with five meeting at each vertex.     You know another name for the regular hexahedron. What is it? Explain.   There is an interesting fact about platonic solids and, more generally, convex polyhedra. Let's close the section with it.  Euler characteristic  Given a convex polyhedron you can compute its Euler characteristic  where is the number of vertices, is the number of edges, and is the number of faces. No matter which convex polyhedron you pick, its Euler characteristic will always be .   Explaining why you always get is too difficult and involved for us to go into. Another cool fact is, you can also compute Euler characteristic for non-convex polyhedra. For instance, if you cut a hole through a cube from one side to the opposite the resulting solid is no longer convex, but you can still calculate for it, with a new number of vertices, edges, and faces coming from the hole you bored through. It will be . If you cut two holes through a cube the Euler characteristic will be . In fact, the Euler characteristic is counting holes.  This is quite amazing. You take a counting problem about a solid—do a little calculation based on the number of vertices, edges, and faces—and it somehow tells you large scale geometric features about the solid. Whoa.   Of the various solids we've seen in this section, which ones are polyhedra and which are not?   To close out this section, let's spend time on a point that's been repeatedly emphasized in the image descriptions. Three dimensional solids are three dimensional. Any time you see one on a two dimensional surface like a computer monitor or a piece of paper, you are really seeing a representation of the solid, not the solid itself.  There's a few ways to do these representations. One is a perspective drawing , such as many of the images in this section have been. This technique, innovated in Renaissance Italy, aims to represent an image how it would look to the human eye. There is a lot of geometry know-how that goes into getting perspective correct, and it's a rich subject for exploring the connection between mathematics and art.  Related to perspective drawing is isometric projection . This is a simplified variation to make things clearer for technical and engineering drawings. There are three axes for three directions, usually called the - and -axes in the horizontal plane and the -axis facing vertically. Things are drawn in line with these axes. This differs from perspective drawing in that parallel edges of the solid appear parallel. Whereas with perspective drawing they aren't actually parallel, because that's not how our vision works.  Another example of where you see isometric projection is in 2D video games. Originally, it was computationally expensive to do true 3D graphics, and this was a way to make things look 3D while keeping everything 2D. With advances in technology now this is more an artistic choice than one forced by hardware limitations.  In hand with isometric projection comes other projections onto planes. Specifically, the idea is you imagine a plane and you smoosh down the shape to lie flat on the plane. If the plane is horizontal you get a top-down view of the solid. Also useful are front and side views, such as you might see with architectural drawings.  These various kinds of projections don't show you the full picture of a solid, but are useful simplifications to represent complex shapes in an understandable way. Perhaps it'd be better to have a 3D model of the shape, but that won't fit on a piece of paper.  Another, more abstract representation of a solid, especially used for polyhedra, is to draw a network of how the vertices are connected by edges. These vertex graphs can look a lot like a perspective or projection drawing of the shape, but sometimes it helps to stretch and move things to make them clearer.   Suppose a projection of a solid has a curved line in it. Can you draw any conclusion about whether the solid is a polyhedron? Explain.   "
},
{
  "id": "sec7-solids-2",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solids "
},
{
  "id": "sec7-solids-3",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sphere radius "
},
{
  "id": "sec7-solids-6",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surfaces "
},
{
  "id": "sec7-solids-7",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cube faces edge vertices "
},
{
  "id": "sec7-solids-9",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-9",
  "type": "Checkpoint",
  "number": "7.4.1",
  "title": "",
  "body": " You already know a cube has six faces. Count how many edges and vertices it has.  Twelve edges and eight vertices.  "
},
{
  "id": "sec7-solids-10",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polyhedron "
},
{
  "id": "sec7-solids-11",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convex "
},
{
  "id": "sec7-solids-12",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cuboid "
},
{
  "id": "sec7-solids-13",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular cuboids rectangular prisms rectangular parallelepipeds "
},
{
  "id": "sec7-solids-16",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prisms cylinders "
},
{
  "id": "sec7-solids-17",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylinder "
},
{
  "id": "sec7-solids-19",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cone pyramid "
},
{
  "id": "sec7-solids-21",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "regular polyhedra platonic solids "
},
{
  "id": "sec7-solids-22",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tetrahedron hexahedron octahedron dodecahedron icosahedron "
},
{
  "id": "sec7-solids-24",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Schläfli symbols "
},
{
  "id": "sec7-solids-25",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-25",
  "type": "Checkpoint",
  "number": "7.4.2",
  "title": "",
  "body": " You know another name for the regular hexahedron. What is it? Explain.  "
},
{
  "id": "sec7-solids-27",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-27",
  "type": "Theorem",
  "number": "7.4.3",
  "title": "Euler characteristic.",
  "body": "Euler characteristic  Given a convex polyhedron you can compute its Euler characteristic  where is the number of vertices, is the number of edges, and is the number of faces. No matter which convex polyhedron you pick, its Euler characteristic will always be .  "
},
{
  "id": "sec7-solids-30",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-30",
  "type": "Checkpoint",
  "number": "7.4.4",
  "title": "",
  "body": " Of the various solids we've seen in this section, which ones are polyhedra and which are not?  "
},
{
  "id": "sec7-solids-32",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perspective drawing "
},
{
  "id": "sec7-solids-33",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-33",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isometric projection "
},
{
  "id": "sec7-solids-37",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-37",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertex graphs "
},
{
  "id": "sec7-solids-38",
  "level": "2",
  "url": "sec7-solids.html#sec7-solids-38",
  "type": "Checkpoint",
  "number": "7.4.5",
  "title": "",
  "body": " Suppose a projection of a solid has a curved line in it. Can you draw any conclusion about whether the solid is a polyhedron? Explain.  "
},
{
  "id": "sec7-exercises",
  "level": "1",
  "url": "sec7-exercises.html",
  "type": "Section",
  "number": "7.5",
  "title": "Exercises",
  "body": " Exercises      Parallelograms have two pairs of sides of equal length, namely pairs of opposite sides. There's another way to have a quadrilateral with two pairs of sides with equal length, namely having the equal sides be adjacent. Such a quadrilateral is called a kite . Draw a picture of a kite. Describe any ways in which the shape is symmetric.  Draw a shape to demonstrate that a quadrilateral can have three sides of the same length with the fourth a different length.  Draw a quadrilateral with exactly three sides of the same length and with both angles between sides of the same length being the same. Is this a type of quadrilateral we've already defined? Explain.      Draw a quadrilateral with an interior angle greater than . Can a quadrilateral have two angles each greater than ? Either provide an example or explain why not.    What is the largest number of interior angles greater than can a pentagon have? What about a hexagon? Draw examples to demonstrate the correctness of your answers. Can you give a general answer for an -gon for any , or at least give an upper bound?  You know a formula for the sum of the interior angles. How can you use that?  In case it is not clear, an upper bound is a formula that tells you the count is that value, but it might be . That is, you aren't getting an exact count just knowing that it is at most that amount. Often when counting it's easier to get an upper bound than an exact count. This is such a case.    Come up with a formula which gives the measure of the interior angle of a regular -gon, in terms of the number of sides . Use this formula to list the interior angles of equilateral triangles, squares, regular pentagons, regular hexagons, and regular octogons. As the number of sides gets larger and larger, what measure do the interior angles approach? Explain, and give a geometric meaning to your answer.    Navigating the surface of a sphere is a historically important topic in mathematics, for the reason that humans live on the surface of a sphere. A common way to do this uses lines of latitude and longitude . Latitude measures north\/south positions. Lines of latitude are horizontal circles, parallel to the circle around the equator , the middle of the sphere. Longitude measures east\/west positions. Lines of longitude stretch down from the north pole (the point at the top of the sphere) to the south pole (the ponit at the bottom of the sphere).  Draw a sphere. On its surface draw some lines of longitude and some lines of latitude. Geometrically, do these two look the same? Explain why or explain how they differ.    Draw a pyramid with a rectangular base. Draw its projections into three different planes. Draw its vertex graph. Of these various representations, which do you find most helpful in understanding the solid? Reflect.    Many solids can be thought of as higher dimensional versions of shapes in the plane. The sphere is a higher dimensional circle, the cube is a higher dimensional square, the cuboid is a higher dimensional rectangle, and so on. Come up with a definition of what a higher dimensional parallelogram should be. Draw a couple examples, and draw projections. Explain why you think your definition is a higher dimensional version of a parallelogram.    Pick three platonic solids and draw their vertex graphs.    It's difficult to show that five platonic solids really do have the symmetry necessary to be regular polyhedra. Indeed, this fact is the crowning accomplishment of Book 13 of Euclid's Elements , an ancient Greek geometry textbook. On the other hand, it's not too difficult to explain why those five are the only options. Do that.  Here's the key observation. If multiple polygonal faces meet at a vertex of a convex polygon then the angles that meet must add up to less than . The reason is, if they added up to they would lie flat in the same plane, and so not be separate faces. And if they added up to more than they would overlap.  Using this key observation your task becomes: explain why the five combinations of which regular polygon and how many meet at a vertex are the only ones which add up to less than .    Look up the 1929 painting The Treachery of Images by surrealist painter René Magritte. Translate its caption into English. Reflect on how this relates to the question of representing three dimensional solids in a two dimensional medium.    "
},
{
  "id": "sec7-exercises-2-1",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-1",
  "type": "Exercise",
  "number": "7.5.1",
  "title": "",
  "body": "   Parallelograms have two pairs of sides of equal length, namely pairs of opposite sides. There's another way to have a quadrilateral with two pairs of sides with equal length, namely having the equal sides be adjacent. Such a quadrilateral is called a kite . Draw a picture of a kite. Describe any ways in which the shape is symmetric.  Draw a shape to demonstrate that a quadrilateral can have three sides of the same length with the fourth a different length.  Draw a quadrilateral with exactly three sides of the same length and with both angles between sides of the same length being the same. Is this a type of quadrilateral we've already defined? Explain.    "
},
{
  "id": "sec7-exercises-2-2",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-2",
  "type": "Exercise",
  "number": "7.5.2",
  "title": "",
  "body": " Draw a quadrilateral with an interior angle greater than . Can a quadrilateral have two angles each greater than ? Either provide an example or explain why not.  "
},
{
  "id": "sec7-exercises-2-3",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-3",
  "type": "Exercise",
  "number": "7.5.3",
  "title": "",
  "body": " What is the largest number of interior angles greater than can a pentagon have? What about a hexagon? Draw examples to demonstrate the correctness of your answers. Can you give a general answer for an -gon for any , or at least give an upper bound?  You know a formula for the sum of the interior angles. How can you use that?  In case it is not clear, an upper bound is a formula that tells you the count is that value, but it might be . That is, you aren't getting an exact count just knowing that it is at most that amount. Often when counting it's easier to get an upper bound than an exact count. This is such a case.  "
},
{
  "id": "sec7-exercises-2-4",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-4",
  "type": "Exercise",
  "number": "7.5.4",
  "title": "",
  "body": " Come up with a formula which gives the measure of the interior angle of a regular -gon, in terms of the number of sides . Use this formula to list the interior angles of equilateral triangles, squares, regular pentagons, regular hexagons, and regular octogons. As the number of sides gets larger and larger, what measure do the interior angles approach? Explain, and give a geometric meaning to your answer.  "
},
{
  "id": "sec7-exercises-2-5",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-5",
  "type": "Exercise",
  "number": "7.5.5",
  "title": "",
  "body": " Navigating the surface of a sphere is a historically important topic in mathematics, for the reason that humans live on the surface of a sphere. A common way to do this uses lines of latitude and longitude . Latitude measures north\/south positions. Lines of latitude are horizontal circles, parallel to the circle around the equator , the middle of the sphere. Longitude measures east\/west positions. Lines of longitude stretch down from the north pole (the point at the top of the sphere) to the south pole (the ponit at the bottom of the sphere).  Draw a sphere. On its surface draw some lines of longitude and some lines of latitude. Geometrically, do these two look the same? Explain why or explain how they differ.  "
},
{
  "id": "sec7-exercises-2-6",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-6",
  "type": "Exercise",
  "number": "7.5.6",
  "title": "",
  "body": " Draw a pyramid with a rectangular base. Draw its projections into three different planes. Draw its vertex graph. Of these various representations, which do you find most helpful in understanding the solid? Reflect.  "
},
{
  "id": "sec7-exercises-2-7",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-7",
  "type": "Exercise",
  "number": "7.5.7",
  "title": "",
  "body": " Many solids can be thought of as higher dimensional versions of shapes in the plane. The sphere is a higher dimensional circle, the cube is a higher dimensional square, the cuboid is a higher dimensional rectangle, and so on. Come up with a definition of what a higher dimensional parallelogram should be. Draw a couple examples, and draw projections. Explain why you think your definition is a higher dimensional version of a parallelogram.  "
},
{
  "id": "sec7-exercises-2-8",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-8",
  "type": "Exercise",
  "number": "7.5.8",
  "title": "",
  "body": " Pick three platonic solids and draw their vertex graphs.  "
},
{
  "id": "sec7-exercises-2-9",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-9",
  "type": "Exercise",
  "number": "7.5.9",
  "title": "",
  "body": " It's difficult to show that five platonic solids really do have the symmetry necessary to be regular polyhedra. Indeed, this fact is the crowning accomplishment of Book 13 of Euclid's Elements , an ancient Greek geometry textbook. On the other hand, it's not too difficult to explain why those five are the only options. Do that.  Here's the key observation. If multiple polygonal faces meet at a vertex of a convex polygon then the angles that meet must add up to less than . The reason is, if they added up to they would lie flat in the same plane, and so not be separate faces. And if they added up to more than they would overlap.  Using this key observation your task becomes: explain why the five combinations of which regular polygon and how many meet at a vertex are the only ones which add up to less than .  "
},
{
  "id": "sec7-exercises-2-10",
  "level": "2",
  "url": "sec7-exercises.html#sec7-exercises-2-10",
  "type": "Exercise",
  "number": "7.5.10",
  "title": "",
  "body": " Look up the 1929 painting The Treachery of Images by surrealist painter René Magritte. Translate its caption into English. Reflect on how this relates to the question of representing three dimensional solids in a two dimensional medium.  "
},
{
  "id": "sec8-length",
  "level": "1",
  "url": "sec8-length.html",
  "type": "Section",
  "number": "8.1",
  "title": "Length and perimeter",
  "body": " Length and perimeter   Length is the measure of the size or quantity of a one-dimensional shape such as a line or curve. To give a number you must say what the unit of the measurement is. When you measure a distance, are you measuring in meters, feet, miles, what? Depending on your choice of unit you will get different answers. When working abstractly, we not talk about units and assume we know what a distance of means. For example, when talking about a rectangular track of land it might measure meters by meters. But when talking about a rectangle as an abstract shape we would say it's by .  For lines you can imagine measuring length as having a yardstick. You put the yardstick up against the line from end to end and the measuring stick tells you the length. For curves that won't work, since your measuring device is a line. You could use a flexible measuring tape. Alternatively, you can approximate the measure by measuring lots of short, approximately linear pieces and adding them all up. As the pieces get shorter and shorter—and you get more and more pieces to measure—you will get a more and more accurate measure. If the pieces are infinitely small then the error in your measurement will also be infinitely small.  This process is not practical. No one wants to measure the length of, say, a circle by using trillions of tiny rulers and adding up the little lengths. Fortunately there are formulas we can use to determine the length around the outside of a shape.  Perimeter  The perimeter of a shape is the length of its boundary. For circles we also call the perimeter the circumference .   Perimeter of a polygon  The perimeter of a polygon is the sum of its side lengths. Here are a few special cases of this. If a square has side length its perimeter is .  If a rectangle has length and width its perimeter is .  If a regular -gon has side length its perimeter is .   The perimeters are found by adding side lengths together.   You can memorize the formulas for the special cases, but they all come from the same idea: you're adding up side lengths. So if you ever forget a formula you can rediscover by remembering that key idea.  For shapes with curves the perimeter isn't based on this one idea and you need a different way to get at the formula.  Radius and diameter  The radius of a circle is the distance from its center to its boundary. The diameter is the distance from a point on the boundary to the opposite point, equal to twice the radius.   Circumference of a circle  If the radius of a circle is then its circumference is Equivalently, if the diameter is then the circumference is .  There is some number so that the circumference is times the radius. We define so that that number is .   This proof is not enlightening. While a mathematician might accept it's true by definition as an explanation a normal person will not. To satisfy the normal person then let's talk a little.  First off it'd be nice to have a value for we can write down. The best we can do is give an approximation. The number turns out to be an irrational number, so it cannot be written exactly as a fraction of whole numbers and its decimal expansion never repeats. Here's the first many digits of ; for practical purposes it's almost always enough to stop at two digits past the decimal point. One way you can approximate , first used by the ancient Greek mathematician Archimedes, is by fitting a circle of radius between regular polygons.   A circle with an inscribed square and a circumscribed square. inscribed square, the largest possible square entirely contained inside the circle, touches the circumference of the circle at its vertices. The circumscribed square, the smallest square which entirely contains the circle, touches the circumference of the circle at the midpoints of its sides. The area of the circle sits between the more easily calculated areas of the circles.    The perimeters of these polygons can be calculated with some effort. This gives both an upper and lower bound for the circumference , whence you get bounds for the value of . Early precursors to calculus were used by Indian mathematicians in the 16th century to produce yet better approximations. These methods were improved upon with later European work in calculus to determine yet more digits of . With digital computers coming into the scene in the 20th century tedious human calculations could now be done by machine. Modern work has determined the digits of out to billions of places.  This quest for more digits is, one must admit, quixotic. For accurate real world calculations only a few digits are needed.  For other curved shapes, methods similar to those used for the circle can be applied to approximate perimeters. Throwing in tools from calculus you can sometimes work out exact formulas. Suffice it to say, in general determining perimeters can be difficult.  But if things stay straight then we can know a lot with just one formula. This formula is so important it deserves its own section.  "
},
{
  "id": "sec8-length-2",
  "level": "2",
  "url": "sec8-length.html#sec8-length-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Length unit "
},
{
  "id": "sec8-length-5",
  "level": "2",
  "url": "sec8-length.html#sec8-length-5",
  "type": "Definition",
  "number": "8.1.1",
  "title": "Perimeter.",
  "body": "Perimeter  The perimeter of a shape is the length of its boundary. For circles we also call the perimeter the circumference .  "
},
{
  "id": "sec8-length-6",
  "level": "2",
  "url": "sec8-length.html#sec8-length-6",
  "type": "Theorem",
  "number": "8.1.2",
  "title": "Perimeter of a polygon.",
  "body": "Perimeter of a polygon  The perimeter of a polygon is the sum of its side lengths. Here are a few special cases of this. If a square has side length its perimeter is .  If a rectangle has length and width its perimeter is .  If a regular -gon has side length its perimeter is .   The perimeters are found by adding side lengths together.  "
},
{
  "id": "sec8-length-9",
  "level": "2",
  "url": "sec8-length.html#sec8-length-9",
  "type": "Definition",
  "number": "8.1.3",
  "title": "Radius and diameter.",
  "body": "Radius and diameter  The radius of a circle is the distance from its center to its boundary. The diameter is the distance from a point on the boundary to the opposite point, equal to twice the radius.  "
},
{
  "id": "sec8-length-10",
  "level": "2",
  "url": "sec8-length.html#sec8-length-10",
  "type": "Theorem",
  "number": "8.1.4",
  "title": "Circumference of a circle.",
  "body": "Circumference of a circle  If the radius of a circle is then its circumference is Equivalently, if the diameter is then the circumference is .  There is some number so that the circumference is times the radius. We define so that that number is .  "
},
{
  "id": "sec8-pythagorean",
  "level": "1",
  "url": "sec8-pythagorean.html",
  "type": "Section",
  "number": "8.2",
  "title": "The Pythagorean theorem",
  "body": " The Pythagorean theorem  If you remember the cartesian plane from high school mathematics with its and axes, then you are familiar with the idea of determining position by decomposing it into horizontal and vertical components. As you recall, you pick a point to be the origin from which you will start. Any point in two dimensional space can be reached from the origin by first moving left or right a distance and then moving up or down a distance. In this way we can use a pair of numbers to represent where the point is. The number represents your movement in the horizontal direction while is the movement in the vertical direction. Sign is used to determine direction; positive for right and up, negative for left and down. For example, the pair represents the location you get by moving units to the right then units down. We call these two numbers the - and - coordinates of the point.  This same idea can be used for looking at diagonal lines. To describe the span of a diagonal line it is enough to say its movement in both the and directions. Call these two movements, respectively, and . ( is the capital Greek letter Delta, the counterpart of the Latin D and stands for Difference . The idea is, the movement is the difference between the ending coordinate and the starting coordinate.) Then, any diagonal line can be seen as the hypotenuse of a right triangle whose legs have length and .   A diagonal line moving up and to the right. The horizontal and vertical movements are represented with dashed lines. The horizontal movement is labeled and the vertical movement is labeled . Note that these three together form a right triangle with the diagonal line as the hypotenuse.    You can think of a line segment as being drawn between two points. The length of the line segment is the distance between those two points. So talking about the length of lines is the same thing as talking about distance between points. In this context, and are the differences of their - and -coordinates.  It'd be nice to have a formula which relates the length of the diagonal line to these two distances and . Phrased in terms of points, if the differences and in the horizontal and vertical directions are known, can you determine the distance between the points. Using the right triangle picture, we are asking for a formula which relates the side lengths of a right triangle.  The Pythagorean theorem  Suppose a right triangle has legs of length and and a hypotenuse of length . Then the three side lengths are related by the formula   Applied to distances, if and are the horizontal and vertical distances between two points, then the distance between the points is given by the following formula.      Perhaps you think of the Pythagorean theorem as being primarily about triangles and you don't understand why it would be approached from the angle of distance. The reason for this choice is, this application is the most important use of the Pythagorean theorem in contemporary mathematics. Indeed, it explains in part why triangles are such an important shape, more so than almost any other polygon. If you are doing analytic geometry —geometry with cartesian coordinates—then triangles show up all over the place. This can also be seen in applications of mathematics; for example, triangles and the Pythagorean theorem get used in physics.  The theorem is still important and useful without that application—after all, it was known to ancient Greek mathematicians while cartesian coordinates originate in the 17th century. Here is one practical, purely geometric use of it.  If a triangle is not a right triangle, then its side lengths won't obey the Pythagorean theorem. Thus you can check if a triangle has a right angle by seeing whether the sum of the squares of the smaller side lengths equals the square of the longest side length. For example, suppose a triangle has sides of length . You can check this is a right triangle because This gives you a way find a right angle using just a rope. Take a loop of rope with equally spaced knots in it dividing the rope into equally sized regions. Stretch it out into a triangle with regions on one side, on another, and on the last. Then the angle opposite the longest side will be a right angle.  Here's another use. The area of mathematics known as trigonometry studies circles and angles. In a circle, you can think of a diagonal radius as the hypotenuse of a right triangle with a horizontal and vertical side. So the Pythagorean theorem relates the radius to the horizontal and vertical distances.    A circle has radius . The diagonal radius corresponding to a certain angle gives a horizontal distance of . What is the vertical distance?  By the Pythagorean theorem, we know that . Plugging in the known values and we get the equation Solving this equation we get So the vertical distance is .    A circle has radius . An angle gives a right triangle with a horizontal distance of . What is the vertical distance on the triangle?  Your answer should be in terms of a square root.   Here is another application of the Pythagorean theorem. A cycloid is the curve traced by a point on the rim of a rolling wheel. The point starts maybe at ground level on the bottom of the wheel. As the wheel rolls forward the point moves forward and upward until it reaches the top of the rotating wheel. Then it moves forward and downward until it reaches the ground again. How long is one segment of a cycloid?   Two segments of a cycloid. Behind the second segment is the wheel at seven different spots in its rotation. It begins with the point touching the ground at the bottom of the wheel, and procedes forward by an eighth-turn each step, ending at the three-fourths point in the rotation. When the point is on the bottom half of the wheel, the rotational motion goes against the forward motion of the wheel. These parts of the curve thus have minor forward motion, moving mostly upward\/downward. When the point is on the top half of the wheel the rotational motion is in the same direction as the forward motion. Thus the point moves more quickly to the right.    You could approximate the curve with a bunch of short diagonal lines. These diagonal lines you could calculate the lengths of using the Pythagorean theorem. The wheel rolls forward at a constant speed, so all the diagonal lines have the same horizontal length. Using trigonometry you can get a formula for the vertical lengths. So you can calculate the diagonal lengths and add them up to get close to the true length of the curve. Do this process with smaller and smaller diagonal lines and you get a better and better approximation. Combine this idea with the calculus concept of the integral and you can produce a formula which gives you exactly the length of the cycloid. If the radius of the wheel is then the length of one segment of the cycloid is .  This same process of combining the Pythagorean theorem with ideas from calculus can be used for similar questions about lengths of curves. These tools, however, are not the topic of this class so I will do no more than point at the existence of this application.  "
},
{
  "id": "sec8-pythagorean-2",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cartesian plane origin coordinates "
},
{
  "id": "sec8-pythagorean-7",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-7",
  "type": "Theorem",
  "number": "8.2.1",
  "title": "The Pythagorean theorem.",
  "body": "The Pythagorean theorem  Suppose a right triangle has legs of length and and a hypotenuse of length . Then the three side lengths are related by the formula   Applied to distances, if and are the horizontal and vertical distances between two points, then the distance between the points is given by the following formula.    "
},
{
  "id": "sec8-pythagorean-8",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "analytic geometry "
},
{
  "id": "sec8-pythagorean-11",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometry "
},
{
  "id": "sec8-pythagorean-12",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-12",
  "type": "Example",
  "number": "8.2.2",
  "title": "",
  "body": " A circle has radius . The diagonal radius corresponding to a certain angle gives a horizontal distance of . What is the vertical distance?  By the Pythagorean theorem, we know that . Plugging in the known values and we get the equation Solving this equation we get So the vertical distance is .  "
},
{
  "id": "sec8-pythagorean-13",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-13",
  "type": "Checkpoint",
  "number": "8.2.3",
  "title": "",
  "body": " A circle has radius . An angle gives a right triangle with a horizontal distance of . What is the vertical distance on the triangle?  Your answer should be in terms of a square root.  "
},
{
  "id": "sec8-pythagorean-14",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cycloid "
},
{
  "id": "sec8-pythagorean-16",
  "level": "2",
  "url": "sec8-pythagorean.html#sec8-pythagorean-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral "
},
{
  "id": "sec8-area",
  "level": "1",
  "url": "sec8-area.html",
  "type": "Section",
  "number": "8.3",
  "title": "Area",
  "body": " Area  In the previous two sections we were living a one dimensional life, concerned only with one dimensional measurements. In this section we add a second dimension and with it get a more complicated but also more fun quantity to measure.  The basic picture for area is the same as the basic picture for multiplication. If you multiply two (positive) quantities and together their product is the area of a rectangle with side lengths and .   This will be our basic definition for area , the measure of how much two dimensional space a shape takes up. Area is measured in square units . For example, if the sides of a rectangle are given in meters then the area would be in square meters. Think: when you multiply the lengths you multiply both the quantities and the units. So meters times meters is meters squared.  Area of a rectangle  Suppose a rectangle has width and height . Then its area is .   We can build on rectangles to get formulas for areas of other shapes. To do so, it's helpful to know some basic properties of area.  Properties of area  Area enjoys the following nice properties. Additivity If a shape is made up of smaller shapes which only touch on their boundaries then the area of the shape is the sum of the areas of the smaller shapes.  Subtraction If a shape is formed by removing a shape with area from a larger shape with area then its area is .  Invariance The area of a shape doesn't change if you move it around, rotate it, or reflect it.     A basic use of the additivity property lets you calculate areas of oddly shaped regions.  An L-shaped couch has the following measurements, in feet.   A hexagonal couch in the shape of an L. In clockwise order the vertices go: up , right , down , left , up an unspecified amount, and then left an unspecified amount to arrive back at the starting vertex.    To find the area this couch takes up think of it as being composed of two rectangles placed against each other. One rectangle measures and the other measures . So in total the area is square feet.  Combining additivity with invariance can get you quite far. For example, think of a rectangle with area as being sliced in half diagonally from one corner to the opposite. The cuts the rectangles into two equally sized triangles—you can rotate and reflect one of them to see they're the same. Let stand for the area of the triangle. By additivity, the area of the rectangle must be the sum of the triangles' areas: . Solving for we get that .  Knowing the formula for a rectangle we thus get a formula for the area of a right triangle.  Area of a triangle  Suppose a right triangle has legs of length and . Then its area is More generally, if a rectangle has a base of and a height of then its area is   We've already seen why this works for right triangles. To get from right triangles to triangles in general want to use the additivity and subtraction properties. You do this in one of the exercises for this chapter.   A similar idea works for other shapes.  Area of a parallelogram  A parallelogram with base and height has area   A parallelogram is formed from a rectangle by cutting a right triangle from the corner and moving it to the other side. So they have the same area.   A rectangle is cut and rearranged to form a parallelogram. Namely, a triangle is cut from the left side of the rectangle. It is then moved, without rotation nor reflection, to the right edge of the rectangle. In this way it forms a parellelogram whose two diagonal sides are the two sides of the cut, the hypotenuse of the triangle.      Area of a trapezoid  Suppose a trapezoid has a height and its parallel sides have lengths and . Then the area of the trapezoid is    A trapezoid. The top side is labeled , the bottom side is labeled , and the height is labeled .     The trapezoid can be broken up into two triangles by cutting from corner to opposite corner. Now add the areas of those triangles.   You can use this same idea of cutting up and rearranging to get area formulas for other kinds of polygons. The important thing to remember is not a host of formulas but rather this process. If you remember how the pictures work you can rederive the formula on the spot if you forget it.  Curved shapes present more of a problem. There's no way to cut up a circle into shapes with only straight lines. After all, any cut will leave part of the curved circumference connected. The best we can do is get pieces that are approximately straight. Constructions such as the following can be made rigorous using ideas from calculus.   We want to get a formula for the area of a circle. To do this we will cut up a circle and rearrange it into (approximately) a rectangle, a shape which we already know an area formula for. Imagine cutting a circle with radius into four equally sized wedges, the rearrange them so that the slices alternate facing up then down, as in this picture.   A circle cut into four equal wedges. Two wedges are repositioned so the curved side is down while the points face upward, and they touch at a single point. The other wedges are positioned opposite facing downward, and the teeth-like wedges fit between each other with no gap nor overlap. In this way they look approximately like a parallelogram, except with a wavy bottom and top. As the number of wedges increases, the same construction produces smaller and smaller bumps on the top\/bottom and diagonal sides get closer and closer to vertical, so that it gets closer and closer to a true rectangle.    This shape looks like a parallelogram with a very wavy bottom and top. Its height is and its width is half the circumference, namely . If you cut the circle up into a much larger (even) number of wedges and rearrange them to alternate facing up and down you get a parallelogram whose top and bottom has more but smaller bumps. And since the anglular size of the wedge determines the angle of the diagonal walls of the parallelogram, it also gets closer to a rectangle. If the wedges are infinitely small then you are infinitely close to a rectangle. The width times height area formula for a rectangle gives that the area is Since this shape was formed by cutting up and rearranging a circle the circle must have the same area.  This construction was independently discovered by a few mathematicians, among them Leonardo da Vinci of Italy (15th century) and Satō Moshun of Japan (17th century). Satō's construction is below.   Satō's construction. Similar to my version of the picture but in a document surrounded by Japanese text. His illustration divides the circle into equally sized wedges and rearranges them into a near-rectangle shape. His wedges are oriented left-right instead of my up-down, but that of course doesn't matter.    Area of a circle  A circle with radius has area    You can get formulas for areas of other curved shapes by similar processes. In general, however, you quickly need tools from calculus to figure them out. Indeed, determining areas of curved shapes is one of the problems calculus was invented to solve. (In jargon, this is what a integral does.) Given that, we will not look at any examples beyond the circle.  The point I want to leave you with is that advanced fields of math such as calculus can sometimes be used to answer questions even an elementary student can understand. They are more difficult and more abstract—which is why we don't teach them to elementary students!—and so understanding how the answers work isn't easy. But questions like how do you figure out areas of curved shapes? are a starting point to modern developments in mathematics.  "
},
{
  "id": "sec8-area-4",
  "level": "2",
  "url": "sec8-area.html#sec8-area-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "area square units "
},
{
  "id": "sec8-area-5",
  "level": "2",
  "url": "sec8-area.html#sec8-area-5",
  "type": "Definition",
  "number": "8.3.1",
  "title": "Area of a rectangle.",
  "body": "Area of a rectangle  Suppose a rectangle has width and height . Then its area is .  "
},
{
  "id": "sec8-area-7",
  "level": "2",
  "url": "sec8-area.html#sec8-area-7",
  "type": "Definition",
  "number": "8.3.2",
  "title": "Properties of area.",
  "body": "Properties of area  Area enjoys the following nice properties. Additivity If a shape is made up of smaller shapes which only touch on their boundaries then the area of the shape is the sum of the areas of the smaller shapes.  Subtraction If a shape is formed by removing a shape with area from a larger shape with area then its area is .  Invariance The area of a shape doesn't change if you move it around, rotate it, or reflect it.    "
},
{
  "id": "sec8-area-9",
  "level": "2",
  "url": "sec8-area.html#sec8-area-9",
  "type": "Example",
  "number": "8.3.3",
  "title": "",
  "body": "An L-shaped couch has the following measurements, in feet.   A hexagonal couch in the shape of an L. In clockwise order the vertices go: up , right , down , left , up an unspecified amount, and then left an unspecified amount to arrive back at the starting vertex.    To find the area this couch takes up think of it as being composed of two rectangles placed against each other. One rectangle measures and the other measures . So in total the area is square feet. "
},
{
  "id": "sec8-area-12",
  "level": "2",
  "url": "sec8-area.html#sec8-area-12",
  "type": "Theorem",
  "number": "8.3.4",
  "title": "Area of a triangle.",
  "body": "Area of a triangle  Suppose a right triangle has legs of length and . Then its area is More generally, if a rectangle has a base of and a height of then its area is   We've already seen why this works for right triangles. To get from right triangles to triangles in general want to use the additivity and subtraction properties. You do this in one of the exercises for this chapter.  "
},
{
  "id": "sec8-area-14",
  "level": "2",
  "url": "sec8-area.html#sec8-area-14",
  "type": "Theorem",
  "number": "8.3.5",
  "title": "Area of a parallelogram.",
  "body": "Area of a parallelogram  A parallelogram with base and height has area   A parallelogram is formed from a rectangle by cutting a right triangle from the corner and moving it to the other side. So they have the same area.   A rectangle is cut and rearranged to form a parallelogram. Namely, a triangle is cut from the left side of the rectangle. It is then moved, without rotation nor reflection, to the right edge of the rectangle. In this way it forms a parellelogram whose two diagonal sides are the two sides of the cut, the hypotenuse of the triangle.     "
},
{
  "id": "sec8-area-15",
  "level": "2",
  "url": "sec8-area.html#sec8-area-15",
  "type": "Theorem",
  "number": "8.3.6",
  "title": "Area of a trapezoid.",
  "body": "Area of a trapezoid  Suppose a trapezoid has a height and its parallel sides have lengths and . Then the area of the trapezoid is    A trapezoid. The top side is labeled , the bottom side is labeled , and the height is labeled .     The trapezoid can be broken up into two triangles by cutting from corner to opposite corner. Now add the areas of those triangles.  "
},
{
  "id": "sec8-area-18",
  "level": "2",
  "url": "sec8-area.html#sec8-area-18",
  "type": "Example",
  "number": "8.3.7",
  "title": "",
  "body": " We want to get a formula for the area of a circle. To do this we will cut up a circle and rearrange it into (approximately) a rectangle, a shape which we already know an area formula for. Imagine cutting a circle with radius into four equally sized wedges, the rearrange them so that the slices alternate facing up then down, as in this picture.   A circle cut into four equal wedges. Two wedges are repositioned so the curved side is down while the points face upward, and they touch at a single point. The other wedges are positioned opposite facing downward, and the teeth-like wedges fit between each other with no gap nor overlap. In this way they look approximately like a parallelogram, except with a wavy bottom and top. As the number of wedges increases, the same construction produces smaller and smaller bumps on the top\/bottom and diagonal sides get closer and closer to vertical, so that it gets closer and closer to a true rectangle.    This shape looks like a parallelogram with a very wavy bottom and top. Its height is and its width is half the circumference, namely . If you cut the circle up into a much larger (even) number of wedges and rearrange them to alternate facing up and down you get a parallelogram whose top and bottom has more but smaller bumps. And since the anglular size of the wedge determines the angle of the diagonal walls of the parallelogram, it also gets closer to a rectangle. If the wedges are infinitely small then you are infinitely close to a rectangle. The width times height area formula for a rectangle gives that the area is Since this shape was formed by cutting up and rearranging a circle the circle must have the same area.  This construction was independently discovered by a few mathematicians, among them Leonardo da Vinci of Italy (15th century) and Satō Moshun of Japan (17th century). Satō's construction is below.   Satō's construction. Similar to my version of the picture but in a document surrounded by Japanese text. His illustration divides the circle into equally sized wedges and rearranges them into a near-rectangle shape. His wedges are oriented left-right instead of my up-down, but that of course doesn't matter.   "
},
{
  "id": "sec8-area-19",
  "level": "2",
  "url": "sec8-area.html#sec8-area-19",
  "type": "Theorem",
  "number": "8.3.8",
  "title": "Area of a circle.",
  "body": "Area of a circle  A circle with radius has area   "
},
{
  "id": "sec8-area-20",
  "level": "2",
  "url": "sec8-area.html#sec8-area-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral "
},
{
  "id": "sec8-volume",
  "level": "1",
  "url": "sec8-volume.html",
  "type": "Section",
  "number": "8.4",
  "title": "Volume and surface area",
  "body": " Volume and surface area  Continuing our progression of looking at more dimensions we now look at three dimensions. With solids we can ask how much volume (that is, three dimensional space) they contain. We can also ask about the size of their boundaries. For two dimensional shapes the boundaries were one dimensional perimeters. With three dimensional solids the boundaries are one step lower, being two dimensional surfaces. Naturally we call the size of these boundaries surface area .  Surface area is two dimensional—it's a kind of area!—and so is measured in square units. Volume is three dimensional and is measured in cubic units: cubic inches, cubic meters, etc.  In two dimensions we started to brush up against calculus to determine area formulas. If you expect that three dimensions are even more difficult you would be correct. As such, this section will have to skip explanations for some formulas. Sadly, sometimes the best that can be said is, there is no easier path to a full explanation than studying mathematics for a few more years.  We do volume first then talk surface area.  In two dimensions we started with the rectangle. One dimension up we start with its three dimensional counterpart. In two dimensions we get the area by multiplying the side lengths. The same idea works for rectangular cuboids, except now there are three sides to multiply.   Volume of a rectangular cuboid  Consider a rectangular cuboid whose side lengths are , , and . Its volume is    More generally, some solids are formed by taking a two dimensional shape as the base and thickening it upward to form a solid. For example, a cylinder is formed by taking a circle as the base and thickening it to become a solid. For any such shape, the volume can be determined by multiplying the area of the base by the height. For example, a rectangular cuboid has a base area of and a height of . Multiplying those gives the volume formula.  You can do the same process for a cylinder with radius and height . The base has an area of so we multiply by the height to get the volume.  Volume of a cylinder  Consider a cylinder whose base has radius and height . Then its volume is    Pyramids are to rectangular cuboids as cones are to cylinders. That is, a rectangular cuboid is formed by starting with a rectangle base and raising it with vertical walls to a solid. Whereas a pyramid is formed by starting with a rectangle base and raising it toward a point. The walls of the pyramid lean diagonally, and as you go up the area of the horizontal cross sections decrease down to zero at the point. Similarly, a cylinder is formed by raising a circular base with vertical walls while a cone is formed by raising a circular point to taper toward a point.  Because of this analogous feature the two solids have similar formulas. Namely, each has volume one third of the corresponding solid with vertical walls.  Volume of a pyramid  Consider a pyramid with a rectangular base with side lengths and and height . Its volume is    Volume of a cone  Consider a cone with a circular base with radius and height . Its volume is    The in these is maybe mysterious. A key idea to explain this that you don't change the volume of a solid by sliding its cross sections around. Imagine a deck of cards, stacked straight so that each card is exactly on top of the one below. If you slide the cards so that they don't perfectly aline the solid is now askew—it no longer has perfectly vertical edges. But this doesn't change the overall volume of the deck.  Think of a solid as being composed of infinitely thin cards stacked atop each other. With a rectangular cuboid or a cylinder the cards all exactly line up. With a cone or pyramid the cards get smaller as you go up. No matter the size of each card, if you slide cards to the side you don't change the volume of the solid. For example, imagine a skew cylinder , obtained by taking a cylinder a pushing all the cards to the side so that the axis of the cylider that goes through the center of each circular card is a diagonal line. This skew cylinder will have the same volume as the original right cylinder, namely the area of the base times the height.  The two dimensional analogue of this is taking a rectangle and pushing its horizontal slices to the side to form a parallelogram. The two shapes have the same area formula, namely base times height.  The fact about volume, known as Cavalieri's principle , lets you compute volumes of skewed solids without needing to memorize a special formula. If you can understand a solid as coming from sliding around the slices of a better-known type of solid then they have the same volume. This works even if the edges are curves or otherwise complicated.   A parallelpiped is a solid with six faces which are each parallelograms. You can think of it as obtained from a rectangular cuboid by skewing it. As such the formula for the volume of a cuboid—width times depth times height—also works for a parallelpiped.   This principle doesn't work for every kind of solid, however, and so you are forced to know more formulas for volume.  Volume of a sphere  Consider a sphere with radius . Then its volume is     A solid consists of a cylinder with hemispherical caps of each end. If the cylinder's height is and its radius, the same as the radii of the hemispheres, is , what is the overall volume of the solid?  The additivity property of area also applies to volume!   The hint for this checkpoint is a good time to make explicit that the additivity, subtraction, and invariance properties of area also apply to volume. Indeed, they apply to geometric size in any number of dimensions.  Enough about volume, let's talk surface area.  For many solids, their surface area can be computed knowing a few principles.  Principles of surface area   If a solid's boundaries consists of multiple faces, its surface area is the sum of the areas of the faces.  If a face is formed by taking a curve in a plane and extending it perpendicularly into the third dimension, then its area is the length of the curve times its height.      A cube with side length has its boundary consisting of six squares. Each square has area , so the overall surface area is .    Consider a cylinder with radius and height . Its boundary consists of two circles plus its vertical side. The vertical side is obtained by thickening a circle into the third dimension, so its area is the circumfenece times the height: . The circles each have area . Thus the overall surface area is .   Again, the sphere is a solid which requires its own approach and its own formula.  Surface area of a sphere  Consider a sphere with radius . Its surface area is     "
},
{
  "id": "sec8-volume-2",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "volume surface area "
},
{
  "id": "sec8-volume-7",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-7",
  "type": "Definition",
  "number": "8.4.1",
  "title": "Volume of a rectangular cuboid.",
  "body": "Volume of a rectangular cuboid  Consider a rectangular cuboid whose side lengths are , , and . Its volume is   "
},
{
  "id": "sec8-volume-10",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-10",
  "type": "Theorem",
  "number": "8.4.2",
  "title": "Volume of a cylinder.",
  "body": "Volume of a cylinder  Consider a cylinder whose base has radius and height . Then its volume is   "
},
{
  "id": "sec8-volume-13",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-13",
  "type": "Theorem",
  "number": "8.4.3",
  "title": "Volume of a pyramid.",
  "body": "Volume of a pyramid  Consider a pyramid with a rectangular base with side lengths and and height . Its volume is   "
},
{
  "id": "sec8-volume-14",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-14",
  "type": "Theorem",
  "number": "8.4.4",
  "title": "Volume of a cone.",
  "body": "Volume of a cone  Consider a cone with a circular base with radius and height . Its volume is   "
},
{
  "id": "sec8-volume-16",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skew cylinder "
},
{
  "id": "sec8-volume-18",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cavalieri's principle "
},
{
  "id": "sec8-volume-19",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-19",
  "type": "Example",
  "number": "8.4.5",
  "title": "",
  "body": " A parallelpiped is a solid with six faces which are each parallelograms. You can think of it as obtained from a rectangular cuboid by skewing it. As such the formula for the volume of a cuboid—width times depth times height—also works for a parallelpiped.  "
},
{
  "id": "sec8-volume-22",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-22",
  "type": "Checkpoint",
  "number": "8.4.6",
  "title": "",
  "body": " A solid consists of a cylinder with hemispherical caps of each end. If the cylinder's height is and its radius, the same as the radii of the hemispheres, is , what is the overall volume of the solid?  The additivity property of area also applies to volume!  "
},
{
  "id": "sec8-volume-26",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-26",
  "type": "Theorem",
  "number": "8.4.7",
  "title": "Principles of surface area.",
  "body": "Principles of surface area   If a solid's boundaries consists of multiple faces, its surface area is the sum of the areas of the faces.  If a face is formed by taking a curve in a plane and extending it perpendicularly into the third dimension, then its area is the length of the curve times its height.    "
},
{
  "id": "sec8-volume-27",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-27",
  "type": "Example",
  "number": "8.4.8",
  "title": "",
  "body": " A cube with side length has its boundary consisting of six squares. Each square has area , so the overall surface area is .  "
},
{
  "id": "sec8-volume-28",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-28",
  "type": "Example",
  "number": "8.4.9",
  "title": "",
  "body": " Consider a cylinder with radius and height . Its boundary consists of two circles plus its vertical side. The vertical side is obtained by thickening a circle into the third dimension, so its area is the circumfenece times the height: . The circles each have area . Thus the overall surface area is .  "
},
{
  "id": "sec8-volume-30",
  "level": "2",
  "url": "sec8-volume.html#sec8-volume-30",
  "type": "Theorem",
  "number": "8.4.10",
  "title": "Surface area of a sphere.",
  "body": "Surface area of a sphere  Consider a sphere with radius . Its surface area is   "
},
{
  "id": "sec8-exercises",
  "level": "1",
  "url": "sec8-exercises.html",
  "type": "Section",
  "number": "8.5",
  "title": "Exercises",
  "body": " Exercises    Come up with formulas for the perimeters of the following shapes. Explain why your formulas work. The semicircle of radius .  The wedge of the circle of radius with angle .  The shape obtained by attaching a semicircle on each side of a square with side length .    Drawing a picture is always a good first step. Here's some additional hints for each part. Don't forget the line across the base!  To determine the length of the curved side ask yourself what fraction of the circumference it is.  This is not simply four times your formula for the perimeter of a semicircle.     A quad on a college campus consists of a rectangle of lawn, yards by yards, surrounded by walkways. As a busy student rushing between classes you do not have time to take the long way and cut straight across the quad, from one corner to the opposite. How much shorter is this path instead of walking along the edge of the quad?  Draw a picture! You should recognize you're looking at a right triangle.    A parallelogram has a base of and an area of . Its angles are and . What is its perimeter?  You know two of the side lengths of the parallelogram, so you need to find the other two. Draw a picture! Can you use the Pythagorean theorem to figure out the remaining side lengths?    In this chapter we talked about how you can approximate lengths of curves by replacing them with lots of small lines that are close to the curve. This works for most curves you see in the real world, but it doesn't work for fractal -like shapes. Read the wikipedia article on the coastline paradox . Give a short definition of a fractal and summarize the difficulty in measuring the lengths of coastlines.         Draw pictures that show why the formula for area works for any triangle, not just right triangles. Explain your pictures. Demonstrate them by giving calculation following the pictures for both an acute and obtuse triangle.  Think of an acute triangle as formed from two smaller right triangles joined at the height of the acute triangle. Think of an obtuse triangle as formed by removing a smaller triangle from the corner of a right triangle.    Come up with a formula for the area of an equilateral triangle based only on its side length . Provide an explanation of how you know your formula works. Demonstrate your formula by computing the area of an equilateral triangle with side length .  If you cut the triangle in half along its height each half is a right triangle. Can you use this to determine the height so you can use the one half base times height formula?    Come up with a formula for the area of a regular hexagon based only on its side length . Provide an explanation of how you know your formula works. Demonstrate your formula by computing the area of a regular hexagon with side length .  As a first step, explain why a regular hexagon is composed of six equally sized equilateral triangles.    A sphere of radius is contained within the smallest cylinder than encloses it. That is, the top and bottom of the cylinder touches the top and bottom poles of the sphere and the side of the cylinder touches the equator of the sphere. What is the volume of the cylinder?  Instead of a sphere inside that cylinder the largest cone that fits inside is contained. That is, the bottom of the cone is the bottom of the cylinder and the top point of the cone touches the top of the cylinder. What is the volume of the cone? How many of these cones do you need to have the same volume as the sphere?    Determine a formula for the volume of the regular octahedron with side length . Show the work you used to get the formula.  The regular octahedron is two equal pyramids, one upside down, joined at their base. Can you determine the height of these pyramids?    Come up with formulas for the surface areas of each Platonic solid except the regular dodecagon, given its side length . Show the work you used to get the formulas.  The reason the dodecagon is excluded is because you'd have to first get a formula for the area of a regular pentagon, and that's a more difficult problem than is fair to give you for homework.    "
},
{
  "id": "sec8-exercises-2-1",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-1",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": " Come up with formulas for the perimeters of the following shapes. Explain why your formulas work. The semicircle of radius .  The wedge of the circle of radius with angle .  The shape obtained by attaching a semicircle on each side of a square with side length .    Drawing a picture is always a good first step. Here's some additional hints for each part. Don't forget the line across the base!  To determine the length of the curved side ask yourself what fraction of the circumference it is.  This is not simply four times your formula for the perimeter of a semicircle.   "
},
{
  "id": "sec8-exercises-2-2",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-2",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": " A quad on a college campus consists of a rectangle of lawn, yards by yards, surrounded by walkways. As a busy student rushing between classes you do not have time to take the long way and cut straight across the quad, from one corner to the opposite. How much shorter is this path instead of walking along the edge of the quad?  Draw a picture! You should recognize you're looking at a right triangle.  "
},
{
  "id": "sec8-exercises-2-3",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-3",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": " A parallelogram has a base of and an area of . Its angles are and . What is its perimeter?  You know two of the side lengths of the parallelogram, so you need to find the other two. Draw a picture! Can you use the Pythagorean theorem to figure out the remaining side lengths?  "
},
{
  "id": "sec8-exercises-2-4",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-4",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": " In this chapter we talked about how you can approximate lengths of curves by replacing them with lots of small lines that are close to the curve. This works for most curves you see in the real world, but it doesn't work for fractal -like shapes. Read the wikipedia article on the coastline paradox . Give a short definition of a fractal and summarize the difficulty in measuring the lengths of coastlines.  "
},
{
  "id": "sec8-exercises-2-5",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-5",
  "type": "Exercise",
  "number": "8.5.5",
  "title": "",
  "body": " Draw pictures that show why the formula for area works for any triangle, not just right triangles. Explain your pictures. Demonstrate them by giving calculation following the pictures for both an acute and obtuse triangle.  Think of an acute triangle as formed from two smaller right triangles joined at the height of the acute triangle. Think of an obtuse triangle as formed by removing a smaller triangle from the corner of a right triangle.  "
},
{
  "id": "sec8-exercises-2-6",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-6",
  "type": "Exercise",
  "number": "8.5.6",
  "title": "",
  "body": " Come up with a formula for the area of an equilateral triangle based only on its side length . Provide an explanation of how you know your formula works. Demonstrate your formula by computing the area of an equilateral triangle with side length .  If you cut the triangle in half along its height each half is a right triangle. Can you use this to determine the height so you can use the one half base times height formula?  "
},
{
  "id": "sec8-exercises-2-7",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-7",
  "type": "Exercise",
  "number": "8.5.7",
  "title": "",
  "body": " Come up with a formula for the area of a regular hexagon based only on its side length . Provide an explanation of how you know your formula works. Demonstrate your formula by computing the area of a regular hexagon with side length .  As a first step, explain why a regular hexagon is composed of six equally sized equilateral triangles.  "
},
{
  "id": "sec8-exercises-2-8",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-8",
  "type": "Exercise",
  "number": "8.5.8",
  "title": "",
  "body": " A sphere of radius is contained within the smallest cylinder than encloses it. That is, the top and bottom of the cylinder touches the top and bottom poles of the sphere and the side of the cylinder touches the equator of the sphere. What is the volume of the cylinder?  Instead of a sphere inside that cylinder the largest cone that fits inside is contained. That is, the bottom of the cone is the bottom of the cylinder and the top point of the cone touches the top of the cylinder. What is the volume of the cone? How many of these cones do you need to have the same volume as the sphere?  "
},
{
  "id": "sec8-exercises-2-9",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-9",
  "type": "Exercise",
  "number": "8.5.9",
  "title": "",
  "body": " Determine a formula for the volume of the regular octahedron with side length . Show the work you used to get the formula.  The regular octahedron is two equal pyramids, one upside down, joined at their base. Can you determine the height of these pyramids?  "
},
{
  "id": "sec8-exercises-2-10",
  "level": "2",
  "url": "sec8-exercises.html#sec8-exercises-2-10",
  "type": "Exercise",
  "number": "8.5.10",
  "title": "",
  "body": " Come up with formulas for the surface areas of each Platonic solid except the regular dodecagon, given its side length . Show the work you used to get the formulas.  The reason the dodecagon is excluded is because you'd have to first get a formula for the area of a regular pentagon, and that's a more difficult problem than is fair to give you for homework.  "
},
{
  "id": "sec9-rigid",
  "level": "1",
  "url": "sec9-rigid.html",
  "type": "Section",
  "number": "9.1",
  "title": "Rigid motions: translations and rotations",
  "body": " Rigid motions: translations and rotations  Imagine cutting out a piece of paper into your favorite shape. You set it down on the table and move it around without picking it up from the surface. What are the different types of movement you can do?   Do this. If you don't have scissors at hand, it's okay to tear with your hands. Categorize the different movements you can do.   Your movements can be understood as combinations of two basic kinds. Translation Keeping the orientation of the shape fixed you slide it around. Perhaps you move it horizontally, perhaps vertically, perhaps diagonally.  Rotation Keeping the position of the shape fixed you twist it in a circular motion.  Perhaps you did both of these at the same time. But whatever complicated movement you did, you'd have the same change from start to finish if you first rotated your shape to its final orientation and then translated it to the final position. (Or you could translate and then rotate; the order doesn't matter.) This is the sense in which any movement of your shape can be understood as a combination of a translation plus a rotation.   An arrowhead-shaped quadrilateral. Off to the side are two rotated copies of it. This picture also illustrates translation, as these two arrowheads are translated to the right from the original arrowhead.    An important property of these movements— geometric transformations , to drop some jargon—is that they are distance-preserving . If you drew two dots on your shape, then as you moved it the distance between the dots would stay the same. This is because the shape is rigid. On the other hand, if your shape was made of rubber and you stretched it then the dots would get farther apart. If you lift up your shape from the surface you can accomplish a similar thing in three dimensional space by folding the paper to bring the dots closer together.  Similarly these transformations are angle-preserving . If you draw an angle on your shape then rotating and translating it won't change the measure of the angle. On the other hand, stretching an elastic surface can change angles.  A third important property of these transformations is that they preserve orientation or handedness . To illustrate this, imagine two ell-shaped objects that are reflections of each other. No matter how you rotate you can't make one look like the other. But if you're allowed to pick up your shape and flip it upside down then you change the handedness of your shape.   Two ell-shaped objects that are reflections of each other. You can transform one into the other by a reflection—imagine picking it up off your screen and flipping it upside down. But if you just slide it around and rotate it you can never make it look like its twin.    This phenomenon is familiar to anyone who has played the video game Tetris. In this video game you translate and rotate shapes made out of blocks. But you cannot reflect them. Some of the shapes are mirror images of each other, and their different handedness ensures they can fit into different places.   Cut a shape out of paper. Rotate it different amounts and trace around its border to draw copies of it. Are there any amounts you can rotate it so that it looks the same? Can you describe a general pattern for the angles you can rotate it so that it looks the same?   "
},
{
  "id": "sec9-rigid-3",
  "level": "2",
  "url": "sec9-rigid.html#sec9-rigid-3",
  "type": "Checkpoint",
  "number": "9.1.1",
  "title": "",
  "body": " Do this. If you don't have scissors at hand, it's okay to tear with your hands. Categorize the different movements you can do.  "
},
{
  "id": "sec9-rigid-6",
  "level": "2",
  "url": "sec9-rigid.html#sec9-rigid-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric transformations distance-preserving "
},
{
  "id": "sec9-rigid-7",
  "level": "2",
  "url": "sec9-rigid.html#sec9-rigid-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angle-preserving "
},
{
  "id": "sec9-rigid-8",
  "level": "2",
  "url": "sec9-rigid.html#sec9-rigid-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orientation handedness "
},
{
  "id": "sec9-rigid-11",
  "level": "2",
  "url": "sec9-rigid.html#sec9-rigid-11",
  "type": "Checkpoint",
  "number": "9.1.2",
  "title": "",
  "body": " Cut a shape out of paper. Rotate it different amounts and trace around its border to draw copies of it. Are there any amounts you can rotate it so that it looks the same? Can you describe a general pattern for the angles you can rotate it so that it looks the same?  "
},
{
  "id": "sec9-symmetry",
  "level": "1",
  "url": "sec9-symmetry.html",
  "type": "Section",
  "number": "9.2",
  "title": "Symmetry and reflection",
  "body": " Symmetry and reflection   Find or make some small objects in the shape of a square, a circle, and a triangle. Ignoring any pattern or design and looking only at the shape, how far do you have to rotate the shape to make it look the same as how it started?   You should have made the following observations. The square looks the same if you rotate any number of quarter turns ( ). The circle looks the same under any rotation. For the triangle it depends on what type of triangle you had. If it's an equilateral triangle where all sides and angles are the same then rotating any number of third turns ( ) will give you the same shape back. If it's a different kind of triangle then it will only look the same after a full turn ( ).  These are examples of rotational symmetry , where a shape looks the same after doing a rotation. We would say, for instance, that a square is symmetric under a rotation by , a circle is symmetric under any rotation, and so on.  Any shape is symmetric under a rotation by , which is the same as a rotation by . We call this the identity transformation because it is the do nothing transformation. Compare the terminology of multiplicative identity and additive identity . Multiplying a number by or adding doesn't change its value, like how the identity transformation never changes a shape. In general, mathematicians use the word identity to refer to something that keeps things unchanged.  I say identity transformation rather than identity rotation because the do nothing rotation is the same as the do nothing translation. Since it's the do nothing version of both these kinds of transformations I don't want to pick out just one of them in the name.  On that note, you might wonder about symmetries under translations. Can you have a shape that looks the same after a (non-identity) translation? It depends on what you mean. If you don't care where your shape is, then every translation produces a shape that looks the same. But if you do care where your shape is, then any non-identity translation moves where it is so it wouldn't count. Both answers are boring so we won't care to talk about them.   With the square, there are four different rotational symmetries, namely the rotations by , , , and . Note that if you do two of these in a row you could've equivalently just done one. For example, a rotation followed by a is the same as a single rotation. Or a rotation followed by a rotation is the same a single rotation. Also note that every symmetry has an inverse symmetry, the rotation by the same amount in the opposite direction. For example, rotating by is the same as rotating by , that is by in the negative direction. So doing a rotation followed by a rotation is the same as doing nothing, the identity transformation.  Any regular polygon will behave similarly. A regular -gon will have different rotational symmetries, namely the rotations by multiples of degrees. Like with the square doing one rotation after another is equivalent to a single symmetry, and each symmetry has an inverse.  A more general statement can be made, but before doing so let's address another kind of symmetry. Consider the following shape.   A kite-shaped quadrilateral. If you reflected across a vertical line down its middle it would look the same.    You probably would say this kite shape is symmetric. But if you do any non-identity rotation then it looks different. (You can test this by rotating your head and\/or computer screen.) So its symmetry isn't of the rotational kind. Instead, imagine placing a mirror to the side of the kite. Reflected in the mirror it looks the same. This type of symmetry is a reflective symmetry , because the shape looks the same after a reflection .  In general, a reflection is a geometric transformation where you take a line, the axis of reflection , and reflect the shape across the line. If the axis is a vertical line then we call it a horizontal reflection and if the axis is a horizontal line we call it a vertical reflection .  One way to produce a shape with reflective symmetry is to fold a piece of paper, cut a shape out, then unfold it to a symmetric shape. Do this a couple times to produce symmetric shapes. Can you produce a shape with more than one reflective axis of symmetry?  Playing around with reflections you might observe that a horizontal reflection followed by a vertical reflection is equivalent to a rotation by . This is an indication that reflections and rotations can interact. Let's look at the example of the triangle.   An equilateral triangle has the following symmetries The identity transformation, the do nothing transformation.  Rotation by both in the forward and backward direction.  Three reflections, each going through a vertex of the triangle.     An equilateral triangle. Drawn over it are its three axes of symmetry, as dashed lines. These are the lines which go through a vertex and the midpoint of the opposite side. Equivalently, these are the lines which go through a vertex and the center.    Are there any others?  One way to answer this is, notice that you can describe what's going on entirely by looking at vertices. An equilateral triangle is entirely determined by the position of its vertices, and any symmetry must send each vertex to a vertex. So to catalog the symmetries you just need to keep track of where the vertices go. To do this, label each vertex, say as . We're now asking how many ways there are to map these labels to each other.   An equilateral triangle. The three vertices are labeled , , and .    With a little work you can write down all possibilities. Drawing pictures to help out, you can see that these transformations are, in order: the identity, the two rotations, and the three reflections. So these are in fact the only six possibilities. There are no others.  What this tells us is, if you do a rotation followed by a reflection, it's equivalent to doing one of the other symmetries. We can use the label mappings to figure out which one we get, following one then the next. For example, let's do the counterclockwise rotation followed by the reflection across the line through vertex . This is the same label mapping as the reflection across the line through vertex . Thus we see that a rotation followed by a reflection is equivalent to doing a different reflection once.   In general, with any regular polygon a way to understand its symmetries is to label the vertices and keep track of where they go. Thus we reduce a geometry problem—what are the transformations that keep this shape looking the same?—with a problem of symbol pushing—what are the ways to map the labels to each other? This is a common pattern in mathematics. Algebra—the mathematics of symbol pushing—is a powerful tool to understand things.  A detail to watch out for in the general case, however, is that while every symmetry corresponds to a shuffling of the vertices there can be shufflings of vertices which don't give a symmetry. This happens as early as the square, as you check in an exercise for this chapter. When you move beyond triangles you also have to deal with the complication of determining which shufflings of vertices correspond to symmetries.  This is the sort of question that motivates the area of mathematics known as group theory . You want to understand what the symmetries of an object are like—whether this be a geometric object or some other, more abstract object. A question which an elementary school student can investigate—how many different ways are there to transform a triangle and keep it looking the same?—can lead into more advanced mathematics. Indeed, group theory is a core tool of modern mathematics. A broad variety of problems in mathematics makes use of more difficult versions of the symmetry analysis we did in this section.  To drop some jargon to give you keywords in case you want to learn more: the symmetries of regular polygons are called the dihedral groups . That they correspond to shufflings of vertices amounts to saying they are subgroups of symmetric groups .  "
},
{
  "id": "sec9-symmetry-2",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-2",
  "type": "Checkpoint",
  "number": "9.2.1",
  "title": "",
  "body": " Find or make some small objects in the shape of a square, a circle, and a triangle. Ignoring any pattern or design and looking only at the shape, how far do you have to rotate the shape to make it look the same as how it started?  "
},
{
  "id": "sec9-symmetry-4",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rotational symmetry "
},
{
  "id": "sec9-symmetry-5",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity multiplicative identity additive identity "
},
{
  "id": "sec9-symmetry-6-1",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transformation rotation "
},
{
  "id": "sec9-symmetry-7",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "sec9-symmetry-11",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflective symmetry reflection "
},
{
  "id": "sec9-symmetry-12",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reflection axis of reflection horizontal reflection vertical reflection "
},
{
  "id": "sec9-symmetry-13",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-13",
  "type": "Checkpoint",
  "number": "9.2.2",
  "title": "",
  "body": "One way to produce a shape with reflective symmetry is to fold a piece of paper, cut a shape out, then unfold it to a symmetric shape. Do this a couple times to produce symmetric shapes. Can you produce a shape with more than one reflective axis of symmetry? "
},
{
  "id": "sec9-symmetry-15",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-15",
  "type": "Example",
  "number": "9.2.3",
  "title": "",
  "body": " An equilateral triangle has the following symmetries The identity transformation, the do nothing transformation.  Rotation by both in the forward and backward direction.  Three reflections, each going through a vertex of the triangle.     An equilateral triangle. Drawn over it are its three axes of symmetry, as dashed lines. These are the lines which go through a vertex and the midpoint of the opposite side. Equivalently, these are the lines which go through a vertex and the center.    Are there any others?  One way to answer this is, notice that you can describe what's going on entirely by looking at vertices. An equilateral triangle is entirely determined by the position of its vertices, and any symmetry must send each vertex to a vertex. So to catalog the symmetries you just need to keep track of where the vertices go. To do this, label each vertex, say as . We're now asking how many ways there are to map these labels to each other.   An equilateral triangle. The three vertices are labeled , , and .    With a little work you can write down all possibilities. Drawing pictures to help out, you can see that these transformations are, in order: the identity, the two rotations, and the three reflections. So these are in fact the only six possibilities. There are no others.  What this tells us is, if you do a rotation followed by a reflection, it's equivalent to doing one of the other symmetries. We can use the label mappings to figure out which one we get, following one then the next. For example, let's do the counterclockwise rotation followed by the reflection across the line through vertex . This is the same label mapping as the reflection across the line through vertex . Thus we see that a rotation followed by a reflection is equivalent to doing a different reflection once.  "
},
{
  "id": "sec9-symmetry-18",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group theory "
},
{
  "id": "sec9-symmetry-19",
  "level": "2",
  "url": "sec9-symmetry.html#sec9-symmetry-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dihedral groups subgroups symmetric groups "
},
{
  "id": "sec9-tilings",
  "level": "1",
  "url": "sec9-tilings.html",
  "type": "Section",
  "number": "9.3",
  "title": "Tilings",
  "body": " Tilings  One use of symmetries is understanding tilings . Just like different shaped tiles might be used to cover a courtyard, you can ask what shapes can be used to tile the plane. How do you fit them together?  The simplest possible tiling is one with squares, such as the cheap linoleum tiles you might see on the floor of a public school classroom or on a sheet of graph paper. Four squares meet at a corner, in a pattern that repeats infinitely (or at least, to the edge of the floor or paper). What other shapes can we do this with?   A grid of squares tiling the plane. More precisely, they fill up a circle, with the unfinished edge hopefully suggesting that the pattern can be continued indefinitely. The squares alternate white and black to make the grid pattern easier to see.    A natural place to start is with regular polygons. These shapes enjoy a high degree of symmetry, so you have fewer ways to try to fit them together. Experimenting around with different numbers of sides, you might see that you can replicate the feat with regular hexagons, achieving something like a honeycomb pattern.   A grid of hexagons tiling the plane, akin to a honeycomb pattern. Each hexagon is surrounded by six other hexagons of equal size, one for each side.    Trying some more you make it work for equilateral triangles. In fact, you can get this from the hexagon tiling. Namely, any hexagon can be subdivided into six equilateral triangles. So you can turn the honeycomb tiling into a triangle tiling by replacing each hexagon with triangles.  Can you do it with any other regular polygon? You might try a few and fail, but that's not a proof. How do you show it's impossible?  Here's a key observation. In any tiling the angles meeting at a corner must add up to a full circle, namely, . If all the shapes meeting at a corner have the same angle, this means that the angle must evenly divide . That works with triangles ( ), squares ( ) and hexagons ( ). But it won't work with any other regular polygon.  Remember from that the angles in an -gon must add up to . If all angles are the same, then they are each When does this evenly go into ? For the pentagon, this is , which you can arithmetically check doesn't work. For many sides there's a quick trick to see at once they all don't work. Namely, these angles are all larger than , the angle for the hexagon. And , so that is precisely the angle for which three shapes meet at a corner. On the other side, these angles are all less than , the angle measure of a straight line. And , so that would be splitting the full circle into two equal pieces. So for sides their angles split into a fraction between and many pieces. That's not a whole number of pieces, so you can't make them fit!  This maybe seems boring—there's only three possibilities. But from these three we can get more. One way is by stretching out tiles. Imagine taking all your squares and stretching them out to be rectangles. The squares fit together, so the rectangles will as well. You can do the same to triangles or hexagons. If you stretch all the tiles the same way, they'll still fit together. With rectangles you also can translate where they attach to each other to create more patterns.   A grid of rectangles tiling the plane in a brick-like pattern. That is, there are rows of rectangles with the rows offset from each other. In that way, the vertical edges between rectangles don't line up across multiple rows.    Similarly, you can create a new tiling by skewing them to affect the angles. Imagine taking a square and pushing the vertical sides so they face diagonally, giving you a rhombus. If you do this to all the squares in a tiling, they'll still fit together, giving you a rhombus tiling. If you both skew and stretch you get a tiling of parallelograms.   Draw two different tilings with parallelograms or rhombuses.   Mathematically, this suffices to produce multiple kinds of tessellations. But artistically they are maybe dull, being confined to simple geometric shapes. There is a way to take these tilings and make them more artistically interesting. Namely, start with your basic shape you are useing to tile the plane. You are going to modify it into a more complicated shape that still tessellates. Cut out a region from one side of the shape and then glue it to the other side that fits in that space in the tiling. In this way the tiles still fit together. You can do this with the other sides as well. If you do this right you can create organic shapes that tessellate. And you can further fill in details in each tile.   A square tile that has been cut up to make a more interesting tessellating shape, like a fat jagged ess-shape. The top and bottom edges are untouched (though you could also cut them up). The left and right edges, represented as dashed lines, were cut up with the same pattern on both sides so the tile still fits together. The design isn't very interesting—some jagged diagonal lines that slash left and right. Someone more artistically sophisticated could make a more interesting design.    An artist known for these tessellations is M. C. Escher. As a homework exercise you look at some of his tessellations and analyze how they come from basic geometric shapes.  There are many other tilings. For example, there's no need to have all shapes in the tessellation be the same. Instead you can use multiple different shapes. For example, if you try to fit just regular octogons together they will leave square gaps. But if you fill those gaps with squares you get a tessellation using octogon and square tiles.  There are many other, yet more sophisticated tilings. As a homework exercise you will research aperiodic tilings, those which have a non-repeating pattern.  "
},
{
  "id": "sec9-tilings-2",
  "level": "2",
  "url": "sec9-tilings.html#sec9-tilings-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tilings "
},
{
  "id": "sec9-tilings-14",
  "level": "2",
  "url": "sec9-tilings.html#sec9-tilings-14",
  "type": "Checkpoint",
  "number": "9.3.1",
  "title": "",
  "body": " Draw two different tilings with parallelograms or rhombuses.  "
},
{
  "id": "sec9-exercises",
  "level": "1",
  "url": "sec9-exercises.html",
  "type": "Section",
  "number": "9.4",
  "title": "Exercises",
  "body": " Exercises    Draw a shape that has rotational symmetry but not reflective symmetry. Draw a shape that has reflective symmetry but not rotational symmetry. For each, identify the symmetry—what rotation, or reflected across what line. Explain why the shape doesn't have the other kind of symmetry.    Explain why any diagonal translation is equivalent to a horizontal translation followed by a vertical translation. Explain how to determine the distance covered by the diagonal translation if you know the distances for the horizontal and vertical components.  A picture is a good place to start, but you should explain what your picture is showing!  If you're struggling with the part about distance, revisit .    Draw a shape whose only symmetry is the identity symmetry. Explain why it has no reflective nor rotational symmetries.    Go outside and find three natural objects that exhibit some kind of symmetry. (That is, human-made objects don't count, but animals, plants, mineral, celestial objects, etc. are all fair game.) Explain what the objects are and what symmetries they have. Do you think the symmetry is just coincidence, or is there a reason they are symmetric? If you like, include pictures of these symmetric objects.  If the symmetry isn't perfect but it's close that's fine. It's unreasonable to expect total mathematical precision in nature.    The circle has infinitely many symmetries; a rotation by any angle is a symmetry and a reflection across any line through the center is a symmetry. Can a polygon have infinitely many symmetries? Explain your answer.  The answer is no.  You need to explain two things: why only a few rotations are symmetries, and why only a few reflections are symmetries. Can you identify which rotations and reflections are allowed?  An alternative approach is to think about vertex labelings, like we did with the triangle.    Look at the symmetries of the triangle, as analyzed in . Determine which single symmetry each of the following is equivalent to. For each give a short explanation. Two rotations in a row.  Three rotations in a row.  A reflection followed by itself again.  Two different reflections in a row.    Some of these you may be able to figure out purely geometrically, which is a fine way to do it. If you're having trouble with geometric reasoning, you can use the label mappings like we did earlier for an alternative method.  This is a common trick in mathematics. A problem might be hard to tackle directly, but if you can transform it into a problem about pushing symbols around you can solve it. This is what algebra is about.    In we analyzed the symmetries of the triangle by looking at how they moved the vertices around. Explain why that idea is by itself not enough to understand symmetries of the square by exhibiting a rearrangement of the vertices of the square which doesn't correspond to a symmetry.  If you're not sure how to start, write down a few shuffling of the four vertices and draw the corresponding shape you get. Remember, there's sides between vertices and , between and , between and , and between and . But there aren't sides between any other pairs of vertices.    The Dutch artist M. C. Escher created prints that explored multiple mathematical ideas, among them tessellation. Look up three tessellations by Escher—such as Crab Canon (1963), Bird Fish (1938), Symmetry Drawing (1948), Symmetry Watercolor 55 Fish (1942), Pegasus (No. 105) (1959), Regular Division of the Plane IV (1957), or any others you find. For your three tessellations, describe the basic geometric shape the tessellation is based on and any rotations or reflections that are applied to make the tiles fit.    Pick a simple quadrilateral which tiles the plane. Cut out that shape from an index card. Cut out from one side and tape to the opposite side to create a shape which forms a tessellation. Use your card as something to trace around to draw multiple interlocked tiles in this tessellation. Include enough shapes to clearly see how they fit together. If you're feeling artistic, draw in the interiors to create a repeated design.    Read the wikipedia page on Penrose tilings . Write a few paragraphs to explain what an aperiodic tiling is and explain an example of a specific aperiodic tiling and how it works.    "
},
{
  "id": "sec9-exercises-2-1",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-1",
  "type": "Exercise",
  "number": "9.4.1",
  "title": "",
  "body": " Draw a shape that has rotational symmetry but not reflective symmetry. Draw a shape that has reflective symmetry but not rotational symmetry. For each, identify the symmetry—what rotation, or reflected across what line. Explain why the shape doesn't have the other kind of symmetry.  "
},
{
  "id": "sec9-exercises-2-2",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-2",
  "type": "Exercise",
  "number": "9.4.2",
  "title": "",
  "body": " Explain why any diagonal translation is equivalent to a horizontal translation followed by a vertical translation. Explain how to determine the distance covered by the diagonal translation if you know the distances for the horizontal and vertical components.  A picture is a good place to start, but you should explain what your picture is showing!  If you're struggling with the part about distance, revisit .  "
},
{
  "id": "sec9-exercises-2-3",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-3",
  "type": "Exercise",
  "number": "9.4.3",
  "title": "",
  "body": " Draw a shape whose only symmetry is the identity symmetry. Explain why it has no reflective nor rotational symmetries.  "
},
{
  "id": "sec9-exercises-2-4",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-4",
  "type": "Exercise",
  "number": "9.4.4",
  "title": "",
  "body": " Go outside and find three natural objects that exhibit some kind of symmetry. (That is, human-made objects don't count, but animals, plants, mineral, celestial objects, etc. are all fair game.) Explain what the objects are and what symmetries they have. Do you think the symmetry is just coincidence, or is there a reason they are symmetric? If you like, include pictures of these symmetric objects.  If the symmetry isn't perfect but it's close that's fine. It's unreasonable to expect total mathematical precision in nature.  "
},
{
  "id": "sec9-exercises-2-5",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-5",
  "type": "Exercise",
  "number": "9.4.5",
  "title": "",
  "body": " The circle has infinitely many symmetries; a rotation by any angle is a symmetry and a reflection across any line through the center is a symmetry. Can a polygon have infinitely many symmetries? Explain your answer.  The answer is no.  You need to explain two things: why only a few rotations are symmetries, and why only a few reflections are symmetries. Can you identify which rotations and reflections are allowed?  An alternative approach is to think about vertex labelings, like we did with the triangle.  "
},
{
  "id": "sec9-exercises-2-6",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-6",
  "type": "Exercise",
  "number": "9.4.6",
  "title": "",
  "body": " Look at the symmetries of the triangle, as analyzed in . Determine which single symmetry each of the following is equivalent to. For each give a short explanation. Two rotations in a row.  Three rotations in a row.  A reflection followed by itself again.  Two different reflections in a row.    Some of these you may be able to figure out purely geometrically, which is a fine way to do it. If you're having trouble with geometric reasoning, you can use the label mappings like we did earlier for an alternative method.  This is a common trick in mathematics. A problem might be hard to tackle directly, but if you can transform it into a problem about pushing symbols around you can solve it. This is what algebra is about.  "
},
{
  "id": "sec9-exercises-2-7",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-7",
  "type": "Exercise",
  "number": "9.4.7",
  "title": "",
  "body": " In we analyzed the symmetries of the triangle by looking at how they moved the vertices around. Explain why that idea is by itself not enough to understand symmetries of the square by exhibiting a rearrangement of the vertices of the square which doesn't correspond to a symmetry.  If you're not sure how to start, write down a few shuffling of the four vertices and draw the corresponding shape you get. Remember, there's sides between vertices and , between and , between and , and between and . But there aren't sides between any other pairs of vertices.  "
},
{
  "id": "sec9-exercises-2-8",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-8",
  "type": "Exercise",
  "number": "9.4.8",
  "title": "",
  "body": " The Dutch artist M. C. Escher created prints that explored multiple mathematical ideas, among them tessellation. Look up three tessellations by Escher—such as Crab Canon (1963), Bird Fish (1938), Symmetry Drawing (1948), Symmetry Watercolor 55 Fish (1942), Pegasus (No. 105) (1959), Regular Division of the Plane IV (1957), or any others you find. For your three tessellations, describe the basic geometric shape the tessellation is based on and any rotations or reflections that are applied to make the tiles fit.  "
},
{
  "id": "sec9-exercises-2-9",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-9",
  "type": "Exercise",
  "number": "9.4.9",
  "title": "",
  "body": " Pick a simple quadrilateral which tiles the plane. Cut out that shape from an index card. Cut out from one side and tape to the opposite side to create a shape which forms a tessellation. Use your card as something to trace around to draw multiple interlocked tiles in this tessellation. Include enough shapes to clearly see how they fit together. If you're feeling artistic, draw in the interiors to create a repeated design.  "
},
{
  "id": "sec9-exercises-2-10",
  "level": "2",
  "url": "sec9-exercises.html#sec9-exercises-2-10",
  "type": "Exercise",
  "number": "9.4.10",
  "title": "",
  "body": " Read the wikipedia page on Penrose tilings . Write a few paragraphs to explain what an aperiodic tiling is and explain an example of a specific aperiodic tiling and how it works.  "
},
{
  "id": "sec10-congruent",
  "level": "1",
  "url": "sec10-congruent.html",
  "type": "Section",
  "number": "10.1",
  "title": "Congruent triangles",
  "body": " Congruent triangles  Most of this chapter will be focused on the question when are two triangles the same? One reason for this is that triangles are a top three most important shape (only the circle and the rectangle compete). Another is that triangles are in the sweet spot where there's enough variety that you can make useful inferences but not so much complexity that everything is hopeless. Compare to other shapes. Some are too simple; for example, all circles look the same just zoomed in or out. Others are too wild; it's hopeless to try to classify all possible species of heptakaidecagons ( -gons). Triangles are just right.  Before we talk about how to tell when two triangles are the same, we need to make clear what we mean by two things being the same. There's more than one way to answer this question. Two answers are mathematically useful. We will look at them in this section and the next.  One answer to this question is, if you move a shape around it's the same shape. If you rotate it then it's the same shape. If you reflect it then it's still the same shape. As long as what you are doing isn't stretching it or warping it or changing distances then it's the same shape. This idea can be phrased in mathematician language.  Congruency  Two triangles are congruent if one shape can be sent to the other by a Euclidean transformation. That is, two triangles are congruent if doing some series of translations, reflections, and rotations makes the two shapes exactly overlap.   Note that stretching and resizing is not allowed. As a consequence, two congruent shapes will always have the same area. This immediately gives us an easy criterion to check for when two shapes are different (meaning non-congruent).   If two shapes have different area then they are non-congruent.   Caution! Two shapes can have the same area but not be congruent.   Come up with two non-congruent triangles which both have an area of .  If you're not sure how to tell that two triangles are congruent, peak ahead to the next theorem.   The following is a useful way to think about what congruence means for triangles.   Suppose two triangles are congruent. Then they have the same angles and side lengths. That is, there is a way to label their angles A,B,C and and opposite sides and so that: The corresponding angles are the same: , , and .  The corresponding sides have the same length: , , and .  The converse is also true. If two triangles have the same angles and sides then the two triangles are congruent.   Two congruent isosceles right triangles. The three corresponding sides are labeled and . Note that in this case there is more than one way the label could be done; these are isoceles triangles, so we could swap labels on two equal sides and still have everything line up between the two triangles.     For the first statement, translations, rotations, and reflections don't change angles nor distances. For the converse, if two triangles have the same angles and sides then you can make them exactly overlap. Namely, translate, reflect, and\/or rotate as necessary to make the angles and exactly overlap, with and both on, say, the left side of the angle. Because the side lengths are the same the angles and and and will exactly overlap. So the three vertices are in the locations, so the triangles exactly overlap.   One thing this theorem says if that you know all six data about a triangle—the three side lengths and the three angles—then that data uniquely specifies the triangle. Any triangle with the same data must be the same (congruent).  Surely you don't need all six data. If you know two angles, then the third is determined. This is because the three angles must add up to . For example, if you know a triangle has angles of measure and then you can calculate the remaining angle is . So five data is enough to uniquely specify a triangle.  Can you go lower? How few of these six data are needed to identify a triangle?  It turns that, with a couple exceptions, any specification of three data is enough to identify a triangle up to congruence.  It's helpful to have a notation for talking about data to specify a triangle.   We can specify a triangle by (most) three letter sequences of A s and S s. A stands for angle and S stands for side. This specification starts at an angle or a side, depending on the first letter, and proceeds either counterclockwise or clockwise. As you go around the second then the third letter specify either the next angle or side length.  For example, AAS specifies that you know an angle, then the next angle, then side, all going in the same direction from the start. Or SSS specifies that you know one side, then the next, then the next (that is, you know all three sides).    Because order doesn't matter—you can go either counterclockwise or clockwise—if you reverse the order of the letters you get the same specification. This only applies to two cases: AAS is the same specification as SAA and ASS is the same specification as SSA. All other specifications are palindromes, so reversing the order gives the same thing. Knowing this redundancy, there are six different specifications.  Specifying triangles up to congruence  The following data each specify a triangle up to congruence. SSS  SAS  SAA  ASA The following data do not specify a triangle up to congruence. AAA  ASS   Most of these can be explained by drawing pictures. I will give you two positive cases and the negative cases, with the remanining two positive cases left as homework.  Let's start with the easiest. AAA doesn't specify a triangle up to congruence because you can scale a triangle to be larger or smaller and not change the angles.  Now let's do a positive instance, namely SAS. The data that SAS gives is two fixed lengths of line with a fixed angle between them. If you draw this, it is immediate that there's only one possible triangle they could form, namely the one you get by connecting the opposite ends of the line segments.   SAS data specifying a triangle up to congruence. An explained in the preceeding paragraph, two fixed lines with a fixed angle are drawn. There's only one possible third side, which is represented as a dashed line between the opposite endpoints of the two fixed lines.    Next let's do SSS. You can think of what this tells you this way. You know the length of one side, which you may as well fix as the reference point for the other two sides. You don't know the angles for the other two sides, but you know their lengths. So you can draw circles at the vertices of your fixed side representing where those other sides can point. It's a standard fact about plane geometry that two circles intersect in at most two points. Those two points are the possible third vertex for the triangle. That may look like there's two possible triangles. But whichever you pick, they are reflections of each other. So they are the same (meaning congruent).   SSS data specifying a triangle up to congruence. One side is fixed in space. The possible endpoints for the other two are represented by circles centered at each endpoint of the fixed side. Radii are drawn to meet at one of the two points the circle intersect, above the fixed line. The second point of intersection is the mirror of this one below the circle, so if we had instead connected to there we'd get a congruent triangle.    The remaining two positive cases—ASA and AAS—are left as homework for you. They can be handled by similar geometric reasoning. Think about what the data tells you and draw a corresponding picture.  To close this out, let's do the negative case of ASS. I saved it for last because it's the trickiest. We know an angle and in succession two side lengths coming out from it. But we are missing one side length attached to that angle. Fix the angle as our reference point for everything else. We can represent the possible missing side lengths as a ray coming out from the angle. The side we know adjacent to the angle has no choice on where to go; it's a known angle from our reference point and a known distance. The second side, however, we don't know where to place. We know its length but not which direction it's going. It must, however, connect to the ray representing the possible lengths for the third side. But we run into a problem here, as there can be more than one place it hits that ray.   ASS data that admits two possible triangles. As described in the preceeding paragraph, the direction of the unknown side is shown as a dashed ray going out from the fixed angle. The side adjacent to the fixed angle has its location entirely fixed. The next side is swinging from it, as represented by a circle showing its possbile locations. Two of those locations intersect the dashed ray, with the corresponding possible sides shown in red and blue.    The two possible triangles are clearly not congruent; the angles are different. As such, this data did not uniquely determine a triangle.  Except, sometimes it does. If the known angle is right or obtuse, then there is only one possible place to attach to the third side. So sometimes ASS does uniquely specify a triangle.   ASS data for a right triangle. Very similar to the previous picture. But unlike it there's only one place the circle for possible second side locations intersects the ray for possible third side locations. The corresponding location of the second side is drawn there in red.    Note that the special case in this picture is what you are facing if you know one leg and the hypotenuse of a right triangle. In this case you can use the Pythagorean theorem to find the length of the remaining leg, and this picture confirms that there is a unique thing you are solving for.    That one of the negative cases is ASS lends itself to mnemonics. This is especially when teaching children, who almost always will giggle at their teaching saying that word. Here's one of many possible mnemonics to remember which cases are negative: AAA video games are ASS.   It should be noted that in the SSS case, some triples of side lengths don't specify any triangle. Namely, the side lengths of a triangle must obey what's known as the triangle inequality : any side length must be less than the sum of the other two. (Think of it this way. You can take a direct route—one side of the triangle—or a detour—go along the other two lines. The triangle inequality says you can't get a shorter route by taking a detour.) So if one side is too much larger than the other two then you aren't specifying any triangle at all. For example, the side lengths don't specify a triangle at all, because is too large to fit the other two sides on.  Unlike the ASS case, however, the SSS case will never admit more than one possible triangle. It's either a unique triangle, or else it doesn't specify any triangle at all.   A failure of an SSS triple of data to specify a triangle. The long horizontal side labeled with a length of is simply too big for the arms of length and to touch. You can see by the dashed circles representing their possible endpoints that no angle will do to get them close enough. They are doomed to be forever apart, like star-crossed lovers.    You should be familiar with using partial information about a triangle to know you can get the rest of the data from the Pythagorean theorem. If you know you're dealing with a right triangle—that is, you know one angle—and you know two sides, you can calculate the remaining side. Indeed, using the law of sines and law of cosines from trigonemetry, you can do a similar process with non-right triangles. This process requires, of course, that you know trigonometry, which is a more difficult area of mathematics than what we are looking at. So we won't talk about how you actually calculate the missing info. Suffice it to say, the four triples of data SSS, SAS, ASA, and SAA are enough to both uniquely specify a triangle and allow you to calculate the missing information. It's not just a theoretical fact, it's also a practical one.  In general in mathematics, the questions of does an answer exist? and if so, can you calculate it? are not the same. Often answering the second question is much harder than answering the first and requires more advanced techniques. This is one reason mathematics can be frustrating; it is easy to run into questions without having the tools to answer them.   "
},
{
  "id": "sec10-congruent-5",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-5",
  "type": "Definition",
  "number": "10.1.1",
  "title": "Congruency.",
  "body": "Congruency  Two triangles are congruent if one shape can be sent to the other by a Euclidean transformation. That is, two triangles are congruent if doing some series of translations, reflections, and rotations makes the two shapes exactly overlap.  "
},
{
  "id": "sec10-congruent-7",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-7",
  "type": "Theorem",
  "number": "10.1.2",
  "title": "",
  "body": " If two shapes have different area then they are non-congruent.  "
},
{
  "id": "sec10-congruent-9",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-9",
  "type": "Checkpoint",
  "number": "10.1.3",
  "title": "",
  "body": " Come up with two non-congruent triangles which both have an area of .  If you're not sure how to tell that two triangles are congruent, peak ahead to the next theorem.  "
},
{
  "id": "sec10-congruent-11",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-11",
  "type": "Theorem",
  "number": "10.1.4",
  "title": "",
  "body": " Suppose two triangles are congruent. Then they have the same angles and side lengths. That is, there is a way to label their angles A,B,C and and opposite sides and so that: The corresponding angles are the same: , , and .  The corresponding sides have the same length: , , and .  The converse is also true. If two triangles have the same angles and sides then the two triangles are congruent.   Two congruent isosceles right triangles. The three corresponding sides are labeled and . Note that in this case there is more than one way the label could be done; these are isoceles triangles, so we could swap labels on two equal sides and still have everything line up between the two triangles.     For the first statement, translations, rotations, and reflections don't change angles nor distances. For the converse, if two triangles have the same angles and sides then you can make them exactly overlap. Namely, translate, reflect, and\/or rotate as necessary to make the angles and exactly overlap, with and both on, say, the left side of the angle. Because the side lengths are the same the angles and and and will exactly overlap. So the three vertices are in the locations, so the triangles exactly overlap.  "
},
{
  "id": "sec10-congruent-17",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-17",
  "type": "Definition",
  "number": "10.1.5",
  "title": "",
  "body": " We can specify a triangle by (most) three letter sequences of A s and S s. A stands for angle and S stands for side. This specification starts at an angle or a side, depending on the first letter, and proceeds either counterclockwise or clockwise. As you go around the second then the third letter specify either the next angle or side length.  For example, AAS specifies that you know an angle, then the next angle, then side, all going in the same direction from the start. Or SSS specifies that you know one side, then the next, then the next (that is, you know all three sides).   "
},
{
  "id": "sec10-congruent-19",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-19",
  "type": "Theorem",
  "number": "10.1.6",
  "title": "Specifying triangles up to congruence.",
  "body": "Specifying triangles up to congruence  The following data each specify a triangle up to congruence. SSS  SAS  SAA  ASA The following data do not specify a triangle up to congruence. AAA  ASS   Most of these can be explained by drawing pictures. I will give you two positive cases and the negative cases, with the remanining two positive cases left as homework.  Let's start with the easiest. AAA doesn't specify a triangle up to congruence because you can scale a triangle to be larger or smaller and not change the angles.  Now let's do a positive instance, namely SAS. The data that SAS gives is two fixed lengths of line with a fixed angle between them. If you draw this, it is immediate that there's only one possible triangle they could form, namely the one you get by connecting the opposite ends of the line segments.   SAS data specifying a triangle up to congruence. An explained in the preceeding paragraph, two fixed lines with a fixed angle are drawn. There's only one possible third side, which is represented as a dashed line between the opposite endpoints of the two fixed lines.    Next let's do SSS. You can think of what this tells you this way. You know the length of one side, which you may as well fix as the reference point for the other two sides. You don't know the angles for the other two sides, but you know their lengths. So you can draw circles at the vertices of your fixed side representing where those other sides can point. It's a standard fact about plane geometry that two circles intersect in at most two points. Those two points are the possible third vertex for the triangle. That may look like there's two possible triangles. But whichever you pick, they are reflections of each other. So they are the same (meaning congruent).   SSS data specifying a triangle up to congruence. One side is fixed in space. The possible endpoints for the other two are represented by circles centered at each endpoint of the fixed side. Radii are drawn to meet at one of the two points the circle intersect, above the fixed line. The second point of intersection is the mirror of this one below the circle, so if we had instead connected to there we'd get a congruent triangle.    The remaining two positive cases—ASA and AAS—are left as homework for you. They can be handled by similar geometric reasoning. Think about what the data tells you and draw a corresponding picture.  To close this out, let's do the negative case of ASS. I saved it for last because it's the trickiest. We know an angle and in succession two side lengths coming out from it. But we are missing one side length attached to that angle. Fix the angle as our reference point for everything else. We can represent the possible missing side lengths as a ray coming out from the angle. The side we know adjacent to the angle has no choice on where to go; it's a known angle from our reference point and a known distance. The second side, however, we don't know where to place. We know its length but not which direction it's going. It must, however, connect to the ray representing the possible lengths for the third side. But we run into a problem here, as there can be more than one place it hits that ray.   ASS data that admits two possible triangles. As described in the preceeding paragraph, the direction of the unknown side is shown as a dashed ray going out from the fixed angle. The side adjacent to the fixed angle has its location entirely fixed. The next side is swinging from it, as represented by a circle showing its possbile locations. Two of those locations intersect the dashed ray, with the corresponding possible sides shown in red and blue.    The two possible triangles are clearly not congruent; the angles are different. As such, this data did not uniquely determine a triangle.  Except, sometimes it does. If the known angle is right or obtuse, then there is only one possible place to attach to the third side. So sometimes ASS does uniquely specify a triangle.   ASS data for a right triangle. Very similar to the previous picture. But unlike it there's only one place the circle for possible second side locations intersects the ray for possible third side locations. The corresponding location of the second side is drawn there in red.    Note that the special case in this picture is what you are facing if you know one leg and the hypotenuse of a right triangle. In this case you can use the Pythagorean theorem to find the length of the remaining leg, and this picture confirms that there is a unique thing you are solving for.   "
},
{
  "id": "sec10-congruent-21",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triangle inequality "
},
{
  "id": "sec10-congruent-24",
  "level": "2",
  "url": "sec10-congruent.html#sec10-congruent-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "law of sines law of cosines "
},
{
  "id": "sec10-similar",
  "level": "1",
  "url": "sec10-similar.html",
  "type": "Section",
  "number": "10.2",
  "title": "Similar triangles",
  "body": " Similar triangles  At the beginning of the previous section I promised you we would look at two different notions of when triangles are the same. Last section we looked at one notion, congruence. In this section we look at the second, called similarity.  Remember that congruence captured the idea of a shape being the same even if you move it around. If you take a triangle and translate it, rotate it, or reflect it then it's still the same triangle. Same lengths, same angles, same everything, just in a different place. Similarity takes that idea and says, what if you could also zoom in or out.  Scalings  A uniform scaling is a transformation of a shape that enlarges or shrinks it the same amount in all directions. This is as opposed to a (non-uniform) scaling , which only scales in one direction. The scale factor is the amount by which all distances are scaled. For example, a uniform scaling with a scale factor of would triple the size of the shape in all directions. while a non-uniform scaling in a horizontal direction would scale the shape by only in the left-right direction.  You also see the word dilation used for a scaling with a scale factor and the word contraction used for a scaling with scale factor . We allow scaling by a factor of —that is, the do nothing scaling that doesn't change sizes.   A cloud shape being scaled both uniformly and non-uniformly. The uniform scaling, by a factor of , is shown to the right. This amounts to blowing up it to be twice as big in every direction. There are two non-unform scaling, both by a factor of . One, a vertical scaling, is shown above right. The original cloud was a little wider than it was tall, and this scaling reverses that comparison. The other, a horizontal scaling, is below right. It stretches out the cloud to be even more wider than it is tall. You can think of the uniform scaling, appropriately seen in between the horizontal and vertical scalings, as the combination of the two.      One way to think about a uniform scaling is that it is a combination of two non-uniform scalings by the same scaling factor. If you scale horizontally by, say, a factor of and then scale vertically by that same factor, it is equivalent to a uniform scaling by a factor of . The reason you need to combine two (non-uniform) scalings in two perpendicular directions is that these shapes live in two dimensional space: one scaling for each dimension. If you wanted to talk about scalings in three dimensional space you'd need three non-uniform scalings together to make up a uniform scaling. And similarly for more dimensions, though this gets difficult to visualize.  Scaling can also be understood by thinking about its affect on area. A non-uniform scaling by a factor of will scale area by . Thus, a uniform scaling by a factor of will scale area by , because it amounts to scaling by twice in two different directions.  Similar triangles  A similarity is a transformation that consists of a sequence of uniform scalings, translations, rotations, or reflections. Two triangles are similar if you can transform one into the other by means of a similarity. That is, if you take a triangle and translate, rotate, reflection, and\/or uniformly scale it, the result is similar to the triangle you started with.   Three similar isosceles right triangles. One is larger than the other. The angles between the three triangles all match but the sides are different sizes. The angles are marked so you can see the right angle in each triangle as well as the angles.       This definition captures the idea that two triangles look the same, but maybe rotated, moved about, reflected, or zoomed in\/out.  Are congruent triangles similar? That is, if two triangles have the same size do we still count them as similar? Or do we only want to count them when they're different sizes?  The mathematician's answer is yes, triangles that are the same size are still counted as similar. In most cases, they won't be. But we want to include the edge case. In general, mathematicians like to include edge cases in definitions because it makes things easier to talk about. For example, it makes facts like the following nicer to state.   If two triangles are similar then they have the same angles. That is, there is a way to label their angles and so that , , and . Conversely, if two triangles have the same angles then they are similar.  For the first if-then : Because none of the transformations in a similarity—uniform scalings, translations, rotations, reflections—change angles. For the converse do like what we did with congruence. Use translations, reflections, and\/or rotations to make the angles and exactly line up with the other two angles each on the same side. Then rescale so the side lengths are the same to make the triangles overlap exactly.   Compare to the result about congruence, namely that two triangles are congruent if and only if their angles and sides are the same. Similarity is a less stringent notion of sameness, where only the angles have to be the same.  It might seem that this notion of sameness isn't restrictive enough to be helpful—what good is it to know that two triangles have the same angles? But in fact we get some good information out of triangles being similar.   If two triangles are similar then the ratios of side lengths are the same. That is, if the sides correspond, respectively, to the sides on the other triangle, then any ratio of sides on the left is the same as the corresponding ratio of sides on the right. For example,   Let be the scaling factor of the uniform scaling to transform the first triangle to the other. Then, for example, and . Thus,    Indeed, this ratio facts holds not just for side lengths but any pair of measurements you can make of the triangles. For example, if is the scaling factor and is the height of one triangle then the height of the other triangle will be .   Shadows are cast at the same angle, so that triangles made from a vertical object and its shadow on horizontal ground are all similar. You know that you are exactly feet tall and your friend measures that your shadow is feet long. A flagpole casts a shadow you measure to be feet long. How tall is the flagpole?   A human and a flagpole casting shadows on the ground. Imagining a line drawn from the top of the human (respectively flagpole) diagonally down to the edge of the shadow these form similar right triangles. Both the human and the flagpole are depicted as vertical lines. This is to emphasize that all that matters here is their height—geometrically, a simple vertical line segment—and not because a more accurate depiction would challenge the artistically disinclined mathematician writing this textbook. The shadows are grey ellipses. I nailed them.     Let denote the height of the flagpole. Using the fact that the triangles are similar you know that Solving this equation for you get feet for the height of the flagpole.   This fact about similar triangles is one of the key truths on which the mathematical field of trigonometry is built. This field is the study of circles, triangles, and their angles. If two right triangles have the same (non-right) angle , then they have the same ratios of side lengths. Thus we can think of ratios like as functions of the angle . (For this ratio, the function is the sine function.) We can then study these functions and use them to get information about triangles and circles.  One place similar triangle show up is when two triangles share an angle but one is a shrunken\/enlarged copy of the other.   A conical vat has a depth of meters and a radius at the top of meters. It is filled with water to a depth of meters. What is the volume of water?   An inverted cone. Dashed lines label the height— —and radius at the top— . Placed inside the inverted cone is a smaller blue cone with the same point, representing the water. Off to the side a ruler marks its height as .     If you draw the view of the vat and water from the side it looks like two similar triangles. Thus the ratio of the depth to the radius must be the same for both the vat and the water.   The cone from the previous image, but seen straight on so that it looks like an inverted triangle with a smaller similar blue triangle inside. The height of the big triangle is labeled , the height of the blue triangle is labeled . Half the length of the top of the big triangle, corresponding to the radius of the top of the cone, is labeled . Similarly, half the top of the blue triangle is labeled .     Let denote the radius of the cone of water. By similar triangles, we know Solving for we get meters. Now knowing the radius and height of the water cone we can apply the formula for the volume of a cone. Namely, the volume is cubic meters.    An hourglass takes the shape of two pyramids touching at their tips, each having a square base. At a moment in time, the sand in the top pyramid has a depth of inches. If the glass pyramid has a depth of inches and a side length at the top of inches what is the volume of sand in the top of the hourglass?  Draw a picture! A two dimensional cross section will be more helpful than just a three dimensional sketch.   To pick things apart, there's two ideas we're using here. One is that if a shape A is a uniform scaling of another shape B by a factor of then all measurements of A are times the corresponding measurement of B. In particular, this means that ratios between two measurements are the same across shapes.  The second idea is that for triangles, having the same angles is a sufficient condition to guarantee similarity. In general, it might not be obvious that two shapes are similar. But with triangles there's an easy way to check, and it shows up often. A case that shows up a lot is when one triangle is an initial piece of a larger triangle, sharing a common vertex. A bit more formally, consider two triangles sharing a vertex with the same angle and their respective sides opposite the angle are parallel. Then elementary plane geometry says all three angles are the same between the triangles, so they are similar.   Two rays coming out diagonally down from a point. This point forms one vertex of two similar triangles, each of which is formed by drawing a horizontal line between the two rays. The two triangles have the same angles, so they are similar.    On the other hand, this phenomenon doesn't happen with, for instance, rectangles. If one rectangle is an initial segment of another then they won't be similar.   Two rectangles. The smaller, actually a square, is an initial left segment of the other. The two rectangles share their left side and their tops and bottoms are parts of the same ray. The rectangles are not similar. You can tell because one is a square but the other is not.    That being said, similarity is still a powerful concept in general. It just doesn't happen to be so easy to notice.  "
},
{
  "id": "sec10-similar-4",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-4",
  "type": "Definition",
  "number": "10.2.1",
  "title": "Scalings.",
  "body": "Scalings  A uniform scaling is a transformation of a shape that enlarges or shrinks it the same amount in all directions. This is as opposed to a (non-uniform) scaling , which only scales in one direction. The scale factor is the amount by which all distances are scaled. For example, a uniform scaling with a scale factor of would triple the size of the shape in all directions. while a non-uniform scaling in a horizontal direction would scale the shape by only in the left-right direction.  You also see the word dilation used for a scaling with a scale factor and the word contraction used for a scaling with scale factor . We allow scaling by a factor of —that is, the do nothing scaling that doesn't change sizes.   A cloud shape being scaled both uniformly and non-uniformly. The uniform scaling, by a factor of , is shown to the right. This amounts to blowing up it to be twice as big in every direction. There are two non-unform scaling, both by a factor of . One, a vertical scaling, is shown above right. The original cloud was a little wider than it was tall, and this scaling reverses that comparison. The other, a horizontal scaling, is below right. It stretches out the cloud to be even more wider than it is tall. You can think of the uniform scaling, appropriately seen in between the horizontal and vertical scalings, as the combination of the two.     "
},
{
  "id": "sec10-similar-7",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-7",
  "type": "Definition",
  "number": "10.2.2",
  "title": "Similar triangles.",
  "body": "Similar triangles  A similarity is a transformation that consists of a sequence of uniform scalings, translations, rotations, or reflections. Two triangles are similar if you can transform one into the other by means of a similarity. That is, if you take a triangle and translate, rotate, reflection, and\/or uniformly scale it, the result is similar to the triangle you started with.   Three similar isosceles right triangles. One is larger than the other. The angles between the three triangles all match but the sides are different sizes. The angles are marked so you can see the right angle in each triangle as well as the angles.      "
},
{
  "id": "sec10-similar-11",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-11",
  "type": "Theorem",
  "number": "10.2.3",
  "title": "",
  "body": " If two triangles are similar then they have the same angles. That is, there is a way to label their angles and so that , , and . Conversely, if two triangles have the same angles then they are similar.  For the first if-then : Because none of the transformations in a similarity—uniform scalings, translations, rotations, reflections—change angles. For the converse do like what we did with congruence. Use translations, reflections, and\/or rotations to make the angles and exactly line up with the other two angles each on the same side. Then rescale so the side lengths are the same to make the triangles overlap exactly.  "
},
{
  "id": "sec10-similar-14",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-14",
  "type": "Theorem",
  "number": "10.2.4",
  "title": "",
  "body": " If two triangles are similar then the ratios of side lengths are the same. That is, if the sides correspond, respectively, to the sides on the other triangle, then any ratio of sides on the left is the same as the corresponding ratio of sides on the right. For example,   Let be the scaling factor of the uniform scaling to transform the first triangle to the other. Then, for example, and . Thus,   "
},
{
  "id": "sec10-similar-16",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-16",
  "type": "Checkpoint",
  "number": "10.2.5",
  "title": "",
  "body": " Shadows are cast at the same angle, so that triangles made from a vertical object and its shadow on horizontal ground are all similar. You know that you are exactly feet tall and your friend measures that your shadow is feet long. A flagpole casts a shadow you measure to be feet long. How tall is the flagpole?   A human and a flagpole casting shadows on the ground. Imagining a line drawn from the top of the human (respectively flagpole) diagonally down to the edge of the shadow these form similar right triangles. Both the human and the flagpole are depicted as vertical lines. This is to emphasize that all that matters here is their height—geometrically, a simple vertical line segment—and not because a more accurate depiction would challenge the artistically disinclined mathematician writing this textbook. The shadows are grey ellipses. I nailed them.     Let denote the height of the flagpole. Using the fact that the triangles are similar you know that Solving this equation for you get feet for the height of the flagpole.  "
},
{
  "id": "sec10-similar-17",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometry sine "
},
{
  "id": "sec10-similar-19",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-19",
  "type": "Checkpoint",
  "number": "10.2.6",
  "title": "",
  "body": " A conical vat has a depth of meters and a radius at the top of meters. It is filled with water to a depth of meters. What is the volume of water?   An inverted cone. Dashed lines label the height— —and radius at the top— . Placed inside the inverted cone is a smaller blue cone with the same point, representing the water. Off to the side a ruler marks its height as .     If you draw the view of the vat and water from the side it looks like two similar triangles. Thus the ratio of the depth to the radius must be the same for both the vat and the water.   The cone from the previous image, but seen straight on so that it looks like an inverted triangle with a smaller similar blue triangle inside. The height of the big triangle is labeled , the height of the blue triangle is labeled . Half the length of the top of the big triangle, corresponding to the radius of the top of the cone, is labeled . Similarly, half the top of the blue triangle is labeled .     Let denote the radius of the cone of water. By similar triangles, we know Solving for we get meters. Now knowing the radius and height of the water cone we can apply the formula for the volume of a cone. Namely, the volume is cubic meters.  "
},
{
  "id": "sec10-similar-20",
  "level": "2",
  "url": "sec10-similar.html#sec10-similar-20",
  "type": "Checkpoint",
  "number": "10.2.7",
  "title": "",
  "body": " An hourglass takes the shape of two pyramids touching at their tips, each having a square base. At a moment in time, the sand in the top pyramid has a depth of inches. If the glass pyramid has a depth of inches and a side length at the top of inches what is the volume of sand in the top of the hourglass?  Draw a picture! A two dimensional cross section will be more helpful than just a three dimensional sketch.  "
},
{
  "id": "sec10-shapes",
  "level": "1",
  "url": "sec10-shapes.html",
  "type": "Section",
  "number": "10.3",
  "title": "Other shapes",
  "body": " Other shapes  The previous two sections focused on triangles. The concepts of congruence and similarity make sense for other shapes. Let's start by reiterating the two definitions but not restricting them to triangles.  Congruence and similarity  Two shapes are congruent if one can be transformed into the other by a Euclidean transformation—a sequence of translations, rotations, and\/or reflections. Two shapes are similar if one can be transformed into the other by a similarity—a sequence of uniform scalings, translations, rotations, and\/or reflections.   For some shapes, such as circles, these are trivial concepts because there's not enough diversity for how the shapes can look.   Any two circles are similar. Two circles are congruent if and only if they have the same radius.  If you have two circles, a translation moves one so that their centers are the same point. If they have the same radius, they exactly overlap. If not, a uniform rescaling makes them exactly overlap.   You can think of this fact like this. If you are okay with zooming in or out, then any two circles look the same. If you don't want to allow zooming, then two circles look the same only when they have the same radius. That is, the radius of a circle determines everything about a circle and there is no information beyond the radius. Contrast to triangles, which require multiple data to specify.   Explain why any two squares are similar. When are two squares congruent?  This is very similar to circles.   The same is true for regular polygons of any number of sides, as you will explain for homework.  For other shapes, these aren't useful concepts because there's too many possibilities for how the shapes can look. Nonetheless we will say what we can.  Let's start with an observation. If two shapes are similar, then they have the same number of sides. Moreover, they have the same number of curved sides and same number of straight sides. This is because none of the transformations which compose a similarity—namely uniform scalings, translations, rotations, and reflections—can create a bend or corner. The converse is badly false. If you draw two random shapes with the same number of sides they almost certainly will not be similar.   Draw two random pentagons. Explain why they aren't similar.   Another observation: If two shapes are similar then they have the same angles. That is, there is a way to label the angles and in order either clockwise or counterclockwise so that , , and so on. This is because the transformations which comprise a similarity cannot change angles.  With triangles, the converse was true. Triangles with the same angles are similar. This isn't the case in general. For example, a square and a (non-square) rectangle have the same angles but aren't similar.  Similarly, if two shapes are congruent then they have the same angles and the same sides. This is because Euclidean transformations cannot change angles nor distances. That is, there is a way to label the angles and and sides and in order either clockwise or counterclockwise so that , , , , and so on.  Similarity is a useful concept because knowing one shape is an enlarged version of another gives you information about its measurements.   Suppose a shape A is a uniform scaling of shape B by a factor of . Then any one dimensional measurement of A, for example height or perimeter, is times the corresponding measurement of B. And any two dimensional measurement of A, for example area, is times the corresponding measurement of .    A genie tells you that the area of a regular pentagon with side length is Without knowing how the genie came up with that complicated formula, figure out the area of a regular pentagon with side length .  Regular pentagons are all similar, so the one with side length is a uniform scaling of the one with side length by a factor of . Thus we simply need to multiply the area by :    On this topic it's also worth noting the affect of non-uniform scalings. Suppose you non-uniformly scale a shape by a factor of . If a one dimensional measurement is entirely in the direction of the scaling then it is multiplied by . If the measurement is entirely perpendicular to the direction of the scaling then it doesn't change. If it's in between, then it's changed by an amount between and , but it's not simple to determine the exact value. On the other hand, the area of the shape is scaled by .   You can think of any rectangle as coming from two non-uniform scalings of the unit square with side lengths . Namely, a rectangle with width and height came from the unit square by doing a horizontal scaling by a factor of and a vertical scaling by a factor of . Note that the horizontal scaling doesn't affect the length of the vertical side and the vertical scaling doesn't affect the length of the horizontal side.  Knowing that the area of the unit square is , you can get the formula for the area of this rectangle. Namely, the area is scaled by and by , for a total scaling of . Since the starting area was , the area of the rectangle is .   "
},
{
  "id": "sec10-shapes-3",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-3",
  "type": "Definition",
  "number": "10.3.1",
  "title": "Congruence and similarity.",
  "body": "Congruence and similarity  Two shapes are congruent if one can be transformed into the other by a Euclidean transformation—a sequence of translations, rotations, and\/or reflections. Two shapes are similar if one can be transformed into the other by a similarity—a sequence of uniform scalings, translations, rotations, and\/or reflections.  "
},
{
  "id": "sec10-shapes-5",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-5",
  "type": "Theorem",
  "number": "10.3.2",
  "title": "",
  "body": " Any two circles are similar. Two circles are congruent if and only if they have the same radius.  If you have two circles, a translation moves one so that their centers are the same point. If they have the same radius, they exactly overlap. If not, a uniform rescaling makes them exactly overlap.  "
},
{
  "id": "sec10-shapes-7",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-7",
  "type": "Checkpoint",
  "number": "10.3.3",
  "title": "",
  "body": " Explain why any two squares are similar. When are two squares congruent?  This is very similar to circles.  "
},
{
  "id": "sec10-shapes-11",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-11",
  "type": "Checkpoint",
  "number": "10.3.4",
  "title": "",
  "body": " Draw two random pentagons. Explain why they aren't similar.  "
},
{
  "id": "sec10-shapes-16",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-16",
  "type": "Theorem",
  "number": "10.3.5",
  "title": "",
  "body": " Suppose a shape A is a uniform scaling of shape B by a factor of . Then any one dimensional measurement of A, for example height or perimeter, is times the corresponding measurement of B. And any two dimensional measurement of A, for example area, is times the corresponding measurement of .  "
},
{
  "id": "sec10-shapes-17",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-17",
  "type": "Checkpoint",
  "number": "10.3.6",
  "title": "",
  "body": " A genie tells you that the area of a regular pentagon with side length is Without knowing how the genie came up with that complicated formula, figure out the area of a regular pentagon with side length .  Regular pentagons are all similar, so the one with side length is a uniform scaling of the one with side length by a factor of . Thus we simply need to multiply the area by :   "
},
{
  "id": "sec10-shapes-19",
  "level": "2",
  "url": "sec10-shapes.html#sec10-shapes-19",
  "type": "Example",
  "number": "10.3.7",
  "title": "",
  "body": " You can think of any rectangle as coming from two non-uniform scalings of the unit square with side lengths . Namely, a rectangle with width and height came from the unit square by doing a horizontal scaling by a factor of and a vertical scaling by a factor of . Note that the horizontal scaling doesn't affect the length of the vertical side and the vertical scaling doesn't affect the length of the horizontal side.  Knowing that the area of the unit square is , you can get the formula for the area of this rectangle. Namely, the area is scaled by and by , for a total scaling of . Since the starting area was , the area of the rectangle is .  "
},
{
  "id": "sec10-exercises",
  "level": "1",
  "url": "sec10-exercises.html",
  "type": "Section",
  "number": "10.4",
  "title": "Exercises",
  "body": " Exercises     Imagine you have a student who is struggling to understand what congruence means. Give an intuitive explanation. Demonstrate your explanation by drawing three shapes, two of which are congruent but the third is not. Follow your intuitive explanation to say why the (non)congruence happens for the three shapes.    Explain why knowing only two data about a triangle is never enough to uniquely specify it up to congruence.    Draw a picture and use it to explain why ASA uniquely specifies a triangle up to congruence.    Draw a picture and use it to explain why SAA uniquely specifies a triangle up to congruence.    Explain why any four data about a triangle—that is, knowing a total of four of the angles and\/or side lengths—is enough to specify the triangle up to congruence.  If you know four data you can forget one and get a triple of data. Can you show that you can always pick one to forget to get a triple which specifies the triangle?  If you know four data it's one of three cases: all angles and one side, all sides and one angle, two angles and two sides. Is it easier to tackle these three cases separately?     At a certain time of day, your shadow is exactly feet long. You are feet tall. Come up with a formula that tells you the height of an object based on the length of its shadow. Apply your formula to calculate the height of a building which casts a foot long shadow. Are there any practical obstacles to using your formula to calculate the height of an object? Explain.    Write a problem which requires the use of similar triangles to calculate an area or volume. Your problem should include a picture. Solve your own problem, showing all your work.    Place a right triangle so that its hypotenuse is horizontal and slice it in half along its height, as in the picture below. Explain why those two smaller triangles are each similar to the original right triangle. Use this fact to determine the height of a right triangle whose legs have length and .      Explain why any two regular pentagons are similar. For a fixed number , are any two regular -gons similar? Explain your answer. When are regular pentagons congruent? When are regular -gons congruent? Explain.    Similar to how a circle can be specified by a single measurement, namely its radius, an ellipse can be specified by a pair of measurements. Namely, the major axis of an ellipse is the longest distance from one point on the edge to another. It's the length of the line which goes through the two focus points. The minor axis is the shortest distance from one point on the edge to another. It's the length of the line through the center perpendicular to the major axis. The semi-major axis and semi-minor axis are half of the major axis and minor axis.   An ellipse. The major axis, in the horizontal direction, is labeled. So is the minor axis, in the vertical direction. One could have a different orientation, such as the major axis being vertical or diagonal, but a choice must be made to draw an example.    Use what you know about scalings to give a formula for the area of an ellipse with semi-major axis and semi-minor axis . Explain why your formula works and demonstrate it by calculating the area of an ellipse with semi-major axis and semi-minor axis . Discuss the edge case where the semi-major axis and semi-minor axis are the same.   Think of an ellipse as coming from a circle by doing two non-uniform scalings.    "
},
{
  "id": "sec10-exercises-2-1",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-1",
  "type": "Exercise",
  "number": "10.4.1",
  "title": "",
  "body": " Imagine you have a student who is struggling to understand what congruence means. Give an intuitive explanation. Demonstrate your explanation by drawing three shapes, two of which are congruent but the third is not. Follow your intuitive explanation to say why the (non)congruence happens for the three shapes.  "
},
{
  "id": "sec10-exercises-2-2",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-2",
  "type": "Exercise",
  "number": "10.4.2",
  "title": "",
  "body": " Explain why knowing only two data about a triangle is never enough to uniquely specify it up to congruence.  "
},
{
  "id": "sec10-exercises-2-3",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-3",
  "type": "Exercise",
  "number": "10.4.3",
  "title": "",
  "body": " Draw a picture and use it to explain why ASA uniquely specifies a triangle up to congruence.  "
},
{
  "id": "sec10-exercises-2-4",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-4",
  "type": "Exercise",
  "number": "10.4.4",
  "title": "",
  "body": " Draw a picture and use it to explain why SAA uniquely specifies a triangle up to congruence.  "
},
{
  "id": "sec10-exercises-2-5",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-5",
  "type": "Exercise",
  "number": "10.4.5",
  "title": "",
  "body": " Explain why any four data about a triangle—that is, knowing a total of four of the angles and\/or side lengths—is enough to specify the triangle up to congruence.  If you know four data you can forget one and get a triple of data. Can you show that you can always pick one to forget to get a triple which specifies the triangle?  If you know four data it's one of three cases: all angles and one side, all sides and one angle, two angles and two sides. Is it easier to tackle these three cases separately?  "
},
{
  "id": "sec10-exercises-2-6",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-6",
  "type": "Exercise",
  "number": "10.4.6",
  "title": "",
  "body": " At a certain time of day, your shadow is exactly feet long. You are feet tall. Come up with a formula that tells you the height of an object based on the length of its shadow. Apply your formula to calculate the height of a building which casts a foot long shadow. Are there any practical obstacles to using your formula to calculate the height of an object? Explain.  "
},
{
  "id": "sec10-exercises-2-7",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-7",
  "type": "Exercise",
  "number": "10.4.7",
  "title": "",
  "body": " Write a problem which requires the use of similar triangles to calculate an area or volume. Your problem should include a picture. Solve your own problem, showing all your work.  "
},
{
  "id": "sec10-exercises-2-8",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-8",
  "type": "Exercise",
  "number": "10.4.8",
  "title": "",
  "body": " Place a right triangle so that its hypotenuse is horizontal and slice it in half along its height, as in the picture below. Explain why those two smaller triangles are each similar to the original right triangle. Use this fact to determine the height of a right triangle whose legs have length and .    "
},
{
  "id": "sec10-exercises-2-9",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-9",
  "type": "Exercise",
  "number": "10.4.9",
  "title": "",
  "body": " Explain why any two regular pentagons are similar. For a fixed number , are any two regular -gons similar? Explain your answer. When are regular pentagons congruent? When are regular -gons congruent? Explain.  "
},
{
  "id": "sec10-exercises-2-10",
  "level": "2",
  "url": "sec10-exercises.html#sec10-exercises-2-10",
  "type": "Exercise",
  "number": "10.4.10",
  "title": "",
  "body": " Similar to how a circle can be specified by a single measurement, namely its radius, an ellipse can be specified by a pair of measurements. Namely, the major axis of an ellipse is the longest distance from one point on the edge to another. It's the length of the line which goes through the two focus points. The minor axis is the shortest distance from one point on the edge to another. It's the length of the line through the center perpendicular to the major axis. The semi-major axis and semi-minor axis are half of the major axis and minor axis.   An ellipse. The major axis, in the horizontal direction, is labeled. So is the minor axis, in the vertical direction. One could have a different orientation, such as the major axis being vertical or diagonal, but a choice must be made to draw an example.    Use what you know about scalings to give a formula for the area of an ellipse with semi-major axis and semi-minor axis . Explain why your formula works and demonstrate it by calculating the area of an ellipse with semi-major axis and semi-minor axis . Discuss the edge case where the semi-major axis and semi-minor axis are the same.   Think of an ellipse as coming from a circle by doing two non-uniform scalings.  "
},
{
  "id": "sec11-data",
  "level": "1",
  "url": "sec11-data.html",
  "type": "Section",
  "number": "11.1",
  "title": "Representing data",
  "body": " Representing data  Many interesting data sets —qualitative and quantitative information about a group of people or things—are large. For example, maybe you are a sociologist who wants to understand how poverty impacts relationships. You are studying a population that consists of millions of people. Each of them has various relevant data attached—income, debt, marriage status, number of children, occupation, etc. If you had this entire data set arrayed in front of you it would be unsurveyable. What you want is some way to make what these data say understandable to humans.  This is a point only pedantic nerds care about, but data is a plural noun, with datum being the singular. Hence pedantic nerds write these data say instead of this data says .  There's many aspects of making data understandable to humans. Here are a few. You want ways to visualize the data or represent it graphically. Tables of numbers are great for calculations, but how do you get an overview? If you want your sociological research to move policymakers, you need to make it quick for them to understand what it shows.  You want ways to measure a typical member of your data set. There's variation, but can you locate where the data are centered? What does the average person in your data set look like?  You want ways to measure how much variation there is. Are different members close, or are they far apart? How spread out are the data?  You want ways to test hypotheses. Perhaps you expect that poverty will correlate with lower marriage rates. Does your data support that hypothesis?  In this chapter we will talk about all of these. We begin in this section by talking about how you can represent data.  A useful distinction to draw is between quantitative data, those which can be expressed numerically, versus qualitative data, those which merely categorize. For example, suppose your school district is looking at trends in student performance. This data set would consist of information about students. Each student would have various data associated with them. Quantitative data could include scores on standardized exams, number of absences, and grade level. Qualitative data could include gender, race, and whether their overall performace is satisfactory.  Note that quantitative data can be used to categorize; for instance, for this example it makes a lot of sense to categorize students by grade level. This is most useful, however, when there are relatively few values the data might have. If you were looking at exam scores, it would be more sensible to categorize by ranges of scores, rather than by individual scores.  On the other hand, qualitative data can't meaningfully be made quantitites. You might assign numbers to the various options for the race of a student, but those numbers don't have any meaning. It doesn't make sense to add them, compare them, multiply them. Good practice when you see data represented as numbers is to ask yourself, do these make sense as numbers? Does it make sense to say one is larger or smaller than another? Does it makes sense to add them? Does it make sense to multiply them?  An example where numbers can be misleading is with satisfaction surveys, like those rank the quality of on a to scale . You see this used in many places, from movie reviews to student evaluations of teaching. These are numbers, but are they truly quantitative data? Some properties of numbers make sense. It makes sense to say that a four star movie is better than a two star movie. But other properties of numbers don't make sense. It doesn't make sense to say that a four star movie is twice as good as a two star movie.  So these are in an in-between space. It makes sense to order them, but not add them nor measure distance between them. These kinds of in-between data show the limit of the quantitative versus qualitative categorization of data. For this reason, a more careful analysis would include more data types. In this case, these would be ordinal data—they have a meaningful order but not further numerical properties.  Here's an example of a different flavor. Consider temperature, as expressed in degrees centigrade or degrees Fahrenheit. These data are ordinal; it's sensible to talk about colder versus warmer temperatures. And it makes sense to talk about distances between temperatures, for instance if you say the temperature dropped C overnight. But it doesn't make sense to multiply. It doesn't have any physical meaning to say that F is twice as warm as F. (If you think this does make sense, consider that F is approximately C and F is the same as C but is not twice .)  (The problem here is that on these temperature scales doesn't refer to zero temperature. Instead, they're just positions to be the start of the scale. In contrast, there are temperature scale where represents absolute zero, the absence of temperature, such as Kelvin. For these scales, there is physical meaning to say that Kelvin is twice the temperature as Kelvin.)  As these examples show, one place it is useful to think critically about data is what the meaning of numbers are. Just because someone reports a number to you means that all the mathematics you can do with numbers makes sense to do with that datum.   You can visualize a data set as a big spread sheet. Each row corresponds to an individual in the data set with the columns representing the values of the various data associate to that individual. With our student example, each row would represent a student. Then there would be columns for grade level, exam performance, etc.  This representation of data is useful for doing calculations, especially with computers. But if you're communicating to a human, they probably want something easier to comprehend.  One option is to stick with tables, but have them be summaries. For example, if you are at a pre-semester all-staff meeting and your principal is presenting on student success rates, she's not going to show you a raw spreadsheet. Instead you'll get a summary table like the following.   Number of students passing standardized exams by teacher    Teacher  Number passing    Ms. Adams  21    Mr. Baker  24    Ms. Chan  26    Ms. Diaz  25    Mr. Edwards  19     This example—hopefully!—isn't realistic. If you ever have a boss who singles out specific teachers for critique in a meeting you should look for a new job elsewhere.  Tables can be useful, but they are often slow to read. You can take advantage of humans' evolved ability to quickly compare lengths by representing data visually. A table summarizing the number of instances of each category can be straightforwardly turned into a bar graph where the length of a bar gives the number for each category. A longer bar means more and a shorter bar means fewer. This enables a viewer to easily see the relative rates at which they occur. The downside is method of summarizing data doesn't give precise values. This downside can be mitigated by using both summarization methods.  You can present the bars either vertically or horizontally. For consistency I will orient everything vertically. That is, the horizontal axis will represent the different categories and the vertical axis will represent the quantities. For a horizontal orientation you merely swap the role of the two axes.   The same data as in the above table, but presented in a bar plot. The plot has five bars, for the five teachers Adams, Baker, Chan, Diaz, and Edwards. The heights of the bars correspond to the number of passing students for each teacher.  The visual pizazz is at a minimum. The bars alternate colors to ease readability, but otherwise things are basic.   The same summary can be visually presented in different ways. Some people like bars, but it's not the only way to do it. For example, you could instead use a dot graph . Rather than representing quantities by lengths of bars, you represent them by the height of a dot.   The same data as in the above table, but presented in a dot plot. Rather than five bars for the five teachers there are five dots.   In this case, there isn't a meaningful order for the data on the -axis. The names are ordered alphabetically, but that isn't relevant to the data being presented. In cases where there is a meaningful order, it makes sense to connect the dots with lines to make a line graph . A common example is when the categories are dates. If the categories aren't ordered then the lines between dots can wrongly suggest trends, and it's better to simply graph disconnected points.  Regardless, here's the same data as a line graph. You can tell the lines aren't providing meaningful info because they suggest a connection between adjacent names. But the meaning of the data would be the same if you shuffled the order of the names.   The same data as in the above dot plot, but now with lines connecting the dots. It's not a good graph, the lines aren't adding any useful visual information.   Another kind of chart you sometimes see is a circle chart , also called a pie chart . Rather than represent quantitis by distances or lengths, a circle represents the overall population and it is divided into wedges based on the proportions of the population. For example, if fall into category then the wedge for would claim just over half the pie.   The same data as in the above table, but presented in a circle chart. There are five wedges for the five teachers corresponding to their share of the passing students.  This is an awful visualization of this data. But that is typical of circle charts.   Presumably there is someone out there who likes circle charts. But they are morally and objectively wrong. Human vision is good at comparing distances; it is quick to see which of two bars are longer. But it's not so good at comparing angular measures. Converting a circle chart to an equivalent bar chart will make things easier for your audience. An exception is if there are only two categories. In that case, the circle is divided into two pieces so it's easy to compare them.  In this example, the circle chart is especially nonsense. Circle charts are at their best when you want to see what proportion of a total population fits into each category. That's not what these data are about. What's relevant, if anything, is how many passing students each teacher has from among those they teach, not from among the total population of passing students.  The theme of this chapter is thinking critically about data. With that in mind, a good rule of thumb is, when you see a circle chart ask yourself, what would this look like if presented as a bar or line graph?   Consider the summary given in the following table. Which type of chart do you think is the best way to visualize these data? Explain your choice. Sketch a version of your favored chart, as well as one other kind of chart for comparison.  Survey of people's favorite music genre    Genre  Number    Pop  2131    Rock  1940    Rap  2056    Country  1659    Jazz  1141    Dance  1457    Classical  319       Earlier data visualizations focused on a single type of quantity. Also important is how two different types of quantities are related. For example, maybe you want to analyze how student grades correspond to performance on standardized exams. You don't want to look at two different data sets of grades and and exam scores. Instead, you want to look at the correlation between students' numbers for the two kinds of quantities.  We can use a two dimensional coordinate grid for this. The horizontal axis, also called the -axis, is used to represent one of the kinds of qantities. The vertical axis, also called the -axis, represents the other. Often but not always we pick the -axis to represent the independent variable and the -axis to represent the dependent variable , meaning that that we think of the dependent variable as being a function of the independent variable.  We use cartesian coordinates , such as you may have seen in high school algebra. That is, each point in the two dimensional space represents a pair of numbers. We fix a starting point, which we usually draw as where the axes intersect. Here, is the left-right distance and represents the value on the -axis and is up-down distance and represents the value on the -axis.  One way to represent correspondence of data in cartesian coordinates is via a scatter plot . The data are pairs of numbers plotted as points. One type of quantity gets represented with -coordinates and the other with -coordinates, so that you can see relations between the two types of data.   Two scatter plots showing the same data. Both show class sizes of various classes versus the percentage of passing students from those classes. The difference between the two scatter plots is how the axes are drawn. The first plot has both axes start at . This creates a lot of empty space in the graph, since the data are not near . The second has the axes start at larger numbers so there's less empty space.  Whichever one you look at, it probably appears that there is a negative correlation between class size and pass rates. That is, smaller classes tend to have higher pass rates and larger classes tend to have lower pass rates.   In the above image the same scatter plot is shown twice to illustrate the effect choosing your axes has on the visualization. In the top plot, the axes both start at . This way, proportions on the graph are accurate; if a dot is twice as high as another it represents twice the value. In the bottom plot, the axes start at and . In this way we get a zoomed in view of the plot, and can more easily see distances between points. However, we lose the meaning of proportions. For instance, there is a dot near the bottom at . Above it are two more dots, about three or four times high on the graph. But they don't represent values three or four times higher.  The lesson is, the choice of where axes starts can affect the visualization. You should be careful to look at the axes to make sure you are correctly interpreting the graph. You can also think about this from a defensive posture. One way to present a misleading graph is to choose where the axes start. If you want to make differences look negligible, pick a far away starting point. If you want to magnify them, don't start the axis at . When reading and interpreting others' graphs you should critically engage with the presentation. Ask yourself: what purpose is there for the choice of presentation? Is it misleading? Or does it let me better understand the data?   Look again at the two graphs about class size and pass rate. Which one do you think gives you a better, more honest view into the data? Explain your answer.          "
},
{
  "id": "sec11-data-2",
  "level": "2",
  "url": "sec11-data.html#sec11-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data sets "
},
{
  "id": "sec11-data-5",
  "level": "2",
  "url": "sec11-data.html#sec11-data-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantitative qualitative "
},
{
  "id": "sec11-data-8",
  "level": "2",
  "url": "sec11-data.html#sec11-data-8",
  "type": "Example",
  "number": "11.1.1",
  "title": "",
  "body": "An example where numbers can be misleading is with satisfaction surveys, like those rank the quality of on a to scale . You see this used in many places, from movie reviews to student evaluations of teaching. These are numbers, but are they truly quantitative data? Some properties of numbers make sense. It makes sense to say that a four star movie is better than a two star movie. But other properties of numbers don't make sense. It doesn't make sense to say that a four star movie is twice as good as a two star movie.  So these are in an in-between space. It makes sense to order them, but not add them nor measure distance between them. These kinds of in-between data show the limit of the quantitative versus qualitative categorization of data. For this reason, a more careful analysis would include more data types. In this case, these would be ordinal data—they have a meaningful order but not further numerical properties.  Here's an example of a different flavor. Consider temperature, as expressed in degrees centigrade or degrees Fahrenheit. These data are ordinal; it's sensible to talk about colder versus warmer temperatures. And it makes sense to talk about distances between temperatures, for instance if you say the temperature dropped C overnight. But it doesn't make sense to multiply. It doesn't have any physical meaning to say that F is twice as warm as F. (If you think this does make sense, consider that F is approximately C and F is the same as C but is not twice .)  (The problem here is that on these temperature scales doesn't refer to zero temperature. Instead, they're just positions to be the start of the scale. In contrast, there are temperature scale where represents absolute zero, the absence of temperature, such as Kelvin. For these scales, there is physical meaning to say that Kelvin is twice the temperature as Kelvin.)  As these examples show, one place it is useful to think critically about data is what the meaning of numbers are. Just because someone reports a number to you means that all the mathematics you can do with numbers makes sense to do with that datum.  "
},
{
  "id": "sec11-data-12",
  "level": "2",
  "url": "sec11-data.html#sec11-data-12",
  "type": "Table",
  "number": "11.1.2",
  "title": "Number of students passing standardized exams by teacher",
  "body": " Number of students passing standardized exams by teacher    Teacher  Number passing    Ms. Adams  21    Mr. Baker  24    Ms. Chan  26    Ms. Diaz  25    Mr. Edwards  19    "
},
{
  "id": "sec11-data-14",
  "level": "2",
  "url": "sec11-data.html#sec11-data-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bar graph "
},
{
  "id": "sec11-data-17",
  "level": "2",
  "url": "sec11-data.html#sec11-data-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot graph "
},
{
  "id": "sec11-data-19",
  "level": "2",
  "url": "sec11-data.html#sec11-data-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "line graph "
},
{
  "id": "sec11-data-22",
  "level": "2",
  "url": "sec11-data.html#sec11-data-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circle chart pie chart "
},
{
  "id": "sec11-data-27",
  "level": "2",
  "url": "sec11-data.html#sec11-data-27",
  "type": "Checkpoint",
  "number": "11.1.3",
  "title": "",
  "body": " Consider the summary given in the following table. Which type of chart do you think is the best way to visualize these data? Explain your choice. Sketch a version of your favored chart, as well as one other kind of chart for comparison.  Survey of people's favorite music genre    Genre  Number    Pop  2131    Rock  1940    Rap  2056    Country  1659    Jazz  1141    Dance  1457    Classical  319      "
},
{
  "id": "sec11-data-29",
  "level": "2",
  "url": "sec11-data.html#sec11-data-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent variable dependent variable "
},
{
  "id": "sec11-data-30",
  "level": "2",
  "url": "sec11-data.html#sec11-data-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cartesian coordinates "
},
{
  "id": "sec11-data-31",
  "level": "2",
  "url": "sec11-data.html#sec11-data-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatter plot "
},
{
  "id": "sec11-data-35",
  "level": "2",
  "url": "sec11-data.html#sec11-data-35",
  "type": "Checkpoint",
  "number": "11.1.5",
  "title": "",
  "body": " Look again at the two graphs about class size and pass rate. Which one do you think gives you a better, more honest view into the data? Explain your answer.  "
},
{
  "id": "sec11-center",
  "level": "1",
  "url": "sec11-center.html",
  "type": "Section",
  "number": "11.2",
  "title": "Measures of center",
  "body": " Measures of center  Suppose you have a collection of numbers representing measurements. For example, perhaps you are a marine biologist tagging sharks that make it to Cape Cod. For each shark you measure its body length. After a summer of work your team has a few dozen measurements. You want to summarize these measurements. What is the length of a typical or average shark?  First let's fix some notation for talking about this. A data set in this context is just a collection of numbers. Think of it like a column in a spreadsheet. If we're talking abstractly where we don't necessarily know in advance the specific numbers, we can write this collection of numbers like That is, each entry in the data set gets an index (think its row number in a spreadsheet). The size of the data set is . The indices only make sense for .  With that in mind, let's talk about measures for the center of a data set. There are a few different notions of an average , with their own advantages and disadvantages. We will discuss them in turn. We start with the one with the most complicated definition.  Mean  Suppose you have a collection of numbers . Their mean , commonly denoted , measures their center of gravity. Imagine the number line as a balancing beam with a weight placed at each number in the data set. The mean is where you would place a fulcrum so that the two sides would be balanced. Mathematically, we can describe it with the following formula. That is, to calculate the mean you add up all the values in the data set and divide by the number of values.  The notation , called summation notation , means to sum up all the s. It is a shorthand for writing the longer . The symbol is the Greek letter Sigma ; think of Sigma as the Greek S, with S for sum .  Another way of thinking about the mean is, imagine the values plotted on a number line. If you want the location which miniminizes the total distance to the numbers, that location is the mean.   The mean is the most important notion of an average, to the point where often people will say average to mean the mean. The main reason for the mean's importance is it has nice mathematical properties that enable more complicated uses of statistics. Indeed, the central limit theorem , which we will touch on later, says that for many applications the mean is one of two pieces of information you need to describe a distribution.  Here is a joke. You see a mathematician scrambling around on the ground under a streetlamp late a night. You ask her what she's doing, and she replies that she's looking for her lost glasses. You are a kind person, so you offer to help. You ask where she dropped them. She gestures and replies that she lost them half a block down the street. You ask why she's searching under the streetlamp. She says that the street lamp has nice mathematical properties and so it's easier to prove theorems here than over in the dark.  Median  Suppose you have a collection of numbers . Their median is the value in the middle if you list them in order. Phrased differently, the median is the position where half the values are smaller and half the values are larger. To give a precise, we have to split into two cases. Assume for convenience the numbers are already listed in increasing order:  If is odd, then the median is the value exactly in the middle, namely, .  If is even, then the median will be the average of the two values closest to the middle. Namely, it will be      Mode  Suppose you have a collection of numbers . Their mode is the value that occurs the most often in the list. If there is a tie for the value that occurs the most, the data have multiple modes.   A way to understand the mode is, if you plotted a frequency chart then the mode would be the value with the longest bar.   Consider the collection of nine numbers We can calculate their mean, median, and mode. Note that the mean is greater than the median. This is because the data set is weighted toward larger numbers; there are a bunch of small numbers clustered close together and then it starts spacing out more and more. With the median you don't care about the distance between values, only their order. Whereas the mean is all about distances.    Come up with your own data set whose mean, median, and mode are all different. Come up with a data set where they are all the same. Come up with a data set where the median and the mode are the same but the mean is different.   You might ask, why have three different notions of the center of a data set? Why not just have one notion that's the best?  The trouble is, life isn't so neat as to have a single option that's always the best. We have to make do with different options for different circumstances.  A nice feature of the mode is that it makes sense for qualitative data. For example, suppose a survey asks respondants their religion. This isn't quantitative data; it doesn't make sense to say that someone's religion is . But you can still use mode to get an idea of what a typical response is. If of respondants answer Islam, that being the mode gives you an idea of the average. (Note, of course, you can get better info by reporting more detail, say by giving the percentages for the top answers.) You can't use median or mean in this context, because they rely on numerical properties. For median, there's no meaningful ordering of the answers, and for mean you need to be able to add and divide.  When dealing with quantitative data, mean and median are typically more useful measures than mode. One advantage of the mean is, as mentioned above, its nice properties. Let me mention a couple of them, to give you a taste.  Linearity of mean  The mean has the following two properties, collectively known as linearity . If you multiply all values in a data set by the same constant , then the mean of the new data set is times the mean of the original data set.  Suppose you mix two data sets and as follows. To make the new data set, you take every possible way to add values from the two data sets together, that is all possible . The mean of this new data set is then the sum of the means of the two data sets.    This property is helpful if you are combining data sets together to create more complicated data sets, because it lets you calculate the mean of the complicated data set by knowing what's going on with the simpler ones. This is valuable for theoretical work.  One case where median is a more useful measure of the center is when there are outliers. For example, maybe you are studying housing costs to get an idea of how (un)affordable greater Boston is as a place to live. Most people will have housing costs affordable on a normal salary. But there will be a few outliers—the ultrarich. Although small in number, their presence in the data set will skew the mean upward. However, due to their small number they will have minimal impact on the median. If you want an idea of the typical person's housing costs, median will give a better measure.  Because different measures have different advantages, it's helpful to have multiple tools at you disposal. And from the other direction, a consumer of others' statistical analysis, it's useful to know about these tools so you can critically assess what is said to you.  "
},
{
  "id": "sec11-center-4",
  "level": "2",
  "url": "sec11-center.html#sec11-center-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average "
},
{
  "id": "sec11-center-5",
  "level": "2",
  "url": "sec11-center.html#sec11-center-5",
  "type": "Definition",
  "number": "11.2.1",
  "title": "Mean.",
  "body": "Mean  Suppose you have a collection of numbers . Their mean , commonly denoted , measures their center of gravity. Imagine the number line as a balancing beam with a weight placed at each number in the data set. The mean is where you would place a fulcrum so that the two sides would be balanced. Mathematically, we can describe it with the following formula. That is, to calculate the mean you add up all the values in the data set and divide by the number of values.  The notation , called summation notation , means to sum up all the s. It is a shorthand for writing the longer . The symbol is the Greek letter Sigma ; think of Sigma as the Greek S, with S for sum .  Another way of thinking about the mean is, imagine the values plotted on a number line. If you want the location which miniminizes the total distance to the numbers, that location is the mean.  "
},
{
  "id": "sec11-center-6",
  "level": "2",
  "url": "sec11-center.html#sec11-center-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "central limit theorem "
},
{
  "id": "sec11-center-8",
  "level": "2",
  "url": "sec11-center.html#sec11-center-8",
  "type": "Definition",
  "number": "11.2.2",
  "title": "Median.",
  "body": "Median  Suppose you have a collection of numbers . Their median is the value in the middle if you list them in order. Phrased differently, the median is the position where half the values are smaller and half the values are larger. To give a precise, we have to split into two cases. Assume for convenience the numbers are already listed in increasing order:  If is odd, then the median is the value exactly in the middle, namely, .  If is even, then the median will be the average of the two values closest to the middle. Namely, it will be     "
},
{
  "id": "sec11-center-9",
  "level": "2",
  "url": "sec11-center.html#sec11-center-9",
  "type": "Definition",
  "number": "11.2.3",
  "title": "Mode.",
  "body": "Mode  Suppose you have a collection of numbers . Their mode is the value that occurs the most often in the list. If there is a tie for the value that occurs the most, the data have multiple modes.  "
},
{
  "id": "sec11-center-11",
  "level": "2",
  "url": "sec11-center.html#sec11-center-11",
  "type": "Example",
  "number": "11.2.4",
  "title": "",
  "body": " Consider the collection of nine numbers We can calculate their mean, median, and mode. Note that the mean is greater than the median. This is because the data set is weighted toward larger numbers; there are a bunch of small numbers clustered close together and then it starts spacing out more and more. With the median you don't care about the distance between values, only their order. Whereas the mean is all about distances.  "
},
{
  "id": "sec11-center-12",
  "level": "2",
  "url": "sec11-center.html#sec11-center-12",
  "type": "Checkpoint",
  "number": "11.2.5",
  "title": "",
  "body": " Come up with your own data set whose mean, median, and mode are all different. Come up with a data set where they are all the same. Come up with a data set where the median and the mode are the same but the mean is different.  "
},
{
  "id": "sec11-center-17",
  "level": "2",
  "url": "sec11-center.html#sec11-center-17",
  "type": "Definition",
  "number": "11.2.6",
  "title": "Linearity of mean.",
  "body": "Linearity of mean  The mean has the following two properties, collectively known as linearity . If you multiply all values in a data set by the same constant , then the mean of the new data set is times the mean of the original data set.  Suppose you mix two data sets and as follows. To make the new data set, you take every possible way to add values from the two data sets together, that is all possible . The mean of this new data set is then the sum of the means of the two data sets.   "
},
{
  "id": "sec11-spread",
  "level": "1",
  "url": "sec11-spread.html",
  "type": "Section",
  "number": "11.3",
  "title": "Measures of spread",
  "body": " Measures of spread  In the last section we discussed how to summarize a complicated data set by measuring where its center is. But that's not the full story. To illustrate this, consider the following three data sets. These data sets all have the same mean, namely . (They also have median .) But they are quite different in terms of spread. With the first one you know the values are all close to , but with the last one some of the values are quite far from . Just the mean alone isn't a good summary of the data.  A quick way to calculate the mean on these: instead of using the sum formula, think about mean as being the balancing point. Looking at you can see that it's balanced at , with the other two points each being away. In general, if you notice that a collection of three numbers has the form then you can immediately tell that their mean is .  In this section we discuss some measures for how spread out a data set is.  Maximum, minimum, and range  Consider a data set of numbers The minimum of the data set is the least number in it and the maximum of the data set is the greatest number in it. That is, the minimum is the value so that for every and the maximum is the value so that for every . The range of the data set is the maximum minus the minimum. The range is the total distance of the interval in which values from the data set lie.   Using the same three data sets above, we can distinguish them via their ranges. Though they all have a mean of , the ranges are, in order, , , . In that way we can distinguish how spread out they are.   You give students an exam and they get the following scores: The maximum is , the minimum is . Thus the range is .    Explain the following facts. If a list of numbers is given in increasing order, then the minimum is the first number and the maximum is the last number .  The range of a data set is always .  The range of a data set can be . When does this happen?     While the range gives some information about how spread out a data set is, it has some severe limitations.   Consider the following two data sets. They are very similar, differing only in one of the eleven values. However, their ranges are quite different. The first has a range of and the second has a range of , almost twenty times as much. If you were just looking at range as a summary you'd think these data sets are much more different than they actually are.  This is similar to the issue, discussed in the last section, of how the mean is affected by outliers. Indeed, for this example both data sets have the same median of . On the other hand, the first data set has its mean as also but the mean of the second data set is approximately . Just like the outlier of blew up the range it also increased the mean.   For a measure of spread which isn't so sensitive to outliers, we don't want to look at the minimum and the maximum.  Quartiles  Quartiles are a measure of where a data set is broken up into four equally sized chunks. That is, the first quartile is where of values are to its left, the second quartile is another name for the mean, where of values are to the left and are to the right, and the third quartile is where of values are to the right.  We can make this a bit more precise, like we did with the mean. One way to do this is, to uniquely specify the locations of the first and third quantile we can order the values in the data set and look for the two values closest to of the way through and of the way through, and define the quartiles to be the average of those two values.   Annoyingly, different statistical software will use slightly different methods to determine the quartiles of a discrete data set, not all the same as how I described above. For the data set consisting of whole numbers from to , the statistical programming language R computes the first and third quartiles as and while the spreadsheet program Excel computes them as and . In either case, changing to the outlier doesn't affect the calculation.  This is the sort of annoying detail that you might have to care about if you are using computer tools to do statistics. You need some specified method for giving quartiles, but different programs pick different methods. However, for normal use of interpreting statistics this detail doesn't matter. Except on very small data sets, the different methods give very close answers and the slight variation doesn't matter. For example, if you want to know about the first and third quartiles for incomes in Massachusetts, you are looking at a data set of millions of values. It doesn't matter any for interpreting that data if a different method would produce a number differing by a fraction of a dollar.   Now that we know about quartiles and medians, we can talk about a convenient visual device for summarizing a data set. A box and whisker plot is a visual that shows the median, first and third quartiles, and minimum and maximum of a data set. In this way you can quickly see the center and spread of the data.  In this example, box and whisker plots are given for a data set of exam performance by students in various grade levels. A different box and whisker is given for each grade, so that you can easily compare them. A second version of the plot is given to the side, with dots representing the various exam scores for each grade level. This extra level of information is only sometimes helpful. Here, it's included to help you visualize what a box and whisker plot is showing.   Two box and whisker plots, as described in the paragraph before the image.   These various notions tell us something about the spread of a data set, but it'd be nice to have a single quantity we could point to. Here's an idea of how you might go about that. First identify the center of the data set. Next, determine the average distance of a datum from the center. This will give you a single number which represents how spread out the data are. A small value says that the average distance to the center is small while a large value says the average distance to the center is large.  At core, this is a good idea for a measure of spread. However, for technical reasons we want to slightly tweak it to get something that is better behaved mathematically. Instead of looking at the average distance to the center we get the average of the squares of the distances. Then to get back to the correct units we take the square root.  Standard deviation  Consider a data set of many data with mean . The variance  of the data set is the average of the squares of the distances from the mean, and the standard deviation  is the square root of that. As formulas:    The more important of these two notions is the standard deviation. You can think of the variance as a step to computing the standard deviation—first compute the variance, that is the average of the squares of the distances from the mean, and then take its square root to get the standard deviation. As said earlier, the reason to take squares of distances instead of distances is that it has nicer mathematical properties which eases more advanced uses. Taking the square root at the end returns us to the original unit. If, for example, our data are weights of fish in pounds, then the mean is also in pounds. Because we square, the units for the variance is square pounds. Taking a square root gets us back to pounds, the same units we started with.   Consider the three data sets from earlier: Let's compute their standard deviations in turn. We do the first in detail. Before you can do anything else you need to know the mean, in this case we already saw that . Now we need to take the average of the squares of the distances from the mean: We then divide that by the number of data and take the square root, to get the standard deviation is For the other two data sets we do the same process. The second data set has standard deviation and the third data set has standard devation .   Warning! Due to technical considerations (the keyword to search is Bessel's correction ) most statistical software packages will use a slightly different formula for their standard deviation function. Namely, they will divide by instead of . This is the so-called corrected standard deviation or unbiased estimator of the standard deviation, as upposed to the uncorrected standard deviation I gave. This is something to watch out for if you use computer tools to check your work. They might give a slightly different answer because they used a slightly different formula.  This is an example of something that will likely come up when you are teaching elementary school mathematics. Mostly it can be avoided, but occasionally you touch on some detail that is difficult to explain without a lengthy diversion to teach a later, more advanced math class. What do you say to a student who asks about the detail?  It is unsatisfying to simply say I can't explain that —both for the instructor and the student. You can give a brief, high-level gloss. In this case, something like the correction makes it so the formula gives a more accurate estimation of the true statistic when sampling from a real world distribution . That's maybe enough to satisfy the casually curious. If that doesn't suffice, you can engage the student in a one-on-one conversation to give more information. (This is an invitation, to be clear: if you want to know more, talk to me).  To bring it back to a lesson for teaching: to effectively teach class you have to understand the subject at a deeper level than what one gets leaving the class.   I promised you that the standard deviation has some nice mathematical properties. Let me mention one. Consider the following two data sets: Note that the second data set came from the first one by multiplying everything by . Both data sets have the same mean, namely . If you compute their standard deviations you get and . That is, multiplying everything by gave you a standard deviation times as large.  In general, if a data set has standard deviation , then if you multiply every datum by the new data set has standard deviation . This is similar to a property enjoyed by the mean—multiplying all values by multiplies the mean by .    "
},
{
  "id": "sec11-spread-5",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-5",
  "type": "Definition",
  "number": "11.3.1",
  "title": "Maximum, minimum, and range.",
  "body": "Maximum, minimum, and range  Consider a data set of numbers The minimum of the data set is the least number in it and the maximum of the data set is the greatest number in it. That is, the minimum is the value so that for every and the maximum is the value so that for every . The range of the data set is the maximum minus the minimum. The range is the total distance of the interval in which values from the data set lie.  "
},
{
  "id": "sec11-spread-7",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-7",
  "type": "Example",
  "number": "11.3.2",
  "title": "",
  "body": " You give students an exam and they get the following scores: The maximum is , the minimum is . Thus the range is .  "
},
{
  "id": "sec11-spread-8",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-8",
  "type": "Checkpoint",
  "number": "11.3.3",
  "title": "",
  "body": " Explain the following facts. If a list of numbers is given in increasing order, then the minimum is the first number and the maximum is the last number .  The range of a data set is always .  The range of a data set can be . When does this happen?    "
},
{
  "id": "sec11-spread-10",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-10",
  "type": "Example",
  "number": "11.3.4",
  "title": "",
  "body": " Consider the following two data sets. They are very similar, differing only in one of the eleven values. However, their ranges are quite different. The first has a range of and the second has a range of , almost twenty times as much. If you were just looking at range as a summary you'd think these data sets are much more different than they actually are.  This is similar to the issue, discussed in the last section, of how the mean is affected by outliers. Indeed, for this example both data sets have the same median of . On the other hand, the first data set has its mean as also but the mean of the second data set is approximately . Just like the outlier of blew up the range it also increased the mean.  "
},
{
  "id": "sec11-spread-12",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-12",
  "type": "Definition",
  "number": "11.3.5",
  "title": "Quartiles.",
  "body": "Quartiles  Quartiles are a measure of where a data set is broken up into four equally sized chunks. That is, the first quartile is where of values are to its left, the second quartile is another name for the mean, where of values are to the left and are to the right, and the third quartile is where of values are to the right.  We can make this a bit more precise, like we did with the mean. One way to do this is, to uniquely specify the locations of the first and third quantile we can order the values in the data set and look for the two values closest to of the way through and of the way through, and define the quartiles to be the average of those two values.  "
},
{
  "id": "sec11-spread-14",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "box and whisker plot "
},
{
  "id": "sec11-spread-19",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-19",
  "type": "Definition",
  "number": "11.3.6",
  "title": "Standard deviation.",
  "body": "Standard deviation  Consider a data set of many data with mean . The variance  of the data set is the average of the squares of the distances from the mean, and the standard deviation  is the square root of that. As formulas:   "
},
{
  "id": "sec11-spread-21",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-21",
  "type": "Example",
  "number": "11.3.7",
  "title": "",
  "body": " Consider the three data sets from earlier: Let's compute their standard deviations in turn. We do the first in detail. Before you can do anything else you need to know the mean, in this case we already saw that . Now we need to take the average of the squares of the distances from the mean: We then divide that by the number of data and take the square root, to get the standard deviation is For the other two data sets we do the same process. The second data set has standard deviation and the third data set has standard devation .  "
},
{
  "id": "sec11-spread-22",
  "level": "2",
  "url": "sec11-spread.html#sec11-spread-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "corrected unbiased estimator uncorrected "
},
{
  "id": "sec11-inference",
  "level": "1",
  "url": "sec11-inference.html",
  "type": "Section",
  "number": "11.4",
  "title": "Statistical inference",
  "body": " Statistical inference  The previous sections have been about various ways to summarize data sets. These are useful, but we have yet to touch on an important use of statistics. Namely, we want to be able to make inferences and predictions.  Here is a typical example. A pharmaceutical company produces a new drug to treat a condition. Does it actually work? The human body and biochemistry are complicated, so it's unreasonable to hope for the drug curing everyone. The best you can expect is statistical evidence: on average those who took the drug did better. To measure the effectiveness of the drug, the company runs trials where they compare outcomes of a group who takes the drug versus a control group —a group given a placebo which does nothing. The scientists then do some statistical work to get a measure of whether it's reasonable to reject the null hypothesis that the drug performs no better than a placebo. This process is called hypothesis testing .  The mathematics of how hypothesis testing works and how to carry out the calculations is rather complicated. For that reason, this section will focus on a high level overview. You don't need to understand the mathematical details in order to know enough to critically engage with public discourse.  Step zero of doing statistics is to get something you can quantify. There is an unknown distribution of the quantities across a population. Doing an experiment you get a data set which is a sample from the population. You then want to use that sample to make inferences about the distribution.   Perhaps you are a entomologist studying centipedes. As part of larger work you want to know the size of a species. The distribution is the different lengths across members of the species. As a sample you look at some centipedes and measure their lengths.    You are a pharmaceutical researcher studying a potential new blood pressure medication. The distribution you want to know about is blood pressures of people who take the medication versus those who don't. Your samples come from a drug trial where you measure what happens with a group given the drug versus a control group.   Given a distribution a statistic is some number that can be calculated from it. Typical examples are the mean or standard deviation. Because the overall distribution is unknown, you don't know the value. You want to use your sample to calculate an estimator , something you can calculate from your sample data which estimates the true value of the statistic.   You don't know the true average length of your centipede species. To estimate this unknown value, you compute the mean length of centipedes in your sample. If your sampling method is unbiased and your sample is large enough, this estimator will give a good estimate of the true mean.  On the other hand, if your sampling method is biased it will produce a poor estimate. For example, if your method of catching centipedes only grabs those above a certain length, you will overestimate the true mean length.   With these concepts in hand, we can now say how the process of hypothesis testing goes. The simplest scenario is you know something about the shape of your distribution. Perhaps, with the centipede example, this species is well studied and so you already know its mean length. You do some kind of intervention you expect to have an impact on what you observe. Maybe in your lab you feed centipedes a special diet you expect will cause them to grow bigger. You measure the results from this intervention, and you want to know, do these results give reason to think the intervention has effect?  Suppose you measure and find the centipedes with the special diet are larger than the mean. But it's possible that this is just happenstance. If you flip a coin a few times, it might come up heads every time. That's unlikely, but not impossible. So you can't get surety that the intervention had effect. Instead, statisticians use a proxy known as a p-value . The way this works is, you take a null hypothesis you wish to reject. In this example, the null hypothesis is that the special diet won't make the centipedes grow longer. You then calculate, based on some knowledge of the shape of the distribution, how likely it is, assuming that null hypothesis, to see results at least as extreme as what you measured. This probability is the p-value for the hypothesis test. If the p-value is very low, that is taken reason to reject the null hypothesis. A common threshold is . If you run the hypothesis test and calculate this is taken as acceptable evidence. Scientific journals will publish your results (assuming the rest is methodologically sound).   You know the mean length for this species of centipede is centimeters. You measured that the mean length of your centipedes after the special diet is centimeters. You do a hypothesis test and calculate a p-value of . That is, under the assumption that the special diet has no effect, there's only a chance of getting a sample mean at least centimeters above the mean. This p-value is small, so you have some confidence your intervention has effect.    Warning! A common misunderstanding of p-values is that they are the probability that the hypothesis is correct. This is not the case. That is not something you can measure directly. Instead, this measure of how likely it is to see such extreme results assuming the null hypothesis is used as a proxy. It's not directly saying that there's only a chance the hypothesis is correct, but it does give us some confidence in rejecting the null hypothesis.  Performing the probability calculation in a hypothesis test requires you to know something about the shape of your distribution. This is where theoretical results in statistics come in. People mathematically proved that the data must look approximately like such-and-such, and so we can leverage some knowledge even if we don't know the specifics. Let's talk about one of the most important examples.  Normal distributions  A normal distribution is a kind of distribution which is shaped like a bell curve. If you randomly sample, most values will be near the mean, with farther away outliers being more and more unlikely. A normal distribution is specified by two parameters, its mean and standard deviation.   A normal distribution. A bell-shaped curve with a mean at . As you go out from the mean the curve gets closer and closer to the axis. The height of the curve above the horizontal axis represents the likelihood of that value. That is, values close to the mean are more likely and outliers are less likely.      Normal distributions are important because we know many things in practice are normal, or approximately normal. Consider the example of repeatedly rolling a (six-sided) die and averaging the results. If you roll it once, any of the six outcomes are equally likely. But if you roll it many times then you expect to see high rolls counterbalance low rolls. It's not likely to roll a long string of s. As such, if you roll the die a lot and take the mean of the results, it's most likely to be close to the true mean of the results, namely Outliers are possible, but the farther you get from the less likely it is to see that result.  The central limit theorem  Suppose you take an unbiased random sample from any distribution. Call the mean of this distribution and its standard deviation . (These are the Greek letters mu and sigma , the counterparts to the Latin m and s, for mean and standard deviation.) You sample times and calculate the mean of the sample. This mean sample mean is itself a random variable; different samples will produce a different mean according to chance.  The distribution of this random value is approximately a normal distribution, provided the number of samples is large enough. Indeed, this normal distribution has mean and standard deviation .   This is a bit mathy, so let's lay it out in plain language. No matter what distribution you are sampling from, no matter how it's laid out, if you calculate the sample mean you know what the distribution for that result looks like. It is a normal distribution with the same mean, and its spread (standard deviation) decreases as the sample size increases. That is, the larger your sample the more closely clustered you expect the outcome to be.  In terms of the dice rolling example, if you only roll the die once the spread is quite large. Any of six possible values are equally likely. But the more you roll, the more likely it is that the sample is close to the true mean of .  This theoretical result is the basis for hypothesis tests about sample means. No matter what the true distribution is for lengths of centipedes, we know approximately what the distribution is for taking a sample and calculating the average. This can be leveraged for probability calculations; if we know the distribution, we can calculate how likely it is to see an outcome.  There are multiple different hypothesis tests used, based on what's known about the shape of the data and what statistic you're measuring. Part of the statistical training budding scientists undergo is understanding these different tests and when they can be applied. But they come back to this same general phenomenon. Theoretical results tell you something about the distribution for an estimator for the statistic. You do an experiment and calculate the estimator. Then you calculate how likely it is to see a result at least that extreme, under the assumption of the null hypothesis. If this probability, called a p-value, is low, that is taken as reason to reject the null hypothesis.  You might think this is a bit loose. Isn't statistics supposed to be about getting precision in our knowledge? We might not know perfectly, but we want to say we're probably very close.  But there's a lot of assumptions going into all of this work, and what we're measuring isn't even the thing we want in the first place. There's some arbitrariness. For example, why pick as the threshold for p-values? Why not ?  Ultimately, statistics is a very human affair. The promise of avoiding all bias and setting out an Objective Truth That All Can Agree Upon is a false one. We can get information, and we can become more sure than before in our knowledge. But we must not be misled by numbers into thinking we have more than we do.  This then was the goal of this section: for you to understand enough about hypothesis testing to not be taken in by misconceptions as to its capabilities. This goal goes in hand with the larger goal in this chapter of critical engagement with statistics. Part of the homework for this chapter will ask you to practice this.  "
},
{
  "id": "sec11-inference-3",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "control group placebo null hypothesis hypothesis testing "
},
{
  "id": "sec11-inference-5",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distribution sample "
},
{
  "id": "sec11-inference-6",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-6",
  "type": "Example",
  "number": "11.4.1",
  "title": "",
  "body": " Perhaps you are a entomologist studying centipedes. As part of larger work you want to know the size of a species. The distribution is the different lengths across members of the species. As a sample you look at some centipedes and measure their lengths.  "
},
{
  "id": "sec11-inference-7",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-7",
  "type": "Example",
  "number": "11.4.2",
  "title": "",
  "body": " You are a pharmaceutical researcher studying a potential new blood pressure medication. The distribution you want to know about is blood pressures of people who take the medication versus those who don't. Your samples come from a drug trial where you measure what happens with a group given the drug versus a control group.  "
},
{
  "id": "sec11-inference-8",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statistic estimator "
},
{
  "id": "sec11-inference-9",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-9",
  "type": "Example",
  "number": "11.4.3",
  "title": "",
  "body": " You don't know the true average length of your centipede species. To estimate this unknown value, you compute the mean length of centipedes in your sample. If your sampling method is unbiased and your sample is large enough, this estimator will give a good estimate of the true mean.  On the other hand, if your sampling method is biased it will produce a poor estimate. For example, if your method of catching centipedes only grabs those above a certain length, you will overestimate the true mean length.  "
},
{
  "id": "sec11-inference-11",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "p-value "
},
{
  "id": "sec11-inference-12",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-12",
  "type": "Example",
  "number": "11.4.4",
  "title": "",
  "body": " You know the mean length for this species of centipede is centimeters. You measured that the mean length of your centipedes after the special diet is centimeters. You do a hypothesis test and calculate a p-value of . That is, under the assumption that the special diet has no effect, there's only a chance of getting a sample mean at least centimeters above the mean. This p-value is small, so you have some confidence your intervention has effect.  "
},
{
  "id": "sec11-inference-15",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-15",
  "type": "Definition",
  "number": "11.4.5",
  "title": "Normal distributions.",
  "body": "Normal distributions  A normal distribution is a kind of distribution which is shaped like a bell curve. If you randomly sample, most values will be near the mean, with farther away outliers being more and more unlikely. A normal distribution is specified by two parameters, its mean and standard deviation.   A normal distribution. A bell-shaped curve with a mean at . As you go out from the mean the curve gets closer and closer to the axis. The height of the curve above the horizontal axis represents the likelihood of that value. That is, values close to the mean are more likely and outliers are less likely.     "
},
{
  "id": "sec11-inference-17",
  "level": "2",
  "url": "sec11-inference.html#sec11-inference-17",
  "type": "Theorem",
  "number": "11.4.6",
  "title": "The central limit theorem.",
  "body": "The central limit theorem  Suppose you take an unbiased random sample from any distribution. Call the mean of this distribution and its standard deviation . (These are the Greek letters mu and sigma , the counterparts to the Latin m and s, for mean and standard deviation.) You sample times and calculate the mean of the sample. This mean sample mean is itself a random variable; different samples will produce a different mean according to chance.  The distribution of this random value is approximately a normal distribution, provided the number of samples is large enough. Indeed, this normal distribution has mean and standard deviation .  "
},
{
  "id": "sec11-exercises",
  "level": "1",
  "url": "sec11-exercises.html",
  "type": "Section",
  "number": "11.5",
  "title": "Exercises",
  "body": " Exercises    Find two different visualizations of data from an online or print media organization. Anything from a newspaper to a blog is fair game. One of the visualizations should be good. Explain why you think it effectively and accurately conveys its message. The other visualization should be misleading. Explain what about it is misleading, and how it gives an inaccurate view of the underlying data.  Please list your sources and include screenshots\/pictures of the graphics.    Consider the following two data sets. Calculate the means of the two, and explain what the different means tell you about how the two data sets differ.     Consider the following data set. Compute its mean, median, and mode. Explain what these tell you about how the data set is distributed.     Consider the following graphic listing various Christian denominations, ordered by the modal age of members of the denomination.   Twenty plots arranged into two rows. Each plot is a set of dots in a violin plot shape. The vertical axis represents age and each dot represents a quantity of people, with more dots in a row corresponding to more people of that age in the denomination. The twenty plots are ordered by the modal age of the denomination. They are, in order: Nondenominational Fundamentalist (72), Interdenominational (71) Lutheron-Missouri Synod (70), National Baptist Convention (69), United Methodist (67), ELCA (67), PCUSA (67), ABCUSA (65), United Church of Christ (65), Community Church (63), TEC (63), Nondenominational Charismatic (63), Southern Baptist (62), Baptist Miss. Association (62), Nondenominational Evangelical (61), Independent Baptist (61), Pentecostal Church of God (61), General Association of Regular Baptists (59), PC (59), and Free Will Baptist (54).   Image copyright Ryan Burge. Data taken from the Cooperative Election Study 2022–2024.   Reflect on the following, based on these plots. In these plots, what is the graphical meaning of the mode?  Does the mode provide a good measure of the center or average age of a congregation? Explain.  Does it make sense to order these by mode? That is, does it make sense to say that a denomination with a higher modal age is older than one with a lower modal age? Explain    In case it is not clear, modal is the adjective form of the noun mode .    Suppose you are dealing with a data set about housing costs. Your data set of monthly rents has the following summary statistics. Maximum .  Third quartile .  Median .  First quartile .  Minimum .  Based on this information, create a box and whisker plot to visualize your data. (You can either draw it by hand or use software.) Write a paragraph or two explaining what your plot tells you about housing costs.    Consider the following two data sets. Calculate their means then use that to calculate their standard deviations. Explain what the different standard deviations tell you about how the two data sets differ.     Use the internet to determine the following values about household income in Massachusetts: mean, median, first quartile, third quartile. Give those values, as well as the year they are for. Write a paragraph or two explaining the real world meaning of those numbers.  Please list your source(s). Note that an AI-generated summary, such as you might get from google, does not count as a source. Click through to links to find the original source being summarized via LLM.    Read the xkcd comic Significant . Explain the joke.    Read the American Statistical Association's statement on -values . Pick one of its six principles and explain in your own words what it expresses about the uses and limitations of -values.    This exercise is about the article Teaching the difficult past of statistics to improve the future . Read the abstract and the introduction, then read one of the following: section 2.1 about Francis Galton, section 2.2 about Karl Pearson, or section 2.3 about R. A. Fisher. Write a few paragraphs covering the following. What statistical work is the person you read about known for?  What work in eugenics did he do?  Does knowing this context about this founder of statistics inform how you think about the use of statistics? Expound.      "
},
{
  "id": "sec11-exercises-2-1",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-1",
  "type": "Exercise",
  "number": "11.5.1",
  "title": "",
  "body": " Find two different visualizations of data from an online or print media organization. Anything from a newspaper to a blog is fair game. One of the visualizations should be good. Explain why you think it effectively and accurately conveys its message. The other visualization should be misleading. Explain what about it is misleading, and how it gives an inaccurate view of the underlying data.  Please list your sources and include screenshots\/pictures of the graphics.  "
},
{
  "id": "sec11-exercises-2-2",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-2",
  "type": "Exercise",
  "number": "11.5.2",
  "title": "",
  "body": " Consider the following two data sets. Calculate the means of the two, and explain what the different means tell you about how the two data sets differ.   "
},
{
  "id": "sec11-exercises-2-3",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-3",
  "type": "Exercise",
  "number": "11.5.3",
  "title": "",
  "body": " Consider the following data set. Compute its mean, median, and mode. Explain what these tell you about how the data set is distributed.   "
},
{
  "id": "sec11-exercises-2-4",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-4",
  "type": "Exercise",
  "number": "11.5.4",
  "title": "",
  "body": " Consider the following graphic listing various Christian denominations, ordered by the modal age of members of the denomination.   Twenty plots arranged into two rows. Each plot is a set of dots in a violin plot shape. The vertical axis represents age and each dot represents a quantity of people, with more dots in a row corresponding to more people of that age in the denomination. The twenty plots are ordered by the modal age of the denomination. They are, in order: Nondenominational Fundamentalist (72), Interdenominational (71) Lutheron-Missouri Synod (70), National Baptist Convention (69), United Methodist (67), ELCA (67), PCUSA (67), ABCUSA (65), United Church of Christ (65), Community Church (63), TEC (63), Nondenominational Charismatic (63), Southern Baptist (62), Baptist Miss. Association (62), Nondenominational Evangelical (61), Independent Baptist (61), Pentecostal Church of God (61), General Association of Regular Baptists (59), PC (59), and Free Will Baptist (54).   Image copyright Ryan Burge. Data taken from the Cooperative Election Study 2022–2024.   Reflect on the following, based on these plots. In these plots, what is the graphical meaning of the mode?  Does the mode provide a good measure of the center or average age of a congregation? Explain.  Does it make sense to order these by mode? That is, does it make sense to say that a denomination with a higher modal age is older than one with a lower modal age? Explain    In case it is not clear, modal is the adjective form of the noun mode .  "
},
{
  "id": "sec11-exercises-2-5",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-5",
  "type": "Exercise",
  "number": "11.5.5",
  "title": "",
  "body": " Suppose you are dealing with a data set about housing costs. Your data set of monthly rents has the following summary statistics. Maximum .  Third quartile .  Median .  First quartile .  Minimum .  Based on this information, create a box and whisker plot to visualize your data. (You can either draw it by hand or use software.) Write a paragraph or two explaining what your plot tells you about housing costs.  "
},
{
  "id": "sec11-exercises-2-6",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-6",
  "type": "Exercise",
  "number": "11.5.6",
  "title": "",
  "body": " Consider the following two data sets. Calculate their means then use that to calculate their standard deviations. Explain what the different standard deviations tell you about how the two data sets differ.   "
},
{
  "id": "sec11-exercises-2-7",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-7",
  "type": "Exercise",
  "number": "11.5.7",
  "title": "",
  "body": " Use the internet to determine the following values about household income in Massachusetts: mean, median, first quartile, third quartile. Give those values, as well as the year they are for. Write a paragraph or two explaining the real world meaning of those numbers.  Please list your source(s). Note that an AI-generated summary, such as you might get from google, does not count as a source. Click through to links to find the original source being summarized via LLM.  "
},
{
  "id": "sec11-exercises-2-8",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-8",
  "type": "Exercise",
  "number": "11.5.8",
  "title": "",
  "body": " Read the xkcd comic Significant . Explain the joke.  "
},
{
  "id": "sec11-exercises-2-9",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-9",
  "type": "Exercise",
  "number": "11.5.9",
  "title": "",
  "body": " Read the American Statistical Association's statement on -values . Pick one of its six principles and explain in your own words what it expresses about the uses and limitations of -values.  "
},
{
  "id": "sec11-exercises-2-10",
  "level": "2",
  "url": "sec11-exercises.html#sec11-exercises-2-10",
  "type": "Exercise",
  "number": "11.5.10",
  "title": "",
  "body": " This exercise is about the article Teaching the difficult past of statistics to improve the future . Read the abstract and the introduction, then read one of the following: section 2.1 about Francis Galton, section 2.2 about Karl Pearson, or section 2.3 about R. A. Fisher. Write a few paragraphs covering the following. What statistical work is the person you read about known for?  What work in eugenics did he do?  Does knowing this context about this founder of statistics inform how you think about the use of statistics? Expound.    "
},
{
  "id": "sec12-frequentism",
  "level": "1",
  "url": "sec12-frequentism.html",
  "type": "Section",
  "number": "12.1",
  "title": "The meaning of probability: frequentism",
  "body": " The meaning of probability: frequentism   Probability theory is the area of mathematics which studies probability , the quantification of uncertainty. Many things in life are uncertain; no one needs to be told what uncertainty is. But if you want to quantify it then need to think a little about what that means.  As toy examples we will look at games of chance, such as those with dice or playing cards. These make a good setting for starting probability because they have clear rules that enable an unambiguous mathematicization of what's going on. Other, more important instances of uncertainty in our lives are more difficult. For instance, if you want to model uncertain outcomes after a medical diagnosis there are a lot of complicated, non-mathematical details to understand.  With that in mind let me describe these toy examples.  Dice  Some games of chance are played with numerical dice , solids whose sides are each labeled with a number from to the number of sides of the die. Thus, the result of a roll of a die is a number. By far the most commonly used dice are six-sided dice, shaped like a cube (that is, a regular hexahedron). Less commonly used are dice shaped like other Platonic solids: the four-sided tetrahedron, the eight-sided octahedron, the twelve-sided dodecahedron and the twenty-sided icosahedron. One also sees non-Platonic dice with other numbers of sides. Or one can think of a coin as a two-sided die. Abstractly, a die is a device for generating a random number from to .  We will write to refer to a die with sides, or to the outcome of rolling such a die. We will write to refer to the outcome of rolling many s and adding together the results. Expressions like have the meaning you expect—in this case, the result of rolling two s adding the results plus .   An image of five dice with different number of sides. Starting at one o'clock and going clockwise, therea is a , a , a , a , and a .      In the Anglophone world, the most commonly used playing cards are the card deck with French suits (hearts, diamonds, clubs, spades). Other decks use different suits or a different number of cards. But we will use the one you are most likely to have seen before.  Cards  The standard playing cards deck consists of cards, plus sometimes extra joker cards. The cards are divided into four suits : hearts , diamonds , clubs , and spades . Each suit has cards of different ranks within it. Ten numbered cards , numbered from to . The is commonly called the ace .  Three face cards , namely the jack , queen , and king .     With these examples in hand we are now ready to give a meaning to the quantification of uncertainty.  The frequentist interpretation of probability  The frequentist interpretation of probability gives the following meaning. A random trial is a repeatable process with an uncertain outcome, such as rolling a die or picking a card from a deck. The probability of an outcome, expressed as a fraction or percent, is a measure of the frequency of that outcome given a large number of independent trials. Specifically, an outcome has probability , where , if given a large number of trials on average you see about fraction of them have that outcome.    If you roll the probability of getting a is , because if you rolled a large number of dice on average about one in six will be a .  If you draw a card at random from a deck, the probability of getting a heart is , because if you do this a lot on average about one in four will be a heart.  If you draw a card at random from a deck, the probability of getting a queen is , because if you do this many times you get a queen about one in thirteen times.  If you draw a card at random from a deck, the probability of getting the queen of hearts is , because doing this many times you get the queer of hearts about that fraction of times.    Notation for probability  For a random trial, the sample space is the set of possible atomic outcomes . An event is a set of atomic outcomes; think of an event as being something you might measure or look for in the outcome. We write to refer to the probability of an event . We call this whole combination of data, sample space to probability function, a probability space .    The trial of rolling the sample space is the set Example events includes the result is even  or the result is    If you roll the sample space is the set of all possible pairs of outcomes for the two dice. Example events include the sum is or the sum is .  If you draw a card from a deck, the sample space consists of all cards you might draw. Example events include the card is clubs or the card is a face card .   From this idea of what probability means you can extract some mathematical properties.   Because events are sets it is useful to use set theoretic notation when talking about them. If this notation is not fresh in your memory look at for a reminder.   Properties of probability  Here let be the sample space and and be events. Always .   and . That is, the event something happens has a probability of and the event nothing happens has a probability of .  If and are disjoint events, meaning they have no atomic outcomes in common, then . That is, if events are disjoint the probability that at least one of them happens is the sum of their individual probabilities.     The first property says that negative probabilities don't make sense and that probabilities can't exceed . Thinking in terms of percents, this says something can't have less than a chance of happening nor more than a chance of happening. The second property tells you events which reach the smallest and largest possible probabilities. Namely the empty event  of nothing happens has probability and the entire sample space—think something happens —has probability .  The third property, call it additivity is a key one. It says that you can calculate probabilities by adding them together, provided the events don't overlap. As we will see in the next session, this property enables us to do calculations.   "
},
{
  "id": "sec12-frequentism-2",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Probability theory probability "
},
{
  "id": "sec12-frequentism-5",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-5",
  "type": "Definition",
  "number": "12.1.1",
  "title": "Dice.",
  "body": "Dice  Some games of chance are played with numerical dice , solids whose sides are each labeled with a number from to the number of sides of the die. Thus, the result of a roll of a die is a number. By far the most commonly used dice are six-sided dice, shaped like a cube (that is, a regular hexahedron). Less commonly used are dice shaped like other Platonic solids: the four-sided tetrahedron, the eight-sided octahedron, the twelve-sided dodecahedron and the twenty-sided icosahedron. One also sees non-Platonic dice with other numbers of sides. Or one can think of a coin as a two-sided die. Abstractly, a die is a device for generating a random number from to .  We will write to refer to a die with sides, or to the outcome of rolling such a die. We will write to refer to the outcome of rolling many s and adding together the results. Expressions like have the meaning you expect—in this case, the result of rolling two s adding the results plus .   An image of five dice with different number of sides. Starting at one o'clock and going clockwise, therea is a , a , a , a , and a .     "
},
{
  "id": "sec12-frequentism-7",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-7",
  "type": "Definition",
  "number": "12.1.2",
  "title": "Cards.",
  "body": "Cards  The standard playing cards deck consists of cards, plus sometimes extra joker cards. The cards are divided into four suits : hearts , diamonds , clubs , and spades . Each suit has cards of different ranks within it. Ten numbered cards , numbered from to . The is commonly called the ace .  Three face cards , namely the jack , queen , and king .    "
},
{
  "id": "sec12-frequentism-9",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-9",
  "type": "Definition",
  "number": "12.1.3",
  "title": "The frequentist interpretation of probability.",
  "body": "The frequentist interpretation of probability  The frequentist interpretation of probability gives the following meaning. A random trial is a repeatable process with an uncertain outcome, such as rolling a die or picking a card from a deck. The probability of an outcome, expressed as a fraction or percent, is a measure of the frequency of that outcome given a large number of independent trials. Specifically, an outcome has probability , where , if given a large number of trials on average you see about fraction of them have that outcome.  "
},
{
  "id": "sec12-frequentism-10",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-10",
  "type": "Example",
  "number": "12.1.4",
  "title": "",
  "body": " If you roll the probability of getting a is , because if you rolled a large number of dice on average about one in six will be a .  If you draw a card at random from a deck, the probability of getting a heart is , because if you do this a lot on average about one in four will be a heart.  If you draw a card at random from a deck, the probability of getting a queen is , because if you do this many times you get a queen about one in thirteen times.  If you draw a card at random from a deck, the probability of getting the queen of hearts is , because doing this many times you get the queer of hearts about that fraction of times.   "
},
{
  "id": "sec12-frequentism-11",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-11",
  "type": "Definition",
  "number": "12.1.5",
  "title": "Notation for probability.",
  "body": "Notation for probability  For a random trial, the sample space is the set of possible atomic outcomes . An event is a set of atomic outcomes; think of an event as being something you might measure or look for in the outcome. We write to refer to the probability of an event . We call this whole combination of data, sample space to probability function, a probability space .  "
},
{
  "id": "sec12-frequentism-12",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-12",
  "type": "Example",
  "number": "12.1.6",
  "title": "",
  "body": " The trial of rolling the sample space is the set Example events includes the result is even  or the result is    If you roll the sample space is the set of all possible pairs of outcomes for the two dice. Example events include the sum is or the sum is .  If you draw a card from a deck, the sample space consists of all cards you might draw. Example events include the card is clubs or the card is a face card .  "
},
{
  "id": "sec12-frequentism-15",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-15",
  "type": "Definition",
  "number": "12.1.7",
  "title": "Properties of probability.",
  "body": "Properties of probability  Here let be the sample space and and be events. Always .   and . That is, the event something happens has a probability of and the event nothing happens has a probability of .  If and are disjoint events, meaning they have no atomic outcomes in common, then . That is, if events are disjoint the probability that at least one of them happens is the sum of their individual probabilities.    "
},
{
  "id": "sec12-frequentism-16",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty event "
},
{
  "id": "sec12-frequentism-17",
  "level": "2",
  "url": "sec12-frequentism.html#sec12-frequentism-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "additivity "
},
{
  "id": "sec12-counting",
  "level": "1",
  "url": "sec12-counting.html",
  "type": "Section",
  "number": "12.2",
  "title": "Counting and probability",
  "body": " Counting and probability  The previous section was heavy with definitions. Now that we've established what we're talking about with probability the next task is how do we actually calculate things.  More advanced applications of probability use sample spaces with infinitely many possible outcomes. For example, if you want to model getting the weight of a random fish from Cape Cod then it makes sense to use (positive) real numbers as the possible weights. There are infinitely many real numbers, even if you restrict to a range of numbers, so the sample space will have infinitely many atomic outcomes in it.  These applications are more difficult and require ideas from calculus to fully handle. As such we will set them aside and only look at finite sample spaces. That is, we will only consider scenarios where there are finitely many atomic outcomes.  The calculus idea used here is one that we touched against when talking about geometry, namely the integral . A beautiful thing about mathematics is how disparate fields—in this case, geometry and probability—can make use of the same concepts.  Calculations are easiest in the scenario when all atomic outcomes are equally likely, and by happy coincidence this is a common scenario.  Uniform probability  A probability space is said to be uniform if all atomic outcomes have the same probability.  For a sample space , we use the set-theoretic notation to denote the number of atomic outcomes in . Thus, the probability of an atomic outcome will be     The reason the probability of each atomic outcome must be is that the probability of the total space is always . Since that total probability mass is divided equally between pieces we can get their individual probabilities.  When talking about uniform probability, it's common for people to say something like a card is picked at random from a deck , with the phrase at random indicating that the selection process is uniform. This is perhaps a misnomer—after all, a weighted dice produces a random outcome but some results are more common than others—which is why in stuffier contexts you will see it more clearly said as uniformly at random .  Fundamental property of uniform probability  Consider an event in a finite, uniform probability space. Let denote the sample space. Then, That is, calculating probabilities in a uniform probability space amounts to doing two counting problems: count the number of outcomes in the event and count the total number of possible outcomes.  Use the additivity property of probability. The event consists of many atomic outcomes. Because they are atomic, these outcomes don't overlap at all. Thus must be what you get when you add many copies of .   In a slogan, uniform probability is about counting.   You roll a . How likely are you to roll a prime number? What if you roll a ? A ?  The prime numbers up to are . To calculate these probabilities we need to count the number of primes and the number of sides on the die. The second count is easy, as it's given to us.     You draw a card at random from a deck of playing cards. How likely is it that you draw a face card?    You roll . How likely is it that they sum to ?  The easiest way to think about this is to consider as your sample space all possible rolls of the two dice. Thus there are different atomic outcomes. That gives the denominator for the probability. It remains to get the count for the numerator. To do this, we can list out all outcomes which sum to : Thus the probability of rolling a is     You are playing poker with a single deck. You and your two friends have the following hands. You are the first to get a chance to discard and redraw to complete your five card hand. You decide to discard your to attempt to get a second to complete a full house of three s and two s. How likely are you to succeed? How likely are you to either get your full house or instead draw the final for a four of a kind?  While the full deck has cards in it, you can't draw a card that's already on the table.   In theory, you can always calculate a (uniform) probability by counting up the number of outcomes in the event and dividing by the total number of possible outcomes. In practice, however, this is not always feasible. We want to have some shortcuts that allow us simplify counting problems. We can use facts about probability to enable these shortcuts.  Complementary events  The complement of an event is the event  doesn't happen . In set theoretic language, this is saying that , where is the sample space. We write for the complement of .   For example, in the probability space of rolling a , the complement of the event rolling an even number is rolling an odd number . Note that the complement of the complement of is always itself.   What is the complement of the empty event ? What is the complement of the sample space ?   Probability of complements  If is an event then   Use the additivity property of probability. The events and are disjoint and their union is the entire sample space . Thus     You roll . How likely is it that you don't roll a ?  Earlier we calculated that the probability of rolling a was . Thus the probability of not rolling a is    Independence  Two events and are independent if, intuitively, whether one happens doesn't affect the likelihood of the other. Formally, this idea is captured by the equation That is, two events are independent if the probability they both happen is the product of their individual probabilities.   Most often, the utility of independence is that it lets you use that equation. If it's clear from the definition of events that they are independent then that equation lets you replace a more difficult count with two easier counts.   You roll two s. How likely is it that both results are at least ? How likely is it that at least one result is at least ?  You could solve these by listing out all possible pairs of results and counting from them. But is a big number and that sounds like a lot of work. Instead let's use independence. It's clear that the result of one die is independent of the result of the other.  For the first question, to apply independence we first need to calculate how likely it is that one has a result . This is a quick count: there are numbers which are and , so it is . Then, For the second question, it's easiest to also use complements. Letting denote the event rolling at least one it's easier to directly calculate the probability of the event  both rolling . Again, independence makes this easy. There are results which are . Thus Finally, .    You draw a card from a deck, replace it and reshuffle, then draw again. How likely is it that you draw two spades?   Be careful when you apply independence. If your events aren't actually independent you can't use the product equation. It'll give you wrong answers.   You draw a card from a deck, then draw another card without replacing the original. How likely is it that you draw the jack of spades both times?  If you naively try to use independence, you might calculate like this. For the first draw, there's outcome in you are looking for, so the probability is . For the second draw it's , because there's one fewer draw. Therefore, the probability is A small chance, but still a chance!.  If you think for a moment longer, however, you see that actually the probability is . You can't draw the same card twice, since you didn't replace after the first draw! That is, the two draws weren't actually independent.   The product equation is so helpful we'd like it to work even when things aren't quite independent. Fortunately, there's a way to make it happen.  Sometimes you can think of an event as a two step process—first happens then happens. If you want to know how likely is it that and both happen you can follow this two step process. First calculate how likely is it that happens. Then, under the assumption that has already happened, calculate how likely is it that also happens.   Let's use the same example of drawing the jack of spades twice. Think of it as a two step process. The first step is, drawing the jack of spades from cards. This has probability . For the second step, how likely is it to draw the jack of spades from the remaining cards? The answer is , because none of the remaining cards is the jack of spades. So the overall probability is     You draw two cards from a deck, without replacement. How likely is it they are both face cards?  Think of it as a two step process. For the first step, of cards are face cards, so the probability is . For the second step, if you already drew one face card then of the remaining are face cards. So the probability you draw two face cards is     You draw three cards from a deck, without replacement. How likely is it they are all black cards (that is, either spades or clubs)?  You know what to do for a two step process. How do you generalize that to three steps?    Explain how to calculate the probability of a four step process. Can you also do five steps? Six steps? What is the most general thing you can say?   Here's an explanation for why this way of thinking about two step processes gives you correct calculations. Imagine the sample space as a big rectangle. First you pick the row (the first step), then you pick the column (the second step), to pick a spot in the rectangle. (Note that this is exactly the cartesian product picture from .) We are only interested in spots in the rectangle with the correct first step. Inside these rows we only care those with the correct second step. Those might differ from row to row. For example, the row for the first draw was will have as a valid second choice, whereas the row for the first draw was will not. But so long as there's the same number in each row, we can rearrange the rows to form a rectangle. And the area of a rectangle is found by multiplying.   "
},
{
  "id": "sec12-counting-5-1",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral "
},
{
  "id": "sec12-counting-7",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-7",
  "type": "Definition",
  "number": "12.2.1",
  "title": "Uniform probability.",
  "body": "Uniform probability  A probability space is said to be uniform if all atomic outcomes have the same probability.  For a sample space , we use the set-theoretic notation to denote the number of atomic outcomes in . Thus, the probability of an atomic outcome will be    "
},
{
  "id": "sec12-counting-10",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-10",
  "type": "Theorem",
  "number": "12.2.2",
  "title": "Fundamental property of uniform probability.",
  "body": "Fundamental property of uniform probability  Consider an event in a finite, uniform probability space. Let denote the sample space. Then, That is, calculating probabilities in a uniform probability space amounts to doing two counting problems: count the number of outcomes in the event and count the total number of possible outcomes.  Use the additivity property of probability. The event consists of many atomic outcomes. Because they are atomic, these outcomes don't overlap at all. Thus must be what you get when you add many copies of .  "
},
{
  "id": "sec12-counting-12",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-12",
  "type": "Checkpoint",
  "number": "12.2.3",
  "title": "",
  "body": " You roll a . How likely are you to roll a prime number? What if you roll a ? A ?  The prime numbers up to are . To calculate these probabilities we need to count the number of primes and the number of sides on the die. The second count is easy, as it's given to us.   "
},
{
  "id": "sec12-counting-13",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-13",
  "type": "Checkpoint",
  "number": "12.2.4",
  "title": "",
  "body": " You draw a card at random from a deck of playing cards. How likely is it that you draw a face card?  "
},
{
  "id": "sec12-counting-14",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-14",
  "type": "Checkpoint",
  "number": "12.2.5",
  "title": "",
  "body": " You roll . How likely is it that they sum to ?  The easiest way to think about this is to consider as your sample space all possible rolls of the two dice. Thus there are different atomic outcomes. That gives the denominator for the probability. It remains to get the count for the numerator. To do this, we can list out all outcomes which sum to : Thus the probability of rolling a is   "
},
{
  "id": "sec12-counting-15",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-15",
  "type": "Checkpoint",
  "number": "12.2.6",
  "title": "",
  "body": " You are playing poker with a single deck. You and your two friends have the following hands. You are the first to get a chance to discard and redraw to complete your five card hand. You decide to discard your to attempt to get a second to complete a full house of three s and two s. How likely are you to succeed? How likely are you to either get your full house or instead draw the final for a four of a kind?  While the full deck has cards in it, you can't draw a card that's already on the table.  "
},
{
  "id": "sec12-counting-17",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-17",
  "type": "Definition",
  "number": "12.2.7",
  "title": "Complementary events.",
  "body": "Complementary events  The complement of an event is the event  doesn't happen . In set theoretic language, this is saying that , where is the sample space. We write for the complement of .  "
},
{
  "id": "sec12-counting-19",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-19",
  "type": "Checkpoint",
  "number": "12.2.8",
  "title": "",
  "body": " What is the complement of the empty event ? What is the complement of the sample space ?  "
},
{
  "id": "sec12-counting-20",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-20",
  "type": "Theorem",
  "number": "12.2.9",
  "title": "Probability of complements.",
  "body": "Probability of complements  If is an event then   Use the additivity property of probability. The events and are disjoint and their union is the entire sample space . Thus   "
},
{
  "id": "sec12-counting-21",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-21",
  "type": "Checkpoint",
  "number": "12.2.10",
  "title": "",
  "body": " You roll . How likely is it that you don't roll a ?  Earlier we calculated that the probability of rolling a was . Thus the probability of not rolling a is   "
},
{
  "id": "sec12-counting-22",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-22",
  "type": "Definition",
  "number": "12.2.11",
  "title": "Independence.",
  "body": "Independence  Two events and are independent if, intuitively, whether one happens doesn't affect the likelihood of the other. Formally, this idea is captured by the equation That is, two events are independent if the probability they both happen is the product of their individual probabilities.  "
},
{
  "id": "sec12-counting-24",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-24",
  "type": "Checkpoint",
  "number": "12.2.12",
  "title": "",
  "body": " You roll two s. How likely is it that both results are at least ? How likely is it that at least one result is at least ?  You could solve these by listing out all possible pairs of results and counting from them. But is a big number and that sounds like a lot of work. Instead let's use independence. It's clear that the result of one die is independent of the result of the other.  For the first question, to apply independence we first need to calculate how likely it is that one has a result . This is a quick count: there are numbers which are and , so it is . Then, For the second question, it's easiest to also use complements. Letting denote the event rolling at least one it's easier to directly calculate the probability of the event  both rolling . Again, independence makes this easy. There are results which are . Thus Finally, .  "
},
{
  "id": "sec12-counting-25",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-25",
  "type": "Checkpoint",
  "number": "12.2.13",
  "title": "",
  "body": " You draw a card from a deck, replace it and reshuffle, then draw again. How likely is it that you draw two spades?  "
},
{
  "id": "sec12-counting-27",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-27",
  "type": "Checkpoint",
  "number": "12.2.14",
  "title": "",
  "body": " You draw a card from a deck, then draw another card without replacing the original. How likely is it that you draw the jack of spades both times?  If you naively try to use independence, you might calculate like this. For the first draw, there's outcome in you are looking for, so the probability is . For the second draw it's , because there's one fewer draw. Therefore, the probability is A small chance, but still a chance!.  If you think for a moment longer, however, you see that actually the probability is . You can't draw the same card twice, since you didn't replace after the first draw! That is, the two draws weren't actually independent.  "
},
{
  "id": "sec12-counting-30",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-30",
  "type": "Example",
  "number": "12.2.15",
  "title": "",
  "body": " Let's use the same example of drawing the jack of spades twice. Think of it as a two step process. The first step is, drawing the jack of spades from cards. This has probability . For the second step, how likely is it to draw the jack of spades from the remaining cards? The answer is , because none of the remaining cards is the jack of spades. So the overall probability is   "
},
{
  "id": "sec12-counting-31",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-31",
  "type": "Checkpoint",
  "number": "12.2.16",
  "title": "",
  "body": " You draw two cards from a deck, without replacement. How likely is it they are both face cards?  Think of it as a two step process. For the first step, of cards are face cards, so the probability is . For the second step, if you already drew one face card then of the remaining are face cards. So the probability you draw two face cards is   "
},
{
  "id": "sec12-counting-32",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-32",
  "type": "Checkpoint",
  "number": "12.2.17",
  "title": "",
  "body": " You draw three cards from a deck, without replacement. How likely is it they are all black cards (that is, either spades or clubs)?  You know what to do for a two step process. How do you generalize that to three steps?  "
},
{
  "id": "sec12-counting-33",
  "level": "2",
  "url": "sec12-counting.html#sec12-counting-33",
  "type": "Checkpoint",
  "number": "12.2.18",
  "title": "",
  "body": " Explain how to calculate the probability of a four step process. Can you also do five steps? Six steps? What is the most general thing you can say?  "
},
{
  "id": "sec12-perm",
  "level": "1",
  "url": "sec12-perm.html",
  "type": "Section",
  "number": "12.3",
  "title": "Permutations and combinations",
  "body": " Permutations and combinations  A key idea we ended on in the last section is that if an event can be thought of as a multistep process, you can determine its event by multiplying. In this section we build on that idea by looking at some common counting problems.  We begin with a well-known example, known as the birthday problem .   You are at a party with people total. Is it more likely that two people share a birthday or that everyone has different birthdays?  To answer this, we will make a couple simplifying assumptions. First, we will exclude leap day birthdays, which occur approximately every four years. Second, we will assume that all birthdays are equally likely. These assumptions will mean our probability calculation won't be correct. But it will be close enough to know which outcome is more likely.  We are dealing with complementary events, so knowing one's probability lets us easily compute the other. As such we should ask, which of the two is easier to calculate? Take a moment to ask that.  Perhaps you answered that it's easier to calculate how likely it is that everyone has a different birthday. I agree. We can think of this as a twenty step process—pick the first birthday, then the second one, and so on, each time having to pick a different one. On the other hand, it's hard to model two people sharing a birthday as a multi-step process—which two?  For the first step, there are birthdays and are free to claim without conflict. For the second person, there are birthdays and are free to claim without conflict. After all, there's only one day that's off-limit so far. Each step we get one fewer allowed birthday while still having to choose from. Thus we get the following big product to calculate: At this point we pull out a computer because this is tedious to do by hand. The probability is That is it is only slightly more likely that all birthdays are different than that two people share a birthday. This is even though there's only twenty people at the party, much less than the possible birthdays.  If there's instead people at the party, you can run a similar calculation. In this case, the probability everyone has a different birthday is . That is, with only people it's much more likely to have two people share a birthday than it is otherwise. It's at people that this tipping point occurs and it becomes more likely to have a shared birthday.  Some people call this the birthday paradox, because they think it doesn't make sense for a shared birthday to be more common than not when you have so much fewer people than days in the year. But our calculations show this expectation is flawed.   Let's introduce some notation for this kind of counting problem.  Factorials and permutations  A permutation of a finite list of things is a way to order those things. The factorial function, written , counts how many permutations there are for a list of many things.  We can calculate factorials using the rule that is the product of all whole numbers from down to : Alternatively, we can use these rules    To understand the formula, think of picking a permutation as an step process. First you pick the first object, then the second, then the third, and so on until there are none left. You start with choices, and each step has one fewer. For example, if you want to order things there are ways to do it.  That is the sort of thing that mathematicians think is natural and obvious but makes normal people upset. Let me defend the choice. How many ways are there to order zero things? The answer, of course, is one. There is only one way to do it, namely to do nothing. Think, how many ways are there to order zero books on a shelf: just one, namely leaving the shelf bare.  If you don't find that satsifactory, here are two more arguments. First, is the product of zero many numbers, and if you multiple zero numbers together you should get the multiplicative identity . This is the same reasoning as why for any base . Second, there are useful formulas involving factorials that make sense when to talk about with . For these formulas, having gives the correct answer. (We will see one of these formulas soon when we talk about combinatins.) So this is a practical choice.  Not so secretly this practical choice is the original answer in a beaglepuss. Why do these formulas give the correct answer when we say ? Because what we are counting is the number of ways to order zero things.  With the birthday problem example, we didn't calculate but rather something close to it. We weren't asking how many ways to order birthdays but rather only picked twenty of them. Let's also give a name to this concept.  Falling factorial  Consider nonnegative numbers and with . Define the falling factorial  as the product of many integers in sequence counting down from : Note that to have many numbers multiplied, the last one should be , not .  The falling factorial counts the number of ways to order many things from options. Note that .   Note that But the latter formula isn't helpful in practice since it requires you to divide two large numbers. For example, it's easier to compute rather than compute    Explain the equality in the above paragraph. Why is     There are eight swimmers in a race. How many different possible outcomes are there for who takes the top three positions?  To count this, we can think of it as a three step process. There's many possibliities for who gets first. Once that's chosen, there's many possibilities for second, and then many possibilities for third. So in all there are possible outcomes for the top three.  Note that if you want to know about the order of all eight swimmers there's many more possible outcomes, namely many. If we only care about the top three then, for instance, we aren't going to count it as a different outcome if seventh and eighth swap places. As such there are much fewer outcomes to count.    There are twenty people at a party. How many different ways are there for them to all have different birthdays? (Discount leap days.)  We've seen this counting problem before. There's options for the first person, then as we go along there's one fewer option for each person. Thus in total there are many possibilities.    You choose a PIN at random for your ATM card. If the PIN is four digits, how likely is it that every digit differs?  This is a question about uniform probability, so it reduces to two counting problems. We want to calculate Let's count the denominator first. Choosing a PIN is a four step process, with each step having options: the digits through . So in total there are many possible PINs.  The numerator is also chosen by a four step process, except this time each step you have one fewer option than before. Thus the numerator is counted by In all, the probability a random PIN doesn't repeat a digit is    Note that this was essentially the same as the birthday problem. The numbers were different— choices from options rather than choices from options. But it's the same general formula of falling factorial over an exponent:   Factorials and falling factorials count selection processes where the order matters—you care about what comes first versus second. Many selection processes are not like that. For example, maybe you need to select three students from a class of twenty to do a group project. It doesn't make sense to say who is picked first versus second versus third. If you tried to count this as you would be way overcounting, since that would count picking Alice then Bob then Carol and different from picking Bob then Alice then Carol.  We need a different device to count this.  Binomial coefficients  Consider nonnegative numbers and with . Define the binomial coefficient , also called a combination , as The binomial coefficient counts the number of ways to choose many things from options, where you don't care about order.   The binomial coefficient is so named for its connection to coefficients of the binomial power , but explaining this connection would be too far a detour for us.   You are picking three students from a class of twenty to do a group project. How many ways are there to do this?  We use the binomial coefficient to count this:    Let's see where this formula comes from. Here's a way to think about this counting problem. To pick three students from twenty, pick a way to order all twenty students, then pick the first three in the order. There's ways to do this. However, there's not different outcomes. If you swap the first and second student you get the same group of three. Or if you swap the thirteenth and nineteenth. So we need to divide out by the amount we are overcounting. One way we overcount is that rearranging the first three students doesn't change the outcome. There's ways to order them, so we need to divide by . The other way we overcount is the rearring the last seventeen students doesn't change the outcome. So we also need to divide by , the number of ways to do that. In all, our count is   In general, if you are choosing things from where you don't care about order, you can think of the process as ordering all things and keeping the first . There's ways to do this, but we're overcounting by factors of (you can reorder the first ) and (you can reorder the last ). In all the count is    You are choosing three students from a class of twenty to do a group project. How likely is it that Alice is in the group?  We need to calculate We've already counted that the denominator is . It remains to count the numerator. For this, we ask how ways are there to pick a group that includes Alice? For this, Alice's place is already fixed so we just need to pick the remaining two students. There's ninteen options for them (you already picked Alice). So the numerator is . Thus the likelihood you put Alice in the group is     Your department of people is picking people to form a committee. This committee will have a chairperson. If all choices are made randomly, how likely is it that you end up on the committee? How likely is it that you are the chairperson?  The first question is similar to the previous exercise. For the second, think of it as a two step process: first pick the committee, then pick the chair. So to calculate the probabliity that you are on the committee and are the chair you can multiply the probablity that you are on the committee by the probability that, assuming you're on the committee, you are chosen as chair.    You randomly divide a class of ten students into two equally sized groups. In this class are Alice and Bob, who hate each other. How likely is it that Alice and Bob end up in the same group?  You can't count this directly using binomial coefficients. Instead, you need to think similar to how we got the formula for . Think of your choice as being made by ordering the ten students and splitting the first five from the last five. How likely is it that Alice and Bob are on the same side? Is it easier to do the count if you assume you put Alice first and then ordered the remaining students?   "
},
{
  "id": "sec12-perm-3",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "birthday problem "
},
{
  "id": "sec12-perm-4",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-4",
  "type": "Example",
  "number": "12.3.1",
  "title": "",
  "body": " You are at a party with people total. Is it more likely that two people share a birthday or that everyone has different birthdays?  To answer this, we will make a couple simplifying assumptions. First, we will exclude leap day birthdays, which occur approximately every four years. Second, we will assume that all birthdays are equally likely. These assumptions will mean our probability calculation won't be correct. But it will be close enough to know which outcome is more likely.  We are dealing with complementary events, so knowing one's probability lets us easily compute the other. As such we should ask, which of the two is easier to calculate? Take a moment to ask that.  Perhaps you answered that it's easier to calculate how likely it is that everyone has a different birthday. I agree. We can think of this as a twenty step process—pick the first birthday, then the second one, and so on, each time having to pick a different one. On the other hand, it's hard to model two people sharing a birthday as a multi-step process—which two?  For the first step, there are birthdays and are free to claim without conflict. For the second person, there are birthdays and are free to claim without conflict. After all, there's only one day that's off-limit so far. Each step we get one fewer allowed birthday while still having to choose from. Thus we get the following big product to calculate: At this point we pull out a computer because this is tedious to do by hand. The probability is That is it is only slightly more likely that all birthdays are different than that two people share a birthday. This is even though there's only twenty people at the party, much less than the possible birthdays.  If there's instead people at the party, you can run a similar calculation. In this case, the probability everyone has a different birthday is . That is, with only people it's much more likely to have two people share a birthday than it is otherwise. It's at people that this tipping point occurs and it becomes more likely to have a shared birthday.  Some people call this the birthday paradox, because they think it doesn't make sense for a shared birthday to be more common than not when you have so much fewer people than days in the year. But our calculations show this expectation is flawed.  "
},
{
  "id": "sec12-perm-6",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-6",
  "type": "Definition",
  "number": "12.3.2",
  "title": "Factorials and permutations.",
  "body": "Factorials and permutations  A permutation of a finite list of things is a way to order those things. The factorial function, written , counts how many permutations there are for a list of many things.  We can calculate factorials using the rule that is the product of all whole numbers from down to : Alternatively, we can use these rules   "
},
{
  "id": "sec12-perm-12",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-12",
  "type": "Definition",
  "number": "12.3.3",
  "title": "Falling factorial.",
  "body": "Falling factorial  Consider nonnegative numbers and with . Define the falling factorial  as the product of many integers in sequence counting down from : Note that to have many numbers multiplied, the last one should be , not .  The falling factorial counts the number of ways to order many things from options. Note that .  "
},
{
  "id": "sec12-perm-14",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-14",
  "type": "Checkpoint",
  "number": "12.3.4",
  "title": "",
  "body": " Explain the equality in the above paragraph. Why is   "
},
{
  "id": "sec12-perm-15",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-15",
  "type": "Example",
  "number": "12.3.5",
  "title": "",
  "body": " There are eight swimmers in a race. How many different possible outcomes are there for who takes the top three positions?  To count this, we can think of it as a three step process. There's many possibliities for who gets first. Once that's chosen, there's many possibilities for second, and then many possibilities for third. So in all there are possible outcomes for the top three.  Note that if you want to know about the order of all eight swimmers there's many more possible outcomes, namely many. If we only care about the top three then, for instance, we aren't going to count it as a different outcome if seventh and eighth swap places. As such there are much fewer outcomes to count.  "
},
{
  "id": "sec12-perm-16",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-16",
  "type": "Example",
  "number": "12.3.6",
  "title": "",
  "body": " There are twenty people at a party. How many different ways are there for them to all have different birthdays? (Discount leap days.)  We've seen this counting problem before. There's options for the first person, then as we go along there's one fewer option for each person. Thus in total there are many possibilities.  "
},
{
  "id": "sec12-perm-17",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-17",
  "type": "Checkpoint",
  "number": "12.3.7",
  "title": "",
  "body": " You choose a PIN at random for your ATM card. If the PIN is four digits, how likely is it that every digit differs?  This is a question about uniform probability, so it reduces to two counting problems. We want to calculate Let's count the denominator first. Choosing a PIN is a four step process, with each step having options: the digits through . So in total there are many possible PINs.  The numerator is also chosen by a four step process, except this time each step you have one fewer option than before. Thus the numerator is counted by In all, the probability a random PIN doesn't repeat a digit is   "
},
{
  "id": "sec12-perm-21",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-21",
  "type": "Definition",
  "number": "12.3.8",
  "title": "Binomial coefficients.",
  "body": "Binomial coefficients  Consider nonnegative numbers and with . Define the binomial coefficient , also called a combination , as The binomial coefficient counts the number of ways to choose many things from options, where you don't care about order.  "
},
{
  "id": "sec12-perm-23",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-23",
  "type": "Example",
  "number": "12.3.9",
  "title": "",
  "body": " You are picking three students from a class of twenty to do a group project. How many ways are there to do this?  We use the binomial coefficient to count this:   "
},
{
  "id": "sec12-perm-26",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-26",
  "type": "Checkpoint",
  "number": "12.3.10",
  "title": "",
  "body": " You are choosing three students from a class of twenty to do a group project. How likely is it that Alice is in the group?  We need to calculate We've already counted that the denominator is . It remains to count the numerator. For this, we ask how ways are there to pick a group that includes Alice? For this, Alice's place is already fixed so we just need to pick the remaining two students. There's ninteen options for them (you already picked Alice). So the numerator is . Thus the likelihood you put Alice in the group is   "
},
{
  "id": "sec12-perm-27",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-27",
  "type": "Checkpoint",
  "number": "12.3.11",
  "title": "",
  "body": " Your department of people is picking people to form a committee. This committee will have a chairperson. If all choices are made randomly, how likely is it that you end up on the committee? How likely is it that you are the chairperson?  The first question is similar to the previous exercise. For the second, think of it as a two step process: first pick the committee, then pick the chair. So to calculate the probabliity that you are on the committee and are the chair you can multiply the probablity that you are on the committee by the probability that, assuming you're on the committee, you are chosen as chair.  "
},
{
  "id": "sec12-perm-28",
  "level": "2",
  "url": "sec12-perm.html#sec12-perm-28",
  "type": "Checkpoint",
  "number": "12.3.12",
  "title": "",
  "body": " You randomly divide a class of ten students into two equally sized groups. In this class are Alice and Bob, who hate each other. How likely is it that Alice and Bob end up in the same group?  You can't count this directly using binomial coefficients. Instead, you need to think similar to how we got the formula for . Think of your choice as being made by ordering the ten students and splitting the first five from the last five. How likely is it that Alice and Bob are on the same side? Is it easier to do the count if you assume you put Alice first and then ordered the remaining students?  "
},
{
  "id": "sec12-bayes",
  "level": "1",
  "url": "sec12-bayes.html",
  "type": "Section",
  "number": "12.4",
  "title": "The meaning of probability: Bayesianism",
  "body": " The meaning of probability: Bayesianism  In the previous sections, we talked about probability as coming from counting. This fits nicely with the frequentist interpretation of probability from . Recall that this interpretation gave the meaning as , the probability of an event , is the fraction of outcomes in you expect to see with many identitcal repeated random trials. If all atomic outcomes in the sample space are equally likely then you expect to see fraction of them in , so that is the probability.  While this view of what probability can be used in many places, it struggles in some important applications. For example, in we talked about statistical inference. This amounted to asking about probability: assuming the null hypothesis we want to reject, how likely is it to see outcomes this extreme?  It's difficult to put this into the frequentist framework of repeated random trials. Many statistical experiments are not repeatable. For example, perhaps you are trying to forecast an election and determine the odds for who wins. You can't run the election over and over to see how likely each outcome is. So a statement like Senator Example has a chance of winning reelection can't have the frequentist meaning.  In this section we will discuss a different interpretation of probability which better handles these cases. Along the way we will talk about conditional probability , which is the key concept in this interpretation.  We have seen conditional probability before, though not by that name. With statistical inference in we asked questions like assuming the null hypothesis , how likely is it to see an outcome this extreme? In when talking about multi-step processes we asked questions like assuming the outcome of the first step is known , how likely is the second step to be ? Conditional probability is about these sorts of calculations; assuming you have partial information, how does that determine the likelihood of outcomes?  Conditional probability  Suppose and are events in a probability space with sample space . The conditional probability of assuming , written , is the likelihood that happens assuming you know that happens. It can be calculated as In case you are dealing with uniform probability, it can equivalently be calculated by counting: Like many important concepts, this one goes by many names. You see people talk about the probabability of given or the the probability of conditional on or other ways to express conditional probability.   To explain the formulas. If you assume happens, there are many possible outcomes. How many of those are in ? It would overcount to say , since some of may be outside of . The correct count is , the number of outcomes in both and .  Note that conditional probability only makes sense if . If never happens then it doesn't make sense to ask how likely something is assuming happens.   You roll . Assuming the first die rolls a , how likely is it that the results sum to at least ?  This is a conditional probability. We could look at all outcomes of rolling three dice, but it's easier to think only about the outcomes where the first die is . There are outcomes to look at, since the remaining two dice rolls independently have outcomes each. We need to count how many of these outcomes sum to at least . We can do list them: These are outcomes, so the conditional probability is     Suppose and are events in a probability space. Then we can calculate their joint probability as   This falls out from writing these various probabilities as fractions. First let's write them as counts for uniform probability, where is the sample space: Alternatively you can write solely in terms of probabilities:     You roll . How likely is it that the first die rolls a and they sum to at least ?  Use conditional probability! You want to calculate , where  the first die is and  the sum is at least . In an earlier checkpoint we already calculated so what remains is to calculate .   You might wonder if there's any relationship between the two directions of conditional probability— versus . An important probability fact tells us they are related.  Bayes's theorem  Consider events and in a sample space, where both events have nonzero probability. Then   This is surprisingly straightforward. The key idea is to unpack the definition of conditional probability: . Substituting this into the righthand side of the equation we get Now note that is by definition of conditional probabilty, the same as . But that's the lefthand side of the equation.   A classic example of the use of Bayes's theorem is determining the reliability of a test. Suppose you are tested for a rare disease, and it comes up positive. How likely is it you actually have the disease? You might say it's very likely, since the test usually gets the correct answer. That is, false positives —the test wrongly coming up positive—and false negatives —the test wrongly coming up negative—are rare.  Let's do an example calculation to test this gut reaction.   Disease has a incidence rate, meaning it occurs in of the population. A test for disease has a chance of giving the correct diagnosis, whether positive or negative. You test positive. How likely is it you have disease ?  Let's give some names to these events. Call the event you have the disease and the event the test came back positive . What we are trying to calculate is the conditional probability . We know a few probabilities: The first is the incidence rate, the second is the true positive rate, and the last is the false positive rate. Because we know the conditional probability in the opposite direction, you might think we could use Bayes's theorem. You are correct. We will calculate You can think of the fraction on the right as follows. The numerator is what fraction of the population both has disease and has a positive test, while the denominator is how many have a positive test. We have to do a small amount of work to calculate the denominator, since we aren't given it directly. To calculate what fraction of the population have a positive test, we add together the true positives with the false positives. The true positives are given by the formula Similarly, the false negatives are given by the formula (We know because that's how many don't have the disease, namely .) Adding those together we get Now we plug the three values into Bayes's theorem: That is, there's only about a chance you have the disease.   Maybe you are surprised by this calculation. If the test is accurate, why is it overwhelming likely it gave the wrong answer? The reason is, the accuracy of the test was less than the incidence rate of the disease. As such, the false positives outnumbered the true positives. The lesson here is, the accuracy of a test needs to match or succeed the incidence rate to give good info.   Some details are being swept under the rug for simplicity. Let me highlight one. In practice, the incidence rate across the entire population isn't what you want to look at. Rather, you want to look at a subpopulation, such as only women over the age of or only people exhibiting XYZ symptom. The reason is, if it's a rare disease the test isn't being given to everyone. Instead, it's only given to people particularly at risk or for whom there's already reason to suspect they might have it.  So the level of accuracy you need for the test is lower than what you'd think you need if you looked at the incidence rate across the entire population. In this example, maybe the disease only occurs in of the population but is in of the relevant subpopulation. If you rerun the calculation with you'll get a much higher chance that you actally have the disease.   This example illustrates one practical use of Bayes's theorem. The main purpose in mentioning it, however, is to set up the discussion for an interpretation of probability different from the frequentist's.  The Bayesian interpretation of probability  The Bayesian interpretation of probability , also called the subjective interpretation , gives the following meaning. A probability represents a degree of confidence that the event will happen. For example, if is the event of a coin flip coming up heads you might assign . However, if you happen to know that the coin is biased to come up tails most of the time you'd assign it a much lower chance.  For a more interesting example, suppose is the event that your preferred candidate wins the upcoming election. This is something it's hard to make sense of with frequentism, but here is your degree of confidence in this outcome. You could be more or less rational about this. Maybe it's based entirely on your conviction that your candidate is the best one so everyone should agree, or maybe it's based on rigorous polling and election simulation. Either way, the number is a measure of your subjective confidence.   A feature of this interpretation is that, as one of the names for it suggests, probability is subjective. Rather than being an objective fact, the degree of confidence can vary from person to person. Some might find this uncomfortable—isn't mathematics about uncovering objective truths about reality? Perhaps you find this reason to reject this view of what probability is.  If you do you are not alone. The interpretation of what probability means is a difficult topic that has been the subject of much scholarly debate, with many arguments slung for many different conclusions. A good introduction to this topic is the Stanford Encyclopedia of Philosophy article on interpretations of philosophy . But this is too big a topic and too big a detour for us to go into.  A distinctive feature of Bayesianism is its use of Bayes's theorem to give a rule for updating your probabilities (that is, degrees of confidence). Take coin flipping as an example. Without any further information, your prior probability that a coin comes up heads is probably . But if you flip in multiple times and it repeatedly comes up heads, you'll suspect the coin is weighted and want to update your confidence to have a different posterior probability .  The calculations get involved, so let's skip over them to focus on the big picture. The key point is, Bayes's theorem provides a process you can use to update beliefs based on new evidence. This process, called Bayesian inference , has many applications. One of them is spam filtering for email. The problem is, you want to determine whether an email is spam, but you can't know with certainty. Instead, the idea is that certain features adjust the likelihood that an email is spam—coming from a contact lowers the likelihood, the existence of common spam phrases increases it. You train the filter, going through repeated cycles of updating probabilities. At the end you have a program that identifies spam with a high degree of accuracy.  There are many other applications of Bayesian inference. This is a an instance where you can point to a topic in elementary mathematics (probability) and tell students how it gets used in technology they see every day.  "
},
{
  "id": "sec12-bayes-5",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional probability "
},
{
  "id": "sec12-bayes-7",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-7",
  "type": "Definition",
  "number": "12.4.1",
  "title": "Conditional probability.",
  "body": "Conditional probability  Suppose and are events in a probability space with sample space . The conditional probability of assuming , written , is the likelihood that happens assuming you know that happens. It can be calculated as In case you are dealing with uniform probability, it can equivalently be calculated by counting: Like many important concepts, this one goes by many names. You see people talk about the probabability of given or the the probability of conditional on or other ways to express conditional probability.  "
},
{
  "id": "sec12-bayes-10",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-10",
  "type": "Checkpoint",
  "number": "12.4.2",
  "title": "",
  "body": " You roll . Assuming the first die rolls a , how likely is it that the results sum to at least ?  This is a conditional probability. We could look at all outcomes of rolling three dice, but it's easier to think only about the outcomes where the first die is . There are outcomes to look at, since the remaining two dice rolls independently have outcomes each. We need to count how many of these outcomes sum to at least . We can do list them: These are outcomes, so the conditional probability is   "
},
{
  "id": "sec12-bayes-11",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-11",
  "type": "Theorem",
  "number": "12.4.3",
  "title": "",
  "body": " Suppose and are events in a probability space. Then we can calculate their joint probability as   This falls out from writing these various probabilities as fractions. First let's write them as counts for uniform probability, where is the sample space: Alternatively you can write solely in terms of probabilities:   "
},
{
  "id": "sec12-bayes-12",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-12",
  "type": "Checkpoint",
  "number": "12.4.4",
  "title": "",
  "body": " You roll . How likely is it that the first die rolls a and they sum to at least ?  Use conditional probability! You want to calculate , where  the first die is and  the sum is at least . In an earlier checkpoint we already calculated so what remains is to calculate .  "
},
{
  "id": "sec12-bayes-14",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-14",
  "type": "Theorem",
  "number": "12.4.5",
  "title": "Bayes’s theorem.",
  "body": "Bayes's theorem  Consider events and in a sample space, where both events have nonzero probability. Then   This is surprisingly straightforward. The key idea is to unpack the definition of conditional probability: . Substituting this into the righthand side of the equation we get Now note that is by definition of conditional probabilty, the same as . But that's the lefthand side of the equation.  "
},
{
  "id": "sec12-bayes-15",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "false positives false negatives "
},
{
  "id": "sec12-bayes-17",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-17",
  "type": "Example",
  "number": "12.4.6",
  "title": "",
  "body": " Disease has a incidence rate, meaning it occurs in of the population. A test for disease has a chance of giving the correct diagnosis, whether positive or negative. You test positive. How likely is it you have disease ?  Let's give some names to these events. Call the event you have the disease and the event the test came back positive . What we are trying to calculate is the conditional probability . We know a few probabilities: The first is the incidence rate, the second is the true positive rate, and the last is the false positive rate. Because we know the conditional probability in the opposite direction, you might think we could use Bayes's theorem. You are correct. We will calculate You can think of the fraction on the right as follows. The numerator is what fraction of the population both has disease and has a positive test, while the denominator is how many have a positive test. We have to do a small amount of work to calculate the denominator, since we aren't given it directly. To calculate what fraction of the population have a positive test, we add together the true positives with the false positives. The true positives are given by the formula Similarly, the false negatives are given by the formula (We know because that's how many don't have the disease, namely .) Adding those together we get Now we plug the three values into Bayes's theorem: That is, there's only about a chance you have the disease.  "
},
{
  "id": "sec12-bayes-21",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-21",
  "type": "Definition",
  "number": "12.4.7",
  "title": "The Bayesian interpretation of probability.",
  "body": "The Bayesian interpretation of probability  The Bayesian interpretation of probability , also called the subjective interpretation , gives the following meaning. A probability represents a degree of confidence that the event will happen. For example, if is the event of a coin flip coming up heads you might assign . However, if you happen to know that the coin is biased to come up tails most of the time you'd assign it a much lower chance.  For a more interesting example, suppose is the event that your preferred candidate wins the upcoming election. This is something it's hard to make sense of with frequentism, but here is your degree of confidence in this outcome. You could be more or less rational about this. Maybe it's based entirely on your conviction that your candidate is the best one so everyone should agree, or maybe it's based on rigorous polling and election simulation. Either way, the number is a measure of your subjective confidence.  "
},
{
  "id": "sec12-bayes-24",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prior probability posterior probability "
},
{
  "id": "sec12-bayes-25",
  "level": "2",
  "url": "sec12-bayes.html#sec12-bayes-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bayesian inference "
},
{
  "id": "sec12-exercises",
  "level": "1",
  "url": "sec12-exercises.html",
  "type": "Section",
  "number": "12.5",
  "title": "Exercises",
  "body": " Exercises    Give an example of a random trial. What is the associated sample space? Give a couple example of events in the sample space. Is this a uniform probability space? Explain.    Imagine the random trial of a polling company calling random numbers until someone picks up and answers some questions, with the outcome of the trial being the set of answers. Is this uniform or not? Explain your answer.    You roll and add them. For each possible sum from to compute its probability.  You can represent the sample space as a square, with each cell corresponding to a possible roll for the first and second die. Does this picture help you to see a pattern?    You draw two cards from a deck. How likely is it that they have the same suit? How likely is it they have the same rank?  A good way to think about this is, imagine you have already drawn the first card. How likely is it that the second card matches it in suit\/rank?    You choose a six digit PIN at random for unlocking your phone. How likely is it that a digit occurs at least twice in your PIN?    For your IRS tax returns you choose a four digit PIN randomly so that all digits are different. How likely is it that all four digits are odd?    Explain why the following facts about binomial coefficients are true. Here, are whole numbers. For at least one fact, give an explanation based on the formula definition. For at least one fact, give an explanation based on the counting definition (that is, counts how many ways there are to choose things from options where you don't care about order).              A facet of conditional probability which sometimes causes confusion for people is that getting information can change a probability. To illustrate this, imagine your friend draws a card and asks you to guess what it is. No matter your guess, your probability of being correct is . Explain why that is. Give an example of information about the card your friend could give that would allow you to improve your odds of success. Calculate the new, improved probability and explain why the information changes the probability of a correct guess.    Which interpretation of probability do you personally find most convincing, frequentism or Bayesianism? Write a few paragraphs to convince a reader to agree with you on the question.    Go to the wikipedia page on Bayesian inference and read the applications section. Pick one of the applications and research it further. Write a few paragraphs explaining this application of Bayesian inference.    "
},
{
  "id": "sec12-exercises-2-1",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-1",
  "type": "Exercise",
  "number": "12.5.1",
  "title": "",
  "body": " Give an example of a random trial. What is the associated sample space? Give a couple example of events in the sample space. Is this a uniform probability space? Explain.  "
},
{
  "id": "sec12-exercises-2-2",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-2",
  "type": "Exercise",
  "number": "12.5.2",
  "title": "",
  "body": " Imagine the random trial of a polling company calling random numbers until someone picks up and answers some questions, with the outcome of the trial being the set of answers. Is this uniform or not? Explain your answer.  "
},
{
  "id": "sec12-exercises-2-3",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-3",
  "type": "Exercise",
  "number": "12.5.3",
  "title": "",
  "body": " You roll and add them. For each possible sum from to compute its probability.  You can represent the sample space as a square, with each cell corresponding to a possible roll for the first and second die. Does this picture help you to see a pattern?  "
},
{
  "id": "sec12-exercises-2-4",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-4",
  "type": "Exercise",
  "number": "12.5.4",
  "title": "",
  "body": " You draw two cards from a deck. How likely is it that they have the same suit? How likely is it they have the same rank?  A good way to think about this is, imagine you have already drawn the first card. How likely is it that the second card matches it in suit\/rank?  "
},
{
  "id": "sec12-exercises-2-5",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-5",
  "type": "Exercise",
  "number": "12.5.5",
  "title": "",
  "body": " You choose a six digit PIN at random for unlocking your phone. How likely is it that a digit occurs at least twice in your PIN?  "
},
{
  "id": "sec12-exercises-2-6",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-6",
  "type": "Exercise",
  "number": "12.5.6",
  "title": "",
  "body": " For your IRS tax returns you choose a four digit PIN randomly so that all digits are different. How likely is it that all four digits are odd?  "
},
{
  "id": "sec12-exercises-2-7",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-7",
  "type": "Exercise",
  "number": "12.5.7",
  "title": "",
  "body": " Explain why the following facts about binomial coefficients are true. Here, are whole numbers. For at least one fact, give an explanation based on the formula definition. For at least one fact, give an explanation based on the counting definition (that is, counts how many ways there are to choose things from options where you don't care about order).            "
},
{
  "id": "sec12-exercises-2-8",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-8",
  "type": "Exercise",
  "number": "12.5.8",
  "title": "",
  "body": " A facet of conditional probability which sometimes causes confusion for people is that getting information can change a probability. To illustrate this, imagine your friend draws a card and asks you to guess what it is. No matter your guess, your probability of being correct is . Explain why that is. Give an example of information about the card your friend could give that would allow you to improve your odds of success. Calculate the new, improved probability and explain why the information changes the probability of a correct guess.  "
},
{
  "id": "sec12-exercises-2-9",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-9",
  "type": "Exercise",
  "number": "12.5.9",
  "title": "",
  "body": " Which interpretation of probability do you personally find most convincing, frequentism or Bayesianism? Write a few paragraphs to convince a reader to agree with you on the question.  "
},
{
  "id": "sec12-exercises-2-10",
  "level": "2",
  "url": "sec12-exercises.html#sec12-exercises-2-10",
  "type": "Exercise",
  "number": "12.5.10",
  "title": "",
  "body": " Go to the wikipedia page on Bayesian inference and read the applications section. Pick one of the applications and research it further. Write a few paragraphs explaining this application of Bayesian inference.  "
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
