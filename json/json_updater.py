from os import listdir
from os.path import isfile, join
import json

path_custom = "CustomBattlers"
path_json = "json"
fusions = []

for element in listdir(path_custom):
    if isfile(join(path_custom, element)) and element.endswith(".png"):
        fusions.append(element[:-4])
        print(element[:-4])

jsonStr = json.dumps(fusions)
jsonFile = open(path_json + "/" +"sprites.json", "w")
jsonFile.write(jsonStr)
jsonFile.close()

print("DONE : ", len(fusions))