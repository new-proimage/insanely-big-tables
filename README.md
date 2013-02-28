# Insanely Big Tables

### Overview
This project is intended to research the behavior of frameworks and components that allows to build tables.
Candidates are chosen according to support of two-way bindings.

### Requirements
- Table should behave smoothly with amount of record in range 2000 - 4000. 
- Table should support the following operations: append(at the end of a list), insert(at the beginning of a list), delete, update.
- Table should support selection such that is would be persistent during continues insertions.

### Candidates
- KendoIU (grid component)
- Ember.js
- Angular.js
- Knockout.js

### Comparison characteristics
 - Speed: the solution should populate the table as fast as possible
 - Clean DOM, less unexpected nodes and attributes
 - Amount of JS code (measured in SLOC)

### Analysis

Complexity scale[0-10]: 0 - easy, 10 - difficult

#### Kendo
**Advantages**

1. Rich functionality: MVVM framework, observables, sorting, filtering, d'n'd, etc.
2. Relatively short code (60 sloc)
3. Relatively clean DOM (adding attributes to nodes)

**Disadvatages**

1. Long rendering (1000 records - 66 secs)
2. Rerendering in case of any change

#### Ember
**Advantages**

1. The fastest! (1000 records - 12 secs)
2. Only required DOM nodes updated

**Disadvantages**

1. Longest code (95 sloc)
2. Requires to write all functionality of a widget
3. Very dirty DOM

#### Angular
**Advantages**

1. Smallest code base (46 sloc)
2. Relatively clean DOM (attributes to nodes)

**Disadvantages**

1. Longest rendering (1000 records - 92 secs)
2. Requires to write all functionality of a widget

#### Knockout
**Advantages**

1. Small code base (51 sloc)
2. Relatively clean DOM (attributes to nodes)
3. Relatively fast (1000 records - 28 secs)

**Disadvantages**

1. Requires to write all functionality of a widget
