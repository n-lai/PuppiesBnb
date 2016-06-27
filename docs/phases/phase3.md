# Phase 3: Flux Architecture and Router

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PuppiesIndex
  - PuppiesIndexItem

### Stores
* Puppies

### Actions
* ApiActions.receiveAllPuppies -> triggered by ApiUtil
* ApiActions.receiveSinglePuppy
* ApiActions.deletePuppy
* PuppyActions.fetchAllPuppies -> triggers ApiUtil
* PuppyActions.fetchSingleNote
* PuppyActions.createPuppy
* PuppyActions.editPuppy
* PuppyActions.destroyPuppy

### ApiUtil
* ApiUtil.fetchAllPuppies
* ApiUtil.fetchSinglePuppy
* ApiUtil.createPuppy
* ApiUtil.editPuppy
* ApiUtil.destroyPuppy

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
