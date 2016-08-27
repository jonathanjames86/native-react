package com.newapp;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.airbnb.android.react.maps.MapsPackage;

import java.util.Arrays;
import java.util.List;

public class MyApplication extends Application implements ReactApplication {
  private final ReactNativeHost reactNativeHost = new ReactNativeHost(this) {
    @Override protected List<ReactPackage> getPackages() {
      return Arrays.asList(
          new MainReactPackage(),
          new MapsPackage());
    }
  };

  @Override public ReactNativeHost getReactNativeHost() {
    return reactNativeHost;
  }
}
