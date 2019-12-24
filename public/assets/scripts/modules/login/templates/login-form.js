export const html = () => {
    return `
    <div class="auth-fullscreen">
        <div class="auth-fullscreen__container">
            <div class="auth-fullscreen__title">Войдите в чат</div>
            <form class="auth-form" name="authorization">
                <input class="auth-form__field" type="text" name="name" placeholder="Ваш ник..."/>
                <button class="auth-form__btn-send" type="submit"/>Отправить</button>
            </form>
        </div>
    </div>`
}