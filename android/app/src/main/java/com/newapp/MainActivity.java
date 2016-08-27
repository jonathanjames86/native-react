package com.newapp;

import com.facebook.react.ReactActivity;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {
  @Override
protected String getMainComponentName() {
  return "newApp"; //<- put your app name
}
@Override
protected boolean getUseDeveloperSupport() {
  return BuildConfig.DEBUG;
}

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

}
