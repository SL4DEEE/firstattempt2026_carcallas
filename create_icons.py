#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont

# Create icons directory
import os
os.makedirs('public/icons', exist_ok=True)

# ADDU brand blue color
brand_color = '#003087'

# Create 192x192 icon
img_192 = Image.new('RGB', (192, 192), color=brand_color)
draw_192 = ImageDraw.Draw(img_192)
# Draw a simple circle to represent the icon
draw_192.ellipse([(30, 30), (162, 162)], fill='white', outline='white')
draw_192.text((70, 85), 'ADDU', fill=brand_color)
img_192.save('public/icons/icon-192x192.png')
print('Created icon-192x192.png')

# Create 512x512 icon
img_512 = Image.new('RGB', (512, 512), color=brand_color)
draw_512 = ImageDraw.Draw(img_512)
# Draw a simple circle to represent the icon
draw_512.ellipse([(50, 50), (462, 462)], fill='white', outline='white')
draw_512.text((220, 240), 'ADDU', fill=brand_color)
img_512.save('public/icons/icon-512x512.png')
print('Created icon-512x512.png')

print('All icons created successfully!')
