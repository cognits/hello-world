#!/usr/bin/python3
from datetime import datetime
import os

# date segment
now = datetime.now()
base_date = now.strftime("%y%m")
print(f'base date    : {base_date}')

# counter segment
all_tags     = os.popen(f"git tag").read().strip().splitlines()
current_tags = list(filter(lambda x: x.startswith(base_date), all_tags))
count        = len(current_tags)
print('current_tags :', str.join(', ', current_tags))
print('MAX          :', count)
print('NEXT         :', count+1)

# hash segment
short_hash = os.popen(f"git rev-parse --short HEAD").read()

print(f'{base_date}.{count+1}.{short_hash}', end='')
