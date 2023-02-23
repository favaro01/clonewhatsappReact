import React, {useState, useEffect} from "react";
import './App.css';

import ChatlLstItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

	const [Chatlist, setChatList] = useState([
		{chatId: 1, title: 'Fulano de tal', image:'data:image/png;base64,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'}, 
		{chatId: 2, title: 'Jorge O menino', image:'https://www.w3schools.com/howto/img_avatar.png'}, 
		{chatId: 3, title: 'Benjoy', image:'https://www.w3schools.com/howto/img_avatar.png'}, 
		{chatId: 4, title: 'Amore Miu', image:'https://www.w3schools.com/howto/img_avatar.png'}, 
	]);
	const [activeChat, setActiveChat] = useState({});

	return (
		<div className="app-window">
			<div className="sidebar">
				<header>
					<img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
					<div className="header--buttons">
						<div className="header--btn">
							<DonutLargeIcon style={{color: '#919191'}}/>
						</div>
						<div className="header--btn">
							<ChatIcon style={{color: '#919191'}}/>
							
						</div>
						<div className="header--btn">
							<MoreVertIcon style={{color: '#919191'}}/>
						</div>	
					</div>
				</header>
				<div className="search">
					<div className="search--input">
						<SearchIcon fontSize="small" style={{color: '#919191'}}/>
						<input type="search" placeholder="Procurar ou começar uma nova conversa"/>
					</div>
				</div>
				<div className="chatlist">
					{Chatlist.map((item, key) => (
						<ChatlLstItem 
							key={key}
							data={item}
							active={activeChat.chatId === Chatlist[key].chatId}
							onClick={()=>setActiveChat(Chatlist[key])}
						/>
					))}
				</div>
			</div>
			<div className="contentarea">
				{/* {activeChat.chatId !== undefined ?  
					<ChatWindow/> : <ChatIntro/>
				} */}
				{activeChat.chatId !== undefined && <ChatWindow/>}		
				{activeChat.chatId === undefined && <ChatIntro/>}				
			</div>
		</div>
	);
}