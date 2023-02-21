function Feedback() {
    return (
        <section className="feedback">
            <h3 className="feedback__heading_sm">Свяжитесь с нами</h3>

            <h2 className="feedback__heading_md">Остались вопросы?</h2>

            <div className="feedback__buttons">
                <button className="feedback__button outline">Email</button>
                <button className="feedback__button">Написать</button>
            </div>

            <div className="feedback__term">
                Оставляя заявку Вы соглашаетесь с условиями на обработку
                персональных данных.
            </div>
        </section>
    );
}

export default Feedback;
