import React from 'react';

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Pokedex',
                    subTitle: 'Catch your Pokemon',
                    imgSrc: 'http://www.cartoonbucket.com/wp-content/uploads/2015/05/Stylish-Pikachu-Image-600x375.jpg',
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Star-Wars',
                    subTitle: 'Find your character',
                    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg',
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Tic Tac Toe',
                    subTitle: 'The famous game',
                    imgSrc: 'https://image.shutterstock.com/image-vector/tic-tac-toe-variations-table-260nw-381821860.jpg',
                    link: 'https://github.com/rabensour/JS.bootcamp/tree/master/Week%204%20(Advanced%20JavaScript)/5.2%20TicTacToe%20(MP)',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Robot-Friend',
                    subTitle: 'Search your friend',
                    imgSrc: 'https://user-images.githubusercontent.com/38971399/50723770-e48e7600-10d9-11e9-84c0-c4472ccd5676.png',
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Stopwatch',
                    subTitle: 'Evaluate your time',
                    imgSrc: 'http://www.fondsecran.eu/a/get_photo/193565/1920/1200.jpg',
                    link: 'https://github.com/rabensour/JS.bootcamp/tree/master/Week%203%20(DOM-Hackaton)/4-5%20Stopwatch%20(Hackaton)',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Calculator',
                    subTitle: 'Free Online Calculator',
                    imgSrc: 'https://img.freepik.com/vecteurs-libre/calculatrice_1284-3534.jpg?size=338&ext=jpg&ga=GA1.2.797769589.1599228773',
                    link: 'https://github.com/rabensour/JS.bootcamp/tree/master/Week%202%20(JavaScript)/5.%20Calculator%20(XP)',
                    selected: false
                },
            ]
        }
    }
    
    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                 {this.makeItems(this.state.items)}
             </Row>
            </Container>
        );
    }

}

export default Carousel;