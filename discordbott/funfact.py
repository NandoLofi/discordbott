import discord
import os
from dotenv import load_dotenv
load_dotenv()
import requests
import json
limit = 1

TOKEN = os.getenv('TOKEN')
client = discord.Client()
URL = "https://zenquotes.io/api/random/"
API_KEY = os.getenv('API_KEY')

def get_ff():
    response = requests.get(URL)
    json_data = json.loads(response.text)
    quote = json_data[0]['q']
    return(quote)
    


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!ready'):
        await message.channel.send("Ready to provide some fun facts!")

    if message.content.startswith('!quote'):
        quote = get_ff()
        await message.channel.send(quote)
    


client.run(TOKEN)