import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MapScreenMobile extends StatefulWidget {
  @override
  State<MapScreenMobile> createState() => _MapScreenMobileState();
}

class _MapScreenMobileState extends State<MapScreenMobile> {

  late final WebViewController controller;

  @override
  void initState() {
    super.initState();

    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..loadFlutterAsset('assets/map.html');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Campus Navigator")),
      body: WebViewWidget(controller: controller),
    );
  }
}