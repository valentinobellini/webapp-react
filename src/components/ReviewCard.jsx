export default function ReviewCard() {

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">
                    testo della recensione
                </p>
                <strong>
                    Vote: voto recensione
                </strong>
                <address>
                    <i>
                        By nome del recensore
                    </i>
                </address>
            </div>
        </div>

    )
}