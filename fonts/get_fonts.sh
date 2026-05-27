#!/bin/bash

# Get the actual woff2 URLs from Google Fonts Be Vietnam Pro
# Be Vietnam Pro has these weights: 400, 500, 600, 700

# Regular (400) - from Google Fonts CSS
curl -sL "https://fonts.gstatic.com/s/bevietnampro/v10/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-Regular.woff2

# Try alternative URL pattern
if [ $(stat -f%z BeVietnamPro-Regular.woff2 2>/dev/null || echo 0) -lt 1000 ]; then
  rm -f *.woff2
  # Use the v14 version
  curl -sL "https://fonts.gstatic.com/s/bevietnampro/v14/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-Regular.woff2
  curl -sL "https://fonts.gstatic.com/s/bevietnampro/v14/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-SemiBold.woff2
  curl -sL "https://fonts.gstatic.com/s/bevietnampro/v14/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-Bold.woff2
fi

ls -lh *.woff2
