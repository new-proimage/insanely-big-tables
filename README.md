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

### Comparison characteristics
 - Speed: the solution should populate the table as fast as possible
 - Clean DOM, less unexpected nodes and attributes
 - Amount of JS code (measured in SLOC)