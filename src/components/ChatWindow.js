/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import EmojiPicker from "emoji-picker-react";
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';


export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false);

    const [text, setText] = useState('');

    const handleEmojiClick = (e, emojiObject) => {
        console.log(emojiObject);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                    <div className="chatWindow--name">Rafael Favaro Dias</div>
                </div>

                <div className="chatWindow--headerbuttons">

                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>

                </div>

            </div>
            <div className="chatWindow--body">

            </div>

            <div className="chatWindow--emojiarea" style={{ height: emojiOpen ? '320px' : '0px' }}>
                <EmojiPicker   
                    onEmojiClick={handleEmojiClick}       
                    disableSkinTonePicker       
                />
            </div>

            <div className="chatWindow--footer">

                <div className="chatWindow--pre">
                    <div 
                        className="chatWindow--btn"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? '40px' : '0' }}
                    >
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div 
                        className="chatWindow--btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'  }}/>
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        className="chatWindow--input" 
                        placeholder="Digite uma menssagem" 
                        type="text" 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">
                    <div className="chatWindow--btn">
                        <MicIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                </div>


            </div>
        </div>
    );
}
