import './CardImage.css';

export const CardImage = (props) => {

    const { titleImage, descriptionImage, urlImage } = props;

    return (
        <figure className="CardImage">
            <img className="CardImage-Img" src={urlImage} alt="imagen" />
            <figcaption className="CardImage-Title">{titleImage}</figcaption>
            <p>{descriptionImage}</p>
        </figure>
    )
}