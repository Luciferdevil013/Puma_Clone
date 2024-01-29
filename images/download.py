import requests


with open('data.txt','r') as file:
    with open('image_name.txt','a') as wtt:
        number = 000
        for i in file.readlines():
            image_name = f'{number}.webp'
            number += 1
            response = requests.get(i)
            if response.status_code == 200:
                with open(image_name, 'wb') as f:
                    f.write(response.content)
                    
            else:
                print(f"Failed to download image. Status code: {response.status_code}")
            wtt.write(image_name + '\n')


