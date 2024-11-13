import './info.css'; 


const Info = () => {
    return (
        <section className="info">
            <div className="info__items">
                <div className="info__part">
                    <h3 className="info__title">NEXT GAME</h3>
                    <p className="info__paragraph">
                        Liverpool : Chelsea<br />
                        20.10.2024<br />
                        18:30<br />
                        Anfield
                    </p>
                </div>
                <div className="info__part">
                    <h3 className="info__title">Ticket Price</h3>
                    <p className="info__paragraph">
                        Sector A : 410 dollars<br />
                        Sector B : 280 dollars<br />
                        Sector C : 150 dollars<br />
                        VIP : 700 dollars
                    </p>
                </div>
                <div className="info__part">
                    <h3 className="info__title">Last Games</h3>
                    <p className="info__paragraph">
                        Crystal Palace 0:1 Liverpool<br />
                        Liverpool 2:0 Bologna<br />
                        Wolves 1:2 Liverpool<br />
                        Liverpool 5:1 West Ham
                    </p>
                </div>
            </div>
            
        </section>
    );
}

export default Info;



