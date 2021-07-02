from os import listdir
from os.path import isfile, join
import json

mypath = "CustomBattlers"
fusions = []

for element in listdir(mypath):
    if isfile(join(mypath, element)) and element.endswith(".png"):
        fusions.append(element[:-4])
        print(element[:-4])

jsonStr = json.dumps(fusions)
jsonFile = open(mypath + "/" +"sprites.json", "w")
jsonFile.write(jsonStr)
jsonFile.close()

print("DONE : ", len(fusions))