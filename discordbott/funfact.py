import discord
import os
from dotenv import load_dotenv
load_dotenv()

TOKEN = os.getenv('TOKEN')
client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!taco'):
        await message.channel.send("Get Shit On")

    if message.content.startswith('!admire'):
        await message.channel.send("huh")

    if message.content.startswith('!roddy'):
        await message.channel.send("Where's Bolt?")

client.run(TOKEN)