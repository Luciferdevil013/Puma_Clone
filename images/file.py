with open('image_name.txt','r') as f:
    with open('filename.txt','a') as files:
        for i in f.readlines():
            files.write('./images/' + i)
