plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "vn.donggiang.jiangzi"
    compileSdk = 34

    defaultConfig {
        applicationId = "vn.donggiang.jiangzi"
        minSdk = 24
        targetSdk = 34
        versionCode = 4
        versionName = "2.2.0"
    }

    buildTypes {
        release {
            // Signed with debug key by default so personal APK installs directly on any Android phone without extra keystore setup
            signingConfig = signingConfigs.getByName("debug")
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.activity:activity-ktx:1.9.2")
    implementation("androidx.webkit:webkit:1.11.0")
}
