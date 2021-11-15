import easyocr
reader = easyocr.Reader(['ch_sim','en'])
result = reader.readtext('test.jpg')
print(result)

