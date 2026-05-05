import './Title.css'

type TTitle = {
    textContent: string
}

function Title({textContent}:TTitle) {
    return ( 
        <>
        <h1 className='title'>{textContent}</h1>
        </>
    );
}

export default Title;