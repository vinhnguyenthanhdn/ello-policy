#!/bin/bash
# Download Be Vietnam Pro fonts from Google Fonts

echo "Downloading Be Vietnam Pro fonts..."

# Regular (400)
curl -sL "https://fonts.gstatic.com/s/bevietnampro/v10/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-Regular.woff2

# SemiBold (600)
curl -sL "https://fonts.gstatic.com/s/bevietnampro/v10/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-SemiBold.woff2

# Bold (700)
curl -sL "https://fonts.gstatic.com/s/bevietnampro/v10/jVyl-InPjOwkMPo-_-vLCfIEqO7x7Q.woff2" -o BeVietnamPro-Bold.woff2

echo "Done! Fonts downloaded to $(pwd)"
ls -lh *.woff2
