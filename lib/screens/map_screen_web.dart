import 'package:flutter/material.dart';

// ✅ Correct import for web
// ignore: avoid_web_libraries_in_flutter
import 'dart:ui_web' as ui;

// ignore: avoid_web_libraries_in_flutter
import 'dart:html';

class MapScreenWeb extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    ui.platformViewRegistry.registerViewFactory(
      'leaflet-map',
      (int viewId) {
        final iframe = IFrameElement()
          ..src = 'assets/map.html'
          ..style.border = 'none';
        return iframe;
      },
    );

    return Scaffold(
      appBar: AppBar(title: const Text("Campus Navigator")),
      body: const HtmlElementView(viewType: 'leaflet-map'),
    );
  }
}