# Insanely Big Tables

## Overview
This project is intended to research the behavior of frameworks and components that allows to build tables.
Candidates are chosen with the support of two-way bindings.

## Idea
The idea and motivation behind the test are the following. The library is required to build a table,
with two-way binding capability, which will be updated continously in relatively fast speed but not in batches.
For example, a new record might be added every half of a second out of several thousands.
So, the table should be updated fastly, and possess smooth scrolling while adding at the same time.

Thus, the same test application is implemented for every framework candidate.
It has controlls with buttons and inputs, and one table. The latter has two records with randomly generated number
from the very beginning.
Controlls buttons allow `Add`, `Insert`, `Edit`, and `Remove` a new records to the table. As well it has two input
fields. In the first input field you can specify the time (in milliseconds) between adding the records,
e.g. `5` means that a new record will be added to the table every 5 milliseconds.
Please, keep in mind that the minimal timer for JS is 4 milliseconds. The second input field specifies the
overall amount of records that should be added to the table. Two fields on the right specify the current amount of
records in the table, and the elapsed time that took to populate the table.

## How to run
Clone this repository. It consists of framework folders and `vendors` folder which keeps the libs.
Each famework folder contains javascript implementation and  `index.html` file. Open it in a browser.
Specify the parameters of the test: the time period and overall amount and hit `Start` button.

In case of running test in parallel, make sure to run it in Google Chrome and in different windows.

## Angular vs. Ember
The performance of Angular and Ember in the described test. The X-axis represents the amount of records in the table.
The Y-axis is the time in seconds that took framework to fill the table. The rate is one record in every 5 milliseconds.
![Angular vs. Ember Bars Plot](https://raw.github.com/bolshchikov/insanely-big-tables/master/stats/ng-vs-em-bars.png)
![Angular vs. Ember Lines Plot](https://raw.github.com/bolshchikov/insanely-big-tables/master/stats/ng-vs-em-lines.png)

