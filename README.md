# Insanely Big Tables

## Overview
This project is intended to research the behavior of frameworks and components that allows to build tables.
Candidates are chosen according to support of two-way bindings.
See conclusion at the end.

## How to run
Clone this repository. It consists of framework folders and `vendors` folder which keeps the libs.
Each famework folder contains javascript implementation and  `index.html` file. Open it in a browser.
The top of the page contains controls, the rest is the table with records. In the first input field you can specify the
time (in milliseconds) between adding the records, e.g. `5` means that a new record will be added to the table every
5 milliseconds. Please, keep in mind that the minimal timer for JS is 4 milliseconds. The second input field specifies the
overall amount of records that should be added to the table.

Two fields on the right specify the current amount of records in the table, and the elapsed time that took to populate the table.

It's worth to mention that each test shoul be opened in a separate browser window.


## Requirements
- Table should behave smoothly with amount of record in range 2000 - 4000. 
- Table should support the following operations: append(at the end of a list), insert(at the beginning of a list), delete, update.
- Table should support selection such that is would be persistent during continues insertions.

## Candidates
- KendoIU (grid component)
- Ember.js
- Angular.js
- Knockout.js

## Comparison characteristics
 - Speed: the solution should populate the table as fast as possible
 - Clean DOM, less unexpected nodes and attributes
 - Amount of JS code (measured in SLOC)

## Analysis

Complexity scale[0-10]: 0 - easy, 10 - difficult

### Kendo
**Advantages**

1. Rich functionality: MVVM framework, observables, sorting, filtering, d'n'd, etc.
2. Relatively short code (60 sloc)
3. Relatively clean DOM (adding attributes to nodes)

**Disadvatages**

1. Long rendering (1000 records - 66 secs)
2. Rerendering in case of any change

### Ember
**Advantages**

1. The fastest! (1000 records - 12 secs)
2. Only required DOM nodes updated

**Disadvantages**

1. Longest code (95 sloc)
2. Requires to write all functionality of a widget
3. Very dirty DOM

### Angular
**Advantages**

1. Smallest code base (46 sloc)
2. Relatively clean DOM (attributes to nodes)

**Disadvantages**

1. Longest rendering (1000 records - 92 secs)
2. Requires to write all functionality of a widget

### Knockout
**Advantages**

1. Small code base (51 sloc)
2. Relatively clean DOM (attributes to nodes)
3. Relatively fast (1000 records - 28 secs)

**Disadvantages**

1. Requires to write all functionality of a widget

## Conclusion
1. Use Angular for small simple tables (500 records) - smallest amount of code, good performance.
2. Use KendoUI Grid component for small but rich functional tables (500 records). Functions out of the box like sorting, filtering, etc.
3. Use Knockout for middle-size tables (up to 2000 records).
4. Use Ember for **insanely big** tables