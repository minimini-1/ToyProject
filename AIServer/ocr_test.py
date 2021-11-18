import easyocr
import cv2
import numpy as np
import random
import matplotlib.pyplot as plt
from PIL import ImageFont, ImageDraw, Image

reader = easyocr.Reader(['en']) 
result = reader.readtext('C:/Users/anhis/Desktop/VSCodeProjects/PaperReadingHelper/AIServer/test.png')
img = cv2.imread('C:/Users/anhis/Desktop/VSCodeProjects/PaperReadingHelper/AIServer/test.png')

img = Image.fromarray(img)
font = ImageFont.truetype("fonts/HMKMRHD.TTF", 20)
draw = ImageDraw.Draw(img)

np.random.seed(42)
COLORS = np.random.randint(0, 255, size=(255,3), dtype="uint8")

for i in result:
    x = i[0][0][0]
    y = i[0][0][1]
    w = i[0][1][0] - i[0][0][0]
    h = i[0][2][1] - i[0][1][1]

    color_idx = 180
    color = [int(c) for c in COLORS[color_idx]]

    draw.rectangle(((x, y), (x+w, y+h)), outline=tuple(color), width=2)

plt.imshow(img)
plt.show()
plt.close()