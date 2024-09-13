import './rodape.css'

const Rodape = () => {
    return (
        <footer className='banner-rodape'>
            <div className='redes-sociais'>
                <img src='/imagens/fb.png' alt='Logo facebook' />
                <img src='/imagens/tw.png' alt='Logo twitter' />
                <img src='/imagens/ig.png' alt='Logo instagram' />
            </div>
            <img src='/imagens/logo.png' alt='' />
            <p className='desenvolvido-por'>Desenvolvido por <a href='https://github.com/edsoncesarxm' target='blank'>@Edson Cesar</a></p>
        </footer>
    )
}

export default Rodape