---
layout: page
title: Online Academic CV
permalink: /cv/
---

Academic Historyn
====

Cape Cod Community College

Assistant Professor of Mathematics, Division of Science, Technology, Engineering, and Mathematics

Spring 2026 to Present


Bard College at Simon's Rock
----

Assistant Professor of Mathematics, Division of Science, Computing, and Mathematics

Fall 2023 to Spring 2025

Sam Houston State University
----
Visiting Assistant Professor, Department of Mathematics and Statistics

Fall 2021 to Spring 2023

University of Hawaiʻi at Mānoa
----
Temporary Assistant Professor, Department of Mathematics

Fall 2018 to Spring 2021

Education
====

Ph.D. in Mathematics May 2018
----
The Graduate Center, The City University of New York

Dissertation Advisor: [Joel David Hamkins](http://jdh.hamkins.org)

Dissertation: [*The Structure of Models of Second-order Set Theories*]({{ site.baseurl }}/research/pubs/diss)

B.S. in Mathematics, Dec 2012
----
Boise State University (High Honors)

Minor in Computer Science

Publications
====

{% for pub in site.data.pubs %}
* {{ pub.authors }}, {% if pub.href == "" %} {{ pub.title }}, {% else %} [{{ pub.title }}]({{ site.baseurl }}/research/pubs/{{ pub.href }}), {% endif %} {{ pub.othercite }}
{% endfor %}

Teaching and Educational Experience
====

* (2023–2025) Bard College at Simon's Rock. Assistant Professor. 

* (2021–2023) Sam Houston State University. Visiting Assistant Professor.

* (2018–2021) University of Hawaiʻi at Mānoa. Temporary Assistant Professor.

* (2017–2018) Bronx Community College, CUNY. Quantitative reasoning fellow. 

* (2013–2017) Brooklyn College, CUNY. Graduate teaching fellow.

Conference Talks
====

{% for talk in site.data.conftalks %}
* [{{ talk.title }}]({{ site.baseurl }}/research/talks/{{ talk.href }}), {{ talk.other }} ({{ talk.date }}).
{% endfor %}

Seminar Talks
====

{% for talk in site.data.semtalks %}
* [{{ talk.title }}]({{ site.baseurl }}/research/talks/{{ talk.href }}), {{ talk.other }} ({{ talk.date }}).
{% endfor %}

