import React from 'react';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

const cookies = new Cookies();

const apiKey = '9rejhzgqss6m';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);


if(authToken) {
	client.connectUser(
		{
		id: set('userId'),
        name: set('username'),
        fullName: set('fullName'),
        image: set('avatarURL'),
        hashedPassword: set('hashedPassword'),
		phoneNumber: set('phoneNumber'),
		},
		authToken
	)
}

const App = () => {

	if(!authToken) return <Auth />
	
	return (
    	<div className='app__wrapper'>
			<Chat client={client} theme='team light'>
				<ChannelListContainer 
					

				/>

				<ChannelContainer 

				/>
			</Chat>
    	</div>
  	);
}

export default App;