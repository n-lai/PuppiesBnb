# Phase 2: Puppies Model, API, and basic APIUtil

## Rails
### Models
* Puppy

### Controllers
* Api::PuppiesController (create, destroy, index, show, update)

### Views
* puppies/index.json.jbuilder
* puppies/show.json.jbuilder

## Flux
### Views (React Components)
* PuppyIndex
  - PuppyIndexItem
* PuppyDetail

### Stores
* Puppies

### Actions
* ApiActions.receiveAllPuppies -> triggered by ApiUtil
* ApiActions.receiveSinglePuppy
* ApiActions.removePuppy
* PuppyActions.fetchAllPuppies -> triggers ApiUtil
* PuppyActions.fetchSinglePuppy
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
