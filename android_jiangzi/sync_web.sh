#!/bin/zsh
set -e
SCRIPT_DIR="${0:A:h}"
SRC_DIR="$SCRIPT_DIR/../hanzi_web"
ASSETS_WWW="$SCRIPT_DIR/app/src/main/assets/www"
RES_DIR="$SCRIPT_DIR/app/src/main/res"

rm -rf "$ASSETS_WWW"
mkdir -p "$ASSETS_WWW"
cp -R "$SRC_DIR/"* "$ASSETS_WWW/"

# Generate crisp Android launcher icons across all densities
for spec in "mdpi:48" "hdpi:72" "xhdpi:96" "xxhdpi:144" "xxxhdpi:192"; do
  density="${spec%%:*}"
  size="${spec##*:}"
  mkdir -p "$RES_DIR/mipmap-$density"
  sips -z "$size" "$size" "$SRC_DIR/icons/icon-1024.png" --out "$RES_DIR/mipmap-$density/ic_launcher.png" >/dev/null
done

echo "✅ Đã đồng bộ hanzi_web và bộ Icon vào android_jiangzi!"
