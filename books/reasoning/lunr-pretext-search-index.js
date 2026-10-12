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
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface: To the student",
  "body": " Preface: To the student          "
},
{
  "id": "sec1-arguments",
  "level": "1",
  "url": "sec1-arguments.html",
  "type": "Section",
  "number": "1.1",
  "title": "Arguments",
  "body": " Arguments  A core use of logic is assessing arguments . Informally, an argument is a reasoned explanation for why someone should believe a conclusion. (Think argument as in legal argument , not as in a shouting match.) We want to be able to understand what separates good arguments—those that are compelling and don't have holes in their reasoning—from bad arguments. We will focus on the deductive side of things. Rhetoric, appeals to emotion, and so on are all important if you want to convince people to adopt your views. But they will not be what we talk about in this class.  With this use in mind, we will adopt the following formalization of what an argument is.  Arguments  An argument is a list of premises followed by a conclusion . A premise or conclusion is a statement , by which is meant a truth-apt , declarative statement.   Not all English sentences are statements. Questions like What time is it? or commands like Obey the speed limit! are not truth-apt. It doesn't make sense to ask whether they are true or false. They aren't what we're interested in with logic.  Truth is a difficult and slippery notion. There are philosophers who spend their entire careers trying to understand this concept. Fortunately, we can do logic just fine with a common sensical notion of truth. We will assume it makes sense to talk about whether statements like The sky is blue. or Rhode Island has a higher average household income than Massachusetts. are true or false. We will also consider statements like Frodo threw the One Ring into Mount Doom. or Coffee tastes good. as truth-apt, even though the first is a statement about a fictional world and the second is an opinion. We are not interested in truth in an absolute sense but rather truth in the sense of . Here, could be many different things: true in the sense of physical reality, true in the sense of Lord of the Rings , true in the sense of Professor Williams's opinions, or so on. The tools of logic can applied to all of these.  When speaking we will usually just say true or false and leave the in the sense of part silent.   Here are a few examples of arguments, each in the form of a short paragraph. We can use words like therefore or thus to mark which statement is the conclusion.  If you want to pass math class then you should study. Therefore you should study.  Gollum threw the One Ring into the fires of Mount Doom. Therefore Frodo did not throw the One Ring into Mount Doom.  It is raining. Therefore I should bring an umbrella.    Do you think these are good, compelling arguments? Or are they unconvincing?   Maybe you found each of these arguments convincing, in the sense that if the premises are true then the conclusion must also be true. But they are each missing something. Namely, each of them has a hidden premise which is assumed but not stated. For clarity's sake, we want to make all premises explicitly. Let's fix these arguments.   Here are the arguments from before, but with the hidden premises added in.  If you want to pass math class then you should study. You want to pass math class. Therefore you should study.  Gollum threw the One Ring into the fires of Mount Doom. If Gollum threw the One Ring then Frodo did not. Therefore Frodo did not throw the One Ring into Mount Doom.  It is raining. If it is raining then I should bring an umbrella. Therefore I should bring an umbrella.     Having seen these examples let's make clear what we mean by a good argument.  Validity and Soundness  An argument is valid if whenever all its premises are true its conclusion must also be true. An argument is sound if it is valid and all of its premises are true.   Sound arguments are good arguments because they tell you their conclusion is true. If you care about believing true things they are what you want. However it can be very difficult to determine whether an argument is sound, because that requires you to determine whether the premises are true.   Consider the following argument, presented as a list of statements with the therefore symbol marking the conclusion. If there are an even number of students enrolled at Cape Cod Community college, then there are not an odd number of students.  There are an even number of students.   there are not an odd number of students.  Checking the soundness of this argument isn't too hard. One premise is a mathematical fact—a number cannot be both even and odd. The other can be figured out because the college keeps good records and has an exact count of the number of students currently enrolled. But you imagine similar arguments whose premises are very hard to check. What if instead of 4Cs we wanted to know about members of an organization from ancient Egypt? How could you possibly get an exact count for that?   As such, validity will be the main thing we focus on for what makes an argument good. Soundness is even better, but it is someone else's problem to do the extra work.  Is there a method that can be used to always determine whether an argument is valid?   Here's a start at answering this question. Let's use the language that a world is a possible collection of facts, where we only care to specify facts relative to an argument. For example, consider the following two arguments. Lee Harvey Oswald didn't shoot JFK. So the CIA did it.  Either Lee Harvey Oswald shot JFK, or else the CIA did it. Oswald didn't shoot JFK. Therefore the CIA did it. If an argument is invalid, it means that there is a world (= collection of facts) where all the premises are true but the conclusion is false. For both worlds, the only relevant fact is who shot JFK. We can see that the first argument is invalid by imagining the world where JFK was shot by an alien. In that world, the one premise is true but the conclusion is false. You could specify other facts about the world—maybe the alien's favorite food was hamburgers—but those facts aren't relevant so we don't need to think about them.  On the other hand, an argument is valid if any world which makes the premises true also makes the conclusion true. For the second argument, the only way to make the first premise true is if either Oswald or the CIA shot JFK. To make the second premise true it must be that Oswald didn't do it. The only remaining option is that the CIA shot JFK. But then the conclusion must be true. So this argument is valid.  Note that there is an asymmetry here. Showing an argument is invalid only takes imagining up a single counterexample world. But showing an argument is valid requires you to think through the meaning of the argument. This is inconvenient. It'd be nice to have a single method we can use that always tells us the answer. As such, it would be pre-mature to say we have settled this question.  It will take us some time to build up the machinery to settle this question. But we can take it as a guiding star on developing some concepts in logic.    Some arguments are presented in ordinary language. For each of them, identify the premises and the conclusion. Everyone who has a stake in how a state is run should be allowed to vote. Immigrants have a stake in how a state is run. Therefore immigrants should be allowed to vote.  You should buy me lunch because it's my birthday tomorrow.  All cats are carnivores. Martin is a cat, so he is a carnivore.  If you study for math class you will pass. You passed, so you must have studied.      For each of the arguments from the previous problem, state whether you think it is valid. If it is invalid, is there a hidden premise you can add to make it valid? If so, add this premise. If not explain why you think it's invalid.    Each of the following arguments is invalid. Kindly demonstrate this by exhibiting a counterexample world. Chocolate ice cream is delicious. Therefore vanilla ice cream is mid.  If I win the lottery then I will quit my job. I quit my job. Therefore I won the lottery.  It is raining outside. Therefore I should bring my umbrella.      Explain why the following argument is valid, by means of analyzing worlds. If I win the lottery then I will quit my job. I didn't quit my job. Therefore I didn't win the lottery.     "
},
{
  "id": "sec1-arguments-2",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arguments "
},
{
  "id": "sec1-arguments-4",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Arguments.",
  "body": "Arguments  An argument is a list of premises followed by a conclusion . A premise or conclusion is a statement , by which is meant a truth-apt , declarative statement.  "
},
{
  "id": "sec1-arguments-8",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-8",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " Here are a few examples of arguments, each in the form of a short paragraph. We can use words like therefore or thus to mark which statement is the conclusion.  If you want to pass math class then you should study. Therefore you should study.  Gollum threw the One Ring into the fires of Mount Doom. Therefore Frodo did not throw the One Ring into Mount Doom.  It is raining. Therefore I should bring an umbrella.    Do you think these are good, compelling arguments? Or are they unconvincing?  "
},
{
  "id": "sec1-arguments-10",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-10",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Here are the arguments from before, but with the hidden premises added in.  If you want to pass math class then you should study. You want to pass math class. Therefore you should study.  Gollum threw the One Ring into the fires of Mount Doom. If Gollum threw the One Ring then Frodo did not. Therefore Frodo did not throw the One Ring into Mount Doom.  It is raining. If it is raining then I should bring an umbrella. Therefore I should bring an umbrella.    "
},
{
  "id": "sec1-arguments-12",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-12",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Validity and Soundness.",
  "body": "Validity and Soundness  An argument is valid if whenever all its premises are true its conclusion must also be true. An argument is sound if it is valid and all of its premises are true.  "
},
{
  "id": "sec1-arguments-14",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-14",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Consider the following argument, presented as a list of statements with the therefore symbol marking the conclusion. If there are an even number of students enrolled at Cape Cod Community college, then there are not an odd number of students.  There are an even number of students.   there are not an odd number of students.  Checking the soundness of this argument isn't too hard. One premise is a mathematical fact—a number cannot be both even and odd. The other can be figured out because the college keeps good records and has an exact count of the number of students currently enrolled. But you imagine similar arguments whose premises are very hard to check. What if instead of 4Cs we wanted to know about members of an organization from ancient Egypt? How could you possibly get an exact count for that?  "
},
{
  "id": "sec1-arguments-16",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-16",
  "type": "Question",
  "number": "1.1.6",
  "title": "",
  "body": "Is there a method that can be used to always determine whether an argument is valid?  "
},
{
  "id": "sec1-arguments-17",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "world "
},
{
  "id": "sec1-arguments-19",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "counterexample "
},
{
  "id": "sec1-arguments-21-1",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-21-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Some arguments are presented in ordinary language. For each of them, identify the premises and the conclusion. Everyone who has a stake in how a state is run should be allowed to vote. Immigrants have a stake in how a state is run. Therefore immigrants should be allowed to vote.  You should buy me lunch because it's my birthday tomorrow.  All cats are carnivores. Martin is a cat, so he is a carnivore.  If you study for math class you will pass. You passed, so you must have studied.    "
},
{
  "id": "sec1-arguments-21-2",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-21-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " For each of the arguments from the previous problem, state whether you think it is valid. If it is invalid, is there a hidden premise you can add to make it valid? If so, add this premise. If not explain why you think it's invalid.  "
},
{
  "id": "sec1-arguments-21-3",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-21-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " Each of the following arguments is invalid. Kindly demonstrate this by exhibiting a counterexample world. Chocolate ice cream is delicious. Therefore vanilla ice cream is mid.  If I win the lottery then I will quit my job. I quit my job. Therefore I won the lottery.  It is raining outside. Therefore I should bring my umbrella.    "
},
{
  "id": "sec1-arguments-21-4",
  "level": "2",
  "url": "sec1-arguments.html#sec1-arguments-21-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Explain why the following argument is valid, by means of analyzing worlds. If I win the lottery then I will quit my job. I didn't quit my job. Therefore I didn't win the lottery.   "
},
{
  "id": "sec1-language",
  "level": "1",
  "url": "sec1-language.html",
  "type": "Section",
  "number": "1.2",
  "title": "The language of propositional logic",
  "body": " The language of propositional logic  As a first task we will establish a formal language for talking about logic. The reason for doing this is to avoid the ambiguities inherent in natural language.  A proposition is a truth-apt statement—something that makes sense to say is true or false. We say a proposition is atomic if it can't be broken down any further into simpler propositions.   Grass tastes good is an atomic proposition. If you try to break it down into smaller pieces you get partial sentences that don't make sense by themselves. On the other hand grass tastes good and dirt tastes bad is not atomic. you can break it down into simpler pieces, namely grass tastes good and dirt tastes bad .   When we were analyzing worlds to check validity of an argument, you maybe noticed that the meaning of an atomic proposition didn't matter, merely its truth value. With that in mind, when doing logic we usually don't care about the content of an atomic proposition; it's irrelevant to our analysis. Accordingly, we will use propositional variables  , similar to how mathematicians use number variables to stand in for a known or unknown quantity.  When you are abbreviating a natural language proposition as a variable it's often helpful to pick a letter to remind you of the meaning. For example, we might use for grass tastes good and for dirt tastes bad . But the choice of letter doesn't affect the meaning; we could've instead picked for good and for bad and it'd all be the same. If you're working abstractly and the variable doesn't stand for anything in particular then we'll usually pick letters near each other, just for convenience.  We want to combine simpler propositions to create more complex propositions. There's multiple ways to do this. For instance, I'm rich and I'm a nice person has a different meaning from I'm rich or I'm a nice person has a different meaning from If I'm rich then I'm a nice person . So we need multiple different ways to combine.  Logical connectives are those ways to combine. We write each of them with a single symbol. Compare to how mathematicians write symbols like or to denote ways to combine numbers.  The main five logical connectives  There are five main connectives. Four of them are binary , meaning they connect two simpler propositions. One of them is unary , meaning it modifies a single proposition. We write the binary connectives in between the two. Conjunction We write to mean and .  Disjunction We write to mean or .  Negation We write to mean not .  Conditional We write to mean if then .  Biconditional We write to mean if and only if .     One advantage of this compact language is that it reduces the phenomenon of having many ways to say the same thing. For instance, here's a few different ways to express .  and .   but also .  Both of and .  There can be slight variation in the connotation of these different ways of phrasing things. For example, if I say it is raining but it is warm then the but indicates some sort of contrast or unexpectedness. This fine gradation of meaning isn't relevant to our logical work however.  Conditionals—if-then statements—are especially notorious for how many different ways there are to express the same idea. Here's a few different ways people say . If then .  implies .  because .  only if .  is a sufficient condition for .  is a necessary condition for .  These last two are especially beloved by philosophers. To explain them: if is a sufficient condition for , it means that whenever is true then that is sufficient to conclude must also be true. That is, if then . For the other one, being a necessary condition for means if is true then necessarily so is . Again, you can phrase that as if then .  The phrase if and only if gets used a lot in mathematics, but it's less common in ordinary speech. So let me make sure the meaning is clear. You can think of it as saying the implication goes both ways—hence why it's called a bi conditional. That is means if and only if means if then and if then .   Philosophers will sometimes say as is a necessary and sufficient condition for . Explain why that has the same meaning, based on the meaning of necessary and sufficient conditions.   It also should be made clear what or ( ) means. In ordinary use there's two thing it might mean. The first is saying one of the options, but not both. For example, if your waiter informs you that your burger comes with fries or a side salad, both is not an acceptable answer. Because we exclude the possibility of both, we call this a exclusive or . The other possible meaning is an inclusive or , allowing the possibility of both. For example, imagine your math professor promises to bring pizza if either the whole class passes the midterm or the average is at least . If everyone passed and the average was at least you would be upset if she tried to weasel out of the promise by saying I said or, which means not both . Rather, the clear meaning was that both happening counts as fulfilling the requirement.  In mathematics and in logic, it's convenient to take the inclusive or as the standard. This is the meaning we most often want. For example, it's a true mathematical statement that every number is either or . But this is only true because we allow the possibility of both, as happens with . With this in mind, will mean inclusive or— or , or possibly both.  It turns out that we can express exclusive or using the five connectives, so it's no loss to not take it as a basic concept.    exclusive-or can be understood as either and not , or else and not . We can write this as a sentence in our formal language: Thus we can express exclusive-or using the three connectives of conjunction (and\/ ), disjunction (or\/ ), and negation (not\/ ).    the in the formal sentence in the example is an inclusive or. Explain why it's impossible for both disjuncts —the formulas on each side of the or—to be true.  Can you have both and true at once?   In general, we want to be able to combine multiple connectives to make more complicated sentences. Here's some rules for how we do this. Negation ( ) always happens first. If you write this means —the not happens before the and. If you want to do it in the other order you need to use parentheses; see the next rule.  We use parentheses to denote priority—what comes first. This is similar to the use of parentheses for priority in arithmetic formulas. Just like means to add before you multiply, means to and before you or.  If we have three or more things connected by ands (or three or more things connected by ors), we don't need to write parentheses to say which and (or which or) comes first. This is because the meaning is the same regardless of order. Compare to how order doesn't matter for addition; you get the same sum no matter what order you do the additions in .    When translating between the formal language and ordinary language, you should give a translation key specifying the meaning of the atomic variables.   We want to translate If you get a college degree you will be happy and wealthy into the logical language. Our first step is to identify the pieces of the sentence we can't break down any further. You might identify two pieces making up the two parts of an if-then statement, namely You get a college degree.  You will be happy and wealthy.  But that second piece can be broken down even further: You will be happy  You will be wealthy.  That is, to break a sentence down into pieces you sometimes have to not follow exactly how it's worded. In this example, you have to slightly rephrase one of the propositions connected by the and to be a complete sentence on its own.  In all, we have three atomic propositions, which we need to give names to. With this translation key we can translate the sentence into the formal language. Looking at the connecting words, we notice an if-then and a and . The and connects and , so that part of the sentence becomes . And the if-then is if then and . So we see the whole thing comes together as We put the parentheses to make clear that the and is inside the then part of the if-then.    Let's use the same translation key as the previous example. We use this key to translate the following into ordinary language If you just replace each connective with the corresponding English word you get something like: You get a college degree and you will be wealthy or you will be happy and not you will be wealthy. This isn't how normal people talk, so let's pretty it up. Either you get a college degree and will be wealthy or else you will be happy but not wealthy. With ordinary language you don't have parentheses to mark priority so you sometimes need to phrase your sentence to make it clear where things break.    Write a translation key for and translate into formal logic the following sentences. Richard's novel is a commercial success but has no artistic merit.  Cass respects Richard if and only if his novel has artistic merit.     Using the translation key:      Translate the formal sentences into ordinary language, using the following translation key for the meaning of atomic variables:               Translate the following sentences of ordinary language into the formal logical language. Provide a translation key giving the meaning of your atomic variables. If the Trojans let the horse into their city, then the Greeks will win the Trojan war.  Either the Trojans will let the horse into their city or else they won't.  If the Trojans let the horse into their city and the Greeks win the Trojan war then Odysseus will feel guilty.      If you forget to put in parentheses, the meaning of a sentence can be ambiguous. Consider the formal sentence There's two places to put parentheses, either around or around . For each of the two possibilities, translate it into an ordinary language sentence. As part of this, create a translation key giving the meaning of the atomic variables (your choice what they mean!). Explain why the two ordinary language sentences have different meanings.    Translate the following pairs of sentences into ordinary language, providing a translation key for the variables. Do your translations convince you that the paired statements have equivalent meaning? Explain     Translate the following into ordinary language, providing a translation key for the variable. Do you think any of them have equivalent meaning? If so, which? Explain.     "
},
{
  "id": "sec1-language-3",
  "level": "2",
  "url": "sec1-language.html#sec1-language-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proposition atomic "
},
{
  "id": "sec1-language-4",
  "level": "2",
  "url": "sec1-language.html#sec1-language-4",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " Grass tastes good is an atomic proposition. If you try to break it down into smaller pieces you get partial sentences that don't make sense by themselves. On the other hand grass tastes good and dirt tastes bad is not atomic. you can break it down into simpler pieces, namely grass tastes good and dirt tastes bad .  "
},
{
  "id": "sec1-language-5",
  "level": "2",
  "url": "sec1-language.html#sec1-language-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "propositional variables "
},
{
  "id": "sec1-language-8",
  "level": "2",
  "url": "sec1-language.html#sec1-language-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "connectives "
},
{
  "id": "sec1-language-9",
  "level": "2",
  "url": "sec1-language.html#sec1-language-9",
  "type": "Definition",
  "number": "1.2.2",
  "title": "The main five logical connectives.",
  "body": "The main five logical connectives  There are five main connectives. Four of them are binary , meaning they connect two simpler propositions. One of them is unary , meaning it modifies a single proposition. We write the binary connectives in between the two. Conjunction We write to mean and .  Disjunction We write to mean or .  Negation We write to mean not .  Conditional We write to mean if then .  Biconditional We write to mean if and only if .    "
},
{
  "id": "sec1-language-13",
  "level": "2",
  "url": "sec1-language.html#sec1-language-13",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": " Philosophers will sometimes say as is a necessary and sufficient condition for . Explain why that has the same meaning, based on the meaning of necessary and sufficient conditions.  "
},
{
  "id": "sec1-language-14",
  "level": "2",
  "url": "sec1-language.html#sec1-language-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exclusive or inclusive or "
},
{
  "id": "sec1-language-17",
  "level": "2",
  "url": "sec1-language.html#sec1-language-17",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  exclusive-or can be understood as either and not , or else and not . We can write this as a sentence in our formal language: Thus we can express exclusive-or using the three connectives of conjunction (and\/ ), disjunction (or\/ ), and negation (not\/ ).  "
},
{
  "id": "sec1-language-18",
  "level": "2",
  "url": "sec1-language.html#sec1-language-18",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": " the in the formal sentence in the example is an inclusive or. Explain why it's impossible for both disjuncts —the formulas on each side of the or—to be true.  Can you have both and true at once?  "
},
{
  "id": "sec1-language-20",
  "level": "2",
  "url": "sec1-language.html#sec1-language-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "translation key "
},
{
  "id": "sec1-language-21",
  "level": "2",
  "url": "sec1-language.html#sec1-language-21",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": " We want to translate If you get a college degree you will be happy and wealthy into the logical language. Our first step is to identify the pieces of the sentence we can't break down any further. You might identify two pieces making up the two parts of an if-then statement, namely You get a college degree.  You will be happy and wealthy.  But that second piece can be broken down even further: You will be happy  You will be wealthy.  That is, to break a sentence down into pieces you sometimes have to not follow exactly how it's worded. In this example, you have to slightly rephrase one of the propositions connected by the and to be a complete sentence on its own.  In all, we have three atomic propositions, which we need to give names to. With this translation key we can translate the sentence into the formal language. Looking at the connecting words, we notice an if-then and a and . The and connects and , so that part of the sentence becomes . And the if-then is if then and . So we see the whole thing comes together as We put the parentheses to make clear that the and is inside the then part of the if-then.  "
},
{
  "id": "sec1-language-22",
  "level": "2",
  "url": "sec1-language.html#sec1-language-22",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " Let's use the same translation key as the previous example. We use this key to translate the following into ordinary language If you just replace each connective with the corresponding English word you get something like: You get a college degree and you will be wealthy or you will be happy and not you will be wealthy. This isn't how normal people talk, so let's pretty it up. Either you get a college degree and will be wealthy or else you will be happy but not wealthy. With ordinary language you don't have parentheses to mark priority so you sometimes need to phrase your sentence to make it clear where things break.  "
},
{
  "id": "sec1-language-23",
  "level": "2",
  "url": "sec1-language.html#sec1-language-23",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": " Write a translation key for and translate into formal logic the following sentences. Richard's novel is a commercial success but has no artistic merit.  Cass respects Richard if and only if his novel has artistic merit.     Using the translation key:   "
},
{
  "id": "sec1-language-24-1",
  "level": "2",
  "url": "sec1-language.html#sec1-language-24-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": " Translate the formal sentences into ordinary language, using the following translation key for the meaning of atomic variables:             "
},
{
  "id": "sec1-language-24-2",
  "level": "2",
  "url": "sec1-language.html#sec1-language-24-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": " Translate the following sentences of ordinary language into the formal logical language. Provide a translation key giving the meaning of your atomic variables. If the Trojans let the horse into their city, then the Greeks will win the Trojan war.  Either the Trojans will let the horse into their city or else they won't.  If the Trojans let the horse into their city and the Greeks win the Trojan war then Odysseus will feel guilty.    "
},
{
  "id": "sec1-language-24-3",
  "level": "2",
  "url": "sec1-language.html#sec1-language-24-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": " If you forget to put in parentheses, the meaning of a sentence can be ambiguous. Consider the formal sentence There's two places to put parentheses, either around or around . For each of the two possibilities, translate it into an ordinary language sentence. As part of this, create a translation key giving the meaning of the atomic variables (your choice what they mean!). Explain why the two ordinary language sentences have different meanings.  "
},
{
  "id": "sec1-language-24-4",
  "level": "2",
  "url": "sec1-language.html#sec1-language-24-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": " Translate the following pairs of sentences into ordinary language, providing a translation key for the variables. Do your translations convince you that the paired statements have equivalent meaning? Explain   "
},
{
  "id": "sec1-language-24-5",
  "level": "2",
  "url": "sec1-language.html#sec1-language-24-5",
  "type": "Exercise",
  "number": "1.2.5",
  "title": "",
  "body": " Translate the following into ordinary language, providing a translation key for the variable. Do you think any of them have equivalent meaning? If so, which? Explain.   "
},
{
  "id": "sec1-tt",
  "level": "1",
  "url": "sec1-tt.html",
  "type": "Section",
  "number": "1.3",
  "title": "Truth tables",
  "body": " Truth tables  Now that we know how to write logically, let's talk about the meaning—as logicians would say, the semantics —of the symbols. We will do this through the device of a truth table , invented by the Austrian philosopher Ludwig Wittgenstein. The idea is, a truth table lays out how a symbol behaves for any possible combination of inputs. This exhaustive listing of all possibilities constitutes a complete description of its meaning.  This is a truth-functional explanation of the meaning of the connectives. That is, if we want to know whether a statement is true or false the meaning of the input doesn't matter, only their truth values.  Let's see truth tables for the five connectives. We begin with conjunction (and) and disjunction (or). These each take two inputs, on the left and right. Each input has two possible truth values, namely true ( ) or false ( ). So in total we need rows to represent all possibilities.  Remember, we're looking at propositions, statements which are unambiguously true or false. So those are the only possible truth values. You might say, what about statements are only kinda true? For instance, someone might be kinda tall so John is tall isn't totally true but nor is it totally false.  You can do logic allowing for intermediate truth values. But things get more complicated. We focus on the two-valued logic with only true and false to make the analysis less difficult. I hope you forgive the trade-off.   We organize the table so that the leftmost columns give the values of the inputs, while on the right the values of the output are given.   Truth table for conjunction                                                What this table says is, is true just in case both and are true. We take the common sense definition of and and write it in tabular form.   Truth table for disjunction                                                Here, is true when at least one of the two is true. Recall that or is inclusive-or, allowing the possibility of both disjuncts being true.  For (not) there is only one input, written on the right. Accordingly we only need two rows for the table.   Truth table for negation                         Negation acts as a toggle flipping the value of its input to the opposite.  For the biconditional ( ), what it is saying is that the two sides are equivalent. From that you can deduce the rule for filling out the table: the output should be true just when the two inputs are the same.   Truth table for biconditional                                                The conditional was saved for last because it's the most subtle and controversial. An issue is, the ordinary use of if-then statements aren't truth-functional. Instead, they are used to imply some kind of connection between the statements. Consider a statement like if it is sunny out you should wear sunscreen . There is a causal connection; the weather presents a minor health risk and so there is prudential reason to take steps to minimize that risk. In contrast imagine someone saying if it is sunny out then Mars has two moons . Probably your reaction is to be confused. What is the connection between those two things?  But if the meaning of can only depend upon their truth values, then we can't require a connection. That would require information beyond whether they are true or false. Subject to that restriction, the best we can do is the following.   Truth table for conditional                                                A second, more substantive use of truth tables is to analyze more complicated logical sentences. We can use the truth tables defining the connectives as rules for how to determine the behavior of more complicated sentences, and thereby understand what they are saying.  When you are doing this, you want to think of how the logical sentence is built up. For example, suppose you are trying to fill out the truth table for The last connective to be evaluated is the . You can evaluate it what it does by using the rule given in the truth table for conjunction (and). But to do this you need to know the inputs on both sides. You know the input on the left, since it's just . But you have to do some work to figure out the input on the right. How do you do that? The right conjunct is an or statement. You can evaluate that using the truth table for , but first you need to know the pattern for its two inputs. The left disjunct you already know, but to figure out the right disjunct you need to apply the rule for . So building up this truth table is a multi-step process. The following table represents the process, where going from left to right gives you the information needed for the next step.   Truth table for                                                                       To explain the first row, as a representative example: to fill out the first column, you look at the column and apply the rule for . Namely, you flip to become . Then to fill out the columns you use the rule for , looking at the and columns for input. In this case, you have an instance of which evaluates to . Finally, to fill out the column you use the rule for , looking at the and columns for inputs. Namely, you have an instance of which evaluates to . This finishes the first row, and the other three are done similarly.  When filling these out, you may prefer to save on space by not writing every subformula separately and just filling in the value below it in the one big formula. That is fine, but you should make it clear what the final output is.    Fill out a truth table for .    Fill out truth tables for and . What do you observe about the two truth tables? Take a stab at explaining the meaning of what you see.    Fill out truth tables for and . What do you observe about the two truth tables? Take a stab at explaining the meaning of what you see.    Fill out a truth table for . Explain why the pattern on the truth table is the pattern for exclusive-or.    How many rows do you need in a truth table for a proposition with three variables? Fill out a truth table for .    Fill out a truth table for .    "
},
{
  "id": "sec1-tt-2",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semantics truth table "
},
{
  "id": "sec1-tt-3",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth-functional "
},
{
  "id": "sec1-tt-4",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "true false "
},
{
  "id": "sec1-tt-7",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-7",
  "type": "Table",
  "number": "1.3.1",
  "title": "Truth table for conjunction",
  "body": " Truth table for conjunction                                               "
},
{
  "id": "sec1-tt-9",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-9",
  "type": "Table",
  "number": "1.3.2",
  "title": "Truth table for disjunction",
  "body": " Truth table for disjunction                                               "
},
{
  "id": "sec1-tt-12",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-12",
  "type": "Table",
  "number": "1.3.3",
  "title": "Truth table for negation",
  "body": " Truth table for negation                        "
},
{
  "id": "sec1-tt-15",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-15",
  "type": "Table",
  "number": "1.3.4",
  "title": "Truth table for biconditional",
  "body": " Truth table for biconditional                                               "
},
{
  "id": "sec1-tt-18",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-18",
  "type": "Table",
  "number": "1.3.5",
  "title": "Truth table for conditional",
  "body": " Truth table for conditional                                               "
},
{
  "id": "sec1-tt-21",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-21",
  "type": "Table",
  "number": "1.3.6",
  "title": "Truth table for <span class=\"process-math\">\\(A \\land (B \\lor \\neg A)\\)<\/span>",
  "body": " Truth table for                                                                      "
},
{
  "id": "sec1-tt-24-1",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-24-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": " Fill out a truth table for .  "
},
{
  "id": "sec1-tt-24-2",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-24-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": " Fill out truth tables for and . What do you observe about the two truth tables? Take a stab at explaining the meaning of what you see.  "
},
{
  "id": "sec1-tt-24-3",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-24-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": " Fill out truth tables for and . What do you observe about the two truth tables? Take a stab at explaining the meaning of what you see.  "
},
{
  "id": "sec1-tt-24-4",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-24-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": " Fill out a truth table for . Explain why the pattern on the truth table is the pattern for exclusive-or.  "
},
{
  "id": "sec1-tt-24-5",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-24-5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": " How many rows do you need in a truth table for a proposition with three variables? Fill out a truth table for .  "
},
{
  "id": "sec1-tt-24-6",
  "level": "2",
  "url": "sec1-tt.html#sec1-tt-24-6",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": " Fill out a truth table for .  "
},
{
  "id": "sec1-entailment",
  "level": "1",
  "url": "sec1-entailment.html",
  "type": "Section",
  "number": "1.4",
  "title": "Entailment",
  "body": " Entailment  With the device of truth tables in hand we are finally ready to give a method to answer our guiding question and give a method to check the validity of an argument.  Say that a sentence is entailed by premises if whenever each premise is true then is also true. Using this language, an argument is valid when its conclusion is entailed by its premises.  Because a truth table gives an exhaustive listing of the behavior of sentences under all possible inputs, we can use them to operationalize this definition. Namely, each row of a truth table corresponds to a possible world—a possible state of facts about the inputs. A sentence is entailed by premises if any row where each premise comes out to true has also true. This gives us a procedure to check whether an argument is valid.  Procedure for checking validity of an argument  You can check validity of an argument by the following procedure. If not already written in formal logic, translate each proposition in the argument into the formal language.  Construct truth tables for all propositions in the argument. It's convenient to put them all in one table so you can easily compare them.  If the conclusion is true in every row where all premises are true, then the argument is valid. Otherwise, if the argument has a counterexample (a row where all premises are true but the conclusion is false), then the argument is invalid.     This procedure, except for the translation step, is completely mechanical. You don't need to know the meaning of anything involved, you just need to follow rules to calculate an object and then look at it to extract an answer. We were able to take our question of how do you check whether an argument is valid and turn it into a kind of algebra problem.   A fallacious argument pattern is affirming the consequent . Namely, it's an argument which takes the form:          We can use the truth table procedure to show why it's an invalid argument.   Truth table for affirming the consequent                                                                      Looking at this, we see that there are two rows where both premises are true, namely the first and third rows. In the first the conclusion is also true, but in the third the conclusion is false. We have a counterexample, so the argument is invalid.    A similar argument pattern is called modus ponens . It's an argument which takes the form:          We can use the truth table procedure to show why it's a valid argument pattern.   Truth table for modus ponens                                                                       The only row where both premises are true is the first row. In this row, the conclusion is also true. So the argument is valid.   Using this same method you can check the validity (or invalidity) of various arguments. Here are a few, which you check yourself in the exercises. Valid arguments   Modus tollens:    Disjunctive syllogism:   Hypothetical syllogism:    Invalid arguments  Denying the antecedent:   Affirming a disjunct:    Non sequitur :        For each of the valid argument patterns modus tollens , disjunctive syllogism, and hypothetical syllogism: (1) create a truth table to confirm its validity; (2) give an ordinary language instance of the argument pattern; (3) give an intuitive explanation for why that argument is valid.    For each of the invalid argument patterns denying the antecedent, affirming a disjunct, non sequitur : (1) create a truth table to confirm its invalidity; (2) give an ordinary language instance of the argument pattern; (3) explain a counterexample which shows the invalidity of the argument.    For each of the following arguments use truth tables to determine whether it is valid. Give an intuitive argument for its (in)validity.                    "
},
{
  "id": "sec1-entailment-3",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entailed "
},
{
  "id": "sec1-entailment-5",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-5",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Procedure for checking validity of an argument.",
  "body": "Procedure for checking validity of an argument  You can check validity of an argument by the following procedure. If not already written in formal logic, translate each proposition in the argument into the formal language.  Construct truth tables for all propositions in the argument. It's convenient to put them all in one table so you can easily compare them.  If the conclusion is true in every row where all premises are true, then the argument is valid. Otherwise, if the argument has a counterexample (a row where all premises are true but the conclusion is false), then the argument is invalid.    "
},
{
  "id": "sec1-entailment-7",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-7",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": " A fallacious argument pattern is affirming the consequent . Namely, it's an argument which takes the form:          We can use the truth table procedure to show why it's an invalid argument.   Truth table for affirming the consequent                                                                      Looking at this, we see that there are two rows where both premises are true, namely the first and third rows. In the first the conclusion is also true, but in the third the conclusion is false. We have a counterexample, so the argument is invalid.  "
},
{
  "id": "sec1-entailment-8",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-8",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " A similar argument pattern is called modus ponens . It's an argument which takes the form:          We can use the truth table procedure to show why it's a valid argument pattern.   Truth table for modus ponens                                                                       The only row where both premises are true is the first row. In this row, the conclusion is also true. So the argument is valid.  "
},
{
  "id": "sec1-entailment-10-1",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-10-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " For each of the valid argument patterns modus tollens , disjunctive syllogism, and hypothetical syllogism: (1) create a truth table to confirm its validity; (2) give an ordinary language instance of the argument pattern; (3) give an intuitive explanation for why that argument is valid.  "
},
{
  "id": "sec1-entailment-10-2",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-10-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": " For each of the invalid argument patterns denying the antecedent, affirming a disjunct, non sequitur : (1) create a truth table to confirm its invalidity; (2) give an ordinary language instance of the argument pattern; (3) explain a counterexample which shows the invalidity of the argument.  "
},
{
  "id": "sec1-entailment-10-3",
  "level": "2",
  "url": "sec1-entailment.html#sec1-entailment-10-3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": " For each of the following arguments use truth tables to determine whether it is valid. Give an intuitive argument for its (in)validity.                  "
},
{
  "id": "sec1-semantic",
  "level": "1",
  "url": "sec1-semantic.html",
  "type": "Section",
  "number": "1.5",
  "title": "Other semantic notions",
  "body": " Other semantic notions  Truth tables allowed us a process for checking whether is an argument is valid. They can be used for other notions. In this section we do this.  Consistency  A collection of propositions are called jointly consistent if it's possible for them all to be true at once. In terms of truth tables, they are jointly consistent if there's a row where they all are true. Intuitively, propositions are jointly consistent if there's some world where they're all true at the same time.  If we're talking about just one sentence we say it's consistent if there's a row of its truth table where it's true.    Consider the proposition . We can see it is not consistent by checking its truth table.   Truth table                         No row of the truth table has this proposition true, so it is not consistent.  On the other hand, consider the proposition . We can see it's consistent by checking its truth table.   Truth table                                                There is at least row where this proposition is true, namely the second row, so it is consistent.   Tautology and contradiction  A proposition is a tautology if it always true—every row of its truth table is true. And a proposition is a contradiction if it is always false—every row of its truth table is false.   The first truth table from the previous example shows that is a contradiction. Indeed, note that being a contradiction is the same as not being consistent. By a similar process you can check that is a tautology. Note that every tautology is consistent, but not vice versa.  An important use of truth tables is confirming that two propositions are equivalent.  Equivalence  Two propositions are logically equivalent when one is true if and only if the other is true. In terms of truth tables, two propositions are logically equivalent if their truth tables have the same pattern of trues and falses.   Using truth tables you can check, as you are asked to do in the exercises, that the following pairs of propositions are equivalent. Associativity of  and .  Associativity of  and .  Commutativity of  and .  Commutativity of  and .  Together, these equivalences say that for conjunction and disjunction order doesn't matter. If you have three or more inputs the order you do the ands\/ors won't affect the outcome, and if you swap which sides of the and\/or the inputs are on you get the same outcome.  Another useful equivalence is that a conditional is logically equivalent to its contrapositive  . This can be checked using truth tables. On the other hand, is not equivalent to its converse  .    For each of the following propositions use truth tables to classify it as a contradiction, a tautology, or consistent.                    Are and logically equivalent? Check using truth tables. Give an intuitive explanation for your answer.    Construct truth tables to demonstrate the equivalences for the associativity and commutativity of conjunction and disjunction.    Construct truth tables to demonstrate that an implication is equivalent to its contrapositive but not its converse.    Explain why two propositions and are logically equivalent just in case is a tautology.    "
},
{
  "id": "sec1-semantic-3",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-3",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Consistency.",
  "body": "Consistency  A collection of propositions are called jointly consistent if it's possible for them all to be true at once. In terms of truth tables, they are jointly consistent if there's a row where they all are true. Intuitively, propositions are jointly consistent if there's some world where they're all true at the same time.  If we're talking about just one sentence we say it's consistent if there's a row of its truth table where it's true.  "
},
{
  "id": "sec1-semantic-4",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-4",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": " Consider the proposition . We can see it is not consistent by checking its truth table.   Truth table                         No row of the truth table has this proposition true, so it is not consistent.  On the other hand, consider the proposition . We can see it's consistent by checking its truth table.   Truth table                                                There is at least row where this proposition is true, namely the second row, so it is consistent.  "
},
{
  "id": "sec1-semantic-5",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-5",
  "type": "Definition",
  "number": "1.5.5",
  "title": "Tautology and contradiction.",
  "body": "Tautology and contradiction  A proposition is a tautology if it always true—every row of its truth table is true. And a proposition is a contradiction if it is always false—every row of its truth table is false.  "
},
{
  "id": "sec1-semantic-8",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-8",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Equivalence.",
  "body": "Equivalence  Two propositions are logically equivalent when one is true if and only if the other is true. In terms of truth tables, two propositions are logically equivalent if their truth tables have the same pattern of trues and falses.  "
},
{
  "id": "sec1-semantic-10",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contrapositive converse "
},
{
  "id": "sec1-semantic-11-1",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-11-1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": " For each of the following propositions use truth tables to classify it as a contradiction, a tautology, or consistent.                  "
},
{
  "id": "sec1-semantic-11-2",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-11-2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": " Are and logically equivalent? Check using truth tables. Give an intuitive explanation for your answer.  "
},
{
  "id": "sec1-semantic-11-3",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-11-3",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": " Construct truth tables to demonstrate the equivalences for the associativity and commutativity of conjunction and disjunction.  "
},
{
  "id": "sec1-semantic-11-4",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-11-4",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": " Construct truth tables to demonstrate that an implication is equivalent to its contrapositive but not its converse.  "
},
{
  "id": "sec1-semantic-11-5",
  "level": "2",
  "url": "sec1-semantic.html#sec1-semantic-11-5",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": " Explain why two propositions and are logically equivalent just in case is a tautology.  "
},
{
  "id": "sec1-quantifiers",
  "level": "1",
  "url": "sec1-quantifiers.html",
  "type": "Section",
  "number": "1.6",
  "title": "Quantifiers",
  "body": " Quantifiers  Previously we've looked at propositional logic . This logic has limited expressiveness, and there's many natural arguments it can't talk about. Consider these two examples.   This is a classical argument going back to Aristotle. All humans are mortal. Socrates is a human. Therefore, Socrates is mortal. If you try to cast this into propositional logic, you'd have to treat each sentence as its own atomic proposition. There's no way to break them down further using the concepts of propositional logic. Thus the argument becomes Doing this erases the logical inference being made. That is, we don't want to treat these statements as atomic, we want to treat them as saying something about connections between properties of things.  This kind of reasoning shows up all the time in mathematics. Every positive number has a square root. is positive. Therefore, has a square root. Again, casting this into propositional logic would destroy all meaning. These aren't unconnected atomic statements, they are statements about how properties of numbers relate.   We need to introduce some new ideas to be able to make logical sense of these arguments. This will give us the system known as predicate logic . The first new idea is we want to have names for individuals, not for atomic propositions. A name might be a variable like or standard for an unspecified individual. We use lowercase letters for variables for individuals. Or a name might pick out a specified individual, such as Socrates or the number .  With propositional logic, our logical arena was just about sentences. Is this sentence true or false? That was all we cared about. In this new arena we have a domain of individuals we are talking about. Your choice of domain will be determined by what you want to look at. If you want to argue that Socrates is mortal, it makes sense to take humanity as your domain. If you want to talk about square roots, it makes sense to take the real numbers (the numbers which measure continuous quantities) as your domain.  In this context our atomic statements are statements about individuals, which leads to our next new idea. We need predicate symbols to stand for statements that individuals have such-and-such property. We use capital letters for predicates to distinguish them from names for individuals. For example, we might write to mean is mortal , so that is true. Or we might write to mean has a square root . Then is true.  Those two examples are what we call unary predicates, meaning they are about a single individual. Predicates can also be binary , about two individuals, or ternary (about three individuals), or even more. For example, if you want to talk about a property like is a square root of this isn't about just one individual but about how two relate. So you'd need a binary predicate like and then and would both be true. Or consider the relation is the mother of . This isn't about just or just , but about both of them. You could write it as .  When using predicate symbols that stand for something you should include a translation key that explains their meanings.  These two concepts are enough to make sense of sentences like Socrates is mortal . But we need one more thing to make sense of all humans are mortal . This isn't a statement about a specified individual, but rather a general state about all individuals. When making general statements about the entire domain there's multiple things you might want to say. Two of them stand out as particularly useful.  The first is saying all individuals have property . This is a general statement about the domain as a whole, which doesn't reduce to a statement about a single individual. The second is saying some individuals, at least one, have property . Again, this is a statement about the domain as a whole. We introduce quantifiers to allow us to make these general statements.  The universal quantifier is how we say all individuals have . We write to mean every individual has property . The variable is the bound variable of the quantifier. Think of it as a pronoun; we introduce an ad-hoc way to refer to the unstated individuals we are looking at.   We could express all men are mortal as where our domain is humanity and means is mortal .   The existential quantifier is how we say some individuals have . We write to mean there exists at least one individual which has property . Again, the bound variable functions as a way to refer to the unstated individuals we are looking at.   You could formalize has a square root as a single predicate. But it's more natural to use the existential quantifier. After all, this statement is saying there is some number which squared gives . With that in mind, let's write to mean . Then we can express has a square root as where our domain is the real numbers.  Let's consider another statement, namely every positive number has a square root . To express this we need a new predicate meaning is positive . This is a statement we need two quantifiers to express. Namely, we can do it as You can cast this into English as: for every number if is positive then there is a number which is the square root of .   This second example illustrates why we want quantifiers to have bound variables attached. When you are making complicated statements about multiple objects it's convenient to have different names so you can distinguish which you are talking about.    Warning! Two different variables can refer to the same individual. Take the square root example where means . For most numbers, their square root must be different. But there's a couple numbers which are their own square root, namely and . If we plug in for both and then —that is, —is a true statement.  We can combine quantifiers with the connectives from propositional logic. These connectives can occur inside or outside of quantifiers. Carefully note that their exact position affects the meaning of a sentence. With that in mind, it's never a bad idea to put in parentheses to make clear the order of things.    Use the following translation key. Use this translation key with the real numbers as domain to translate the following sentences into formal logic.  is rational but is irrational. (Note: irrational means not rational.)  There is a number which is irrational.  There is a number which is irrational and there is a number which is rational.  Every number is either rational or irrational.      If you've ever ridden a subway you may have heard the announcer say all doors will not open at a stop. What they actually mean is not all doors will open . Translate both sentences into formal logic. As part of this, state what your domain is and give your translation key. Explain why the two sentences have different meaning.    Use the following translation key. Use the positive whole numbers as your domain. Translate the following sentences of formal logic into ordinary language. As much as possible, try to write ordinary sentences that don't have variables in them.                    The order of quantifiers affects the meaning of a sentence. If you swap a universal and existential quantifier you get a different meaning. To illustrate, let mean is the mother of . Translate the following two sentences into ordinary language and explain why they mean different things. Please in your translations don't refer to variables; that's not how ordinary people talk.     "
},
{
  "id": "sec1-quantifiers-2",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "propositional logic "
},
{
  "id": "sec1-quantifiers-3",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-3",
  "type": "Example",
  "number": "1.6.1",
  "title": "",
  "body": " This is a classical argument going back to Aristotle. All humans are mortal. Socrates is a human. Therefore, Socrates is mortal. If you try to cast this into propositional logic, you'd have to treat each sentence as its own atomic proposition. There's no way to break them down further using the concepts of propositional logic. Thus the argument becomes Doing this erases the logical inference being made. That is, we don't want to treat these statements as atomic, we want to treat them as saying something about connections between properties of things.  This kind of reasoning shows up all the time in mathematics. Every positive number has a square root. is positive. Therefore, has a square root. Again, casting this into propositional logic would destroy all meaning. These aren't unconnected atomic statements, they are statements about how properties of numbers relate.  "
},
{
  "id": "sec1-quantifiers-4",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "predicate logic variable "
},
{
  "id": "sec1-quantifiers-5",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "domain "
},
{
  "id": "sec1-quantifiers-6",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "predicate "
},
{
  "id": "sec1-quantifiers-7",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unary binary ternary "
},
{
  "id": "sec1-quantifiers-10",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantifiers "
},
{
  "id": "sec1-quantifiers-11",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universal quantifier bound variable "
},
{
  "id": "sec1-quantifiers-12",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-12",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": " We could express all men are mortal as where our domain is humanity and means is mortal .  "
},
{
  "id": "sec1-quantifiers-13",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "existential quantifier "
},
{
  "id": "sec1-quantifiers-14",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-14",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": " You could formalize has a square root as a single predicate. But it's more natural to use the existential quantifier. After all, this statement is saying there is some number which squared gives . With that in mind, let's write to mean . Then we can express has a square root as where our domain is the real numbers.  Let's consider another statement, namely every positive number has a square root . To express this we need a new predicate meaning is positive . This is a statement we need two quantifiers to express. Namely, we can do it as You can cast this into English as: for every number if is positive then there is a number which is the square root of .   This second example illustrates why we want quantifiers to have bound variables attached. When you are making complicated statements about multiple objects it's convenient to have different names so you can distinguish which you are talking about.  "
},
{
  "id": "sec1-quantifiers-17-1",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-17-1",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " Use the following translation key. Use this translation key with the real numbers as domain to translate the following sentences into formal logic.  is rational but is irrational. (Note: irrational means not rational.)  There is a number which is irrational.  There is a number which is irrational and there is a number which is rational.  Every number is either rational or irrational.    "
},
{
  "id": "sec1-quantifiers-17-2",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-17-2",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": " If you've ever ridden a subway you may have heard the announcer say all doors will not open at a stop. What they actually mean is not all doors will open . Translate both sentences into formal logic. As part of this, state what your domain is and give your translation key. Explain why the two sentences have different meaning.  "
},
{
  "id": "sec1-quantifiers-17-3",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-17-3",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": " Use the following translation key. Use the positive whole numbers as your domain. Translate the following sentences of formal logic into ordinary language. As much as possible, try to write ordinary sentences that don't have variables in them.                  "
},
{
  "id": "sec1-quantifiers-17-4",
  "level": "2",
  "url": "sec1-quantifiers.html#sec1-quantifiers-17-4",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": " The order of quantifiers affects the meaning of a sentence. If you swap a universal and existential quantifier you get a different meaning. To illustrate, let mean is the mother of . Translate the following two sentences into ordinary language and explain why they mean different things. Please in your translations don't refer to variables; that's not how ordinary people talk.   "
},
{
  "id": "sec1-models",
  "level": "1",
  "url": "sec1-models.html",
  "type": "Section",
  "number": "1.7",
  "title": "Models and the semantics of quantifier logic",
  "body": " Models and the semantics of quantifier logic  With propositional logic, truth tables gave us a complete specification of how a logical sentence might behave in any possible situation. We could exhaustively list out all possible combinations of inputs and compute the behavior for each possibility. In this way we could completely define the semantics—meaning—of a sentence of propositional logic.  Predicate logic gives us extra expressive power, but that comes at the cost of a more complicated semantics. In this section we will take a brief look at this topic. The goal is not to attain a complete mastery. That would take a dedicated course. Instead, the goal is get a sketch of the big ideas and thereby an appreciation of the difficulties and the work necessary to overcome these difficulties.  Here is the fundamental challenge. In propositional logic, a possible state of affairs can be summarized as a listing of truth values of the various variables. If you have variables, then there are many possible states of affair. That can be a big number, it's a finite list you can exhaustively work through. (More realistically, if it's a big number you can program a computer to work through it for you.)  In predicate logic, an interpretation of the possible meaning of a sentence is more complicated. You need to specify the domain and you need to specify the meaning of the predicate symbols in the sentence. There's a lot of possibilities, infinitely many. It's hopeless to want to put all these possibilities into a single table.  Interpretations of predicate logic  An interpretation of a sentence (or sentences) of predicate logic is a possible meaning of the symbols in the sentence. More precisely, an interpretation consists of the following data. The domain or universe , a set of individuals.  For each name for an individual, a selection of which individual it picks out.  If there are any unbound variables in the sentence, the interpretation also needs to specify which individuals they refer to.  For each unary predicate , the set of which individuals in the domain the predicate is true of. Similarly, for each binary predicate the set of which pairs of individuals from the domain the predicate is true of. And similarly for ternary, and so on predicates.      Consider the sentence , whose intended interpretation is to express Socrates is mortal . An interpretation must specify the domain, which individual Socrates refers to, and which individuals have property . Here's one interpretation, the intended one. The domain is the set of all humans, Socrates refers to the ancient Greek philosopher who was accused of corrupting the youth, sentenced to drink hemlock, etc., and every human has property . (After all, all humans are mortal.) Under this interpretation, is true.  Here's another interpretation. The domain is the set of positive whole numbers, Socrates refers to the number seven, and when is as even number. Under this interpretation, is false.  As these examples show, the interpretation gives a lot of information.   Given an interpretation, you can then work out whether a statement is true. The rules for connectives are the same as we saw with their truth tables, but we have the extra work of determining what's going on with quantifiers.  Truth and interpretations  Given an interpretation of a sentence (or sentences) of predicate logic, we can determine its truth according to the following rules. An atomic sentence is true if the interpretation says that individual has property .  If we already know what's going on with sentences and , then is true when both and are true.  If we already know what's going on with sentences and , then is true when at least one of and is true.  If we already know what's going on with sentence , then is true when is false.  If we already know what's going on with sentences and , then is true when either is false or is true. That is, is true if the corresponding row in the truth table is true.  If we already know what's going on with sentences and , then is true when and have the same truth value.  If we already know what's going on with sentences , then is true if for any choice of individual we have that is true if is interpreted to refer to .  If we already know what's going on with sentences , then is true if there is at least one choice of individual so that is true when is interpreted to refer to .  This looks complicated, but here's the summary. The truth of atomic sentences is given by the interpretation. Compare to how in predicate logic the truth of a variable was given by the row of a truth table. For the connectives, we use the same rules that define their truth tables. For the two quantifiers, we again use their definitions. Namely, means every individual has property and means at least one individual has property .   With propositional logic, you could always calculate the truth value of a sentence in a row of the truth table. If the sentence was long this might take some work, but it's a matter of applying enough time to repeatedly apply the rules for each connective. Here, it's not so simple. If the domain is infinite, then determining the rules for quantifiers requires surveying an infinite domain. That could take a very long time.  In general, there is no single uniform procedure you can use to determine whether a sentence is true in an interpretation. In fact, all of mathematics can be cast in predicate logic. That includes difficult, unsolved problems. If you had a method that always worked to determine truth (given an interpretation) in predicate logic you could solve every open problem in mathematics.  Once you have a notion of interpretation and truth in an interpretation, you can carry over all the semantic notions we had for propositional logic. There, interpretations were rows of a truth table. So we make the necessary changes to swap in the new definition of an interpretation.  Here's a few examples.  Entailment  A conclusion is entailed by premises if any interpretation which makes all premises true also makes true.   Consistency  A collection of sentences of predicate logic, possibly just one sentence, is consistent if there is an interpretation which makes all the sentences true.   Equivalence  Two sentences of predicate logic are logically equivalent if under any interpretation they have the same truth values.   There is a trade-off. Adding in predicates and quantifiers gave us more expressive power. We can express new arguments, like the one about Socrates being mortal. Indeed, this gives us enough power to do all of mathematics. But this extra power means that the system is harder to analyze. One place you see this is with entailment. With propositional logic, we could use truth tables to get a process for checking validity of arguments. With predicate logic, we don't have an algorithm because we'd have to look at infinitely many interpretations. How then can we check validity of arguments?  One thing you can do is isolate some basic one step deductions that are valid, so that any argument can be cast as a long sequence of these deductions. This leads to the big topic in logic we haven't talked about, namely proofs . A proof is a step-by-step deduction of a conclusion from premises, which makes clear that the conclusion is entailed by the premises. A proof is a syntactic object, something you can write down. Unlike the semantic notions of predicate logic which require surveying an infinite domain to check, you can sit down and check that each step in a proof is valid.  If you are interested in learning more about logic, this would be the first major thing to study.    Consider the following statements of predicate logic. For each of them, come up with an interpretation in which the statement is true. Give an intuitive explanation for why your interpretation makes it true.                 If you interpret to mean and are the same individual (we call it for equality ) then no matter your domain the following two sentences will be true.       Explain why those are both true for the equality interpretation. Come up with two new interpretations for , one where both of these are false and one where exactly one is true. Give an intuitive explanation for why those interpretations do what you want.  Try to first translate the two sentences into ordinary language to understand what they are saying.    "
},
{
  "id": "sec1-models-6",
  "level": "2",
  "url": "sec1-models.html#sec1-models-6",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Interpretations of predicate logic.",
  "body": "Interpretations of predicate logic  An interpretation of a sentence (or sentences) of predicate logic is a possible meaning of the symbols in the sentence. More precisely, an interpretation consists of the following data. The domain or universe , a set of individuals.  For each name for an individual, a selection of which individual it picks out.  If there are any unbound variables in the sentence, the interpretation also needs to specify which individuals they refer to.  For each unary predicate , the set of which individuals in the domain the predicate is true of. Similarly, for each binary predicate the set of which pairs of individuals from the domain the predicate is true of. And similarly for ternary, and so on predicates.    "
},
{
  "id": "sec1-models-7",
  "level": "2",
  "url": "sec1-models.html#sec1-models-7",
  "type": "Example",
  "number": "1.7.2",
  "title": "",
  "body": " Consider the sentence , whose intended interpretation is to express Socrates is mortal . An interpretation must specify the domain, which individual Socrates refers to, and which individuals have property . Here's one interpretation, the intended one. The domain is the set of all humans, Socrates refers to the ancient Greek philosopher who was accused of corrupting the youth, sentenced to drink hemlock, etc., and every human has property . (After all, all humans are mortal.) Under this interpretation, is true.  Here's another interpretation. The domain is the set of positive whole numbers, Socrates refers to the number seven, and when is as even number. Under this interpretation, is false.  As these examples show, the interpretation gives a lot of information.  "
},
{
  "id": "sec1-models-9",
  "level": "2",
  "url": "sec1-models.html#sec1-models-9",
  "type": "Definition",
  "number": "1.7.3",
  "title": "Truth and interpretations.",
  "body": "Truth and interpretations  Given an interpretation of a sentence (or sentences) of predicate logic, we can determine its truth according to the following rules. An atomic sentence is true if the interpretation says that individual has property .  If we already know what's going on with sentences and , then is true when both and are true.  If we already know what's going on with sentences and , then is true when at least one of and is true.  If we already know what's going on with sentence , then is true when is false.  If we already know what's going on with sentences and , then is true when either is false or is true. That is, is true if the corresponding row in the truth table is true.  If we already know what's going on with sentences and , then is true when and have the same truth value.  If we already know what's going on with sentences , then is true if for any choice of individual we have that is true if is interpreted to refer to .  If we already know what's going on with sentences , then is true if there is at least one choice of individual so that is true when is interpreted to refer to .  This looks complicated, but here's the summary. The truth of atomic sentences is given by the interpretation. Compare to how in predicate logic the truth of a variable was given by the row of a truth table. For the connectives, we use the same rules that define their truth tables. For the two quantifiers, we again use their definitions. Namely, means every individual has property and means at least one individual has property .  "
},
{
  "id": "sec1-models-14",
  "level": "2",
  "url": "sec1-models.html#sec1-models-14",
  "type": "Definition",
  "number": "1.7.4",
  "title": "Entailment.",
  "body": "Entailment  A conclusion is entailed by premises if any interpretation which makes all premises true also makes true.  "
},
{
  "id": "sec1-models-15",
  "level": "2",
  "url": "sec1-models.html#sec1-models-15",
  "type": "Definition",
  "number": "1.7.5",
  "title": "Consistency.",
  "body": "Consistency  A collection of sentences of predicate logic, possibly just one sentence, is consistent if there is an interpretation which makes all the sentences true.  "
},
{
  "id": "sec1-models-16",
  "level": "2",
  "url": "sec1-models.html#sec1-models-16",
  "type": "Definition",
  "number": "1.7.6",
  "title": "Equivalence.",
  "body": "Equivalence  Two sentences of predicate logic are logically equivalent if under any interpretation they have the same truth values.  "
},
{
  "id": "sec1-models-18",
  "level": "2",
  "url": "sec1-models.html#sec1-models-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proofs syntactic "
},
{
  "id": "sec1-models-20-1",
  "level": "2",
  "url": "sec1-models.html#sec1-models-20-1",
  "type": "Exercise",
  "number": "1.7.1",
  "title": "",
  "body": " Consider the following statements of predicate logic. For each of them, come up with an interpretation in which the statement is true. Give an intuitive explanation for why your interpretation makes it true.               "
},
{
  "id": "sec1-models-20-2",
  "level": "2",
  "url": "sec1-models.html#sec1-models-20-2",
  "type": "Exercise",
  "number": "1.7.2",
  "title": "",
  "body": " If you interpret to mean and are the same individual (we call it for equality ) then no matter your domain the following two sentences will be true.       Explain why those are both true for the equality interpretation. Come up with two new interpretations for , one where both of these are false and one where exactly one is true. Give an intuitive explanation for why those interpretations do what you want.  Try to first translate the two sentences into ordinary language to understand what they are saying.  "
},
{
  "id": "sec2-data",
  "level": "1",
  "url": "sec2-data.html",
  "type": "Section",
  "number": "2.1",
  "title": "Visualizing data",
  "body": " Visualizing data  Data are useful to look at for understanding the world and making predictions about it. However, most interesting data sets —collections of data about a group of people are things—are too large to be easily surveyed. We need a way to make these data understandable to humans. One way this is done is by visualizing the data—producing a graphical representation of it. There are multiple ways to do this.  This is a point only pedantic nerds care about, but data is a plural noun, with datum being the singular. Hence pedantic nerds write these data say instead of this data says .  Quantitative and qualitative data  Data is quantitative if it can be expressed numerically. Qualitative data, on the other hand, merely categorizes.  For example, age is quantitative data while gender is qualitative.   Quantitative data can be used to categorize. For example, a researcher doing education on college students might categorize them by how many years they've been in college. Often it is best to categorize with a range of quantities, not a single one. For example, if you want to categorize people by annual income you probably want to treat and as close enough.  On the other hand, qualitative data can't meaningfully be made quantitites. You might assign numbers to the various options for race, but those numbers don't have any meaning. It doesn't make sense to add them, compare them, multiply them. Good practice when you see data represented as numbers is to ask yourself, do these make sense as numbers? Does it make sense to say one is larger or smaller than another? Does it makes sense to add them? Does it make sense to multiply them?  One way to visualize data is via a summary table. For example, suppose you work at a school district and are presenting on pass rates of students. Part of your data summary might look like the following table.   Number of students passing standardized exams by teacher    Teacher  Number passing    Ms. Adams  21    Mr. Baker  24    Ms. Chan  26    Ms. Diaz  25    Mr. Edwards  19     Tables can be useful, but they are often slow to read. You can take advantage of humans' evolved ability to quickly compare lengths by representing data visually. Let's see a few exmaples of how to present this table in a more graphical manner. A bar graph represents quantities by the length of bars, so that they can be quickly compared. A longer bar means more and a shorter bar means fewer. The downside is this method of summarizing data doesn't give precise values. This downside can be mitigated by also providing the numbers with the bars.  You can present the bars either vertically or horizontally. For consistency I will orient everything vertically. That is, the horizontal axis will represent the different categories and the vertical axis will represent the quantities. For a horizontal orientation you merely swap the role of the two axes.   The same data as in the above table, but presented in a bar plot. The plot has five bars, for the five teachers Adams, Baker, Chan, Diaz, and Edwards. The heights of the bars correspond to the number of passing students for each teacher.  The visual pizazz is at a minimum. The bars alternate colors to ease readability, but otherwise things are basic.   The same summary could be presented as a dot graph . Rather than representing quantities by lengths of bars, you represent them by the height of a dot.   The same data as in the above table, but presented in a dot plot. Rather than five bars for the five teachers there are five dots.   In this case, there isn't a meaningful order for the data on the -axis. The names are ordered alphabetically, but that isn't relevant to the data being presented. In cases where there is a meaningful order, it makes sense to connect the dots with lines to make a line graph . A common example is when the categories are dates. If the categories aren't ordered then the lines between dots can wrongly suggest trends, and it's better to simply graph disconnected points.  Regardless, here's the same data as a line graph. You can tell the lines aren't providing meaningful info because they suggest a connection between adjacent names. But the meaning of the data would be the same if you shuffled the order of the names.   The same data as in the above dot plot, but now with lines connecting the dots. It's not a good graph, the lines aren't adding any useful visual information.   Another kind of chart you sometimes see is a circle chart , also called a pie chart . Rather than represent quantitis by distances or lengths, a circle represents the overall population and it is divided into wedges based on the proportions of the population. For example, if fall into category then the wedge for would claim just over half the pie.   The same data as in the above table, but presented in a circle chart. There are five wedges for the five teachers corresponding to their share of the passing students.  This is an awful visualization of this data. But that is typical of circle charts.   Presumably there is someone out there who likes circle charts. But they are morally and objectively wrong. Human vision is good at comparing distances; it is quick to see which of two bars are longer. But it's not so good at comparing angular measures. Converting a circle chart to an equivalent bar chart will make things easier for your audience. An exception is if there are only two categories. In that case, the circle is divided into two pieces so it's easy to compare them.  In this example, the circle chart is especially nonsense. Circle charts are at their best when you want to see what proportion of a total population fits into each category. That's not what these data are about. What's relevant, if anything, is how many passing students each teacher has from among those they teach, not from among the total population of passing students.  The data visualizations we've seen so far each focused on a single type of quantity, corresponding to categories. Also important is how two different types of quantities are related. For example, suppose you are interested in understanding the relationship between class size and pass rates. You could compare these by plotting, say, two bar graphs, one for class size and one for pass rate across various teachers. But it's more direct to plot the two quantities against each other.  We can use a two dimensional coordinate grid for this. The horizontal axis, also called the -axis, is used to represent one of the kinds of qantities. The vertical axis, also called the -axis, represents the other. Often but not always we pick the -axis to represent the independent variable and the -axis to represent the dependent variable , meaning that that we think of the dependent variable as being a function of the independent variable.  We use cartesian coordinates , such as you may have seen in high school algebra. That is, each point in the two dimensional space represents a pair of numbers. We fix a starting point, which we usually draw as where the axes intersect. Here, is the left-right distance and represents the value on the -axis and is up-down distance and represents the value on the -axis.  One way to represent correspondence of data in cartesian coordinates is via a scatter plot . The data are pairs of numbers plotted as points. One type of quantity gets represented with -coordinates and the other with -coordinates, so that you can see relations between the two types of data.   Two scatter plots showing the same data. Both show class sizes of various classes versus the percentage of passing students from those classes. The difference between the two scatter plots is how the axes are drawn. The first plot has both axes start at . This creates a lot of empty space in the graph, since the data are not near . The second has the axes start at larger numbers so there's less empty space.  Whichever one you look at, it probably appears that there is a negative correlation between class size and pass rates. That is, smaller classes tend to have higher pass rates and larger classes tend to have lower pass rates.   In the above image the same scatter plot is shown twice to illustrate the effect choosing your axes has on the visualization. In the top plot, the axes both start at . This way, proportions on the graph are accurate; if a dot is twice as high as another it represents twice the value. In the bottom plot, the axes start at and . In this way we get a zoomed in view of the plot, and can more easily see distances between points. However, we lose the meaning of proportions. For instance, there is a dot near the bottom at . Above it are two more dots, about three or four times high on the graph. But they don't represent values three or four times higher.  The lesson is, the choice of where axes starts can affect the visualization. You should be careful to look at the axes to make sure you are correctly interpreting the graph. You can also think about this from a defensive posture. One way to present a misleading graph is to choose where the axes start. If you want to make differences look negligible, pick a far away starting point. If you want to magnify them, don't start the axis at . When reading and interpreting others' graphs you should critically engage with the presentation. Ask yourself: what purpose is there for the choice of presentation? Is it misleading? Or does it let me better understand the data?    Consider the summary given in the following table. Which type of chart do you think is the best way to visualize these data? Explain your choice. Sketch a version of your favored chart, as well as one other kind of chart for comparison.  Survey of people's favorite music genre    Genre  Number    Pop  2131    Rock  1940    Rap  2056    Country  1659    Jazz  1141    Dance  1457    Classical  319        Find a data visualization from an online or print media organization. Summarize what the visualization shows. Do you think it effectively and honestly conveys information? Explain. Please include a copy of the visualization and give a citation or url for where you got it.    Consider the following collection of violin plots , showing ages of members of different religious denominations. Each dot in a plot represents a set number of people, so that more dots in one row represent a larger number of members of that age.   Twenty plots arranged into two rows. Each plot is a set of dots in a violin plot shape. The vertical axis represents age and each dot represents a quantity of people, with more dots in a row corresponding to more people of that age in the denomination. The twenty plots are ordered by the modal age of the denomination. They are, in order: Nondenominational Fundamentalist (72), Interdenominational (71) Lutheron-Missouri Synod (70), National Baptist Convention (69), United Methodist (67), ELCA (67), PCUSA (67), ABCUSA (65), United Church of Christ (65), Community Church (63), TEC (63), Nondenominational Charismatic (63), Southern Baptist (62), Baptist Miss. Association (62), Nondenominational Evangelical (61), Independent Baptist (61), Pentecostal Church of God (61), General Association of Regular Baptists (59), PC (59), and Free Will Baptist (54).   Image copyright Ryan Burge. Data taken from the Cooperative Election Study 2022–2024.   Summarize what you think this data visualization is saying.    Look again at the two scatter plots about class size and pass rate, reproduced below. Which one do you think gives you a better, more honest view into the data? Explain your answer.   Two scatter plots showing the same data. Both show class sizes of various classes versus the percentage of passing students from those classes. The difference between the two scatter plots is how the axes are drawn. The first plot has both axes start at . This creates a lot of empty space in the graph, since the data are not near . The second has the axes start at larger numbers so there's less empty space.  Whichever one you look at, it probably appears that there is a negative correlation between class size and pass rates. That is, smaller classes tend to have higher pass rates and larger classes tend to have lower pass rates.     "
},
{
  "id": "sec2-data-2",
  "level": "2",
  "url": "sec2-data.html#sec2-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data data sets "
},
{
  "id": "sec2-data-4",
  "level": "2",
  "url": "sec2-data.html#sec2-data-4",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Quantitative and qualitative data.",
  "body": "Quantitative and qualitative data  Data is quantitative if it can be expressed numerically. Qualitative data, on the other hand, merely categorizes.  For example, age is quantitative data while gender is qualitative.  "
},
{
  "id": "sec2-data-8",
  "level": "2",
  "url": "sec2-data.html#sec2-data-8",
  "type": "Table",
  "number": "2.1.2",
  "title": "Number of students passing standardized exams by teacher",
  "body": " Number of students passing standardized exams by teacher    Teacher  Number passing    Ms. Adams  21    Mr. Baker  24    Ms. Chan  26    Ms. Diaz  25    Mr. Edwards  19    "
},
{
  "id": "sec2-data-9",
  "level": "2",
  "url": "sec2-data.html#sec2-data-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bar graph "
},
{
  "id": "sec2-data-12",
  "level": "2",
  "url": "sec2-data.html#sec2-data-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot graph "
},
{
  "id": "sec2-data-14",
  "level": "2",
  "url": "sec2-data.html#sec2-data-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "line graph "
},
{
  "id": "sec2-data-17",
  "level": "2",
  "url": "sec2-data.html#sec2-data-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circle chart pie chart "
},
{
  "id": "sec2-data-22",
  "level": "2",
  "url": "sec2-data.html#sec2-data-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent variable dependent variable "
},
{
  "id": "sec2-data-23",
  "level": "2",
  "url": "sec2-data.html#sec2-data-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cartesian coordinates "
},
{
  "id": "sec2-data-24",
  "level": "2",
  "url": "sec2-data.html#sec2-data-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatter plot "
},
{
  "id": "sec2-data-28-1",
  "level": "2",
  "url": "sec2-data.html#sec2-data-28-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Consider the summary given in the following table. Which type of chart do you think is the best way to visualize these data? Explain your choice. Sketch a version of your favored chart, as well as one other kind of chart for comparison.  Survey of people's favorite music genre    Genre  Number    Pop  2131    Rock  1940    Rap  2056    Country  1659    Jazz  1141    Dance  1457    Classical  319      "
},
{
  "id": "sec2-data-28-2",
  "level": "2",
  "url": "sec2-data.html#sec2-data-28-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Find a data visualization from an online or print media organization. Summarize what the visualization shows. Do you think it effectively and honestly conveys information? Explain. Please include a copy of the visualization and give a citation or url for where you got it.  "
},
{
  "id": "sec2-data-28-3",
  "level": "2",
  "url": "sec2-data.html#sec2-data-28-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Consider the following collection of violin plots , showing ages of members of different religious denominations. Each dot in a plot represents a set number of people, so that more dots in one row represent a larger number of members of that age.   Twenty plots arranged into two rows. Each plot is a set of dots in a violin plot shape. The vertical axis represents age and each dot represents a quantity of people, with more dots in a row corresponding to more people of that age in the denomination. The twenty plots are ordered by the modal age of the denomination. They are, in order: Nondenominational Fundamentalist (72), Interdenominational (71) Lutheron-Missouri Synod (70), National Baptist Convention (69), United Methodist (67), ELCA (67), PCUSA (67), ABCUSA (65), United Church of Christ (65), Community Church (63), TEC (63), Nondenominational Charismatic (63), Southern Baptist (62), Baptist Miss. Association (62), Nondenominational Evangelical (61), Independent Baptist (61), Pentecostal Church of God (61), General Association of Regular Baptists (59), PC (59), and Free Will Baptist (54).   Image copyright Ryan Burge. Data taken from the Cooperative Election Study 2022–2024.   Summarize what you think this data visualization is saying.  "
},
{
  "id": "sec2-data-28-4",
  "level": "2",
  "url": "sec2-data.html#sec2-data-28-4",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": " Look again at the two scatter plots about class size and pass rate, reproduced below. Which one do you think gives you a better, more honest view into the data? Explain your answer.   Two scatter plots showing the same data. Both show class sizes of various classes versus the percentage of passing students from those classes. The difference between the two scatter plots is how the axes are drawn. The first plot has both axes start at . This creates a lot of empty space in the graph, since the data are not near . The second has the axes start at larger numbers so there's less empty space.  Whichever one you look at, it probably appears that there is a negative correlation between class size and pass rates. That is, smaller classes tend to have higher pass rates and larger classes tend to have lower pass rates.   "
},
{
  "id": "sec2-average",
  "level": "1",
  "url": "sec2-average.html",
  "type": "Section",
  "number": "2.2",
  "title": "Averages",
  "body": " Averages  Suppose you have a collection of numbers representing measurements. For example, perhaps you are a marine biologist tagging sharks that make it to Cape Cod. For each shark you measure its body length. After a summer of work your team has a few dozen measurements. You want to summarize these measurements. What is the length of a typical or average shark?  First let's fix some notation for talking about this. A data set in this context is just a collection of numbers. Think of it like a column in a spreadsheet. If we're talking abstractly where we don't necessarily know in advance the specific numbers, we can write this collection of numbers like That is, each entry in the data set gets an index (think: its row number in a spreadsheet). The size of the data set is . The indices only make sense for .  With that in mind, let's talk about measures for the center of a data set. There are a few different notions of an average , with their own advantages and disadvantages. We will discuss them in turn. We start with the one with the most complicated definition.  Mean  Suppose you have a collection of numbers . Their mean , commonly denoted , measures their center of gravity. Imagine the number line as a balancing beam with a weight placed at each number in the data set. The mean is where you would place a fulcrum so that the two sides would be balanced. Mathematically, we can describe it with the following formula. That is, to calculate the mean you add up all the values in the data set and divide by the number of values.  The notation , called summation notation , means to sum up all the s. It is a shorthand for writing the longer . The symbol is the Greek letter Sigma ; think of Sigma as the Greek S, with S for sum .  Another way of thinking about the mean is, imagine the values plotted on a number line. If you want the location which miniminizes the total distance to the numbers, that location is the mean.   The mean is the most important notion of an average, to the point where often people will say average to mean the mean. The main reason for the mean's importance is it has nice mathematical properties that enable more complicated uses of statistics.  Here is a joke. You see a mathematician scrambling around on the ground under a streetlamp late at night. You ask her what she's doing, and she replies that she's looking for her lost glasses. You are a kind person, so you offer to help. You ask where she dropped them. She gestures and replies that she lost them half a block down the street. You ask why she's searching under the streetlamp. She says that the street lamp has nice mathematical properties and so it's easier to prove theorems here than over in the dark.  Median  Suppose you have a collection of numbers . Their median is the value in the middle if you list them in order. Phrased differently, the median is the position where half the values are smaller and half the values are larger. To give a precise, we have to split into two cases. Assume for convenience the numbers are already listed in increasing order:  If is odd, then the median is the value exactly in the middle, namely, .  If is even, then the median will be the average of the two values closest to the middle. Namely, it will be      Mode  Suppose you have a collection of numbers . Their mode is the value that occurs the most often in the list. If there is a tie for the value that occurs the most, the data have multiple modes.   A way to understand the mode is, if you plotted a frequency chart then the mode would be the value with the longest bar.   Consider the collection of nine numbers We can calculate their mean, median, and mode. Note that the mean is greater than the median. This is because the data set is weighted toward larger numbers; there are a bunch of small numbers clustered close together and then it starts spacing out more and more. With the median you don't care about the distance between values, only their order. Whereas the mean is all about distances.   You might ask, why have three different notions of the center of a data set? Why not just have one notion that's the best?  The trouble is, life isn't so neat as to have a single option that's always the best. We have to make do with different options for different circumstances.  A nice feature of the mode is that it makes sense for qualitative data. For example, suppose a survey asks respondants their religion. This isn't quantitative data; it doesn't make sense to say that someone's religion is . But you can still use mode to get an idea of what a typical response is. If of respondants answer Islam, that being the mode gives you an idea of the average. (Note, of course, you can get better info by reporting more detail, say by giving the percentages for the top answers.) You can't use median or mean in this context, because they rely on numerical properties. For median, there's no meaningful ordering of the answers, and for mean you need to be able to add and divide.  When dealing with quantitative data, mean and median are typically more useful measures than mode. One advantage of the mean is, as mentioned above, its nice properties. Let me mention a couple of them, to give you a taste.  Linearity of mean  The mean has the following two properties, collectively known as linearity . If you multiply all values in a data set by the same constant , then the mean of the new data set is times the mean of the original data set.  Suppose you mix two data sets and as follows. To make the new data set, you take every possible way to add values from the two data sets together, that is all possible . The mean of this new data set is then the sum of the means of the two data sets.    This property is helpful if you are combining data sets together to create more complicated data sets, because it lets you calculate the mean of the complicated data set by knowing what's going on with the simpler ones. This is valuable for theoretical work.  One case where median is a more useful measure of the center is when there are outliers. For example, maybe you are studying housing costs to get an idea of how (un)affordable greater Boston is as a place to live. Most people will have housing costs affordable on a normal salary. But there will be a few outliers—the ultrarich. Although small in number, their presence in the data set will skew the mean upward. However, due to their small number they will have minimal impact on the median. If you want an idea of the typical person's housing costs, median will give a better measure.  Because different measures have different advantages, it's helpful to have multiple tools at you disposal. And from the other direction, a consumer of others' statistical analysis, it's useful to know about these tools so you can critically assess what is said to you.    Consider the following two data sets. Calculate the means of the two, and explain what the different means tell you about how the two data sets differ.     Consider the following data set. Compute its mean, median, and mode. Explain what these tell you about how the data set is distributed.     Come up with your own data set whose mean, median, and mode are all different. Come up with a data set where they are all the same. Come up with a data set where the median and the mode are the same but the mean is different.    Consider the data set and the data set you get by multiplying every number by  Check that, as asserted by the linearity of mean, that the mean of the second data set is times the mean of the first.    Consider the two data sets Write down the data set you get by looking at possible ways of adding a value from the first data set to the second data set. Check that, as asserted by the linearity of mean, that its mean is the sum of the means of the two data sets.    Consider again the following collection of violin plots , showing ages of members of different religious denominations. Each dot in a plot represents a set number of people, so that more dots in one row represent a larger number of members of that age.   Twenty plots arranged into two rows. Each plot is a set of dots in a violin plot shape. The vertical axis represents age and each dot represents a quantity of people, with more dots in a row corresponding to more people of that age in the denomination. The twenty plots are ordered by the modal age of the denomination. They are, in order: Nondenominational Fundamentalist (72), Interdenominational (71) Lutheron-Missouri Synod (70), National Baptist Convention (69), United Methodist (67), ELCA (67), PCUSA (67), ABCUSA (65), United Church of Christ (65), Community Church (63), TEC (63), Nondenominational Charismatic (63), Southern Baptist (62), Baptist Miss. Association (62), Nondenominational Evangelical (61), Independent Baptist (61), Pentecostal Church of God (61), General Association of Regular Baptists (59), PC (59), and Free Will Baptist (54).   Image copyright Ryan Burge. Data taken from the Cooperative Election Study 2022–2024.   Reflect on the following, based on these plots. In these plots, what is the graphical meaning of the mode?  Does the mode provide a good measure of the center or average age of a congregation? Explain.  Does it make sense to order these by mode? That is, does it make sense to say that a denomination with a higher modal age is older than one with a lower modal age? Explain    In case it is not clear, modal is the adjective form of the noun mode .    "
},
{
  "id": "sec2-average-4",
  "level": "2",
  "url": "sec2-average.html#sec2-average-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average "
},
{
  "id": "sec2-average-5",
  "level": "2",
  "url": "sec2-average.html#sec2-average-5",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Mean.",
  "body": "Mean  Suppose you have a collection of numbers . Their mean , commonly denoted , measures their center of gravity. Imagine the number line as a balancing beam with a weight placed at each number in the data set. The mean is where you would place a fulcrum so that the two sides would be balanced. Mathematically, we can describe it with the following formula. That is, to calculate the mean you add up all the values in the data set and divide by the number of values.  The notation , called summation notation , means to sum up all the s. It is a shorthand for writing the longer . The symbol is the Greek letter Sigma ; think of Sigma as the Greek S, with S for sum .  Another way of thinking about the mean is, imagine the values plotted on a number line. If you want the location which miniminizes the total distance to the numbers, that location is the mean.  "
},
{
  "id": "sec2-average-8",
  "level": "2",
  "url": "sec2-average.html#sec2-average-8",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Median.",
  "body": "Median  Suppose you have a collection of numbers . Their median is the value in the middle if you list them in order. Phrased differently, the median is the position where half the values are smaller and half the values are larger. To give a precise, we have to split into two cases. Assume for convenience the numbers are already listed in increasing order:  If is odd, then the median is the value exactly in the middle, namely, .  If is even, then the median will be the average of the two values closest to the middle. Namely, it will be     "
},
{
  "id": "sec2-average-9",
  "level": "2",
  "url": "sec2-average.html#sec2-average-9",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Mode.",
  "body": "Mode  Suppose you have a collection of numbers . Their mode is the value that occurs the most often in the list. If there is a tie for the value that occurs the most, the data have multiple modes.  "
},
{
  "id": "sec2-average-11",
  "level": "2",
  "url": "sec2-average.html#sec2-average-11",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": " Consider the collection of nine numbers We can calculate their mean, median, and mode. Note that the mean is greater than the median. This is because the data set is weighted toward larger numbers; there are a bunch of small numbers clustered close together and then it starts spacing out more and more. With the median you don't care about the distance between values, only their order. Whereas the mean is all about distances.  "
},
{
  "id": "sec2-average-16",
  "level": "2",
  "url": "sec2-average.html#sec2-average-16",
  "type": "Definition",
  "number": "2.2.5",
  "title": "Linearity of mean.",
  "body": "Linearity of mean  The mean has the following two properties, collectively known as linearity . If you multiply all values in a data set by the same constant , then the mean of the new data set is times the mean of the original data set.  Suppose you mix two data sets and as follows. To make the new data set, you take every possible way to add values from the two data sets together, that is all possible . The mean of this new data set is then the sum of the means of the two data sets.   "
},
{
  "id": "sec2-average-20-1",
  "level": "2",
  "url": "sec2-average.html#sec2-average-20-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Consider the following two data sets. Calculate the means of the two, and explain what the different means tell you about how the two data sets differ.   "
},
{
  "id": "sec2-average-20-2",
  "level": "2",
  "url": "sec2-average.html#sec2-average-20-2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Consider the following data set. Compute its mean, median, and mode. Explain what these tell you about how the data set is distributed.   "
},
{
  "id": "sec2-average-20-3",
  "level": "2",
  "url": "sec2-average.html#sec2-average-20-3",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Come up with your own data set whose mean, median, and mode are all different. Come up with a data set where they are all the same. Come up with a data set where the median and the mode are the same but the mean is different.  "
},
{
  "id": "sec2-average-20-4",
  "level": "2",
  "url": "sec2-average.html#sec2-average-20-4",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " Consider the data set and the data set you get by multiplying every number by  Check that, as asserted by the linearity of mean, that the mean of the second data set is times the mean of the first.  "
},
{
  "id": "sec2-average-20-5",
  "level": "2",
  "url": "sec2-average.html#sec2-average-20-5",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Consider the two data sets Write down the data set you get by looking at possible ways of adding a value from the first data set to the second data set. Check that, as asserted by the linearity of mean, that its mean is the sum of the means of the two data sets.  "
},
{
  "id": "sec2-average-20-6",
  "level": "2",
  "url": "sec2-average.html#sec2-average-20-6",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " Consider again the following collection of violin plots , showing ages of members of different religious denominations. Each dot in a plot represents a set number of people, so that more dots in one row represent a larger number of members of that age.   Twenty plots arranged into two rows. Each plot is a set of dots in a violin plot shape. The vertical axis represents age and each dot represents a quantity of people, with more dots in a row corresponding to more people of that age in the denomination. The twenty plots are ordered by the modal age of the denomination. They are, in order: Nondenominational Fundamentalist (72), Interdenominational (71) Lutheron-Missouri Synod (70), National Baptist Convention (69), United Methodist (67), ELCA (67), PCUSA (67), ABCUSA (65), United Church of Christ (65), Community Church (63), TEC (63), Nondenominational Charismatic (63), Southern Baptist (62), Baptist Miss. Association (62), Nondenominational Evangelical (61), Independent Baptist (61), Pentecostal Church of God (61), General Association of Regular Baptists (59), PC (59), and Free Will Baptist (54).   Image copyright Ryan Burge. Data taken from the Cooperative Election Study 2022–2024.   Reflect on the following, based on these plots. In these plots, what is the graphical meaning of the mode?  Does the mode provide a good measure of the center or average age of a congregation? Explain.  Does it make sense to order these by mode? That is, does it make sense to say that a denomination with a higher modal age is older than one with a lower modal age? Explain    In case it is not clear, modal is the adjective form of the noun mode .  "
},
{
  "id": "sec2-range",
  "level": "1",
  "url": "sec2-range.html",
  "type": "Section",
  "number": "2.3",
  "title": "Range and quantiles",
  "body": " Range and quantiles  In the last section we discussed how to summarize a complicated data set by measuring where its center is. But that's not the full story. To illustrate this, consider the following three data sets. These data sets all have the same mean, namely . (They also have median .) But they are quite different in terms of spread. With the first one you know the values are all close to , but with the last one some of the values are quite far from . Just the mean alone isn't a good summary of the data.  A quick way to calculate the mean on these: instead of using the sum formula, think about mean as being the balancing point. Looking at you can see that it's balanced at , with the other two points each being away. In general, if you notice that a collection of three numbers has the form then you can immediately tell that their mean is .  In this section we discuss some measures for how spread out a data set is.  Maximum, minimum, and range  Consider a data set of numbers The minimum of the data set is the least number in it and the maximum of the data set is the greatest number in it. That is, the minimum is the value so that for every and the maximum is the value so that for every . The range of the data set is the maximum minus the minimum. The range is the total distance of the interval in which values from the data set lie.   Using the same three data sets above, we can distinguish them via their ranges. Though they all have a mean of , the ranges are, in order, , , . In that way we can distinguish how spread out they are.   Students in a math class take an exam and get the following scores: The maximum is , the minimum is . Thus the range is .   While the range gives some information about how spread out a data set is, it has some severe limitations.   Consider the following two data sets. They are very similar, differing only in one of the eleven values. However, their ranges are quite different. The first has a range of and the second has a range of , almost twenty times as much. If you were just looking at range as a summary you'd think these data sets are much more different than they actually are.  This is similar to the issue, discussed in the last section, of how the mean is affected by outliers. Indeed, for this example both data sets have the same median of . On the other hand, the first data set has its mean as also but the mean of the second data set is approximately . Just like the outlier of blew up the range it also increased the mean.   For a measure of spread which isn't so sensitive to outliers, we don't want to look at the minimum and the maximum.  Quartiles  Quartiles are a measure of where a data set is broken up into four equally sized chunks. That is, the first quartile is where of values are to its left, the second quartile is another name for the mean, where of values are to the left and are to the right, and the third quartile is where of values are to the right.  We can make this a bit more precise, like we did with the mean. One way to do this is, to uniquely specify the locations of the first and third quantile we can order the values in the data set and look for the two values closest to of the way through and of the way through, and define the quartiles to be the average of those two values.     According to data from the US Bureau of Labor Statistics , the weekly wage of full-time workers in the second quarter of 2026 had: First quartile at per week.  Second quartile, that is median, at per week.  Third quartile at per week.  That is, if your weekly wage is you make more than of the population, if your weekly wage is you make more than half of the population, and if your weekly wage is you make more than of the population.   In addition to quartiles dividing a data set into four intervals, you can split a data set into other numbers of pieces. Other common choices are quantiles (five pieces) and deciles (ten pieces).    Determine the minimum, maximum, and range of the following data set:     Explain the following facts. If a list of numbers is given in increasing order, then the minimum is the first number and the maximum is the last number .  The range of a data set is always .  The range of a data set can be . When does this happen?      Use the internet to determine the following values about household income in Massachusetts: mean, median, first quartile, third quartile. Give those values, as well as the year they are for. Write a paragraph or two explaining the real world meaning of those numbers.  Please list your source(s). Note that an AI-generated summary, such as you might get from google, does not count as a source. Click through to links to find the original source being summarized via LLM.    Write definitions of the first, second, and third deciles, similar to the definitions in the text for quartiles. Which decile is the same as the median?    "
},
{
  "id": "sec2-range-5",
  "level": "2",
  "url": "sec2-range.html#sec2-range-5",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Maximum, minimum, and range.",
  "body": "Maximum, minimum, and range  Consider a data set of numbers The minimum of the data set is the least number in it and the maximum of the data set is the greatest number in it. That is, the minimum is the value so that for every and the maximum is the value so that for every . The range of the data set is the maximum minus the minimum. The range is the total distance of the interval in which values from the data set lie.  "
},
{
  "id": "sec2-range-7",
  "level": "2",
  "url": "sec2-range.html#sec2-range-7",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": " Students in a math class take an exam and get the following scores: The maximum is , the minimum is . Thus the range is .  "
},
{
  "id": "sec2-range-9",
  "level": "2",
  "url": "sec2-range.html#sec2-range-9",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " Consider the following two data sets. They are very similar, differing only in one of the eleven values. However, their ranges are quite different. The first has a range of and the second has a range of , almost twenty times as much. If you were just looking at range as a summary you'd think these data sets are much more different than they actually are.  This is similar to the issue, discussed in the last section, of how the mean is affected by outliers. Indeed, for this example both data sets have the same median of . On the other hand, the first data set has its mean as also but the mean of the second data set is approximately . Just like the outlier of blew up the range it also increased the mean.  "
},
{
  "id": "sec2-range-11",
  "level": "2",
  "url": "sec2-range.html#sec2-range-11",
  "type": "Definition",
  "number": "2.3.4",
  "title": "Quartiles.",
  "body": "Quartiles  Quartiles are a measure of where a data set is broken up into four equally sized chunks. That is, the first quartile is where of values are to its left, the second quartile is another name for the mean, where of values are to the left and are to the right, and the third quartile is where of values are to the right.  We can make this a bit more precise, like we did with the mean. One way to do this is, to uniquely specify the locations of the first and third quantile we can order the values in the data set and look for the two values closest to of the way through and of the way through, and define the quartiles to be the average of those two values.   "
},
{
  "id": "sec2-range-12",
  "level": "2",
  "url": "sec2-range.html#sec2-range-12",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": " According to data from the US Bureau of Labor Statistics , the weekly wage of full-time workers in the second quarter of 2026 had: First quartile at per week.  Second quartile, that is median, at per week.  Third quartile at per week.  That is, if your weekly wage is you make more than of the population, if your weekly wage is you make more than half of the population, and if your weekly wage is you make more than of the population.  "
},
{
  "id": "sec2-range-13",
  "level": "2",
  "url": "sec2-range.html#sec2-range-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantiles deciles "
},
{
  "id": "sec2-range-14-1",
  "level": "2",
  "url": "sec2-range.html#sec2-range-14-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " Determine the minimum, maximum, and range of the following data set:   "
},
{
  "id": "sec2-range-14-2",
  "level": "2",
  "url": "sec2-range.html#sec2-range-14-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " Explain the following facts. If a list of numbers is given in increasing order, then the minimum is the first number and the maximum is the last number .  The range of a data set is always .  The range of a data set can be . When does this happen?    "
},
{
  "id": "sec2-range-14-3",
  "level": "2",
  "url": "sec2-range.html#sec2-range-14-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " Use the internet to determine the following values about household income in Massachusetts: mean, median, first quartile, third quartile. Give those values, as well as the year they are for. Write a paragraph or two explaining the real world meaning of those numbers.  Please list your source(s). Note that an AI-generated summary, such as you might get from google, does not count as a source. Click through to links to find the original source being summarized via LLM.  "
},
{
  "id": "sec2-range-14-4",
  "level": "2",
  "url": "sec2-range.html#sec2-range-14-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " Write definitions of the first, second, and third deciles, similar to the definitions in the text for quartiles. Which decile is the same as the median?  "
},
{
  "id": "sec2-box",
  "level": "1",
  "url": "sec2-box.html",
  "type": "Section",
  "number": "2.4",
  "title": "Box and whisker plots",
  "body": " Box and whisker plots  Now that we know about quartiles and medians, we can talk about a convenient visual device for summarizing a data set. A box and whisker plot , also called a box plot , is a visual that shows the median, first and third quartiles, and minimum and maximum of a data set. In this way you can quickly see the center and spread of the data.  In this example, box and whisker plots are given for a data set of exam performance by students in various grade levels. A different box and whisker is given for each grade, so that you can easily compare them. A second version of the plot is given to the side, with dots representing the various exam scores for each grade level. This extra level of information is only sometimes helpful. Here, it's included to help you visualize what a box and whisker plot is showing.   Two box and whisker plots, as described in the paragraph before the image.   Note that the boundary lines of the box part of the plot shows the first quartile and the third quartile, while the median is the line across the middle of the box. Half of the data points fall into the box. The remaining half are in the whiskers, extending out from the quartiles to the minimum and maximum.  In this way, a box and whisker plot gives a quick visual summary of the five-number summary of a data set: the minimum, first quartile, median, third quartile, and maximum. From this you can also determine the range—the maximum minus the minimum—and the interquartile range —namely, the third quartile minus the first quartile.  A common variation is to visually separate outliers from the whiskers. The reasoning is, it's misleading to have a really long whisker to reach out to an outlier; it makes the data look more spread out than they are.  Here is a version of the earlier plot, but with outliers added to the data.   Slight variations on the previous box and whisker plots, but now with low score outliers added to each grade level. The whiskers don't extend to reach these outliers, which are instead plotted as points. This is good, because if the bottom whiskers did reach to the outliers they would be overly long and wrongly give the impression that the data are spread out so far!   Box and whisker plots can be decorated with additional information. One common choice is to plot the means with the boxes. Here is the same plot as before but with means added.   The box plot on the left from before, but now with little diamonds on each plot marking the mean. The plot with the dots for scores isn't shown, as that much data all at once gets messy and hard to read.   Another common variation is to include information about a confidence interval for the median. In many real-world applications, we don't know the exact value of the median or other summary because we don't have access to the whole data set. Instead, we can say that it is probably in a certain range. While we won't talk about the methods needed to determine that range, we can see it visually.  Here is the same plot again but with notches in the boxes to show the confidence intervals for the medians. If your plot has just the medians, it may look like you can confidently order them. But with the notches you can see that might not be so clear; boxes with overlapping notches have overlap in the confidence intervals in the mean, so there is a reasonable likelihood that the order is actually different. In jargon, we'd say the difference is not statistically significant .   The box plots from before, but now with notches on each plot box marking the confidence interval of the median. This is a bit fatuous of an example, since in this case we know of the data: it's a small number of exam scores. But if these represented random samples from a larger population then this would be more meaningful.   As these examples illustrate, one advantage of box plots is that they enable quick comparisons of different data sets. You can visually see how they differ in their different summaries. A less detailed plot wouldn't give you enough info, while a more detailed plot might give so much information that it's hard to quickly read off and compare different plots. Box and whisker plots sit in a nice sweet spot.    A data set has the following five-number summary: minimum , first quartile , median , third quartile , maximum . Draw a box and whisker plot for this data set. Write a sentence or two explaining what this plot tells you about how the data set is distributed.    As an exercise in the last section you used the internet to determine the following values about household income in Massachusetts: mean, median, first quartile, third quartile. Further determine the first and ninth deciles of household income. Use this information to create a box and whisker plot, where the whiskers go out to the first and ninth deciles.    Find an online or print media source which uses multiple box and whisker plots to compare data sets. Summarize what this data visualization is showing. Include a copy of the visualization and give a url or citation for your source.    "
},
{
  "id": "sec2-box-2",
  "level": "2",
  "url": "sec2-box.html#sec2-box-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "box and whisker plot box plot "
},
{
  "id": "sec2-box-6",
  "level": "2",
  "url": "sec2-box.html#sec2-box-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "five-number summary interquartile range "
},
{
  "id": "sec2-box-12",
  "level": "2",
  "url": "sec2-box.html#sec2-box-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confidence interval "
},
{
  "id": "sec2-box-13",
  "level": "2",
  "url": "sec2-box.html#sec2-box-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statistically significant "
},
{
  "id": "sec2-box-16-1",
  "level": "2",
  "url": "sec2-box.html#sec2-box-16-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " A data set has the following five-number summary: minimum , first quartile , median , third quartile , maximum . Draw a box and whisker plot for this data set. Write a sentence or two explaining what this plot tells you about how the data set is distributed.  "
},
{
  "id": "sec2-box-16-2",
  "level": "2",
  "url": "sec2-box.html#sec2-box-16-2",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": " As an exercise in the last section you used the internet to determine the following values about household income in Massachusetts: mean, median, first quartile, third quartile. Further determine the first and ninth deciles of household income. Use this information to create a box and whisker plot, where the whiskers go out to the first and ninth deciles.  "
},
{
  "id": "sec2-box-16-3",
  "level": "2",
  "url": "sec2-box.html#sec2-box-16-3",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Find an online or print media source which uses multiple box and whisker plots to compare data sets. Summarize what this data visualization is showing. Include a copy of the visualization and give a url or citation for your source.  "
},
{
  "id": "sec2-stddev",
  "level": "1",
  "url": "sec2-stddev.html",
  "type": "Section",
  "number": "2.5",
  "title": "The standard deviation",
  "body": " The standard deviation  The past two classes we've been looking at different ways of understanding the spread of a data set. It'd be nice if there were a single number we could use to summarize how spread out a data set is, akin to how there is a single number (the mean) we can use to summarize the center of a data set. Of course, we shouldn't expect this single number to tell us everything about the spread, much like the mean isn't the full story. But it'd be nice to have regardless.  Good news. We can do this. That's what this section is about.  Here's an idea of how you might go about that. First identify the center of the data set. Next, determine the average distance of a datum from the center. This will give you a single number which represents how spread out the data are. A small value says that the average distance to the center is small while a large value says the average distance to the center is large.  At core, this is a good idea for a measure of spread. However, for technical reasons we want to slightly tweak it to get something that is better behaved mathematically. Instead of looking at the average distance to the center we get the average of the squares of the distances. Then to get back to the correct units we take the square root.  Standard deviation  Consider a data set of many data with mean . The variance  of the data set is the average of the squares of the distances from the mean, and the standard deviation  is the square root of that. As formulas:    The more important of these two notions is the standard deviation. You can think of the variance as a step to computing the standard deviation—first compute the variance, that is the average of the squares of the distances from the mean, and then take its square root to get the standard deviation. As said earlier, the reason to take squares of distances instead of distances is that it has nicer mathematical properties which eases more advanced uses. Taking the square root at the end returns us to the original unit. If, for example, our data are weights of fish in pounds, then the mean is also in pounds. Because we square, the units for the variance is square pounds. Taking a square root gets us back to pounds, the same units we started with.   Consider the three data sets from earlier: Let's compute their standard deviations in turn. We do the first in detail. Before you can do anything else you need to know the mean, in this case we already saw that . Now we need to take the average of the squares of the distances from the mean: We then divide that by the number of data and take the square root, to get the standard deviation is For the other two data sets we do the same process. The second data set has standard deviation and the third data set has standard devation .   Warning! Due to technical considerations (the keyword to search is Bessel's correction ) most statistical software packages will use a slightly different formula for their standard deviation function. Namely, they will divide by instead of . This is the so-called corrected standard deviation or unbiased estimator of the standard deviation, as upposed to the uncorrected standard deviation I gave. This is something to watch out for if you use computer tools to check your work. They might give a slightly different answer because they used a slightly different formula.  I promised you that the standard deviation has some nice mathematical properties. Let me mention one. Consider the following two data sets: Note that the second data set came from the first one by multiplying everything by . Both data sets have the same mean, namely . If you compute their standard deviations you get and . That is, multiplying everything by gave you a standard deviation times as large.  In general, if a data set has standard deviation , then if you multiply every datum by the new data set has standard deviation . This is similar to a property enjoyed by the mean—multiplying all values by multiplies the mean by .    Compute the mean and standard deviation of the following data set.     Consider the following two data sets. Calculate their means then use that to calculate their standard deviations. Explain what the different standard deviations tell you about how the two data sets differ.     You are comparing two data sets. They both have a mean of , but the first data set has a standard deviation of while the second data set has a standard deviation of . Explain what this tells you about how the two data sets are differently distributed.    You are comparing two data sets. They both have a standard deviation of , but the first data set has a mean of while the second data set has a mean of . Explain what this tells you about how the two data sets are differently distributed.    "
},
{
  "id": "sec2-stddev-6",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-6",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Standard deviation.",
  "body": "Standard deviation  Consider a data set of many data with mean . The variance  of the data set is the average of the squares of the distances from the mean, and the standard deviation  is the square root of that. As formulas:   "
},
{
  "id": "sec2-stddev-8",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-8",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": " Consider the three data sets from earlier: Let's compute their standard deviations in turn. We do the first in detail. Before you can do anything else you need to know the mean, in this case we already saw that . Now we need to take the average of the squares of the distances from the mean: We then divide that by the number of data and take the square root, to get the standard deviation is For the other two data sets we do the same process. The second data set has standard deviation and the third data set has standard devation .  "
},
{
  "id": "sec2-stddev-9",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "corrected unbiased estimator uncorrected "
},
{
  "id": "sec2-stddev-12-1",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-12-1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " Compute the mean and standard deviation of the following data set.   "
},
{
  "id": "sec2-stddev-12-2",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-12-2",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " Consider the following two data sets. Calculate their means then use that to calculate their standard deviations. Explain what the different standard deviations tell you about how the two data sets differ.   "
},
{
  "id": "sec2-stddev-12-3",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-12-3",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " You are comparing two data sets. They both have a mean of , but the first data set has a standard deviation of while the second data set has a standard deviation of . Explain what this tells you about how the two data sets are differently distributed.  "
},
{
  "id": "sec2-stddev-12-4",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-12-4",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": " You are comparing two data sets. They both have a standard deviation of , but the first data set has a mean of while the second data set has a mean of . Explain what this tells you about how the two data sets are differently distributed.  "
},
{
  "id": "sec2-normal",
  "level": "1",
  "url": "sec2-normal.html",
  "type": "Section",
  "number": "2.6",
  "title": "Normal distributions",
  "body": " Normal distributions  In the previous sections we looked at various methods of summarizing data. An important use of statistics is to go beyond summaries and make inferences about not-yet known data. This is a huge topic, and we will not explore it fully. Nonetheless, in this section we move toward that use.  Step zero of doing statistics is to get something you can quantify. There is an unknown distribution of the quantities across a population. Doing an experiment you get a data set which is a sample from the population. You then want to use that sample to make inferences about the distribution.   Perhaps you are a entomologist studying centipedes. As part of larger work you want to know the size of a species. The distribution is the different lengths across members of the species. As a sample you look at some centipedes and measure their lengths.    You are a pharmaceutical researcher studying a potential new blood pressure medication. The distribution you want to know about is blood pressures of people who take the medication versus those who don't. Your samples come from a drug trial where you measure what happens with a group given the drug versus a control group.   Given a distribution a statistic is some number that can be calculated from it. Typical examples are the mean or standard deviation. Because the overall distribution is unknown, you don't know the value. You want to use your sample to calculate an estimator , something you can calculate from your sample data which estimates the true value of the statistic. For example, you might estimate the population mean by calculating the sample mean .   You don't know the true average length of your centipede species. To estimate this unknown value, you compute the mean length of centipedes in your sample. If your sampling method is unbiased and your sample is large enough, this estimator will give a good estimate of the true mean.  On the other hand, if your sampling method is biased it will produce a poor estimate. For example, if your method of catching centipedes only grabs those above a certain length, you will overestimate the true mean length.   There are many different shapes a distribution can take. Often real-world applications are best modeled as continuous distributions, those which can take on a continuous range of values. We represent these with a graph showing the likelihood of different values. If you randomly sample to measure a value, the likelihood it sits between a minimum and a maximum is the area under the graph between and .   A normal distribution given by a bell-shaped curve. (See below for more about normal distributions.) A region symmetric across the mean is filled in. The area of this region represents the likelihood that a randomly chosen sample falls into the range. In this case, the range happens to be within one standard deviation of the mean.      A uniform distribution is one where all outcomes in a range are equally likely. These are represented by graphs which are horizontal lines from the minimum to the maximum of the range. The total area must be , because there is a chance the value falls somewhere in the range.   The uniform distribution between and , represented by a horizontal line. A region is shaded in, to represent the likelihood a random sample is between and .    For example, a uniform distribution with values ranging from to would be represented by a horizontal line of height . The likelihood a randomly sampled value falls between and is the area of the region between and , namely   In general, a uniform distribution with values ranging from to is represented by a horizontal line of height .   The uniform distribution between and , represented by a horizontal line. A region is shaded in, to represent the likelihood a random sample falls into a certain subrange.     Often in practice you can know that a population fits (approximately) a distribution of a certain shape, even if you don't know the specifics. When this happens it is quite helpful in making predictions about the population, as it narrows down the possibilities. The most common case of this is with the normal distribution.  Normal distributions  A normal distribution is a kind of distribution which is shaped like a bell curve. If you randomly sample, most values will be near the mean, with farther away outliers being more and more unlikely. A normal distribution is specified by two parameters, its mean and standard deviation.   A normal distribution. A bell-shaped curve with a mean at . As you go out from the mean the curve gets closer and closer to the axis. The height of the curve above the horizontal axis represents the likelihood of that value. That is, values close to the mean are more likely and outliers are less likely.      Normal distributions are important because we know many things in practice are normal, or approximately normal. Consider the example of repeatedly rolling a (six-sided) die and averaging the results. If you roll it once, any of the six outcomes are equally likely. But if you roll it many times then you expect to see high rolls counterbalance low rolls. It's not likely to roll a long string of s. As such, if you roll the die a lot and take the mean of the results, it's most likely to be close to the true mean of the results, namely Outliers are possible, but the farther you get from the less likely it is to see that result.  The central limit theorem  Suppose you take an unbiased random sample from any distribution. Call the mean of this distribution and its standard deviation . (These are the Greek letters mu and sigma , the counterparts to the Latin m and s, for mean and standard deviation.) You sample times and calculate the mean of the sample. This sample mean is itself a random variable; different samples will produce a different mean according to chance.  The distribution of this random value is approximately a normal distribution, provided the number of samples is large enough. Indeed, this normal distribution has mean and standard deviation .   This is a bit mathy, so let's lay it out in plain language. No matter what distribution you are sampling from, no matter how it's laid out, if you calculate the sample mean you know what the distribution for that result looks like. It is a normal distribution with the same mean, and its spread (standard deviation) decreases as the sample size increases. That is, the larger your sample the more closely clustered you expect the outcome to be.   Let's look at the dice example more carefully. This is a distribution with six possible values, each equally likely. We already calculated its mean: With a little effort we can also calculate its standard deviation: What this means is, if you roll a die once on average the value will be but the results are spread out. It's reasonably likely to be far from .  On the other hand, if you repeatedly roll the die and take the average result, the central limit theorem tells us the distribution for the result is a bell curve. Moreover, we can calculate its standard deviation. For example, if you roll times then the standard deviation is That is, most of the time your result from rolling thirty times will be very close to the mean of .   Calculating likelihoods in general using a bell curve requires computer tools. But there's a few common ranges you can remember. of values are within standard deviation of the mean.  of values are within standard deviations of the mean.  of values are within standard deviations of the mean.  Another useful fact is that bell curves are symmetric across their mean. This implies that the mean is also the median, but it has other consequences. For example, if a region is symmetric across the mean then half its area is above the mean and half is below.  Going back to our dice rolling example, if you roll a die times and take the average of the results, about of the time that average will be between and .    Suppose a population is distributed like a uniform distribution from a minimum of to a maximum of . Determine the likelihood that a random sample will be between and .    Suppose a population is distributed like in the following graph.   A distribution shaped like a diagonal line going from the origin to the point .    Check that the total area under this distribution is . Then determine the likelihood that a random sample from this population falls between and .    Suppose a distribution is normally distributed. Compute the following likelihoods for a value of a random sample. The sample is greater than the mean.  The sample is between the mean and one standard deviation above the mean.  The sample is greater than one standard deviation above the mean.  The sample is greater than two standard deviations above the mean.  The sample is greater than three standard deviations above the mean.  The sample is more than one standard deviation from the mean.  The sample is more than one but less than two standard deviations from the mean.  The sample is more than one standard deviation but less than three standard deviations from the mean.      Suppose you know that a distribution has a mean and a standard deviation . You take random samples from the distribution and calculate their mean . What is the standard deviation for the distribution of the possible values of ? What is the likelihood that is within of ?    "
},
{
  "id": "sec2-normal-3",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distribution sample "
},
{
  "id": "sec2-normal-4",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-4",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": " Perhaps you are a entomologist studying centipedes. As part of larger work you want to know the size of a species. The distribution is the different lengths across members of the species. As a sample you look at some centipedes and measure their lengths.  "
},
{
  "id": "sec2-normal-5",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-5",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": " You are a pharmaceutical researcher studying a potential new blood pressure medication. The distribution you want to know about is blood pressures of people who take the medication versus those who don't. Your samples come from a drug trial where you measure what happens with a group given the drug versus a control group.  "
},
{
  "id": "sec2-normal-6",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statistic estimator sample mean "
},
{
  "id": "sec2-normal-7",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-7",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": " You don't know the true average length of your centipede species. To estimate this unknown value, you compute the mean length of centipedes in your sample. If your sampling method is unbiased and your sample is large enough, this estimator will give a good estimate of the true mean.  On the other hand, if your sampling method is biased it will produce a poor estimate. For example, if your method of catching centipedes only grabs those above a certain length, you will overestimate the true mean length.  "
},
{
  "id": "sec2-normal-8",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "sec2-normal-10",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-10",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": " A uniform distribution is one where all outcomes in a range are equally likely. These are represented by graphs which are horizontal lines from the minimum to the maximum of the range. The total area must be , because there is a chance the value falls somewhere in the range.   The uniform distribution between and , represented by a horizontal line. A region is shaded in, to represent the likelihood a random sample is between and .    For example, a uniform distribution with values ranging from to would be represented by a horizontal line of height . The likelihood a randomly sampled value falls between and is the area of the region between and , namely   In general, a uniform distribution with values ranging from to is represented by a horizontal line of height .   The uniform distribution between and , represented by a horizontal line. A region is shaded in, to represent the likelihood a random sample falls into a certain subrange.    "
},
{
  "id": "sec2-normal-12",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-12",
  "type": "Definition",
  "number": "2.6.5",
  "title": "Normal distributions.",
  "body": "Normal distributions  A normal distribution is a kind of distribution which is shaped like a bell curve. If you randomly sample, most values will be near the mean, with farther away outliers being more and more unlikely. A normal distribution is specified by two parameters, its mean and standard deviation.   A normal distribution. A bell-shaped curve with a mean at . As you go out from the mean the curve gets closer and closer to the axis. The height of the curve above the horizontal axis represents the likelihood of that value. That is, values close to the mean are more likely and outliers are less likely.     "
},
{
  "id": "sec2-normal-14",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-14",
  "type": "Theorem",
  "number": "2.6.6",
  "title": "The central limit theorem.",
  "body": "The central limit theorem  Suppose you take an unbiased random sample from any distribution. Call the mean of this distribution and its standard deviation . (These are the Greek letters mu and sigma , the counterparts to the Latin m and s, for mean and standard deviation.) You sample times and calculate the mean of the sample. This sample mean is itself a random variable; different samples will produce a different mean according to chance.  The distribution of this random value is approximately a normal distribution, provided the number of samples is large enough. Indeed, this normal distribution has mean and standard deviation .  "
},
{
  "id": "sec2-normal-16",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-16",
  "type": "Example",
  "number": "2.6.7",
  "title": "",
  "body": " Let's look at the dice example more carefully. This is a distribution with six possible values, each equally likely. We already calculated its mean: With a little effort we can also calculate its standard deviation: What this means is, if you roll a die once on average the value will be but the results are spread out. It's reasonably likely to be far from .  On the other hand, if you repeatedly roll the die and take the average result, the central limit theorem tells us the distribution for the result is a bell curve. Moreover, we can calculate its standard deviation. For example, if you roll times then the standard deviation is That is, most of the time your result from rolling thirty times will be very close to the mean of .  "
},
{
  "id": "sec2-normal-19-1",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-19-1",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": " Suppose a population is distributed like a uniform distribution from a minimum of to a maximum of . Determine the likelihood that a random sample will be between and .  "
},
{
  "id": "sec2-normal-19-2",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-19-2",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "",
  "body": " Suppose a population is distributed like in the following graph.   A distribution shaped like a diagonal line going from the origin to the point .    Check that the total area under this distribution is . Then determine the likelihood that a random sample from this population falls between and .  "
},
{
  "id": "sec2-normal-19-3",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-19-3",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "",
  "body": " Suppose a distribution is normally distributed. Compute the following likelihoods for a value of a random sample. The sample is greater than the mean.  The sample is between the mean and one standard deviation above the mean.  The sample is greater than one standard deviation above the mean.  The sample is greater than two standard deviations above the mean.  The sample is greater than three standard deviations above the mean.  The sample is more than one standard deviation from the mean.  The sample is more than one but less than two standard deviations from the mean.  The sample is more than one standard deviation but less than three standard deviations from the mean.    "
},
{
  "id": "sec2-normal-19-4",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-19-4",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "",
  "body": " Suppose you know that a distribution has a mean and a standard deviation . You take random samples from the distribution and calculate their mean . What is the standard deviation for the distribution of the possible values of ? What is the likelihood that is within of ?  "
},
{
  "id": "sec2-test",
  "level": "1",
  "url": "sec2-test.html",
  "type": "Section",
  "number": "2.7",
  "title": "Hypothesis testing",
  "body": " Hypothesis testing  In the previous section we talked about distributions. These describe the shape of the overall data about a population. Directly measuring distributions in the real world is impractical. For instance, if you were a scientist studying childhood nutrition, one distribution you may be interested in is the weights of children across the nation. This consists of millions of people, and it's infeasible to measure every child.  Despite this limitation, we can still make inferences about populations. For example, you might be trying to confirm a hypothesis a government program to give money to parents improves childhood nutrition. You could test this by looking at a sample of children whose parents were part of the program versus those who weren't. If your hypothesis is correct, you would expect to see a lower rate of underweight children among those in the program, and if your hypothesis is wrong you'd expect to see similar rights of underweightedness.  Of course, there is always some randomness involved, since you aren't surveying the entire, too large population of all children. Complete surety is thereby impossible. What you want is a measure of how likely it is that your hypothesis is correct. Unfortunately, that is also difficult to determine. Instead you rely on statistical proxies to give you some evidence.  This is the basics of what statisticians call hypothesis testing . This is a large, complicated topic. So we will not go over it in detail. Instead, let's talk through an overview. The goal is not to be able to go out and do hypothesis testing yourself. Rather, the goal is to understand it well enough that you can critically evaluate others use of it.  Perhaps the most used proxy used as evidence for a hypothesis is the p-value . If you have looked at a scientific or medical article ever, you may have seen little parentheticals like or . These are the p-values for the associated claim. A low p-value is taken as reason to believe a claim, with a common threshold of .  A common misconception is that a p-value is the chance that a claim is wrong. So, for example, would mean there's a less than one in twenty chance the claim is wrong. But that is not something we can measure, so that can't be what a p-value means.  Instead, this is the meaning. You oppose your hypothesis to a null hypothesis you wish to reject. Usually, the null hypothesis is that there is no change or difference. You do your random sampling or experiment and collect your sample results, and compute an estimator based on that sample. You then calculate, based on some knowledge of the shape of the distribution, how likely it is, assuming the null hypothesis, to see results at least as extreme as what you measured. This probability is the p-value.   You know the mean length for this species of centipede is centimeters. You measured that the mean length of centipedes fed a special diet as part of an experiment is centimeters. You do a hypothesis test and calculate a p-value of . That is, under the assumption that the special diet has no effect, there's only a chance of getting a sample mean at least centimeters above the mean. This p-value is small, so you have some confidence your intervention has effect.   Performing the probability calculation in a hypothesis test requires you to know something about the shape of your distribution. This is where theoretical results in statistics come in. People mathematically proved that the data must look approximately like such-and-such, and so we can leverage some knowledge even if we don't know the specifics. For example, the central limit theorem from the previous section tells us that if you are doing a hypothesis test about a sample mean then you know the data are (approximately) normally distributed. This enables statisticians to use tools about normal distributions to make the calculations for finding p-values. Depending on how much is known about the data, different tests are appropriate, such as z-test or a t-test .  Other distributions also arise in practice, with their own associated hypothesis tests. Part of the task of learning statistics is learning the different tests and when they are applicable. But they come back to this same general phenomenon. Theoretical results tell you something about the distribution for an estimator for the statistic. You do an experiment and calculate the estimator. Then you calculate how likely it is to see a result at least that extreme, under the assumption of the null hypothesis. If this probability, called a p-value, is low, that is taken as reason to reject the null hypothesis.  You might think this is a bit loose. Isn't statistics supposed to be about getting precision in our knowledge? We might not know perfectly, but we want to say we're probably very close.  But there's a lot of assumptions going into all of this work, and what we're measuring isn't even the thing we want in the first place. There's some arbitrariness. For example, why pick as the threshold for p-values? Why not ?  Ultimately, statistics is a very human affair. The promise of avoiding all bias and setting out an Objective Truth That All Can Agree Upon is a false one. We can get information, and we can become more sure than before in our knowledge. But we must not be misled by numbers into thinking we have more than we do.  This then was the goal of this section: for you to understand enough about hypothesis testing to not be taken in by misconceptions as to its capabilities. This goal goes in hand with the larger goal in this chapter of critical engagement with statistics. Part of the homework for this section will ask you to practice this.    Read the xkcd comic Significant . Explain the joke.    Read the American Statistical Association's statement on -values . Pick one of its six principles and explain in your own words what it expresses about the uses and limitations of -values.    "
},
{
  "id": "sec2-test-5",
  "level": "2",
  "url": "sec2-test.html#sec2-test-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypothesis testing "
},
{
  "id": "sec2-test-6",
  "level": "2",
  "url": "sec2-test.html#sec2-test-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "p-value "
},
{
  "id": "sec2-test-8",
  "level": "2",
  "url": "sec2-test.html#sec2-test-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null hypothesis "
},
{
  "id": "sec2-test-9",
  "level": "2",
  "url": "sec2-test.html#sec2-test-9",
  "type": "Example",
  "number": "2.7.1",
  "title": "",
  "body": " You know the mean length for this species of centipede is centimeters. You measured that the mean length of centipedes fed a special diet as part of an experiment is centimeters. You do a hypothesis test and calculate a p-value of . That is, under the assumption that the special diet has no effect, there's only a chance of getting a sample mean at least centimeters above the mean. This p-value is small, so you have some confidence your intervention has effect.  "
},
{
  "id": "sec2-test-10",
  "level": "2",
  "url": "sec2-test.html#sec2-test-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "z-test t-test "
},
{
  "id": "sec2-test-16-1",
  "level": "2",
  "url": "sec2-test.html#sec2-test-16-1",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": " Read the xkcd comic Significant . Explain the joke.  "
},
{
  "id": "sec2-test-16-2",
  "level": "2",
  "url": "sec2-test.html#sec2-test-16-2",
  "type": "Exercise",
  "number": "2.7.2",
  "title": "",
  "body": " Read the American Statistical Association's statement on -values . Pick one of its six principles and explain in your own words what it expresses about the uses and limitations of -values.  "
},
{
  "id": "sec3-functions",
  "level": "1",
  "url": "sec3-functions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Functions",
  "body": " Functions  Check back later!        "
},
{
  "id": "sec3-functions-3-1",
  "level": "2",
  "url": "sec3-functions.html#sec3-functions-3-1",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec3-linear",
  "level": "1",
  "url": "sec3-linear.html",
  "type": "Section",
  "number": "3.2",
  "title": "Linear models",
  "body": " Linear models  Check back later!        "
},
{
  "id": "sec3-linear-3-1",
  "level": "2",
  "url": "sec3-linear.html#sec3-linear-3-1",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec3-exp",
  "level": "1",
  "url": "sec3-exp.html",
  "type": "Section",
  "number": "3.3",
  "title": "Exponential functions",
  "body": " Exponential functions  Check back later!        "
},
{
  "id": "sec3-exp-3-1",
  "level": "2",
  "url": "sec3-exp.html#sec3-exp-3-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec3-exponential",
  "level": "1",
  "url": "sec3-exponential.html",
  "type": "Section",
  "number": "3.4",
  "title": "Exponential models",
  "body": " Exponential models  Check back later!        "
},
{
  "id": "sec3-exponential-3-1",
  "level": "2",
  "url": "sec3-exponential.html#sec3-exponential-3-1",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec3-logistic",
  "level": "1",
  "url": "sec3-logistic.html",
  "type": "Section",
  "number": "3.5",
  "title": "Logistic models",
  "body": " Logistic models  Check back later!        "
},
{
  "id": "sec3-logistic-3-1",
  "level": "2",
  "url": "sec3-logistic.html#sec3-logistic-3-1",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "   "
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
