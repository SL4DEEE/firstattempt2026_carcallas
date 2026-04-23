#!/usr/bin/env python3
from PIL import Image
import os

# Create icons directory
os.makedirs('public/icons', exist_ok=True)

# Load the ADDU Nation logo
logo = Image.open('public/icons/addunation logo.png')

# Ensure the logo is in RGBA mode for transparency handling
if logo.mode != 'RGBA':
    logo = logo.convert('RGBA')

# Create 192x192 icon
icon_192 = Image.new('RGBA', (192, 192), (255, 255, 255, 0))
# Calculate position to center the logo
logo_192 = logo.resize((192, 192), Image.Resampling.LANCZOS)
icon_192.paste(logo_192, (0, 0), logo_192)
icon_192.save('public/icons/icon-192x192.png')
print('Created icon-192x192.png')

# Create 512x512 icon
icon_512 = Image.new('RGBA', (512, 512), (255, 255, 255, 0))
# Calculate position to center the logo
logo_512 = logo.resize((512, 512), Image.Resampling.LANCZOS)
icon_512.paste(logo_512, (0, 0), logo_512)
icon_512.save('public/icons/icon-512x512.png')
print('Created icon-512x512.png')

print('Icons created from ADDU Nation logo successfully!')
