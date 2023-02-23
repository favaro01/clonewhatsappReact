import React from "react";
import './ChatListItem.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active ? 'active': ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">
                        {data.title}
                    </div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Quem num gosta di mé, boa gentis num é.

Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Mé faiz elementum girarzis, nisi eros vermeio.

In elementis mé pra quem é amistosis quis leo.Mé faiz elementum girarzis, nisi eros vermeio.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Interagi no mé, cursus quis, vehicula ac nisi.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Não sou faixa preta cumpadi, sou preto inteiris, inteiris.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}