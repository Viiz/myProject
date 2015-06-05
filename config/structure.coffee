# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Home"
      id: "index"
      location: "example#getting-started" # Supersonic module#view type navigation
    }
    {
      title: "Geolocation"
      id: "geolocation"
      location: "geolocation#index"
    }
    {
      title: "Accelerometer"
      id: "accelerometer"
      location: "accelerometer#index"
    }
  ]
	
  # rootView:
  #   location: "username#index"

  preloads: [
    {
      id: "settings"
      location: "example#settings"
    }
    {
      id: "view-requests"
      location: "example#view-requests"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
