import discord
import os
from dotenv import load_dotenv
load_dotenv()
import requests
import json
from types import SimpleNamespace
import random 

TOKEN = os.getenv('TOKEN')
client = discord.Client()
URL = "	https://api.api-ninjas.com/v1/facts"
API_KEY = os.getenv('API_KEY')


favorite_facts = ["The human body literally glows", "The moon has moon quakes", "Copper knobs are self-disinfecting", "Stars only twinkle due to our atmosphere", "Kids ask 300 questions a day on average", "The first airplane flew on December 17, 1903"]

def get_ff():
    response = requests.get(URL, headers={'X-Api-Key': API_KEY})
    if response.status_code == requests.codes.ok:
        json_data = json.loads(response.text, object_hook=lambda d: SimpleNamespace(**d))
        return(json_data[0].fact)
    else:
        print("error")


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!favorite'):
        await message.channel.send(random.choice(favorite_facts))

    if message.content.startswith('!fact'):
        fact = get_ff()
        await message.channel.send(fact)
    

    


client.run(TOKEN)