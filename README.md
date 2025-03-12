![cryptalk](/screenshot.png)

![Node.js CI](https://github.com/runbgp/cryptalk/actions/workflows/node.js.yml/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b96b4b6aa6df417aafd3d823a722e30f)](https://app.codacy.com/gh/runbgp/cryptalk/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

# Cryptalk

**Cryptalk** is a client-side (E2EE) encrypted instant chat application built on HTML5 and Node.js. 

This project is a fork of [Hexagon's Cryptalk](https://github.com/Hexagon/cryptalk) and is actively maintained. It has been updated to support Node.js 22 and includes the latest packages.

## Features

*   Client side AES-256-CBC encryption/decryption (the server is just a messenger)
*   256 bit key derived from your passphrase using PBKDF2
*   Messages torched after a configurable delay (default is 600s)
*   Simple setup using Docker or Heroku
*   Notification sounds (mutable)
*   Native popup notifications
*   Configurable page title
*   Nicknames (optional)
*   Quick-links using http://server/#Room:Passphrase (optional and insecure)

## Deployment

### Docker

To run latest cryptalk with Docker, exposed on host port 80, simply run the following command to pull it from GitHub Container registry:

```bash
sudo docker run -d --restart=unless-stopped -p 80:8080 ghcr.io/runbgp/cryptalk
```

### Heroku 

Click the button below

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/runbgp/cryptalk)

### Docker build

Clone this repo, enter the new directory.

Build the image
```bash
docker build . --tag="runbgp/cryptalk"
```

Run container, enable start on boot, expose to port 80 at host
```bash
sudo docker run -d --restart=always -p 80:8080 runbgp/cryptalk
```

Browse to ```http://<ip-of-server>/```

Done!

## Usage

```

Available commands:

Client:                                                    			
	/key		StrongPassphrase	Sets encryption key                 
	/nick		NickName			Sets an optional nick                   
	/mute  							Audio on									
	/unmute  						Audio off									
	/clear							Clear on-screen buffer                      
	/help							This                                        
	/title							Set your local page title					
	/torch		AfterSeconds		Console messages are torched  		
									after this amount of seconds 					
									(default 600).									

Room:                                                    				
	/join		RoomId				Join a room	                            
	/leave							Leave the room                              
	/count							Count participants                          

Host:  		                                                                		
	/connect						Connect to host               	
	/disconnect						Disconnect from host    			        

You can select any of the five last commands/messages with up/down key.

Due to security reasons, /key command is not saved, and command         
history is  automatically cleared after one minute of inactivity.       

It is highly recommended to use incognito mode while chatting, 
to prevent browsers from keeping history or cache.            


```

## Development

Install node.js (development requires >=18.0), exact procedure is dependant on platform and distribution.

Clone this repo
```bash
git clone https://github.com/runbgp/cryptalk.git
cd cryptalk
```

Pull dependencies from npm
```bash
npm install
```

Start the server
```bash
npm run start
```

Browse to ```http://localhost:8080```

To work on the JavaScript, edit the code in ```client/source/```. To test the changes, first run ```npm run build``` to lint, build and minify the code. Then restart the server.
