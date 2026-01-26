---
layout: page
title: Research
permalink: /research/
---

I am no longer active in producing research, though I still referee papers.

My research interests were in mathematical logic, specializing in set theory. Much of my set theoretic work was motivated by the multiversist view of Hamkins and others. There are many different universes of set theory. What are the possibilities? What is the structure of the set theoretic multiverse? For instance, I have work in set theoretic geology, in models of set theory, including nonstandard models, and in the foundations of forcing.

Outside of pure set theory, I was interested in set theory's connections to other areas of logic and to philosophy of mathematics. My work touched upon model theory, computability theory, the study of modal logics, and the philosophy of set theory.


My Publications
----

{% for pub in site.data.pubs %}
* {{ pub.authors }}, {% if pub.href == "" %} {{ pub.title }}, {% else %} [{{ pub.title }}]({{ site.baseurl }}/research/pubs/{{ pub.href }}), {% endif %} {{ pub.othercite }}.
{% endfor %}

Selected Talks
----

(See [here]({{ site.baseurl }}/research/talks) for a list of all talks.)

{% for talk in site.data.talks %}
* [{{ talk.title }}]({{ site.baseurl }}/research/talks/{{ talk.href }}), {{ talk.other }} ({{ talk.date }}).
{% endfor %}

