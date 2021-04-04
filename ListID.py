import requests
import json

# 140
# 158
# 200

for id in range(1, 252):
    
    url = "https://pokeapi.co/api/v2/pokemon/" + str(id)
    response = requests.get(url)
    try:
        name = response.json()["name"]
        line = ",[\"" + name + "\"," + str(id) + "]"
    except :
        url = "https://pokeapi.co/api/v2/pokemon/" + str(id) + "/"
        response = requests.get(url)
        try: 
            name = response.json()["name"]
            line = ",[\"" + name + "\"," + str(id) + "]"
        except:
            line ="#" + str(id) + "#"

    print(line)