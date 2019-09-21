package com.Tata.video.module;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;

import com.Tata.video.activity.LoginActivity;
import com.Tata.video.activity.MainActivity;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class JumpModule extends ReactContextBaseJavaModule {
    private ReactContext mReactContext;
    public JumpModule(ReactApplicationContext reactContext) {

        super(reactContext);
        this.mReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "LoopyunJumpModule";
    }

    @ReactMethod
    public void startMain(String name,String params){
        try{
            Activity currentActivity = getCurrentActivity();
            if(null!=currentActivity){
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity,toActivity);
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);
            }
        }catch(Exception e){
            throw new JSApplicationIllegalArgumentException(
                    "不能打开Activity : "+e.getMessage());
        }
    }

    @ReactMethod
    public void openMain(){
        Intent intent = new Intent();
        intent.setClass(mReactContext, LoginActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mReactContext.startActivity(intent);
    }
    @ReactMethod
    public void dataToJS(Callback successBack, Callback errorBack){
        try{
            Activity currentActivity = getCurrentActivity();
            String result = currentActivity.getIntent().getStringExtra("data");
            if (TextUtils.isEmpty(result)){
                result = "没有数据";
            }
            successBack.invoke(result);
        }catch (Exception e){
            errorBack.invoke(e.getMessage());
        }
    }
}
