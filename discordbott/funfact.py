import discord
import os
from dotenv import load_dotenv
load_dotenv()
import requests
import json
limit = 1

TOKEN = os.getenv('TOKEN')
client = discord.Client()
URL = "	https://api.api-ninjas.com/v1/facts"
API_KEY = os.getenv('API_KEY')

def get_ff():
    response = requests.get(URL, headers={'X-Api-Key': API_KEY})
    if response.status_code == requests.codes.ok:
        return(response.text)
    else:
        print("error")


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!ready'):
        await message.channel.send("Ready to provide some fun facts!")

    if message.content.startswith('!fact'):
        fact = get_ff()
        await message.channel.send(fact)
    


client.run(TOKEN)