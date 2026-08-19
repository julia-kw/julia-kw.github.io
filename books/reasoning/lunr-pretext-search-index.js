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
  "body": " Truth tables  Now that we know how to write logically, let's talk about the meaning—as logicians would say, the semantics —of the symbols. We will do this through the device of a truth table , invented by the Austrian philosophy Ludwig Wittgenstein. The idea is, a truth table lays out how a symbol behaves for any possible combination of inputs. This exhaustive listing of all possibilities constitutes a complete description of its meaning.  This is a truth-functional explanation of the meaning of the connectives. That is, if we want to know whether a statement is true or false the meaning of the input doesn't matter, only their truth values.  Let's see truth tables for the five connectives. We begin with conjunction (and) and disjunction (or). These each take two inputs, on the left and right. Each input has two possible truth values, namely true ( ) or false ( ). So in total we need rows to represent all possibilities.  Remember, we're looking at propositions, statements which are unambiguously true or false. So those are the only possible truth values. You might say, what about statements are only kinda true? For instance, someone might be kinda tall so John is tall isn't totally true but nor is it totally false.  You can do logic allowing for intermediate truth values. But things get more complicated. We focus on the two-valued logic with only true and false to make the analysis less difficult. I hope you forgive the trade-off.   We organize the table so that the leftmost columns give the values of the inputs, while on the right the values of the output are given.   Truth table for conjunction                                                What this table says is, is true just in case both and are true. We take the common sense definition of and and write it in tabular form.   Truth table for disjunction                                                Here, is true when at least one of the two is true. Recall that or is inclusive-or, allowing the possibility of both disjuncts being true.  For (not) there is only one input, written on the right. Accordingly we only need two rows for the table.   Truth table for negation                         Negation acts as a toggle flipping the value of its input to the opposite.  For the biconditional ( ), what it is saying is that the two sides are equivalent. From that you can deduce the rule for filling out the table: the output should be true just when the two inputs are the same.   Truth table for biconditional                                                The conditional was saved for last because it's the most subtle and controversial. An issue is, the ordinary use of if-then statements aren't truth-functional. Instead, they are used to imply some kind of connection between the statements. Consider a statement like if it is sunny out you should wear sunscreen . There is a causal connection; the weather presents a minor health risk and so there is prudential reason to take steps to minimize that risk. In contrast imagine someone saying if it is sunny out then Mars has two moons . Probably your reaction is to be confused. What is the connection between those two things?  But if the meaning of can only depend upon their truth values, then we can't require a connection. That would require information beyond whether they are true or false. Subject to that restriction, the best we can do is the following.   Truth table for conditional                                                A second, more substantive use of truth tables is to analyze more complicated logical sentences. We can use the truth tables defining the connectives as rules for how to determine the behavior of more complicated sentences, and thereby understand what they are saying.  When you are doing this, you want to think of how the logical sentence is built up. For example, suppose you are trying to fill out the truth table for The last connective to be evaluated is the . You can evaluate it what it does by using the rule given in the truth table for conjunction (and). But to do this you need to know the inputs on both sides. You know the input on the left, since it's just . But you have to do some work to figure out the input on the right. How do you do that? The right conjunct is an or statement. You can evaluate that using the truth table for , but first you need to know the pattern for its two inputs. The left disjunct you already know, but to figure out the right disjunct you need to apply the rule for . So building up this truth table is a multi-step process. The following table represents the process, where going from left to right gives you the information needed for the next step.   Truth table for                                                                       To explain the first row, as a representative example: to fill out the first column, you look at the column and apply the rule for . Namely, you flip to become . Then to fill out the columns you use the rule for , looking at the and columns for input. In this case, you have an instance of which evaluates to . Finally, to fill out the column you use the rule for , looking at the and columns for inputs. Namely, you have an instance of which evaluates to . This finishes the first row, and the other three are done similarly.  When filling these out, you may prefer to save on space by not writing every subformula separately and just filling in the value below it in the one big formula. That is fine, but you should make it clear what the final output is.    Fill out a truth table for .    Fill out truth tables for and . What do you observe about the two truth tables? Take a stab at explaining the meaning of what you see.    Fill out truth tables for and . What do you observe about the two truth tables? Take a stab at explaining the meaning of what you see.    Fill out a truth table for . Explain why the pattern on the truth table is the pattern for exclusive-or.    How many rows do you need in a truth table for a proposition with three variables? Fill out a truth table for .    Fill out a truth table for .    "
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
  "body": " Visualizing data  Check back later!        "
},
{
  "id": "sec2-data-3-1",
  "level": "2",
  "url": "sec2-data.html#sec2-data-3-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec2-average",
  "level": "1",
  "url": "sec2-average.html",
  "type": "Section",
  "number": "2.2",
  "title": "Averages",
  "body": " Averages  Check back later!        "
},
{
  "id": "sec2-average-3-1",
  "level": "2",
  "url": "sec2-average.html#sec2-average-3-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec2-range",
  "level": "1",
  "url": "sec2-range.html",
  "type": "Section",
  "number": "2.3",
  "title": "Range and quantiles",
  "body": " Range and quantiles  Check back later!        "
},
{
  "id": "sec2-range-3-1",
  "level": "2",
  "url": "sec2-range.html#sec2-range-3-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec2-box",
  "level": "1",
  "url": "sec2-box.html",
  "type": "Section",
  "number": "2.4",
  "title": "Box and whisker plots",
  "body": " Box and whisker plots  Check back later!        "
},
{
  "id": "sec2-box-3-1",
  "level": "2",
  "url": "sec2-box.html#sec2-box-3-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec2-stddev",
  "level": "1",
  "url": "sec2-stddev.html",
  "type": "Section",
  "number": "2.5",
  "title": "The standard deviation",
  "body": " The standard deviation  Check back later!        "
},
{
  "id": "sec2-stddev-3-1",
  "level": "2",
  "url": "sec2-stddev.html#sec2-stddev-3-1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec2-normal",
  "level": "1",
  "url": "sec2-normal.html",
  "type": "Section",
  "number": "2.6",
  "title": "Normal distributions",
  "body": " Normal distributions  Check back later!        "
},
{
  "id": "sec2-normal-3-1",
  "level": "2",
  "url": "sec2-normal.html#sec2-normal-3-1",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec2-test",
  "level": "1",
  "url": "sec2-test.html",
  "type": "Section",
  "number": "2.7",
  "title": "Hypothesis testing",
  "body": " Hypothesis testing  Check back later!        "
},
{
  "id": "sec2-test-3-1",
  "level": "2",
  "url": "sec2-test.html#sec2-test-3-1",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": "   "
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
