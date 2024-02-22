package com.opiniatraining.module

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MessageModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "MessageModule"

    @ReactMethod
    fun createMessageEvent(message: String) :String{
        Toast.makeText(reactApplicationContext, message, Toast.LENGTH_SHORT).show()
        return "BERHASIL";
    }
}

