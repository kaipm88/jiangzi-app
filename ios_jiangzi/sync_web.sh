#!/bin/zsh
set -e
SCRIPT_DIR="${0:A:h}"
SRC_DIR="$SCRIPT_DIR/../hanzi_web"
DEST_DIR="$SCRIPT_DIR/JiangZi/WebApp"

rm -rf "$DEST_DIR"
mkdir -p "$DEST_DIR"
cp -R "$SRC_DIR/"* "$DEST_DIR/"
cp "$SRC_DIR/icons/icon-1024.png" "$SCRIPT_DIR/JiangZi/Assets.xcassets/AppIcon.appiconset/AppIcon.png"
echo "✅ Đã đồng bộ hanzi_web vào ios_jiangzi/JiangZi/WebApp!"
