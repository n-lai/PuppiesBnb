## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * NavBar
  * Search
  * **PuppiesIndex**
    * PuppiesMap
    * PuppiesFilter
    * PuppiesIndexItem
  * **PuppyDetail**
    * ReviewIndex
    * BookingForm
    * ReviewIndex
      * ReviewIndexItem
        * ReviewDetail
    * ReviewForm    

## Routes

* **component:** `App` **path:** `/`
  * **component:** `PuppiesIndex` **path:** index
  * **component:** `PuppiesIndex` **path:** `puppies`
    * **component:** `PuppyDetail` **path:** `puppies/:puppyId`
