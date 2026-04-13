import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';

import 'map_screen_mobile.dart';
import 'map_screen_web.dart';

class MapScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      return MapScreenWeb();     // 🌐 WEB
    } else {
      return MapScreenMobile();  // 📱 MOBILE
    }
  }
}