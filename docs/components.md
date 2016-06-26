## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * SplashPage
    * PuppiesIndexItem
  * **PuppiesIndex**
    * PuppiesMap
    * PuppiesIndexItem
    * **PuppyDetail**
      * ReviewIndex
      * BookingForm
      * ReviewForm


## Routes

* **component:** `App` **path:** `/`
  * **component:** `PuppiesIndex` **path:** /puppies
    * **component:** `PuppyDetail` **path:** `puppies/:puppyId`
