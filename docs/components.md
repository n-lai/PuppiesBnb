## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * SplashPage
    * **PuppiesIndex**
      * PuppiesMap
      * PuppiesIndexItem
    * **PuppyDetail**
      * ReviewIndex
      * BookingForm
      * ReviewForm



## Routes

* **component:** `App` **path:** `/`
  * **component:** `PuppiesIndex` **path:** index
  * **component:** `PuppiesIndex` **path:** `puppies`
    * **component:** `PuppyDetail` **path:** `puppies/:puppyId`
