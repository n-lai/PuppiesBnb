# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Puppy Cycles

### Puppies API Request Actions

* `fetchAllPuppies`
  0. invoked from `PuppiesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/puppies` is called.
  0. `receiveAllPuppies` is set as the callback.

* `fetchSinglePuppy`
  0. invoked from `PuppyDetail` `didMount`/`willReceiveProps`
  0. `GET /api/puppies/:id` is called.
  0. `receiveSinglePuppy` is set as the callback.

### Puppies API Response Actions

* `receiveAllPuppies`
  0. invoked from an API callback.
  0. `Puppy` store updates `_puppies` and emits change.

* `receiveSinglePuppy`
  0. invoked from an API callback.
  0. `Puppy` store updates `_puppies[id]` and emits change.


### Store Listeners

* `PuppiesIndex` component listens to `Puppy` store.
* `PuppyDetail` component listens to `Puppy` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `PuppySearchBar` `onChange` when there is text
  0. `GET /api/puppies` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `PuppySearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
